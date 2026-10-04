# Google Ads — History Log

> Chronological activity record. This answers: what happened, when, and what changed.

## 2026-10-04

### Project operating structure
- Created Google Ads project OS in Notion.
- Imported consultant meeting transcript from Fireflies.
- Created consultant meeting minutes.
- Created Google Ads Working Units.
- Created GitHub `google-ads/` workspace and spec files.
- Created `START-HERE.md` as current handoff authority.

### Campaign/account setup
- Google Ads account created for Success Path Mentors.
- Google Business Profile remained linked.
- Website selected as primary destination.
- Campaign goal guidance skipped to retain campaign-type control.
- Search campaign selected.
- Campaign named `SPM_ON_Search_Clicks_Learning_Oct2026`.
- Bid focus set to Clicks / Maximize Clicks.
- Max CPC limit left unset.
- Daily budget set to CA$10/day.
- English selected.
- Ontario selected.
- Location targeting changed to presence-only.
- Search Partners disabled.
- Display Network disabled.
- Ad schedule left all days/all day.
- Computers, mobile phones and tablets all left enabled with no bid adjustments.
- Audience/demographic restrictions intentionally left open.

### Keywords
- Initial high-intent Search keywords created.
- Google suggested ~35 additional keywords; recommendations were reviewed rather than accepted as final structure.
- Weak-intent terms were paused.
- Broad terms were converted to Phrase Match where appropriate.
- Broad duplicates were removed/paused when a Phrase Match equivalent existed.

### Negative keywords
- Campaign-level Phrase Match negative keyword baseline created.
- Job/career/tutor-employment/software/platform/degree intent excluded.
- Generic `"free"` negative removed because SPM offers a free trial.
- Specific free-service exclusions used instead, including `"free tutoring"`, `"free online tutoring"`, and `"free tutor"`.

### Tracking / website
- Google Ads base tag ID `AW-18494343690` added to website.
- File changed: `src/components/analytics/analytics-provider.tsx`.
- Google Ads test confirmed tag correctly detected.
- Conversion events are not fully defined yet.

### Deployment fix
- Build failed due to Turbopack CSS-processing internal error.
- Production build changed to `next build --webpack`.
- Added `.nvmrc` with Node 22.13.0.
- Deployment succeeded.

### Assets
- Call asset added using the Canadian business number; pending Google review.
- WhatsApp Message asset added at campaign level; pending Google review.
- Callouts added: `1-to-1 Online Tutoring`, `Grades 1–12`, `Free Trial Lesson`, `Flexible Scheduling`.
- Four sitelinks added: Math Tutoring, English Tutoring, How Tutoring Works, Explore All Subjects.
- Structured snippet added using the Courses header with subject tutoring values.
- No demographic restrictions or device bid adjustments were introduced while configuring assets.

### QA gate identified
- Campaign/ads were still under Google review at the latest captured state.
- Campaign must not be considered fully launched/validated until ad + assets are approved and impressions begin.
- Primary ad final URL/display path still requires explicit QA evidence.
- Conversion-goal screen must be checked to ensure old `Submit lead form` and any `Leads from messages` action are not steering the current Maximize Clicks pilot.

### Current position at end of log
- Campaign is in Search / Clicks / Learning stage.
- Next operational checkpoint: approval/serving gate + final URL and conversion-goal QA.
- Live Search Terms / Auction Insights / paid-student economics are still pending data.
