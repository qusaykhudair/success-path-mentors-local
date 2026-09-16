# GER-WEB-003 — Germany Route Contract & Market-Scoped Routing Foundation

## 1. Objective

Establish and verify the Germany market routing contract without activation, UI, content, localization, services or pricing publication.

## 2. Baseline

Fetched origin and created `codex/ger-web-003-routing` from the current `origin/feature/germany-expansion`, commit `a36594cd3903cf2311c06a6624621966b09e80e5`. The parent and working tree were clean. Read AGENTS.md, STATUS.md and ARCHITECTURE.md.

The parent already contained `market-routing.ts`, `market-route-boundary.ts`, the Germany optional catch-all shell, local not-found, noindex layout, proxy namespace bypass and seven routing tests. These are inherited implementation, not new files in this branch. This work completes the missing pathname-to-market API and strengthens the existing tests rather than replacing working infrastructure.

Before implementation: `node --test tests/markets.test.mjs tests/market-adoption.test.mjs` — 12 tests, 12 passed, 0 failed, 0 cancelled, 0 skipped, 0 todo; duration 16649.241 ms. Existing routing suite separately: 7 tests, 7 passed, 0 failed, 0 cancelled, 0 skipped, 0 todo; duration 1396.8642 ms.

## 3. Architecture implemented

Keep `markets.ts` as unchanged primitive leaf configuration. Dependency direction is configuration → routing helpers → proxy / route boundary → Germany page. No reverse imports or circular dependencies are introduced.

Retain `src/app/de/[[...marketSegments]]/page.tsx` instead of adding competing explicit root and language pages. One existing optional catch-all handles the root, validates a single language segment and rejects deeper paths. This is the minimum existing page hierarchy and keeps invalid Germany paths inside the market boundary. The existing Germany layout supplies html/body because the shared root layout returns children; it contains no visual components. Local not-found returns null to avoid the global not-found redirect.

## 4. Route contract

| Path | Meaning | Current result |
|---|---|---|
| /de | Germany market root | notFound() |
| /de/de | Germany / German | notFound() |
| /de/en | Germany / English | notFound() |
| /de/ar | Germany / Arabic | notFound() |
| /de/fr, /de/es, /de/xyz, /de/foo | Germany / unsupported language | notFound() |
| /de/en/contact | Undefined deeper route | notFound() |

Future enabled root redirects to the configured default through `getMarketLocalePath`, currently `/de/de`. Enabled fixtures render no UI for valid language roots. Production configuration is never mutated by these fixtures.

## 5. Market-routing helper design

- `getMarketRootPath(id): MarketPath` derives the market root from publicSlug.
- `getMarketLocalePath(id, language?): MarketPath` validates the configured language; omission uses defaultLanguage. Germany outputs /de/de, /de/en and /de/ar.
- `isMarketLanguage(id, value: unknown): value is MarketLanguage` accepts configured languages and safely rejects invalid runtime values.
- `getMarketFromPathname(pathname): MarketConfig | undefined` is the new whole-segment namespace lookup, independent of enabled state and language validity. Unprefixed North America paths return undefined because this lookup classifies reserved market namespaces.
- `isReservedMarketPathname(pathname): boolean` now delegates to that lookup, maintaining existing proxy behavior.
- `resolveMarketRoute(id, segments?): MarketRoute | undefined` resolves only root or one configured language segment.
- `getMarketLanguageDirection(language)` retains the existing ltr/rtl helper.
- `requireMarketRoute(id, segments?): MarketRoute` is the existing Next.js boundary guard: invalid routes or disabled markets call notFound().

## 6. Proxy behavior

No direct proxy.ts edit is needed: it already calls isReservedMarketPathname before global next-intl. The helper now uses the shared pathname lookup. /de, /de/, supported languages, /de/fr and /de/anything all bypass global locale processing. Language validation remains in the route layer. Existing security headers, matcher, EN/AR handling and French bypass/redirect remain unchanged.

## 7. Disabled-market behavior

