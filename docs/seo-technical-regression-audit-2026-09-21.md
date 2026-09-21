# Success Path Mentors — Production Technical Regression Audit

**Audit date:** 21 Sep 2026  
**Production:** `https://successpathmentors.net`  
**Production source of truth:** `SuccessPathMentors/SuccessPath-Website-development-` → `main`

## Exit gate

The technical regression phase is not closed until all P1 exceptions are remediated, QA is complete, changes are deployed, and live routes are re-tested.

## Current result

- P0 critical issues: **0 found**
- P1 remediation: **in progress on PR #10**
- P2 Germany schema parity: **tracked separately in issue #9**
- WWW host redirect: **hosting-blocked in issue #8**

## Confirmed PASS items

- `robots.txt` is reachable and aligned with repository behavior.
- Apex root resolves to `/en`.
- HTTP apex redirects to HTTPS.
- Legacy exam-preparation redirects resolve to the canonical English service route.
- Legacy `/de/de` and `/de/de/*` redirects remain as a safety net.
- EN and Germany registration pages are `noindex, follow`.
- Synthetic unknown EN and DE paths return true 404 responses.
- Representative EN subject/location/about/how-it-works/contact templates render successfully.
- Representative Germany tutoring/language/school/adult child templates render successfully.
- Representative North America/French templates emit structured data.

## P1 exceptions and remediation

### 1. Germany internal `/de/de/*` links — issue #6

Live production currently emits legacy default-German links that redirect through `/de/de/*`.

**Implemented on PR #10:**
- canonical market-routing helpers applied across Germany homepage/header/footer CTA sources;
- source regression guard added for the homepage components;
- legacy `/de/de/*` redirect remains in place as a safety net.

**Still pending before closure:**
- canonicalize the remaining Germany service-template links in `src/components/germany/tutoring-page-view.tsx`;
- run TypeScript/lint/tests/build;
- deploy and re-crawl `/de` plus representative Germany child pages.

### 2. Germany child sitemap inventory — issue #6

**Implemented on PR #10:** real Germany tutoring/language/school/adult content definitions now generate sitemap entries for DE/EN/AR canonical URLs. Auth/trial utility routes remain outside this inventory.

### 3. Germany child hreflang — issue #6

**Implemented on PR #10:** Germany child metadata now emits `de-DE`, `en-DE`, `ar-DE`, and `x-default` where the equivalent content route exists.

### 4. Invalid French routes — issue #7

**Implemented on PR #10:** `/fr` and `/fr/` keep the intentional redirect to `/fr/programme-francais`; unsupported arbitrary `/fr/*` paths now fall through to normal Next.js not-found handling instead of being redirected to programme home.

### 5. WWW canonical host — issue #8

`https://www.successpathmentors.net/en` returned HTTP 403 before the request reached the app-level canonical redirect. This remains a Hostinger/DNS/edge configuration task.

## P2 follow-up

### Germany structured-data parity — issue #9

No `application/ld+json` was detected on the live Germany homepage or representative Germany tutoring landing page. Add only truthful schema supported by visible content after P1 routing/indexability is closed.

## Release rule

PR #10 remains **draft** until:
1. remaining service-template canonical-link cleanup is complete;
2. TypeScript, lint, Node tests, and production build pass;
3. diff review shows no unrelated runtime/config changes;
4. merge/deploy is approved;
5. post-deploy live smoke tests confirm canonical routing, 404 behavior, sitemap, hreflang, and no `/de/de/*` internal reliance.
