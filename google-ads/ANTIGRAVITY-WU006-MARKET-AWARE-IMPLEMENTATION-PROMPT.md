# Antigravity Master Implementation Prompt — Google Ads WU-006 / Market-Aware Landing Experience

## Role
Act as a senior staff engineer, growth engineer, technical SEO specialist, analytics engineer, conversion-rate optimization specialist, and QA lead working directly inside the Success Path Mentors production repository.

Repository:
`SuccessPathMentors/SuccessPath-Website-development-`

Branch:
Create and work on a new branch:
`google-ads/wu006-market-aware-landing`

Do NOT merge to `main`, deploy, or change the live Google Ads campaign. Produce a reviewable implementation and a handoff/QA report only.

---

## Business context
Success Path Mentors is an international online tutoring business. The website and company must remain global, not Ontario-only.

Current / intended markets:
- Canada
- United States
- United Kingdom
- Germany
- future international expansion

Current market architecture is hybrid:
- North America core market: Canada + United States
- Germany: separate market namespace and dedicated multilingual cluster
- French: standalone programme namespace
- United Kingdom currently appears in the region-selector UI but is not yet a first-class entry in the typed `markets.ts` registry

Do NOT convert the global homepage into an Ontario-only homepage.

The current Google Ads pilot is intentionally local:
- Campaign: `SPM_ON_Search_Clicks_Learning_Oct2026`
- Geography: Ontario, Canada — Presence only
- Language: English
- Network: Google Search only
- Bidding: Maximize Clicks
- Budget: CA$10/day
- Phase: Phase 1 / Baseline Learning
- WhatsApp is the priority contact channel
- Do not change bidding, budget, campaign goals, targeting, or Google Ads settings from this repository task

Consultant-aligned execution:
Phase 1 = Learn
Phase 2 = Search-term cleanup / traffic quality
Phase 3 = Maximize Conversions only when conversion-readiness evidence passes

---

## Mandatory source-of-truth files to read before editing
Read these first and treat them as authoritative constraints unless the code proves a later implementation state:

Google Ads:
- `google-ads/START-HERE.md`
- `google-ads/3-PHASE-EXECUTION-PLAN.md`
- `google-ads/FULL-WORKING-UNITS-HANDOFF.md`
- `google-ads/WORKING-UNITS-STATUS.md`
- `google-ads/QA-EVIDENCE-REGISTER.md`
- `google-ads/ADS-WU-006-LANDING-PAGE-AUDIT-2026-10-05.md`

Homepage / market / routing:
- `src/app/[locale]/page.tsx`
- `src/app/[locale]/layout.tsx`
- `src/components/sections/home/hero.tsx`
- `src/components/sections/home/enrollment-card.tsx`
- `src/components/ui/supported-countries.tsx`
- `src/components/local/local-availability-block.tsx`
- `src/config/markets.ts`
- `src/lib/market-routing.ts`
- `src/lib/market-navigation.ts`
- `src/i18n/routing.ts`
- `src/app/de/[[...marketSegments]]/page.tsx`
- `src/lib/programme-francais/*`

Tracking / attribution:
- `src/components/analytics/analytics-provider.tsx`
- `src/lib/analytics/events.ts`
- `src/lib/analytics/client.ts`
- `src/lib/analytics/attribution.ts`
- `src/lib/whatsapp.ts`

SEO / locked ownership:
- `src/config/routes.ts`
- `src/app/sitemap.ts`
- `tests/ontario-curriculum-owner.test.mjs`
- `tests/phase6-multilingual-seo-expansion.test.mjs`
- market/routing/navigation tests under `tests/`

Also inspect any directly related components/tests before modifying them.

---

## Current evidence / diagnosis
Google Ads evidence already captured:
- Search Impression Share: 20.11%
- Search Lost IS (budget): 0.57%
- Search Lost IS (rank): 79.31%
- Search Lost Top IS (rank): 85.06%
- Initial Quality Score for `"online tutoring"` and broad `online tutoring`: 3/10
- Expected CTR: Below average
- Ad relevance: Above average
- Landing page experience: Below average
- Budget is NOT the current visibility constraint
- Rank is the dominant visibility constraint
- Early quality diagnostics point to Expected CTR + Landing Page Experience, not ad relevance
- Data volume is still small; do not make uncontrolled structural changes

