# Google Ads — 3-Phase Execution Plan

## Objective
Run the Google Ads account in a controlled sequence aligned to the 2026-10-04 consultant meeting.

## Phase 1 — Baseline / Learning
**Timing:** Day 0–5 (minimum observation window; may extend if volume is too low)

### Campaign mode
- Campaign: `SPM_ON_Search_Clicks_Learning_Oct2026`
- Type: Search
- Bid strategy: Maximize Clicks
- Budget: CA$10/day
- Geography: Ontario, Canada
- Location method: Presence only
- Language: English
- Networks: Google Search only
- Devices: all
- Schedule: all day / all days
- Match control: primarily Phrase Match + negative keyword baseline

### Goal
Collect clean baseline data before conversion-led optimization.

### Observe
- Impressions
- Clicks
- CTR
- Avg CPC
- Search Terms
- Device
- Location
- Demographics
- Auction Insights when available
- Ad / asset approvals

### WhatsApp priority
- WhatsApp Message Asset remains enabled if eligible.
- Website WhatsApp CTA remains active.
- WhatsApp engagement should be observed as a business-quality signal.
- Do not allow a `Leads from messages` conversion action to change bidding away from Maximize Clicks during Phase 1.

### Exit gate
- Campaign approved and serving.
- At least an initial body of live search-term data exists.
- No major policy or tracking error.
- Baseline metrics documented.

---

## Phase 2 — Search Term Cleanup / Traffic Quality
**Timing:** Start around Day 5–7, then continue through approximately Day 30.

### Goal
Improve traffic relevance without changing the campaign prematurely into conversion-led bidding.

### Actions
- Review Search Terms.
- Classify each query: Keep / Add / Negative / Watch.
- Add evidence-based negative keywords.
- Promote proven high-intent queries into controlled keyword targets.
- Review early Auction Insights if volume permits.
- Compare traffic by device, location, demographic signals and time.
- Monitor WhatsApp-originated inquiry quality where operationally identifiable.

### WhatsApp priority
- Track whether WhatsApp inquiries are relevant, trial-ready, or low quality.
- Record WhatsApp as part of lead-quality learning, not only as an Ads conversion count.
- Preserve privacy; do not pass parent/student PII in analytics parameters.

### Exit gate
- Search-term hygiene established.
- Irrelevant-spend trend understood.
- High-intent query themes identified.
- Enough evidence exists to design trustworthy conversion actions and attribution.

---

## Phase 3 — Maximize Conversions / Qualified Leads
**Timing:** Approximately Day 30, only if the evidence gate is met.

### Important rule
Day 30 is a **decision gate**, not an automatic switch date.

### Preconditions
- Trustworthy conversion actions are defined and QA-tested.
- No duplicate conversion events.
- Primary conversions reflect meaningful business actions.
- Lead quality is understood.
- Enough conversion volume exists for conversion-led bidding to learn.
- WhatsApp / phone / registration attribution has a workable business process.

### Candidate primary conversion hierarchy
1. Qualified WhatsApp / message lead
2. Qualified phone inquiry
3. Free-trial registration
4. Trial attended
5. Paid student / offline conversion

The exact primary action must be chosen only after QA and sufficient data.

### Campaign mode
If the preconditions pass:
- Transition from Maximize Clicks to Maximize Conversions.
- Do not add Target CPA until sufficient stable conversion data exists.
- Do not move to ROAS until revenue attribution is reliable.

### Business KPIs
- Qualified lead rate
- CPL
- Trial booking rate
- Trial attendance rate
- Paid student conversion rate
- Paid student CAC
- Revenue / ROAS

---


## Parallel capability pilot — ADS-WU-015 Optimization Control Tower

ADS-WU-015 is a supporting capability pilot, **not a fourth phase**.

Purpose:
- compare Optmyzr and Adalysis against the same Google Ads account/data where practical;
- evaluate approximately 40–50 real optimization/intervention scenarios;
- assess whether an independent optimizer detects useful issues/opportunities earlier or more efficiently than manual/native review;
- evaluate TrueClicks only as a potential complementary QA layer.

Phase relationship:
- **Phase 1:** observation only; no optimizer-driven account changes.
- **Phase 2:** shadow/recommendation mode may begin once measurement quality is sufficient; compare optimizer recommendations with manual Search Terms, Auction Insights, quality, placement, geo/device/time and landing-page analysis.
- **Phase 3:** optimizer assistance may expand only after conversion-readiness gates pass; conversion-goal and bidding changes remain Red/human-approval actions.

Governance:
- Green = deterministic hygiene/monitoring with documented rollback/audit trail.
- Yellow = recommendation + human approval.
- Red = explicit human approval mandatory.

Detailed spec: `google-ads/ADS-WU-015-OPTIMIZATION-CONTROL-TOWER-PILOT.md`.

## Control principle
**Phase 1 → Learn**
**Phase 2 → Clean and understand**
**Phase 3 → Optimize to qualified conversions**

No phase transition is automatic. Each transition requires evidence and QA sign-off.
