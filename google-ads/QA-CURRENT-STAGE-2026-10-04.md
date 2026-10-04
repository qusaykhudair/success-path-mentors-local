# Google Ads — Current Stage QA — 2026-10-04

## Scope
Strict QA of the current Google Ads Search / Clicks / Learning pilot against:
- Consultant meeting direction
- Google Ads Working Units
- Current GitHub control files
- Website tracking implementation
- Campaign setup evidence captured during setup

## Overall result
**CONDITIONAL PASS — READY TO RUN, NOT YET READY TO DECLARE FULLY VALIDATED.**

The campaign configuration is aligned with the consultant's learning-stage strategy and is safe to publish/run. Final sign-off is blocked only by Google approval/serving evidence and a small number of post-publish QA checks.

## Passed
- Campaign type = Search
- Bid strategy = Maximize Clicks
- No Max CPC cap
- Budget = CA$10/day
- Language = English
- Geography = Ontario, Canada
- Location method = Presence only
- Search Partners = OFF
- Display Network = OFF
- Schedule = All days / all day
- Devices = all, no bid adjustments
- Audience/demographic restrictions = none
- Controlled Phrase Match keyword structure
- Baseline campaign-level Phrase Match negatives
- Google Ads base tag = AW-18494343690
- Base tag detected by Google
- Tracking integrated through consent-aware AnalyticsProvider
- Deployment successful using Webpack production build
- Call asset configured
- WhatsApp Message asset configured
- Callouts configured
- Sitelinks configured
- Structured snippet configured

## Critical launch checks still open
1. **Ad approval / serving**
   - Responsive Search Ad must show Approved/Eligible.
   - Campaign must record real impressions before WU-003 is considered operationally live.

2. **Asset approval**
   - Call asset
   - WhatsApp Message asset
   - Callouts
   - Sitelinks
   - Structured snippet

3. **Primary ad destination**
   - Explicitly verify final URL and display path on the main Responsive Search Ad.

4. **Conversion-goal contamination check**
   - Open Google Ads → Goals → Conversions.
   - Verify the old `Submit lead form` action is not being used to steer this learning campaign.
   - Verify any `Leads from messages` action created by the WhatsApp asset is not set as a primary campaign optimization goal.
   - Keep the campaign on Maximize Clicks until the conversion-data gate is satisfied.

5. **Auto-created assets**
   - Review any Google-created assets before accepting them.

## Next data gates
### 5–7 day observation window
Do not make structural changes unless there is a policy/error issue.
Observe:
- Impressions
- Clicks
- CTR
- Avg CPC
- Search Terms
- Devices
- Locations
- Demographics
- Ad/asset status

### 7–14 day optimization gate
- Search Terms classification: Keep / Add / Negative / Watch
- Add evidence-based negatives
- Promote proven high-intent queries
- Capture Auction Insights if volume is sufficient

### 30 day gate
Evaluate:
- Continue Maximize Clicks vs transition toward conversions
- Budget hold/increase/reduce
- Subject-specific campaign/ad-group split
- CPL → Trial → Paid Student CAC economics

## Working Unit status
- ADS-WU-001 — In Progress: live baseline awaits data
- ADS-WU-002 — In Progress: base tag passes; business conversion architecture pending
- ADS-WU-003 — In Progress: configuration/assets pass; approval/serving gate pending
- ADS-WU-004 — In Progress: baseline negatives pass; live Search Terms pending
- ADS-WU-005 — Not Started: awaiting Auction Insights volume
- ADS-WU-006 — Not Started: waiting for traffic
- ADS-WU-007 — Blocked: insufficient trustworthy conversion data
- ADS-WU-008 — Not Started
- ADS-WU-009 — Not Started
- ADS-WU-010 — Ready

## Repository structure note
The `main` branch contains the current authoritative control center:
- START-HERE.md
- DECISION-LOG.md
- HISTORY-LOG.md
- WORKING-UNITS-STATUS.md
- RISK-ISSUE-LOG.md
- QA-EVIDENCE-REGISTER.md
- SOURCE-REGISTER.md

A separate `google-ads/spec-kit` branch contains an earlier/expanded specification set. Do not treat that branch as the live operational state unless it is intentionally reconciled with `main`.

## Strict sign-off rule
Do not label the current stage **100% complete** until:
- Google approval is complete,
- the campaign is serving,
- final URL/display path are checked,
- conversion-goal contamination is ruled out,
- first live Search Terms review is recorded.
