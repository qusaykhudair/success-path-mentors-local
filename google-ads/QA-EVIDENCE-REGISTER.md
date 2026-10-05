# Google Ads — QA & Evidence Register

> A Working Unit cannot be marked Done without evidence.

| Evidence ID | Check | Result | Date | Evidence / Reference |
|---|---|---|---|---|
| ADS-EV-001 | Campaign type | PASS — Search | 2026-10-04 | Google Ads campaign settings |
| ADS-EV-002 | Bid strategy | PASS — Maximize Clicks | 2026-10-04 | Google Ads bid settings |
| ADS-EV-003 | Daily budget | PASS — CA$10/day | 2026-10-04 | Google Ads budget settings |
| ADS-EV-004 | Location | PASS — Ontario, Canada | 2026-10-04 | Google Ads location settings |
| ADS-EV-005 | Location method | PASS — Presence only | 2026-10-04 | Google Ads Location options |
| ADS-EV-006 | Search Partners | PASS — OFF | 2026-10-04 | Google Ads Networks |
| ADS-EV-007 | Display Network | PASS — OFF | 2026-10-04 | Google Ads Networks |
| ADS-EV-008 | Schedule | PASS — All days / All day | 2026-10-04 | Google Ads Ad schedule |
| ADS-EV-009 | Devices | PASS — All devices, no bid adjustment | 2026-10-04 | Google Ads Devices |
| ADS-EV-010 | Audience restrictions | PASS — none | 2026-10-04 | Google Ads Audiences |
| ADS-EV-011 | Google Ads base tag | PASS — detected | 2026-10-04 | Google Ads “correctly detected” confirmation |
| ADS-EV-012 | Website deployment | PASS after build fix | 2026-10-04 | Deployment succeeded |
| ADS-EV-013 | Negative keyword baseline | PASS — campaign-level Phrase Match | 2026-10-04 | Google Ads negative keyword table |
| ADS-EV-014 | Call asset configured | PASS — Canadian business number added; review pending | 2026-10-04 | Google Ads Assets screenshot |
| ADS-EV-015 | WhatsApp Message asset configured | PASS — campaign-level WhatsApp asset added; review pending | 2026-10-04 | Google Ads Message asset screenshot |
| ADS-EV-016 | Callouts configured | PASS — 4 campaign-level callouts added; review pending | 2026-10-04 | Google Ads Callouts screenshot |
| ADS-EV-017 | Sitelinks configured | PASS — 4 campaign-level sitelinks added | 2026-10-04 | Google Ads Sitelink setup |
| ADS-EV-018 | Structured snippet configured | PASS — Courses / subject tutoring values added | 2026-10-04 | Google Ads Structured Snippet setup |

| ADS-EV-019 | Conversion goals present | PASS — `Submit lead form` and `Leads from messages` are present at campaign level | 2026-10-05 | Google Ads Goals → Conversions → Summary screenshot |
| ADS-EV-020 | Submit lead form goal optimization | PASS for current Phase 1 — Account default = Off and 0 campaigns use Submit lead forms as a campaign-specific goal. Two underlying conversion actions are marked Primary, but this goal category is not currently selected to steer the campaign. | 2026-10-05 | Google Ads Goal settings screenshot |

| ADS-EV-021 | Leads from messages goal optimization | PASS for current Phase 1 — Account default = Off and 0 campaigns use Leads from messages as a campaign-specific goal. One underlying conversion action is marked Primary, but this goal category is not currently selected to steer the campaign. | 2026-10-05 | Google Ads Goal settings screenshot |

| ADS-EV-022 | Responsive Search Ad status | PASS — ad status shows Eligible after save | 2026-10-05 | Google Ads Ads table screenshot |
| ADS-EV-023 | Responsive Search Ad destination | PASS — visible ad text reflects Ontario online tutoring and final URL was previously QA-verified | 2026-10-05 | Google Ads Ads table + ad editor QA |

| ADS-EV-024 | Asset eligibility — visible set | PASS — Call, 4 Sitelinks, 4 Callouts and Structured Snippet all show Eligible | 2026-10-05 | Google Ads Assets table screenshot |

| ADS-EV-025 | WhatsApp Message asset eligibility | PASS — campaign-level WhatsApp Message asset shows Eligible | 2026-10-05 | Google Ads Message asset screenshot |

| ADS-EV-026 | Campaign serving / Phase 1 live | PASS — campaign status Eligible (Learning) / Bid strategy learning; 190 impressions, 9 clicks, 4.86% CTR, CA$17.39 cost shown at campaign row | 2026-10-05 | Google Ads Campaigns table screenshot |
| ADS-EV-027 | Initial observed Avg CPC | INFO — approximately CA$1.93 from CA$17.39 / 9 clicks | 2026-10-05 | Derived from Google Ads Campaigns table screenshot |

| ADS-EV-028 | First Search Terms cleanup | PASS — `online tutoring business`, `tvo mathify`, and `free math tutoring ontario` show Excluded; `online tutoring` remains Added | 2026-10-05 | Google Ads Search Terms screenshot |

## Evidence still required
- Ad approval / serving evidence
- Asset approval/eligibility evidence after review
- Primary responsive-search-ad final URL + display-path evidence
- Conversion-goal QA: verify `Submit lead form` and `Leads from messages` are not steering bidding
- Google auto-created asset audit
- First Search Terms review
- First Auction Insights snapshot
- Conversion-event QA
- Lead/trial/paid-student attribution QA
