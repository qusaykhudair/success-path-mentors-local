# Phase 4 — Current Final Closure (Post-Phase-3)

**Project:** Success Path Mentors  
**Domain:** `https://successpathmentors.net`  
**Closure date:** 2026-09-23  
**Current baseline before this closure document:** `main @ 1baf17a2f0f85d239af6a640a956a791025e2fb0`  
**Issue:** #42  
**Status:** **PHASE 4 PASS / CLOSED**

> This is the current Phase 4 closure source. The September 16 `PHASE-4-FINAL-CLOSURE.md` file remains a historical snapshot and must not be used as the current architecture record.

## 1. Executive closure decision

Phase 4 is complete against the post-Phase-3 SEO architecture.

The phase established and validated a controlled local/search-expansion system without mass-generating city, subject, grade, service, or course doorway pages. The implementation is now governed by first-party GSC evidence, a one-intent/one-owner architecture, explicit cannibalization thresholds, contextual internal authority, and existing canonical subject/course/service owners.

No Phase 4 issue remains open at the time of this closure.

## 2. Phase completion matrix

| Stage | Primary outcome | Release evidence | Final state |
|---|---|---|---|
| **4.0 — Reconciliation** | Reconciled the older Local Authority work against completed Phase 3 owner changes; corrected stale French, Exam Preparation, Ontario Curriculum, and social-link assumptions | Issue #31; PR #32; production deployment evidence | **PASS / CLOSED** |
| **4.1 — Local Search Demand Map** | Built a first-party demand map from the available GSC sample; Hamilton became the active local watchlist while Milton/Toronto remained preserve/hold | Issue #33; PR #34 | **PASS / CLOSED** |
| **4.2 — Query Owner & Cannibalization Gate** | Locked one coherent search intent to one intended owner and defined measurable 56-day cannibalization/review thresholds | Issue #35; `PHASE-4-2-QUERY-OWNER-CANNIBALIZATION-MAP.md` | **PASS / CLOSED** |
| **4.3 — Local Internal-Link Authority** | Added Hamilton to the shared Local Availability authority layer without changing title/meta/H1 or creating a duplicate route | Issue #36; PR #37; merge `7bf718967e2d393bd0291f6bd358d0fa2265e2dd`; QA run `35787097971`; Hostinger `Completed / Current` deployment evidence | **PASS / CLOSED** |
| **4.4 — Grade & Course Intent Expansion** | Surfaced the eight existing Ontario course owners from Math/Chemistry/Physics hubs instead of creating speculative new routes | Issue #38; PR #39; merge `93a15bfa6b073218f99826cb4aede4f6a02c49c6`; QA run `35789335642`; production smoke validation on Math/Chemistry/Physics | **PASS / CLOSED** |
| **4.5 — Local FAQ & Structured Data Reconciliation** | Verified Homepage and Location FAQ visible/schema source parity; preserved EN/AR alignment; held Hamilton FAQ expansion pending stronger evidence | Issue #40; PR #41; merge `1baf17a2f0f85d239af6a640a956a791025e2fb0`; QA run `35882336586` | **PASS / CLOSED** |

## 3. Current search-intent ownership architecture

The governing precedence remains:

**Course code / named course → Service → Subject → Curriculum → Generic Location**

### Location owners

- Ontario → `/en/locations/canada/ontario`
- Hamilton → `/en/locations/canada/ontario/hamilton`
- Milton → `/en/locations/canada/ontario/milton`
- Toronto → `/en/locations/canada/ontario/toronto`

### Curriculum owner

- Ontario Curriculum → `/en/curriculum/ontario`

### Subject owners

- Math → `/en/subjects/math`
- English → `/en/subjects/english`
- French → `/en/subjects/french`
- General Science → `/en/subjects/general-science`
- Chemistry → `/en/subjects/chemistry`
- Physics → `/en/subjects/physics`

### Service owners

- Homework Help → `/en/services/homework-help`
- Exam Preparation → `/en/services/exam-preparation`

### Existing Ontario course owners preserved

- MTH1W
- MPM2D
- MCR3U
- MHF4U
- MCV4U
- MDM4U
- SCH3U / SCH4U
- SPH3U / SPH4U

These course owners remain narrower than the broad Subject owners and outrank geographic modifiers when a query explicitly contains the course code or named course.

## 4. What Phase 4 deliberately did not do

Phase 4 did **not** create new pages simply because a keyword combination exists.

The phase explicitly blocked patterns such as:

- `/math-tutor-hamilton`
- `/hamilton/math`
- `/toronto/french-tutor`
- `/hamilton/chemistry`
- `/milton/mhf4u`
- `/toronto/sph4u`
- city-specific Homework Help or Exam Preparation duplicates

