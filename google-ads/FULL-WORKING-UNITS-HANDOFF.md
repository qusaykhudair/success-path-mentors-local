# Google Ads — Full Working Units Handoff

## Purpose
This handoff is the authoritative working-unit map for the Google Ads program. It consolidates the original Working Units, the 3-phase execution model, optimization controls, multilingual expansion, Meta learning, cross-channel learning, WhatsApp priority, QA gates and review cadence.

## Current campaign
- Campaign: `SPM_ON_Search_Clicks_Learning_Oct2026`
- Current phase: **Phase 1 — Baseline / Learning**
- Current bidding: **Maximize Clicks**
- Current budget: **CA$10/day**
- Current geography: **Ontario, Canada — Presence only**
- Current language: **English**
- Current network: **Google Search only**
- WhatsApp: **priority contact channel**, but not allowed to steer bidding away from Maximize Clicks during Phase 1.

---

## 3-phase execution model

### Phase 1 — Baseline / Learning
**Timing:** Day 0–5+  
**Purpose:** collect clean baseline data.

Observe:
- Impressions
- Clicks
- CTR
- Avg CPC
- Search Terms
- Device
- Location
- Demographics
- Auction Insights when available
- Ad / asset status
- WhatsApp inquiry relevance where operationally identifiable

Do not:
- switch to Maximize Conversions
- add Target CPA / Target ROAS
- narrow demographics/devices/schedule prematurely
- re-enable Search Partners or Display
- accept broad Google recommendations automatically

### Phase 2 — Search Term Cleanup / Traffic Quality
**Timing:** start around Day 5–7 through approximately Day 30.

Actions:
- Search Terms → Keep / Add / Negative / Watch
- add evidence-based negatives
- promote proven high-intent queries
- review early Auction Insights
- review geo/device/demographic/time patterns without premature exclusions
- monitor WhatsApp inquiry quality and trial readiness

### Phase 3 — Maximize Conversions / Qualified Leads
**Timing:** around Day 30 only if the evidence gate passes.

Day 30 is a **decision gate**, not an automatic switch.

Preconditions:
- conversion actions correctly defined and tested
- duplicate risk removed
- enough trustworthy conversion volume
- qualified-lead definitions established
- WhatsApp / phone / registration / trial attribution workable
- business economics understood

If passed:
- move from Maximize Clicks to Maximize Conversions
- defer Target CPA until stable conversion data exists
- defer ROAS until revenue attribution is reliable

---

# Working Units

## ADS-WU-001 — Access & Baseline Capture
**Objective:** establish a trustworthy pre-change/live baseline.

Track:
- active campaign configuration
- budget
- bidding
- geography
- devices
- conversion actions
- Search Impression Share
- Lost IS Budget
- Lost IS Rank
- Top IS
- Absolute Top IS
- CTR
- CPC
- conversions/CVR/CPL when meaningful

**Current status:** In Progress. Live baseline exists and continues accumulating; first campaign, Search Terms, Auction Insights, rank/budget and Quality Score evidence has been captured.

**Exit:** dated account-sourced baseline metrics documented.

---

## ADS-WU-002 — Conversion Measurement Foundation
**Objective:** create privacy-safe measurement before conversion-led bidding or scaling.

Required definitions:
- WhatsApp / message interaction
- phone inquiry
- qualified lead
- free-trial registration
- trial attended
- paid student
- attributable revenue

Controls:
- Google tag / GTM audit
- primary vs secondary conversion actions
- attribution window documentation
- duplicate-conversion QA
- no parent/student PII in analytics parameters

**Current status:** In Progress. Base Google Ads tag is installed and detected; source event architecture is audited; contact-event instrumentation hardening is implemented on the WU-002 branch. Production GTM/event delivery and Google Ads conversion-action QA remain pending.

**Exit:** intended conversions fire once, duplicates ruled out, definitions approved.

Detailed execution spec: `google-ads/ADS-WU-002-CONVERSION-MEASUREMENT-FOUNDATION.md`.

---

## ADS-WU-003 — Search Campaign Pilot
**Objective:** launch a controlled Search pilot.

Current implementation:
- Search
- Maximize Clicks
- CA$10/day
- Ontario presence only
- English
- Search Partners OFF
- Display OFF
- all devices
- all day / all days
- no audience restrictions
- controlled Phrase Match
- baseline negatives
- Call asset
- WhatsApp Message asset
- Callouts
- Sitelinks
- Structured Snippet

**Current status:** Done. Campaign is serving; RSA and visible assets are Eligible; Phase-1 conversion-goal QA passed and evidence is recorded.

**Exit:** ads/assets approved and serving; final URL verified; no accidental conversion-goal contamination.

---

## ADS-WU-004 — Search Terms & Negative Keywords
**Objective:** reduce irrelevant clicks and improve intent quality.

