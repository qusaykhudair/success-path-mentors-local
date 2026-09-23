# Phase 6.8 — Internal Linking Scale & Authority Distribution

**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Baseline main:** `6269cda1fb6fdb412face018045dcf4a5459f70b`  
**Control issue:** #87  
**Status:** IMPLEMENTED / QA PENDING

## Objective

Scale internal authority across the existing canonical SEO owners without creating new URLs, weakening the Phase 3/4 ownership model, or introducing city-subject/service/course doorway variants.

The controlling hierarchy remains:

> **Course code / named course → Service → Subject → Curriculum → Generic Location → Homepage for brand**

Phase 6.8 does not change metadata, canonicals, titles, H1s, routing, sitemap behavior, or the British Columbia experiment.

## Pre-patch audit

The existing implementation already had several strong authority paths:

- Math → Ontario course owners through `OntarioCourseSupportBlock`.
- Chemistry → SCH3U/SCH4U through `OntarioCourseSupportBlock`.
- Physics → SPH3U/SPH4U through `OntarioCourseSupportBlock`.
- General Science → dedicated Chemistry and Physics specialist owners.
- Subject pages → Ontario / Milton / Toronto / Hamilton / Ontario Curriculum through `LocalAvailabilityBlock`.
- Exam Preparation → Ontario Curriculum, Math, General Science and Homework Help.
- Homework Help → Ontario Curriculum, Math, English, General Science and Exam Preparation.

The material gap was the reverse contextual path from broad subject owners to explicit service-intent owners. A visitor could move from service pages back to subjects, but core subject pillars did not consistently expose the stronger Homework Help / Exam Preparation owner once the user need became explicit.

## Implemented authority-distribution layer

Created:

`src/components/internal/authority-distribution-links.tsx`

The component adds a compact contextual block only to English subject pages because the two service owners are currently English-only production routes.

Canonical destinations:

- Ongoing assignment intent → `/en/services/homework-help`
- Upcoming assessment / test intent → `/en/services/exam-preparation`
- Specialist Chemistry/Physics broad-context return → `/en/subjects/general-science`

### Subject distribution matrix

| Source owner | Added stronger-owner paths | Existing paths preserved | Decision |
|---|---|---|---|
| Math | Homework Help; Exam Preparation | Ontario Math course owners; local/curriculum block | PATCH |
| English | Homework Help; Exam Preparation | English strand architecture; local/curriculum block | PATCH |
| General Science | Homework Help; Exam Preparation | Chemistry; Physics; local/curriculum block | PATCH |
| Chemistry | Homework Help; Exam Preparation; General Science | SCH3U/SCH4U; local/curriculum block | PATCH |
| Physics | Homework Help; Exam Preparation; General Science | SPH3U/SPH4U; local/curriculum block | PATCH |
| French | Homework Help; Exam Preparation; Ontario Curriculum | French canonical owner; local/curriculum block | PATCH via existing related-links system |
| Exam Preparation | Existing subject/curriculum/service related links | Preserved | NO CHANGE |
| Homework Help | Existing subject/curriculum/service related links | Preserved | NO CHANGE |
| Local owners | Existing local authority architecture | Preserved | NO CHANGE |
| British Columbia | EXP-002 protected | No material link-treatment change | HOLD / PROTECTED |

## Anchor and ownership rules

The block intentionally avoids repeating broad exact-match keyword anchors as a ranking tactic. Copy describes the user's next need:

- `Homework help for ongoing assignments`
- `Exam preparation support`
- `Broader General Science support`

This lets the subject page remain the broad subject owner while the dedicated service page receives explicit service intent.

## Locale guard

`AuthorityDistributionLinks` returns `null` when `locale !== 'en'`.

Reason: Homework Help and Exam Preparation are currently English-only public service routes. Arabic subject pages retain their existing subject, curriculum and location pathways and are not sent to an English-only service destination.

French is already English-only in production, so its existing `SeoGapPageShell.relatedLinks` structure was updated directly rather than adding a second related-links section.

## Doorway / cannibalization guardrails

Phase 6.8 creates **no new public URL** and explicitly blocks internal destinations shaped like:

- city + subject
- city + course
- city + service
- `/locations/.../services/...`
- `/locations/.../subjects/...`

Examples that remain prohibited include:

- `/milton/homework-help`
- `/hamilton/exam-preparation`
- `/toronto/mhf4u`
- `/locations/canada/ontario/hamilton/subjects/chemistry`

## Regression coverage

Created:

`tests/phase6-internal-authority-distribution.test.mjs`

The focused guard verifies:

1. canonical Homework Help / Exam Preparation / General Science destinations,
2. English-only service-route protection,
3. component mounting on Math, English, General Science, Chemistry and Physics,
4. French service/curriculum destinations,
5. no city-service/course doorway destinations in the changed source,
6. continued presence of course/specialist authority blocks.

## Files changed

Runtime:

- `src/components/internal/authority-distribution-links.tsx`
- `src/app/[locale]/(catalog)/subjects/math/page.tsx`
- `src/app/[locale]/(catalog)/subjects/english/page.tsx`
- `src/app/[locale]/(catalog)/subjects/general-science/page.tsx`
- `src/app/[locale]/(catalog)/subjects/chemistry/page.tsx`
- `src/app/[locale]/(catalog)/subjects/physics/page.tsx`
- `src/app/[locale]/(catalog)/subjects/french/page.tsx`

Regression:

- `tests/phase6-internal-authority-distribution.test.mjs`

Documentation:

- `reports/seo-phase-6/PHASE-6-8-INTERNAL-LINK-SCALE-AUTHORITY-DISTRIBUTION.md`

## QA gate

Runtime changes require:

- focused Phase 6.8 regression
- TypeScript
- changed-file ESLint
- production build

Results will be recorded here before merge.

## Release decision

**PENDING QA**

No release should be merged until the runtime validation gate is green.
