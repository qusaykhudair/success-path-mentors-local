# Phase 5.5 — Landing Page & Conversion Optimization

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Net baseline:** `main @ 91e748c97599e4ea06f6228565fdf2c389498601`  
**Issue:** #62  
**Primary evidence:** production GA4 dashboard extract + current registration/analytics source contract  
**Status:** PASS — conversion-readiness layer established; runtime CRO changes held for evidence

## 1. Purpose

Phase 5.5 moves the Phase 5 program from Search visibility into the post-click funnel:

`Qualified landing session → trial/form start → verified registration flow → step progression → submit → registration complete`

The goal is not to manufacture a conversion-rate conclusion from tiny early data. The goal is to establish which parts of the funnel are technically measurable, which observations are genuine business evidence, and what threshold must be met before changing CTA, trust, layout or form friction.

## 2. Current measurement maturity

The current production dashboard extract contains GA4 data only for **2026-09-19 through 2026-09-20**.

Observed event families include:
- `page_view`;
- `session_start`;
- `contact_cta_clicked`;
- `whatsapp_cta_clicked`;
- `trial_form_start`;
- `registration_flow_start`;
- registration success/failure-like events.

However, the available event volume is extremely small and includes traffic with explicit QA-like UTM values. The current feed therefore proves that instrumentation is reaching GA4, but it does **not** provide a reliable production conversion rate.

Examples of why the data is not mature enough:
- current event counts can exceed the number of users in the same tiny sample;
- a Hamilton Facebook organic UTM test appears in traffic rows while the session channel/source is still represented as Direct in that row;
- the raw event export includes legacy/other completion-like names that do not exactly match the current source-contract event name.

**Decision:** treat the current data as instrumentation/QA evidence, not as proof of seven real registrations, a landing-page failure, or a Facebook conversion result.

## 3. Source-contract audit

### 3.1 Registration page

`src/app/[locale]/(auth)/register/page.tsx`

Current behavior:
- validates locale;
- renders the shared `RegistrationForm`;
- sets the registration page to `robots: { index: false, follow: true }`;
- keeps the conversion flow outside the SEO-owner architecture.

No SEO/canonical conflict was found in this page contract.

### 3.2 Registration form

`src/features/auth/registration-form.tsx`

The current registration flow is a **four-step validated form**.

Step groups:
1. parent/contact: parent name, guardian relationship, email, WhatsApp;
2. student: first name and grade;
3. tutoring fit/scheduling: subject, curriculum, preferred language, country, timezone, preferred day and preferred time;
4. privacy consent/review.

The source provides:
- Zod validation;
- field-level server errors;
- locale-aware copy;
- phone normalization/validation;
- timezone/country defaults;
- signup-ticket identity recovery;
- explicit success, verification and failure states;
- user-facing error handling;
- a visible confirmation state after success.

No reproducible code defect was found in this audit.

### 3.3 Conversion event contract

The current registration source emits:
- `registration_flow_start` only after verified signup identity is present;
- `registration_step` after a step validates and completes;
- `trial_registration_submit_started` immediately before the registration API request;
- `trial_registration_failed` on API/unknown failure, including safe `error_category` and optional `http_status`;
- `trial_registration_complete` only after a confirmation object exists.

The source also guards flow-start and completion events with `useRef` dedupe flags, reducing duplicate firing caused by re-rendering.

### 3.4 Analytics safety and attribution

`src/lib/analytics/client.ts` and `src/lib/analytics/events.ts` establish that:
- analytics events require configured GTM and granted analytics consent;
- UTM/referrer attribution is appended to tracked conversion events;
- event properties are allowlisted;
- known PII keys are stripped;
- the canonical registration-completion event in the current source contract is `trial_registration_complete`.

`tests/analytics-foundation.test.mjs` already checks consent gating, attribution persistence, PII stripping and conversion dedupe source guards.

**Instrumentation contract:** PASS.

## 4. Measurement-taxonomy reconciliation

The production raw extract currently includes completion-like names such as:
- `trial_registration_success`;
- `trial_start`.

Those names are not the same as the current repo contract's canonical completion event:

`trial_registration_complete`

This can reflect legacy events, GTM/GA4 transformations, historic deployment state or test instrumentation. From the current two-day sample, it is not safe to assume they are equivalent real-user conversions.

### Current rule

For Phase 5 business KPI reporting:

> **Do not sum multiple success-like event names as registrations.**

Use `trial_registration_complete` as the source-contract reference, and reconcile fresh GTM/GA4 output before publishing an Organic → Trial conversion rate.