Process:
- review Search Terms on fixed cadence
- classify: Keep / Add / Negative / Watch
- add negatives with rationale
- promote proven high-intent queries
- maintain irrelevant-spend trend

**Current status:** In Progress. First live Search Terms cleanup is recorded; continue Keep / Add / Negative / Watch classification from evidence.

**Exit:** first live search-term optimization recorded and versioned.

---

## ADS-WU-005 — Auction Insights Competitive Matrix
**Objective:** answer the consultant's core competitive question.

Track:
- Impression Share
- Overlap Rate
- Position Above Rate
- Top of Page Rate
- Absolute Top Rate
- Outranking Share
- Lost IS Budget
- Lost IS Rank

Management framing:
- out of every 10 eligible opportunities, how often did SPM appear?
- how many were lost to budget?
- how many were lost to rank?
- how often were competitors above us?

**Current status:** Done for the initial baseline. Auction Insights and Budget-vs-Rank evidence are recorded; continue monitoring on the established cadence.

**Exit:** first evidence-based competitive matrix documented.

---

## ADS-WU-006 — Ad & Landing Page Quality
**Objective:** improve Rank and conversion efficiency before solving issues with more budget.

Review:
- Expected CTR
- Ad Relevance
- Landing Page Experience
- ad promise → landing-page content → CTA alignment
- landing-page conversion impact

Constraint:
- preserve existing SEO architecture and production quality

**Current status:** In Progress. Quality diagnostics and full audit are complete; Ontario contextual landing is implemented/deployed; V4 production QA passed; V5 activation is complete; edited RSA is Eligible; measured post-activation validation is in progress.

**Exit:** weak diagnostic components have named corrective actions and measured impact.

---

### WU-006 continuation control
Production implementation is already live. The next gate is documented in `google-ads/ADS-WU-006-V5-ACTIVATION-GATE.md`.

Do not change the Google Ads destination, bidding, budget, targeting, networks, devices, schedules, audiences, or conversion strategy from this handoff without the required approval/evidence gate. WU-006 is not Done until post-activation measured evidence is reviewed.

---

## ADS-WU-007 — Conversion Bidding Transition
**Objective:** move from traffic learning to conversion optimization only when evidence supports it.

Requirements:
- minimum trustworthy conversion history defined
- pre/post CPC, CVR, CPL and lead-quality comparison
- avoid frequent strategy changes
- decision memo + rollback/hold rule

**Current status:** Blocked until Phase 3 evidence gate / Conversion Readiness Gate passes.

**Exit:** documented rationale supports Maximize Conversions and monitoring plan exists.

---

## ADS-WU-008 — Lead Quality & Trial Attribution
**Objective:** connect ad-generated inquiries to real trial outcomes.

Required:
- privacy-safe campaign/click attribution key
- classify qualified vs irrelevant leads
- track Free Trial Booked
- track Trial Attended
- reconcile Ads with operational records

**WhatsApp priority:**
- WhatsApp inquiries must be classified for relevance/qualification
- message count alone is not sufficient
- source and outcome should be reconciled without exposing PII to analytics

**Current status:** Not Started / design pending.

**Exit:** campaign → qualified lead → trial funnel report is reproducible.

---

## ADS-WU-009 — Paid Student CAC & ROAS
**Objective:** judge Google Ads by paid-student economics, not clicks alone.

Track:
- CPL
- Cost per Trial
- Paid Student CAC
- attributable revenue
- ROAS when attribution is reliable

Decision:
- Scale
- Optimize
- Hold / Reduce

**Current status:** Not Started.

**Exit:** CAC reproducible, attribution limitations documented, economics decision recorded.

---

## ADS-WU-010 — Continuous Control & 30/60/90 Reviews
**Objective:** create a repeatable management loop.

Cadence:
- weekly auction + Search Terms review
- monthly business-economics review
- 30/60/90 checkpoints
- traffic-light decision:
  - Scale
  - Optimize
  - Hold/Reduce
  - More Data

**Current status:** Ready.

**Exit:** recurring dashboard and review cadence active; each action has owner, due date, KPI and status.

---

## ADS-WU-011 — Multilingual Search Expansion
**Objective:** expand beyond English without contaminating the English learning dataset.

Language principle:
- English stays separate
- Arabic gets its own controlled structure
- French gets its own controlled structure
- German must be handled as a separate Germany/Europe market campaign, not mixed into Ontario English learning
- Turkish is not in scope

Requirements:
- language-specific keyword map
- language-specific negative list
- language-specific ad copy
- landing-page language alignment
- separate Search Terms reporting
- no cross-language budget reallocation until each language has enough data
- translation must preserve intent, not literal wording

**Current status:** Not Started.

**Exit:** language-specific setup passes QA before launch.

---

