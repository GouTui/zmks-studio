import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Label } from "react-aria-components";
import { useTranslation } from "react-i18next";
import { AlertTriangle, Sun, Lightbulb, Lock, Layers, Wifi } from "lucide-react";

import { ConnectionContext } from "../rpc/ConnectionContext";
import { LockStateContext } from "../rpc/LockStateContext";
import { LockState } from "@zmkfirmware/zmk-studio-ts-client/core";
import { call_rpc } from "../rpc/logging";

import type {
  RgbUnderglowState,
  BacklightState,
  CapsLockIndicatorState,
  ConnectionIndicatorState,
  GetLayerLedColorsResponse,
  SetCapsLockIndicatorRequest,
  SetConnectionIndicatorRequest,
  LowBatteryIndicatorState,
  SetLowBatteryIndicatorRequest,
} from "@zmkfirmware/zmk-studio-ts-client/lighting";
import type { Keymap } from "@zmkfirmware/zmk-studio-ts-client/keymap";
import type { IndicatorPositionDraft } from "../keyboard/Keyboard";

import HsbColorPicker, {
  type HsbColor,
  colorToHex,
  rgbToHsb,
  hsbToRgb,
} from "./HsbColorPicker";

type LightSource =
  | "rgb"
  | "backlight"
  | "capslock"
  | "connection"
  | "layerLed"
  | "lowBattery";

const ANY_LAYER_ID = 0xff;

export interface LightingControlProps {
  hasLayerLed?: boolean;
  selectedLedPositions?: Set<number>;
  ledData?: GetLayerLedColorsResponse | null;
  selectedLayerIndex?: number;
  keymap?: Keymap;
  onLayerLedColorChanged?: (positions: number[], color: number) => void;
  layerLedEnabled?: boolean;
  onLayerLedEnabledChanged?: (enabled: boolean) => void;
  rgbState: RgbUnderglowState | null;
  setRgbState: React.Dispatch<React.SetStateAction<RgbUnderglowState | null>>;
  backlightState: BacklightState | null;
  setBacklightState: React.Dispatch<React.SetStateAction<BacklightState | null>>;
  capsLockState: CapsLockIndicatorState | null;
  setCapsLockState: React.Dispatch<React.SetStateAction<CapsLockIndicatorState | null>>;
  connectionState?: ConnectionIndicatorState | null;
  setConnectionState?: React.Dispatch<React.SetStateAction<ConnectionIndicatorState | null>>;
  lowBatteryState?: LowBatteryIndicatorState | null;
  setLowBatteryState?: React.Dispatch<React.SetStateAction<LowBatteryIndicatorState | null>>;
  hasRgb: boolean;
  hasBacklight: boolean;
  hasCapsLock: boolean;
  hasConnection?: boolean;
  hasLowBattery?: boolean;
  indicatorPositionDraft?: IndicatorPositionDraft;
  onSourceChange?: (source: LightSource) => void;
  onClearIndicator?: () => void;
  onLightingChanged?: () => void;
}

const capsLockIndicatorFieldOrder: (keyof SetCapsLockIndicatorRequest)[] = [
  "enabled",
  "offColor",
  "onColor",
  "keyPosition",
  "layerId",
];

const connectionIndicatorFieldOrder: (keyof SetConnectionIndicatorRequest)[] = [
  "enabled",
  "usbColor",
  "btColor",
  "keyPosition",
  "layerId",
];

const lowBatteryIndicatorFieldOrder: (keyof SetLowBatteryIndicatorRequest)[] = [
  "enabled",
  "keyPosition",
  "periodMs",
  "color",
  "thresholdPct",
  "flashDurationMs",
  "demoEnabled",
];