Current landing-page diagnosis:
- The global homepage is strong as a corporate/SEO homepage.
- Hero already communicates Grades 1–12, one-to-one tutoring, core subjects, and free trial.
- WhatsApp already exists in hero/header/floating CTA and other sections.
- Ontario content exists lower on the homepage and in dedicated Ontario pages.
- The Ontario ad promise is stronger than the first-screen Ontario message match.
- The homepage must remain global.
- The correct solution is contextual paid-traffic personalization, not converting the homepage into a local homepage.

Critical UX issue:
`EnrollmentCard` collects multiple fields across 3 steps but its final action only calls:
`router.push('/{locale}/register')`
The collected local component state is not submitted or transferred.
The registration page then asks for overlapping information again.
This is duplicate/disposable user effort.

Documentation drift also exists:
- `WORKING-UNITS-STATUS.md` reflects WU-005 initial baseline done and WU-006 in progress.
- `FULL-WORKING-UNITS-HANDOFF.md`, parts of `START-HERE.md`, and the “Evidence still required” section of `QA-EVIDENCE-REGISTER.md` contain stale status wording.
Synchronize docs after implementation without deleting historical evidence.

---

## Primary objective
Build a scalable **market-aware / acquisition-aware paid-search landing experience** on the existing global homepage while preserving the normal global homepage for organic/direct users.

Do NOT use the existing `MarketId` semantic for Ontario. Ontario is a campaign/acquisition context inside North America, not a new global market.

Use a separate, explicit, typed concept such as:
- `AcquisitionContext`
- `PaidLandingContext`
- or `AdsRegionContext`

Recommended URL parameter:
`ads_region=ontario`

Do NOT use a generic `market=ontario` parameter because `market` already has an architectural meaning in the repository.

Expected future Google Ads destination after the campaign gate (NOT to be changed by you now):
`https://successpathmentors.net/en?ads_region=ontario`

The canonical for this variant must remain the canonical global English homepage:
`https://successpathmentors.net/en`

Do not create indexable duplicate pages from query-parameter variants.

---

## Required implementation behavior

### A. Default global experience must remain unchanged
For:
- `/en`
- `/ar`
- organic/direct traffic
- unknown or missing `ads_region`

Preserve the existing global homepage content/structure and international positioning.

No global rewrite to Ontario.

### B. Ontario paid-search context
When and only when the URL contains the allowlisted value:
`ads_region=ontario`

Render an Ontario-focused first-screen experience, server-rendered if practical without causing an unacceptable performance regression.

Required Ontario message:
Eyebrow:
`Ontario Online Tutoring • Grades 1–12`

H1:
`1-to-1 Online Tutoring in Ontario for Grades 1–12`

Subheading:
`Personalized Math, English, Science and French tutoring aligned with the Ontario curriculum.`

Primary CTA:
`Chat on WhatsApp`

Secondary CTA:
`Book a Free Trial`

Add concise global reassurance near the CTA, for example:
`Ontario curriculum support • Serving families internationally`

The Ontario context must strengthen first-screen message match while preserving the global brand.

### C. Ontario WhatsApp context
For the Ontario acquisition context, prefill the WhatsApp message with a safe non-PII Ontario cue so the operations team understands the inquiry context.

Example:
- location/curriculum context indicates Ontario
- do not place user-entered PII in analytics
- do not expose internal IDs
- reuse/extend `buildTrialLessonMessage()` cleanly rather than duplicating WhatsApp URL logic

### D. Eliminate duplicate/disposable paid-traffic intake
For `ads_region=ontario`, do NOT show a multi-step form that collects data and then discards it.

Preferred solution:
- create a compact paid-traffic “Quick Start” card/variant in the hero
- explain the next step
- collect no disposable personal data
- send the user to WhatsApp and/or the real registration flow
- primary path should remain WhatsApp-first because that is the current business priority

Suggested card content:
- “Start in 1 minute”
- “Tell us the student’s grade”
- “Tell us the subject”
- “Share a preferred time”
- CTA: “Chat on WhatsApp”
- optional secondary: “Create account / Book Free Trial”

Do not silently rewrite the default global `EnrollmentCard` in the same release.
Instead:
1. make Ontario paid traffic avoid the broken duplicate intake, and
2. create a documented follow-up issue/spec for the default global EnrollmentCard continuity problem.

If you choose to fix the default EnrollmentCard too, isolate it in a separate commit and keep it disabled or unmerged so the Phase-1 baseline is not contaminated.

### E. Context parsing must be strict
Create a typed allowlist.
Initial supported acquisition context:
- `ontario`

Unknown values must fall back to default global content.

Do not render arbitrary query-string values into HTML.

