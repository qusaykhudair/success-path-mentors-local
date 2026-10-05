# ADS-WU-006 — Landing Page & Ad Quality Audit — 2026-10-05

## Scope
Audit of the current Google Search Ads landing experience for:
- Campaign: `SPM_ON_Search_Clicks_Learning_Oct2026`
- Current final URL: `https://successpathmentors.net/` → resolves to `/en`
- Primary intent: online tutoring in Ontario / Grades 1–12 / one-to-one tutoring
- Current Google Ads diagnostics:
  - Quality Score: 3/10 on `"online tutoring"` and broad `online tutoring`
  - Expected CTR: Below average
  - Ad relevance: Above average
  - Landing page experience: Below average
  - Search Lost IS (rank): 79.31%
  - Search Lost IS (budget): 0.57%

## Executive finding
The current homepage is strong as a broad corporate/SEO homepage, but it is not an ideal paid-search landing page for an Ontario-only campaign.

The biggest issue is **message-match dilution**, not lack of content:
- the ad says Ontario;
- the display path says `online-tutoring/ontario`;
- the homepage hero says Grades 1–12 / one-to-one / Canadian and American curricula;
- Ontario-specific content exists, but appears much later on the page.

This is consistent with the current Google Ads diagnostic: Ad relevance is Above average while Landing Page Experience is Below average.

## What is already strong

### 1. Strong core tutoring relevance
Hero communicates:
- Personalized Online Tutoring
- Grades 1–12
- One-to-One
- Math, English, Science and French
- Canadian and American curricula
- Free Trial CTA

### 2. WhatsApp is prominent
- Hero primary CTA goes directly to WhatsApp.
- Header contains a WhatsApp CTA.
- Floating WhatsApp button exists.
- Additional WhatsApp CTAs appear in services, FAQ, pricing and final CTA.

### 3. Strong trust/support content
Homepage includes:
- tutoring process
- tutor matching
- progress follow-up
- testimonials
- video testimonials
- transparent packages/pricing
- FAQs
- Ontario curriculum/local-support section
- legal/privacy links

### 4. Ontario relevance does exist
The homepage contains a later section:
`Online Tutoring for Students in Ontario`
with Milton, Toronto/GTA, Hamilton and province-wide support.

### 5. Existing Ontario-specific pages already exist
- `/en/locations/canada/ontario`
- `/en/curriculum/ontario`

These provide stronger local/curriculum message match than the generic homepage, but should be evaluated/optimized before becoming the paid-search destination.

---

## High-priority gaps

### P0 — Hero does not say Ontario
**Severity:** High

For the current Ontario-only Search campaign, the first screen does not explicitly say:
- Ontario
- Ontario curriculum
- Ontario students

The user only encounters Ontario-specific content much farther down the page.

**Impact hypothesis:**
Weak first-screen message match can contribute to Below-average Landing Page Experience even though the overall site is highly relevant.

**Recommended future paid-search hero:**
`1-to-1 Online Tutoring in Ontario for Grades 1–12`

Supporting line:
`Personalized Math, English, Science and French tutoring aligned with the Ontario curriculum.`

### P0 — Paid ad destination is too broad
**Severity:** High

Current final URL is the root domain, which resolves to `/en`.

The homepage serves:
- Canada
- United States
- other regions
- multiple curricula
- multiple programs
- full corporate navigation

For an Ontario-only paid click, this is broader than necessary.

**Recommendation:**
Create or designate an Ontario-specific paid-search landing experience.

Preferred long-term option:
- dedicated ads landing page that does not alter locked SEO/location architecture;
- Ontario-first hero;
- Grades 1–12;
- subjects;
- free trial;
- WhatsApp;
- social proof;
- concise process;
- Ontario curriculum support;
- pricing/FAQ;
- minimal distraction.

Do not switch the campaign final URL during the initial baseline window without a documented change gate.

### P0 — Hero enrollment card discards entered data
**Severity:** Critical conversion UX issue

The homepage hero 3-step EnrollmentCard collects:
- parent name
- WhatsApp
- email
- student age
- country
- province
- subjects
- teaching language
- notes

However, on final submit the implementation only calls:
`router.push('/{locale}/register')`

The entered EnrollmentCard state is not posted, persisted, or transferred to the registration page.

The registration page then has its own full registration form, including overlapping fields.

**Impact:**
- user effort is duplicated;
- users may believe information was submitted when it was not;
- possible abandonment;
- weak continuity from ad → landing page → trial-registration journey.

**Recommendation:**
Choose one clear path:
1. make the hero form a real lead/trial-intake form and persist its data; or
2. simplify the hero panel and send users directly to WhatsApp / registration without collecting disposable fields.

Given the current business priority, a WhatsApp-first paid landing page is the cleaner Phase-1/Phase-2 approach.

