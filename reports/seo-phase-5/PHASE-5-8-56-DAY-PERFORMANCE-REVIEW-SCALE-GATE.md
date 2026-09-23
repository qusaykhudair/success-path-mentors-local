# Phase 5.8 — 56-Day Performance Review & Scale Gate

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Issue:** #68  
**Status:** BLOCKED — DATA MATURITY

## 1. Purpose

Phase 5.8 is the mature evidence gate for deciding whether an SEO opportunity should be promoted, held, iterated, rejected or scaled.

The phase is deliberately separated from early-signal monitoring so that a few days of impressions cannot trigger speculative new pages, broad title rewrites or structural changes.

## 2. Current production data maturity

The production dashboard currently reports:

- GSC history: 7 days;
- GA4 history: 1 day;
- data through 2026-09-19;
- 110 impressions;
- 0 clicks;
- 0.0% CTR;
- average position 11.85;
- 1 session;
- 1 user;
- 0 trial starts;
- 0 registrations.

The dashboard explicitly notes that period-over-period comparison becomes fully available when Windsor provides 56 days of GSC and GA4 history.

Therefore a true Phase 5.8 performance verdict is not yet available.

## 3. Scale decision requirements

A candidate may move to `PROMOTE` only when the available evidence supports all relevant gates:

1. persistent search demand across the mature review window;
2. intended owner is correct and stable;
3. no unresolved cannibalization/canonical problem;
4. the intent is materially unique if a new owner/page is proposed;
5. the existing owner cannot satisfy that intent through normal optimization if a new page is proposed;
6. conversion value is clear;
7. technical/indexability/CTA/analytics health is intact.

Possible final states:

- `PROMOTE`
- `HOLD`
- `ITERATE`
- `REJECT`

## 4. Existing-owner promotion gate

For established location/subject/service/course owners, use the mature 56-day window together with the Phase 5.7 experiment controls.

A page-level intervention should be tied to a specific evidence type:

- repeated visibility with weak CTR and stable owner → possible snippet/CTR test;
- repeated query relevance with factual/content depth gap → possible content patch;
- repeated wrong-owner distribution → owner/cannibalization review;
- adequate qualified sessions with weak trial progression → conversion review.

No intervention should be justified merely by `0 clicks` when the impression base is small.

## 5. New-owner / new-page gate

A new SEO URL remains subject to the stricter Phase 4 architecture rule:

`Demand + Unique Intent + No Cannibalization + Conversion Value`

The working creation threshold remains conservative:

- approximately 50+ impressions over 56 days or equivalent repeated qualified click evidence;
- materially distinct intent;
- SERP behavior supports a separate owner/page type;
- no current owner can satisfy the query normally;
- cannibalization review PASS;
- direct path to trial/conversion value.

City-subject, city-course and city-service doorway expansion remains disallowed.

## 6. Current candidate states

### British Columbia curriculum

Owner: `/en/locations/canada/british-columbia`

Current state: `HOLD FOR DATA`.

The Phase 5.6 content patch is merged, but production verification is still pending. Its Phase 5.7 measurement clock has therefore not started. No scale conclusion is allowed yet.

### Hamilton tutoring

Owner: `/en/locations/canada/ontario/hamilton`

Current short-window signal: 8 impressions / 0 clicks.

Decision: `WATCH / HOLD`.

The existing Phase 4 promotion threshold remains in force; no Hamilton city-subject/course expansion is approved.

### Chemistry owner mismatch

Current short-window signal: 1 wrong-owner impression to Homepage.

Decision: `MONITOR`.

This is below the Phase 5.3 owner-review escalation threshold and far below a structural redirect/merge gate.

### Madison science owner mismatch

Current short-window signal: 2 wrong-owner impressions on one date.

Decision: `MONITOR`.

No city-science page or structural owner change is justified.

### Phase 3 money pages

Math, English, Science, French, Ontario Curriculum, Exam Preparation and Homework Help retain their established owners.

Decision: `HOLD` pending mature page/query evidence.

### Ontario course-code owners

Existing owners remain available for MTH1W, MPM2D, MCR3U, MHF4U, MCV4U, MDM4U, SCH3U/SCH4U and SPH3U/SPH4U.

Decision: `REJECT EXPANSION NOW`.

There is not yet stable evidence for speculative additional grade/course URLs.

### Organic conversion funnel

Current signal: 1 session, 0 trial starts and 0 registrations.

Decision: `HOLD FOR DATA`.

Phase 5.5 requires at least 25 qualified non-test organic sessions before a conversion-path conclusion is considered reliable.

## 7. Dashboard control

Added production-dashboard tab:

`Phase5_56D_Scale_Gate`

It tracks the current candidates, search maturity, owner state, conversion readiness, cannibalization/unique-intent guardrail, current decision and required next evidence.

## 8. Current Phase 5.8 decision

**BLOCKED — DATA MATURITY.**

This is an evidence-based block, not unfinished technical work. The control framework is in place, but the actual 56-day scale review must remain open until enough history exists.

No new page, metadata rewrite, redirect, merge or expansion is approved from the present 7-day GSC / 1-day GA4 sample.

## 9. Closure condition

Phase 5.8 can close when:

- a usable 56-day GSC history is available for the review window;
- GA4 organic history is sufficient for conversion interpretation where applicable;
- owner correctness has been rechecked;
- candidate-level PROMOTE / HOLD / ITERATE / REJECT decisions are recorded with evidence;
- any proposed expansion passes the unique-intent and cannibalization gates.
