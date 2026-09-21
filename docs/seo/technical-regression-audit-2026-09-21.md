# Production Technical Regression Audit — 2026-09-21

Scope: live production at `https://successpathmentors.net` plus `main` in `SuccessPathMentors/SuccessPath-Website-development-`.

## Exit gate

- Critical technical errors: 0
- All exceptions logged, owned, remediated, and retested before the technical regression phase is closed.

## Verified PASS items

- `robots.txt` is live and allows public crawling while blocking private/internal routes.
- `sitemap.xml` is live.
- Apex root resolves to `/en` with canonical `/en`.
- HTTP apex redirects to HTTPS.
- Legacy exam-preparation URLs resolve to `/en/services/exam-preparation`.
- `/de/de` and `/de/de/*` legacy Germany paths redirect to canonical `/de` and `/de/*` paths.
- `/en/register` and `/de/register` emit `noindex, follow`.
- Unknown `/en/*` and `/de/*` routes return 404.
- Representative English subject, location, about, how-it-works, contact, registration, and exam-preparation templates render in production.
- Representative Germany tutoring, language, school, and adult child pages render in production.
- Representative North America and French templates emit JSON-LD.
- Representative canonical metadata is correct; no canonical disaster found.

## Open P1 exceptions

### 1. Germany default-locale internal links still use `/de/de/*`

Live `/de` emits redirecting links such as `/de/de/tutoring/one-to-one`, `/de/de/languages/english`, `/de/de/school/grades-1-6`, and `/de/de/trial`.

The redirect safety net works, but internal links should point directly to canonical paths. Use `getMarketLocalePath` and `getMarketChildPath` instead of constructing `/de/${locale}` manually.

### 2. Germany indexable child landing pages are missing from the XML sitemap

`src/app/sitemap.ts` currently emits Germany roots only (`/de`, `/de/en`, `/de/ar`). Real indexable tutoring/language/school/adult landing pages exist and should be emitted for the supported de/en/ar equivalents. Auth/trial utilities must remain excluded.

### 3. Germany child-page hreflang is incomplete

The Germany root has `de-DE`, `en-DE`, `ar-DE`, and `x-default` alternates, but real equivalent Germany child landing pages currently define canonical/OG metadata without language alternates.

### 4. Unknown French paths redirect to `/fr/programme-francais`

Arbitrary invalid `/fr/*` URLs currently redirect to the French programme root instead of returning 404. Preserve the intended `/fr` root redirect, but unknown unsupported French paths should 404 unless an explicit legacy redirect is documented.

### 5. `www` host is blocked before the application redirect

A live request to `https://www.successpathmentors.net/en` returned HTTP 403. The application contains www→apex redirect logic, but the request does not appear to reach it. This requires DNS/Hostinger/domain-alias correction and retest.

## Open P2 exceptions

### Germany structured-data parity

No `application/ld+json` was detected on the live Germany homepage or representative Germany tutoring child page. Add only truthful schema matching visible content: WebPage / Service / BreadcrumbList as appropriate. Do not invent ratings, outcomes, credentials, or local-office claims.

## Deferred to Performance Sprint

Core Web Vitals and mobile field performance were not declared PASS in this regression pass. Run a dedicated CrUX/PageSpeed template/device audit for LCP, INP, and CLS.

## Current gate

**NOT CLOSED** — 0 P0 issues; 5 P1 exceptions (4 code + 1 hosting); 2 P2 schema exceptions.
