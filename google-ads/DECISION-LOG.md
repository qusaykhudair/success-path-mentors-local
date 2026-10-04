# Google Ads — Decision Log

> Permanent record of meaningful decisions. Do not rewrite history. Add a new entry when a decision changes.

## Decision format
- **ID**
- **Date**
- **Decision**
- **Reason**
- **Evidence / Source**
- **Impact**
- **Revisit trigger**
- **Status**

---

## DEC-ADS-001 — Start with Search, not Performance Max
**Date:** 2026-10-04  
**Decision:** The first campaign is a controlled Google Search campaign.  
**Reason:** Consultant-directed learning phase requires visibility into search intent, search terms, CPC, CTR, negatives and Auction Insights.  
**Evidence / Source:** Fireflies consultant meeting 2026-10-04; campaign setup discussion.  
**Impact:** No Performance Max or Video-first launch.  
**Revisit trigger:** After sufficient Search and conversion-quality data exists.  
**Status:** Active.

## DEC-ADS-002 — Use Maximize Clicks during the learning stage
**Date:** 2026-10-04  
**Decision:** Bid focus is Clicks / Maximize Clicks. No Max CPC cap initially.  
**Reason:** New account/campaign needs learning data before conversion-led bidding.  
**Evidence / Source:** Consultant discussion explicitly referenced Maximize Clicks first and Maximize Conversions later.  
**Impact:** Maximize Conversions, Target CPA and Target ROAS are deferred.  
**Revisit trigger:** Trustworthy conversion volume and first 30-day review.  
**Status:** Active.

## DEC-ADS-003 — Controlled pilot budget
**Date:** 2026-10-04  
**Decision:** Average daily budget = CA$10/day.  
**Reason:** Low-cost learning pilot before scaling.  
**Evidence / Source:** Campaign setup decision.  
**Impact:** Do not raise budget solely because of Google recommendations.  
**Revisit trigger:** Evidence of profitable demand and/or Lost IS (Budget) with acceptable economics.  
**Status:** Active.

## DEC-ADS-004 — Ontario presence-only targeting
**Date:** 2026-10-04  
**Decision:** Target Ontario, Canada using “Presence: People in or regularly in included locations.”  
**Reason:** Avoid contaminating learning data with people outside Ontario who merely show interest in the region.  
**Impact:** Presence-or-interest remains off.  
**Revisit trigger:** Geographic expansion decision based on campaign evidence.  
**Status:** Active.

## DEC-ADS-005 — Google Search only during the pilot
**Date:** 2026-10-04  
**Decision:** Search Partners OFF; Display Network OFF.  
**Reason:** Keep learning-stage traffic attributable and search-intent focused.  
**Impact:** Cleaner Search Terms, CPC and CTR analysis.  
**Revisit trigger:** Separate evidence-based experiment approved later.  
**Status:** Active.

## DEC-ADS-006 — Use controlled Phrase Match instead of broad expansion
**Date:** 2026-10-04  
**Decision:** Broad keyword recommendations are not accepted automatically. Relevant terms were moved to Phrase Match; obvious weak-intent terms paused.  
**Reason:** Preserve control while learning actual search intent.  
**Impact:** Expansion will be evidence-led through Search Terms.  
**Revisit trigger:** Proven query volume and quality.  
**Status:** Active.

## DEC-ADS-007 — Negative keyword baseline at campaign level
**Date:** 2026-10-04  
**Decision:** Campaign-level negative keywords use Phrase Match. Generic “free” was not retained; specific free-service intent terms are excluded instead.  
**Reason:** SPM offers a free trial, so blocking all searches containing “free” could suppress relevant demand.  
**Impact:** Excludes job/career/software/platform/free-tutoring intent while preserving free-trial intent.  
**Revisit trigger:** Live Search Terms reviews.  
**Status:** Active.

## DEC-ADS-008 — Google Ads tag installed through existing consent architecture
**Date:** 2026-10-04  
**Decision:** Google Ads tag `AW-18494343690` was integrated through the existing AnalyticsProvider and consent flow.  
**Reason:** Centralized implementation, avoids duplicate page-level scripts, respects existing privacy controls.  
**Evidence:** Google Ads confirmed the tag was correctly detected.  
**Impact:** Conversion-event design can proceed without reinstalling the base tag.  
**Revisit trigger:** Only if consent architecture or tag strategy changes.  
**Status:** Active.

## DEC-ADS-009 — Production build uses Webpack
**Date:** 2026-10-04  
**Decision:** Production build changed to `next build --webpack`; Node pinned via `.nvmrc` to 22.13.0.  
**Reason:** Deployment failed with a Turbopack internal CSS-processing error.  
**Evidence:** Deployment succeeded after change.  
**Impact:** Do not re-enable Turbopack production builds without testing.  
**Revisit trigger:** Verified Next/Turbopack stability upgrade with successful CI/deploy benchmark.  
**Status:** Active.
