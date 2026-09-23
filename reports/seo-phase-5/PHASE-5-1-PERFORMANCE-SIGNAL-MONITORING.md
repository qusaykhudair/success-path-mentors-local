# Phase 5.1 — Performance Signal Monitoring & Opportunity Promotion

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Issue:** #53  
**Baseline:** `main @ be70106bd39a791aa67d2eda9b2f410a4088c34d`  
**Primary source:** `SPM - SEO & Analytics Production Dashboard`  
**Status:** **MONITOR ACTIVE / NO SEO PATCH APPROVED YET**

## 1. Objective

Activate an evidence-led monitoring layer that watches search demand, query-to-page ownership, first clicks, organic funnel activity, and data freshness before Phase 5 begins optimization work.

Management has directed Phase 5.1 monitoring to start now. The remaining Phase 4.9 Facebook external activation evidence continues in parallel and is not treated as completed by this phase.

## 2. Production monitor added

A new dashboard tab has been added to the existing production spreadsheet:

`Phase5_Signal_Monitor`

It uses the existing source tabs rather than creating a second analytics system:

- `GSC_Raw`
- `GA4_Raw`
- `GA4_Traffic_Raw`
- `Executive_Dashboard`
- `SEO_Opportunity_Map`
- `Priority_Page_QA`

The monitor contains dynamic formulas for data freshness, current KPIs, priority query signals, first organic conversion signals, Ontario course-code demand, and Facebook organic attribution evidence.

## 3. Current measurement snapshot

Current production state:

| Signal | Current state | Phase 5.1 decision |
|---|---:|---|
| GSC latest date | 2026-09-19 | WATCH — approximately four days behind current date |
| GA4 latest production date | 2026-09-20 | WATCH — approximately three days behind current date |
| GSC history | 7 days | BUILDING — 56-day gate not reached |
| GSC impressions | 110 | MONITOR |
| GSC clicks | 0 | MONITOR — no CTR rewrite |
| Average position | 11.85 | MONITOR with query/page context only |
| Organic sessions | 0 attributable rows | MONITOR |
| Organic trial starts | 0 | MONITOR |
| Organic registrations | 0 | MONITOR |
| Facebook organic sessions | 0 | Phase 4.9 evidence still pending |

The current sample is not mature enough to call a page successful or unsuccessful.

## 4. Priority signal watchlist

### Hamilton

Query: `online tutoring hamilton on`

- intended owner: `/en/locations/canada/ontario/hamilton`
- current impressions: **8**
- active query days in current extract: **6**
- clicks: **0**
- owner correctness: **PASS**
- Phase 5.1 status: **WATCH**

Decision: preserve the owner. Do not rewrite title/H1/meta from this short sample. Promote to Phase 5.2 only when the signal persists into additional weekly snapshots and/or begins generating clicks.

### British Columbia curriculum

Query: `what is the best online tutoring for the bc curriculum?`

- intended owner: `/en/locations/canada/british-columbia`
- current impressions: **7**
- clicks: **0**
- owner correctness: **PASS**
- existing page QA: factual curriculum-depth gap already documented
- Phase 5.1 status: **WATCH / CANDIDATE FOR 5.2**

Decision: this is currently the clearest content-quality opportunity because the owner is correct and the existing QA has identified a specific factual gap. No new URL is needed. A content patch is not released in 5.1; it moves to prioritization first.

### Alexandria

The Alexandria query family has approximately **10 landing-page impressions** across close query variants, with the intended Alexandria owner receiving the signal.

Decision: owner correct; continue monitoring. No local-depth expansion from the current short sample.

### New Orleans

Current query signal: **9 impressions / 0 clicks**.

Decision: owner correct; continue monitoring. No page change approved yet.

### Chemistry owner mismatch

Query: `chemistry tutoring`

- intended owner: `/en/subjects/chemistry`
- wrong owner observed: Homepage
- wrong-owner impressions: **1**

Decision: **MONITOR ONLY**. One impression does not justify redirect, merge, metadata, or architecture work.

### Ontario course-code owners

The current short extract contains **0 meaningful course-code query impressions** across the existing MTH1W, MPM2D, MCR3U, MHF4U, MCV4U, MDM4U, SCH3U/SCH4U and SPH3U/SPH4U demand families.

Decision: preserve existing course owners and wait for first-party demand.

## 5. Promotion gates

Phase 5.1 now uses the following operational gates:

### Data freshness gate

- GSC more than 5 days stale → **ALERT**
- GA4 more than 3 days stale → **ALERT**

Fix the connector/feed before interpreting stale data as a traffic or ranking decline.

### Phase 5.2 opportunity-promotion gate

Promote an existing owner when a non-brand signal repeats across at least two weekly monitoring snapshots and has clear commercial or strategic value. Promotion means deeper review, not automatic editing.

### Phase 5.3 owner-mismatch gate

Run ownership/cannibalization review when a coherent query family sends at least **5 wrong-owner impressions across at least 3 distinct dates**.

A redirect or merge still requires separate architecture evidence.

### Phase 5.4 CTR-review gate

Review title/meta/snippet when an owner reaches at least **100 impressions in a rolling 28-day window** and average position is **15 or better**.

Do not rewrite metadata from a handful of zero-click impressions.

### Phase 5.5 conversion-review gate

Review CTA/trust/form friction when an owner receives at least **25 attributable organic sessions with 0 trial starts**, or enough traffic exists to compare the landing-page funnel against a stable site baseline.

Test/referral traffic must remain excluded.

### Phase 5.6 / 5.7 content-experiment gate

A patch requires:

1. the correct owner;
2. a documented content/factual gap;
3. persistent first-party demand or a narrow low-risk factual quality case;
4. a before/after measurement plan.

### Phase 5.8 scale/new-owner gate

A new owner/page still requires all of:

- rolling 56-day first-party demand;
- materially distinct intent;
- SERP support for a separate page type;
- no cannibalization with an existing owner;
- meaningful conversion value.

No doorway city-subject, city-service, or city-course proliferation is authorized.

## 6. Current decision

**Phase 5.1 monitoring infrastructure = PASS / ACTIVE.**

No website content, routing, metadata, schema, auth, booking, or hosting change is approved from the current short sample.

Current actionable state:

- **Data freshness:** WATCH
- **Hamilton:** WATCH
- **BC curriculum:** WATCH / strongest current Phase 5.2 candidate
- **Alexandria:** WATCH
- **New Orleans:** WATCH
- **Chemistry mismatch:** MONITOR
- **Ontario course-code demand:** MONITOR
- **Organic funnel:** MONITOR
- **Facebook organic attribution:** PENDING (parallel Phase 4.9 evidence)

The next execution step after this monitoring layer is **Phase 5.2 — Opportunity Prioritization**, using the signal monitor as the input source.