Do not use IP geolocation, browser geolocation, User-Agent detection, or crawler-specific content.

No cloaking. Google and users must receive the same page for the same URL.

### F. Analytics / attribution
Extend the privacy-safe attribution layer to capture the acquisition context.

Add a safe allowlisted attribution field such as:
`ads_region`

Requirements:
- only store known values
- consent behavior must remain unchanged
- no PII
- do not add parent/student name, email, phone, WhatsApp number, message text, or notes
- ensure `whatsapp_cta_clicked` and relevant flow events can be analyzed by acquisition context
- preserve existing UTM behavior
- do not invent or implement Phase-3 conversion bidding
- do not create a Google Ads conversion action in code unless it already belongs to the documented WU-002 design

Do not expand into GCLID/offline conversion implementation in this WU-006 task; document that under WU-008 if needed.

### G. SEO constraints
Do not change the locked location/curriculum ownership architecture.

Specifically:
- preserve Ontario curriculum owner behavior
- preserve permanent redirects
- preserve sitemap ownership
- preserve hreflang contracts
- preserve core EN/AR locale model
- preserve French standalone namespace
- preserve Germany market multilingual namespace
- do not add Turkish
- do not create doorway/location duplication
- query-parameter acquisition variants must not create new indexable canonical owners

### H. Global / multilingual architecture
Do not mix Ontario campaign personalization into Germany.

Germany remains its own market:
- `/de`
- `/de/en`
- `/de/ar`

French remains standalone under the existing French programme architecture.

Core North America remains EN/AR.

The contextual architecture should be extensible later to:
- US campaigns
- UK campaigns
- additional Canadian provinces
- future markets

But implement only Ontario now.

Do NOT refactor `markets.ts` merely to add UK as part of this WU-006 change. Document the fact that UK is present in the region selector but is not yet a first-class market registry entry as separate architectural debt.

### I. Social profile consistency — safe cleanup
The footer exposes verified project URLs for:
- Facebook: `https://www.facebook.com/SuccessPathMentors`
- Instagram: `https://www.instagram.com/successpathmentors`
- YouTube: `https://www.youtube.com/@SuccessPathMentors`

Central `SOCIAL` and `ORGANIZATION.sameAs` are currently empty.

As a separate, low-risk commit:
- centralize ONLY these already-used/verified URLs
- populate `SOCIAL` and `ORGANIZATION.sameAs`
- make footer/schema consume the centralized source if this can be done without changing visible behavior
- do not invent LinkedIn/X/TikTok URLs
- do not make this a blocker for the landing-page work

### J. Documentation QA
Synchronize Google Ads docs to actual evidence.

At minimum:
- update `START-HERE.md`
- update `FULL-WORKING-UNITS-HANDOFF.md`
- update `WORKING-UNITS-STATUS.md`
- update `QA-EVIDENCE-REGISTER.md`

Do not rewrite historical evidence.
Mark stale checkpoints as completed/superseded where appropriate.

Current truth:
- WU-003: Done
- WU-004: In Progress, first live cleanup already recorded
- WU-005: Done for initial baseline; continue monitoring
- WU-006: In Progress
- WU-007: Blocked
- current campaign remains Phase 1 / Maximize Clicks

Add a clear release gate:
The Ontario contextual variant may be merged/deployed safely, but Google Ads must NOT switch its Final URL to `?ads_region=ontario` until the documented Phase-1 baseline checkpoint is approved.

---

## Preferred code architecture
Do not hard-code Ontario branching throughout multiple components.

Prefer a single typed configuration module, for example:
`src/config/acquisition-contexts.ts`

Possible shape:
- context id
- allowed locales
- hero eyebrow
- hero heading
- hero subheading
- primary CTA label
- secondary CTA label
- WhatsApp location/context
- reassurance/trust line

Add a parser/helper, for example:
`resolveAcquisitionContext(searchParams)`

Pass a small typed context object from the page to the Hero.

Keep `Hero` reusable and preserve current no-prop/default behavior.

Keep the global homepage's existing copy in translation files as the default.
Do not duplicate the entire homepage for Ontario.

---

## Performance requirements
The site has already achieved strong PageSpeed results. Do not regress performance.

Requirements:
- no heavy client bundle for simple campaign-context parsing
- no new third-party dependencies unless absolutely necessary
- no blocking external scripts
- preserve image optimization
- preserve accessibility
- preserve responsive behavior
- avoid unnecessary hydration
- avoid converting the entire homepage to a client component

