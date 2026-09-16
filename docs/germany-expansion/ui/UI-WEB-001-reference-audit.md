# UI-WEB-001 — Germany reference audit

Date: 2026-09-08. Parent: `feature/germany-expansion` at `596ea1d90a247b87f70118ca5b1b82568bb28532`. Work branch: `codex/ui-web-001-visual-audit`.

## Decision brief

Design around TRUST + ATTRACTION, USER EXPERIENCE and SEARCHABILITY. Recommend an SPM-led, coordinator-assisted language-tutoring landing page: four equally visible services, a clear trial request, direct support and evidence attached to claims. This is a design recommendation for review, not approved copy, a production redesign or authorization to activate Germany.

Read AGENTS.md and the expansion STATUS, ARCHITECTURE, GER-WEB-003 and GER-WEB-003A reports. STATUS supersedes historical report labels: routing and consolidation are approved. The current known build blocker is the unrelated `src/app/api/test-email/route.ts` unknown request-body TypeScript error; no build or repair was attempted in this documentation unit.

## Evidence and limits

- **C — code evidence:** current repository components, messages, CSS and configuration were inspected. These establish intended behavior, not a screenshot of production.
- **A — asset evidence:** local logo, inverse logo, app-icon and two tutoring images were visually opened; PNG/JPG dimensions were measured.
- **W — web content evidence:** primary competitor pages retrieved through web extraction. Navigation, headings, link destinations, image descriptions and available text are observable; desktop geometry and mobile behavior are not.
- **R — recommendation:** proposed SPM design choices and inferred UX risks, not measured conversion effects.
- **U — unverified:** the browser runtime reported no available browser; discovery returned an empty list. No desktop/mobile screenshots, rendered competitor styles, modal behavior, sticky CTA behavior, form completion or device testing could be performed. No lead was submitted and no account was created. Optional browser enablement was requested while independent work continued; this version proceeds with the limitation explicit.

This is a source/content/asset audit with a provisional visual direction. It is ready for review with a material visual-validation gap; it must not be represented as a completed rendered desktop/mobile benchmark. Do not invent a competitor's font, color, grid, header-link count, shadow, sticky control or form-field count from extracted text. Missing content in extraction is not proof of absence.

## Primary reference register

All URLs below accessed 2026-09-08. Pages can change by region, experiment, consent state or time. Competitor metrics are self-published claims, not independently verified facts.