### P1 — Too many competing paths for paid traffic
**Severity:** Medium-High

The generic homepage offers:
- primary WhatsApp Free Trial CTA
- 3-step enrollment card
- Explore Programs
- subject mega-navigation
- Programs
- Services
- Packages
- How It Works
- About
- FAQ
- Login
- region selector
- language selector

This is appropriate for a corporate homepage but not optimal for a high-intent paid-search landing page.

**Recommendation:**
For paid traffic, preserve trust/navigation essentials but reduce choice around the primary action:
`WhatsApp / Book Free Trial`.

### P1 — Region selector dilutes Ontario intent
**Severity:** Medium

Immediately after the hero, the live page exposes:
- Canada
- USA
- United Kingdom
- Germany

For an Ontario-only campaign this creates unnecessary market switching.

**Recommendation:**
Do not show the global region-selection block near the top of a dedicated Ontario paid-search page.

### P1 — Final URL creates an unnecessary redirect
**Severity:** Medium-Low

`https://successpathmentors.net/` resolves to `https://successpathmentors.net/en`.

**Recommendation:**
When the final destination is next changed through a controlled test, use the final canonical landing URL directly rather than the root redirect.

### P1 — Trust copy uses an absolute claim
**Severity:** Medium

Enrollment card reassurance:
`Your information is 100% secure`

This is an absolute security claim.

**Recommendation:**
Replace with precise privacy language, for example:
`We use your information only to respond to your tutoring request. See our Privacy Policy.`

### P2 — Structured-data social profile gap
**Severity:** Low for Ads / useful for brand consistency

The footer contains Facebook, Instagram and YouTube links, but central `SOCIAL` configuration and `ORGANIZATION.sameAs` are empty.

**Recommendation:**
Centralize official social URLs and populate `sameAs` as a separate brand/schema cleanup. This is not a launch blocker for Search Ads.

---

## Expected CTR observations
Current Google Ads signal: **Below average**.

The RSA has already been expanded and Ad Strength improved to Average.

Current landing audit suggests CTR work should be separated from landing-page work:
- keep the existing ad stable during the early learning window;
- after enough data, create a controlled ad-copy experiment rather than repeatedly editing the same RSA;
- prioritize clear Ontario + 1-to-1 + Grades 1–12 + Free Trial wording.

Do not chase the 1–10 Quality Score directly; use its components diagnostically.

---

## Recommended paid-search landing-page information architecture

### Above the fold
1. Eyebrow: `Ontario Online Tutoring • Grades 1–12`
2. H1: `1-to-1 Online Tutoring in Ontario for Grades 1–12`
3. Supporting text: Math / English / Science / French + Ontario curriculum.
4. Primary CTA: `Chat on WhatsApp`
5. Secondary CTA: `Book a Free Trial`
6. Small reassurance:
   - personalized tutor matching
   - flexible scheduling
   - online across Ontario

### Immediately below
- Subjects
- Ontario curriculum alignment
- How it works (3 concise steps)
- Parent/student social proof
- Packages
- FAQs
- final WhatsApp CTA

### Remove/reduce for paid landing
- global region selector
- excessive global navigation
- duplicate intake funnel
- unrelated market messaging

---

## Recommended test plan

### Phase 1 — current baseline
Do not change the live landing page yet solely from the first ~10 clicks.
Continue collecting enough baseline data to establish:
- CTR
- CPC
- Search Terms
- Landing Page Experience history
- Rank loss
- WhatsApp inquiry quality

### Phase 2 — controlled landing-page test
After the baseline gate:
- Variant A: current homepage
- Variant B: Ontario-focused paid landing page
- keep keyword/bid/budget stable during the comparison where practical

Evaluate:
- CTR (ad-side context)
- landing engagement
- WhatsApp clicks
- trial starts
- qualified lead rate
- CPC
- Quality Score component movement over time

### Phase 3 — conversion-led optimization
Only after conversion tracking and attribution are trustworthy:
- qualified WhatsApp lead
- trial registration
- trial attended
- paid student

Then consider Maximize Conversions.

---

## Internal diagnostic score
This is an internal audit score, **not Google's Quality Score**.

- Core tutoring relevance: 18/20
- Ontario message match above fold: 7/20
- CTA / WhatsApp prominence: 18/20
- Trust / proof / pricing: 17/20
- Conversion-flow continuity: 7/15
- Destination/technical alignment: 4/5

**Total: 71/100**

Primary opportunity: make the paid landing experience explicitly Ontario-first and remove duplicate/disposable intake friction.

## Decision
**WU-006 remains In Progress.**

Audit is complete; implementation should be gated to avoid contaminating the initial baseline. The next recommended action is to document/build the Ontario paid-landing specification, but not switch the campaign final URL until the baseline gate is reached.
