# GER-WEB-002 — Market configuration adoption

Implemented as a refactor of the existing North America application. Germany remains disabled and unrouted. No German translations, country/market detection, dependencies, package version changes, or GER-WEB-003 work were introduced.

## Baseline and audit

The approved GER-WEB-001 focused suite passed 7/7 before edits: default market north-america, Germany disabled, EN/AR-only routing, no src/app/de or messages/de.json. A local filesystem copy of the pre-edit source/tests was retained for comparisons because this workspace has no Git metadata.

The [complete classified source audit](GER-WEB-002-hardcoding-audit.md) contains every match before and after. Business literal-bearing source lines decreased from **84 to 40** (44 fewer). Each source line counts once, even if it contains multiple literals. The metric covers configuration and form values (A/D), excludes reference-only lines and prose, and includes the authoritative defaults still required in markets.ts.

| Class | Before matches | After matches | Treatment |
|---|---:|---:|---|
| A — Business configuration/references | 90 | 48 | Adopt market defaults; preserve legacy facades and email override semantics. |
| B — Localized marketing/help copy | 9 | 9 | Retain translated labels, prose and examples. |
| C — SEO/editorial content | 758 | 758 | Retain location-specific pages and descriptive copy. |
| D — Form options/defaults | 28 | 20 | Adopt registration defaults; preserve Other, browser detection and broader contact options. |
| E — Unrelated/type declarations | 38 | 38 | Retain color tokens, numeric educational data and types. |

## Dependency direction

`markets.ts` is now leaf configuration with no imports. It owns the existing NA business values and environment-backed email/booking defaults. Its country-name table contains English API/structured-data names; translated labels remain in presentation/content modules.

`markets.ts -> site.ts / constants.ts / whatsapp.ts / market-display.ts / registration-options.ts -> consumers` describes the flow of values. Imports run in the opposite direction, from consumers toward the leaf. Existing compatibility exports remain available, and the test loader detects runtime dependency cycles.

The new `contact.publishedEmail` preserves fixed public-email behavior for the footer, French footer, contact copy and organization schema. `contact.email` preserves the prior `NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? default` behavior, including deliberately blank values. These must not be merged without a separately authorized behavior change.

## Behavior verification

- **Registration:** Canada remains the default human-readable API value. Options remain Canada/United States/Other in the same order and with the same Arabic labels. Browser timezone detection is unchanged; missing/throwing detection falls back to America/Toronto. The same 15 configured choices remain, with a detected timezone prepended and deduplicated. Phone examples remain +1 647 000 0000. Workflow, validation, API contract and login behavior are unchanged.
- **WhatsApp:** Number remains 16477875999; display remains +1 647 787 5999. Message helpers were not rewritten. Baseline hashes cover EN/AR/FR trial/general messages, EN/AR package messages and whitespace/encoding. The contact form retains its distinct no-trim encoder; its mocked submission payload, redirect URL and delay match the saved baseline.
- **Telephone/contact:** Telephone remains +1 647 787 5999, tel links remain tel:+16477875999, and organization JSON-LD retains its hyphenated telephone format. Fixed public email remains successpathmentors@gmail.com. Configurable email/booking consumers preserve missing, blank and trimmed override semantics.
- **Contact API:** Byte-identical to the baseline. No changes to Google Apps Script, Nodemailer, payloads, credentials or readiness checks. It still requires explicitly configured credentials rather than silently receiving a market email fallback. Contact country/timezone options and the separate +1 000 000 0000 example remain intact.
- **Pricing:** CAD; prices 110/220/280 and lesson counts 4/8/12 unchanged. Display remains $110/$220/$280 and per-lesson $27.5/$27.5/$23.33. The existing translated Canadian-dollar note remains untouched. pricing-plans.ts is byte-identical.
- **SEO:** EN/AR Open Graph locales, region, country arrays and areaServed output match the baseline. Canonicals, hreflang and sitemap remain unchanged; Germany is not advertised. Descriptive SEO copy was not rewritten.
- **EN/AR/FR output:** Deterministic component-output comparisons cover header, mobile navigation, footer, French footer, pricing, contact form/content, locale layout, home/page metadata, English service schema, manifest and llms.txt. Fixtures were captured from the saved pre-edit source, not regenerated from the refactored code. Comparisons run for absent, custom and blank public email/booking variables. Framework context/hooks are simulated; this does not substitute for a production browser test.

## Validation