| ID | Reference | Evidence use |
|---|---|---|
| S1 | [Superprof Germany](https://www.superprof.de/) | Search-led entry, subject links, profile summaries, review placement, footer taxonomy |
| S2 | [Superprof online](https://www.superprof.de/online.html) | Online discovery and explanation of initial tutor contact |
| S3 | [Superprof contact](https://www.superprof.de/kontakt.html) | Help/chat entry and support expectations |
| G1 | [GoStudent Germany](https://www.gostudent.org/de-de/) | Entry, proof, navigation categories, service discovery and section sequence |
| G2 | [GoStudent process](https://www.gostudent.org/de-de/wie-es-funktioniert/) | Matching, trial, learning sequence and selection claims |
| G3 | [GoStudent contact](https://www.gostudent.org/de-de/kontakt/) | Advisor-assisted trial handoff and separate tutor acquisition |
| G4 | [GoStudent FAQ](https://www.gostudent.org/de-de/faq/) | Objection categories and audience scope |
| P1 | [Škola Populo Czech site](https://www.skolapopulo.cz/) | Contact prominence, service/audience categories and dated reviews |
| P2 | [Populo tutor explanation](https://www.skolapopulo.cz/blog/lektori-ve-skole-populo-specialiste-ve-svem-oboru) | Interview, communication skills and training narrative |
| P3 | [Populo contact](https://www.skolapopulo.cz/kontakt) | Phone/email and local support structure |
| P4 | [Populo language offer](https://www.skolapopulo.cz/predmet/balicek-jazykova-vyuka) | Language-service presentation and contextual proof |
| P5 | [Populo FAQ](https://www.skolapopulo.cz/caste-otazky) | Search snippet available; direct extraction failed, so FAQ details remain unverified |
| L1 | [SPM English site](https://successpathmentors.net/en) | Content retrieval only; repository is authoritative for this audit's code findings |

## Competitor synthesis

### Superprof

W: A five-word German headline leads into subject/location search, with an online alternative. Profiles combine tutor identity, subject, reviews and commercial detail; this makes selection concrete. The extensive subject taxonomy adds discovery breadth but would exceed SPM Germany V1 needs. [S1](https://www.superprof.de/)

W: The online page explains the first interaction and learning goals. Contact content exposes a team-chat entry and availability expectations. Full chat and booking flows were not opened. [S2](https://www.superprof.de/online.html), [S3](https://www.superprof.de/kontakt.html)

R: Borrow fast recognition of the learning need and evidence next to a teacher description. Keep SPM's coordinator responsible for matching; do not introduce marketplace search, provider rankings, subscriptions or copied profile-card designs. Do not reuse Superprof's prices, statistics, portraits, marks or wording.

### GoStudent

W: The entry combines a benefits list, service discovery and proof markers. Navigation exposes subjects, school levels, approach, pricing/contact and country-language destinations. Its broad product story is larger than a Germany V1 landing layer. [G1](https://www.gostudent.org/de-de/)

W: The process page describes needs → trial → ongoing learning and a selection process. Contact explicitly describes an education-advisor follow-up; FAQ separates booking, pricing, technical and safety questions and mentions adult language training. These are useful content patterns, not proof of SPM capabilities. [G2](https://www.gostudent.org/de-de/wie-es-funktioniert/), [G3](https://www.gostudent.org/de-de/kontakt/), [G4](https://www.gostudent.org/de-de/faq/)

R: Borrow next-step clarity, evidence close to the decision and audience-aware help. Do not copy its product ecosystem, classroom software, AI claims, pricing or visual identity. Success percentages differ between inspected landing/process text; SPM needs one dated source of truth for every published metric.

### Škola Populo

W: The Czech site emphasizes individual tuition, contact and service categories, including adults. Reviews have contextual labels and dates. Its broad service catalogue and long proof stream would create unnecessary density for SPM's four-service launch. [P1](https://www.skolapopulo.cz/)

W: The tutor article describes interviews, subject knowledge, interpersonal skills and training. Contact provides phone/email and branch destinations; the language page places learner experience alongside the offer. [P2](https://www.skolapopulo.cz/blog/lektori-ve-skole-populo-specialiste-ve-svem-oboru), [P3](https://www.skolapopulo.cz/kontakt), [P4](https://www.skolapopulo.cz/predmet/balicek-jazykova-vyuka)

R: Borrow the human coordination narrative and concrete quality-process explanation. Do not copy local branches, Czech examination structures, capacity pressure, certification claims or brand assets. The Czech site is a coordination reference, not evidence of German market requirements.

## Top ten patterns to adapt

1. Recognize the learning need immediately; use four services rather than open marketplace search. S1.
2. Place identity and substantiated expertise together. S1.
3. Make the support route discoverable and explain what happens after contact. S3.
4. Explain the trial journey in three short steps. G2.
5. Present a human coordination handoff. G3.
6. Put relevant proof near the decision, not exclusively in the footer. G1.
7. Answer booking/trial objections in an organized FAQ. G4.
8. Include adults explicitly where operationally appropriate. P1/G4.
9. Explain selection and quality work as observable actions. P2.
10. Attribute testimonials with context and date when consent allows. P1.

These are design hypotheses. No source establishes that copying a pattern improves SPM conversion; validate in later usability work.

## Required visual follow-up before design sign-off

At 1440×900 and 390×844, inspect each competitor's top viewport, navigation open state, mid-page service/proof block, CTA entry state, FAQ and footer. Also check 320px width and keyboard/zoom behavior. Record URLs, date, viewport, consent state and screenshots. Do not submit forms. Verify headline line breaks, imagery crops, actual typography, spacing, card borders/shadows, CTA contrast, sticky controls, keyboard obstruction, menu focus and form length. For SPM inspect /en, /ar and /fr/programme-francais; compare RTL numeric isolation and mobile overlays. This is evidence completion for this audit, not permission to begin UI-WEB-002.

## Deliverables and review gates

- [Current-site audit and prioritized gap table](current-site-audit.md)
- [Competitor A–L matrix](competitor-pattern-matrix.md)
- [Brand asset inventory](brand-assets-inventory.md)
- [Visual direction and fourteen-section assessment](visual-direction.md)
- [V1 scope and publication gates](v1-scope-freeze.md)
- [Hero Lead Journey Audit](gostudent-hero-form-journey-audit.md)

Before approval: review the visual evidence gap, lead-capture finding, claim register, brand master gaps and trial eligibility. Germany stays disabled; GER-WEB-004 and UI-WEB-002 are not started.

Validation: all six requested documents exist; automated local Markdown-link check found zero broken links; git diff --check passed. Source, messages, public assets, package/configuration and next-env.d.ts have no differences from the parent. Application tests/build were not rerun because this unit changes documentation only. No claim is made that the known unrelated production build blocker is resolved. Only the six audit files and expansion STATUS are included in this work unit.

Status: READY FOR REVIEW
