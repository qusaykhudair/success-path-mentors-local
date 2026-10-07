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

| ADS-EV-040 | WU-006 V5 activation gate prepared | PASS — production implementation is live and QA-passed; Google Ads destination activation is explicitly separated from code deployment and requires approval before execution | 2026-10-06 | `google-ads/ADS-WU-006-V5-ACTIVATION-GATE.md` |
| ADS-EV-041 | WU-006 V5 Google Ads destination activation | PASS (user-confirmed) — relevant paid-search Final URL changed to `https://successpathmentors.net/en?ads_region=ontario` after explicit approval; no bid/budget/targeting change authorized | 2026-10-06 | User confirmation + `google-ads/ADS-WU-006-V5-ACTIVATION-GATE.md` |
| ADS-EV-042 | WU-006 post-activation public destination QA | PASS — live Ontario URL returns Ontario-specific hero, canonical `/en`, `noindex, follow`, Canadian WhatsApp destination, and registration route preserves `ads_region=ontario` | 2026-10-06 | Live production fetch of Ontario landing + registration route |
| ADS-EV-043 | WU-006 account-side post-edit status | PASS — edited Responsive Search Ad shows `Eligible` after the Ontario Final URL change. Screenshot also shows 236 impressions, 14 clicks, 5.93% CTR, Avg. CPC CA$1.83, cost CA$25.60 for the mixed Oct 4–6 window; these mixed-window metrics are not used as post-activation impact evidence. | 2026-10-06 | Google Ads Ads table screenshot provided by user |
| ADS-EV-044 | WU-002 source architecture audit | PASS — Google Ads base tag is consent-gated; custom analytics event contract exists; `trial_registration_complete` is back-end-confirmed and dedupe-guarded; attribution and PII allowlists are present. Production GTM/event delivery still requires runtime verification. | 2026-10-06 | Source audit + `google-ads/ADS-WU-002-CONVERSION-MEASUREMENT-FOUNDATION.md` |
| ADS-EV-045 | WU-002 contact-event instrumentation hardening | PASS (implementation) — added `phone_cta_clicked`; instrumented mobile phone CTAs, mobile WhatsApp booking CTA, and final home WhatsApp CTA; source-contract tests updated. Runtime production verification pending. | 2026-10-06 | Branch `google-ads/wu002-conversion-foundation` |
| ADS-EV-046 | WU-002 production GTM container runtime | PASS — live production Network trace shows `https://www.googletagmanager.com/gtm.js?id=GTM-TN4LKVW3`, confirming a GTM container is loaded after consent on the Ontario landing experience. | 2026-10-06 | User-provided Chrome DevTools Network screenshot |
| ADS-EV-047 | WU-015 optimizer/control-tower pilot specification | PASS — controlled pilot scope documented for Optmyzr vs Adalysis, optional TrueClicks QA layer, 40–50 scenario matrix, Green/Yellow/Red governance, and business-funnel measurement dependency. No optimizer-driven account changes authorized. | 2026-10-06 | `google-ads/ADS-WU-015-OPTIMIZATION-CONTROL-TOWER-PILOT.md` |
| ADS-EV-048 | WU-002 WhatsApp event delivery + privacy QA | PASS — Tag Assistant on production GTM `GTM-TN4LKVW3` shows one `whatsapp_cta_clicked` event for the test click. Data Layer contains safe context only: `landing_path=/en`, `ads_region=ontario`, `referrer_host=tagassistant.google.com`, `market=north-america`, `locale=en`, `surface=floating_button`; no parent/student name, email, phone, WhatsApp number, message text, OTP, registration ID or MID visible. | 2026-10-07 | User-provided Tag Assistant screenshot |
| ADS-EV-049 | WU-002 WhatsApp GA4 tag firing | PASS — for the `whatsapp_cta_clicked` event, Tag Assistant shows `GA4 Event - Funnel Events` under Tags Fired with `Succeeded`. The base `GA4 - Google Tag - Production` and dedicated `GA4 Event - trial_registration_complete` correctly do not fire on this WhatsApp event. Event-name/parameter mapping inside the fired GA4 tag remains to be inspected. | 2026-10-07 | User-provided Tag Assistant screenshot |

## Evidence still required
- Google auto-created asset audit before accepting any recommendation/asset automatically.
- WU-006 measured post-activation evidence:
  - CTR
  - Quality Score
  - Expected CTR
  - Ad relevance
  - Landing Page Experience
  - Search Impression Share
  - Search Lost IS (rank)
  - Search Lost Top IS (rank)
  - Search Lost IS (budget)
  - Search Terms quality
  - WhatsApp inquiry quality/relevance where operationally identifiable
- ADS-WU-002 WhatsApp mapping inspection: confirm the fired `GA4 Event - Funnel Events` tag sends event name `whatsapp_cta_clicked` with the expected safe parameters.
- ADS-WU-002 remaining event-delivery verification: confirm `phone_cta_clicked` and `trial_registration_complete` appear exactly once; WhatsApp event delivery/privacy QA passed in ADS-EV-048/049.
- ADS-WU-002 Google Ads conversion actions created as Secondary for QA: trial registration complete, WhatsApp CTA click, website phone click.
- ADS-WU-002 test-conversion evidence: exactly-once firing, no PII, no duplicate conversion path.
- Lead/trial/paid-student attribution QA under ADS-WU-008/009.
- ADS-WU-015: weighted 40–50 scenario matrix, comparable Optmyzr vs Adalysis pilot evidence, automation-control QA, workflow-time comparison, and final vendor/stack decision.

## Superseded pending items
The following earlier pending checkpoints are already satisfied by ADS-EV-019 through ADS-EV-039 and should not be treated as open gates:
- ad approval / serving;
- visible asset eligibility;
- Phase-1 conversion-goal non-steering QA;
- first Search Terms cleanup;
- first Auction Insights snapshot;
- initial Budget-vs-Rank diagnosis;
- initial Quality Score diagnostics;
- WU-006 landing audit;
- WU-006 production deployment/QA.
