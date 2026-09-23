# Phase 5.0 — Measurement Readiness Baseline

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Baseline:** `main @ 866557cf617fe945d64051616a84b0448a795882`  
**Primary source:** `SPM - SEO & Analytics Production Dashboard`  
**Issue:** #44  
**Status:** **BASELINE ESTABLISHED / DATA MATURITY PENDING**

## 1. Purpose

Phase 5 begins as a measurement-led performance loop after Phase 4 closed the current Local Authority / Query Owner / Course Discovery architecture.

Phase 5.0 does not approve a new content or routing patch. Its purpose is to establish the current data-readiness state, record the production KPI baseline, and prevent premature optimization from a sample that is still too short for stable period-over-period decisions.

## 2. Production data readiness

The production Executive Dashboard currently reports:

- **GSC history:** 7 days
- **GA4 history:** 1 day
- **data through:** September 19, 2026
- dashboard comparison mode: current 28d vs previous 28d, but prior-period comparisons are not yet available
- dashboard note: period-over-period comparison becomes fully ready once Windsor provides **56 days** of GSC and GA4 history

**Decision:** the measurement stack is functioning, but the history window is not yet mature enough for major performance or page-expansion decisions.

## 3. Current KPI baseline

| KPI | Current value |
|---|---:|
| GSC impressions | 110 |
| GSC clicks | 0 |
| GSC CTR | 0.0% |
| Average position | 11.85 |
| GA4 sessions | 1 |
| GA4 users | 1 |
| Trial form starts | 0 |
| Registrations | 0 |
| Conversion rate | 0.0% |

These values are a **starting baseline**, not a mature performance verdict.

## 4. Current query / page signals

The current GSC extract still reflects the same short window used in Phase 4.1.

### Active watchlist

`online tutoring hamilton on`

- owner: `/en/locations/canada/ontario/hamilton`
- current sample: **8 impressions / 0 clicks**
- Phase 4 decision remains: preserve the owner and monitor
- Phase 4.3 already strengthened this owner through contextual internal authority

### Owner mismatch monitor

`chemistry tutoring`

- intended owner: `/en/subjects/chemistry`
- current sample previously surfaced the Homepage once
- current decision remains: monitor query-to-page distribution; do not change routing or create another Chemistry page from one impression

### Course-code owners

The eight existing Ontario course owners remain measurement targets rather than expansion targets:

- MTH1W
- MPM2D
- MCR3U
- MHF4U
- MCV4U
- MDM4U
- SCH3U / SCH4U
- SPH3U / SPH4U

Phase 4.4 has already improved their internal discovery from Math, Chemistry and Physics.

## 5. What can be monitored now

The following can be tracked immediately even before 56 days are accumulated:

- whether impressions continue to appear for priority Local / Subject / Course owners;
- whether the correct owner URL is receiving the query;
- first organic clicks;
- sudden indexing/owner regressions;
- emergence of duplicated query ownership;
- first organic sessions;
- first trial-start / registration events attributable to organic landing pages;
- obvious technical or tracking failures.

These are monitoring signals, not yet enough for broad optimization conclusions.

## 6. What is blocked by insufficient history

Do not make a major Phase 5 optimization decision yet based on:

- current 7-day GSC sample;
- current 1-day GA4 sample;
- zero-click CTR alone;
- a single query impression on the wrong owner;
- one city showing more impressions than another in one week;
- absence of current course-code rows in a short sample.

Specifically blocked until stronger evidence exists:

- creating new city-subject pages;
- creating new city-course pages;
- broad title/H1 rewrites for Hamilton;
- new Grade/Course owners without distinct demand;
- redirect/merge actions for the Chemistry owner mismatch;
- declaring a money page successful or unsuccessful from current conversion data.

## 7. Phase 5 performance decision framework

Phase 5 should evaluate actions in this order:

1. **Tracking health** — is the data capture complete and consistent?
2. **Owner correctness** — is the intended page receiving the intended query?
3. **Visibility** — are impressions and average positions growing?
4. **CTR opportunity** — are pages receiving enough impressions to evaluate snippet/title performance?
5. **Landing-page behavior** — are organic users engaging with the intended commercial page?
6. **Trial conversion** — are organic visits contributing to trial starts and registrations?
7. **Expansion decision** — only then consider a new page or materially different intent owner.

## 8. Phase 5.1 promotion conditions

A priority cluster can move from monitoring to optimization review when there is enough evidence to make the intervention measurable.

### Owner/content optimization candidate

Promote for review when at least one of the following is true:

- Phase 4 rolling-56-day owner threshold is met;
- a priority page records repeated impressions across multiple weeks and a clear owner/snippet/content gap;
- the page receives organic clicks but has a documented conversion-path weakness;
- a wrong secondary URL repeatedly receives a material share of the coherent query cluster.

### CTR optimization candidate

Do not rewrite metadata from a handful of impressions. A CTR test requires enough repeated impressions for the same owner/query family to compare before/after behavior meaningfully.

### Conversion optimization candidate

Organic trial conversion should be evaluated only after the landing pages have enough organic sessions and the GA4 event history is stable enough to distinguish real behavior from test traffic/noise.

## 9. Required Phase 5 monitoring views

The existing production dashboard already provides the required foundation:

- `GSC_Raw`
- `GA4_Raw`
- `GA4_Traffic_Raw`
- `Executive_Dashboard`
- `SEO_Opportunity_Map`
- `SEO_Experiment_Ledger`
- `Priority_Page_QA`
- `SEO_Content_Patch_Drafts`
- `Technical_Regression_Audit`

Phase 5 should use these as the source of truth instead of recreating a second reporting system.

## 10. Immediate Phase 5.1 watchlist

1. **Hamilton local owner** — persistence, clicks, position trend.
2. **Chemistry owner assignment** — homepage vs `/en/subjects/chemistry`.
3. **Phase 3 money pages** — Math, English, Science, French, Ontario Curriculum, Exam Preparation, Homework Help.
4. **Ontario course owners** — first impressions/clicks after Phase 4.4 discovery strengthening.
5. **Organic conversion funnel** — landing page → trial form start → registration.
6. **Data freshness** — confirm Windsor continues extending GSC and GA4 history toward the 56-day readiness point.

## 11. Phase 5.0 decision

**PASS — measurement baseline established.**

The correct next action is **not** another speculative SEO page batch. The current action is to maintain tracking health, accumulate history, and promote only the first owner/query/conversion opportunity that reaches the evidence gate.

Phase 5.1 should therefore be treated as **Performance Signal Monitoring & Opportunity Promotion**.
