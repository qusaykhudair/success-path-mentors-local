# Google Ads — START HERE / Current Status

> **Purpose:** This file is the authoritative handoff for the Google Ads setup.  
> Any agent/developer must read this file before changing the Google Ads implementation, website tracking, campaign configuration, or Google Ads documentation.

**Last updated:** 2026-10-06  
**Business:** Success Path Mentors  
**Campaign:** `SPM_ON_Search_Clicks_Learning_Oct2026`  
**Stage:** Learning / Search Pilot  
**Current Working Units:** ADS-WU-003 is Done and serving; ADS-WU-004 is In Progress; ADS-WU-005 initial baseline is Done and monitoring continues; ADS-WU-006 V5 is activated and the edited RSA is Eligible with measured validation in progress; ADS-WU-002 source/event architecture is now under active implementation and QA; ADS-WU-007 remains Blocked.

---

## 1. Consultant-aligned strategy

The consultant discussion established the following operating sequence:

1. Start with a **Search campaign**.
2. Use **Clicks / Maximize Clicks** first to collect learning data.
3. Observe search intent, search terms, CPC, CTR, locations, devices, audience/demographic patterns and Auction Insights.
4. Clean the traffic using **negative keywords** and relevant keyword inclusion/exclusion.
5. Do **not** start with Maximize Conversions / Target CPA / ROAS.
6. Move toward conversion-focused bidding only after sufficient trustworthy data exists.
7. Judge long-term performance using qualified leads, trials, paid students, CAC and profitability — not clicks alone.

Source meeting: Fireflies transcript ID `01M441SG67983NV1AH26C8SRK0`.

---

## 2. Completed checkpoints

### Account / campaign foundation
- [x] Google Ads account created.
- [x] Business: Success Path Mentors.
- [x] Search campaign created.
- [x] Campaign renamed to `SPM_ON_Search_Clicks_Learning_Oct2026`.
- [x] Campaign objective setup skipped so campaign type could be selected manually.
- [x] Campaign type = **Search**.
- [x] Bid focus = **Clicks**.
- [x] Maximum CPC bid limit = **not set**.
- [x] Daily budget = **CA$10/day**.
- [x] Language = **English**.
- [x] Location = **Ontario, Canada**.
- [x] Location option changed to **Presence: People in or regularly in included locations**.
- [x] Search Partners = **OFF**.
- [x] Display Network = **OFF**.
- [x] Ad schedule = **All days / All day**.
- [x] Devices = **Computers + Mobile phones + Tablets**, no bid adjustments.
- [x] Audience restrictions = **none**. Demographics left open for learning.

### Tracking foundation
- [x] Google Ads tag ID: `AW-18494343690`.
- [x] Tag added to website analytics provider.
- [x] Google Ads confirmed: **“Your Google tag was correctly detected on your website.”**
- [x] Tag implementation respects the existing analytics-consent flow.
- [x] Website deployment succeeded after switching production build to Webpack.

Relevant commits on `main`:
- `bac1cf4e97ad8a77a18099df65d58118c230d55c` — add Google Ads tag.
- `9593e981155cd559492147a87b510cbb8420df34` — production build uses Webpack.
- `85841f10ea8ffc36f9bb1a67ee887dbe8346d1ba` — pin Node 22.13.0 via .nvmrc.

### Keywords
- [x] Initial high-intent keywords added.
- [x] Broad-match expansion suggested by Google was reviewed.
- [x] Broad terms were converted to **Phrase Match** where appropriate.
- [x] Obvious poor-intent terms were paused.
- [x] Broad duplicates were removed/paused where a Phrase Match equivalent already existed.
- [x] No new keyword expansion should be accepted automatically from Google at this stage.

Examples of controlled Phrase Match themes:
- `"online tutoring"`
- `"online tutor"`
- `"one on one online tutoring"`
- `"online tutoring canada"`
- `"online tutoring ontario"`
- `"k12 tutoring"`
- `"online tutoring for students"`
- `"online math tutoring"`
- `"online homework help"`
- `"private tutoring"`
- `"online calculus tutor"`
- `"chemistry tutor online"`
- `"physics tutor online"`
- `"english tutor online"`
- `"private online tutor"`

