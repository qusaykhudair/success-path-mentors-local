# Phase 5.6 — Evidence-Based Content Patches

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Development repository baseline:** `main @ 73217ec3e388fbf6e9819ad5a521f22f4f6505e9`  
**Issue:** #64  
**Target owner:** `/en/locations/canada/british-columbia`  
**Status:** PATCH READY — development-repo QA in progress

## 1. Purpose

Phase 5.6 converts the highest-priority Phase 5.2 content-depth opportunity into a narrow, evidence-based existing-page patch.

The target is the existing British Columbia owner. No new URL, owner, city-subject route, course route or doorway page is created.

## 2. Promotion evidence

Phase 5.2 promoted the British Columbia owner because:
- the short GSC baseline contained 7 impressions / 0 clicks for the curriculum-oriented opportunity;
- the intended owner was already correct;
- prior content QA documented a factual British Columbia curriculum/assessment depth gap;
- the production dashboard already contained QA-approved drafts `BC-002`, `BC-003` and `BC-004`;
- the patch can improve factual relevance without changing metadata, H1 or canonical ownership.

The current signal remains too small for a CTR verdict. This patch is justified by the independently verified content gap, not by an assumption that 0 clicks proves a title or snippet problem.

## 3. Approved patch records

### BC-002 — curriculum description

Deploy the British Columbia Know–Do–Understand model and explain that Content, Curricular Competencies and Big Ideas work together, while the school/education authority remains the source of official curriculum and assessment decisions.

### BC-003 — curriculum points

Add concise B.C.-specific educational context:
- Big Ideas;
- Curricular Competencies;
- Content;
- Core Competencies plus literacy and numeracy foundations.

### BC-004 — assessment support

Replace vague assessment-only wording with a cautious current example for secondary students:
- Numeracy 10;
- Literacy 10;
- Literacy 12;
- alongside school and course assessments where applicable.

The copy uses `may include` and does not promise scores, eligibility, official preparation status or Ministry affiliation.

## 4. Current official-source verification

The factual patch was rechecked against current B.C. government sources on 2026-09-23.

### B.C. Curriculum overview

`https://curriculum.gov.bc.ca/curriculum/overview`

Current official terminology confirms:
- the Know–Do–Understand model;
- Content = Know;
- Curricular Competencies = Do;
- Big Ideas = Understand;
- Core Competencies;
- literacy and numeracy foundations.

### B.C. graduation assessments

`https://www2.gov.bc.ca/gov/content/education-training/k-12/administration/program-management/assessment/graduation`

Current government graduation materials identify the core Provincial Graduation Assessments as Grade 10 Numeracy, Grade 10 Literacy and Grade 12 Literacy.

## 5. Implementation

A new focused content-patch layer is introduced in:

`src/content/locations/location-content-patches.ts`

It applies only when:
- locale = `en`; and
- location owner id = `british-columbia`.

The patch updates only:
- `curriculumDescription`;
- `curriculumPoints`;
- `assessmentsDescription`;
- official education/assessment references;
- `reviewedAt`.

It does **not** modify:
- SEO title;
- meta description;
- primary/secondary keyword ownership;
- H1 / hero title;
- canonical path;
- routing;
- schema architecture;
- CTA behavior;
- registration/auth;
- pricing;
- contact values;
- Arabic copy;
- French programme routing;
- Germany configuration.

`src/lib/locations/get-location-page.ts` now finalizes localized pages by applying the patch after existing education-resource enrichment. This keeps generated location data immutable and avoids editing the multi-megabyte generated location definition file for a single controlled patch.

## 6. Official resource references

The EN British Columbia owner receives two direct official references:
1. B.C. Curriculum — curriculum overview;
2. B.C. Provincial Graduation Assessments.

Existing resources are preserved and deduplicated by URL.

## 7. Regression coverage

Added:

`tests/phase5-bc-content-patch.test.mjs`

The focused regression asserts that:
- the English `british-columbia` owner receives the approved curriculum content;
- all three graduation assessment names are present;
- official B.C. reference URLs are added;
- existing resources are preserved;
- Arabic British Columbia remains unchanged;
- unrelated owners remain unchanged;
- the location resolver applies the content patch after resource enrichment.

Focused regression result on 2026-09-23: **3/3 PASS**.
A focused TypeScript validation of the affected location-content path also passes.

## 8. Repository scope correction

The active work repository for this SEO program is:

`SuccessPathMentors/SuccessPath-Website-development-`

The earlier assumption that Phase 5.6 also had to be mirrored to `qusaykhudair/success-path-mentors-local` was incorrect for this workstream. That repository is not a release blocker for Phase 5.6.

The Phase 5.6 release decision is therefore based on QA and production verification in the development repository above.

## 9. Phase 5.6 decision

**PATCH READY.**

The content change is intentionally narrow and evidence-based. No speculative metadata, H1, CTA, form or URL change is included.

Release completion requires:
1. focused regression PASS;
2. focused TypeScript PASS;
3. PR merge to `main` in the development repository;
4. production verification of the British Columbia owner;
5. dashboard status update from patch-ready to deployed/verified.
