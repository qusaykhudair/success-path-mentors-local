# Phase 6.0 — Phase 5 → Phase 6 Handoff Baseline

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Baseline:** `main @ 584cd6dbd6d8df25084e84fad66d0d6dbf9f25c7`  
**Issue:** #71  
**Status:** PASS — PHASE 6 BASELINE ESTABLISHED

## 1. Purpose

Phase 6 moves from performance-control work into authority, topical expansion and scalable SEO growth.

The handoff rule is intentionally conservative:

> Expand authority before expanding URL count.

Phase 6 therefore starts by freezing the canonical-owner architecture, active experiments, watchlists, measurement limits and expansion gates carried forward from Phases 3–5.

This is a control/documentation phase only. It introduces no runtime, routing, canonical, H1, title/meta, CTA, registration or page-content change.

## 2. Measurement maturity at handoff

The production dashboard snapshot remains immature:

- GSC history: 7 days;
- GA4 history: 1 day;
- data through: 2026-09-19 for the main dashboard snapshot;
- GSC impressions: 110;
- GSC clicks: 0;
- CTR: 0.0%;
- weighted average position: 11.85;
- production funnel volume is still too thin for conversion conclusions.

Implication:

- Phase 6 may use current signals for topic discovery, owner mapping and prioritization;
- Phase 6 must not turn short-window noise into broad scale, winner/loser or new-page conclusions;
- Phase 5.8 remains active in parallel as the mature evidence gate.

## 3. Frozen owner hierarchy

The governing owner precedence remains:

**Course / named course → Service → Subject → Curriculum → Generic Location → Homepage for brand**

Operational interpretation:

- explicit course-code demand belongs to an existing course owner where one exists;
- service intent belongs to the service owner;
- explicit subject intent belongs to the subject owner before a generic location owner;
- curriculum intent belongs to the curriculum/region owner defined by the current architecture;
- location pages own generic local tutoring intent, not subject/course doorway variants;
- the Homepage is not a substitute owner for specific non-brand subject/service queries.

Phase 6.1–6.4 must build around this hierarchy rather than inventing parallel owners.

## 4. Core money-page owners carried forward

The Phase 3 money-page set remains the main topical/pillar foundation:

- Math;
- English;
- General Science;
- French;
- Ontario Curriculum;
- Exam Preparation;
- Homework Help.

Current state:

- canonical owners are established;
- there is not yet stable page-level demand sufficient to justify broad title/H1 rewrites;
- Phase 6 may map supporting topics, entities, internal-link relationships and authority gaps around these owners;
- Phase 6 may not create duplicate money pages simply to cover keyword variants.

## 5. Active experiment protection — EXP-002

The British Columbia content experiment is live on:

`/en/locations/canada/british-columbia`

Production state:

- live date: 2026-09-23;
- baseline: 7 impressions / 0 clicks;
- production patch: verified live;
- owner/canonical: preserved;
- experiment state: LIVE — EARLY MONITOR.

Scheduled evidence windows:

- 14-day directional checkpoint: 2026-10-07;
- 28-day performance checkpoint: 2026-10-21, with the existing relevant-impression threshold;
- 56-day scale gate: 2026-11-18.

Phase 6 protection rule:

- do not alter British Columbia title, metadata, owner, H1 or the deployed Phase 5.6 content during the experiment window unless a reproducible factual, routing, canonical, CTA or analytics regression appears;
- BC may still be represented in topical-authority maps as a protected live owner.

## 6. Location-owner watchlist carried forward

### Hamilton

Owner:

`/en/locations/canada/ontario/hamilton`

Current signal:

- 8 impressions;
- 0 clicks;
- 6 active query days in the current short sample;
- owner correct.

Phase 6 state: **WATCH**.

Allowed:

- topical/authority mapping;
- resource and trust-gap discovery;
- continued first-party demand monitoring.

Blocked:

- city-subject pages;
- city-course pages;
- speculative title/H1 rewrite;
- new local doorway variants.

### Alexandria and New Orleans

Current short-window signals remain interesting but insufficient for intervention.

Phase 6 state: **WATCH / DISCOVERY ONLY**.

Phase 6 may include them in demand maps, but should not treat the current sample as proof that local-page rewrites or new local clusters are required.

## 7. Owner-mismatch watchlist carried forward

### Chemistry

Intended owner:

`/en/subjects/chemistry`

Observed state:

- one wrong-owner impression on the Homepage in the short baseline.

Phase 6 state: **MONITOR**.

Early escalation threshold remains:

- at least 5 wrong-owner impressions across at least 3 dates for one coherent query family.

Mature structural action still requires the 56-day cannibalization review.

