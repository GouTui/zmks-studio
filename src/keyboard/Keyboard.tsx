import React, {
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Request } from "@zmkfirmware/zmk-studio-ts-client";
import { call_rpc, format_rpc_error, unwrap_rpc_response } from "../rpc/logging";
import {
  PhysicalLayout,
  Keymap,
  SetLayerBindingResponse,
  SetLayerPropsResponse,
  BehaviorBinding,
  Layer,
} from "@zmkfirmware/zmk-studio-ts-client/keymap";
import type { GetBehaviorDetailsResponse } from "@zmkfirmware/zmk-studio-ts-client/behaviors";
import type {
  GetLayerLedColorsResponse,
  RgbUnderglowState,
  BacklightState,
  CapsLockIndicatorState,
  ConnectionIndicatorState,
  LowBatteryIndicatorState,
} from "@zmkfirmware/zmk-studio-ts-client/lighting";

import { LayerPicker } from "./LayerPicker";
import { PhysicalLayoutPicker } from "./PhysicalLayoutPicker";
import { Keymap as KeymapComp } from "./Keymap";
import { useConnectedDeviceData } from "../rpc/useConnectedDeviceData";
import { ConnectionContext } from "../rpc/ConnectionContext";
import { UndoRedoContext } from "../undoRedo";
import { BehaviorBindingPicker } from "../behaviors/BehaviorBindingPicker";
import { produce } from "immer";
import { LockStateContext } from "../rpc/LockStateContext";
import { LockState, PowerSettingsState } from "@zmkfirmware/zmk-studio-ts-client/core";
import { deserializeLayoutZoom, LayoutZoom } from "./PhysicalLayout";
import { useLocalStorageState } from "../misc/useLocalStorageState";
import { useTranslation } from "react-i18next";
import IdlePanel from "./IdlePanel";
import { OtherPanel } from "./OtherPanel";
import LightingControl from "../lighting/LightingControl";
import LayerLedMap from "../lighting/LayerLedMap";
import { useSub } from "../usePubSub";
import { Info, Layers3, MousePointerClick, Palette, SlidersHorizontal } from "lucide-react";

type BehaviorMap = Record<number, GetBehaviorDetailsResponse>;

function summarizePowerResponse(response: any) {
  const topLevelKeys = Object.entries(response)
    .filter(([key, value]) => key !== "requestId" && value !== undefined)
    .map(([key]) => key);
  const metaKeys = Object.entries(response.meta ?? {})
    .filter(([, value]) => value !== undefined)
    .map(([key]) => key);
  const coreKeys = Object.entries(response.core ?? {})
    .filter(([, value]) => value !== undefined)
    .map(([key]) => key);

  return JSON.stringify(
    {
      requestId: response.requestId,
      topLevelKeys,
      metaKeys,
      coreKeys,
      core: response.core ?? null,
      meta: response.meta ?? null,
    },
    null,
    2
  );
}

export interface IndicatorPositionDraft {
  keyPosition: number;
  layerId: number;
}

function useBehaviors(): [BehaviorMap, boolean] {
  let connection = useContext(ConnectionContext);
  let lockState = useContext(LockStateContext);

  const [behaviors, setBehaviors] = useState<BehaviorMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (
      !connection.conn ||
      lockState != LockState.ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED
    ) {
      setBehaviors({});
      setLoaded(false);
      return;
    }

    async function startRequest() {
      setBehaviors({});
      setLoaded(false);

      if (!connection.conn) {
        return;
      }

      let get_behaviors: Request = {
        behaviors: { listAllBehaviors: true },
        requestId: 0,
      };

      const behavior_map: BehaviorMap = {};
      try {
        const behavior_list = await call_rpc(connection.conn, get_behaviors);
        for (let behaviorId of behavior_list.behaviors?.listAllBehaviors
          ?.behaviors || []) {
          if (ignore) {
            break;
          }
          let details_req = {
            behaviors: { getBehaviorDetails: { behaviorId } },
            requestId: 0,
          };
          try {
            const behavior_details = await call_rpc(connection.conn, details_req);
            const dets: GetBehaviorDetailsResponse | undefined =
              behavior_details?.behaviors?.getBehaviorDetails;

            if (dets) {
              behavior_map[dets.id] = dets;
            }
          } catch (e) {
            console.error("Failed to load behavior", behaviorId, e);
          }
        }
      } catch (e) {
        console.error("Failed to list behaviors", e);
      }

      if (!ignore) {
        setBehaviors(behavior_map);
        setLoaded(true);
      }
    }

    let ignore = false;
    startRequest();

    return () => {
      ignore = true;
    };
  }, [connection, lockState]);

  return [behaviors, loaded];
}

