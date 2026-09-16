# GER-WEB-003 — Germany routing foundation

Germany remains disabled. This unit establishes a reserved market namespace, not a public German-language North America site. No Germany content, translations, registration, navigation or contact UI was created.

## Route architecture

The dependency direction remains configuration to helpers to consumers: `markets.ts` is unchanged and imports no routing code. `market-routing.ts` reads registered markets; the Next-specific boundary and proxy consume those helpers.

`MarketSlug`, `MarketLanguage`, `MarketPath` and `MarketRoute` distinguish the configured market namespace from its language. Route resolution retains the market identity, entry/locale distinction and language direction (`ar` RTL; `de`/`en` LTR). Supported and default languages are read from MarketConfig and checked at runtime.

| Helper | Result |
|---|---|
| getMarketRootPath('germany') | /de |
| getMarketLocalePath('germany') | /de/de |
| getMarketLocalePath('germany', 'de') | /de/de |
| getMarketLocalePath('germany', 'en') | /de/en |
| getMarketLocalePath('germany', 'ar') | /de/ar |

These helpers describe disabled markets too; they do not activate them. Invalid languages throw from the path builder or return no route from the resolver. North America keeps its null slug and existing /en and /ar paths.

The minimal App Router shell is `src/app/de/[[...marketSegments]]/page.tsx`. Its optional catch-all covers the entry, language roots and invalid/deeper requests within the namespace. It calls `requireMarketRoute` before redirecting or returning content. Disabled or invalid routes call `notFound()`. The current configuration therefore rejects /de, /de/de, /de/en, /de/ar, unsupported languages and deeper paths without a redirect.

The namespace includes a minimal html/body layout and an empty local not-found component. These are boundary infrastructure, not a Germany design/layout: the existing global not-found component redirects to '/', so using it would violate the disabled-market contract. The namespace metadata explicitly sets index=false and follow=false. No child providers or global next-intl messages are loaded.

An isolated enabled test fixture proves that the entry redirects to its configured default-language path, while invalid languages remain rejected. Valid language roots currently return null, since content is outside this unit. The production Germany configuration was not changed. A future content unit can use `messages/markets/germany/<language>.json`; no message files or message loader were introduced now.

## Proxy behavior

Before: Germany paths fell through to the global next-intl middleware.

After: a whole-segment match against registered non-null MarketConfig slugs bypasses next-intl, including disabled markets. Thus /de and all descendants reach the local market boundary; /de/fr is classified as a market request and then rejected. /debug, /deutsch and /en/de do not match the reserved namespace. Existing security headers are retained.

EN/AR and root requests still go through the original next-intl handler. French handling was not rewritten: /fr and /fr/programme-francais remain on their existing path, and unsupported French paths retain their existing programme redirect.

## Protection and validation

- Before edits: approved GER-WEB-001/002 focused tests **12/12 passed**.
- After edits: `node --test tests/markets.test.mjs tests/market-adoption.test.mjs tests/market-routing.test.mjs` — **19/19 passed**.
- The routing tests execute the actual proxy with a deterministic next-intl stub, and the actual page/boundary with notFound/redirect sentinels. They verify disabled requests never reach the redirect, the local not-found returns no content, and noindex metadata is present. These are application-contract tests, not a production HTTP/browser test.
- Tests cover configurable slug/default/support, exact Germany paths, RTL, invalid languages, deep-path rejection, prefix boundaries, EN/AR route helpers, French routing, and absence of global or scoped German messages.
- Existing adoption snapshots still pass: North America metadata, areaServed, contact/WhatsApp, pricing and EN/AR/FR component output are unchanged.
- Targeted ESLint for every new/modified source and test file **passed**.
- All required npm scripts were attempted using npm.cmd: typecheck, lint and test remain blocked by the unavailable Bash launcher. npm test does not reach its production build.
- Additional source TypeScript comparison, excluding the corrupt generated declarations and next-env.d.ts, reports exactly the same three errors before/after: api/test-email's unknown request body, and vite.config.ts's missing d1/r2 properties on the empty hosting configuration. **No new source diagnostics.** Existing generated .next failures were not repaired.
- Direct full Node suite: **21 passed, 7 existing failures**. Six need the missing dist/server/index.js Worker artifact; one expects an endpoint absent from the existing auth API source.
- Byte comparison of 16 protected files found no changes, including markets.ts, global routing/i18n, routePath, sitemap, robots, manifest, llms.txt, North America metadata/layout, login, registration and French layout/routes.

Germany was not added to sitemap, hreflang, service-region copy, structured areaServed or North America metadata. Global next-intl locales remain ['en', 'ar'], default 'en', prefix 'always'; global isSupportedLocale('de') remains false. Package versions and deployment architecture were not changed.

## Final inventory

### NEW

- `src/lib/market-routing.ts` — typed contract, path helpers, namespace matching, configured language validation and direction.
- `src/lib/market-route-boundary.ts` — Next-specific disabled/invalid market guard.
- `src/app/de/layout.tsx` — minimal namespace document and noindex metadata.
- `src/app/de/not-found.tsx` — empty local rejection, avoiding the global homepage redirect.
- `src/app/de/[[...marketSegments]]/page.tsx` — guarded entry/language shell, including invalid descendants.
- `tests/market-routing.test.mjs` — route, guard, proxy and legacy-route regression coverage.
- `docs/GER-WEB-003-report.md` — implementation and validation report.

### MODIFIED

- `src/proxy.ts` — the only modified existing production file; imports the reserved-market classifier and bypasses next-intl for matching namespaces. The French branch and ordinary next-intl branch are unchanged.
- `tests/markets.test.mjs` — removes the obsolete GER-WEB-001 assertion that the de directory must not exist. Germany-disabled and no-global-German-message assertions remain; actual disabled boundary coverage is added in the new routing suite.

### DELETED

None.

Germany remains **enabled: false**. The namespace exists only as a rejected, non-indexable routing shell. No Germany content/UI/translations or GER-WEB-004 work was implemented.
