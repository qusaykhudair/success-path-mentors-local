# ADS-WU-006 — V5 Activation Gate

**Date prepared:** 2026-10-06  
**Campaign:** `SPM_ON_Search_Clicks_Learning_Oct2026`  
**Working Unit:** ADS-WU-006 — Ad & Landing Page Quality  
**Status:** ACTIVATED — PUBLIC DESTINATION QA PASSED / MEASURED VALIDATION IN PROGRESS

## Purpose

This gate continues WU-006 after implementation and production QA.

The Ontario contextual landing experience is already deployed and production-QA passed. The remaining WU-006 work is:

1. explicit approval received;
2. Ontario contextual destination activated in Google Ads (user-confirmed);
3. public destination and registration handoff QA passed;
4. confirm the edited ad returns to Eligible/serving after Google review;
5. collect measured post-activation evidence;
6. keep WU-006 In Progress until the measured evidence is reviewed.

This document records the V5 activation after explicit approval. The user confirmed the relevant paid-search Final URL was changed to `https://successpathmentors.net/en?ads_region=ontario`. No bidding, budget, targeting, network, device, schedule, audience, or conversion-strategy change was authorized as part of V5.

## Current production state

Production QA evidence:
- Global homepage `/en`: PASS and remains global.
- Ontario contextual experience `/en?ads_region=ontario`: PASS.
- Ontario hero message match: PASS.
- Ontario QuickStartCard replaces the disposable hero EnrollmentCard: PASS.
- WhatsApp routes to the Canadian number with Ontario-safe context and no automatic PII: PASS.
- Registration handoff preserves `ads_region=ontario`: PASS.
- Arabic, Germany, and French architecture remain isolated: PASS.
- Canonical/robots safeguards: PASS.
- Mobile/desktop visual QA: PASS.
- Performance and console/network QA: PASS.

Reference: `google-ads/ADS-WU-006-V4-PRODUCTION-QA.md`.

## Pre-activation Google Ads baseline

Early evidence already recorded:
- Search Impression Share: **20.11%**
- Search Lost IS (budget): **0.57%**
- Search Lost IS (rank): **79.31%**
- Search Lost Top IS (rank): **85.06%**
- Quality Score for `"online tutoring"` / broad `online tutoring`: **3/10**
- Expected CTR: **Below average**
- Ad relevance: **Above average**
- Landing page experience: **Below average**

Interpretation:
- Budget is not the current constraint.
- Rank is the dominant visibility constraint.
- Early diagnostics point mainly to Expected CTR + Landing Page Experience.
- Data volume remains small, so WU-006 must use controlled measurement rather than uncontrolled structural changes.

## Activation change requiring explicit approval

The only planned Google Ads change at this gate is the paid-search destination for the relevant responsive search ad:

`https://successpathmentors.net/en?ads_region=ontario`

No other campaign change is included.

Explicitly out of scope unless separately approved:
- bidding strategy changes;
- budget changes;
- Target CPA / Target ROAS;
- Performance Max;
- network changes;
- audience restrictions;
- device bid adjustments;
- schedule narrowing;
- geography/language changes.

## Immediate post-activation QA

After the destination is changed, verify:
- ad click opens the Ontario contextual experience;
- Ontario hero appears above the fold;
- global brand positioning remains visible;
- WhatsApp opens the Canadian number with Ontario context;
- "Book a Free Trial" preserves `ads_region=ontario`;
- no redirect/rewrite loop;
- no tracking/consent regression;
- canonical remains `/en`;
- no Arabic/Germany/French route contamination.

If any technical regression appears, revert the ad destination to the previously verified URL and keep WU-006 In Progress.

## V5 activation record — 2026-10-06

- Explicit approval: received in chat.
- Google Ads Final URL activation: user-confirmed.
- Activated destination: `https://successpathmentors.net/en?ads_region=ontario`.
- Public destination QA: PASS.
- Ontario hero/message match: PASS.
- Registration destination `/en/register?ads_region=ontario`: PASS.
- Canonical remains `https://successpathmentors.net/en`: PASS.
- Robots for contextual landing: `noindex, follow`: PASS.
- WhatsApp destination resolves to the Canadian business number `+1-647-787-5999`: PASS.
- No Google Ads bid/budget/targeting change was requested or performed as part of this activation.
- Remaining immediate account-side check: confirm the edited RSA returns to **Eligible/serving** after Google review and that the ad table shows the intended Final URL.

Evidence classification: activation is user-confirmed; public destination QA was independently verified against the live production URLs. Actual Google Ads account-side post-edit status still requires account evidence/screenshot.

## Measured validation required before WU-006 can be Done

Collect a comparable post-activation sample and compare:
- CTR;
- Quality Score;
- Expected CTR;
- Ad relevance;
- Landing Page Experience;
- Search Impression Share;
- Search Lost IS (rank);
- Search Lost Top IS (rank);
- Search Lost IS (budget);
- Search Terms quality;
- WhatsApp inquiry quality / relevance where operationally identifiable.

Directional evidence to look for:
- Landing Page Experience improves from **Below average**, or other Quality Score components improve;
- CTR improves or remains healthy while traffic relevance is preserved;
- Search Lost IS (rank) begins to improve without a budget increase;
- WhatsApp lead quality does not deteriorate.

Do not claim causality from a tiny sample. Record insufficient-data status where appropriate.

## WU-006 completion rule

WU-006 remains **In Progress — Activated / Public destination QA passed / Measured validation in progress** until account-side post-edit status and post-activation performance evidence have been reviewed.

Code deployment alone is not sufficient to mark WU-006 Done.

## Related Working Units

- ADS-WU-004 remains In Progress for Search Terms cleanup.
- ADS-WU-005 initial Auction Insights baseline is Done; continue monitoring.
- ADS-WU-007 remains Blocked until the conversion-readiness gate passes.
- ADS-WU-002 conversion architecture remains incomplete and must not be bypassed by a bidding-strategy change.
