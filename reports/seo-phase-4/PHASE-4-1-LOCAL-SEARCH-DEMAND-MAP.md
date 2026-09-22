# Phase 4.1 — Local Search Demand Map

**Project:** Success Path Mentors  
**Baseline:** `main @ cd20de46dc4a3edf2c8588589989ea67bad57a70`  
**Research date:** 2026-09-23  
**Primary evidence:** Production GSC data in `SPM - SEO & Analytics Production Dashboard`  
**Current GSC history:** 7 days (2026-09-13 through 2026-09-19)  
**Status:** PROVISIONAL — first-party demand map established; 56-day confirmation still required for major expansion decisions.

## 1. Decision rule

Phase 4.1 uses first-party GSC demand before speculative keyword lists.

Each query or cluster must have:

1. one intended owner URL;
2. an intent class;
3. a cannibalization decision;
4. an action state;
5. an explicit promotion trigger.

Allowed action states:

- **PRESERVE** — correct current owner; no material change.
- **OPTIMIZE EXISTING — WATCHLIST** — evidence exists, but more history is required before a material patch.
- **MONITOR OWNER ASSIGNMENT** — query is appearing on a weak/wrong owner, but evidence is too thin to change architecture.
- **HOLD** — no current first-party evidence for expansion.
- **CREATE CANDIDATE** — may be considered only after the thresholds below are met and cannibalization review passes.

## 2. Current Ontario / Canada demand map

| Query / cluster | Current observed or intended owner | 7-day GSC evidence | Intent | Decision | Reason / next trigger |
|---|---|---:|---|---|---|
| `online tutoring hamilton on` | `/en/locations/canada/ontario/hamilton` | **8 impressions / 0 clicks** across multiple days | Local commercial | **OPTIMIZE EXISTING — WATCHLIST** | Strongest Ontario local signal in the current sample. Preserve the owner. Reassess after 56 days or earlier if clicks begin and impressions accelerate materially. |
| `online tutoring milton ontario` | `/en/locations/canada/ontario/milton` | **1 impression / 0 clicks** | Local commercial | **HOLD / PRESERVE** | Existing owner is correct, but the sample is too small for a content expansion. |
| Toronto tutoring cluster | `/en/locations/canada/ontario/toronto` | **0 observed query rows** in the current 7-day sample | Local commercial | **PRESERVE / HOLD** | Keep the existing owner. Do not add Toronto-subject doorway pages without first-party demand. |
| Ontario broad tutoring | `/en/locations/canada/ontario` | No direct query row in the current sample | Regional commercial | **PRESERVE** | Retain as regional owner and authority hub. |
| Ontario curriculum tutoring | `/en/curriculum/ontario` | No direct query row in the current sample | Curriculum / commercial | **PRESERVE** | Canonical owner already established in Phase 3. |
| `chemistry tutoring` | `/en/subjects/chemistry` is the intended owner; GSC currently showed homepage | **1 Canadian impression / 0 clicks** | Subject commercial | **MONITOR OWNER ASSIGNMENT** | One impression does not justify routing or content change. If the mismatch repeats, strengthen owner signals/internal linking rather than creating a new URL. |
| Ontario math tutoring | `/en/subjects/math` | No direct English math query in current Canada sample | Subject commercial | **PRESERVE / HOLD** | SERP intent is clearly commercial, but first-party GSC evidence is not yet strong enough for another broad-page patch after Phase 3. |
| Ontario French tutoring | `/en/subjects/french` | No direct French query in current sample | Subject commercial | **PRESERVE / HOLD** | Owner was strengthened and locally reconciled in Phase 3/4.0. Collect demand before further edits. |
| Ontario science tutoring | `/en/subjects/general-science` | No Ontario query in current sample | Subject commercial | **PRESERVE / HOLD** | Keep broad Science owner; specialist Chemistry and Physics remain separate. |
| MHF4U / Advanced Functions | `/en/subjects/math/grade-12-advanced-functions-mhf4u` | No direct English GSC row in the current sample | Course-specific commercial | **PRESERVE** | Dedicated owner already exists in sitemap. Do not create a second MHF4U URL. |
| MCR3U / Grade 11 Functions | `/en/subjects/math/grade-11-functions-mcr3u` | No direct English GSC row in the current sample | Course-specific commercial | **PRESERVE** | Dedicated owner already exists. |
| SCH3U / SCH4U senior Chemistry | `/en/subjects/chemistry/senior-chemistry-sch3u-sch4u` | No direct course-code query in current sample | Course-specific commercial | **PRESERVE** | Existing dedicated owner already covers senior Chemistry intent. |
| Homework Help | `/en/services/homework-help` | No direct current local query row | Service commercial | **PRESERVE** | Phase 3 canonical owner. No local duplicate page. |
| Exam Preparation | `/en/services/exam-preparation` | No direct current local query row | Service commercial | **PRESERVE** | Phase 3 canonical owner. No city-exam-prep duplicate page. |

