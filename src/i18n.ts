import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import zhTranslations from "./locales/zh.json";

const zhTranslationOverrides = {
  lighting: {
    lowBattery: {
      title: "低电量提醒",
      pickHint: "点击上方键盘，修改低电量提醒要闪烁的按键。",
      period: "闪烁周期",
      color: "提醒颜色",
      threshold: "低电量阈值",
      duration: "亮灯时长",
      demo: "提醒演示",
      demoOn: "开启演示",
      demoOff: "关闭演示",
      demoActive: "演示中：忽略实际电量，按当前设置闪烁。",
      demoInactive: "未演示：仅在实际低电量时触发。",
    },
  },
  other: {
    feature: {
      power: "电源",
    },
    power: {
      summary: "电池休眠时间",
      idle: "空闲休眠",
      sleep: "深度休眠",
      saveFailed: "保存电源设置失败，请重试。",
      saving: "保存中...",
      unsupported: "当前固件没有开放空闲休眠或深度休眠的可调设置。",
      title: "电源设置",
      description: "调整键盘在电池模式下的空闲休眠和深度休眠时间。",
      idleHint: "达到这个无操作时间后，键盘进入空闲休眠。",
      sleepHint: "达到这个无操作时间后，键盘进入深度休眠。",
      note: "这里的数值单位都是毫秒。数值越小越省电，数值越大越不容易休眠。",
    },
  },
};

const zhResources = {
  ...(zhTranslations as Record<string, unknown>),
  lighting: {
    ...((zhTranslations as any).lighting ?? {}),
    ...zhTranslationOverrides.lighting,
  },
  other: {
    ...((zhTranslations as any).other ?? {}),
    feature: {
      ...((zhTranslations as any).other?.feature ?? {}),
      ...zhTranslationOverrides.other.feature,
    },
    power: {
      ...((zhTranslations as any).other?.power ?? {}),
      ...zhTranslationOverrides.other.power,
    },
  },
};

// 获取浏览器语言或从 localStorage 中读取用户选择的语言
const getInitialLanguage = () => {
  const saved = localStorage.getItem("language");
  if (saved) {
    return saved;
  }
  
  const browserLang = navigator.language.startsWith("zh") ? "zh" : "en";
  return browserLang;
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    zh: { translation: zhResources },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// 监听语言变化，保存到 localStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
