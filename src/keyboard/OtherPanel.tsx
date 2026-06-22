import { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Power, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ConnectionContext } from "../rpc/ConnectionContext";
import { call_rpc, format_rpc_error, unwrap_rpc_response } from "../rpc/logging";
import { useHoldTapConfigs } from "../behaviors/useHoldTapConfigs";
import { HoldTapConfig } from "@zmkfirmware/zmk-studio-ts-client/behaviors";
import type { GetBehaviorDetailsResponse } from "@zmkfirmware/zmk-studio-ts-client/behaviors";
import { HoldTapConfigFields } from "../behaviors/HoldTapFormFields";
import { PowerSettingsState } from "@zmkfirmware/zmk-studio-ts-client/core";
import {
  BUILTIN_LAYER_TAP,
  BUILTIN_MOD_TAP,
  configsEqual,
  findBuiltinHoldTap,
  getBuiltinDefault,
  holdTapPresets,
  isBuiltinHoldTap,
  isHoldTapShape,
  summarizeConfig,
} from "../behaviors/holdTapUtils";

interface OtherPanelProps {
  behaviors: GetBehaviorDetailsResponse[];
  powerSettings: PowerSettingsState | null;
  setPowerSettings: React.Dispatch<React.SetStateAction<PowerSettingsState | null>>;
  powerLoadError: string | null;
  powerDebugInfo: string | null;
}

type TopFeature = "tapHold" | "power";
type SubTab = "modtap" | "layertap" | "user";

function explainPowerLoadError(message: string) {
  if (message === "MISSING_FIELD") {
    return "The keyboard replied to getPowerSettings, but the reply did not contain core.getPowerSettings.";
  }

  if (message.includes("RPC RPC_NOT_FOUND")) {
    return "RPC_NOT_FOUND: firmware did not expose getPowerSettings. Usually this means the board is still running an older firmware image.";
  }

  if (message.includes("No RPC response received") || message.includes("No response")) {
    return "NO_RESPONSE: the keyboard did not answer getPowerSettings. Usually this means a firmware/web protocol mismatch or the board did not reboot into the new firmware.";
  }

  return `Power settings load failed: ${message}`;
}

interface TopFeatureSpec {
  id: TopFeature;
  labelKey: string;
  labelFallback: string;
  icon: LucideIcon;
}

const TOP_FEATURES: TopFeatureSpec[] = [
  { id: "tapHold", labelKey: "other.feature.tapHold", labelFallback: "Tap-Hold", icon: Wrench },
  { id: "power", labelKey: "other.feature.power", labelFallback: "Power", icon: Power },
];