## 3. Current first-party signal ranking

### Tier A — active watchlist

1. **Hamilton online tutoring** — 8 impressions in the 7-day sample.

This is the only Ontario local cluster currently strong enough to deserve an active watchlist. It does **not** yet justify a new page because the correct owner already exists.

### Tier B — weak signal

1. **Milton online tutoring** — 1 impression.
2. **Chemistry tutoring** — 1 Canadian impression, currently observed against the homepage rather than the intended Chemistry owner.

Action: monitor; no architecture change.

### Tier C — preserve without expansion

Ontario, Toronto, Math, English, French, Science, course-code and service owners remain strategically important, but the current 7-day GSC sample does not support additional page creation or large content expansion.

## 4. SERP corroboration — not a substitute for GSC

Live SERP research on 2026-09-23 confirms that the following intents are commercially established:

- Milton tutoring pages commonly combine local relevance, Ontario curriculum, subject breadth and Grades 1–12.
- Ontario Math pages commonly use grade/course-code depth through MCR3U, MHF4U, MCV4U and related pathways.
- Ontario Chemistry competitors commonly expose SCH3U/SCH4U detail.
- MHF4U has a distinct course-level search-result pattern, supporting the existing dedicated SPM course owner.

Observed examples included Tutor Scholar / ICAN Education for Milton, TutorShark for Ontario Math/Chemistry, and Evolve Learning for MHF4U. These findings validate intent structure only; they do not establish SPM demand volume.

## 5. Promotion thresholds

These are **internal operating thresholds**, not universal SEO rules.

### A. Optimize an existing local owner

Promote from WATCHLIST to optimization review when any of the following occurs over a rolling 56-day period:

- the cluster reaches **25+ impressions** and persists across at least **4 distinct weeks**; or
- the cluster records **3+ organic clicks**; or
- impressions show a clear multi-week acceleration and the current owner has a documented snippet/content gap.

A content patch still requires owner-page QA and a no-cannibalization check.

### B. Consider a new page

A new page becomes only a **CREATE CANDIDATE** when all conditions are met:

1. **50+ impressions over 56 days** for a coherent distinct-intent cluster, or equivalent repeated click evidence;
2. the intent is materially different from every existing owner;
3. the SERP consistently rewards that distinct page type;
4. no current owner can satisfy the intent through a normal optimization;
5. cannibalization review is PASS;
6. the page has a direct conversion path to trial registration.

No page should be created solely because a city/subject keyword exists in a keyword tool.

## 6. Immediate Phase 4.2 inputs

The next architecture / owner-map step should begin with:

- **Hamilton:** keep the existing owner; mark as the first Ontario local optimization watchlist candidate.
- **Milton:** preserve, collect more data.
- **Toronto:** preserve, collect more data.
- **Chemistry generic query:** map the intended owner to `/en/subjects/chemistry`; monitor whether Google continues surfacing the homepage.
- **Math / French / Science / course codes / services:** preserve the current Phase 3 owner map and explicitly block duplicates.

## 7. Conclusion

**Phase 4.1 has enough evidence to define the owner/demand policy, but not enough history to justify new local pages.**

The current correct strategy is to preserve the established architecture, watch Hamilton closely, monitor the Chemistry owner mismatch, and wait for the 56-day GSC window before promoting any thin local cluster into a material content expansion or new-page proposal.