### Negative keywords baseline
- [x] Negative keywords are campaign-level and **Phrase Match**.
- [x] Generic `"free"` was removed because SPM offers a free trial.
- [x] Specific free-intent negatives were used instead.

Current baseline exclusions include:
- `"free tutoring"`
- `"free online tutoring"`
- `"free tutor"`
- `"jobs"`
- `"job"`
- `"career"`
- `"salary"`
- `"become a tutor"`
- `"tutor jobs"`
- `"teacher jobs"`
- `"university degree"`
- `"college degree"`
- `"training for tutors"`
- `"tutoring software"`
- `"tutoring platform"`
- `"tutoring website"`

---

## 3. Important rules — do not change without evidence

- Do **not** switch to Maximize Conversions yet.
- Do **not** add Target CPA or Target ROAS yet.
- Do **not** re-enable Display Network.
- Do **not** re-enable Search Partners during the controlled learning stage.
- Do **not** change Ontario targeting to Presence-or-interest.
- Do **not** narrow age/gender/device/time schedules before data exists.
- Do **not** accept bulk Google keyword recommendations automatically.
- Do **not** use a generic page view as a conversion.
- Do **not** treat the old `Submit lead form` setup as the primary conversion strategy.
- Do **not** increase budget solely because Google recommends a higher daily budget.

---

## 4. Open / pending checkpoints

### ADS-WU-003 — Search Campaign Pilot
- [x] Search campaign pilot is serving.
- [x] Responsive Search Ad is Eligible.
- [x] Visible Call, Sitelink, Callout and Structured Snippet assets are Eligible.
- [x] WhatsApp Message asset is Eligible.
- [x] Phase-1 conversion-goal QA passed: `Submit lead form` and `Leads from messages` are not steering Maximize Clicks.
- [ ] Audit any Google auto-created assets before accepting them.

### ADS-WU-004 — Search Terms & Negative Keywords
- [x] Real Search Terms data exists.
- [x] First live cleanup recorded: `online tutoring business`, `tvo mathify`, and `free math tutoring ontario` excluded.
- [ ] Continue evidence-based Search Terms classification: Keep / Add / Negative / Watch.
- [ ] Promote proven high-intent search terms into controlled keyword targets when justified.
- [ ] Maintain the irrelevant-search-term log.

### ADS-WU-005 — Auction Insights
- [x] First Auction Insights baseline captured.
- [x] Search Impression Share captured.
- [x] Search Lost IS (Budget) captured.
- [x] Search Lost IS (Rank) captured.
- [x] Top/Absolute Top evidence captured.
- [x] Initial competitor baseline documented.
- [ ] Continue monitoring on the established cadence.

### ADS-WU-006 — Ad & Landing Page Quality
- [x] Quality Score diagnostics captured.
- [x] Full landing-page audit completed.
- [x] Ontario contextual paid-search experience implemented.
- [x] Production deployment completed.
- [x] V4 production QA passed.
- [x] V5 Google Ads destination activation completed after explicit approval (user-confirmed).
- [x] Public Ontario destination + registration handoff QA passed.
- [ ] Confirm edited RSA returns to Eligible/serving and the ad table shows the intended Final URL.
- [ ] Collect measured evidence before WU-006 can be marked Done.

Reference: `google-ads/ADS-WU-006-V5-ACTIVATION-GATE.md`.

### ADS-WU-002 — Conversion Measurement Foundation
Google tag is installed. The source event architecture has now been audited and instrumentation gaps are being hardened under `google-ads/ADS-WU-002-CONVERSION-MEASUREMENT-FOUNDATION.md`.

Current measurement design:
- `trial_registration_complete` = strongest website business conversion candidate;
- `whatsapp_cta_clicked` = Secondary intent signal, not a qualified lead;
- `phone_cta_clicked` = Secondary website call-intent signal;
- Trial Attended / Paid Student = offline downstream outcomes for later WU-008/009.

