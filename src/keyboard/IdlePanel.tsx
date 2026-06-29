import { useTranslation } from "react-i18next";
import { Keyboard, MousePointerClick, Save, WandSparkles } from "lucide-react";

export default function IdlePanel() {
  const { t } = useTranslation();

  return (
    <div className="grid h-full select-none gap-4 rounded-3xl border border-dashed border-base-300 bg-base-100/60 p-6">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-base-200 p-3 text-primary">
          <Keyboard className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-base-content">先从点一个按键开始</h3>
          <p className="mt-1 text-sm leading-6 text-base-content/60">
            {t("idle.hint")}
          </p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
          <div className="mb-2 inline-flex rounded-xl bg-base-200 p-2 text-primary">
            <MousePointerClick className="h-4 w-4" />
          </div>
          <div className="text-sm font-semibold text-base-content">1. 点上方键盘</div>
          <div className="mt-2 text-sm leading-6 text-base-content/70">
            找到你想改的那个键，直接点一下。
          </div>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
          <div className="mb-2 inline-flex rounded-xl bg-base-200 p-2 text-primary">
            <WandSparkles className="h-4 w-4" />
          </div>
          <div className="text-sm font-semibold text-base-content">2. 在下方换功能</div>
          <div className="mt-2 text-sm leading-6 text-base-content/70">
            下面会出现这个键的功能编辑器，你可以改成按键、层、蓝牙等行为。
          </div>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
          <div className="mb-2 inline-flex rounded-xl bg-base-200 p-2 text-primary">
            <Save className="h-4 w-4" />
          </div>
          <div className="text-sm font-semibold text-base-content">3. 保存到键盘</div>
          <div className="mt-2 text-sm leading-6 text-base-content/70">
            改完以后，记得到顶部点“保存到键盘”，否则重启后不会生效。
          </div>
        </div>
      </div>
    </div>
  );
}
