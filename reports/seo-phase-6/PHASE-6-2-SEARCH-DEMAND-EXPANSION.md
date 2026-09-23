# Phase 6.2 — Search Demand Expansion

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Baseline:** `main @ 977d73eec7b467c36f35214e00e3a40e68688046`  
**Issue:** #75  
**Status:** PASS — FIRST-PARTY DEMAND MAP ESTABLISHED

## 1. Purpose

Phase 6.2 validates the Phase 6.1 topical authority map against current first-party Google Search Console demand before any content-cluster expansion or new-page decision.

The governing rule remains:

> Search demand can promote an intent family for deeper architecture work, but the current 7-day sample cannot approve a new URL.

This phase is demand classification and owner validation only. It introduces no runtime, route, title/meta, H1, canonical, CTA or page-content change.

## 2. Data maturity and limitations

The production dashboard snapshot used for this phase remains short:

- GSC history: 7 days;
- clicks: 0;
- query/page rows are available for the current short window;
- GA4 organic conversion history is still too thin for conversion-led expansion decisions;
- Phase 5.8 remains active in parallel as the mature 56-day evidence gate.

Therefore all Phase 6.2 outcomes are directional and structural. They may route a family to Phase 6.3 or Phase 6.5 for architecture/authority planning, but they do not authorize speculative page creation.

## 3. Method

Current GSC query/page rows were grouped into coherent demand families and checked against the owner hierarchy frozen in Phase 6.0 and Phase 6.1:

**Course / named course → Service → Subject → Curriculum → Generic Location → Homepage for brand**

For each family, Phase 6.2 records:

1. observed query pattern;
2. impressions in the current window;
3. number of active dates;
4. observed/current owner;
5. intended owner where the observed owner is wrong or broad;
6. intent type;
7. demand decision;
8. next-stage routing and guardrail.

Brand/noise queries are excluded from growth expansion decisions.

## 4. Current demand truth

The current query set is dominated by generic local tutoring demand rather than subject/service support topics.

Repeated local families include:

- Alexandria, Virginia — 10 impressions across 5 active dates;
- New Orleans — 9 impressions concentrated on 1 date;
- Hamilton, Ontario — 8 impressions across 6 active dates;
- Naperville — 6 impressions across 5 active dates;
- Cedar Rapids — 5 impressions across 5 active dates;
- Lexington — 4 impressions across 3 active dates;
- Omaha — 3 impressions across 3 active dates;
- Porter, Texas — 3 impressions across 3 active dates.

This validates the existing generic-location owner model, but does not justify city-subject, city-course or city-service doorway expansion.

## 5. Curriculum demand

### British Columbia

Observed family:

`what is the best online tutoring for the bc curriculum?`

Current evidence:

- 7 impressions;
- 7 active dates;
- correct owner: `/en/locations/canada/british-columbia`;
- EXP-002 is already live and protected.

Decision:

**HOLD — PROTECTED EXPERIMENT**

No additional title/meta/content/owner change is permitted while EXP-002 runs unless a hard production regression appears.

Measurement checkpoints remain:

- 14-day early monitor: 2026-10-07;
- 28-day readout: 2026-10-21, subject to sufficient impression volume;
- 56-day scale gate: 2026-11-18.

## 6. Math demand

### Arabic advanced mathematics

Observed family:

`الرياضيات المتقدمة`

Current evidence:

- 5 impressions;
- 2 active dates;
- correct existing owner: `/ar/subjects/math/advanced-precalculus`.

Decision:

**PROMOTE TO 6.3 — EXISTING OWNER**

This is a cluster-architecture signal only. It does not justify a new English route or a duplicate Arabic route.

### Ontario course codes

No meaningful first-party query demand is currently observed for:

- MTH1W;
- MPM2D;
- MCR3U;
- MHF4U;
- MCV4U;
- MDM4U;
- SCH3U / SCH4U;
- SPH3U / SPH4U.

Decision:

**HOLD / DISCOVERY SEED**

The existing course owners remain canonical measurement targets. No speculative course-page expansion is approved.

## 7. Science and Chemistry demand

### Chemistry

Observed query:

`chemistry tutoring`

Current evidence:

- 1 impression;
- 1 active date;
- observed owner: Homepage;
- intended owner: `/en/subjects/chemistry`.

Decision:

**WATCH OWNER MISMATCH**

This does not meet the existing owner-review gate. No redirect, merge or structural patch is justified from a single impression.

### Madison science

Observed queries:

- `madison wi science tutoring`;
- `science tutoring madison wi`.

Current evidence:

- 2 impressions total;
- 1 active date;
- observed owner: Madison generic location page;
- intended owner for explicit science intent: `/en/subjects/general-science`.

Decision:

**REJECT CITY-SCIENCE URL / WATCH OWNER**

If the signal persists, authority should reinforce the General Science owner. The current data does not justify a Madison + Science doorway page.

## 8. English demand

Phase 6.1 mapped strong English support families, including:

- foundational reading / phonics / decoding / spelling;
- reading comprehension;
- reading fluency;
- grammar and language conventions;
- vocabulary and word study;
- writing;
- speaking and listening;
- literature and literary analysis.

Current GSC evidence:

**0 observed first-party query impressions for these support families in the current short window.**

Decision:

