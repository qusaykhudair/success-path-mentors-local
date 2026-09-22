# Phase 4.4 — Grade & Course Intent Expansion

**Project:** Success Path Mentors  
**Baseline:** `main @ 7bf718967e2d393bd0291f6bd358d0fa2265e2dd`  
**Implementation date:** 2026-09-23  
**Primary inputs:** Phase 4.1 Local Search Demand Map + Phase 4.2 Query Owner Map  
**Status:** IMPLEMENTATION + QA PASS — merge / production deployment validation pending.

## 1. Decision

Phase 4.4 does **not** create additional Grade/Course landing pages from the current seven-day GSC sample.

The current architecture already contains eight dedicated English-only Ontario course owners:

### Mathematics

- `/en/subjects/math/grade-9-math-mth1w`
- `/en/subjects/math/grade-10-math-mpm2d`
- `/en/subjects/math/grade-11-functions-mcr3u`
- `/en/subjects/math/grade-12-advanced-functions-mhf4u`
- `/en/subjects/math/grade-12-calculus-vectors-mcv4u`
- `/en/subjects/math/grade-12-data-management-mdm4u`

### Chemistry

- `/en/subjects/chemistry/senior-chemistry-sch3u-sch4u`

### Physics

- `/en/subjects/physics/senior-physics-sph3u-sph4u`

All eight are already present in the sitemap and remain the canonical course-code owners defined in Phase 4.2.

## 2. Identified gap

The parent subject hubs expose broad curriculum structures:

- Math → generic math pathways and grades;
- Chemistry → chemistry strands;
- Physics → physics strands.

Those systems are useful curriculum navigation, but they do not provide an explicit, high-visibility discovery layer for the dedicated Ontario course-code money pages.

Because course-code intent has higher owner precedence than geography or broad subject intent, the safest Phase 4.4 improvement is to strengthen contextual internal discovery of the existing owners rather than create more routes.

## 3. Implemented patch

Added reusable component:

`src/components/subjects/ontario-course-support-block.tsx`

The block:

- is rendered only for English because the dedicated course owners are currently English-only;
- links through the existing `routePath.subject(...)` helper;
- contains only the eight approved existing course owners;
- presents course codes and short course-level descriptions;
- creates no new canonical route or city/course combination.

Mounted on:

- `/en/subjects/math`
- `/en/subjects/chemistry`
- `/en/subjects/physics`

## 4. Course-owner boundaries

The owner precedence from Phase 4.2 remains unchanged:

**Course code / named course → Service → Subject → Curriculum → Generic Location**

Examples:

- `MHF4U tutor Ontario` → MHF4U owner;
- `MHF4U tutor Hamilton` → MHF4U owner;
- `SCH4U chemistry tutor Milton` → senior Chemistry owner;
- `SPH4U physics tutor Toronto` → senior Physics owner.

No `/hamilton/mhf4u`, `/milton/sch4u`, `/toronto/sph4u`, or equivalent city-course route is approved.

## 5. New-page decision

**No new Grade/Course page is approved in Phase 4.4.**

Future course creation requires the Phase 4.1 CREATE CANDIDATE gate:

1. persistent first-party demand across the rolling 56-day window;
2. materially distinct intent;
3. SERP support for a separate page type;
4. no existing owner able to satisfy the intent normally;
5. cannibalization review PASS;
6. direct conversion path to trial registration.

This means no speculative Grade 11/12 English, French, General Science, Biology, or additional course-code pages are created from keyword assumptions alone.

## 6. Regression coverage

Added:

`tests/phase4-course-owner-discovery.test.mjs`

It verifies:

- all eight existing course owners are present in the reusable block;
- Math, Chemistry and Physics hubs mount the block;
- all eight owners remain in the sitemap;
- the block remains English-only while the owners are English-only;
- common city-course doorway patterns are absent.

## 7. QA evidence

Temporary branch-only workflow:

`Phase 4.4 Course Owner SEO QA`

GitHub Actions run:

`35789335642`

Results:

- clean `npm ci` — PASS;
- focused Phase 4.4 regression — PASS (5/5 tests);
- TypeScript `npx tsc --noEmit` — PASS;
- changed-file ESLint — PASS;
- production `npm run build` — PASS;
- optimized production build compiled successfully and generated all static pages.

The temporary QA workflow was removed after the successful run and is not part of the intended production diff.

## 8. Release gate

Repository / QA state: **PASS**.

After merge, final completion requires:

1. Hostinger deployment of the merge commit from `main`;
2. live smoke validation confirming the Ontario course-support section appears on the Math, Chemistry and Physics English hubs.

Until deployment evidence exists, record Phase 4.4 as:

**IMPLEMENTATION + QA PASS / RELEASE VALIDATION PENDING**.