- Before editing: `node --test tests/markets.test.mjs` — **7 passed**.
- After editing: `node --test tests/markets.test.mjs tests/market-adoption.test.mjs` — **12 passed**.
- Targeted ESLint for new/changed files excluding the known failing registration file — **passed**. Full direct src/tests lint retains **7 existing errors and 8 warnings**, all in authentication files; registration's existing error moved with the removed timezone lines.
- `npm.cmd run typecheck`, `npm.cmd run lint`, `npm.cmd test` — all attempted; blocked by the existing unavailable Bash launcher. npm test stops at typecheck and does not reach its production build.
- Direct TypeScript check with generated .next declarations included remains blocked by their existing syntax corruption. An additional in-memory comparison excluding those declarations and next-env.d.ts checked the source before/after: exactly the same three errors, in api/test-email (unknown request body) and vite.config.ts (missing d1/r2 properties on the empty hosting config). No new source diagnostics.
- Direct full Node suite — **14 passed, 7 existing failures**: six require the missing dist/server/index.js Worker artifact, one expects an authentication endpoint absent from the existing auth API implementation. None were repaired or hidden.
- Exact byte comparison of 18 protected routing, login, auth/API, contact transport, pricing-data, sitemap/manifest, French-route, package and deployment files — **no changes**.

Full production build/browser validation remains limited by those pre-existing environment/artifact failures. No claim is made that the repository-wide suite is green.

## Final inventory

### NEW

| File | Purpose |
|---|---|
| src/features/auth/registration-options.ts | Existing country labels/API names and browser-timezone behavior backed by default MarketConfig. |
| src/lib/market-display.ts | Preserve telephone URI, Open Graph locale and currency-display formats. |
| tests/market-adoption.test.mjs | Contact, registration, pricing, override and baseline-output regression tests. |
| tests/helpers/ts-loader.mjs | Shared dependency-free TypeScript test loader with cycle detection. |
| tests/helpers/market-output.mjs | Deterministic component/output and mocked contact-submission capture. |
| tests/fixtures/market-output-baseline.json | Pre-edit output hashes for EN/AR and three environment scenarios. |
| scripts/audit-market-configuration.mjs | Reproducible complete-source match classification and reduction report. |
| docs/GER-WEB-002-hardcoding-audit.md | Complete before/after classified match inventory. |
| docs/GER-WEB-002-report.md | Implementation, validation and file inventory. |

### MODIFIED

| Production file | Reason |
|---|---|
| src/config/markets.ts | Own primitive NA business defaults, country names and legacy fixed/configurable email distinction; remove reverse imports. |
| src/config/site.ts | Keep its public API while sourcing email/booking from the default market. |
| src/lib/constants.ts | Preserve legacy CONTACT and organization exports using market values. |
| src/lib/whatsapp.ts | Source number/display from market contact without changing messages or encoding. |
| src/features/auth/registration-form.tsx | Use configured country default, existing country/timezone presentation helpers and phone placeholder. |
| src/components/contact/contact-form.tsx | Replace duplicated WhatsApp number only; retain its encoder and submission logic. |
| src/components/layout/site-header.tsx | Derive phone URI and accessible phone label from market contact. |
| src/components/layout/mobile-nav.tsx | Derive both telephone links from market contact. |
| src/components/layout/site-footer.tsx | Derive fixed public email and WhatsApp display from market contact. |
| src/components/programme-francais/french-program-footer.tsx | Derive the same fixed Gmail mailto/text from market contact, preserving French behavior. |
| src/components/sections/home/pricing.tsx | Derive the currency symbol from CAD configuration while preserving numeric formatting. |
| src/content/pages/contact.ts | Replace only the two direct-contact email values; retain prose and all form options. |
| src/app/[locale]/layout.tsx | Derive existing Open Graph and organization contact/country fields without changing emitted values. |
| src/app/[locale]/page.tsx | Derive existing home Open Graph locales. |
| src/lib/seo/metadata.ts | Derive existing page Open Graph locales. |
| src/lib/seo/english-subject-schema.ts | Derive the same service-country names from areaServed. |
| src/app/llms.txt/route.ts | Derive the existing contact line; preserve descriptive copy and emitted text. |

Test modification: `tests/markets.test.mjs` uses the shared loader and verifies the preserved published email field; its existing route/Germany/login protections remain.

### DELETED

None.

Germany remains **disabled**, with **no public Germany routes or translations**. Public routing and visible EN/AR/FR output are preserved within the tested scope. GER-WEB-003 was not started.