## ADS-WU-012 — Optimization Learning, QA & Gate Control
**Objective:** impose strict QA on every meaningful Google Ads change.

### 100-point QA model
- Foundation & setup: 15
- Search intent & keyword control: 15
- Negative keyword hygiene: 10
- Geo/language targeting: 10
- Network/bidding discipline: 10
- Ad/landing-page alignment: 10
- Measurement & tracking: 10
- Auction/competitor visibility: 10
- Lead quality/economics: 5
- Documentation & evidence: 5

### Gates
- Gate 0 — Foundation
- Gate 1 — Controlled Search Pilot
- Gate 2 — Search-Term Quality
- Gate 3 — Audience & Geo Learning
- Gate 4 — Auction Intelligence
- Gate 5 — Conversion Readiness
- Gate 6 — Economics
- Gate 7 — Scale

Rules:
- no multilingual launch without WU-011
- no conversion bidding without Gate 5
- no scaling without Gate 6

Review cadence:
- daily: policy/disapproval anomalies only
- every 3–4 days: early Search Terms QA if volume is sufficient
- weekly: keywords, negatives, devices, demographics, locations, schedule, Auction Insights
- every 14 days: structural optimization review
- 30 days: formal learning-phase score and gate decision
- 60 days: conversion-quality review
- 90 days: economics/scale decision

**Current status:** Active governance layer.

---

## ADS-WU-013 — Meta Ads Historical Learning & Benchmark Transfer
**Objective:** mine historical Meta/Facebook performance and convert evidence into hypotheses for Google and future Meta optimization.

Extract:
- campaign/ad set/ad results
- spend, impressions, reach, CPM, clicks, CTR, CPC, leads, CPL
- demographics
- geography
- device/placement
- creative format/hook/offer/CTA/language
- messaging conversations
- lead quality where available

Rules:
- separate cheap leads from qualified leads
- identify top/bottom performers
- transfer Meta findings to Google only as **hypotheses**, never as facts

Examples:
- landing-page promise
- ad-copy angles
- geographic priority hypotheses
- demographic observation hypotheses
- device/daypart hypotheses
- language demand signals

**Current status:** Specification exists; execution not yet started in this Google Ads pilot.

---

## ADS-WU-014 — Cross-Channel Learning Control (Google + Meta)
**Objective:** create a controlled learning loop between Search and Meta without mixing attribution.

Google teaches:
- explicit search intent
- query language
- keyword demand
- auction competition
- CPC
- Search Term quality

Meta teaches:
- creative resonance
- broad demographic response
- visual/message hooks
- social proof
- remarketing potential

Shared funnel:
Lead → Qualified Lead → Trial → Trial Attended → Paid Student → Revenue

Rules:
- keep channel attribution separate
- never merge Google/Meta CPL without labeling source
- Meta demographic winners are hypotheses for Google observation
- Google Search Terms can inform Meta wording/creative tests
- compare Paid Student CAC by channel before budget reallocation

**Current status:** Specification exists; activate after sufficient data in both channels.

---

# Optimization control map

## Current — Phase 1
Primary focus:
- maintain the controlled Maximize Clicks baseline
- continue Search Terms cleanup and traffic-quality learning
- monitor Auction Insights / rank vs budget
- complete WU-006 V5 activation only after explicit approval
- after activation, measure CTR, Quality Score components, Landing Page Experience, rank-loss metrics and WhatsApp inquiry quality
- no unrelated structural optimization unless policy/error issue or separately approved

## Phase 2
Primary focus:
- Search Term cleanup
- negative refinement
- high-intent query promotion
- Auction Insights
- quality diagnostics
- WhatsApp lead-quality classification

## Phase 3
Primary focus:
- conversion definitions and QA
- qualified WhatsApp/message lead
- phone lead
- trial booking
- trial attendance
- paid student
- Maximize Conversions decision
- CPL / CAC / ROAS economics

---

# WhatsApp control
WhatsApp is a priority operational channel throughout the program.

Phase 1:
- keep Message Asset enabled if eligible
- observe message volume/relevance
- do not let message conversion control bidding

Phase 2:
- classify message quality
- connect search intent to WhatsApp inquiry type
- identify which search terms produce qualified WhatsApp leads

Phase 3:
- if QA supports it, use qualified WhatsApp/message conversion as a meaningful conversion signal
- avoid counting weak/irrelevant messages as equal-value leads
- connect qualified WhatsApp lead → trial → paid student through privacy-safe operational attribution

---

# Current handoff next action
1. Google Ads → Goals → Conversions → Summary
2. QA `Submit lead form` and any `Leads from messages` action
3. Ensure neither is steering the current Maximize Clicks pilot
4. Then confirm ad/assets Approved/Eligible and campaign serving
5. Enter observation-only Phase 1 window
