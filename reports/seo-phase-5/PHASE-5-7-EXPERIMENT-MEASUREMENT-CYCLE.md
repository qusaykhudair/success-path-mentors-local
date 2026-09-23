# Phase 5.7 — Experiment & Measurement Cycle

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Baseline main:** `fe782a6fb3d60576ed79f91b624df9cb73f2e10b`  
**Issue:** #66  
**Status:** PASS / CONTROL ACTIVE

## 1. Purpose

Phase 5.7 establishes the operating system for measuring SEO changes after deployment. The goal is to stop untracked edits and prevent conclusions from being drawn before a production change is verified live and enough search/conversion evidence exists.

This work unit does not introduce a new public URL, metadata rewrite, CTA change, routing change or content expansion.

## 2. Experiment lifecycle

Every production SEO experiment follows this sequence:

1. `PRE-START` — code may be merged, but the production change is not yet verified live.
2. `LIVE / CLOCK STARTED` — live owner and deployment behavior are verified; start date is recorded.
3. `EARLY MONITOR` — 14 complete live days; directional health review only.
4. `READOUT READY` — at least 28 complete live days and at least 100 relevant impressions for search-performance verdicts.
5. `CONVERSION READY` — at least 25 qualified non-test organic sessions to the owner for conversion-path conclusions.
6. `56-DAY REVIEW` — mature persistence/scale review for expansion, iteration or rejection.
7. `CLOSED` — a decision and evidence record have been stored.

A hard factual, routing, canonical, indexability, CTA or analytics regression can bypass the normal waiting period and trigger an immediate patch/revert review.

## 3. Decision states

Allowed states are:

- `PRE-START`
- `MONITOR`
- `HOLD FOR DATA`
- `KEEP`
- `ITERATE`
- `PATCH REQUIRED`
- `REVERT`
- `PROMOTE TO SCALE REVIEW`
- `CLOSED`

Short-term ranking movement by itself is not a rollback trigger.

## 4. Search readout gate

A normal CTR/content performance verdict requires both:

- at least 28 complete days live; and
- at least 100 relevant impressions for the owner/query cluster.

The readout includes:

- impressions;
- clicks;
- CTR;
- average position;
- query breadth;
- intended-owner correctness;
- data freshness and known seasonality/context.

If the threshold is not met, the decision remains `HOLD FOR DATA`.

## 5. Conversion readout gate

A landing/conversion conclusion requires at least 25 qualified non-test organic sessions to the owner.

When volume is sufficient, review:

- organic sessions;
- trial starts;
- registration completions;
- event health;
- source/medium attribution;
- landing-path attribution.

This preserves the Phase 5.5 rule that test traffic and legacy event-name noise must not be treated as genuine business conversion evidence.

## 6. First controlled experiment — EXP-002

**Owner:** `/en/locations/canada/british-columbia`  
**Change:** BC curriculum content-depth patch from Phase 5.6  
**Issue / PR:** #64 / #65  
**Merge:** `fe782a6fb3d60576ed79f91b624df9cb73f2e10b`

The patch adds approved B.C.-specific curriculum and graduation-assessment depth without changing the URL, title, H1, canonical ownership or CTA path.

Current experiment state:

`MERGED — PRE-START / LIVE VERIFICATION PENDING`

The measurement clock must not be backdated to merge time. It starts only when production verification confirms that the intended B.C. copy is live and the owner/canonical/CTA remain correct.

## 7. Production verification gate for EXP-002

To move EXP-002 from `PRE-START` to `LIVE / CLOCK STARTED`, verify on production:

- B.C. Know–Do–Understand curriculum wording is visible;
- Big Ideas / Curricular Competencies / Content / Core Competencies context is visible;
- Numeracy 10 / Literacy 10 / Literacy 12 support wording is visible;
- official B.C. curriculum and graduation-assessment references are present;
- canonical owner remains the British Columbia page;
- no routing or CTA regression is introduced.

The live check performed immediately after merge did not yet surface the new text, so EXP-002 correctly remains `PRE-START` rather than generating a false measurement start date.

## 8. Dashboard control

Added production-dashboard tab:

`Phase5_Experiment_Control`

It records seven operating gates:

1. deployment verification;
2. measurement start;
3. 14-day early monitor;
4. 28-day / 100-impression performance verdict;
5. conversion readout;
6. rollback guardrail;
7. 56-day scale gate.

The existing `SEO_Experiment_Ledger` EXP-002 row was reconciled to PR #65 and marked `MERGED — PRE-START / LIVE VERIFICATION PENDING`.

## 9. Scale / expansion guardrail

No experiment can justify a new SEO URL merely because impressions increased.

Any new owner/page still requires:

- persistent demand;
- materially unique intent;
- no existing owner able to satisfy the intent normally;
- cannibalization review PASS;
- direct conversion value;
- the existing Phase 4 / Phase 5.8 evidence gate.

## 10. Phase 5.7 decision

**PASS / CONTROL ACTIVE.**

The experiment-control framework is established and EXP-002 is now governed by an explicit start/readout/decision process. Individual experiment readouts remain ongoing operational measurements and do not block closure of this setup work unit.

Next formal phase: **Phase 5.8 — 56-Day Performance Review & Scale Gate**. That phase cannot produce a mature scale verdict until the required evidence window exists; interim monitoring continues under this Phase 5.7 control framework.
