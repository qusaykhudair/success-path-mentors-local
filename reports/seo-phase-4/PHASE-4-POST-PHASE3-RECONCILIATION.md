# Phase 4.0 — Post-Phase-3 Reconciliation

**Project:** Success Path Mentors  
**Domain:** `https://successpathmentors.net`  
**Scope:** Reconcile Local Authority evidence against the production architecture after Phase 3 money-page changes.  
**Status:** PATCH APPLIED / QA + PRODUCTION VALIDATION PENDING

## Baseline intent

Preserve the existing Phase 4 local-authority implementation while correcting documentation and internal-link gaps introduced by later Phase 3 canonical-owner changes. No new location pages are created and no existing local owner is restructured.

## Reconciled owner map

| Intent | Current owner | Reconciliation status |
|---|---|---|
| Ontario tutoring | `/en/locations/canada/ontario` | PRESERVE |
| Milton tutoring | `/en/locations/canada/ontario/milton` | PRESERVE |
| Toronto tutoring | `/en/locations/canada/ontario/toronto` | PRESERVE |
| Ontario curriculum | `/en/curriculum/ontario` | CURRENT CANONICAL OWNER |
| French tutoring | `/en/subjects/french` | ACTIVE OWNER — Phase 3 superseded the former HOLD decision |
| Exam preparation | `/en/services/exam-preparation` | CURRENT CANONICAL OWNER |
| Homework help | `/en/services/homework-help` | CURRENT CANONICAL OWNER |

## Existing Phase 4 implementation retained

- `LocalAvailabilityBlock` remains the shared local-authority component.
- Homepage retains the block plus local FAQs and FAQPage schema parity.
- Math, English, General Science, Chemistry, and Physics retain local-authority support.
- Ontario, Milton, and Toronto remain the geographic owners; no city-subject doorway pages are introduced.

## Reconciliation patches

1. French is treated as an active Phase 3 money-page owner rather than HOLD/404.
2. French receives the same shared local-authority block used by other priority subject hubs, without creating a new route.
3. Facebook organic-social destination URLs are updated to the current Exam Preparation and Ontario Curriculum canonical owners.
4. Phase 4 closure evidence is marked as superseded by this reconciliation until focused QA and live production validation are complete.

## Guardrails

- No mass city pages or city-subject doorway pages.
- No replacement of Ontario, Milton, or Toronto owners.
- No rollback of Phase 3 canonical owners.
- No new SEO route without documented demand and cannibalization review.
- No guaranteed academic-outcome claims.

## Release gate

This reconciliation is not final until:

- focused regression checks pass;
- TypeScript / lint / production build pass;
- merged changes are confirmed on `main`;
- live production reflects the reconciled French local-authority treatment and corrected canonical destinations.