function useLayouts(): [
  PhysicalLayout[] | undefined,
  React.Dispatch<SetStateAction<PhysicalLayout[] | undefined>>,
  number,
  React.Dispatch<SetStateAction<number>>
] {
  let connection = useContext(ConnectionContext);
  let lockState = useContext(LockStateContext);

  const [layouts, setLayouts] = useState<PhysicalLayout[] | undefined>(
    undefined
  );
  const [selectedPhysicalLayoutIndex, setSelectedPhysicalLayoutIndex] =
    useState<number>(0);

  useEffect(() => {
    if (
      !connection.conn ||
      lockState != LockState.ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED
    ) {
      setLayouts(undefined);
      return;
    }

    async function startRequest() {
      setLayouts(undefined);

      if (!connection.conn) {
        return;
      }

      let response = await call_rpc(connection.conn, {
        keymap: { getPhysicalLayouts: true },
      });

      if (!ignore) {
        setLayouts(response?.keymap?.getPhysicalLayouts?.layouts);
        setSelectedPhysicalLayoutIndex(
          response?.keymap?.getPhysicalLayouts?.activeLayoutIndex || 0
        );
      }
    }

    let ignore = false;
    startRequest();

    return () => {
      ignore = true;
    };
  }, [connection, lockState]);

  return [
    layouts,
    setLayouts,
    selectedPhysicalLayoutIndex,
    setSelectedPhysicalLayoutIndex,
  ];
}

export interface KeyboardProps {
  onReady?: (ready: boolean) => void;
  onProgress?: (value: number) => void;
  onLightingChanged?: () => void;
}

