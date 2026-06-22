import { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Power, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ConnectionContext } from "../rpc/ConnectionContext";
import { call_rpc } from "../rpc/logging";
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
  hasPowerSettings: boolean;
}

type TopFeature = "tapHold" | "power";
type SubTab = "modtap" | "layertap" | "user";

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
  hasPowerSettings,
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
    if (!conn || !powerDraft) {
      return;
    }

    setPowerSaveError(null);
    setPowerSaving(true);
    try {
      const response = await call_rpc(conn, {
        core: {
          setPowerSettings: {
            idleTimeoutMs: powerDraft.idleTimeoutMs,
            sleepTimeoutMs: powerDraft.sleepTimeoutMs,
          },
        },
      });

      if (!response.core?.setPowerSettings) {
        setPowerSaveError(
          t("other.power.saveFailed", "Failed to save power settings. Please try again.")
        );
        return;
      }

      setPowerSettings(powerDraft);
    } catch (e) {
      console.error("Failed to save power settings", e);
      setPowerSaveError(
        t("other.power.saveFailed", "Failed to save power settings. Please try again.")
      );
    } finally {
      setPowerSaving(false);
    }
  };

  const resetPowerDraft = () => {
    setPowerDraft(powerSettings);
    setPowerSaveError(null);
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
          hasPowerSettings={hasPowerSettings}
          powerDirty={powerDirty}
          powerSaving={powerSaving}
          powerSaveError={powerSaveError}
          onSave={handlePowerSave}
          onCancel={resetPowerDraft}
          onChange={setPowerDraft}
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
            {saving ? t("holdTap.saving", "Saving…") : t("holdTap.save", "Save")}
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
    return <CenteredHint>{t("holdTap.loading", "Loading…")}</CenteredHint>;
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
  powerSettings,
}: {
  powerSettings: PowerSettingsState | null;
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-3 py-1.5 text-xs uppercase tracking-wide text-base-content/40">
        {t("other.power.summary", "Battery timers")}
      </div>
      <div className="px-3 py-2 rounded text-sm bg-base-100 text-base-content/70">
        <div className="font-medium">{t("other.power.idle", "Idle timeout")}</div>
        <div className="text-xs opacity-70">{formatDuration(powerSettings?.idleTimeoutMs)}</div>
      </div>
      <div className="px-3 py-2 rounded text-sm bg-base-100 text-base-content/70">
        <div className="font-medium">{t("other.power.sleep", "Deep sleep timeout")}</div>
        <div className="text-xs opacity-70">{formatDuration(powerSettings?.sleepTimeoutMs)}</div>
      </div>
    </>
  );
};

const PowerPanel = ({
  powerSettings,
  powerDraft,
  hasPowerSettings,
  powerDirty,
  powerSaving,
  powerSaveError,
  onSave,
  onCancel,
  onChange,
}: {
  powerSettings: PowerSettingsState | null;
  powerDraft: PowerSettingsState | null;
  hasPowerSettings: boolean;
  powerDirty: boolean;
  powerSaving: boolean;
  powerSaveError: string | null;
  onSave: () => void;
  onCancel: () => void;
  onChange: React.Dispatch<React.SetStateAction<PowerSettingsState | null>>;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 min-w-0 overflow-y-auto pl-4 py-1">
      <div className="flex flex-col gap-4 animate-fade-in">
        {hasPowerSettings && powerDraft ? (
          <>
            <PowerActionBar
              dirty={powerDirty}
              saving={powerSaving}
              saveError={powerSaveError}
              onSave={onSave}
              onCancel={onCancel}
            />
            <div className="grid gap-4 lg:grid-cols-[15rem_minmax(0,1fr)]">
              <div className="min-w-0">
                <PowerSummaryNav powerSettings={powerSettings} />
              </div>
              <div className="min-w-0">
                <PowerSettingsEditor draft={powerDraft} onChange={onChange} />
              </div>
            </div>
          </>
        ) : (
          <CenteredHint>
            {t(
              "other.power.unsupported",
              "This firmware does not expose adjustable idle or deep sleep settings."
            )}
          </CenteredHint>
        )}
      </div>
    </div>
  );
};

const PowerActionBar = ({
  dirty,
  saving,
  saveError,
  onSave,
  onCancel,
}: {
  dirty: boolean;
  saving: boolean;
  saveError: string | null;
  onSave: () => void;
  onCancel: () => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-end gap-2 min-h-[1.75rem]">
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
          {saving ? t("other.power.saving", "Saving...") : t("holdTap.save", "Save")}
        </button>
      </div>
      {saveError ? <div className="text-sm text-red-500">{saveError}</div> : null}
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
    <div className="flex flex-col gap-4 min-w-0">
      <div className="rounded-xl border border-base-300 bg-base-100/70 p-4">
        <div className="text-base font-medium text-base-content">
          {t("other.power.title", "Power settings")}
        </div>
        <p className="mt-1 text-sm text-base-content/60">
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
        presets={[30000, 60000, 120000, 300000]}
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
        presets={[300000, 900000, 1800000, 3600000]}
        onChange={(sleepTimeoutMs) =>
          onChange((prev) => (prev ? { ...prev, sleepTimeoutMs } : prev))
        }
      />

      <div className="rounded border border-base-300 bg-base-100/60 p-3 text-sm text-base-content/60">
        {t(
          "other.power.note",
          "Values are stored in milliseconds. Lower values save more battery, higher values wake less often."
        )}
      </div>
    </div>
  );
};

const PowerInput = ({
  label,
  hint,
  value,
  presets,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  presets: number[];
  onChange: (value: number) => void;
}) => (
  <label className="flex flex-col gap-3 rounded-xl border border-base-300 bg-base-100/70 p-4">
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="text-sm font-medium text-base-content">{label}</div>
        <div className="text-sm text-base-content/60">{hint}</div>
      </div>
      <div className="text-xs text-base-content/50 whitespace-nowrap">
        {formatDuration(value)}
      </div>
    </div>
    <div className="flex items-center gap-3">
      <input
        type="number"
        min={0}
        step={1000}
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className="w-36 rounded border border-base-300 bg-base-100 px-3 py-2 text-sm"
      />
      <span className="text-sm text-base-content/50">ms</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {presets.map((preset) => (
        <button
          key={preset}
          type="button"
          onClick={() => onChange(preset)}
          className={`rounded-full border px-3 py-1 text-xs transition-colors ${
            value === preset
              ? "border-primary bg-primary text-primary-content"
              : "border-base-300 bg-base-100 text-base-content/70 hover:bg-base-200"
          }`}
        >
          {formatDuration(preset)}
        </button>
      ))}
    </div>
  </label>
);

function formatDuration(ms?: number | null) {
  if (ms == null) {
    return "--";
  }
  if (ms < 1000) {
    return `${ms} ms`;
  }
  const seconds = ms / 1000;
  if (seconds < 60) {
    return `${seconds.toFixed(seconds % 1 === 0 ? 0 : 1)} s`;
  }
  const minutes = seconds / 60;
  return `${minutes.toFixed(minutes % 1 === 0 ? 0 : 1)} min`;
}
