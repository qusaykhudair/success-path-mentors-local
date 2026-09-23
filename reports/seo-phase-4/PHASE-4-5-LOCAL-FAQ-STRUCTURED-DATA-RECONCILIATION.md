# Phase 4.5 — Local FAQ & Structured Data Reconciliation

**Project:** Success Path Mentors  
**Baseline:** `main @ 93a15bfa6b073218f99826cb4aede4f6a02c49c6`  
**Implementation date:** 2026-09-23  
**Primary inputs:** Phase 4.1 Local Search Demand Map, Phase 4.2 Query Owner Map, Phase 4.3 Hamilton internal-authority patch, current production source  
**Issue:** #40  
**Status:** AUDIT + QA PASS — merge pending.

## 1. Objective

Phase 4.5 audits the existing local FAQ implementation and its structured-data parity after the Phase 4.3 and Phase 4.4 changes.

The goal is to verify that visible FAQ content and `FAQPage` JSON-LD remain synchronized without creating thin local content, unsupported local-presence claims, or a second owner for generic Hamilton tutoring intent.

## 2. Homepage FAQ audit

The Homepage FAQ implementation uses one normalized `items` collection for both surfaces:

- visible accordion: `<FaqAccordion items={items} />`;
- structured data: `mainEntity: items.map(...)`.

The collection originates from `t.raw('items')`, is validated for non-empty question/answer strings, and is then passed to both the visible and structured representations.

**Decision:** `PASS` — the Homepage visible FAQ and `FAQPage` JSON-LD are source-aligned.

## 3. Local FAQ language alignment

The current approved local Homepage FAQ intent set remains aligned across English and Arabic:

1. Milton online tutoring availability;
2. Toronto / GTA online tutoring availability;
3. Ontario curriculum support;
4. Ontario grades and subject coverage.

No Hamilton-specific Homepage FAQ is currently present in either locale.

**Decision:** `PASS` — EN/AR local FAQ intent alignment is preserved.

## 4. Hamilton decision

Phase 4.1 recorded the initial Hamilton signal as:

- query cluster: `online tutoring hamilton on`;
- 8 impressions / 0 clicks in the initial seven-day GSC sample;
- existing owner: `/en/locations/canada/ontario/hamilton`;
- decision: `OPTIMIZE EXISTING — WATCHLIST`.

Phase 4.3 already applied the approved low-risk action by adding Hamilton to the shared `LocalAvailabilityBlock`, creating contextual internal authority toward the existing Hamilton owner without retargeting the page or creating duplicate routes.

The Phase 4.1 operating gate for material optimization remains a rolling 56-day evidence requirement. The current available evidence does not justify adding another Hamilton-specific FAQ or creating a separate local/content owner.

**Decision:** `HOLD / PRESERVE OWNER`.

No Hamilton FAQ content patch is approved in Phase 4.5.

## 5. Dynamic Location FAQ audit

Dynamic location pages render visible FAQ content from:

`page.faqs`

The location structured-data builder also generates `FAQPage.mainEntity` from:

`page.faqs`

The dynamic location route passes the same `page` object into `buildLocationPageSchemas(...)` and renders `schemas.faq` as the location FAQ JSON-LD.

**Decision:** `PASS` — visible Location-page FAQ and structured FAQ schema share the same canonical source collection.

## 6. Owner and cannibalization guardrails

The Phase 4.2 ownership policy remains unchanged:

- generic Hamilton tutoring → `/en/locations/canada/ontario/hamilton`;
- subject + Hamilton intent → the existing Subject owner;
- course-code + Hamilton intent → the existing Course owner;
- Homework Help + Hamilton → `/en/services/homework-help`;
- Exam Preparation + Hamilton → `/en/services/exam-preparation`.

Phase 4.5 does not authorize:

- `/hamilton/math`;
- `/math-tutor-hamilton`;
- `/hamilton/chemistry`;
- `/hamilton/french-tutor`;
- `/hamilton/homework-help`;
- `/hamilton/exam-preparation`;
- or any equivalent city-subject, city-course, or city-service doorway route.

## 7. Runtime/content patch decision

The audit found no visible/schema source mismatch requiring a production content or runtime change.

Therefore the intended production diff for Phase 4.5 is evidence-only:

- this reconciliation report;
- focused regression coverage.

No changes are required to:

- Homepage FAQ copy;
- Arabic FAQ copy;
- Hamilton location content;
- location routing;
- canonical/hreflang;
- sitemap;
- analytics;
- auth;
- booking;
- hosting/runtime configuration.

## 8. Regression coverage

Added:

`tests/phase4-local-faq-schema-parity.test.mjs`

The test verifies:

1. Homepage visible accordion and FAQ JSON-LD use the same final `items` collection;
2. the four approved local FAQ intents remain in both English and Arabic;
3. Hamilton remains an internal-authority/location-owner signal rather than a speculative Homepage FAQ expansion;
4. visible dynamic Location FAQs and Location `FAQPage` schema both use `page.faqs`;
5. common Hamilton doorway patterns remain absent from the shared local-authority implementation.

## 9. QA evidence

Temporary branch-only workflow:

`Phase 4.5 Local FAQ Schema QA`

GitHub Actions run:

`35882336586`

Results:

- clean `npm ci` — PASS;
- focused Phase 4.5 regression — PASS;
- TypeScript `npx tsc --noEmit` — PASS;
- changed-file ESLint — PASS;
- production `npm run build` — PASS.

The temporary QA workflow was removed after the successful run and is not part of the intended production diff.

## 10. Release gate

Repository / audit / QA state: **PASS**.

The final Phase 4.5 production diff is evidence-only and does not alter live page behavior. Completion therefore requires:

1. merge the evidence-only PR to `main`;
2. verify the merge commit is on `main`;
3. close Issue #40 as completed.

No separate Hostinger/live smoke gate is required for Phase 4.5 because no runtime, visible content, routing, metadata, schema-generation logic, or hosting configuration is being changed.

Until merge is recorded, status is:

**AUDIT + QA PASS / MERGE PENDING**.