export default function Keyboard({ onReady, onProgress, onLightingChanged }: KeyboardProps) {
  const [
    layouts,
    _setLayouts,
    selectedPhysicalLayoutIndex,
    setSelectedPhysicalLayoutIndex,
  ] = useLayouts();
  const { t } = useTranslation();
  const [keymap, setKeymap] = useConnectedDeviceData<Keymap>(
    { keymap: { getKeymap: true } },
    (keymap) => {
      console.log("Got the keymap!");
      return keymap?.keymap?.getKeymap;
    },
    true
  );

  const [keymapScale, setKeymapScale] = useLocalStorageState<LayoutZoom>("keymapScale", "auto", {
    deserialize: deserializeLayoutZoom,
  });

  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const [selectedKeyPosition, setSelectedKeyPosition] = useState<
    number | undefined
  >(undefined);
  const [bottomTab, setBottomTab] = useState<"keymap" | "lighting" | "other">("keymap");
  const [behaviors, behaviorsLoaded] = useBehaviors();

  const [ledData, setLedData] = useState<GetLayerLedColorsResponse | null>(null);
  const [selectedLedPositions, setSelectedLedPositions] = useState<Set<number>>(new Set());
  const [hasLayerLed, setHasLayerLed] = useState(false);

  const [rgbState, setRgbState] = useState<RgbUnderglowState | null>(null);
  const [backlightState, setBacklightState] = useState<BacklightState | null>(null);
  const [capsLockState, setCapsLockState] = useState<CapsLockIndicatorState | null>(null);
  const [connectionState, setConnectionState] = useState<ConnectionIndicatorState | null>(null);
  const [lowBatteryState, setLowBatteryState] = useState<LowBatteryIndicatorState | null>(null);
  const [powerSettings, setPowerSettings] = useState<PowerSettingsState | null>(null);
  const [hasRgb, setHasRgb] = useState(false);
  const [hasBacklight, setHasBacklight] = useState(false);
  const [hasCapsLock, setHasCapsLock] = useState(false);
  const [hasConnection, setHasConnection] = useState(false);
  const [hasLowBattery, setHasLowBattery] = useState(false);
  const [powerLoadError, setPowerLoadError] = useState<string | null>(null);
  const [powerDebugInfo, setPowerDebugInfo] = useState<string | null>(null);
  const [lightingLoaded, setLightingLoaded] = useState(false);
  const [powerLoaded, setPowerLoaded] = useState(false);
  const [indicatorPositionDraft, setIndicatorPositionDraft] = useState<IndicatorPositionDraft | undefined>(undefined);
  const [lightingSource, setLightingSource] = useState<string>("rgb");

  const handleIndicatorPick = useCallback(
    (positions: Set<number>) => {
      if (
        lightingSource !== "capslock" &&
        lightingSource !== "connection" &&
        lightingSource !== "lowBattery"
      ) {
        return false;
      }

      const first = positions.values().next().value;
      if (first !== undefined) {
        setIndicatorPositionDraft({ keyPosition: first, layerId: 0 });
      }
      return true;
    },
    [lightingSource]
  );

  const handleLightingSourceChanged = useCallback((source: string) => {
    setLightingSource(source);
    setIndicatorPositionDraft(undefined);
    setSelectedLedPositions(new Set());
  }, []);

  const indicatorPositions = useMemo(() => {
    const set = new Set<number>();
    if (indicatorPositionDraft !== undefined) {
      set.add(indicatorPositionDraft.keyPosition);
    } else if (lightingSource === "capslock" && capsLockState?.enabled && capsLockState.keyPosition !== undefined) {
      set.add(capsLockState.keyPosition);
    } else if (lightingSource === "connection" && connectionState?.enabled && connectionState.keyPosition !== undefined) {
      set.add(connectionState.keyPosition);
    } else if (lightingSource === "lowBattery" && lowBatteryState?.enabled && lowBatteryState.keyPosition !== undefined) {
      set.add(lowBatteryState.keyPosition);
    }
    return set;
  }, [
    lightingSource,
    capsLockState?.enabled,
    capsLockState?.keyPosition,
    connectionState?.enabled,
    connectionState?.keyPosition,
    indicatorPositionDraft,
    lowBatteryState?.enabled,
    lowBatteryState?.keyPosition,
  ]);

  const conn = useContext(ConnectionContext);
  const lockState = useContext(LockStateContext);
  const layoutFitRef = useRef<HTMLDivElement>(null);
  const undoRedo = useContext(UndoRedoContext);
  const isUnlocked = lockState === LockState.ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED;

  useEffect(() => {
    setSelectedLayerIndex(0);
    setSelectedKeyPosition(undefined);
    setSelectedLedPositions(new Set());
    setLedData(null);
    setHasLayerLed(false);
    setRgbState(null);
    setBacklightState(null);
    setCapsLockState(null);
    setConnectionState(null);
    setLowBatteryState(null);
    setPowerSettings(null);
    setIndicatorPositionDraft(undefined);
    setHasRgb(false);
    setHasBacklight(false);
    setHasCapsLock(false);
    setHasConnection(false);
    setHasLowBattery(false);
    setPowerLoadError(null);
    setPowerDebugInfo(null);
    setLightingLoaded(false);
    setPowerLoaded(false);
  }, [conn]);

  const fetchAllLighting = useCallback(async (ignore?: { current: boolean }) => {
    if (!conn.conn) return;

    const [ledResp, rgbResp, blResp, capsResp, connResp, lowBatteryResp] = await Promise.allSettled([
      call_rpc(conn.conn, { lighting: { getLayerLedColors: true } }),
      call_rpc(conn.conn, { lighting: { getRgbUnderglowState: true } }),
      call_rpc(conn.conn, { lighting: { getBacklightState: true } }),
      call_rpc(conn.conn, { lighting: { getCapsLockIndicator: true } }),
      call_rpc(conn.conn, { lighting: { getConnectionIndicator: true } }),
      call_rpc(conn.conn, { lighting: { getLowBatteryIndicator: true } }),
    ]);

    if (ignore?.current) return;

    if (ledResp.status === "fulfilled" && ledResp.value.lighting?.getLayerLedColors) {
      setLedData(ledResp.value.lighting.getLayerLedColors);
      setHasLayerLed(true);
    }
    if (rgbResp.status === "fulfilled" && rgbResp.value.lighting?.getRgbUnderglowState) {
      setRgbState(rgbResp.value.lighting.getRgbUnderglowState);
      setHasRgb(true);
    }
    if (blResp.status === "fulfilled" && blResp.value.lighting?.getBacklightState) {
      setBacklightState(blResp.value.lighting.getBacklightState);
      setHasBacklight(true);
    }
    if (capsResp.status === "fulfilled" && capsResp.value.lighting?.getCapsLockIndicator) {
      setCapsLockState(capsResp.value.lighting.getCapsLockIndicator);
      setHasCapsLock(true);
    }
    if (connResp.status === "fulfilled" && connResp.value.lighting?.getConnectionIndicator) {
      setConnectionState(connResp.value.lighting.getConnectionIndicator);
      setHasConnection(true);
    }
    if (lowBatteryResp.status === "fulfilled" && lowBatteryResp.value.lighting?.getLowBatteryIndicator) {
      setLowBatteryState(
        lowBatteryResp.value.lighting.getLowBatteryIndicator as LowBatteryIndicatorState
      );
      setHasLowBattery(true);
    }
    setLightingLoaded(true);
  }, [conn]);

  const fetchPowerSettings = useCallback(async (ignore?: { current: boolean }) => {
    if (!conn.conn) return;

    try {
      setPowerLoadError(null);
      const response = unwrap_rpc_response(
        await call_rpc(conn.conn, { core: { getPowerSettings: true } })
      );
      if (ignore?.current) {
        return;
      }

      setPowerDebugInfo(summarizePowerResponse(response));

      if (response.core?.getPowerSettings !== undefined) {
        setPowerSettings(response.core.getPowerSettings);
        setPowerLoadError(null);
      } else {
        setPowerSettings(null);
        setPowerLoadError("MISSING_FIELD");
      }
    } catch (e) {
      console.error("Failed to load power settings", e);
      if (!ignore?.current) {
        setPowerSettings(null);
        setPowerLoadError(format_rpc_error(e));
        setPowerDebugInfo(null);
      }
    } finally {
      if (!ignore?.current) {
        setPowerLoaded(true);
      }
    }
  }, [conn]);

  useEffect(() => {
    setLightingLoaded(false);

    if (!conn.conn || !isUnlocked) {
      return;
    }

    const ignore = { current: false };
    fetchAllLighting(ignore);
    return () => { ignore.current = true; };
  }, [conn, isUnlocked, fetchAllLighting]);

  useEffect(() => {
    setPowerLoaded(false);

    if (!conn.conn || !isUnlocked) {
      return;
    }

    const ignore = { current: false };
    fetchPowerSettings(ignore);
    return () => {
      ignore.current = true;
    };
  }, [conn, isUnlocked, fetchPowerSettings]);

  useEffect(() => {
    if (!conn.conn || !isUnlocked) {
      onReady?.(false);
      onProgress?.(0);
      return;
    }

    const stages = [!!keymap, !!layouts, behaviorsLoaded, lightingLoaded, powerLoaded];
    const loadedCount = stages.filter(Boolean).length;
    onProgress?.(loadedCount / stages.length);

    const ready = loadedCount === stages.length;
    onReady?.(ready);
  }, [behaviorsLoaded, conn.conn, isUnlocked, keymap, layouts, lightingLoaded, onReady, onProgress]);

  // Re-fetch when user opens the lighting tab
  useEffect(() => {
    if (!conn.conn || !isUnlocked || bottomTab !== "lighting") {
      return;
    }
    const ignore = { current: false };
    fetchAllLighting(ignore);
    return () => { ignore.current = true; };
  }, [bottomTab]); // eslint-disable-line react-hooks/exhaustive-deps

  // Hot-update via notifications (always active, not just on lighting tab)
  useSub(
    "rpc_notification.lighting.rgbUnderglowStateChanged",
    (state: RgbUnderglowState) => setRgbState(state)
  );
  useSub(
    "rpc_notification.lighting.backlightStateChanged",
    (state: BacklightState) => setBacklightState(state)
  );

  const handleLayerLedColorChanged = useCallback(
    async (positions: number[], color: number) => {
      if (!conn.conn || !keymap || !ledData) return;
      const layerIdx = selectedLayerIndex;
      const layerId = keymap.layers[layerIdx]?.id;
      if (layerId === undefined) return;

      setLedData(produce((draft) => {
        if (!draft) return;
        let layerConfig = draft.layers.find((l) => l.layerId === layerId);
        if (!layerConfig) {
          layerConfig = { layerId, bindings: [] };
          draft.layers.push(layerConfig);
        }
        for (const pos of positions) {
          const existing = layerConfig.bindings.find((b) => b.keyPosition === pos);
          if (existing) {
            existing.color = color;
          } else {
            layerConfig.bindings.push({ keyPosition: pos, color });
          }
        }
      }));

      for (const pos of positions) {
        try {
          await call_rpc(conn.conn, {
            lighting: { setLayerLedBinding: { layerId, keyPosition: pos, color } },
          });
          onLightingChanged?.();
        } catch (e) {
          console.error("Failed to set layer LED binding", e);
        }
      }
    },
    [conn, keymap, ledData, onLightingChanged, selectedLayerIndex]
  );

  const handleLayerLedEnabledChanged = useCallback(
    async (enabled: boolean) => {
      if (!conn.conn) return;
      setLedData(produce((draft) => {
        if (draft) draft.enabled = enabled;
      }));
      try {
        const resp = await call_rpc(conn.conn, {
          lighting: { setLayerLedEnabled: { enabled } },
        });
        if (resp.lighting?.setLayerLedEnabled) {
          onLightingChanged?.();
        }
      } catch (e) {
        console.error("Failed to set layer LED enabled", e);
      }
    },
    [conn, onLightingChanged]
  );

  useEffect(() => {
    async function performSetRequest() {
      if (!conn.conn || !layouts) {
        return;
      }

      let resp = await call_rpc(conn.conn, {
        keymap: { setActivePhysicalLayout: selectedPhysicalLayoutIndex },
      });

      let new_keymap = resp?.keymap?.setActivePhysicalLayout?.ok;
      if (new_keymap) {
        setKeymap(new_keymap);
      } else {
        console.error(
          "Failed to set the active physical layout err:",
          resp?.keymap?.setActivePhysicalLayout?.err
        );
      }
    }

    performSetRequest();
  }, [selectedPhysicalLayoutIndex]);

  let doSelectPhysicalLayout = useCallback(
    (i: number) => {
      let oldLayout = selectedPhysicalLayoutIndex;
      undoRedo?.(async () => {
        setSelectedPhysicalLayoutIndex(i);

        return async () => {
          setSelectedPhysicalLayoutIndex(oldLayout);
        };
      });
    },
    [undoRedo, selectedPhysicalLayoutIndex]
  );

  let doUpdateBinding = useCallback(
    (binding: BehaviorBinding) => {
      if (!keymap || selectedKeyPosition === undefined) {
        console.error(
          "Can't update binding without a selected key position and loaded keymap"
        );
        return;
      }

      const layer = selectedLayerIndex;
      const layerId = keymap.layers[layer].id;
      const keyPosition = selectedKeyPosition;
      const oldBinding = keymap.layers[layer].bindings[keyPosition];
      undoRedo?.(async () => {
        if (!conn.conn) {
          throw new Error("Not connected");
        }

        let resp = await call_rpc(conn.conn, {
          keymap: { setLayerBinding: { layerId, keyPosition, binding } },
        });

        if (
          resp.keymap?.setLayerBinding ===
          SetLayerBindingResponse.SET_LAYER_BINDING_RESP_OK
        ) {
          setKeymap(
            produce((draft: any) => {
              draft.layers[layer].bindings[keyPosition] = binding;
            })
          );
        } else {
          console.error("Failed to set binding", resp.keymap?.setLayerBinding);
        }

        return async () => {
          if (!conn.conn) {
            return;
          }

          let resp = await call_rpc(conn.conn, {
            keymap: {
              setLayerBinding: { layerId, keyPosition, binding: oldBinding },
            },
          });
          if (
            resp.keymap?.setLayerBinding ===
            SetLayerBindingResponse.SET_LAYER_BINDING_RESP_OK
          ) {
            setKeymap(
              produce((draft: any) => {
                draft.layers[layer].bindings[keyPosition] = oldBinding;
              })
            );
          } else {
          }
        };
      });
    },
    [conn, keymap, undoRedo, selectedLayerIndex, selectedKeyPosition]
  );

  let selectedBinding = useMemo(() => {
    if (keymap == null || selectedKeyPosition == null || !keymap.layers[selectedLayerIndex]) {
      return null;
    }

    return keymap.layers[selectedLayerIndex].bindings[selectedKeyPosition];
  }, [keymap, selectedLayerIndex, selectedKeyPosition]);

  const moveLayer = useCallback(
    (start: number, end: number) => {
      const doMove = async (startIndex: number, destIndex: number) => {
        if (!conn.conn) {
          return;
        }

        let resp = await call_rpc(conn.conn, {
          keymap: { moveLayer: { startIndex, destIndex } },
        });

        if (resp.keymap?.moveLayer?.ok) {
          setKeymap(resp.keymap?.moveLayer?.ok);
          setSelectedLayerIndex(destIndex);
        } else {
          console.error("Error moving", resp);
        }
      };

      undoRedo?.(async () => {
        await doMove(start, end);
        return () => doMove(end, start);
      });
    },
    [undoRedo]
  );

  const addLayer = useCallback(() => {
    async function doAdd(): Promise<number> {
      if (!conn.conn || !keymap) {
        throw new Error("Not connected");
      }

      const resp = await call_rpc(conn.conn, { keymap: { addLayer: {} } });

      if (resp.keymap?.addLayer?.ok) {
        const newSelection = keymap.layers.length;
        setKeymap(
          produce((draft: any) => {
            draft.layers.push(resp.keymap!.addLayer!.ok!.layer);
            draft.availableLayers--;
          })
        );

        setSelectedLayerIndex(newSelection);

        return resp.keymap.addLayer.ok.index;
      } else {
        console.error("Add error", resp.keymap?.addLayer?.err);
        throw new Error("Failed to add layer:" + resp.keymap?.addLayer?.err);
      }
    }

    async function doRemove(layerIndex: number) {
      if (!conn.conn) {
        throw new Error("Not connected");
      }

      const resp = await call_rpc(conn.conn, {
        keymap: { removeLayer: { layerIndex } },
      });

      console.log(resp);
      if (resp.keymap?.removeLayer?.ok) {
        setKeymap(
          produce((draft: any) => {
            draft.layers.splice(layerIndex, 1);
            draft.availableLayers++;
          })
        );
      } else {
        console.error("Remove error", resp.keymap?.removeLayer?.err);
        throw new Error(
          "Failed to remove layer:" + resp.keymap?.removeLayer?.err
        );
      }
    }

    undoRedo?.(async () => {
      let index = await doAdd();
      return () => doRemove(index);
    });
  }, [conn, undoRedo, keymap]);

  const removeLayer = useCallback(() => {
    async function doRemove(layerIndex: number): Promise<void> {
      if (!conn.conn || !keymap) {
        throw new Error("Not connected");
      }

      const resp = await call_rpc(conn.conn, {
        keymap: { removeLayer: { layerIndex } },
      });

      if (resp.keymap?.removeLayer?.ok) {
        if (layerIndex == keymap.layers.length - 1) {
          setSelectedLayerIndex(layerIndex - 1);
        }
        setKeymap(
          produce((draft: any) => {
            draft.layers.splice(layerIndex, 1);
            draft.availableLayers++;
          })
        );
      } else {
        console.error("Remove error", resp.keymap?.removeLayer?.err);
        throw new Error(
          "Failed to remove layer:" + resp.keymap?.removeLayer?.err
        );
      }
    }

    async function doRestore(layerId: number, atIndex: number) {
      if (!conn.conn) {
        throw new Error("Not connected");
      }

      const resp = await call_rpc(conn.conn, {
        keymap: { restoreLayer: { layerId, atIndex } },
      });

      console.log(resp);
      if (resp.keymap?.restoreLayer?.ok) {
        setKeymap(
          produce((draft: any) => {
            draft.layers.splice(atIndex, 0, resp!.keymap!.restoreLayer!.ok);
            draft.availableLayers--;
          })
        );
        setSelectedLayerIndex(atIndex);
      } else {
        console.error("Remove error", resp.keymap?.restoreLayer?.err);
        throw new Error(
          "Failed to restore layer:" + resp.keymap?.restoreLayer?.err
        );
      }
    }

    if (!keymap) {
      throw new Error("No keymap loaded");
    }

    let index = selectedLayerIndex;
    let layerId = keymap.layers[index].id;
    undoRedo?.(async () => {
      await doRemove(index);
      return () => doRestore(layerId, index);
    });
  }, [conn, undoRedo, selectedLayerIndex]);

  const changeLayerName = useCallback(
    (id: number, oldName: string, newName: string) => {
      async function changeName(layerId: number, name: string) {
        if (!conn.conn) {
          throw new Error("Not connected");
        }

        const resp = await call_rpc(conn.conn, {
          keymap: { setLayerProps: { layerId, name } },
        });

        if (
          resp.keymap?.setLayerProps ==
          SetLayerPropsResponse.SET_LAYER_PROPS_RESP_OK
        ) {
          setKeymap(
            produce((draft: any) => {
              const layer_index = draft.layers.findIndex(
                (l: Layer) => l.id == layerId
              );
              draft.layers[layer_index].name = name;
            })
          );
        } else {
          throw new Error(
            "Failed to change layer name:" + resp.keymap?.setLayerProps
          );
        }
      }

      undoRedo?.(async () => {
        await changeName(id, newName);
        return async () => {
          await changeName(id, oldName);
        };
      });
    },
    [conn, undoRedo, keymap]
  );

  useEffect(() => {
    if (!keymap?.layers) return;

    const layers = keymap.layers.length - 1;

    if (selectedLayerIndex > layers) {
      setSelectedLayerIndex(layers);
    }
  }, [keymap, selectedLayerIndex]);

  return (
    <div className="grid min-h-0 min-w-0 max-w-full grid-cols-[18rem_minmax(0,1fr)] grid-rows-[1fr_minmax(12rem,auto)] bg-base-200/70">
      <div className="row-span-2 flex flex-col gap-3 border-r border-base-300 bg-base-100/75 p-3">
        {layouts && (
          <SidebarSection
            title="配列/外壳"
            hint="如果这把键盘支持多种物理布局，先在这里选。"
          >
            <PhysicalLayoutPicker
              layouts={layouts}
              selectedPhysicalLayoutIndex={selectedPhysicalLayoutIndex}
              onPhysicalLayoutClicked={doSelectPhysicalLayout}
            />
          </SidebarSection>
        )}

        {keymap && (
          <SidebarSection
            title="层"
            hint="Base 层最常用。点一下就能切换你正在编辑的那一层。"
          >
            <LayerPicker
              layers={keymap.layers}
              selectedLayerIndex={selectedLayerIndex}
              onLayerClicked={setSelectedLayerIndex}
              onLayerMoved={moveLayer}
              canAdd={(keymap.availableLayers || 0) > 0}
              canRemove={(keymap.layers?.length || 0) > 1}
              onAddClicked={addLayer}
              onRemoveClicked={removeLayer}
              onLayerNameChanged={changeLayerName}
            />
          </SidebarSection>
        )}
      </div>
      {layouts && keymap && behaviorsLoaded ? (
        <div className="col-start-2 row-start-1 flex min-w-0 min-h-0 flex-col gap-3 p-3">
          <WorkspaceGuide
            bottomTab={bottomTab}
            selectedLayerIndex={selectedLayerIndex}
            hasSelectedKey={selectedKeyPosition !== undefined}
          />
          <div
            ref={layoutFitRef}
            className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-3"
          >
            {bottomTab === "lighting" ? (
              <LayerLedMap
                keymap={keymap}
                layout={layouts[selectedPhysicalLayoutIndex]}
                scale={keymapScale}
                selectedLayerIndex={selectedLayerIndex}
                ledData={ledData}
                selectedPositions={selectedLedPositions}
                onSelectionChanged={(sel) => {
                  if (!handleIndicatorPick(sel)) {
                    setSelectedLedPositions(sel);
                  }
                }}
                fitContainerRef={layoutFitRef}
                indicatorPositions={indicatorPositions}
                activeSource={lightingSource}
              />
            ) : (
              <KeymapComp
                keymap={keymap}
                layout={layouts[selectedPhysicalLayoutIndex]}
                behaviors={behaviors}
                scale={keymapScale}
                selectedLayerIndex={selectedLayerIndex}
                selectedKeyPosition={selectedKeyPosition}
                fitContainerRef={layoutFitRef}
                onKeyPositionClicked={setSelectedKeyPosition}
              />
            )}
            <select
              className="absolute right-3 top-3 h-9 rounded-xl border border-base-300 bg-base-100 px-3 text-sm shadow-sm"
              value={keymapScale}
              onChange={(e) => {
                const value = deserializeLayoutZoom(e.target.value);
                setKeymapScale(value);
              }}
            >
              <option value="auto">{t("keyboard.zoom.auto")}</option>
              <option value={0.25}>25%</option>
              <option value={0.5}>50%</option>
              <option value={0.75}>75%</option>
              <option value={1}>100%</option>
              <option value={1.25}>125%</option>
              <option value={1.5}>150%</option>
              <option value={2}>200%</option>
            </select>
          </div>
        </div>
      ) : (
        (conn.conn && isUnlocked) ? (
          <div className="col-start-2 row-start-1 grid min-w-0 items-center justify-center p-3">
            <div className="flex min-w-[18rem] flex-col items-center gap-3 rounded-3xl border border-base-300 bg-base-100 px-8 py-10 animate-fade-in">
              <div className="size-8 rounded-full border-[3px] border-primary/20 border-t-primary animate-spin" />
              <span className="text-sm text-base-content/60">{t("welcome.initializingTitle")}</span>
            </div>
          </div>
        ) : null
      )}
      {layouts && keymap && behaviorsLoaded && (
        <BottomPanel
          bottomTab={bottomTab}
          setBottomTab={setBottomTab}
          hasSelectedKey={selectedKeyPosition !== undefined}
        >
            {bottomTab === "keymap" ? (
              selectedBinding ? (
                <BehaviorBindingPicker
                  binding={selectedBinding}
                  behaviors={Object.values(behaviors)}
                  layers={keymap.layers.map(({ id, name }, li) => ({
                    id,
                    name: name || li.toLocaleString(),
                  }))}
                  onBindingChanged={doUpdateBinding}
                />
              ) : (
                <IdlePanel />
              )
            ) : bottomTab === "other" ? (
              <OtherPanel
                behaviors={Object.values(behaviors)}
                powerSettings={powerSettings}
                setPowerSettings={setPowerSettings}
                powerLoadError={powerLoadError}
                powerDebugInfo={powerDebugInfo}
              />
            ) : (
              <LightingControl
                hasLayerLed={hasLayerLed}
                selectedLedPositions={selectedLedPositions}
                ledData={ledData}
                selectedLayerIndex={selectedLayerIndex}
                keymap={keymap}
                onLayerLedColorChanged={handleLayerLedColorChanged}
                layerLedEnabled={ledData?.enabled ?? true}
                onLayerLedEnabledChanged={handleLayerLedEnabledChanged}
                rgbState={rgbState}
                setRgbState={setRgbState}
                backlightState={backlightState}
                setBacklightState={setBacklightState}
                capsLockState={capsLockState}
                setCapsLockState={setCapsLockState}
                connectionState={connectionState}
                setConnectionState={setConnectionState}
                lowBatteryState={lowBatteryState}
                setLowBatteryState={setLowBatteryState}
                hasRgb={hasRgb}
                hasBacklight={hasBacklight}
                hasCapsLock={hasCapsLock}
                hasConnection={hasConnection}
                hasLowBattery={hasLowBattery}
                indicatorPositionDraft={indicatorPositionDraft}
                onSourceChange={handleLightingSourceChanged}
                onClearIndicator={() => setIndicatorPositionDraft(undefined)}
              />
            )}
        </BottomPanel>
      )}
    </div>
  );
}