No speculative Grade 11/12 English, French, General Science, Biology, or additional course-code page was approved from the short initial GSC sample.

## 5. Evidence-led promotion gate retained

The Phase 4.1 operating thresholds remain active for future expansion.

### Existing-owner optimization review

Review a local/search cluster when the rolling 56-day evidence reaches one of the approved triggers, including persistent impressions across multiple weeks, organic clicks, or clear multi-week acceleration with a documented owner-page gap.

### New-page candidacy

A new page remains only a candidate when all of the following are satisfied:

1. persistent first-party demand over the 56-day window;
2. materially distinct search intent;
3. SERP evidence supporting a distinct page type;
4. no existing owner able to satisfy the intent through normal optimization;
5. cannibalization review = PASS;
6. a direct conversion path to trial registration.

### Cannibalization review

A coherent query cluster is escalated when it repeatedly appears on multiple indexable URLs across multiple weeks and the secondary page gains a material share of impressions or an organic click. The approved outcomes remain:

- `NO CONFLICT`
- `SIGNAL PATCH`
- `MERGE / REDIRECT CANDIDATE`
- `NEW OWNER CANDIDATE`

## 6. Local authority state at closure

The shared Local Availability layer now supports contextual discovery of:

- Ontario
- Milton
- Toronto
- Hamilton
- Ontario Curriculum

from the Homepage and priority Subject authority surfaces, while keeping generic geographic intent on the existing Location owners.

Hamilton was intentionally strengthened through internal authority only. The available first-party evidence did not justify city-specific title/meta/H1 retargeting or a new Hamilton FAQ on the Homepage.

## 7. Course discovery state at closure

The existing Ontario course owners are now explicitly discoverable from their parent hubs:

- Math → MTH1W, MPM2D, MCR3U, MHF4U, MCV4U, MDM4U
- Chemistry → SCH3U/SCH4U
- Physics → SPH3U/SPH4U

Production smoke validation for Phase 4.4 confirmed these support blocks on all three English hubs while preserving the canonical parent/child ownership structure and introducing no city-course duplicate route.

## 8. FAQ / structured-data state at closure

Phase 4.5 verified:

- Homepage visible FAQ and `FAQPage` JSON-LD use the same normalized FAQ collection;
- dynamic Location visible FAQ and Location `FAQPage` schema use the same `page.faqs` source;
- English and Arabic retain the same approved local FAQ intent set for Milton, Toronto/GTA, Ontario Curriculum, and Ontario grades/subjects;
- no unsupported Hamilton FAQ expansion was added.

## 9. Release / QA closure

The material Phase 4 runtime changes were individually validated before their issues were closed:

- Phase 4.3: regression, TypeScript, changed-file ESLint, production build = PASS; Hostinger merge deployment recorded as `Completed / Current`.
- Phase 4.4: regression 5/5, TypeScript, changed-file ESLint, production build = PASS; production smoke checks confirmed course-support blocks on Math, Chemistry, Physics.
- Phase 4.5: clean install, focused regression, TypeScript, changed-file ESLint, production build = PASS; final diff was evidence-only and changed no live behavior.

At final closure, the GitHub Phase 4 open-issue search returned no open Phase 4 implementation issues before Issue #42 was created for this closure record.

## 10. Business / SEO outcome

Phase 4 converts local and Ontario course expansion from speculative page creation into a controlled organic-acquisition framework:

- stronger internal authority toward the correct geographic owners;
- clearer Google ownership for Local, Subject, Course, Curriculum, and Service intent;
- better discovery of high-intent Ontario course-code pages;
- lower risk of internal keyword cannibalization;
- protection against thin/doorway page expansion;
- a measurable path for future SEO investment based on real GSC performance;
- continued alignment with the business funnel: `Organic Search → Qualified Parent → Trial Registration → Trial Attendance → Paid Student`.

## 11. Phase 5 handoff

Phase 5 should begin as a **measurement and performance-led growth loop**, not another speculative page-production batch.

Initial Phase 5 inputs should include:

- expanded rolling GSC history, targeting the 56-day decision window;
- query → landing-page ownership distribution;
- impressions, clicks, CTR and average position by priority owner;
- organic landing-page engagement and trial-registration events from the existing analytics stack;
- Hamilton watchlist progression;
- the `chemistry tutoring → homepage` owner mismatch watch;
- course-code performance for the eight Ontario course owners;
- conversion performance of Phase 3 money pages.

Only after those signals are reviewed should the next page/content/CTR/internal-link action be promoted.

## 12. Final decision

**PHASE 4 — PASS / CLOSED.**

The current Local Authority, query-owner, course-discovery and FAQ/schema architecture is released and governed by explicit evidence thresholds. Future expansion must pass the Phase 4 owner and cannibalization gates rather than bypass them.
