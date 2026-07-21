import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // PLACEHOLDER — set to the business's real timezone (likely a
    // Canadian zone, given the location list in docs/Overview.md) once
    // confirmed. UTC just needs to be *fixed* to silence next-intl's
    // environment-fallback warning during static rendering.
    timeZone: "UTC",
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
