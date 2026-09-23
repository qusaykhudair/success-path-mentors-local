# Phase 5.4 — CTR & SERP Optimization Readiness

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Baseline:** `main @ 95993d07e69aaa6e230b74652b857c8d5ceb02a6`  
**Issue:** #59  
**Primary sources:** Production SEO & Analytics Dashboard, `SEO_Opportunity_Map`, `Phase5_Owner_Validation`  
**Status:** PASS — CTR/SERP gate established; no snippet patch authorized yet

## 1. Purpose

Phase 5.4 determines whether any current SEO owner has enough first-party evidence for a title/meta/snippet intervention.

This phase deliberately separates three different problems:

1. **Ranking problem** — the page is not visible enough yet;
2. **Ownership problem** — Google is surfacing the wrong URL;
3. **CTR / snippet problem** — the intended owner is visible often enough, ranking is reasonably competitive, but users are not clicking.

Only the third case qualifies for a Phase 5.4 SERP experiment.

## 2. Current data maturity

Current production evidence remains early:

- GSC history: 7 days through 2026-09-19;
- total site impressions: 110;
- total clicks: 0;
- site CTR: 0.0%;
- average site position baseline: 11.85;
- no priority non-brand owner/cluster currently has 100 rolling-28-day impressions.

Current monitored non-brand owner signals are approximately:

| Owner / cluster | Impressions | Clicks | Owner state | Phase 5.4 state |
|---|---:|---:|---|---|
| Alexandria VA tutoring | ~10 | 0 | Correct | NOT READY |
| New Orleans tutoring | 9 | 0 | Correct | NOT READY |
| Hamilton online tutoring | 8 | 0 | Correct | NOT READY |
| BC curriculum tutoring | 7 | 0 | Correct | NOT READY FOR SERP TEST |
| Cedar Rapids tutoring | 5 | 0 | Correct | NOT READY |
| Arabic advanced precalculus | 5 | 0 | Correct | NOT READY |
| Chemistry tutoring | 1 | 0 | Early owner mismatch | BLOCKED AS CTR TEST |
| Madison science tutoring | 2 | 0 | Early owner mismatch | BLOCKED AS CTR TEST |

The conclusion is not that the current snippets are poor. The conclusion is that the sample is too small to make a defensible CTR diagnosis.

## 3. CTR / SERP intervention gate

An owner becomes eligible for CTR review only when all conditions below are met:

1. **Volume:** at least 100 impressions for one coherent non-brand owner/query cluster in a rolling 28-day window;
2. **Visibility:** average position is within a practical snippet-test range, operationally targeted at `≤15`, and ranking itself is not the dominant constraint;
3. **Owner stability:** Phase 5.3 query-to-page ownership is correct/stable;
4. **Technical stability:** no unresolved canonical, redirect or cannibalization issue is confounding the page;
5. **Intent coherence:** the query set represents the same commercial user need rather than mixed brand/noise intent;
6. **Fresh measurement:** GSC data is current enough to support a before/after comparison.

These are internal operating thresholds for this project, not universal SEO rules.

## 4. Current decisions

### Alexandria, New Orleans, Hamilton, Cedar Rapids

These owners are correctly mapped, but their current impression counts are single digits / low double digits.

Decision: **MONITOR — no title/meta/H1 rewrite.**

### British Columbia curriculum opportunity

BC is currently the strongest evidence-backed content-depth candidate from Phase 5.2 because the owner is correct and a factual curriculum/assessment depth gap is already documented.

However, that does **not** make it a CTR experiment candidate.

Decision:
- metadata remains stable in Phase 5.4;
- `BC-002 / BC-003 / BC-004` may continue into Phase 5.6 as a controlled factual content-patch review;
- a title/meta test still waits for the CTR gate.

This separation prevents a content-quality fix from being confused with a snippet experiment.

### Chemistry

`chemistry tutoring` currently has one impression where the Homepage surfaced instead of `/en/subjects/chemistry`.

Decision: **BLOCKED AS CTR TEST.**

Reason: this is an ownership signal, not yet a snippet signal. Phase 5.3 remains the controlling gate. No Homepage title/meta change and no redirect is justified from one impression.

### Madison Science

Two science-intent impressions surfaced the Madison location owner instead of the broad General Science owner.

Decision: **BLOCKED AS CTR TEST.**

Reason: explicit subject intent must first prove stable ownership before any snippet optimization. No city-subject page is approved.

## 5. Dashboard implementation

A new production-dashboard tab was added:

`Phase5_CTR_SERP_Readiness`

It records:

- current priority owners / clusters;
- impressions, clicks and CTR;
- owner-stability state;
- readiness state;
- allowed action now;
- next trigger;
- the formal CTR/SERP gate;
- a future one-variable experiment protocol.

## 6. Future SERP experiment protocol

When an owner eventually becomes eligible:

### Step 1 — Baseline
Record the pre-change rolling-28-day:
- impressions;
- clicks;
- CTR;
- average position;
- query mix;
- current title/snippet;
- owner/canonical state.

### Step 2 — Change one variable
Start with **title OR meta description**, not title + H1 + body simultaneously.

The goal is causal clarity.

### Step 3 — Observe
Do not judge the test from day-to-day movement. Wait for sufficient post-change impressions and compare CTR together with average position and query mix.

### Step 4 — Decide
Use `KEEP / REVERT / ITERATE` only after comparable evidence.

Formal experiment logging and before/after analysis belong to Phase 5.7.

## 7. What Phase 5.4 does not authorize

Phase 5.4 does not authorize:

- speculative title rewrites;
- broad meta-description rewrites;
- H1 changes based only on zero-click single-digit samples;
- city-subject or city-course page creation;
- redirect/merge action from early owner mismatches;
- CTR optimization of brand/noise queries.

## 8. Release decision

**PASS.**

The CTR/SERP readiness system is operational, but **no current owner crosses the evidence threshold for a production snippet experiment**.

Therefore the correct Phase 5.4 production action is **HOLD METADATA / CONTINUE MEASUREMENT** rather than forcing an SEO change.

No website runtime, routing, metadata, title, H1, schema, sitemap, auth, booking or hosting behavior changed in this phase.

Next sequential stage: **Phase 5.5 — Landing Page & Conversion Optimization**.