export const OtherPanel = ({
  behaviors,
  powerSettings,
  setPowerSettings,
  powerLoadError,
  powerDebugInfo,
}: OtherPanelProps) => {
  const { t } = useTranslation();
  const { conn } = useContext(ConnectionContext);

  const holdTapBehaviors = useMemo(() => behaviors.filter(isHoldTapShape), [behaviors]);
  const userPresets = useMemo(() => holdTapPresets(behaviors), [behaviors]);
  const builtinModTap = useMemo(
    () => findBuiltinHoldTap(holdTapBehaviors, BUILTIN_MOD_TAP) ?? null,
    [holdTapBehaviors]
  );
  const builtinLayerTap = useMemo(
    () => findBuiltinHoldTap(holdTapBehaviors, BUILTIN_LAYER_TAP) ?? null,
    [holdTapBehaviors]
  );

  const [topFeature, setTopFeature] = useState<TopFeature>("tapHold");
  const [subTab, setSubTab] = useState<SubTab>("modtap");
  const [selectedPresetId, setSelectedPresetId] = useState<number | null>(null);
  const [drafts, setDrafts] = useState<Record<number, HoldTapConfig>>({});
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [powerDraft, setPowerDraft] = useState<PowerSettingsState | null>(powerSettings);
  const [powerSaving, setPowerSaving] = useState(false);
  const [powerSaveError, setPowerSaveError] = useState<string | null>(null);
  const [powerSaveNotice, setPowerSaveNotice] = useState<string | null>(null);

  // Fetch all upfront so preset apply doesn't stall.
  const allHoldTapIds = useMemo(() => holdTapBehaviors.map((b) => b.id), [holdTapBehaviors]);
  const { getConfig, applyConfig } = useHoldTapConfigs(allHoldTapIds);

  const activePresetId = selectedPresetId ?? userPresets[0]?.id ?? null;

  const selected = useMemo<GetBehaviorDetailsResponse | null>(() => {
    if (subTab === "modtap") return builtinModTap;
    if (subTab === "layertap") return builtinLayerTap;
    return userPresets.find((p) => p.id === activePresetId) ?? null;
  }, [subTab, builtinModTap, builtinLayerTap, userPresets, activePresetId]);

  useEffect(() => {
    setSaveError(null);
  }, [selected?.id]);

  useEffect(() => {
    setPowerDraft(powerSettings);
    setPowerSaveError(null);
  }, [powerSettings]);

  // Clear drafts and errors on disconnect.
  useEffect(() => {
    setDrafts({});
    setSaveError(null);
    setPowerDraft(null);
    setPowerSaveError(null);
    setPowerSaveNotice(null);
  }, [conn]);

  if (!conn) {
    return <CenteredHint>{t("keyboard.errors.notConnected", "Not connected")}</CenteredHint>;
  }

  const savedCfg = selected ? getConfig(selected.id) : null;
  const draft = selected ? drafts[selected.id] ?? savedCfg : null;
  const dirty = !!draft && !!savedCfg && !configsEqual(draft, savedCfg);

  const setDraft = (next: HoldTapConfig) => {
    if (selected) setDrafts((prev) => ({ ...prev, [selected.id]: next }));
  };
  const clearDraft = () => {
    if (!selected) return;
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[selected.id];
      return next;
    });
  };
  const save = async () => {
    if (!selected || !draft) return false;
    const ok = await applyConfig(selected.id, draft);
    if (ok) clearDraft();
    return ok;
  };
  const handleSave = async () => {
    setSaveError(null);
    setSaving(true);
    try {
      const ok = await save();
      if (!ok) {
        setSaveError(t("holdTap.saveFailed", "Save failed or timed out. Please try again."));
      }
    } finally {
      setSaving(false);
    }
  };

  // Built-ins have independent firmware defaults; "Restore default" stages it as the draft.
  const builtinDefault =
    selected && isBuiltinHoldTap(selected) ? getBuiltinDefault(selected.displayName) : null;
  const canReset = !!draft && !!builtinDefault && !configsEqual(draft, builtinDefault);
  const resetToDefault = () => {
    if (builtinDefault) setDraft(builtinDefault);
  };

  const emptyHint =
    subTab === "user"
      ? t("holdTap.empty.userPresetsHint", "Define hold-tap variants named like ht_* in your keymap.")
      : t("holdTap.empty.builtinHint", "Your firmware does not register Mod-Tap or Layer-Tap.");
  const powerDirty =
    !!powerDraft &&
    !!powerSettings &&
    (powerDraft.idleTimeoutMs !== powerSettings.idleTimeoutMs ||
      powerDraft.sleepTimeoutMs !== powerSettings.sleepTimeoutMs);

  const handlePowerSave = async () => {
    if (!conn || !powerDraft || !powerSettings) {
      return;
    }

    setPowerSaveError(null);
    setPowerSaveNotice(null);
    setPowerSaving(true);
    try {
      const requests: Array<
        | { field: "idleTimeoutMs"; value: number }
        | { field: "sleepTimeoutMs"; value: number }
      > = [];
      if (powerDraft.idleTimeoutMs !== powerSettings.idleTimeoutMs) {
        requests.push({ field: "idleTimeoutMs", value: powerDraft.idleTimeoutMs });
      }
      if (powerDraft.sleepTimeoutMs !== powerSettings.sleepTimeoutMs) {
        requests.push({ field: "sleepTimeoutMs", value: powerDraft.sleepTimeoutMs });
      }

      for (const request of requests) {
        const response = unwrap_rpc_response(
          await call_rpc(conn, {
            core: {
              setPowerSettings:
                request.field === "idleTimeoutMs"
                  ? { idleTimeoutMs: request.value }
                  : { sleepTimeoutMs: request.value },
            },
          })
        );

        if (!response.core?.setPowerSettings) {
          setPowerSaveError(
            t("other.power.saveFailed", "Failed to save power settings. Please try again.")
          );
          return;
        }
      }

      const refreshed = unwrap_rpc_response(
        await call_rpc(conn, { core: { getPowerSettings: true } })
      );

      if (!refreshed.core?.getPowerSettings) {
        setPowerSaveError(
          t("other.power.saveFailed", "Failed to save power settings. Please try again.")
        );
        return;
      }

      for (const request of requests) {
        if (refreshed.core.getPowerSettings[request.field] !== request.value) {
          setPowerSaveError(
            "键盘已响应保存请求，但读回的休眠时间与刚保存的数值不一致。更像是固件侧没有实际写入。"
          );
          return;
        }
      }

      setPowerSettings(refreshed.core.getPowerSettings);
      setPowerSaveNotice(
        `已通过 USB 写入键盘：空闲 ${formatDuration(
          refreshed.core.getPowerSettings.idleTimeoutMs
        )}，深度休眠 ${formatDuration(
          refreshed.core.getPowerSettings.sleepTimeoutMs
        )}。这些时间会在电池或蓝牙模式下生效。`
      );
    } catch (e) {
      console.error("Failed to save power settings", e);
      setPowerSaveError(format_rpc_error(e));
    } finally {
      setPowerSaving(false);
    }
  };

  const resetPowerDraft = () => {
    setPowerDraft(powerSettings);
    setPowerSaveError(null);
    setPowerSaveNotice(null);
  };

  return (
    // Cap height so BottomPanel's scrollHeight measurement drives the animation.
    <div className="flex min-h-0 max-h-[55vh]">
      <nav className="flex flex-col gap-0.5 w-36 flex-shrink-0 pr-2 border-r border-base-300 overflow-y-auto">
        {TOP_FEATURES.map((f) => (
          <FeatureButton
            key={f.id}
            feature={f}
            active={topFeature === f.id}
            onClick={() => setTopFeature(f.id)}
          />
        ))}
      </nav>

      {topFeature === "tapHold" ? (
        <>
          <nav className="flex flex-col w-44 flex-shrink-0 px-2 border-r border-base-300 overflow-y-auto py-1 gap-0.5">
            <SubTabButton active={subTab === "modtap"} onClick={() => setSubTab("modtap")}>
              {BUILTIN_MOD_TAP}
            </SubTabButton>
            <SubTabButton active={subTab === "layertap"} onClick={() => setSubTab("layertap")}>
              {BUILTIN_LAYER_TAP}
            </SubTabButton>
            <SubTabButton active={subTab === "user"} onClick={() => setSubTab("user")}>
              {t("holdTap.section.userPresets", "User Presets")}
            </SubTabButton>
          </nav>

          <div className="flex-1 pl-4 min-w-0 overflow-y-auto py-1 flex flex-col gap-3">
            {selected && (
              <ActionBar
                isBuiltin={isBuiltinHoldTap(selected)}
                dirty={dirty}
                saving={saving}
                saveError={saveError}
                canReset={canReset}
                onResetDefault={resetToDefault}
                onSave={handleSave}
                onCancel={clearDraft}
              />
            )}

            {subTab === "user" && userPresets.length > 0 && (
              <div className="flex gap-1.5 flex-wrap" role="tablist">
                {userPresets.map((p) => (
                  <PresetTab
                    key={p.id}
                    active={activePresetId === p.id}
                    onClick={() => setSelectedPresetId(p.id)}
                  >
                    {p.displayName}
                  </PresetTab>
                ))}
              </div>
            )}

            {selected ? (
              <div key={selected.id} className="animate-fade-in">
                <BehaviorBody
                  behavior={selected}
                  isBuiltin={isBuiltinHoldTap(selected)}
                  draft={draft}
                  presets={userPresets}
                  getConfig={getConfig}
                  onChange={setDraft}
                />
              </div>
            ) : (
              <CenteredHint>{emptyHint}</CenteredHint>
            )}
          </div>
        </>
      ) : (
        <PowerPanel
          powerSettings={powerSettings}
          powerDraft={powerDraft}
          powerLoadError={powerLoadError}
          powerDebugInfo={powerDebugInfo}
          powerDirty={powerDirty}
          powerSaving={powerSaving}
          powerSaveError={powerSaveError}
          powerSaveNotice={powerSaveNotice}
          onSave={handlePowerSave}
          onCancel={resetPowerDraft}
          onChange={(next) => {
            setPowerSaveNotice(null);
            setPowerDraft(next);
          }}
        />
      )}
    </div>
  );
};


