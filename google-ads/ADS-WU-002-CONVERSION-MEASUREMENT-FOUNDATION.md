# ADS-WU-002 — Conversion Measurement Foundation

**Date:** 2026-10-06  
**Campaign:** `SPM_ON_Search_Clicks_Learning_Oct2026`  
**Status:** IN PROGRESS — event architecture audited / instrumentation hardening implemented / Google Ads action QA pending

## Objective

Build privacy-safe, deduplicated conversion measurement before any conversion-led bidding decision.

This Working Unit does **not** authorize a change to Maximize Clicks, budget, targeting, networks, devices, schedules, audiences, Target CPA, Target ROAS, or Performance Max.

## Current foundation verified in source

- Google Ads base tag ID: `AW-18494343690`.
- Analytics consent gates Google Ads / GTM scripts.
- Attribution allowlist supports `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `landing_path`, `referrer_host`, and allowlisted `ads_region`.
- PII keys are stripped from analytics payloads.
- `trial_registration_complete` fires only after a back-end confirmed registration result and is guarded against duplicate firing.
- `whatsapp_cta_clicked` is available as a click-level event.
- WU-002 instrumentation hardening adds `phone_cta_clicked` and closes missing mobile/final-CTA contact-event coverage.

## Business conversion hierarchy

| Signal | Meaning | Current classification | Google Ads use now |
|---|---|---|---|
| `trial_registration_complete` | Back-end confirmed free-trial / family registration | Strong website conversion | **Secondary during QA**; candidate Primary only after validation and Gate 5 |
| `whatsapp_cta_clicked` | User opened WhatsApp from a tracked website CTA | Intent signal, not a qualified lead | Secondary |
| `phone_cta_clicked` | User clicked a website telephone CTA | Intent signal, not confirmed call/qualified lead | Secondary |
| Google Ads call asset interaction | Call initiated from ad asset | Intent signal | Secondary until call-quality process is verified |
| Qualified WhatsApp / phone lead | Human-confirmed relevant inquiry | Business conversion | Offline / WU-008 |
| Trial Attended | Student actually attended trial | Strong downstream conversion | Offline / WU-008 |
| Paid Student | Payment/enrollment confirmed | Economic conversion | Offline / WU-009 |
| Revenue | Attributable collected revenue | Economic value | WU-009 / ROAS gate |

## Important classification rule

A WhatsApp **click** is not the same as a qualified WhatsApp **lead**. Do not optimize bidding to raw message-link clicks as if they were paid-ready leads.

Likewise, a website phone click is not automatically a completed or qualified call.

## Google Ads conversion-action plan

Create/QA these actions without changing the current bidding strategy:

1. **SPM | Trial Registration Complete**
   - Event source: `trial_registration_complete`
   - Initial optimization role: Secondary while QA is in progress
   - Count: One per interaction/lead
   - Value: no artificial value during QA
   - Candidate to become Primary only after successful firing/deduplication/lead-quality review.

2. **SPM | WhatsApp CTA Click**
   - Event source: `whatsapp_cta_clicked`
   - Optimization role: Secondary
   - Purpose: intent-volume and source-quality analysis.

3. **SPM | Website Phone Click**
   - Event source: `phone_cta_clicked`
   - Optimization role: Secondary
   - Purpose: website call-intent analysis.

4. **Calls from Ads / call asset**
   - Keep separate from website phone-click measurement.
   - Do not treat a click-to-call and a qualified phone lead as equivalent.

Existing generic/legacy actions such as `Submit lead form` and `Leads from messages` must not become the decision signal for conversion bidding until their exact trigger and quality are proven.

## GTM / event-delivery prerequisite

The site custom event bus currently pushes analytics events to `dataLayer` only when a valid `NEXT_PUBLIC_GTM_ID` is configured and analytics consent is granted.

Before creating final Google Ads trigger mappings, verify in production:
- a `GTM-...` container is actually loaded;
- `dataLayer` receives the named events after consent;
- GTM Preview / Tag Assistant sees each event exactly once;
- the Google Ads conversion tag linked to each event fires exactly once.

If production has no valid GTM container, do not pretend the custom events are being delivered. Resolve the delivery mechanism first.

## QA scenarios

### Trial registration
- accept analytics consent;
- arrive with `ads_region=ontario`;
- complete verified registration with a test record;
- expect exactly one `trial_registration_complete`;
- verify no email, phone, parent/student name, OTP, registration ID or MID is sent.

### WhatsApp
- click hero, quick-start, header, footer, floating, mobile-nav and final-CTA WhatsApp surfaces;
- each click should emit `whatsapp_cta_clicked`;
- `surface` distinguishes placement;
- generated WhatsApp message/number must not be included in analytics payload.

### Phone
- click mobile phone icon/text;
- each click should emit `phone_cta_clicked`;
- phone number must not be included in analytics payload.

## WU-002 exit gate

WU-002 is Done only when:
- production event delivery is verified;
- intended Google Ads conversion actions exist;
- events fire exactly once;
- PII exclusion is verified;
- no duplicate conversion path is present;
- Primary vs Secondary roles are documented;
- current Maximize Clicks pilot remains unaffected.

## Next controlled step

1. Run production GTM/Tag Assistant verification.
2. If GTM is present, map the three website events to Google Ads conversion actions as Secondary for QA.
3. Execute test conversions and record evidence.
4. Keep WU-007 blocked until conversion volume and quality justify Gate 5.
