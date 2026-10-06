# Google Ads — Working Units Status

> Execution board for specification-driven work.

| WU | Name | Status | Current checkpoint | Exit condition |
|---|---|---|---|---|
| ADS-WU-001 | Access & Baseline Capture | In Progress | First live snapshot captured; continue baseline collection through Phase 1 | Dated multi-day baseline metrics captured |
| ADS-WU-002 | Conversion Measurement Foundation | In Progress | Event architecture audited; contact-event instrumentation hardened; production GTM/event delivery + Google Ads conversion-action QA pending | Business conversion events defined + QA evidence |
| ADS-WU-003 | Search Campaign Pilot | Done | Ad/assets eligible, final URL and conversion-goal QA passed, campaign serving live traffic | Complete |
| ADS-WU-004 | Search Terms & Negative Keywords | In Progress | Baseline negatives complete | First live Search Terms optimization recorded |
| ADS-WU-005 | Auction Insights Competitive Matrix | Done (initial baseline) | First auction snapshot + Budget-vs-Rank diagnosis captured | Complete for initial baseline; continue weekly monitoring |
| ADS-WU-006 | Ad & Landing Page Quality | In Progress | V5 activated; public destination QA passed; edited RSA confirmed Eligible; measured validation now in progress | Post-activation quality/rank/engagement evidence reviewed and corrective action measured |
| ADS-WU-007 | Conversion Bidding Transition | Blocked | No trustworthy conversion volume yet | Evidence supports conversion-led bidding |
| ADS-WU-008 | Lead Quality & Trial Attribution | Not Started | Attribution design pending | Campaign → lead → trial reconciliation works |
| ADS-WU-009 | Paid Student CAC & ROAS | Not Started | Requires paid-student reconciliation | Reproducible CAC/ROAS reporting |
| ADS-WU-010 | Continuous Control & 30/60/90 Reviews | Ready | Framework ready | Recurring review cadence active |
| ADS-WU-011 | Multilingual Search Expansion | Not Started | English pilot remains isolated | Language-specific AR/FR and separate DE market launch pass QA |
| ADS-WU-012 | Optimization Learning, QA & Gate Control | Active | Governing current pilot | Gate status + numeric QA score documented for meaningful reviews |
| ADS-WU-013 | Meta Ads Historical Learning & Benchmark Transfer | Not Started | Spec exists | Historical Meta evidence converted into labeled hypotheses |
| ADS-WU-014 | Cross-Channel Learning Control | Not Started | Requires Google + Meta evidence | Controlled cross-channel tests and channel-specific CAC comparison |

## Current execution order
1. Continue ADS-WU-004 Search Terms cleanup from live query evidence.
2. ADS-WU-005 initial Auction Insights baseline is complete; continue monitoring weekly.
3. ADS-WU-006 V5 activation is complete; public destination QA passed and the edited RSA is confirmed Eligible.
4. Collect measured WU-006 evidence for CTR, Quality Score components, Landing Page Experience, Search Lost IS (rank), Search Lost Top IS (rank), and WhatsApp inquiry quality.
5. Execute ADS-WU-002 in parallel: verify production GTM/event delivery, then create/QA Secondary Google Ads actions for trial registration complete, WhatsApp CTA click and website phone click without changing Maximize Clicks.
6. Keep ADS-WU-007 blocked until the conversion-readiness evidence gate passes.
7. Build offline/business attribution under ADS-WU-008/009 and run recurring reviews under ADS-WU-010.

## Current next action
**Parallel controlled work: ADS-WU-006 measured validation + ADS-WU-002 conversion measurement foundation**

Current verified state:
- Responsive Search Ad and visible assets are Eligible and serving.
- Conversion-goal QA passed for Phase 1: `Submit lead form` and `Leads from messages` are not steering the Maximize Clicks pilot.
- First Search Terms cleanup is already recorded.
- First Auction Insights / Budget-vs-Rank baseline is already recorded.
- Ontario contextual landing is deployed and V4 production QA passed.

Next controlled action:
- Do **not** change bidding, budget, targeting, networks, devices, schedules, audiences, or conversion strategy.
- Collect measured post-activation WU-006 evidence from a clean post-activation window.

Reference: `google-ads/ADS-WU-006-V5-ACTIVATION-GATE.md`.

WU-002 reference: `google-ads/ADS-WU-002-CONVERSION-MEASUREMENT-FOUNDATION.md`.

Remaining control:
- Audit Google auto-created assets before accepting any recommendation or asset automatically.


## Full handoff
See `google-ads/FULL-WORKING-UNITS-HANDOFF.md` for ADS-WU-001 through ADS-WU-014, phase mapping, optimization rules, QA gates, multilingual controls and WhatsApp priority.
