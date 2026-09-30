import type { Dictionary, Locale } from "./types";
import zhCN from "./dictionaries/zh-CN";
import zhTW from "./dictionaries/zh-TW";
import en from "./dictionaries/en";
import ja from "./dictionaries/ja";

export const LOCALE_STORAGE_KEY = "intelliripple-locale";
export const defaultLocale: Locale = "zh-CN";

export const dictionaries: Record<Locale, Dictionary> = {
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  en,
  ja,
};

export const LOCALES: { id: Locale; label: string; short: string; code: string }[] = [
  { id: "zh-CN", label: "简体中文", short: "简体", code: "简" },
  { id: "zh-TW", label: "繁體中文", short: "繁體", code: "繁" },
  { id: "en", label: "English", short: "EN", code: "EN" },
  { id: "ja", label: "日本語", short: "JA", code: "日" },
];

export function isLocale(value: string): value is Locale {
  return value === "zh-CN" || value === "zh-TW" || value === "en" || value === "ja";
}

export type { Dictionary, Locale };