If reading `searchParams` makes the full page dynamic, evaluate the tradeoff and choose the least invasive solution. Document the decision.

---

## Accessibility requirements
Maintain:
- semantic single H1
- correct heading hierarchy
- keyboard-accessible CTAs
- visible focus states
- 44px+ touch targets
- screen-reader labels
- RTL compatibility where relevant
- no color-only meaning

Ontario variant is English-only for this initial campaign, but must not break Arabic/global routes.

---

## Testing requirements
Add or update automated tests.

Minimum tests:
1. Default `/en` hero remains unchanged without `ads_region`.
2. `ads_region=ontario` resolves only to the Ontario allowlisted context.
3. Unknown `ads_region` falls back safely.
4. Ontario context does not change canonical URL.
5. No new indexable Ontario query-variant sitemap entry.
6. Ontario SEO-owner and redirect tests remain green.
7. Germany route tests remain green.
8. French namespace tests remain green.
9. Core EN/AR routing tests remain green.
10. Analytics sanitizer permits only the safe `ads_region` field and continues rejecting PII.
11. Ontario paid hero does not render the disposable EnrollmentCard.
12. WhatsApp CTA has the Ontario context and no PII.
13. Default homepage still renders the current global EnrollmentCard until a separate approved change.
14. Social centralization tests if social cleanup is implemented.

Run:
- typecheck
- lint
- relevant targeted tests
- full `npm test` if the environment allows it
- production build using the repository's existing build script

Do not change the build system merely to make tests pass.

---

## Manual QA matrix
Test at minimum:
- Desktop EN default
- Mobile EN default
- Desktop EN + `?ads_region=ontario`
- Mobile EN + `?ads_region=ontario`
- AR default
- Germany DE
- Germany EN
- Germany AR
- French programme entry

Verify:
- no layout shift/regression
- Ontario is visible above the fold only in the Ontario acquisition context
- global identity remains visible
- WhatsApp opens the correct Canadian number for Ontario
- Germany continues using the Germany contact channel
- no broken language switch
- no broken canonical/hreflang
- no console errors
- analytics consent behavior remains intact

---

## Deliverables
Produce all of the following:

1. Implementation commits on the feature branch, separated logically:
   - acquisition-context foundation
   - Ontario hero/paid-traffic UX
   - analytics attribution support
   - tests
   - optional social centralization
   - docs synchronization

2. A new implementation report:
`google-ads/ADS-WU-006-MARKET-AWARE-IMPLEMENTATION-REPORT.md`

Include:
- architecture chosen
- files changed
- why this preserves global positioning
- SEO safety
- analytics/privacy behavior
- tests/results
- known limitations
- rollback instructions
- activation instructions for the future Google Ads URL gate

3. Update WU-006 documentation/evidence with implementation status.
Do NOT mark WU-006 fully Done until measured post-activation evidence exists.

4. Add a separate follow-up spec/issue document for the global EnrollmentCard continuity problem if it is not fixed in this branch.

---

## Acceptance criteria
The task passes only if all are true:

- Normal homepage remains global and unchanged by default.
- Ontario paid traffic can receive Ontario-first message match without a new Ontario-only homepage.
- Ontario context is explicit and URL-driven, not inferred from IP or user agent.
- No cloaking.
- Global SEO/location architecture remains intact.
- Germany and French architectures remain intact.
- No Turkish is introduced.
- WhatsApp remains primary for Ontario paid traffic.
- Ontario paid traffic avoids the disposable duplicate hero intake.
- Analytics captures safe acquisition context without PII.
- Canonical remains `/en`.
- Existing tests continue to pass.
- New tests cover contextual behavior.
- Documentation is synchronized with current Google Ads evidence.
- No Google Ads campaign setting is changed.
- No Maximize Conversions / tCPA / ROAS work is introduced.
- No merge/deploy to `main` occurs automatically.
- A clean reviewable branch and implementation report are produced.

---

## Important execution behavior
Do not stop after proposing a plan.

Inspect the repository, implement the solution, run QA/tests, repair issues, and produce the final handoff.

If repository reality conflicts with this prompt:
1. preserve production safety and the documented SEO/Ads gates,
2. explain the conflict in the implementation report,
3. choose the least risky compatible solution,
4. never silently break an existing route, canonical, language cluster, analytics consent rule, or campaign baseline.

Do not over-engineer. Build the smallest scalable architecture that solves Ontario paid-search message match while preserving Success Path Mentors as an international platform.