Pending:
- [x] WhatsApp click conversion definition: Secondary intent signal.
- [x] Website phone-click conversion definition: Secondary intent signal.
- [x] Free Trial / registration conversion definition: back-end confirmed `trial_registration_complete`, Secondary during QA and candidate Primary only after validation.
- [ ] Trial Attended definition.
- [ ] Paid Student / offline attribution method.
- [ ] Verify no duplicate conversion events.
- [ ] Keep PII out of analytics parameters.

---

## 5. Current next step

**NEXT ACTION: Continue ADS-WU-006 measured validation while executing ADS-WU-002 conversion measurement foundation in parallel.**

V5 destination activation is complete (user-confirmed) and the public Ontario destination QA passed.

Activated destination:

`https://successpathmentors.net/en?ads_region=ontario`

Immediate next account-side check:
1. Confirm the edited responsive search ad is **Eligible/serving** after Google review.
2. Confirm the ad table/editor still shows the intended Final URL.
3. Do not modify Maximize Clicks, CA$10/day budget, Ontario presence-only targeting, English, Google Search-only network, devices, schedules, audiences, or conversion bidding.
4. Begin post-activation measurement for CTR, Quality Score components, Landing Page Experience, Search Lost IS (rank), Search Lost Top IS (rank), Search Impression Share, Search Terms quality, and WhatsApp inquiry quality.
5. Keep ADS-WU-006 In Progress until measured evidence is reviewed.

Continue ADS-WU-004 Search Terms cleanup and ADS-WU-005 monitoring in parallel.

---

## 6. Learning-stage review cadence

### First 5–7 days
Monitor only; avoid frequent structural changes unless there is a clear policy/error issue.

Track:
- Impressions
- Clicks
- CTR
- Avg CPC
- Search terms
- Device
- Location
- Demographics
- Ad approval/status

### Around 7–14 days
Perform the first controlled optimization:
- Search-term cleanup
- Negative keywords
- Keyword relevance
- Early Auction Insights if volume permits

### Around 30 days
Evaluate whether enough evidence exists to:
- Keep Maximize Clicks
- Move toward Maximize Conversions
- Increase / hold / reduce budget
- Split subject-specific campaigns/ad groups
- Build conversion economics: CPL → Trial → Paid Student CAC

---

## 7. Cross-system sources

### Notion
- Google Ads OS: https://app.notion.com/p/3efbb0fbe9f481bd93aaffbb490b5343
- Consultant Meeting Minutes: https://app.notion.com/p/3efbb0fbe9f48190b1abcb30ed24a3ae
- Working Units database: https://app.notion.com/p/3f168e421c934aeaa8610c8d933f76c4

### Fireflies
- Meeting transcript: https://app.fireflies.ai/view/01M441SG67983NV1AH26C8SRK0

### GitHub
- Deployment repository: `SuccessPathMentors/SuccessPath-Website-development-`
- This file must be treated as the current handoff before work continues.

---

## 8. Working Unit status

| WU | Name | Status | Notes |
|---|---|---|---|
| ADS-WU-001 | Access & Baseline Capture | In Progress | Account created; live baseline awaits data |
| ADS-WU-002 | Conversion Measurement Foundation | In Progress | Google tag installed/detected; business conversion events pending |
| ADS-WU-003 | Search Campaign Pilot | Done | Serving; ad/assets eligible; Phase-1 URL/goal QA recorded |
| ADS-WU-004 | Search Terms & Negative Keywords | In Progress | First live cleanup recorded; continue query-quality learning |
| ADS-WU-005 | Auction Insights Competitive Matrix | Done (initial baseline) | Initial auction/rank/budget baseline recorded; continue monitoring |
| ADS-WU-006 | Ad & Landing Page Quality | In Progress | V5 activated; public destination QA passed; awaiting RSA Eligible/serving confirmation + measured validation |
| ADS-WU-007 | Conversion Bidding Transition | Blocked | Requires trustworthy conversion volume |
| ADS-WU-008 | Lead Quality & Trial Attribution | Not Started | Requires operational attribution design |
| ADS-WU-009 | Paid Student CAC & ROAS | Not Started | Requires trial/paid-student reconciliation |
| ADS-WU-010 | Continuous Control & 30/60/90 Reviews | Ready | Use once data begins accumulating |