**HOLD / DISCOVERY SEED**

These topics remain valid authority nodes under `/en/subjects/english`, but none is demand-validated as a standalone asset.

## 9. French demand

Mapped Phase 6.1 families include:

- French Immersion;
- Extended French;
- Core French;
- reading;
- grammar;
- writing;
- oral communication.

Current GSC evidence:

**0 observed first-party query impressions for these support families in the current short window.**

Decision:

**HOLD / DISCOVERY SEED**

The current French owner remains the intended authority hub.

## 10. Service demand

### Homework Help

Current observed first-party demand for the mapped support families is effectively zero in the current short window.

Decision:

**HOLD / DISCOVERY SEED**

No subject-homework duplicate route is approved.

### Exam Preparation

Current observed first-party demand for generic exam-prep/test-prep support families is effectively zero in the current short window.

Decision:

**HOLD / DISCOVERY SEED**

Named-course exam-prep intent remains course-owned under the existing owner hierarchy.

## 11. Local demand expansion

### Hamilton

Evidence:

- 8 impressions;
- 6 active dates;
- correct generic local owner.

Decision:

**WATCH / ROUTE TO 6.5**

The signal is persistent enough to remain a priority local watch family, but it does not meet the 56-day promotion threshold.

### Alexandria

Evidence:

- 10 impressions;
- 5 active dates;
- correct generic local owner.

Decision:

**WATCH / ROUTE TO 6.5**

This is the strongest repeated US local family in the current window, but still provisional.

### Naperville

Evidence:

- 6 impressions;
- 5 active dates;
- correct generic local owner.

Decision:

**WATCH / ROUTE TO 6.5**

### Cedar Rapids

Evidence:

- 5 impressions;
- 5 active dates;
- correct generic local owner.

Decision:

**WATCH / ROUTE TO 6.5**

### New Orleans

Evidence:

- 9 impressions;
- only 1 active date.

Decision:

**HOLD / WATCH**

Volume without persistence is not enough to justify local-depth work.

### Porter, Texas

Evidence:

- 3 impressions;
- 3 active dates;
- current owner is the broad Texas state page.

Decision:

**WATCH OWNER FIT**

Do not create a Porter page from three impressions. City-level ownership must wait for repeated mature evidence and the Phase 6.4 new-page gate.

## 12. Brand and noise exclusion

Brand/spelling/noise queries such as `سكسس`, close spelling variants and unrelated names are not treated as topical-growth demand.

Decision:

**REJECT FROM EXPANSION MODEL**

They may remain useful for brand-monitoring, but cannot justify a new content cluster or URL.

## 13. Phase 6.2 promotion model

### PROMOTE TO 6.3 — EXISTING OWNER

Use when current demand supports deeper cluster architecture around an already-approved owner without creating a new route.

Current example:

- Arabic advanced mathematics.

### WATCH / ROUTE TO 6.5

Use for repeated generic local tutoring families that belong to existing location owners.

Current examples:

- Hamilton;
- Alexandria;
- Naperville;
- Cedar Rapids.

### WATCH OWNER MISMATCH

Use when explicit subject intent is landing on a weaker/wrong owner but evidence is below the owner-review threshold.

Current examples:

- Chemistry;
- Madison science.

### HOLD / DISCOVERY SEED

Use for valid Phase 6.1 authority topics that have no current first-party GSC demand.

Current examples:

- English support topics;
- French support topics;
- Homework Help subtopics;
- Exam Preparation subtopics;
- Ontario course-code demand.

### REJECT-NOW

Use when the observed pattern would require a doorway/duplicate owner or when the query is brand/noise rather than growth demand.

Current examples:

- Madison + Science doorway route;
- city + subject/course/service variants from isolated impressions;
- brand/noise queries as growth justification.

## 14. What Phase 6.2 does not authorize

Phase 6.2 does **not** authorize:

- a new city page;
- a new city-subject page;
- a new city-course page;
- a new city-service page;
- a new English/French topic page from taxonomy alone;
- a new Ontario course owner;
- a title/meta rewrite from 7-day zero-click data;
- a change to EXP-002 during its measurement window.

## 15. Phase 6.3 handoff

Phase 6.3 may now build content-cluster architecture around the existing approved owners and support nodes.

The architecture must distinguish between:

- canonical money-page owners;
- named course owners;
- existing structured support nodes;
- supporting-content candidates;
- internal-link relationships;
- information intent versus transactional intent;
- protected experiments;
- local intent that belongs to Phase 6.5 rather than a subject/service cluster.

No supporting-content candidate becomes an indexable new URL until Phase 6.4 independently confirms:

1. mature demand;
2. materially unique intent;
3. no existing owner can satisfy the need normally;
4. cannibalization review passes;
5. conversion value is plausible/direct;
6. the page is not a doorway or thin variant.

## 16. Dashboard control

Production dashboard tab created:

`Phase6_Search_Demand_Expansion`

It records the current demand families, impressions, active dates, owner fit, intent type, Phase 6.2 decision and next-step guardrail.

## 17. Final decision

**PHASE 6.2 — PASS / CLOSED**

The first-party demand map is established. Current evidence supports architecture work around existing owners and continued monitoring, not broad new-URL creation.

**Next:** Phase 6.3 — Content Cluster Architecture.