This is a **measurement reconciliation item**, not evidence of a user-facing form defect.

## 5. Current conversion-readiness matrix

| Funnel stage | Evidence | Current state | Decision |
|---|---|---|---|
| Landing acquisition | 2-day mixed traffic extract | **NOT READY** | Monitor; exclude/label QA traffic before behavioral conclusions |
| Trial/form entry | very small number of starts | **NOT READY** | Do not rewrite CTA/value proposition yet |
| Form progression | four-step code contract exists; no mature stage counts | **WATCH** | Track step completion before reducing/reordering fields |
| Submit | canonical submit-start event exists | **WATCH** | No submit patch without genuine failures/volume |
| Failure | 2 failure events visible in tiny/test-like sample | **MONITOR** | Use `error_category`/`http_status` once genuine volume exists |
| Completion | current source contract is clear; raw names need reconciliation | **BLOCKED FOR KPI RATE** | Reconcile event naming before reporting conversion rate |
| Attribution/privacy | consent-gated, attribution-aware, PII-sanitized source contract | **PASS** | Preserve |

## 6. Friction hypotheses — not defects

The source audit identifies several reasonable hypotheses that may matter once traffic exists:
- both email and WhatsApp are required in the first information step;
- preferred day and preferred time are requested before registration submission;
- the user completes four steps before confirmation;
- identity verification/ticket state is part of the registration-flow start contract.

These are **not currently proven problems**. Removing fields or collapsing steps now would be speculative because there is no stable stage-level drop-off baseline.

## 7. Phase 5.5 operating gates

These are internal decision thresholds for this project, not universal CRO rules.

### 7.1 Landing / CTA review gate

Begin a landing-page conversion review when there are at least:

**25 qualified, non-test Organic sessions** to a coherent landing/owner set.

If that sample produces **zero** trial/form starts, investigate:
- CTA prominence/clarity;
- value proposition;
- trust/proof;
- message-to-page alignment;
- mobile usability;
- unnecessary choice/friction.

### 7.2 Form-stage friction gate

Do not classify a form step as a drop-off problem until at least:

**20 genuine starts at the relevant stage** with stable instrumentation.

Then compare stage completion and change one meaningful friction variable at a time.

### 7.3 Failure-defect escalation

Open a narrow runtime defect investigation when either:
- a failure is reproducible in QA; **or**
- the same `error_category` appears at least **5 times across 3 or more genuine sessions/dates**.

This avoids turning isolated API/network/test events into a product rewrite.

### 7.4 Conversion KPI gate

Organic → Trial conversion reporting requires:
1. one canonical completion definition reconciled in fresh GTM/GA4 output;
2. test/QA traffic excluded or clearly labeled;
3. attribution source/medium interpretable;
4. enough genuine sessions to make the rate operationally useful.

Until then, conversion KPIs remain **measurement-in-progress**, not business-performance conclusions.

## 8. Dashboard implementation

A new production-dashboard tab was added:

`Phase5_Conversion_Readiness`

It records:
- funnel stages;
- canonical event/evidence source;
- evidence quality;
- readiness state;
- friction/risk hypotheses;
- allowed action now;
- exact escalation gates.

This complements:
- `GA4_Raw`;
- `GA4_Traffic_Raw`;
- `Phase5_Signal_Monitor`;
- `Phase5_Opportunity_Priority`;
- `Phase5_Owner_Validation`;
- `Phase5_CTR_SERP_Readiness`.

## 9. Runtime patch decision

**HOLD — no runtime CRO patch is justified in Phase 5.5.**

Reason:
- no reproducible landing/form defect was proven;
- current behavioral volume is too small;
- available data includes QA/test-like traffic;
- current form and analytics source contracts already contain validation, failure handling, dedupe and attribution safeguards.

Making CTA/layout/form changes now would reduce causal clarity before a baseline exists.

## 10. Phase 5.5 decision

**PASS.**

Phase 5.5 establishes the conversion optimization control layer without inventing performance conclusions.

What is complete:
- funnel source contract audited;
- analytics/privacy/attribution contract verified;
- current data-quality limitation recorded;
- taxonomy reconciliation isolated from true business conversions;
- landing, step-friction, failure and KPI gates established;
- production dashboard conversion-readiness view added;
- no speculative runtime change introduced.

Next sequential stage:

**Phase 5.6 — Evidence-Based Content Patches**

The leading existing-page candidate remains the British Columbia curriculum owner identified in Phase 5.2, because that path is supported by a previously documented factual content-depth gap and does not depend on immature CTR/CRO data.
