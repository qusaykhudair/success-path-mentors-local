# Phase 4.9 — Facebook / Organic Distribution & UTM Activation

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Issue:** #48  
**Baseline:** `main @ abe5d0d3b5a493bf1963b69c9397c7fbde17f37d`  
**Status:** **TECHNICAL / DISTRIBUTION PACKAGE PASS — EXTERNAL FACEBOOK ACTIVATION PENDING**

## 1. Objective

Activate the original Phase 4.9 roadmap step by turning the existing Facebook link plan into a measurable organic distribution system that sends each post to the correct canonical SEO owner and carries attributable UTM parameters into the existing analytics stack.

This phase does not alter paid ads and does not create new SEO landing pages.

## 2. Existing technical attribution path — PASS

The production analytics implementation already supports the required UTM flow.

`src/lib/analytics/attribution.ts` captures:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `landing_path`
- external `referrer_host` when available

Attribution is retained in session storage after analytics consent is granted.

`AnalyticsProvider` calls `captureAttribution()` when consent is already granted and again when the visitor grants consent during the session.

`trackEvent()` retrieves the stored attribution and merges it into subsequent tracked event payloads before pushing them to the data layer.

**Decision:** no new runtime attribution code is required for Phase 4.9.

## 3. UTM taxonomy activated

Phase 4.9 standardizes organic Facebook traffic as:

- source: `facebook`
- medium: `organic_social`
- campaign: stable owner/intent family
- content: unique post/creative identifier

The critical Phase 4.9 improvement is making `utm_content` mandatory for published posts. This allows multiple posts that share a campaign family to be compared without creating artificial new campaigns for every creative.

Example:

`https://successpathmentors.net/en/locations/canada/ontario/hamilton?utm_source=facebook&utm_medium=organic_social&utm_campaign=hamilton_tutoring&utm_content=hamilton_parent_support_v1`

## 4. Canonical owner alignment

Organic posts must link to the narrowest valid existing owner instead of defaulting every topic to the Homepage.

Priority owners now covered include:

- Homepage / broad brand
- Math
- MCR3U
- MHF4U
- MDM4U
- Exam Preparation
- Homework Help
- General Science
- French
- Ontario Curriculum
- Milton
- Toronto
- Hamilton

This preserves the Phase 4.2 one-intent/one-owner architecture and avoids city-subject or city-course doorway URLs.

## 5. First-wave distribution package

A six-post first wave is prepared for manual publishing over approximately two weeks:

1. Hamilton local parent support
2. Ontario Math support
3. Homework Help
4. Exam Preparation
5. French support
6. Ontario Curriculum parent guide

Each post now has:

- one canonical destination;
- one campaign family;
- one unique `utm_content` value;
- English copy;
- Arabic copy;
- evidence-safe CTA language.

The ready-to-publish copy and links are maintained in `FACEBOOK-MANUAL-ACTIVATION.md`.

## 6. Why Hamilton is included

Hamilton remains the strongest local watchlist signal in the short available GSC sample, with 8 impressions / 0 clicks recorded in the production dashboard baseline.

Phase 4.9 uses this only as a reason to include Hamilton in the first organic distribution wave. It does **not** justify a new Hamilton subject page, title/H1 rewrite, or physical-location claim.

## 7. Social / brand consistency guardrails

All organic posts must remain consistent with the current public tutoring proposition:

- one-to-one online tutoring;
- Grades 1–12;
- subject/curriculum-aware support;
- free-trial path where appropriate;
- no guaranteed academic outcome;
- no fake physical center or local office;
- no claim that tutors complete homework for students.

Public search currently surfaces third-party references that contain older or inconsistent brand wording, including historical `Mustafa Academy` text. Phase 4.9 therefore treats the official website and approved Facebook Page content as the controlled source for current brand messaging. Third-party mirrors should not be copied back into current social content.

## 8. Facebook Page profile activation

Approved permanent Page Website/About URL:

`https://successpathmentors.net/en?utm_source=facebook&utm_medium=organic_social&utm_campaign=brand_tutoring&utm_content=page_profile_v1`

The Page profile link intentionally points to the broad brand owner rather than a city page.

## 9. External activation state

The repository, owner map, UTM matrix, analytics capture path and ready-to-publish copy are complete.

Actual Facebook Page editing/publishing requires authenticated access to the official Facebook/Meta account. That authenticated external action has not been evidenced in this repository session.

Therefore the phase state is:

**READY / EXTERNAL ACTIVATION PENDING**

Do not mark Phase 4.9 fully closed until all of the following are evidenced:

1. approved Page Website/About UTM link is live;
2. at least one approved organic post with a unique UTM is live;
3. the shared link resolves to the intended canonical page;
4. a consented test visit appears in analytics with the expected Facebook source/medium/campaign/content values.

## 10. Measurement framework

Track the funnel as:

`Facebook organic → landing page → tracked CTA / trial start → registration → paid student`

Primary Phase 4.9 dimensions:

- landing page
- `utm_campaign`
- `utm_content`
- sessions/users
- tracked CTA clicks
- trial starts
- registration events

Facebook reactions/comments can be reviewed as content feedback, but they are not the primary business KPI.

## 11. Phase 4.10 handoff condition

Phase 4.10 Final QA / Deploy / Measure should begin after Phase 4.9 external activation evidence is available.

At that point Phase 4.10 must validate:

- canonical destination resolution;
- analytics UTM attribution;
- no routing/schema/canonical regression;
- published social copy accuracy;
- final roadmap status for 4.1–4.10.

## 12. Current decision

**Phase 4.9 repository + analytics readiness: PASS.**  
**Phase 4.9 external Facebook activation: PENDING.**

The correct next action is not additional code or another landing page. It is authenticated Facebook Page activation using the prepared links/copy, followed by analytics evidence.