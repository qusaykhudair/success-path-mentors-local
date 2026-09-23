# Phase 6.6 — E-E-A-T & Trust Layer

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Baseline:** `main @ 38227dc6d265b6f6b970f628d2ce399506a39004`  
**Issue:** #83  
**Status:** PASS — VERIFIED TRUST LAYER PUBLISHED / UNSUPPORTED CLAIMS BLOCKED

## 1. Purpose

Phase 6.6 strengthens the website's trust and entity transparency using verifiable first-party information already present in the repository.

This phase does **not** treat E-E-A-T as a Google score and does not claim that a trust section by itself causes ranking gains.

Operating principle:

> Surface facts that can be verified from first-party sources, connect families to transparent service and policy information, and block trust claims that do not yet have auditable provenance.

## 2. Guardrails

The following claims remain blocked unless first-party evidence is established:

- named tutor degrees, certifications or licenses;
- years-of-experience claims for named tutors;
- background-check or vetting claims;
- safeguarding certifications;
- star ratings or review counts;
- `Review` or `AggregateRating` schema;
- student/family counts;
- pass rates, grade gains, exam gains, or guaranteed results;
- named author/reviewer `Person` schema without a verified public identity source;
- guessed social-profile `sameAs` URLs.

No new route, city page, subject owner, service owner, curriculum owner, course owner, canonical, redirect, or indexation rule is introduced by Phase 6.6.

## 3. Trust-surface audit

| Trust surface | Evidence state | Schema state | 6.6 decision |
| --- | --- | --- | --- |
| Business / legal identity | VERIFIED IN REPO | `EducationalOrganization` already active | PATCH |
| About / service transparency | VERIFIED IN REPO | `AboutPage` already active | PATCH |
| Tutor matching process | VERIFIED IN REPO | Existing page/service semantics sufficient | PRESERVE |
| How tutoring works | VERIFIED IN REPO | `WebPage` + process/FAQ data already active | PRESERVE / LINK |
| Contactability | VERIFIED IN REPO | `ContactPage` + `ContactPoint` already active | PRESERVE / LINK |
| Terms / cancellation / privacy / data deletion | VERIFIED IN REPO | Existing legal pages sufficient | LINK |
| Testimonials / reviews | SOURCE REQUIRED for provenance | Review/rating schema NOT ELIGIBLE | HOLD |
| Named tutor qualifications | SOURCE REQUIRED | Person/credential expansion NOT ELIGIBLE | HOLD |
| Background checks | UNSUPPORTED in current audit | NOT ELIGIBLE | BLOCK CLAIM |
| Outcome guarantees | Existing pages explicitly reject guarantees | No outcome schema | PRESERVE LIMITATION |
| Named authors / reviewers | SOURCE REQUIRED | Person/author schema NOT ELIGIBLE | HOLD |
| Social `sameAs` | Official URLs not configured | `sameAs` NOT ELIGIBLE until verified | HOLD |

## 4. Verified business identity

`src/config/markets.ts` is the first-party market configuration used by the site-wide organization data.

For North America it defines:

`Commenda Inc. operating as Success Path Mentors`

The site-wide locale layout already publishes one `EducationalOrganization` entity at:

`https://successpathmentors.net/#organization`

with the configured `legalName`, service area, subject knowledge and contact point.

### 4.1 Problem found

Two trust inconsistencies were identified:

1. the About hero source contained the tautological phrase `Success Path Mentors, operated by Success Path Mentors`;
2. `src/config/legal.ts` could fall back to the public brand name even when the market registry already had a legal organization name.

### 4.2 Patch

Phase 6.6 now:

- removes the tautological operating statement from the live About hero;
- reads the public legal organization displayed on About from the same market configuration used by organization data;
- derives the legal-entity fallback for legal documents from the configured market legal name before falling back to the brand.

No second Organization entity is created.

## 5. Visible trust and transparency layer

A new localized content source was added:

`src/content/pages/trust-transparency.ts`

The About page now includes a visible `#trust-transparency` section containing:

- the configured North America legal organization name;
- a pathway to **How Tutoring Works**;
- a pathway to the official **Contact** surface;
- a pathway to **Terms and Conditions**;
- a pathway to the **Privacy Policy**.

The new copy is intentionally process-based and evidence-based. It does not claim external accreditation, named tutor credentials, background checks, ratings, review counts, performance outcomes or guaranteed results.

## 6. Tutor matching and teaching-process evidence

The existing Tutor Matching content documents matching according to factors such as grade, subject, curriculum context, language, availability, communication fit, relevant teaching experience, student need and family feedback after the first lesson.

It also explicitly states that Success Path Mentors does not guarantee a specific tutor, exact schedule, grade improvement, examination score or academic result.

Decision:

- process-level matching claims: **SAFE TO SURFACE**;
- specific tutor credentials: **SOURCE REQUIRED**;
- outcome guarantees: **BLOCKED**.

The existing How-It-Works page separately documents student intake, learning need, tutor matching, lesson confirmation, first lesson, feedback and adjustment. The new About trust layer links to that authoritative process instead of duplicating it.

