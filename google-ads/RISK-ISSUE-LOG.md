# Google Ads — Risk & Issue Log

| ID | Risk / Issue | Severity | Status | Mitigation / Next action |
|---|---|---:|---|---|
| ADS-RISK-001 | Google auto-recommendations could broaden traffic too early | High | Active | Do not auto-apply keyword/network/bidding recommendations |
| ADS-RISK-002 | Conversion bidding before trustworthy conversion volume | High | Controlled | Keep Maximize Clicks until evidence gate |
| ADS-RISK-003 | Old Submit Lead Form conversion may be misleading | High | Active | Do not optimize to it until conversion architecture is reviewed |
| ADS-RISK-004 | Generic “free” negative could block free-trial intent | Medium | Resolved | Replaced with specific free-service negatives |
| ADS-RISK-005 | Search Partners / Display could contaminate learning data | High | Resolved | Both disabled |
| ADS-RISK-006 | Presence-or-interest could include users outside Ontario | High | Resolved | Presence-only targeting enabled |
| ADS-RISK-007 | Demographic restrictions too early could bias learning | Medium | Controlled | Age/gender/income left unrestricted |
| ADS-RISK-008 | Duplicate Google tags / duplicate conversions | High | Active | Base tag installed centrally; conversion QA still required |
| ADS-RISK-009 | Paid-student attribution unavailable from Ads alone | High | Active | Build privacy-safe business attribution bridge |
| ADS-RISK-010 | Turbopack production build instability | High | Mitigated | Webpack build + Node 22.13.0 pin; deployment successful |
| ADS-RISK-011 | Budget could be raised based on Google recommendation rather than economics | Medium | Controlled | Scale only after Lost IS + CAC/ROAS evidence |
