# Google Ads — Working Units Status

> Execution board for specification-driven work.

| WU | Name | Status | Current checkpoint | Exit condition |
|---|---|---|---|---|
| ADS-WU-001 | Access & Baseline Capture | In Progress | Account/campaign created; baseline awaits live data | Dated baseline metrics captured |
| ADS-WU-002 | Conversion Measurement Foundation | In Progress | Base tag installed and detected | Business conversion events defined + QA evidence |
| ADS-WU-003 | Search Campaign Pilot | In Progress | Core configuration + initial assets complete; Google review pending | Ads/assets approved and serving + final URL/goal QA complete |
| ADS-WU-004 | Search Terms & Negative Keywords | In Progress | Baseline negatives complete | First live Search Terms optimization recorded |
| ADS-WU-005 | Auction Insights Competitive Matrix | Not Started | Waiting for auction volume | First competitive matrix captured |
| ADS-WU-006 | Ad & Landing Page Quality | Not Started | Waiting for traffic | Quality diagnostics and landing review complete |
| ADS-WU-007 | Conversion Bidding Transition | Blocked | No trustworthy conversion volume yet | Evidence supports conversion-led bidding |
| ADS-WU-008 | Lead Quality & Trial Attribution | Not Started | Attribution design pending | Campaign → lead → trial reconciliation works |
| ADS-WU-009 | Paid Student CAC & ROAS | Not Started | Requires paid-student reconciliation | Reproducible CAC/ROAS reporting |
| ADS-WU-010 | Continuous Control & 30/60/90 Reviews | Ready | Framework ready | Recurring review cadence active |
| ADS-WU-011 | Multilingual Search Expansion | Not Started | English pilot remains isolated | Language-specific AR/FR and separate DE market launch pass QA |
| ADS-WU-012 | Optimization Learning, QA & Gate Control | Active | Governing current pilot | Gate status + numeric QA score documented for meaningful reviews |
| ADS-WU-013 | Meta Ads Historical Learning & Benchmark Transfer | Not Started | Spec exists | Historical Meta evidence converted into labeled hypotheses |
| ADS-WU-014 | Cross-Channel Learning Control | Not Started | Requires Google + Meta evidence | Controlled cross-channel tests and channel-specific CAC comparison |

## Current execution order
1. Finish ADS-WU-003 approval/serving gate: ad + assets approved, primary final URL checked, and no conversion goal accidentally controls bidding.
2. Complete ADS-WU-002 business conversion definitions.
3. Wait for live Search Terms, then execute ADS-WU-004.
4. Capture first Auction Insights snapshot under ADS-WU-005.
5. Only after data quality is established, consider ADS-WU-006/007.
6. Build offline/business attribution under ADS-WU-008/009.
7. Run recurring reviews under ADS-WU-010.

## Current next action
**Google Ads → approval/serving + conversion-goal QA**

Verify:
- Responsive Search Ad = Approved/Eligible and serving
- Call asset = approved/eligible
- WhatsApp Message asset = approved/eligible
- Callouts / Sitelinks / Structured Snippet = approved/eligible
- Primary final URL + display path are correct
- Old `Submit lead form` and any `Leads from messages` action are not steering the Maximize Clicks pilot
- No Google auto-created asset is accepted blindly


## Full handoff
See `google-ads/FULL-WORKING-UNITS-HANDOFF.md` for ADS-WU-001 through ADS-WU-014, phase mapping, optimization rules, QA gates, multilingual controls and WhatsApp priority.
