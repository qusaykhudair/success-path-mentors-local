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

| ADS-EV-029 | First Auction Insights snapshot | PASS — data available for SPM and 4 competing domains. SPM Impression Share 19.89%, Top of page rate 71.43%, Abs. top of page rate 22.86%. Competitors: superprof.ca 32.95% IS; preply.com 30.11%; varsitytutors.com 10.80%; kumon.com <10%. | 2026-10-05 | Google Ads Auction insights screenshot |
| ADS-EV-030 | Auction position interpretation | INFO — superprof.ca and preply.com currently have higher Impression Share than SPM; varsitytutors.com shows 100% position-above rate when overlapping, based on limited early volume | 2026-10-05 | Google Ads Auction insights screenshot |

| ADS-EV-031 | Competitive baseline — impression share/budget/top-rank loss | INFO — 205 impressions, 10 clicks, 4.88% CTR, CA$19.34 cost, Search Impr. Share 20.11%, Search Lost IS (budget) 0.57%, Search Lost Top IS (rank) 85.06% | 2026-10-05 | Google Ads Campaigns table screenshot |
| ADS-EV-032 | Competitive baseline interpretation | INFO — budget loss is currently minimal; the visible 85.06% metric is **Search Lost Top IS (rank)**, not overall Search Lost IS (rank), so overall rank loss still needs to be added before a full Budget-vs-Rank conclusion | 2026-10-05 | Google Ads Campaigns table screenshot |

| ADS-EV-033 | Competitive baseline — overall rank loss | INFO — Search Impr. Share 20.11%, Search Lost IS (budget) 0.57%, Search Lost IS (rank) 79.31%, Search Lost Top IS (rank) 85.06%; 206 impressions, 10 clicks, 4.85% CTR, CA$19.34 cost | 2026-10-05 | Google Ads Campaigns table screenshot |
| ADS-EV-034 | Budget vs Rank diagnosis | PASS — early evidence shows Rank is the dominant visibility constraint; budget loss is minimal. No budget increase justified from this snapshot. | 2026-10-05 | Derived from Google Ads competitive metrics |

| ADS-EV-035 | First Quality Score diagnostics | INFO — `"online tutoring"` and broad `online tutoring` show Quality Score 3/10; Expected CTR = Below average; Ad relevance = Above average; Landing page experience = Below average. Most other keywords still show insufficient data (—). | 2026-10-05 | Google Ads Keywords quality columns screenshot |
| ADS-EV-036 | Rank root-cause hypothesis | INFO — early diagnostics point more strongly to Expected CTR + Landing Page Experience than ad relevance. This aligns with high Search Lost IS (rank), but volume is still too low for major structural changes. | 2026-10-05 | Derived from Google Ads Quality Score diagnostics |

| ADS-EV-037 | Full landing-page audit | PASS — current homepage audited against Ontario Search intent and WU-006 diagnostics; internal diagnostic 71/100; primary gap is Ontario message match + duplicate/disposable hero intake flow | 2026-10-05 | `ADS-WU-006-LANDING-PAGE-AUDIT-2026-10-05.md` |
| ADS-EV-038 | Hero intake continuity | ISSUE — EnrollmentCard collects contact/student data but final submit only routes to `/{locale}/register`; collected state is not transferred to the registration page | 2026-10-05 | Website source QA |
| ADS-EV-039 | WU-006 V4 Production QA | PASS — Ready for V5 Activation | 2026-10-06 | `google-ads/ADS-WU-006-V4-PRODUCTION-QA.md` |

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
