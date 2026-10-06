# ADS-WU-006 — V5 Activation Gate

**Date prepared:** 2026-10-06  
**Campaign:** `SPM_ON_Search_Clicks_Learning_Oct2026`  
**Working Unit:** ADS-WU-006 — Ad & Landing Page Quality  
**Status:** READY FOR ACTIVATION APPROVAL — NOT YET ACTIVATED FROM GOOGLE ADS

## Purpose

This gate continues WU-006 after implementation and production QA.

The Ontario contextual landing experience is already deployed and production-QA passed. The remaining WU-006 work is:

1. receive explicit approval before changing the Google Ads destination;
2. activate the Ontario contextual destination only;
3. perform immediate technical QA;
4. collect measured post-activation evidence;
5. keep WU-006 In Progress until the measured evidence is reviewed.

This document does **not** authorize or perform a Google Ads setting change.

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

WU-006 remains **In Progress — Implemented / Production-QA passed / Awaiting activation and measured validation** until post-activation evidence has been reviewed.

Code deployment alone is not sufficient to mark WU-006 Done.

## Related Working Units

- ADS-WU-004 remains In Progress for Search Terms cleanup.
- ADS-WU-005 initial Auction Insights baseline is Done; continue monitoring.
- ADS-WU-007 remains Blocked until the conversion-readiness gate passes.
- ADS-WU-002 conversion architecture remains incomplete and must not be bypassed by a bidding-strategy change.