The actual page invokes requireMarketRoute before redirect or render. Tests invoke that page with mocked Next navigation and assert the exact notFound sentinel for root, valid languages, invalid languages and deeper paths. Disabled Germany never redirects to EN/AR/FR and exposes no placeholder or marketing UI.

## 8. Unsupported locale behavior

Only configured de/ar/en values are valid. Unsupported, empty, undefined and invalid runtime language values are rejected by validation. An omitted language argument to the path builder intentionally selects the configured default. Namespace classification does not validate the second segment.

## 9. EN/AR protection

Global locales remain ['en', 'ar'], default en. isSupportedLocale('en') and ('ar') remain true; ('de') remains false. Home, login and registration helpers retain /en, /ar, /en/login, /ar/login, /en/register and /ar/register. Existing output regression tests pass. Authentication, registration workflow, API contracts, contacts and prices are unchanged.

## 10. French protection

French source and routing are unchanged. Tests preserve /fr/programme-francais, French proxy bypass and the existing /fr/other redirect. French is not moved into MarketConfig or used as the Germany template.

## 11. SEO protection

Germany remains disabled and the inherited namespace layout retains robots index:false/follow:false. No sitemap, hreflang, organization areaServed, North America metadata, llms.txt, location architecture or public pricing changes. No messages/de.json or market translation dictionaries were created.

## 12. Files created

- docs/germany-expansion/GER-WEB-003.md
- docs/germany-expansion/reviews/GER-WEB-003.diff

## 13. Files modified

- src/lib/market-routing.ts
- tests/market-routing.test.mjs (already present in the parent)
- docs/germany-expansion/STATUS.md

## 14. Files deleted

None.

## 15. Tests executed

- Required baseline two-suite Node command and existing routing suite, as recorded above.
- After implementation: `node --test tests/markets.test.mjs tests/market-adoption.test.mjs tests/market-routing.test.mjs`.
- `npm.cmd run typecheck` and `npm.cmd run lint` before and after implementation.
- `npm.cmd run build` started before implementation.
- `npm.cmd test` after implementation.
- Direct targeted ESLint for src/lib/market-routing.ts and tests/market-routing.test.mjs.
- In-memory TypeScript program using project compiler options with incremental disabled, rooted at src/lib/market-routing.ts to check its dependency graph without generated .next inputs.
- `git diff --check` and scoped diff review against the parent.

## 16. Results

Post-implementation focused suite: 20 tests, 20 passed, 0 failed, 0 cancelled, 0 skipped, 0 todo; duration 11269.1185 ms. This includes eight routing tests plus the 12 approved configuration/adoption tests. No focused regression failures. Targeted ESLint passed with no diagnostics. The in-memory routing dependency TypeScript check passed with zero diagnostics. Whitespace check passed.

## 17. Known baseline failures

Typecheck and lint cannot execute the Bash launcher: "The system cannot execute the specified program." Reproduced before and after implementation. npm test stops at that same typecheck failure and does not reach lint/build/full tests.

The baseline build fails because Next.js detects both tracked src/middleware.ts and src/proxy.ts. Both files are inherited and unchanged. This prevents production build and HTTP-level route validation. No unrelated repair was attempted. Historical Worker-dist/generated .next failures were not independently retested and are not presented as current results.

## 18. Risks / follow-up

Focused tests exercise real page/helper/proxy code through the existing TypeScript loader with framework mocks; they do not prove deployed HTTP behavior. Resolve the pre-existing dual middleware/proxy build blocker in a separately authorized task before production runtime verification. Germany activation, market-scoped localization and UI remain separately authorized follow-up work. GER-WEB-004 and UI-WEB-001 were not started; this branch is not merged.

The review diff is an untruncated Git patch against the fetched parent including all implementation, test and documentation changes, excluding the diff artifact itself to avoid recursive self-inclusion. Existing parent routing files naturally do not appear as newly added implementation in this patch.

## 19. Germany activation confirmation

Germany.enabled remains false. Germany is not activated or approved for publication. GER-WEB-003 is ready for external review, not approved.

Status: READY FOR REVIEW
