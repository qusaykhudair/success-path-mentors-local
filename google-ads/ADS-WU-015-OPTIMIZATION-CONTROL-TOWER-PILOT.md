# ADS-WU-015 — Google Ads Optimization Control Tower Pilot

**Date prepared:** 2026-10-06  
**Status:** Planned / Pilot not started  
**Relationship to current campaign:** Parallel capability pilot only. It must not override the current Phase 1/2/3 sequence or ADS-WU-012 governance gates.

## Objective

Evaluate and pilot an advanced Google Ads optimization and ad-analysis capability that goes beyond root-cause diagnosis. The goal is to continuously assess performance, identify opportunities, recommend interventions, prioritize them by expected business impact, and eventually automate only the safest classes of actions.

**Decision:** run a controlled pilot before adopting any optimizer as a permanent part of the marketing stack.

The objective is not to add another dashboard. The objective is to develop a practical **Google Ads Optimization Control Tower** capable of monitoring, diagnosing, recommending, prioritizing, and eventually automating selected interventions while keeping strategic decisions under human control.

## Optimizer capability requirements

The pilot must evaluate whether the optimizer can provide useful intervention support across:

- **Search terms:** promote strong queries, exclude waste, and monitor emerging intent.
- **Keywords:** discover new keywords, pause/restructure weak keywords, assess match types, and identify cannibalization/duplication.
- **Negative keywords:** mine irrelevant terms, build exclusions, and avoid over-exclusion.
- **Traffic routing:** ensure valuable queries reach the most relevant campaign/ad group instead of being misrouted by broad/phrase matching.
- **Performance Max:** analyze search terms, assets, traffic overlap, negatives, and campaign structure.
- **Placements:** identify and exclude low-quality websites, apps, YouTube placements, and other waste.
- **Geography:** compare country, province/state, city, and regional profitability.
- **Devices:** identify material differences between mobile, desktop, and tablet.
- **Day/time:** identify day-of-week and hour-of-day patterns.
- **Creative:** assess RSA/PMax headlines, descriptions, images, videos, and creative fatigue.
- **Budget and bidding:** identify reallocation opportunities and assess bid-strategy changes.
- **Landing pages:** evaluate query-to-page relevance and conversion-rate deterioration.
- **Anomalies:** detect unusual spend, traffic, CPC, CPA, conversion, or impression changes.

## Pilot candidates

### Optmyzr
Current leading candidate for the optimization/control layer. Key capabilities to test include search-query management, keyword/negative-keyword workflows, traffic sculpting/routing, rule-based automation, budget management, monitoring, root-cause investigation, PMax analysis, and placement controls.

### Adalysis
Leading challenger. Evaluate directly against Optmyzr for continuous audits, keyword/search-term intelligence, n-gram analysis, PMax analysis, placement review, creative/ad testing, budget analysis, anomaly detection, and optimization workflow.

### TrueClicks
Potential independent QA/monitoring layer. Evaluate whether it adds material value for continuous audits, configuration checks, budget pacing, anomaly detection, and waste detection without excessive overlap.

### Google Ads native
Remains the execution foundation for native bidding, experiments, conversion signals, Search Terms, exclusions, AI Max/PMax, and campaign changes. Native recommendations are evidence inputs, not an independent control layer.

## Working competitive matrix

> This matrix is a pilot hypothesis to validate with real account workflows. It is not a permanent vendor decision.

| Capability | Optmyzr | Adalysis | TrueClicks | Google Native |
|---|---|---|---|---|
| Diagnosis / root cause | Excellent | Excellent | Strong | Moderate |
| Keyword optimization | Excellent | Excellent | Strong | Strong |
| Search-term mining | Excellent | Excellent | Strong | Strong |
| Negative keyword optimization | Excellent | Excellent | Strong | Strong |
| Traffic sculpting | Excellent | Strong | Moderate | Limited |
| PMax analysis | Excellent | Excellent | Strong | Excellent |
| Placement analysis/exclusion | Excellent | Excellent | Strong | Strong |
| Budget optimization | Excellent | Excellent | Strong | Excellent |
| Bid intervention | Excellent | Strong | Moderate | Excellent |
| Creative/ad analysis | Strong | Excellent | Moderate | Excellent |
| Custom rules/automation | Excellent | Excellent | Strong | Strong |
| Continuous auditing | Excellent | Excellent | Excellent | Moderate |
| Overall current fit | **Leading candidate** | **Leading challenger** | QA layer | Essential base |

## Intervention governance

The optimizer must operate under ADS-WU-012 gate control.

