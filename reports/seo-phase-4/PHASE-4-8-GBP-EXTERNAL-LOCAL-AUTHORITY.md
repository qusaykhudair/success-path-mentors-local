# Phase 4.8 — Google Business Profile & External Local Authority

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Baseline:** `main @ ab009d43f551a2cb44da891b74f5e5a12463ad31`  
**Issue:** #46  
**Status:** **PASS — GBP HOLD / EXTERNAL ENTITY BASELINE LOCKED**

## 1. Objective

Execute the original Phase 4.8 roadmap step without inventing a physical local presence, creating an ineligible Google Business Profile, or linking conflicting external profiles into the tutoring entity graph.

Phase 4.8 covers:

- Google Business Profile eligibility;
- external local/entity discovery;
- canonical public business fields for citations;
- `sameAs` readiness;
- external-profile consistency;
- privacy/address guardrails;
- the handoff into Phase 4.9 Facebook / organic distribution.

## 2. Google Business Profile eligibility decision

Official Google Business Profile guidance states that a business must make **in-person contact with customers during its stated hours** to qualify for a Business Profile. Google explicitly states that online-only businesses are not eligible.

Current Success Path Mentors website positioning is one-to-one **online tutoring**. The current public proposition does not state that families visit a staffed tutoring location or that tutors travel to customers in person.

### Decision

**GBP = HOLD / NOT ELIGIBLE under the current online-only operating model.**

Do not create or verify a Google Business Profile merely to gain local ranking signals.

### Re-open condition

GBP may be reconsidered only if the business can truthfully document one of these operating models:

1. a genuine staffed customer-facing location where students/families can visit during published hours; or
2. a genuine service-area model in which the business physically visits customers in person.

A registered office, residential address, mailbox, virtual office, or online-only teaching operation does not by itself satisfy this gate.

Primary Google guidance reviewed:

- `https://support.google.com/business/answer/7039811`
- `https://support.google.com/business/answer/13763036`
- `https://support.google.com/business/answer/3038177`

## 3. Current website entity baseline

The current production source already provides a strong truthful base entity:

- public brand: **Success Path Mentors**;
- canonical website: `https://successpathmentors.net`;
- public North America phone: `+1 647 787 5999`;
- public support email: `successpathmentors@gmail.com`;
- service model: personalized one-to-one online tutoring;
- structured organization type: `EducationalOrganization`;
- location/service pages use `Service` with `VirtualLocation` and geographic `areaServed` rather than pretending each city is a physical tutoring branch.

This architecture should be preserved.

## 4. Canonical external citation / entity specification

Until a later business-identity reconciliation is explicitly approved, external tutoring references should use only facts already published consistently by the tutoring site.

| Field | Canonical value / rule | Status |
|---|---|---|
| Brand | `Success Path Mentors` | APPROVED |
| Website | `https://successpathmentors.net` | APPROVED |
| Public phone | `+1 647 787 5999` | APPROVED |
| Public support email | `successpathmentors@gmail.com` | APPROVED |
| Primary description | One-to-one online tutoring for Grades 1–12 / curriculum-aligned academic support | APPROVED |
| Customer-facing street address | Do not publish from SEO/citation workflow unless it is a genuine staffed customer location | HOLD |
| Legal entity name in third-party citations | Reconcile before broad publication | HOLD |
| Google Business Profile | Current online-only model is not eligible | HOLD / NOT ELIGIBLE |
| Social `sameAs` URLs | Add only after the exact tutoring profile is verified and consistent | HOLD |

The goal is **entity consistency**, not citation volume.

## 5. External discovery findings

### Exact-brand local discovery

A structured Milton local-business lookup did not surface an exact verified `Success Path Mentors` business entity among the returned local businesses.

This is consistent with the current decision not to fabricate a GBP or physical listing for an online-only service.

### LinkedIn entity mismatch

The public LinkedIn company result currently presents a materially different entity context:

- category / content focus: corporate training and e-learning;
- headquarters shown as Dubai;
- website shown as `Spelearning.ai` rather than the tutoring domain;
- Milton is also listed as a location.

Because that result does not currently represent the tutoring proposition consistently, it must **not** be added to `ORGANIZATION.sameAs` in the tutoring website.