Phase 6.1 may map Chemistry topics around the intended subject owner; it must not use the isolated mismatch to justify redirect/merge work.

### Madison Science

Intended owner:

`/en/subjects/general-science`

Observed state:

- 2 wrong-owner impressions on one date to the Madison location owner.

Phase 6 state: **MONITOR**.

Explicit subject intent should remain mapped to the subject owner if the signal persists.

Blocked:

- `Madison + science` doorway creation;
- structural action before the existing mismatch/cannibalization gates are met.

## 8. Ontario course owners frozen as measurement targets

Existing course owners remain:

### Math

- MTH1W;
- MPM2D;
- MCR3U;
- MHF4U;
- MCV4U;
- MDM4U.

### Chemistry

- SCH3U / SCH4U.

### Physics

- SPH3U / SPH4U.

Current state:

- no meaningful stable course-code demand yet;
- no speculative new grade/course URLs are approved.

Allowed in Phase 6:

- supporting informational-topic discovery;
- cluster mapping;
- query monitoring;
- internal-link planning around existing owners.

Blocked:

- duplicate grade/course owners;
- city-course variants;
- thin course pages without persistent first-party demand and distinct intent.

## 9. New URL / scale gate preserved

A proposed new indexable URL must satisfy all of the following:

1. measurable first-party demand;
2. materially distinct search intent;
3. the existing owner cannot satisfy the intent through a normal content improvement;
4. SERP/page-type evidence supports a distinct page;
5. cannibalization review passes;
6. there is a direct or strategically meaningful conversion path;
7. the new page does not create a doorway pattern.

Default decision order remains:

- OPTIMIZE EXISTING;
- MERGE where evidence supports consolidation;
- HOLD;
- REJECT;
- CREATE only after the gate passes.

## 10. Doorway and duplication patterns still blocked

Phase 6 must not mass-produce patterns such as:

- city + subject;
- city + course;
- city + service duplicates;
- province/city pages that differ only by swapped place names;
- thin translated variants created without language-specific intent;
- multiple pages aimed at the same coherent query family.

Examples that remain disallowed without evidence include:

- `/hamilton/math`;
- `/hamilton/mhf4u`;
- `/toronto/french-tutor`;
- `/madison/science-tutor`;
- repeated city-specific Homework Help / Exam Preparation duplicates.

## 11. Conversion-value guardrail

The organic funnel remains:

**Organic Search → Qualified Parent → Trial Start → Registration → Paid Student**

Current organic conversion volume remains too small for a conversion-performance conclusion.

Phase 6 therefore may use conversion value as a prioritization factor, but should not label topic clusters as proven converters until qualified organic volume is sufficient.

The Phase 5.5 conversion-readiness guardrail remains in force, including the requirement to exclude test/referral traffic from business conclusions.

## 12. What Phase 6 is allowed to do now

Phase 6 may proceed immediately with:

- topical-authority mapping;
- query/topic taxonomy development;
- demand expansion research using first-party data and external SERP validation where appropriate;
- pillar/supporting-content architecture;
- entity and semantic relationship mapping;
- trust/E-E-A-T gap analysis;
- internal-link authority mapping;
- external-authority/backlink opportunity research;
- multilingual-intent architecture review;
- evidence-gated candidate-page scoring.

These activities do not require waiting for the 56-day Phase 5.8 readout as long as they do not contaminate active experiments or bypass the new-page gates.

## 13. What Phase 6 must not do yet

Without new evidence Phase 6 must not:

- scale BC while EXP-002 is still measuring;
- reinterpret the short current baseline as a CTR failure;
- merge/redirect Chemistry or Madison owners;
- create speculative Ontario course pages;
- mass-create local subject/course/service routes;
- rewrite money-page titles/H1s solely because current clicks are zero;
- claim measured SEO growth, conversion improvement or CAC impact that has not been observed.

## 14. Phase 6 control view

A new production-dashboard tab is created:

`Phase6_Handoff_Baseline`

It records:

- repository baseline;
- measurement maturity;
- owner hierarchy;
- money-page owner state;
- EXP-002 protection;
- local watchlist;
- owner-mismatch watchlist;
- Ontario course-owner state;
- new-URL gate;
- conversion guardrail;
- Phase 6 operating principle.

This tab is the operational bridge between Phase 5 measurement controls and Phase 6 authority/topical work.

## 15. Phase 6.0 decision

**PASS — PHASE 6 BASELINE ESTABLISHED.**

Phase 6 may advance to:

**Phase 6.1 — Topical Authority Map**

with the following mandatory principle:

> Build the topic universe around existing owners first. A topic node is not automatically a URL.