const CenteredHint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center h-full px-6 text-center text-sm text-base-content/40">
    {children}
  </div>
);

const SubTabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`px-3 py-1.5 rounded text-sm text-left cursor-pointer transition-colors ${
      active ? "bg-primary text-primary-content" : "text-base-content hover:bg-base-300"
    }`}
  >
    {children}
  </button>
);

const PresetTab = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    role="tab"
    aria-selected={active}
    className={`px-4 py-1.5 rounded text-sm font-medium cursor-pointer transition-colors ${
      active ? "bg-primary text-primary-content" : "bg-base-100 text-base-content hover:bg-base-300"
    }`}
  >
    {children}
  </button>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sm font-medium text-base-content/60">{children}</span>
);


const FeatureButton = ({
  feature,
  active,
  onClick,
}: {
  feature: TopFeatureSpec;
  active: boolean;
  onClick: () => void;
}) => {
  const { t } = useTranslation();
  const Icon = feature.icon;
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-2 px-3 py-2 rounded text-sm text-left cursor-pointer transition-colors ${
        active ? "bg-primary text-primary-content" : "text-base-content hover:bg-base-300"
      }`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span>{t(feature.labelKey, feature.labelFallback)}</span>
    </button>
  );
};


const ActionBar = ({
  isBuiltin,
  dirty,
  saving,
  saveError,
  canReset,
  onResetDefault,
  onSave,
  onCancel,
}: {
  isBuiltin: boolean;
  dirty: boolean;
  saving: boolean;
  saveError: string | null;
  canReset: boolean;
  onResetDefault: () => void;
  onSave: () => void;
  onCancel: () => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-2 min-h-[1.75rem]">
        <span className="text-sm text-base-content/60 truncate">
          {isBuiltin ? t("holdTap.scope.builtin", "Firmware-wide default") : ""}
        </span>
        <div className="flex gap-2 flex-shrink-0">
          {isBuiltin && (
            <button
              onClick={onResetDefault}
              disabled={!canReset || saving}
              className="px-3 py-1.5 rounded text-sm text-base-content hover:bg-base-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              {t("holdTap.resetDefault", "Restore default")}
            </button>
          )}
          <button
            onClick={onCancel}
            disabled={!dirty || saving}
            className="px-3 py-1.5 rounded text-sm text-base-content hover:bg-base-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {t("holdTap.cancel", "Cancel")}
          </button>
          <button
            onClick={onSave}
            disabled={!dirty || saving}
            className="px-3 py-1.5 rounded text-sm font-medium bg-primary text-primary-content hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {saving ? t("holdTap.saving", "Saving...") : t("holdTap.save", "Save")}
          </button>
        </div>
      </div>
      {saveError ? <div className="text-sm text-red-500">{saveError}</div> : null}
    </div>
  );
};


const BehaviorBody = ({
  behavior,
  isBuiltin,
  draft,
  presets,
  getConfig,
  onChange,
}: {
  behavior: GetBehaviorDetailsResponse;
  isBuiltin: boolean;
  draft: HoldTapConfig | null;
  presets: GetBehaviorDetailsResponse[];
  getConfig: (id: number) => HoldTapConfig | null;
  onChange: (next: HoldTapConfig) => void;
}) => {
  const { t } = useTranslation();

  if (!draft) {
    return <CenteredHint>{t("holdTap.loading", "Loading...")}</CenteredHint>;
  }

  return isBuiltin ? (
    <BuiltinEditor
      builtin={behavior}
      draft={draft}
      presets={presets}
      getConfig={getConfig}
      onChange={onChange}
    />
  ) : (
    <HoldTapConfigFields cfg={draft} onChange={(patch) => onChange({ ...draft, ...patch })} />
  );
};


const BuiltinEditor = ({
  builtin,
  draft,
  presets,
  getConfig,
  onChange,
}: {
  builtin: GetBehaviorDetailsResponse;
  draft: HoldTapConfig;
  presets: GetBehaviorDetailsResponse[];
  getConfig: (id: number) => HoldTapConfig | null;
  onChange: (next: HoldTapConfig) => void;
}) => (
  <div className="flex flex-col gap-4">
    <HoldTapConfigFields cfg={draft} onChange={(patch) => onChange({ ...draft, ...patch })} />
    <PresetOverlaySection
      builtin={builtin}
      draft={draft}
      presets={presets}
      getConfig={getConfig}
      onApply={onChange}
    />
  </div>
);

const PresetOverlaySection = ({
  builtin,
  draft,
  presets,
  getConfig,
  onApply,
}: {
  builtin: GetBehaviorDetailsResponse;
  draft: HoldTapConfig;
  presets: GetBehaviorDetailsResponse[];
  getConfig: (id: number) => HoldTapConfig | null;
  onApply: (cfg: HoldTapConfig) => void;
}) => {
  const { t } = useTranslation();

  const matchedPresetId = useMemo(() => {
    for (const p of presets) {
      const c = getConfig(p.id);
      if (c && configsEqual(c, draft)) return p.id;
    }
    return null;
  }, [presets, getConfig, draft]);

  return (
    <section className="flex flex-col gap-2">
      <SectionLabel>{t("holdTap.applyTitle", "Apply a preset")}</SectionLabel>
      <p className="text-sm text-base-content/60">
        {t("holdTap.applyHint", "Copy a preset's settings onto {{name}}.", {
          name: builtin.displayName,
        })}
      </p>

      {presets.length === 0 ? (
        <p className="text-sm text-base-content/40">
          {t("holdTap.empty.userPresets", "No user presets defined")}
        </p>
      ) : (
        <div className="flex gap-1.5 flex-wrap">
          {presets.map((p) => {
            const cfg = getConfig(p.id);
            const active = matchedPresetId === p.id;
            return (
              <button
                key={p.id}
                disabled={!cfg}
                aria-pressed={active}
                title={cfg ? summarizeConfig(cfg, t) : undefined}
                onClick={() => cfg && onApply(cfg)}
                className={`px-4 py-1.5 rounded text-sm font-medium cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                  active
                    ? "bg-primary text-primary-content"
                    : "bg-base-100 text-base-content hover:bg-base-300"
                }`}
              >
                {p.displayName}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

const PowerSummaryNav = ({
  powerState,
}: {
  powerState: PowerSettingsState | null;
}) => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
      <div className="rounded-2xl border border-base-300 bg-base-100/80 p-5">
        <div className="text-sm font-medium text-base-content/60">
          {t("other.power.idle", "Idle timeout")}
        </div>
        <div className="mt-2 text-2xl font-semibold text-base-content">
          {formatDuration(powerState?.idleTimeoutMs)}
        </div>
      </div>
      <div className="rounded-2xl border border-base-300 bg-base-100/80 p-5">
        <div className="text-sm font-medium text-base-content/60">
          {t("other.power.sleep", "Deep sleep timeout")}
        </div>
        <div className="mt-2 text-2xl font-semibold text-base-content">
          {formatDuration(powerState?.sleepTimeoutMs)}
        </div>
      </div>
    </div>
  );
};

const PowerPanel = ({
  powerSettings,
  powerDraft,
  powerLoadError,
  powerDebugInfo,
  powerDirty,
  powerSaving,
  powerSaveError,
  powerSaveNotice,
  onSave,
  onCancel,
  onChange,
}: {
  powerSettings: PowerSettingsState | null;
  powerDraft: PowerSettingsState | null;
  powerLoadError: string | null;
  powerDebugInfo: string | null;
  powerDirty: boolean;
  powerSaving: boolean;
  powerSaveError: string | null;
  powerSaveNotice: string | null;
  onSave: () => void;
  onCancel: () => void;
  onChange: React.Dispatch<React.SetStateAction<PowerSettingsState | null>>;
}) => {
  const { t } = useTranslation();
  const resolvedPowerDraft = powerDraft ?? powerSettings;
  const canEditPowerSettings = resolvedPowerDraft !== null;

  return (
    <div className="flex-1 min-w-0 overflow-y-auto pl-4 py-1">
      <div className="flex flex-col gap-4 animate-fade-in">
        {canEditPowerSettings ? (
          <>
            <PowerActionBar
              dirty={powerDirty}
              saving={powerSaving}
              saveError={powerSaveError}
              saveNotice={powerSaveNotice}
              onSave={onSave}
              onCancel={onCancel}
            />
            <div className="grid gap-4 xl:grid-cols-[18rem_minmax(0,1fr)]">
              <div className="min-w-0">
                <PowerSummaryNav powerState={resolvedPowerDraft} />
              </div>
              <div className="min-w-0">
                <PowerSettingsEditor draft={resolvedPowerDraft} onChange={onChange} />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-8 text-center">
            <div className="text-sm text-base-content/70">
              {powerLoadError
                ? explainPowerLoadError(powerLoadError)
                : t(
                    "other.power.unsupported",
                    "This firmware does not expose adjustable idle or deep sleep settings."
                  )}
            </div>
            {powerDebugInfo ? (
              <pre className="max-w-full overflow-auto rounded border border-base-300 bg-base-100/80 p-3 text-left text-xs text-base-content/70">
                {powerDebugInfo}
              </pre>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

const PowerActionBar = ({
  dirty,
  saving,
  saveError,
  saveNotice,
  onSave,
  onCancel,
}: {
  dirty: boolean;
  saving: boolean;
  saveError: string | null;
  saveNotice: string | null;
  onSave: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className="sticky top-0 z-10 rounded-2xl border border-base-300 bg-base-100/95 p-5 shadow-sm backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-lg font-semibold text-base-content">
            修改后点击保存
          </div>
          <div className="mt-1 text-sm leading-6 text-base-content/60">
            现在按分钟显示。保存后立即写入键盘，但这些休眠参数只在电池模式下生效。
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <span className="text-sm font-medium text-base-content/60">
            {dirty ? "有未保存修改" : "当前已同步"}
          </span>
        <button
          onClick={onCancel}
          disabled={!dirty || saving}
          className="rounded-lg border border-base-300 bg-base-100 px-4 py-2.5 text-sm font-medium text-base-content transition-colors hover:bg-base-200 disabled:cursor-not-allowed disabled:bg-base-200 disabled:text-base-content/40"
        >
          恢复
        </button>
        <button
          onClick={onSave}
          disabled={!dirty || saving}
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-content transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {saving ? "保存中..." : "保存"}
        </button>
        </div>
      </div>
      {saveError ? <div className="mt-3 text-sm text-red-500">{saveError}</div> : null}
      {!saveError && saveNotice ? (
        <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-700">
          {saveNotice}
        </div>
      ) : null}
    </div>
  );
};

const PowerSettingsEditor = ({
  draft,
  onChange,
}: {
  draft: PowerSettingsState;
  onChange: React.Dispatch<React.SetStateAction<PowerSettingsState | null>>;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="rounded-2xl border border-base-300 bg-base-100/70 p-5">
        <div className="text-2xl font-semibold text-base-content">
          {t("other.power.title", "Power settings")}
        </div>
        <p className="mt-2 text-base leading-7 text-base-content/60">
          {t(
            "other.power.description",
            "Adjust the battery-mode idle and deep sleep timers stored on the keyboard."
          )}
        </p>
      </div>

      <PowerInput
        label={t("other.power.idle", "Idle timeout")}
        hint={t(
          "other.power.idleHint",
          "After this much inactivity, the keyboard enters idle mode."
        )}
        value={draft.idleTimeoutMs}
        presets={[0.5, 1, 2, 5]}
        step={0.5}
        onChange={(idleTimeoutMs) =>
          onChange((prev) => (prev ? { ...prev, idleTimeoutMs } : prev))
        }
      />

      <PowerInput
        label={t("other.power.sleep", "Deep sleep timeout")}
        hint={t(
          "other.power.sleepHint",
          "After this much inactivity, the keyboard enters deep sleep."
        )}
        value={draft.sleepTimeoutMs}
        presets={[5, 15, 30, 60]}
        step={1}
        onChange={(sleepTimeoutMs) =>
          onChange((prev) => (prev ? { ...prev, sleepTimeoutMs } : prev))
        }
      />

      <div className="rounded-xl border border-base-300 bg-base-100/60 p-4 text-sm leading-6 text-base-content/65">
        单位已改成分钟。数值越小越省电，数值越大越不容易休眠。USB 供电时，这把键盘不会进入深度休眠，并且当前固件配置为跳过空闲休眠。
      </div>
    </div>
  );
};

const PowerInput = ({
  label,
  hint,
  value,
  presets,
  step,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  presets: number[];
  step: number;
  onChange: (value: number) => void;
}) => {
  const minutesValue = msToMinutes(value);
  return (
  <label className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100/70 p-5">
    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
      <div className="min-w-0">
        <div className="text-xl font-semibold text-base-content sm:text-2xl">{label}</div>
        <div className="mt-2 text-sm leading-6 text-base-content/60 sm:text-base">{hint}</div>
      </div>
      <div className="shrink-0 rounded-full bg-base-200 px-3 py-1 text-sm font-medium text-base-content/70 whitespace-nowrap">
        {formatDuration(value)}
      </div>
    </div>
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <input
        type="number"
        min={0}
        step={step}
        inputMode="decimal"
        value={minutesValue}
        onChange={(e) => onChange(minutesToMs(Math.max(0, Number(e.target.value) || 0)))}
        className="w-full max-w-[12rem] rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-lg font-semibold text-base-content"
      />
      <span className="text-base text-base-content/60">分钟</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {presets.map((preset) => (
        <button
          key={preset}
          type="button"
          onClick={() => onChange(minutesToMs(preset))}
          className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
            Math.abs(minutesValue - preset) < 0.001
              ? "border-primary bg-primary text-primary-content"
              : "border-base-300 bg-base-100 text-base-content/70 hover:bg-base-200"
          }`}
        >
          {formatMinuteLabel(preset)}
        </button>
      ))}
    </div>
  </label>
  );
};

function msToMinutes(ms: number) {
  return Number((ms / 60000).toFixed(ms % 60000 === 0 ? 0 : 1));
}

function minutesToMs(minutes: number) {
  return Math.max(0, Math.round(minutes * 60000));
}

function formatMinuteLabel(minutes: number) {
  return `${stripTrailingZero(minutes)} 分钟`;
}

function formatDuration(ms?: number | null) {
  if (ms == null) {
    return "--";
  }
  return `${stripTrailingZero(ms / 60000)} 分钟`;
}

function stripTrailingZero(value: number) {
  return Number.isInteger(value) ? `${value}` : value.toFixed(1).replace(/\.0$/, "");
}
