# Phase 5.3 — Query → Page Ownership Validation

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Baseline:** `main @ 58cd89e1dea54a4180b8ffdec0beda0243901d47`  
**Issue:** #57  
**Primary source:** `SPM - SEO & Analytics Production Dashboard` / `GSC_Raw`  
**Status:** PASS — ownership validation framework established; no architecture patch approved

## 1. Purpose

Phase 5.3 validates whether Google is surfacing the intended owner for each coherent search intent before any redirect, merge, metadata-boundary or internal-link intervention is approved.

The owner precedence remains inherited from Phase 4.2:

1. Course code / named course
2. Explicit service
3. Explicit subject
4. Explicit curriculum
5. Generic location
6. Homepage only for brand / broad company discovery

One coherent search intent should have one intended indexable owner.

## 2. Current first-party ownership snapshot

Current GSC history remains seven days through 2026-09-19, with 110 total impressions and 0 clicks. This is enough for early-warning validation, not mature cannibalization conclusions.

| Query / cluster | Observed page | Intended owner | Impressions | Dates | Validation state | Decision |
|---|---|---|---:|---:|---|---|
| `online tutoring hamilton on` | `/en/locations/canada/ontario/hamilton` | same | 8 | 6 | CORRECT | Preserve owner |
| `what is the best online tutoring for the bc curriculum?` | `/en/locations/canada/british-columbia` | same under current architecture | 7 | 7 | CORRECT | Preserve owner; Phase 5.2 content-depth candidate only |
| Alexandria tutoring variants | `/en/locations/united-states/virginia/alexandria` | same | ~10 | multiple | CORRECT | Preserve owner |
| `tutoring new orleans` | `/en/locations/united-states/louisiana/new-orleans` | same | 9 | current sample | CORRECT | Preserve owner |
| Arabic `الرياضيات المتقدمة` | `/ar/subjects/math/advanced-precalculus` | same | 5 | multiple | CORRECT | Preserve owner |
| `chemistry tutoring` | Homepage `/` | `/en/subjects/chemistry` | 1 wrong-owner impression | 1 | EARLY MISMATCH | Monitor; no redirect/merge |
| `madison wi science tutoring` + `science tutoring madison wi` | `/en/locations/united-states/wisconsin/madison` | `/en/subjects/general-science` under Subject > Location precedence | 2 wrong-owner impressions | 1 | EARLY MISMATCH | Monitor; below review threshold |
| Ontario course-code families | no meaningful current GSC rows | existing eight course owners | 0 meaningful signal | — | NO CURRENT TEST | Preserve owners; no expansion |

## 3. Important new early-warning finding

The current GSC extract contains two subject-plus-location impressions for Madison, Wisconsin:

- `madison wi science tutoring`
- `science tutoring madison wi`

Both surfaced the generic Madison location page.

Under the locked owner hierarchy, an explicit subject query should resolve to the broad Science subject owner (`/en/subjects/general-science`) rather than a generic location owner. This therefore qualifies as an **early subject-location owner mismatch**, but it is only two impressions on one date.

Decision:

- do not redirect the Madison location page;
- do not create a Madison Science page;
- do not rewrite Science or Madison metadata from this sample;
- keep General Science as the intended subject owner;
- monitor this query family for persistence.

## 4. Chemistry validation

The known `chemistry tutoring` mismatch remains one impression on the Homepage.

The intended owner stays:

`/en/subjects/chemistry`

Current action remains **MONITOR** because one impression does not prove cannibalization or owner failure.

### Interim Phase 5.3 early-review trigger

Promote a wrong-owner family into a focused owner-signal review when it reaches:

- at least **5 wrong-owner impressions**;
- across at least **3 distinct dates**;
- for one coherent query family.

This is an early-warning threshold only.

### Mature cannibalization gate

The Phase 4.2 rolling-56-day gate remains controlling for structural action. A cannibalization review candidate requires:

1. the same coherent intent on 2+ indexable URLs across at least 3 distinct weeks; and
2. the secondary URL receives at least 20% of cluster impressions or at least one organic click; and
3. both URLs plausibly target the same need.

Only after that review can a signal patch, merge/redirect, or architecture change be considered.

## 5. Current owner decisions

### PASS — correct ownership

- Hamilton generic tutoring → Hamilton location owner
- British Columbia curriculum-oriented tutoring → BC location owner under current architecture
- Alexandria generic local tutoring → Alexandria location owner
- New Orleans generic local tutoring → New Orleans location owner
- Arabic advanced precalculus → Arabic Advanced Precalculus subject owner

### WATCH — early mismatches

- Chemistry tutoring → Homepage instead of Chemistry subject owner: 1 impression / 1 date
- Madison science tutoring → Madison location instead of General Science owner: 2 impressions / 1 date

Neither reaches the Phase 5.3 early-review trigger.

### HOLD

- Ontario course-code owner validation: no meaningful current query signal
- other sparse one-off location queries with no competing dedicated owner: no structural action

## 6. Dashboard implementation

A new production-dashboard tab was added:

`Phase5_Owner_Validation`

It records:

- query family;
- observed landing page;
- intended owner;
- observed impressions;
- distinct dates;
- owner state;
- early-review trigger;
- mature cannibalization gate;
- required next action.

This view distinguishes **wrong owner** from **low demand**. A page is not considered defective merely because it has zero clicks in a thin sample.

## 7. Guardrails

Phase 5.3 does not approve:

- new city-subject pages;
- new city-course pages;
- redirects from location owners to subject owners from thin evidence;
- Homepage de-indexing or redirecting;
- title/H1 rewrites based on one-week ownership noise;
- course expansion without first-party demand.

Preferred escalation order if a mismatch persists:

1. validate the intended owner and query family;
2. inspect internal links and anchor boundaries;
3. inspect metadata/content ownership boundaries;
4. apply a narrow signal patch if justified;
5. consider merge/redirect only after mature cannibalization evidence.

## 8. Release decision

**PASS.**

Phase 5.3 establishes the ownership validation layer and identifies two current early-warning families:

1. Chemistry → Homepage (1 wrong-owner impression, 1 date)
2. Madison Science → Madison location (2 wrong-owner impressions, 1 date)

Both remain below the intervention threshold, so no runtime, routing, content, metadata, canonical, schema, sitemap or hosting change is approved in this phase.

Next sequential stage: **Phase 5.4 — CTR & SERP Optimization**. The current site-wide sample remains below the defined CTR intervention thresholds, so Phase 5.4 should begin as a readiness/gate review rather than an automatic title/meta rewrite.