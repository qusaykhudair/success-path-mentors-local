import type { Locale } from "./routing";

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return localeDirection[locale];
}