### Green — safe / highly controlled automation
Examples:
- deterministic broken URLs;
- duplicate-account hygiene;
- known junk placements;
- clearly irrelevant search terms with documented deterministic rules;
- monitoring/alerting;
- non-destructive anomaly flags.

Green does **not** mean unrestricted autonomy. All automated rules must have a documented scope, rollback method, and audit trail.

### Yellow — recommendation + human approval
Examples:
- adding keywords;
- introducing negatives with meaningful traffic implications;
- restructuring ad groups;
- changing targeting;
- moderate budget reallocations;
- placement exclusions where quality is not deterministic;
- creative rotation changes.

### Red — explicit human approval mandatory
Examples:
- bid-strategy changes;
- Maximize Clicks → Maximize Conversions;
- Target CPA / Target ROAS;
- major budget reallocations;
- major geographic exclusions;
- conversion-goal changes;
- structural PMax changes;
- campaign launches/pauses;
- any change that could materially alter learning or attribution.

## Relationship to the current 3-phase plan

WU-015 is **not Phase 4**.

- **Phase 1:** no optimizer-driven execution. Baseline observation only.
- **Phase 2:** optimizer may run in **shadow/recommendation mode** to compare findings against manual WU-004/WU-005/WU-006 analysis.
- **Phase 3:** optimizer may assist with conversion-led optimization only after ADS-WU-002, ADS-WU-007 and Gate 5 requirements pass.
- Automation privileges are earned by evidence category, not by vendor adoption.

## Business-level measurement

The control tower must increasingly evaluate recommendations against the full business funnel:

**Ad spend → Click → Lead → Trial booked → Trial attended → Paid student → 4 classes → 8 classes → Retained student → LTV / profit**

A cheaper lead is not automatically a better lead. A higher-CPL query/campaign may be superior if it produces materially higher paid-student conversion, retention, and LTV.

Dependencies:
- ADS-WU-002 — conversion measurement
- ADS-WU-008 — lead/trial attribution
- ADS-WU-009 — paid-student CAC/ROAS
- ADS-WU-010 — recurring review cadence
- ADS-WU-012 — QA/gate governance

## Proposed pilot

1. Freeze and document the current account baseline/structure.
2. Trial **Optmyzr and Adalysis** against the same account/data where practical.
3. Build a weighted evaluation matrix covering approximately **40–50 real intervention scenarios**.
4. Include scenarios across keyword discovery, search-term mining, negatives, PMax, placements, geo/device/time, budgets, bidding, creatives, landing pages, anomaly detection, and automation.
5. Label each recommendation:
   - useful;
   - actionable;
   - redundant;
   - unsafe/noisy;
   - already available natively;
   - insufficient evidence.
6. Keep Yellow/Red interventions in approval mode during the pilot.
7. Compare measurable outcomes and analyst workflow efficiency.
8. Evaluate TrueClicks as a complementary QA layer only if it adds independent signal without excessive overlap.
9. Produce a final adopt / reject / hybrid-stack decision memo.

## Scenario scoring model

Each scenario should be scored on:

- issue/opportunity detection quality;
- business impact potential;
- recommendation quality;
- explanation quality;
- actionability;
- false-positive/noise rate;
- overlap with Google native;
- human-control quality;
- auditability / rollback;
- time saved;
- integration with business-level conversion/retention data.

Recommended score scale: 1–5 per dimension, with weighted totals documented before the pilot begins.

## Pilot success criteria

The winning solution should demonstrate that it can:

- detect meaningful issues earlier than manual review;
- surface opportunities otherwise likely to be missed;
- reduce wasted spend;
- improve search-query and keyword quality;
- improve exclusion and placement decisions;
- prioritize interventions by likely business impact;
- reduce manual analysis time;
- explain why an intervention is recommended;
- maintain sufficient human control over high-impact changes;
- connect advertising performance increasingly to paid-student quality, retention, revenue, and LTV.

## Exit gate

WU-015 can be marked Done only when:

- the 40–50 scenario evaluation matrix is completed;
- Optmyzr and Adalysis are tested against comparable data/workflows;
- TrueClicks overlap/independence is assessed if tested;
- Green/Yellow/Red controls are proven workable;
- no high-impact action bypasses human approval;
- workflow-time and recommendation-quality evidence is recorded;
- business-level measurement integration limitations are documented;
- a final vendor/stack decision is approved.

## Current status

**Planned — not yet started.**

Recommended start condition:
- WU-002 event measurement is stable enough to avoid evaluating tools against bad conversion data;
- WU-004/WU-005 manual baseline exists so optimizer findings can be compared against an independent manual process;
- WU-006 first post-activation measurement window is available.

A limited **shadow-mode research setup** may begin earlier, but it must not execute account changes.
