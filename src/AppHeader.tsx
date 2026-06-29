import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { useConnectedDeviceData } from "./rpc/useConnectedDeviceData";
import { useSub } from "./usePubSub";
import { useContext, useEffect, useState } from "react";
import { useModalRef } from "./misc/useModalRef";
import { LockStateContext } from "./rpc/LockStateContext";
import { LockState } from "@zmkfirmware/zmk-studio-ts-client/core";
import { ConnectionContext } from "./rpc/ConnectionContext";
import { ChevronDown, Undo2, Redo2, Save, Trash2, Languages, Cable, CheckCircle2 } from "lucide-react";
import { Tooltip } from "./misc/Tooltip";
import { GenericModal } from "./GenericModal";
import { useTranslation } from "react-i18next";
import { withBasePath } from "./misc/baseUrl";

export interface AppHeaderProps {
  connectedDeviceLabel?: string;
  extraSaveEnabled?: boolean;
  onSave?: () => void | Promise<void>;
  onDiscard?: () => void | Promise<void>;
  onUndo?: () => Promise<void>;
  onRedo?: () => Promise<void>;
  onResetSettings?: () => void | Promise<void>;
  onDisconnect?: () => void | Promise<void>;
  canUndo?: boolean;
  canRedo?: boolean;
}

function HeaderActionButton({
  label,
  icon,
  onPress,
  disabled,
  prominent = false,
}: {
  label: string;
  icon: React.ReactNode;
  onPress?: () => void | Promise<void>;
  disabled?: boolean;
  prominent?: boolean;
}) {
  return (
    <Button
      className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
        prominent
          ? "bg-primary text-primary-content enabled:hover:opacity-90"
          : "border border-base-300 bg-base-100 text-base-content enabled:hover:bg-base-200"
      } disabled:opacity-50`}
      isDisabled={disabled}
      onPress={onPress}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Button>
  );
}

export const AppHeader = ({
  connectedDeviceLabel,
  extraSaveEnabled,
  canRedo,
  canUndo,
  onRedo,
  onUndo,
  onSave,
  onDiscard,
  onDisconnect,
  onResetSettings,
}: AppHeaderProps) => {
  const { t, i18n } = useTranslation();
  const [showSettingsReset, setShowSettingsReset] = useState(false);
  const logoSrc = withBasePath("zmk.svg");

  const lockState = useContext(LockStateContext);
  const connectionState = useContext(ConnectionContext);

  useEffect(() => {
    if (
      (!connectionState.conn ||
        lockState != LockState.ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED) &&
      showSettingsReset
    ) {
      setShowSettingsReset(false);
    }
  }, [lockState, showSettingsReset]);

  const showSettingsRef = useModalRef(showSettingsReset);
  const [unsaved, setUnsaved] = useConnectedDeviceData<boolean>(
    { keymap: { checkUnsavedChanges: true } },
    (r) => r.keymap?.checkUnsavedChanges
  );

  useSub("rpc_notification.keymap.unsavedChangesStatusChanged", (unsaved) =>
    setUnsaved(unsaved)
  );

  return (
    <header className="top-0 left-0 right-0 flex max-w-full items-center justify-between gap-4 border-b border-base-300 bg-base-100/95 px-4 py-3 backdrop-blur">
      <div className="flex min-w-0 items-center gap-3">
        <img src={logoSrc} alt="ZMK Logo" className="h-10 rounded-xl" />
        <div className="min-w-0">
          <p className="truncate text-base font-semibold">{t("header.studio")}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-base-content/65">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 ${
                connectedDeviceLabel
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-base-200 text-base-content/60"
              }`}
            >
              {connectedDeviceLabel ? <CheckCircle2 className="size-3.5" /> : <Cable className="size-3.5" />}
              {connectedDeviceLabel ? "已连接" : "未连接"}
            </span>
            <span className="truncate">
              {connectedDeviceLabel
                ? "修改后记得点“保存到键盘”"
                : "先连接键盘，再开始编辑"}
            </span>
          </div>
        </div>
      </div>
      <GenericModal ref={showSettingsRef} className="max-w-[50vw]">
        <h2 className="my-2 text-lg">{t("header.resetSettings")}</h2>
        <div>
          <p>{t("header.resetWarning")}</p>
          <p>{t("header.continue")}</p>
          <div className="flex justify-end my-2 gap-3">
            <Button
              className="rounded bg-base-200 hover:bg-base-300 px-3 py-2"
              onPress={() => setShowSettingsReset(false)}
            >
              {t("common.cancel")}
            </Button>
            <Button
              className="rounded bg-base-200 hover:bg-base-300 px-3 py-2"
              onPress={() => {
                setShowSettingsReset(false);
                onResetSettings?.();
              }}
            >
              {t("header.restoreStock")}
            </Button>
          </div>
        </div>
      </GenericModal>
      <div className="flex items-center justify-end gap-2">
        <MenuTrigger>
          <Button
            className="inline-flex max-w-[16rem] items-center gap-2 rounded-xl border border-base-300 bg-base-100 px-3 py-2 text-sm transition-colors hover:bg-base-200 rac-disabled:opacity-50"
            isDisabled={!connectedDeviceLabel}
          >
            <span className="truncate">{connectedDeviceLabel || "当前设备"}</span>
            <ChevronDown className="inline-block w-4 shrink-0" />
          </Button>
          <Popover>
            <Menu className="overflow-hidden rounded-xl bg-base-100 text-base-content shadow-md">
              <MenuItem
                className="px-3 py-2 hover:bg-base-200"
                onAction={onDisconnect}
              >
                {t("header.disconnect")}
              </MenuItem>
              <MenuItem
                className="px-3 py-2 hover:bg-base-200"
                onAction={() => setShowSettingsReset(true)}
              >
                {t("header.restoreStock")}
              </MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
        <Tooltip label={t("common.language")}>
          <MenuTrigger>
            <Button
              className="flex items-center justify-center rounded-xl border border-base-300 bg-base-100 p-2.5 enabled:hover:bg-base-200 disabled:opacity-50"
            >
              <Languages className="inline-block w-4" aria-label="Language" />
            </Button>
            <Popover>
              <Menu className="shadow-md rounded bg-base-100 text-base-content cursor-pointer overflow-hidden">
                <MenuItem
                  className="px-2 py-1 hover:bg-base-200"
                  onAction={() => i18n.changeLanguage("en")}
                >
                  English
                </MenuItem>
                <MenuItem
                  className="px-2 py-1 hover:bg-base-200"
                  onAction={() => i18n.changeLanguage("zh")}
                >
                  中文
                </MenuItem>
              </Menu>
            </Popover>
          </MenuTrigger>
        </Tooltip>

        {onUndo && (
          <HeaderActionButton
            label={t("common.undo")}
            icon={<Undo2 className="inline-block w-4" aria-label="Undo" />}
            disabled={!canUndo}
            onPress={onUndo}
          />
        )}

        {onRedo && (
          <HeaderActionButton
            label={t("common.redo")}
            icon={<Redo2 className="inline-block w-4" aria-label="Redo" />}
            disabled={!canRedo}
            onPress={onRedo}
          />
        )}
        <HeaderActionButton
          label="保存到键盘"
          icon={<Save className="inline-block w-4" aria-label="Save" />}
          disabled={!unsaved && !extraSaveEnabled}
          onPress={onSave}
          prominent
        />
        <HeaderActionButton
          label="放弃改动"
          icon={<Trash2 className="inline-block w-4" aria-label="Discard" />}
          disabled={!unsaved}
          onPress={onDiscard}
        />
      </div>
    </header>
  );
};