### Legal-entity consistency watch

The production North America configuration currently exposes the legal name:

`Commenda Inc. operating as Success Path Mentors`

A public Canadian corporate-directory result also surfaces a separate `Success Path Mentors Inc.` entry in Milton. Phase 4.8 does not decide which entity should be the canonical legal operator for North America.

**Decision:** do not mass-update citations or structured-data legal identity until the business/legal source of truth is deliberately reconciled.

## 6. `sameAs` decision

Current source keeps:

`ORGANIZATION.sameAs = []`

That is safer than linking a mismatched external profile.

### Promotion gate for a future `sameAs` URL

An external profile may be promoted into tutoring structured data only when it passes all of these checks:

1. exact public brand or clearly documented brand relationship;
2. tutoring / academic-support proposition is consistent;
3. canonical website points to `successpathmentors.net`;
4. contact information does not conflict materially with the tutoring site;
5. no misleading physical-location claim;
6. the profile is controlled by Success Path Mentors or an authorized representative.

## 7. External local-authority operating policy

Phase 4.8 establishes the following policy for future external authority work:

### Do

- keep brand, website, phone and public support email consistent;
- use reputable profiles/directories that allow an online tutoring business truthfully;
- link back to the single appropriate owner page when a platform allows a destination URL;
- use UTM parameters when the platform is part of an intentional distribution campaign;
- maintain one coherent tutoring entity across approved profiles;
- correct stale/conflicting profile information before treating it as SEO authority.

### Do not

- create fake storefronts;
- use virtual offices as customer-facing tutoring locations;
- expose a residential/registered address merely for local SEO;
- create separate business listings for every city page;
- add low-quality bulk citations simply to increase directory count;
- add conflicting social profiles to `sameAs`;
- treat a business registration address as proof of GBP eligibility.

## 8. Relationship to Phase 4 local pages

The existing location architecture remains unchanged.

Ontario, Hamilton, Milton and Toronto pages are **search-intent owners for online service availability**, not claims that Success Path Mentors operates a walk-in tutoring centre in each city.

Therefore Phase 4.8 makes no change to:

- location routes;
- canonical/hreflang;
- sitemap;
- local page titles/H1s;
- `Service` / `VirtualLocation` structured data;
- `LocalAvailabilityBlock`;
- Phase 4.2 one-intent/one-owner policy.

## 9. Phase 4 roadmap correction

The earlier repository record that called Phase 4 finally closed after the internally numbered 4.5 work was premature relative to the original 4.1–4.10 roadmap.

Current original-roadmap status after this phase:

| Original step | Current status |
|---|---|
| 4.1 Local Search Demand Map | PASS |
| 4.2 Intent / Owner Map | PASS |
| 4.3 Architecture & Cannibalization | PASS |
| 4.4 Owner Page Optimization | PASS / conservative evidence-led implementation |
| 4.5 Grade / Course Expansion | PASS |
| 4.6 FAQs / Schema | PASS — completed under earlier internal numbering |
| 4.7 Internal Linking Authority | PASS — completed under earlier internal numbering |
| **4.8 GBP / External Local Authority** | **PASS — GBP HOLD / entity baseline locked** |
| 4.9 Facebook / Organic Distribution | PENDING |
| 4.10 Final QA / Deploy / Measure | PENDING |

Phase 4 is therefore **IN PROGRESS**, not finally closed.

## 10. Phase 5 baseline correction

The already-captured Phase 5.0 measurement report remains useful evidence, but it was captured early.

It should be treated as a **preparatory measurement baseline**, not as proof that formal Phase 5 execution has started. Formal Phase 5 handoff occurs only after original Phase 4.10 is complete.

## 11. Phase 4.8 final decision

**PASS.**

The correct Phase 4.8 outcome is not “create a GBP at all costs.” The correct outcome is:

- do not create an ineligible or misleading GBP;
- lock truthful public entity fields;
- preserve the online-service / VirtualLocation architecture;
- keep `sameAs` empty until an exact tutoring profile is verified;
- flag LinkedIn and legal-entity consistency gaps for reconciliation rather than propagating them;
- proceed next to **Phase 4.9 — Facebook / Organic Distribution & UTM Activation**.
