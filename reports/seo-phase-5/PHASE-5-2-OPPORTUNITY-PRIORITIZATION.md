# Phase 5.2 — Opportunity Prioritization

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Baseline:** `main @ 816e0402a8f71114cecbe5c900fc41f79c16cf91`  
**Issue:** #55  
**Primary source:** `SPM - SEO & Analytics Production Dashboard`  
**Status:** PASS — prioritization layer established

## 1. Purpose

Phase 5.2 converts the Phase 5.1 monitoring signals into explicit action states without turning thin early data into speculative SEO changes.

Allowed states:
- **PROMOTE** — move an existing owner into deeper controlled review / narrow patch preparation;
- **WATCH** — commercially interesting signal, but not yet intervention-ready;
- **HOLD** — retain current owner and collect more evidence;
- **REJECT-NOW** — do not take the proposed structural/content action from current evidence.

`PROMOTE` is not approval to deploy. The existing release, cannibalization and 56-day gates remain in force.

## 2. Current data maturity

Current production evidence remains early:
- GSC history: 7 days, through 2026-09-19;
- GA4 production data: through 2026-09-20;
- GSC impressions: 110;
- clicks: 0;
- CTR: 0.0%;
- average position: 11.85;
- no attributable organic trial/registration evidence yet.

Therefore Phase 5.2 prioritizes *where to look next*; it does not declare mature page winners or losers.

## 3. Priority decisions

| Rank | Opportunity | Current signal | Owner / gap state | Decision | Next action |
|---|---|---|---|---|---|
| 1 | BC curriculum tutoring | 7 impressions / 0 clicks; repeated daily in current sample | Correct owner; factual curriculum/assessment depth gap already QA-verified | **PROMOTE** | Queue existing BC-002/003/004 draft for controlled Phase 5.6 content-patch review; no new URL |
| 2 | Hamilton online tutoring | 8 impressions / 0 clicks across 6 active days | Correct owner; no proven content defect | **WATCH** | Keep unchanged; require another weekly snapshot, first click, or verified content gap before intervention |
| 3 | Alexandria VA online tutoring | ~10 impressions / 0 clicks across query variants | Correct owner; no proven defect | **WATCH** | Keep unchanged; wait for persistence beyond current short window |
| 4 | New Orleans tutoring | 9 impressions / 0 clicks | Correct owner; no proven defect | **WATCH** | Monitor another weekly snapshot; no title/H1 rewrite now |
| 5 | Arabic advanced precalculus | 5 impressions / 0 clicks | Correct owner; Arabic title/H1 already aligned | **HOLD** | Collect query variants; no terminology rewrite |
| 6 | Cedar Rapids local tutoring | 5 impressions / 0 clicks | Correct owner; no proven defect | **HOLD** | Collect more demand before local-depth work |
| 7 | Chemistry owner mismatch | 1 impression on Homepage instead of Chemistry owner | Single mismatch only | **REJECT-NOW** for architecture action | No redirect/merge; Phase 5.3 review only if wrong-owner signal reaches ≥5 impressions across ≥3 dates |
| 8 | Ontario course-code expansion | 0 meaningful current query signal | Existing owners already exist | **REJECT-NOW** for expansion | No new course/grade page without persistent 56-day demand + unique intent + no cannibalization |

## 4. Highest-priority opportunity

The strongest current intervention candidate is the existing British Columbia owner:

`/en/locations/canada/british-columbia`

Why it is promoted:
1. the owner URL is already correct;
2. the observed query is directly curriculum-oriented;
3. the signal repeats across the full current seven-day sample;
4. prior owner-page QA already documented a specific, factual content-depth gap;
5. factual patch drafts already exist for curriculum model terminology and graduation-assessment support;
6. the opportunity can be addressed without creating a new URL or changing owner architecture.

Existing draft records:
- `BC-002` — curriculum description;
- `BC-003` — curriculum points;
- `BC-004` — assessment support.

This is a **controlled existing-page patch candidate**, not an approval for immediate deployment. Broad metadata/H1 changes remain blocked by thin data.

## 5. Why Hamilton is not promoted yet

Hamilton remains an important watchlist signal:
- 8 impressions;
- 0 clicks;
- 6 active days;
- correct owner.

However, current QA does not show a basic owner/title/H1 defect. The possible opportunity is deeper verified Ontario/Hamilton context or proof. That is not enough by itself to justify a content patch from one short observation window.

Decision: **WATCH**, not rewrite.

## 6. Chemistry guardrail

The query `chemistry tutoring` produced one wrong-owner impression on the Homepage in the available sample.

One event is not enough to infer cannibalization or routing failure. Phase 5.3 owner review is triggered only if a coherent query family reaches at least:
- 5 wrong-owner impressions;
- across 3 or more distinct dates.

Until then: no redirect, merge or architecture change.

## 7. Dashboard implementation

A new production-dashboard tab was added:

`Phase5_Opportunity_Priority`

It records:
- ranked opportunities;
- current first-party signal;
- owner correctness;
- documented gap state;
- commercial value;
- action state;
- exact next step;
- definitions for PROMOTE / WATCH / HOLD / REJECT-NOW.

This view complements, rather than replaces:
- `Phase5_Signal_Monitor`;
- `SEO_Opportunity_Map`;
- `Priority_Page_QA`;
- `SEO_Content_Patch_Drafts`.

## 8. Phase 5.2 release decision

**PASS.**

The prioritization system is now operational and one opportunity is promoted into controlled future patch review: **BC curriculum**.

No website runtime, content, routing, metadata, schema, sitemap, auth, booking or hosting behavior changed in Phase 5.2.

Next sequential stage: **Phase 5.3 — Query → Page Ownership Validation**.

Phase 4.9 external Facebook activation remains a separate parallel open item and is not represented as completed here.