export default function LightingControl({
  hasLayerLed,
  selectedLedPositions,
  ledData,
  selectedLayerIndex,
  keymap,
  onLayerLedColorChanged,
  layerLedEnabled,
  onLayerLedEnabledChanged,
  rgbState,
  setRgbState,
  backlightState,
  setBacklightState,
  capsLockState,
  setCapsLockState,
  connectionState,
  setConnectionState,
  lowBatteryState,
  setLowBatteryState,
  hasRgb,
  hasBacklight,
  hasCapsLock,
  hasConnection,
  hasLowBattery,
  indicatorPositionDraft,
  onSourceChange,
  onClearIndicator,
  onLightingChanged,
}: LightingControlProps) {
  const { t } = useTranslation();
  const conn = useContext(ConnectionContext);
  const lockState = useContext(LockStateContext);
  const isUnlocked =
    lockState === LockState.ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED;

  const [selectedSource, setSelectedSource] = useState<LightSource>("rgb");

  const [layerLedHsb, setLayerLedHsb] = useState<HsbColor>({ h: 0, s: 100, b: 100 });

  const [capsOnHsb, setCapsOnHsb] = useState<HsbColor>({ h: 0, s: 100, b: 100 });
  const [capsOffHsb, setCapsOffHsb] = useState<HsbColor>({ h: 0, s: 0, b: 0 });

  const [connUsbHsb, setConnUsbHsb] = useState<HsbColor>({ h: 0, s: 0, b: 100 });
  const [connBtHsb, setConnBtHsb] = useState<HsbColor>({ h: 240, s: 100, b: 100 });
  const [lowBatteryHsb, setLowBatteryHsb] = useState<HsbColor>({ h: 0, s: 100, b: 100 });

  const capsInitialized = useRef(false);
  const connInitialized = useRef(false);

  if (!capsLockState) {
    capsInitialized.current = false;
  }
  if (!connectionState) {
    connInitialized.current = false;
  }

  useEffect(() => {
    if (!capsLockState || capsInitialized.current) return;
    capsInitialized.current = true;
    setCapsOnHsb(rgbToHsb(capsLockState.onColor));
    setCapsOffHsb(rgbToHsb(capsLockState.offColor));
  }, [capsLockState]);

  useEffect(() => {
    if (!connectionState || connInitialized.current) return;
    connInitialized.current = true;
    setConnUsbHsb(rgbToHsb(connectionState.usbColor));
    setConnBtHsb(rgbToHsb(connectionState.btColor));
  }, [connectionState]);

  useEffect(() => {
    if (!lowBatteryState) return;
    setLowBatteryHsb(rgbToHsb(lowBatteryState.color));
  }, [lowBatteryState?.color]);

  useEffect(() => {
    if (!selectedLedPositions || selectedLedPositions.size === 0 || !ledData || !keymap) return;
    const layerIdx = selectedLayerIndex ?? 0;
    const layerId = keymap.layers[layerIdx]?.id;
    if (layerId === undefined) return;
    const firstPos = Math.min(...selectedLedPositions);
    const layerConfig = ledData.layers.find((l) => l.layerId === layerId);
    const binding = layerConfig?.bindings.find((b) => b.keyPosition === firstPos);
    const color = binding?.color ?? 0;
    if (color > 0) {
      setLayerLedHsb(rgbToHsb(color));
    } else {
      setLayerLedHsb({ h: 0, s: 100, b: 100 });
    }
  }, [selectedLedPositions, ledData, keymap, selectedLayerIndex]);

  const handleLayerLedHsbChanged = useCallback(
    (hsb: HsbColor) => {
      setLayerLedHsb(hsb);
      if (!selectedLedPositions || selectedLedPositions.size === 0 || !onLayerLedColorChanged) return;
      const rgbColor = hsbToRgb(hsb);
      onLayerLedColorChanged(Array.from(selectedLedPositions), rgbColor);
    },
    [selectedLedPositions, onLayerLedColorChanged]
  );

  const handleClearLayerLed = useCallback(() => {
    if (!selectedLedPositions || selectedLedPositions.size === 0 || !onLayerLedColorChanged) return;
    onLayerLedColorChanged(Array.from(selectedLedPositions), 0);
  }, [selectedLedPositions, onLayerLedColorChanged]);

  useEffect(() => {
    if (hasRgb) {
      setSelectedSource("rgb");
    } else if (hasBacklight) {
      setSelectedSource("backlight");
    } else if (hasLayerLed) {
      setSelectedSource("layerLed");
    } else if (hasCapsLock) {
      setSelectedSource("capslock");
    } else if (hasConnection) {
      setSelectedSource("connection");
    } else if (hasLowBattery) {
      setSelectedSource("lowBattery");
    }
  }, [hasRgb, hasBacklight, hasLayerLed, hasCapsLock, hasConnection, hasLowBattery]);

  useEffect(() => {
    onSourceChange?.(selectedSource);
  }, [selectedSource, onSourceChange]);

  const setRgbProp = useCallback(
    async (props: Partial<RgbUnderglowState>) => {
      if (!conn.conn) return;
      try {
        const resp = await call_rpc(conn.conn, {
          lighting: { setRgbUnderglowState: props },
        });
        if (resp.lighting?.setRgbUnderglowState) {
          setRgbState((prev) => (prev ? { ...prev, ...props } : prev));
          onLightingChanged?.();
        }
      } catch (e) {
        console.error("Failed to set RGB state", e);
      }
    },
    [conn, setRgbState, onLightingChanged]
  );

  const setBlProp = useCallback(
    async (props: Partial<BacklightState>) => {
      if (!conn.conn) return;
      try {
        const resp = await call_rpc(conn.conn, {
          lighting: { setBacklightState: props },
        });
        if (resp.lighting?.setBacklightState) {
          setBacklightState((prev) => (prev ? { ...prev, ...props } : prev));
          onLightingChanged?.();
        }
      } catch (e) {
        console.error("Failed to set backlight state", e);
      }
    },
    [conn, setBacklightState, onLightingChanged]
  );

  const setCapsLockProp = useCallback(
    async (props: Partial<SetCapsLockIndicatorRequest>) => {
      if (!conn.conn) return false;
      const applied: Partial<SetCapsLockIndicatorRequest> = {};
      try {
        for (const field of capsLockIndicatorFieldOrder) {
          const value = props[field];
          if (value === undefined) continue;

          const request = { [field]: value } as Partial<SetCapsLockIndicatorRequest>;
          const resp = await call_rpc(conn.conn, {
            lighting: { setCapsLockIndicator: request },
          });
          if (!resp.lighting?.setCapsLockIndicator) {
            console.error("Failed to set CapsLock indicator", resp);
            return false;
          }
          Object.assign(applied, request);
        }

        if (Object.keys(applied).length > 0) {
          setCapsLockState((prev) => (prev ? { ...prev, ...applied } : prev));
          onLightingChanged?.();
        }
        return true;
      } catch (e) {
        console.error("Failed to set CapsLock indicator", e);
        return false;
      }
    },
    [conn, setCapsLockState, onLightingChanged]
  );

  const setConnectionProp = useCallback(
    async (props: Partial<SetConnectionIndicatorRequest>) => {
      if (!conn.conn) return false;
      const applied: Partial<SetConnectionIndicatorRequest> = {};
      try {
        for (const field of connectionIndicatorFieldOrder) {
          const value = props[field];
          if (value === undefined) continue;

          const request = { [field]: value } as Partial<SetConnectionIndicatorRequest>;
          const resp = await call_rpc(conn.conn, {
            lighting: { setConnectionIndicator: request },
          });
          if (!resp.lighting?.setConnectionIndicator) {
            console.error("Failed to set Connection indicator", resp);
            return false;
          }
          Object.assign(applied, request);
        }

        if (Object.keys(applied).length > 0) {
          setConnectionState?.((prev) => (prev ? { ...prev, ...applied } : prev));
          onLightingChanged?.();
        }
        return true;
      } catch (e) {
        console.error("Failed to set Connection indicator", e);
        return false;
      }
    },
    [conn, setConnectionState, onLightingChanged]
  );

  const setLowBatteryProp = useCallback(
    async (props: Partial<SetLowBatteryIndicatorRequest>) => {
      if (!conn.conn) return false;
      const applied: Partial<SetLowBatteryIndicatorRequest> = {};
      try {
        for (const field of lowBatteryIndicatorFieldOrder) {
          const value = props[field];
          if (value === undefined) continue;

          const request = { [field]: value } as Partial<SetLowBatteryIndicatorRequest>;
          const resp = await call_rpc(conn.conn, {
            lighting: { setLowBatteryIndicator: request },
          } as any);
          if (!resp.lighting?.setLowBatteryIndicator) {
            console.error("Failed to set low battery indicator", resp);
            return false;
          }
          Object.assign(applied, request);
        }

        if (Object.keys(applied).length > 0) {
          setLowBatteryState?.((prev) => (prev ? { ...prev, ...applied } : prev));
          onLightingChanged?.();
        }
        return true;
      } catch (e) {
        console.error("Failed to set low battery indicator", e);
        return false;
      }
    },
    [conn, setLowBatteryState, onLightingChanged]
  );

  const effectNames = useMemo(() => {
    if (!rgbState) return [];
    if (rgbState.effectNames && rgbState.effectNames.length > 0) {
      return rgbState.effectNames;
    }
    const count = rgbState.effectCount ?? 0;
    return Array.from({ length: count }, (_, i) => `Effect ${i}`);
  }, [rgbState]);

  if (!conn.conn || !isUnlocked) {
    return null;
  }

  if (!hasRgb && !hasBacklight && !hasCapsLock && !hasConnection && !hasLayerLed && !hasLowBattery) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 px-8">
        <AlertTriangle className="w-8 h-8 text-warning" />
        <span className="text-sm font-medium text-base-content">
          {t("lighting.notSupported")}
        </span>
        <p className="text-sm text-base-content/50 text-center max-w-md leading-relaxed">
          {t("lighting.notSupportedDesc")}
        </p>
      </div>
    );
  }

  const isRgbSelected = selectedSource === "rgb" && hasRgb;
  const isBlSelected = selectedSource === "backlight" && hasBacklight;
  const isCapsSelected = selectedSource === "capslock" && hasCapsLock;
  const isConnSelected = selectedSource === "connection" && !!hasConnection;
  const isLayerLedSelected = selectedSource === "layerLed" && hasLayerLed;
  const isLowBatterySelected = selectedSource === "lowBattery" && !!hasLowBattery;

  const selectedLayerId = keymap?.layers[selectedLayerIndex ?? 0]?.id;
  const capsStoredAllLayers = capsLockState?.layerId === ANY_LAYER_ID;
  const connStoredAllLayers = connectionState?.layerId === ANY_LAYER_ID;

  const resolvedIndicatorLayerId = (isCapsSelected && capsStoredAllLayers) || (isConnSelected && connStoredAllLayers)
    ? ANY_LAYER_ID
    : selectedLayerId ?? 0;

  useEffect(() => {
    if (!indicatorPositionDraft) return;

    const draft = indicatorPositionDraft;
    let cancelled = false;
    async function applyIndicatorPosition() {
      const position = { keyPosition: draft.keyPosition, layerId: resolvedIndicatorLayerId };
      let ok = false;
      if (isCapsSelected) {
        ok = await setCapsLockProp(position);
      } else if (isConnSelected) {
        ok = await setConnectionProp(position);
      } else if (isLowBatterySelected) {
        ok = await setLowBatteryProp({ keyPosition: draft.keyPosition });
      }

      if (ok && !cancelled) {
        onClearIndicator?.();
      }
    }

    applyIndicatorPosition();
    return () => {
      cancelled = true;
    };
  }, [
    resolvedIndicatorLayerId,
    indicatorPositionDraft,
    isCapsSelected,
    isConnSelected,
    isLowBatterySelected,
    onClearIndicator,
    setCapsLockProp,
    setConnectionProp,
    setLowBatteryProp,
  ]);

  const setIndicatorAllLayers = (allLayers: boolean) => {
    async function apply() {
      const layerId = allLayers ? ANY_LAYER_ID : selectedLayerId;
      if (layerId === undefined) return;

      let ok = false;
      if (isCapsSelected) {
        ok = await setCapsLockProp({ layerId });
      } else if (isConnSelected) {
        ok = await setConnectionProp({ layerId });
      }
      if (ok) {
        onClearIndicator?.();
      }
    }

    apply();
  };

  const renderIndicatorScopeSelect = (allLayers: boolean) => (
    <label className="flex items-center gap-1.5 text-sm text-base-content/60 whitespace-nowrap">
      <span>{t("lighting.indicator.scope")}</span>
      <select
        value={allLayers ? "any" : "current"}
        onChange={(e) => setIndicatorAllLayers(e.currentTarget.value === "any")}
        disabled={!isUnlocked || (!allLayers && selectedLayerId === undefined)}
        className="h-7 rounded border border-base-300 bg-base-100 px-2 text-sm text-base-content focus:outline-none focus:border-primary"
      >
        <option value="current">{t("lighting.indicator.currentLayer")}</option>
        <option value="any">{t("lighting.indicator.anyLayer")}</option>
      </select>
    </label>
  );

  const renderIndicatorPosition = (position: IndicatorPositionDraft) => (
    <>
      <span className="text-sm text-base-content/60">
        {t("lighting.indicator.positionLabel", { pos: position.keyPosition })}
      </span>
      {renderIndicatorScopeSelect(position.layerId === ANY_LAYER_ID)}
    </>
  );

  const lowBatteryColorHex = lowBatteryState ? colorToHex(lowBatteryState.color).toUpperCase() : "#000000";

  return (
    <div className="flex gap-0 min-h-0 h-full">
      {/* Column 1: Light sources */}
      <div className="flex flex-col gap-0.5 w-36 flex-shrink-0 pr-2 border-r border-base-300 overflow-y-auto">
        {hasRgb && (
          <button
            onClick={() => setSelectedSource("rgb")}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm cursor-pointer transition-colors text-left ${
              isRgbSelected
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-300"
            }`}
          >
            <Sun className="w-4 h-4 flex-shrink-0" />
            <span>{t("lighting.rgbUnderglow")}</span>
          </button>
        )}
        {hasBacklight && (
          <button
            onClick={() => setSelectedSource("backlight")}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm cursor-pointer transition-colors text-left ${
              isBlSelected
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-300"
            }`}
          >
            <Lightbulb className="w-4 h-4 flex-shrink-0" />
            <span>{t("lighting.backlight")}</span>
          </button>
        )}
        {hasCapsLock && (
          <button
            onClick={() => setSelectedSource("capslock")}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm cursor-pointer transition-colors text-left ${
              isCapsSelected
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-300"
            }`}
          >
            <Lock className="w-4 h-4 flex-shrink-0" />
            <span>{t("lighting.capsLock.title")}</span>
          </button>
        )}
        {hasConnection && (
          <button
            onClick={() => setSelectedSource("connection")}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm cursor-pointer transition-colors text-left ${
              isConnSelected
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-300"
            }`}
          >
            <Wifi className="w-4 h-4 flex-shrink-0" />
            <span>{t("lighting.connection.title")}</span>
          </button>
        )}
        {hasLowBattery && (
          <button
            onClick={() => setSelectedSource("lowBattery")}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm cursor-pointer transition-colors text-left ${
              isLowBatterySelected
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-300"
            }`}
          >
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>{t("lighting.lowBattery.title", "低电量提醒")}</span>
          </button>
        )}
        {hasLayerLed && (
          <button
            onClick={() => setSelectedSource("layerLed")}
            className={`flex items-center gap-2 px-3 py-2 rounded text-sm cursor-pointer transition-colors text-left ${
              isLayerLedSelected
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-300"
            }`}
          >
            <Layers className="w-4 h-4 flex-shrink-0" />
            <span>{t("lighting.layerLed.title")}</span>
          </button>
        )}
      </div>

      {/* Column 2: controls */}
      <div className="flex-1 min-w-0 flex flex-col items-center overflow-y-auto">
        <div className="w-2/3 flex flex-col gap-3 py-1">
        {isRgbSelected && rgbState && (
          <>
            {/* ON/OFF + effects row */}
            <div className="flex items-center gap-1 flex-wrap">
              <button
                onClick={() => setRgbProp({ on: true })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  rgbState.on
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.on")}
              </button>
              <button
                onClick={() => setRgbProp({ on: false })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  !rgbState.on
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.off")}
              </button>

              <span className="mx-1 h-4 border-l border-base-300" />

              {/* Effect buttons */}
                {effectNames.length > 0 && effectNames.map((name, i) => (
                  <button
                    key={i}
                    onClick={() => setRgbProp({ effect: i })}
                    disabled={!isUnlocked || !rgbState.on}
                    className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                      rgbState.effect === i
                        ? "bg-primary text-primary-content"
                        : "text-base-content hover:bg-base-300"
                    } ${!rgbState.on ? "opacity-40" : ""}`}
                  >
                    {name}
                  </button>
                ))}
            </div>

            {/* Sliders */}
            <div className={`flex flex-col gap-2 ${!rgbState.on ? "opacity-40 pointer-events-none" : ""}`}>
              <HsbColorPicker
                hsb={{
                  h: rgbState.color?.h ?? 0,
                  s: rgbState.color?.s ?? 0,
                  b: rgbState.color?.b ?? 0,
                }}
                onHsbChanged={(hsb) =>
                  setRgbProp({ color: { h: hsb.h, s: hsb.s, b: hsb.b } })
                }
                disabled={!isUnlocked}
              />
              <div className="flex items-center gap-3">
                <Label className="text-sm text-base-content/60 w-12 shrink-0">
                  {t("lighting.speed")}
                </Label>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={rgbState.speed ?? 1}
                  onChange={(e) =>
                    setRgbProp({ speed: Number(e.target.value) })
                  }
                  disabled={!isUnlocked}
                  className="flex-1 accent-primary"
                />
                <span className="text-sm text-base-content/50 w-8 text-right tabular-nums">
                  {rgbState.speed ?? 1}
                </span>
              </div>
            </div>
          </>
        )}

        {isBlSelected && backlightState && (
          <>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setBlProp({ on: true })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  backlightState.on
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.on")}
              </button>
              <button
                onClick={() => setBlProp({ on: false })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  !backlightState.on
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.off")}
              </button>
            </div>
            <div className={`flex flex-col gap-3 ${!backlightState.on ? "opacity-40 pointer-events-none" : ""}`}>
              <div className="flex items-center gap-3">
                <Label className="text-sm text-base-content/60 w-12 shrink-0">
                  {t("lighting.brt")}
                </Label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={backlightState.brightness}
                  onChange={(e) =>
                    setBlProp({ brightness: Number(e.target.value) })
                  }
                  disabled={!isUnlocked}
                  className="flex-1 accent-primary"
                />
                <span className="text-sm text-base-content/50 w-8 text-right tabular-nums">
                  {backlightState.brightness}
                </span>
              </div>
            </div>
          </>
        )}

        {isCapsSelected && capsLockState && (
          <>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCapsLockProp({ enabled: true })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  capsLockState.enabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.on")}
              </button>
              <button
                onClick={() => setCapsLockProp({ enabled: false })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  !capsLockState.enabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.off")}
              </button>

              <span className="w-px h-5 bg-base-300 mx-1.5" />
              {indicatorPositionDraft || capsLockState.enabled || capsLockState.keyPosition > 0 || capsLockState.layerId !== 0 ? (
                renderIndicatorPosition(
                  indicatorPositionDraft ? { keyPosition: indicatorPositionDraft.keyPosition, layerId: resolvedIndicatorLayerId } : {
                    keyPosition: capsLockState.keyPosition,
                    layerId: capsLockState.layerId,
                  }
                )
              ) : (
                <>
                  <span className="text-sm text-base-content/60">
                    {t("lighting.indicator.clickKeyHint")}
                  </span>
                  {renderIndicatorScopeSelect(!!capsStoredAllLayers)}
                </>
              )}
            </div>

            <div className="border-t border-base-300 my-2" />

            <div className={`flex gap-4 ${!capsLockState.enabled ? "opacity-40 pointer-events-none" : ""}`}>
              <div className="flex-1 flex flex-col gap-2">
                <Label className="text-sm text-base-content/60 font-medium">
                  {t("lighting.capsLock.onColor")}
                </Label>
                <HsbColorPicker
                  hsb={capsOnHsb}
                  onHsbChanged={(hsb) => {
                    setCapsOnHsb(hsb);
                    setCapsLockProp({ onColor: hsbToRgb(hsb) });
                  }}
                  disabled={!isUnlocked}
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <Label className="text-sm text-base-content/60 font-medium">
                  {t("lighting.capsLock.offColor")}
                </Label>
                <HsbColorPicker
                  hsb={capsOffHsb}
                  onHsbChanged={(hsb) => {
                    setCapsOffHsb(hsb);
                    setCapsLockProp({ offColor: hsbToRgb(hsb) });
                  }}
                  disabled={!isUnlocked}
                />
              </div>
            </div>
          </>
        )}

        {isConnSelected && connectionState && (
          <>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setConnectionProp({ enabled: true })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  connectionState.enabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.on")}
              </button>
              <button
                onClick={() => setConnectionProp({ enabled: false })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  !connectionState.enabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.off")}
              </button>

              {/* Position */}
              <span className="w-px h-5 bg-base-300 mx-1.5" />
              {indicatorPositionDraft || connectionState.enabled || connectionState.keyPosition > 0 || connectionState.layerId !== 0 ? (
                renderIndicatorPosition(
                  indicatorPositionDraft ? { keyPosition: indicatorPositionDraft.keyPosition, layerId: resolvedIndicatorLayerId } : {
                    keyPosition: connectionState.keyPosition,
                    layerId: connectionState.layerId,
                  }
                )
              ) : (
                <>
                  <span className="text-sm text-base-content/60">
                    {t("lighting.indicator.clickKeyHint")}
                  </span>
                  {renderIndicatorScopeSelect(!!connStoredAllLayers)}
                </>
              )}
            </div>

            <div className="border-t border-base-300 my-2" />

            <div className={`flex gap-4 ${!connectionState.enabled ? "opacity-40 pointer-events-none" : ""}`}>
              <div className="flex-1 flex flex-col gap-2">
                <Label className="text-sm text-base-content/60 font-medium">
                  {t("lighting.connection.usbColor")}
                </Label>
                <HsbColorPicker
                  hsb={connUsbHsb}
                  onHsbChanged={(hsb) => {
                    setConnUsbHsb(hsb);
                    setConnectionProp({ usbColor: hsbToRgb(hsb) });
                  }}
                  disabled={!isUnlocked}
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <Label className="text-sm text-base-content/60 font-medium">
                  {t("lighting.connection.btColor")}
                </Label>
                <HsbColorPicker
                  hsb={connBtHsb}
                  onHsbChanged={(hsb) => {
                    setConnBtHsb(hsb);
                    setConnectionProp({ btColor: hsbToRgb(hsb) });
                  }}
                  disabled={!isUnlocked}
                />
              </div>
            </div>
          </>
        )}

        {isLowBatterySelected && lowBatteryState && (
          <>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setLowBatteryProp({ enabled: true })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  lowBatteryState.enabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.on")}
              </button>
              <button
                onClick={() => setLowBatteryProp({ enabled: false, demoEnabled: false })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  !lowBatteryState.enabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.off")}
              </button>

              <span className="w-px h-5 bg-base-300 mx-1.5" />
              <span className="text-sm text-base-content/60">
                {t("lighting.indicator.positionLabel", {
                  pos: indicatorPositionDraft?.keyPosition ?? lowBatteryState.keyPosition,
                  defaultValue: `Key ${indicatorPositionDraft?.keyPosition ?? lowBatteryState.keyPosition}`,
                })}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap rounded border border-base-300 bg-base-100/50 px-3 py-2">
              <span className="text-sm text-base-content/60">
                {t("lighting.lowBattery.demo", "提醒演示")}
              </span>
              <button
                onClick={() => setLowBatteryProp({ enabled: true, demoEnabled: true })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  lowBatteryState.demoEnabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.lowBattery.demoOn", "开启演示")}
              </button>
              <button
                onClick={() => setLowBatteryProp({ demoEnabled: false })}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  !lowBatteryState.demoEnabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.lowBattery.demoOff", "关闭演示")}
              </button>
              <span className="text-sm text-base-content/50">
                {lowBatteryState.demoEnabled
                  ? t("lighting.lowBattery.demoActive", "演示中：忽略实际电量，按当前设置闪烁")
                  : t("lighting.lowBattery.demoInactive", "未演示：仅在实际低电量时触发")}
              </span>
            </div>

            <div className={`flex flex-col gap-3 ${!lowBatteryState.enabled ? "opacity-40 pointer-events-none" : ""}`}>
              <div className="text-sm text-base-content/60">
                {t(
                  "lighting.lowBattery.pickHint",
                  "点击上方键盘，修改低电量提醒要闪烁的按键。"
                )}
              </div>
              <div className="flex items-center gap-3">
                <Label className="text-sm text-base-content/60 w-28 shrink-0">
                  {t("lighting.lowBattery.period", "闪烁周期")}
                </Label>
                <input
                  type="number"
                  min={250}
                  step={250}
                  value={lowBatteryState.periodMs}
                  onChange={(e) =>
                    setLowBatteryProp({ periodMs: Math.max(250, Number(e.target.value) || 250) })
                  }
                  disabled={!isUnlocked}
                  className="w-28 rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                />
                <span className="text-sm text-base-content/50">ms</span>
              </div>
              <div className="flex items-center gap-3">
                <Label className="text-sm text-base-content/60 w-28 shrink-0">
                  {t("lighting.lowBattery.duration", "亮灯时长")}
                </Label>
                <input
                  type="number"
                  min={50}
                  step={50}
                  value={lowBatteryState.flashDurationMs}
                  onChange={(e) =>
                    setLowBatteryProp({
                      flashDurationMs: Math.max(50, Number(e.target.value) || 50),
                    })
                  }
                  disabled={!isUnlocked}
                  className="w-28 rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                />
                <span className="text-sm text-base-content/50">ms</span>
              </div>
              <div className="flex items-center gap-3">
                <Label className="text-sm text-base-content/60 w-28 shrink-0">
                  {t("lighting.lowBattery.threshold", "低电量阈值")}
                </Label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  step={1}
                  value={lowBatteryState.thresholdPct}
                  onChange={(e) =>
                    setLowBatteryProp({
                      thresholdPct: Math.min(100, Math.max(1, Number(e.target.value) || 1)),
                    })
                  }
                  disabled={!isUnlocked}
                  className="w-28 rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                />
                <span className="text-sm text-base-content/50">%</span>
              </div>
              <div className="grid gap-3 rounded border border-base-300 bg-base-100/50 p-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-base-content/60 w-28 shrink-0">
                    {t("lighting.lowBattery.color", "提醒颜色")}
                  </span>
                  <span
                    className="h-5 w-10 rounded border border-base-300"
                    style={{ backgroundColor: lowBatteryColorHex }}
                  />
                  <span className="font-mono text-base-content/70">{lowBatteryColorHex}</span>
                </div>
                <HsbColorPicker
                  hsb={lowBatteryHsb}
                  onHsbChanged={(hsb) => {
                    setLowBatteryHsb(hsb);
                    setLowBatteryProp({ color: hsbToRgb(hsb) });
                  }}
                  disabled={!isUnlocked}
                />
              </div>
            </div>
          </>
        )}

        {isLayerLedSelected && (
          <>
            <div className="flex items-center gap-1">
              <button
                onClick={() => onLayerLedEnabledChanged?.(true)}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  layerLedEnabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.on")}
              </button>
              <button
                onClick={() => onLayerLedEnabledChanged?.(false)}
                disabled={!isUnlocked}
                className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-colors whitespace-nowrap ${
                  !layerLedEnabled
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t("lighting.off")}
              </button>
            </div>
            <div className={`flex flex-col gap-2 ${!layerLedEnabled ? "opacity-40 pointer-events-none" : ""}`}>
              {(!selectedLedPositions || selectedLedPositions.size === 0) ? (
                <div className="text-sm text-base-content/50">
                  {t("lighting.layerLed.selectKey")}
                </div>
              ) : (
                <>
                  <div className="text-sm text-base-content/60 mb-1">
                    {selectedLedPositions.size === 1
                      ? t("lighting.layerLed.editKey", { key: Math.min(...selectedLedPositions) })
                      : t("lighting.layerLed.editKeys", { count: selectedLedPositions.size })}
                  </div>
                  <HsbColorPicker
                    hsb={layerLedHsb}
                    onHsbChanged={handleLayerLedHsbChanged}
                    disabled={!isUnlocked}
                  />
                  <button
                    onClick={handleClearLayerLed}
                    disabled={!isUnlocked}
                    className="mt-1 px-3 py-1.5 rounded text-sm cursor-pointer transition-colors bg-base-300 hover:bg-base-content/20 self-start"
                  >
                    {t("lighting.layerLed.clear")}
                  </button>
                </>
              )}
            </div>
          </>
        )}
        </div>
      </div>
    </div>
  );
}
