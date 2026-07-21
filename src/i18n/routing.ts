import { defineRouting } from "next-intl/routing";

/**
 * Single source of truth for supported locales.
 * Per docs/05 - Internationalization (i18n) Specification.md.
 *
 * No `pathnames` map: English and Arabic use identical URL slugs
 * (docs/05 shows /en/subjects/math-tutoring and /ar/subjects/math-tutoring
 * — same segment, different locale prefix only), so next-intl's
 * per-route pathname typing isn't needed and would only add friction
 * for dynamic routes like /subjects/[slug].
 */
export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