## 7. Contactability and consumer transparency

The current Contact page already provides the official inquiry form, configured email channel, `ContactPage` structured data and customer-support `ContactPoint`.

Existing localized legal surfaces include:

- Terms and Conditions;
- Privacy Policy;
- Cancellation and Rescheduling Policy;
- Data Deletion.

The About trust layer links to Terms and Privacy so families can reach these authoritative pages from a core trust surface.

No street address or additional phone claim was added because Phase 6.6 only surfaces verified configured values.

## 8. Testimonials and reviews

The homepage contains testimonial UI, but Phase 6.6 did **not** establish an auditable provenance record for each testimonial, a rating value, a review count, or external review-platform ownership.

Decision:

**SOURCE REQUIRED / SCHEMA NOT ELIGIBLE**

Phase 6.6 therefore does not add:

- `Review` schema;
- `AggregateRating` schema;
- `ratingValue`;
- `reviewCount`;
- new star-rating claims.

A future review-schema patch must first establish source, consent/provenance and correct schema eligibility for the reviewed entity.

## 9. Tutor credentials, vetting and safeguarding claims

Current public process content supports statements about tutor matching factors such as subject knowledge, grade level, teaching experience and communication fit.

It does not provide a verified public register of named tutor degrees, certifications, licenses, background checks, safeguarding certifications or years of experience.

Decision:

- process-level matching claims: **SAFE TO SURFACE**;
- specific credential claims: **SOURCE REQUIRED**;
- background-check claim: **UNSUPPORTED / DO NOT AMPLIFY**;
- public Tutor/Person schema: **HOLD** until profile-level evidence exists.

The Terms contain conduct and safeguarding rules, but those rules must not be transformed into a claim that every tutor is background checked.

## 10. Authors, reviewers and social profiles

No verified public author/reviewer identity source was established during the current website audit.

Named author/reviewer entities and `Person` schema remain **HOLD** until there is a verified public identity, accurate role, substantiated qualifications, a visible byline/reviewer relationship, and matching schema.

The current organization configuration also leaves `sameAs` empty. Social profile `sameAs` remains **HOLD** until official profile ownership is verified.

## 11. Structured-data reconciliation

Current trust-related schema architecture remains coherent:

- one site-wide `EducationalOrganization` entity;
- one site-wide `WebSite` entity;
- About references the existing organization `@id`;
- Contact references the existing organization `@id`;
- How-It-Works references the existing organization `@id`;
- FAQ data remains attached to visible FAQ content where implemented.

Phase 6.6 does not create duplicate organization entities and does not create Review/AggregateRating/Person schema without evidence.

## 12. Dashboard control

Production spreadsheet:

`SPM - SEO & Analytics Production Dashboard`

Added and verified tab:

`Phase6_EEAT_Trust_Layer`

The tab records current evidence, claim provenance, risk, safe-to-surface state, schema eligibility, patch decision, runtime owner and implementation notes for every audited trust surface.

## 13. Runtime scope

Phase 6.6 runtime scope is intentionally narrow:

1. `src/config/legal.ts`
   - aligns legal-entity fallback with verified market configuration;

2. `src/content/pages/trust-transparency.ts`
   - localized evidence-based trust copy;

3. `src/app/[locale]/(marketing)/about/page.tsx`
   - removes tautological live identity copy;
   - displays configured legal organization;
   - links to process, contact, terms and privacy authority surfaces;

4. `tests/phase6-eeat-trust-layer.test.mjs`
   - guards legal identity, trust links, unsupported-claim exclusions and schema discipline.

No subject/service/course/location runtime owner was changed.

## 14. QA evidence

A temporary branch-only GitHub Actions workflow was used for the runtime gate and then removed before the final production diff.

Successful QA run:

- workflow: `Phase 6.6 QA`;
- run: `35915418302`;
- tested head: `1c5afb01731d30428c5229ef3323037e494bcbc8`;
- focused Phase 6.6 regression: **PASS**;
- TypeScript: **PASS**;
- changed-file ESLint: **PASS**;
- production build: **PASS**.

The repository's existing `package-lock.json` was already out of sync with `package.json` (`@swc/helpers@0.5.23` missing from the lock), so the first `npm ci` QA attempt failed before any Phase 6.6 test executed. This was a baseline dependency-lock issue unrelated to the Phase 6.6 diff.

The successful branch-only QA run therefore installed the same declared dependencies with `npm install --package-lock=false --no-audit --no-fund`, leaving the repository lockfile unchanged, then executed the focused regression, typecheck, changed-file lint and production build.

The temporary QA workflow was deleted after the successful run and is not part of the final Phase 6.6 diff.

## 15. Final decision

**PASS — VERIFIED TRUST LAYER PUBLISHED / UNSUPPORTED CLAIMS BLOCKED**

Phase 6.6 strengthens verifiable business identity and consumer transparency without manufacturing credentials, reviews, ratings, outcomes, authorship or social-entity signals.
