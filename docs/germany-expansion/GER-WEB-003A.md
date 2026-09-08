# GER-WEB-003A — Middleware/Proxy Consolidation & Production Routing Verification

## Scope and baseline

Branch: codex/ger-web-003a-proxy-consolidation. Fetched parent origin/codex/ger-web-003-routing at e002d2c0372470ae2a79010ae1d9eb1c74b03276; the starting working tree was clean. Inspected both request conventions, global routing, root/locale/Germany layouts, Germany catch-all page and routing helpers/guard in full.

Baseline command: `node --test tests/markets.test.mjs tests/market-adoption.test.mjs tests/market-routing.test.mjs`. Result: 20 tests, 20 passed, 0 failed, 0 cancelled, 0 skipped, 0 todo; duration 7695.9565 ms; exit 0.

Baseline production command: `npm.cmd run build` (package script: `next build`, Next.js 16.2.6 / Turbopack). Exit 1:

```text
Error: Both middleware file "./src\src\middleware.ts" and proxy file "./src\src\proxy.ts" are detected. Please use "./src\src\proxy.ts" only. Learn more: https://nextjs.org/docs/messages/middleware-to-proxy
```

## Middleware/proxy differences and consolidation

Removed src/middleware.ts and retained src/proxy.ts as the single Next.js request convention, following the actual build diagnostic. No obsolete middleware behavior was copied into proxy.

| Aspect | Removed middleware | Retained proxy |
|---|---|---|
| Export | default middleware | default proxy |
| Germany namespace | No bypass; falls into global next-intl | Config-derived reserved-market bypass before next-intl |
| French | Passes every /fr descendant through | Passes /fr and programme-francais descendants; redirects other French paths to /fr/programme-francais |
| CSP script-src before this unit | self, unsafe-inline | self, unsafe-inline, unsafe-eval |
| Matcher source escape | One backslash before dot, lost by JavaScript string parsing | Two backslashes in source preserve the regex literal-dot escape |
| Remaining behavior | next-intl EN/AR | next-intl EN/AR retained |

All other CSP directives and all eight non-CSP security headers had identical values: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy, Cross-Origin-Resource-Policy and X-DNS-Prefetch-Control. Quoting style of upgrade-insecure-requests differed without changing its value. The approved proxy matcher remains byte-for-byte unchanged.

## Security decision

Restrict unsafe-eval to NODE_ENV=development. Production retains `script-src 'self' 'unsafe-inline'` and no unsafe-eval. All other directives and security headers remain unchanged; no nonce or broad CSP redesign.

Evidence: installed Next.js 16.2.6 documentation at node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md, line 42, explains that React development debugging needs eval while production React/Next.js do not use it by default. The same document shows development-only allowances. Searches found no direct eval/new Function usage in application src or the installed @n8n/chat dist files. No application-specific production requirement was found. This is source/documentation evidence, not a claim of complete browser CSP compatibility testing.

## Route and security regressions

Post-change command: `node --test tests/markets.test.mjs tests/market-adoption.test.mjs tests/market-routing.test.mjs`. Result: 21 tests, 21 passed, 0 failed, 0 cancelled, 0 skipped, 0 todo; duration 22819.7673 ms; exit 0.

New coverage checks that only src/proxy.ts remains among root/src request convention files; every response branch retains the full CSP and all other security headers in production and development. Existing matcher is asserted. Expanded next-intl checks cover both login and registration languages.

- /de, /de/de, /de/en, /de/ar: reserved namespace bypass; actual page guard calls notFound while Germany is disabled.
- Unsupported /de/fr and deeper Germany routes: rejected at the actual route boundary.
- /en and /ar: continue through global next-intl; output baseline comparisons pass.
- /en/login, /ar/login, /en/register, /ar/register: unchanged helpers and next-intl processing; external LMS-login exclusion passes.
- /fr and /fr/programme-francais: approved bypass preserved; /fr/other redirect preserved. French source was not changed.
- Germany.enabled remains false; default de and supported de/ar/en remain unchanged. Germany contact values remain +49 1512 3974353, 4915123974353 and europe@successpathmentors.net.

Targeted ESLint: `node node_modules/eslint/bin/eslint.js src/proxy.ts tests/market-routing.test.mjs` — exit 0, no diagnostics. Git whitespace check passed.

An additional stdin Node ESM probe using the real next-intl middleware (instead of the test mock) could not run outside the framework bundler: exit 1, ERR_MODULE_NOT_FOUND for next/server imported by next-intl/dist/esm/production/middleware/middleware.js. No dependency or module-resolution changes were attempted. This standalone probe failure is separate from production build results and does not establish a route regression.

## Production build and root-layout verification

Post-consolidation command: `npm.cmd run build`. Exit code: 1. The build passed convention discovery and compiled successfully in 9.6 minutes; the original dual-convention error is gone. It then failed TypeScript validation:

```text
Failed to type check.

.next/dev/types/routes.d.ts:99:9
Type error: Type expected.

  97 |   }
  98 | }
> 99 |  {slug}</div>
     |         ^
 100 |    * }
 101 |    * ```
 102 |    */

Next.js build worker exited with code: 1 and signal: null
```

The failure is in the pre-existing generated development declarations included by tsconfig.json. Earlier GER-WEB-002/003 reports already identify generated .next syntax corruption. Removing the convention blocker exposed this next validation blocker; no generated declaration, tsconfig or unrelated source repair was attempted. The build-generated next-env.d.ts import switch from .next/dev/types/routes.d.ts to .next/types/routes.d.ts was reverted to its parent content so it is not included in this work unit.

No root-layout/document-structure error occurred during compilation. Root, locale and Germany layouts remain unchanged. Full prerender/production HTTP verification was not reached because type checking failed; compilation success alone does not prove final rendered document behavior. No production server was started from the incomplete build.

## Remaining blockers

The original middleware/proxy conflict is resolved. Generated .next/dev/types/routes.d.ts syntax corruption remains an unrelated pre-existing blocker to completing the production build. Framework-mocked route/security regression tests pass, but deployed HTTP status and browser CSP verification remain pending a separately authorized build-artifact repair. No claim is made that the full production build is green.

## Files and work-unit boundaries

Created: docs/germany-expansion/GER-WEB-003A.md.

Modified: src/proxy.ts, tests/market-routing.test.mjs, docs/germany-expansion/STATUS.md.

Deleted: src/middleware.ts.

No business values, UI, translations, services, pricing, SEO activation, sitemap, analytics, registration flow or authentication implementation changed. GER-WEB-004 and UI-WEB-001 were not started. Germany remains disabled. No merge is authorized or performed.

Status: READY FOR REVIEW
