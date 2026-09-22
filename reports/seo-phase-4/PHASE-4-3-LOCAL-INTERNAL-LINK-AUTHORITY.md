# Phase 4.3 — Owner Page Optimization & Local Internal-Link Authority

**Project:** Success Path Mentors  
**Baseline:** `main @ 61222c61c1d58f7a7ec8f4ea9a30d799e61041a8`  
**Research / implementation date:** 2026-09-23  
**Primary inputs:** Phase 4.1 Local Search Demand Map + Phase 4.2 Query Owner Map  
**Status:** IMPLEMENTED — deployment/live validation pending after merge.

## 1. Decision

Phase 4.1 identified Hamilton as the strongest current Ontario local search signal in the available seven-day GSC sample:

- query cluster: `online tutoring hamilton on`
- intended owner: `/en/locations/canada/ontario/hamilton`
- observed evidence: 8 impressions / 0 clicks
- owner status: existing canonical location owner

The 56-day threshold for a material Hamilton title/meta/H1 content optimization has **not** been met. Therefore Phase 4.3 does not retarget the Hamilton page or create a new route.

Instead, Phase 4.3 applies a low-risk internal-authority patch: add Hamilton to the shared `LocalAvailabilityBlock` already mounted on the homepage and priority Subject owners.

## 2. Implemented patch

Updated:

`src/components/local/local-availability-block.tsx`

Changes:

- added `hamiltonHref` through the existing `routePath.location(...)` helper;
- added Hamilton as a fourth community card;
- added English Hamilton copy and anchor text;
- added Arabic Hamilton copy and anchor text;
- preserved Ontario, Milton, Toronto and Ontario Curriculum links;
- changed the desktop community grid from three to four columns at the XL breakpoint;
- updated the shared Ontario description to include Hamilton.

## 3. Authority surfaces

The shared block remains mounted on these important authority surfaces:

- Homepage
- Math
- English
- French
- General Science
- Chemistry
- Physics

Therefore Hamilton now receives contextual internal links from the same high-priority pages that already support Ontario, Milton and Toronto.

## 4. Cannibalization guardrail

This patch does **not** create or recommend:

- `/math-tutor-hamilton`
- `/hamilton/math`
- `/hamilton/chemistry`
- `/hamilton/french-tutor`
- `/hamilton/homework-help`
- any city-course or city-service duplicate

The owner remains:

`/en/locations/canada/ontario/hamilton`

for generic Hamilton tutoring intent.

Subject, Service, Course and Curriculum intent continue to follow the Phase 4.2 precedence rules.

## 5. Changes deliberately not made

Because current first-party data is still provisional:

- no Hamilton title change;
- no Hamilton meta-description change;
- no Hamilton H1 change;
- no new Hamilton landing page;
- no new city-subject landing page;
- no canonical, hreflang, sitemap or redirect change;
- no analytics, auth, booking or hosting change.

Milton and Toronto remain PRESERVE / HOLD pending more evidence.

The one-impression `chemistry tutoring → homepage` mismatch remains MONITOR OWNER ASSIGNMENT; this Phase does not change Chemistry architecture.

## 6. Regression coverage

Added:

`tests/phase4-hamilton-internal-authority.test.mjs`

The focused test verifies:

1. Hamilton is linked through the route helper;
2. Ontario, Milton, Toronto and Curriculum links remain;
3. Homepage and priority Subject pages keep mounting `LocalAvailabilityBlock`;
4. forbidden city-subject doorway patterns are absent;
5. the four-card desktop layout is present.

## 7. QA evidence

Temporary branch-only workflow:

`Phase 4.3 Hamilton SEO QA`

GitHub Actions run:

`35787097971`

Results:

- clean `npm ci` — PASS
- focused Phase 4.3 regression — PASS
- TypeScript `npx tsc --noEmit` — PASS
- changed-file ESLint — PASS
- production `npm run build` — PASS

The temporary QA workflow was removed after the successful run and is not part of the intended production diff.

## 8. Phase 4.3 release gate

Repository / QA state: **PASS**.

After merge, final completion requires:

1. production deployment of the merge commit;
2. live smoke test confirming Hamilton appears in the shared local block and links to the existing Hamilton owner.

Until that live evidence exists, Phase 4.3 should be recorded as:

**IMPLEMENTATION + QA PASS / LIVE VALIDATION PENDING**.