function SidebarSection({
  title,
  hint,
  children,
}: {
  title: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-base-300 bg-base-100/80 p-3 shadow-sm">
      <div className="mb-3">
        <div className="text-sm font-semibold text-base-content">{title}</div>
        <div className="mt-1 text-xs leading-5 text-base-content/60">{hint}</div>
      </div>
      {children}
    </section>
  );
}

function WorkspaceGuide({
  bottomTab,
  selectedLayerIndex,
  hasSelectedKey,
}: {
  bottomTab: "keymap" | "lighting" | "other";
  selectedLayerIndex: number;
  hasSelectedKey: boolean;
}) {
  const items =
    bottomTab === "keymap"
      ? [
          "先在左边选要编辑的层。",
          hasSelectedKey ? "上方已经选中一个键，继续在下方改它的功能。" : "再点上方键盘里的一个键。",
          "改完以后，到顶部点“保存到键盘”。",
        ]
      : bottomTab === "lighting"
        ? [
            "先在左边确认当前层。",
            "再在灯光页里选模式、颜色或指示灯来源。",
            "需要持久保存时，同样点顶部“保存到键盘”。",
          ]
        : [
            "这里放的是电源和高级设置。",
            "USB 下可以改并保存，很多效果要拔线后再验证。",
            "看到保存成功提示后，再去测试蓝牙或电池模式。",
          ];

  const title =
    bottomTab === "keymap"
      ? "键位编辑区"
      : bottomTab === "lighting"
        ? "灯光编辑区"
        : "高级设置区";

  const icon =
    bottomTab === "keymap"
      ? <MousePointerClick className="size-5" />
      : bottomTab === "lighting"
        ? <Palette className="size-5" />
        : <SlidersHorizontal className="size-5" />;

  return (
    <section className="rounded-3xl border border-base-300 bg-base-100/85 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-primary/10 p-2.5 text-primary">{icon}</div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold text-base-content">{title}</h2>
            <span className="rounded-full bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/70">
              当前第 {selectedLayerIndex + 1} 层
            </span>
          </div>
          <p className="mt-1 text-sm leading-6 text-base-content/65">
            不确定下一步做什么时，照着下面三步走就行。
          </p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={item} className="rounded-2xl border border-base-300 bg-base-100 p-3">
            <div className="mb-2 inline-flex rounded-full bg-base-200 px-2.5 py-1 text-xs font-semibold text-base-content/70">
              第 {index + 1} 步
            </div>
            <div className="text-sm leading-6 text-base-content/80">{item}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkspaceTabButton({
  active,
  icon,
  title,
  body,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  body: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`rounded-2xl border p-3 text-left transition-colors ${
        active
          ? "border-primary bg-primary/10 text-base-content"
          : "border-base-300 bg-base-100 text-base-content/70 hover:bg-base-200"
      }`}
      onClick={onClick}
    >
      <div className="mb-2 inline-flex rounded-xl bg-base-200 p-2 text-primary">{icon}</div>
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs leading-5 opacity-75">{body}</div>
    </button>
  );
}

function BottomPanel({
  bottomTab,
  setBottomTab,
  hasSelectedKey,
  children,
}: {
  bottomTab: "keymap" | "lighting" | "other";
  setBottomTab: (tab: "keymap" | "lighting" | "other") => void;
  hasSelectedKey: boolean;
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const helperText =
    bottomTab === "keymap"
      ? hasSelectedKey
        ? "当前已经选中一个键。直接在下面改它的功能，最后点顶部“保存到键盘”。"
        : "先点上方键盘中的一个键，下面才会出现这个键的功能编辑器。"
      : bottomTab === "lighting"
        ? "灯光页适合改颜色、效果、指示灯和低电量提醒。需要持久保存时，同样要点顶部保存。"
        : "这里放的是电源和高级配置。像休眠这类功能，通常要在拔掉 USB 后验证实际效果。";

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      setHeight(el.scrollHeight);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [bottomTab]);

  return (
    <div className="col-start-2 row-start-2 flex flex-col border-t border-base-300 bg-base-100/75">
      <div className="grid shrink-0 gap-3 border-b border-base-300 p-3 md:grid-cols-3">
        <WorkspaceTabButton
          active={bottomTab === "keymap"}
          icon={<Layers3 className="size-4" />}
          title={t("keyboard.tab.keymap")}
          body="修改单个按键、层和组合键逻辑。"
          onClick={() => setBottomTab("keymap")}
        />
        <WorkspaceTabButton
          active={bottomTab === "lighting"}
          icon={<Palette className="size-4" />}
          title={t("keyboard.tab.lighting")}
          body="修改 RGB、背光、指示灯和低电量提醒。"
          onClick={() => setBottomTab("lighting")}
        />
        <WorkspaceTabButton
          active={bottomTab === "other"}
          icon={<SlidersHorizontal className="size-4" />}
          title={t("other.tab")}
          body="调整电源、Tap-Hold 和其他高级行为。"
          onClick={() => setBottomTab("other")}
        />
      </div>
      <div className="flex items-start gap-2 border-b border-base-300 px-4 py-3 text-sm text-base-content/70">
        <Info className="mt-0.5 size-4 shrink-0 text-primary" />
        <span>{helperText}</span>
      </div>
      <div
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: height != null ? `${height}px` : "auto", minHeight: "18rem" }}
      >
        <div ref={contentRef} className="p-4">
          <div key={bottomTab} className="animate-fade-in">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
