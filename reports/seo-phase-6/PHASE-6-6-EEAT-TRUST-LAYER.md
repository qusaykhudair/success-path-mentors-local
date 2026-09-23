# Phase 6.6 — E-E-A-T & Trust Layer

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Baseline:** `main @ 38227dc6d265b6f6b970f628d2ce399506a39004`  
**Issue:** #83  
**Status:** PATCH IMPLEMENTED — QA / MERGE PENDING

## 1. Purpose

Phase 6.6 strengthens the website's **trust and entity transparency** using verifiable first-party information already present in the repository.

This phase does **not** treat E-E-A-T as a Google score and does not claim that a trust section by itself causes ranking gains.

The operating principle is:

> Surface facts that can be verified from first-party sources, connect families to transparent service and policy information, and block trust claims that do not yet have auditable provenance.

## 2. Guardrails

The following claims are blocked unless first-party evidence is established:

- named tutor degrees or certifications;
- tutor licenses;
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

The repository already has a dedicated Tutor Matching page that describes matching according to factors such as:

- grade;
- subject;
- curriculum context;
- language;
- availability;
- communication fit;
- relevant teaching experience;
- student need;
- family feedback after the first lesson.

The page also explicitly states that Success Path Mentors does not guarantee a specific tutor, exact schedule, grade improvement, examination score or academic result.

Phase 6.6 therefore **preserves** this surface rather than adding unsupported credential claims.

The How-It-Works page separately documents:

- collecting student information;
- clarifying the learning need;
- matching an appropriate tutor;
- confirming a lesson time;
- completing the first lesson;
- reviewing and continuing or adjusting;
- what happens during and after the lesson.

This existing process content is linked from the new About trust layer instead of being duplicated.

## 7. Contactability

The current Contact page already provides:

- an inquiry form;
- the configured email channel;
- structured `ContactPage` data;
- a `ContactPoint` for customer support;
- service-request categories including tutoring, tutor matching, schedule, payment, existing-student support and privacy.

Phase 6.6 keeps this as the authoritative contact surface and links to it from About.

No street address or additional phone claim was added because this phase only surfaces verified configured values.

## 8. Policies and consumer transparency

Existing localized legal surfaces include:

- Terms and Conditions;
- Privacy Policy;
- Cancellation and Rescheduling Policy;
- Data Deletion.

The Terms page already links related policy documents and contains limitations around service scope, tutor availability, academic integrity, safety, privacy, technology and outcomes.

The About trust layer links to Terms and Privacy so families can reach these authoritative pages from a core trust surface.

## 9. Testimonials and reviews

The homepage contains testimonial UI. Phase 6.6 did **not** establish an auditable provenance record for:

- each testimonial source;
- rating value;
- review count;
- external review-platform ownership.

Decision:

**SOURCE REQUIRED / SCHEMA NOT ELIGIBLE**

Therefore Phase 6.6 does not add:

- `Review` schema;
- `AggregateRating` schema;
- `ratingValue`;
- `reviewCount`;
- new star-rating claims.

A future review-schema patch must first establish source, consent/provenance and correct schema eligibility for the reviewed entity.

## 10. Tutor credentials and safeguarding claims

Current public process content supports statements about tutor matching factors such as subject knowledge, grade level, teaching experience and communication fit.

It does **not** provide a verified public register of named tutor degrees, certifications, licenses, background checks, safeguarding certifications or years of experience.

Decision:

- process-level matching claims: **SAFE TO SURFACE**;
- specific credential claims: **SOURCE REQUIRED**;
- background-check claim: **UNSUPPORTED / DO NOT AMPLIFY**;
- public Tutor/Person schema: **HOLD** until profile-level evidence exists.

The Terms contain conduct and safeguarding rules, but those rules must not be transformed into a claim that every tutor is background checked.

## 11. Authors, reviewers and editorial identity

No verified public author/reviewer identity source was established during the current website audit.

Decision:

**HOLD** named author/reviewer entities and `Person` schema.

If editorial or educational articles later require named experts, the future gate is:

1. verified public identity;
2. accurate role;
3. evidence for any qualification claimed;
4. visible byline/reviewer relationship on the page;
5. schema that matches the visible page.

## 12. Social profile `sameAs`

The current organization configuration leaves `sameAs` empty.

Decision:

**HOLD** until official profile ownership is verified.

No social URL should be guessed solely because a platform account with a similar brand name exists.

## 13. Structured-data reconciliation

Current trust-related schema architecture is already coherent:

- one site-wide `EducationalOrganization` entity;
- one site-wide `WebSite` entity;
- About page references the existing organization `@id`;
- Contact page references the existing organization `@id`;
- How-It-Works references the existing organization `@id`;
- FAQ data is attached to visible FAQ content where implemented.

Phase 6.6 does not create duplicate organization entities.

It also does not create Review/AggregateRating/Person schema without evidence.

## 14. Dashboard control

Production spreadsheet:

`SPM - SEO & Analytics Production Dashboard`

Added tab:

`Phase6_EEAT_Trust_Layer`

The tab records for each trust surface:

- current evidence;
- claim provenance;
- risk;
- whether it is safe to surface;
- schema eligibility;
- patch decision;
- Phase 6.6 state;
- runtime owner;
- implementation notes.

The tab was re-read after creation and verified successfully.

## 15. Runtime files changed

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

## 16. QA gate

Required before merge because Phase 6.6 contains runtime changes:

- focused Phase 6.6 regression test;
- TypeScript;
- changed-file ESLint;
- production build;
- diff guard confirming no unintended routing/canonical/redirect changes.

The final status must not be changed to PASS / CLOSED until those checks and merge are complete.

## 17. Phase decision

Current decision at implementation stage:

**PATCH IMPLEMENTED — QA / MERGE PENDING**

Expected closure condition:

**PASS — VERIFIED TRUST LAYER PUBLISHED / UNSUPPORTED CLAIMS BLOCKED**