---

## 9. Definition of Done for the current stage

The learning-stage foundation is considered complete only when:
- campaign is approved and serving;
- Google Search only remains enforced;
- Ontario presence targeting remains enforced;
- initial assets are configured and approved/eligible;
- first search-term data is captured;
- first negative-keyword optimization is documented;
- first Auction Insights snapshot is available or explicitly noted as insufficient-data;
- conversion-event design is documented before any switch to conversion bidding.

Until then, remain in **Search / Clicks / Learning** mode.


---

## 10. Three-phase execution model

The campaign now follows a formally documented 3-phase model:

1. **Phase 1 — Baseline / Learning (Day 0–5+)**
   - Maximize Clicks
   - Gather clean baseline data
   - No conversion-led bidding

2. **Phase 2 — Search Term Cleanup / Traffic Quality (from around Day 5–7 through ~Day 30)**
   - Search Terms: Keep / Add / Negative / Watch
   - Negative keyword refinement
   - High-intent query promotion
   - Early Auction Insights
   - WhatsApp lead-quality observation

3. **Phase 3 — Maximize Conversions / Qualified Leads (around Day 30 only if evidence gate passes)**
   - Day 30 is a decision gate, not an automatic switch.
   - Requires trustworthy conversion actions, no duplicates, adequate volume, and business attribution.
   - WhatsApp should be a priority conversion/lead-quality channel once properly defined and QA-tested.

Full plan: `google-ads/3-PHASE-EXECUTION-PLAN.md`

**Complete Working Units handoff:** `google-ads/FULL-WORKING-UNITS-HANDOFF.md`

This handoff contains ADS-WU-001 through ADS-WU-014, optimization gates, multilingual controls, WhatsApp priority, Meta historical learning, cross-channel control and the current 3-phase execution model.


---

## 11. First live campaign snapshot — 2026-10-05

Campaign `SPM_ON_Search_Clicks_Learning_Oct2026` is officially live in **Phase 1 — Baseline / Learning**.

Observed campaign-row metrics:
- Status: **Eligible (Learning)**
- Bid strategy: **Learning**
- Impressions: **190**
- Clicks: **9**
- CTR: **4.86%**
- Cost: **CA$17.39**
- Derived Avg CPC: **~CA$1.93**
- Conversions: **0** (expected at this stage; conversion-led optimization is not the current objective)

### Decision
Do not make structural changes from this first snapshot. Continue collecting baseline data and proceed to the first Search Terms quality review once sufficient query data is available.


### First Budget-vs-Rank diagnosis — 2026-10-05

Observed:
- Search Impression Share: **20.11%**
- Search Lost IS (Budget): **0.57%**
- Search Lost IS (Rank): **79.31%**
- Search Lost Top IS (Rank): **85.06%**

Interpretation:
- **Budget is not the current constraint.**
- **Ad Rank is the dominant current visibility constraint.**
- Do **not** raise budget based on this snapshot.
- Because this is still Phase 1 with very low volume, do not make major structural changes yet.
- Continue collecting data and use ADS-WU-006 later to diagnose Expected CTR, Ad Relevance, and Landing Page Experience before deciding whether rank should be addressed through ads, keywords, landing page, or bids.


### ADS-WU-006 landing-page audit — 2026-10-05

Full audit: `google-ads/ADS-WU-006-LANDING-PAGE-AUDIT-2026-10-05.md`

Key findings:
- Current homepage is a strong broad corporate/SEO page, but too broad for an Ontario-only paid-search click.
- Hero lacks explicit Ontario message match even though the ad/display path emphasize Ontario.
- WhatsApp is already strongly represented across hero/header/floating CTA.
- Critical UX issue: the 3-step hero EnrollmentCard collects user data but only routes to `/{locale}/register` on submit; entered state is not transferred.
- Existing Ontario pages exist, but the preferred long-term solution is a controlled Ontario-focused paid landing experience that does not disturb locked SEO/location architecture.
- Do not switch final URL during the initial baseline window without a documented change gate.
