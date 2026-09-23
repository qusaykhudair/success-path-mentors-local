# Phase 6.4 — Evidence-Based New Page Gate

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Baseline:** `main @ 1cb9cb6c3eb8a107e603aad8bd1651e9338ea0db`  
**Issue:** #79  
**Status:** PASS — NEW-PAGE GATE ENFORCED / NO CREATE APPROVAL

## 1. Purpose

Phase 6.4 is the control point that prevents topical mapping, isolated impressions or keyword variants from becoming speculative URLs.

The operating rule is:

> A topic may be useful, commercially relevant or structurally interesting without deserving a new indexable page.

Phase 6.4 converts the Phase 6.1 topical map, Phase 6.2 first-party demand map and Phase 6.3 cluster architecture into one of five allowed decisions:

- `CREATE`;
- `OPTIMIZE EXISTING`;
- `MERGE`;
- `HOLD`;
- `REJECT`.

This phase does not itself create, rewrite, merge or redirect any production page.

## 2. Evidence state

The production evidence remains immature:

- GSC history: 7 days;
- GSC clicks: 0;
- GA4 organic conversion evidence remains too thin for expansion decisions;
- Phase 5.8 remains open as the mature 56-day scale gate;
- British Columbia EXP-002 is live and protected.

Therefore Phase 6.4 may reject unsafe ideas, preserve existing owners and define future promotion conditions, but it must not manufacture a CREATE decision from the current sample.

## 3. Governing owner hierarchy

The frozen owner precedence remains:

**Course / named course → Service → Subject → Curriculum → Generic Location → Homepage for brand**

A new page cannot bypass a stronger existing owner merely because a query contains another modifier.

Examples:

- `MHF4U homework help` remains course-owned;
- `math homework help` remains Homework Help-owned;
- `chemistry tutoring` remains Chemistry-owned;
- `Ontario curriculum tutoring` remains Ontario Curriculum-owned;
- `online tutoring Hamilton` remains Hamilton-location-owned;
- `Hamilton chemistry tutoring` does not automatically create a Hamilton + Chemistry owner.

## 4. CREATE gate

A proposed new URL may receive `CREATE` only when every condition below passes.

### Gate A — Demand

Normally one of the following must be present:

- at least **50 coherent impressions over a rolling 56-day window**; or
- equivalent repeated organic-click evidence that demonstrates a real search need.

A short spike on one date is not enough.

### Gate B — Materially unique intent

The candidate must solve a user need that is meaningfully different from every existing owner.

A keyword variation is not automatically unique intent.

### Gate C — Distinct page type supported by search results

Where relevant, the result landscape must consistently support a separate page type for the proposed intent rather than simply another variation of the existing owner.

### Gate D — Existing owner insufficiency

The nearest existing owner must be unable to satisfy the intent through a normal content, internal-link or snippet optimization.

If an existing page can satisfy the need, the decision is not `CREATE`.

### Gate E — Cannibalization PASS

The new page must not create a second owner for the same coherent intent.

The mature cannibalization review remains tied to the rolling 56-day evidence model already established in Phase 4.2.

### Gate F — Conversion value

The proposed page must have a credible path to the existing trial / registration funnel and a clear business purpose.

### Gate G — No stronger owner bypass

A service, subject, course or curriculum owner with stronger precedence cannot be bypassed merely to create a location-modified or keyword-modified page.

Failure of any required gate means `CREATE` is not permitted.

## 5. British Columbia curriculum

Owner:

`/en/locations/canada/british-columbia`

Current evidence:

- 7 impressions;
- 7 active dates;
- correct current owner;
- EXP-002 live.

Gate outcome:

- Demand: FAIL for a new URL;
- Unique intent: already represented;
- Existing-owner sufficiency: PASS;
- Cannibalization safety: preserve current owner;
- Conversion value: existing flow already available.

Decision:

**HOLD**

Reason:

The correct owner already exists and is under active measurement. No additional BC page or materially different treatment should be introduced during the experiment window absent a hard regression.

## 6. Arabic advanced mathematics

Owner:

`/ar/subjects/math/advanced-precalculus`

Current evidence:

- 5 impressions;
- 2 active dates;
- correct existing owner.

Gate outcome:

- Demand: too small for a new URL;
- Unique intent: real, but already owned;
- Existing owner: sufficient;
- Separate page type: not proven;
- Cannibalization: duplicate route would be unnecessary.

Decision:

**OPTIMIZE EXISTING**

This means the existing owner is the correct future optimization surface if stronger evidence appears. It does not authorize an immediate patch from five impressions.

No duplicate English route or second Arabic route should be created from this signal.

## 7. Repeated generic local demand

### Hamilton

Evidence:

- 8 impressions;
- 6 active dates;
- correct existing Hamilton owner.

Decision:

**OPTIMIZE EXISTING — ROUTE TO 6.5**

No second Hamilton URL is needed.

### Alexandria

Evidence:

- 10 impressions;
- 5 active dates;
- correct existing Alexandria owner.

Decision:

**OPTIMIZE EXISTING — ROUTE TO 6.5**

This is currently the strongest repeated US local family, but it still does not justify city-subject/service variants.

### Naperville

Evidence:

- 6 impressions;
- 5 active dates;
- correct existing owner.

Decision:

**OPTIMIZE EXISTING — ROUTE TO 6.5**

### Cedar Rapids

Evidence:

- 5 impressions;
- 5 active dates;
- correct existing owner.

Decision:

**OPTIMIZE EXISTING — ROUTE TO 6.5**

For all four families, `OPTIMIZE EXISTING` is an architecture decision, not an immediate rewrite authorization. Material local changes still wait for the rolling 56-day optimization threshold or stronger click/acceleration evidence.

## 8. New Orleans

Evidence:

- 9 impressions;
- concentrated on one date.

Current owner already exists and matches the generic local intent.

Decision:

**HOLD**

The current pattern lacks persistence. A one-day concentration should not trigger a material page change or new URL.

## 9. Porter, Texas

Observed pattern:

`online tutoring porter, tx`

Current evidence:

- 3 impressions;
- 3 dates;
- current broad Texas owner.

Potential issue:

A future mature signal could eventually test whether Porter deserves its own generic location owner.

Current gate outcome:

- 56-day demand threshold: FAIL;
- unique city intent: not yet proven;
- separate page type: not established;
- current state owner can safely carry the thin signal;
- conversion value is only theoretical at this point.

Decision:

**HOLD**

No Porter page is approved.

## 10. Chemistry tutoring

Intended owner:

`/en/subjects/chemistry`

Current evidence:

- one impression;
- one date;
- Homepage surfaced instead of the intended Chemistry owner.

Gate outcome:

The problem is an early owner-signal mismatch, not a missing page.

Decision:

**OPTIMIZE EXISTING**

The Chemistry page remains the intended owner.

No new Chemistry page, redirect or merge is approved.

Signal-strengthening work is only considered if the mismatch reaches the existing owner-review threshold and mature cannibalization evidence later supports action.

## 11. Madison + Science

Observed patterns:

- `madison wi science tutoring`;
- `science tutoring madison wi`.

Current evidence:

- 2 impressions total;
- 1 active date;
- Madison generic location page surfaced;
- intended explicit science owner is General Science.

Gate outcome:

- Demand: FAIL;
- city + subject unique intent: not demonstrated;
- existing subject owner: sufficient;
- cannibalization risk: high if a Madison + Science page is created;
- conversion path would duplicate existing owners.

Decision:

**REJECT**

Do not create a Madison + Science doorway page.

If the mismatch persists, reinforce General Science ownership instead.

## 12. Madison study skills

Evidence:

- 1 impression;
- 1 date;
- owner need is unresolved.

Decision:

**HOLD**

One impression is insufficient to define a new intent owner or a new service page.

## 13. English support-topic candidates

Examples include:

- phonics / decoding / spelling;
- reading comprehension;
- reading fluency;
- grammar;
- vocabulary;
- writing;
- speaking/listening;
- literature analysis.

Current first-party support-topic demand:

**0 observed impressions in the current window.**

The existing English pillar can currently satisfy these topic families as sections/supporting content.

Decision:

**HOLD**

No standalone phonics, reading-comprehension, writing or grammar page is approved from taxonomy alone.

## 14. French support-topic candidates

Examples include:

- French Immersion;
- Extended French;
- Core French;
- reading;
- grammar;
- writing;
- oral communication.

Current first-party support-topic demand:

**0 observed impressions in the current window.**

Decision:

**HOLD**

Keep one French authority hub until distinct first-party search demand proves an independent owner is necessary.

## 15. Homework Help subtopics and variants

Potential variants include:

- math homework help;
- French homework help;
- city-specific homework help;
- course-specific homework pages.

Current architecture already resolves these intents:

- broad subject + homework modifier → Homework Help;
- exact named course + homework modifier → named course owner.

Current first-party support-topic demand is zero in the current window.

Decision:

**REJECT** for duplicate subject-homework, city-homework and course-homework pages.

The existing Homework Help and course owners are sufficient.

## 16. Exam Preparation subtopics and variants

Potential variants include:

- math exam prep;
- chemistry exam prep;
- city-specific exam prep;
- MHF4U / SCH4U / SPH4U exam-prep pages.

Current architecture already resolves these intents:

- generic/subject exam intent → Exam Preparation;
- exact course-code exam intent → named course owner.

Current first-party support-topic demand is zero in the current window.

Decision:

**REJECT** for duplicate subject/course/city exam-prep pages.

## 17. Additional Ontario course-code pages

Current named-course owners already exist for the priority course set:

- MTH1W;
- MPM2D;
- MCR3U;
- MHF4U;
- MCV4U;
- MDM4U;
- SCH3U / SCH4U;
- SPH3U / SPH4U.

Current evidence does not reveal mature new course-code demand outside the existing owner set.

Decision:

**HOLD**

Do not add speculative course pages without a distinct observed course intent and the full CREATE gate.

## 18. City + Subject / Course / Service patterns

Examples of blocked patterns include:

- `/hamilton/math`;
- `/toronto/french`;
- `/madison/science`;
- `/milton/mhf4u`;
- `/hamilton/homework-help`;
- `/alexandria/exam-preparation`.

Current evidence consists only of isolated or thin modifier signals.

The stronger owner model already covers the user need through topic/course/service owners plus generic location owners.

Decision:

**REJECT**

These patterns would introduce doorway-like duplication and ownership conflict under the current evidence state.

## 19. MERGE review

The current evidence does not show a mature duplicate-intent pattern that meets the established cannibalization candidate gate:

- same coherent intent on at least 2 indexable URLs;
- across at least 3 distinct weeks;
- with the secondary URL receiving at least 20% of cluster impressions or at least one organic click.

Decision:

**NO MERGE CANDIDATE**

No redirect/merge action is approved in Phase 6.4.

## 20. Current decision matrix

| Candidate / family | Decision | Reason |
|---|---|---|
| British Columbia curriculum | HOLD | Correct owner + protected EXP-002 |
| Arabic advanced mathematics | OPTIMIZE EXISTING | Correct existing owner; no duplicate needed |
| Hamilton generic tutoring | OPTIMIZE EXISTING | Existing local owner; route to 6.5 |
| Alexandria generic tutoring | OPTIMIZE EXISTING | Existing local owner; route to 6.5 |
| Naperville generic tutoring | OPTIMIZE EXISTING | Existing local owner; route to 6.5 |
| Cedar Rapids generic tutoring | OPTIMIZE EXISTING | Existing local owner; route to 6.5 |
| New Orleans generic tutoring | HOLD | One-date concentration |
| Porter, Texas standalone | HOLD | 3 impressions; insufficient new-location evidence |
| Chemistry tutoring | OPTIMIZE EXISTING | Existing Chemistry owner; early mismatch only |
| Madison + Science | REJECT | City-subject conflict / doorway risk |
| Madison study skills | HOLD | 1 impression; unresolved intent |
| English support topics | HOLD | 0 current first-party support-topic demand |
| French support topics | HOLD | 0 current first-party support-topic demand |
| Homework Help variants | REJECT | Existing service/course owners already resolve intent |
| Exam Preparation variants | REJECT | Existing service/course owners already resolve intent |
| Additional Ontario course pages | HOLD | No new distinct course demand observed |
| City + subject/course/service patterns | REJECT | Stronger owners exist; conflict/doorway risk |
| MERGE candidates | NONE | Mature cannibalization threshold not met |
| CREATE candidates | NONE | No proposal passes the full CREATE gate |

## 21. What `OPTIMIZE EXISTING` means in this phase

`OPTIMIZE EXISTING` does not mean “edit immediately.”

It means:

1. the current canonical owner is structurally correct;
2. a new URL is unnecessary;
3. if evidence matures, the existing owner is the surface to improve;
4. any content/title/meta/internal-link patch still requires its own evidence and QA gate.

This distinction is important because the current data window remains too short for broad rewrites.

## 22. Dashboard control

The production SEO dashboard now includes:

`Phase6_New_Page_Gate`

The tab records:

- candidate/intent family;
- current evidence;
- demand gate;
- unique-intent gate;
- existing-owner sufficiency;
- SERP/page-type gate;
- cannibalization gate;
- conversion value;
- Phase 6.4 decision;
- next action/boundary.

## 23. Change classification

Phase 6.4 repository changes are documentation/control only.

No production runtime behavior changes.

No route creation.

No title/meta changes.

No H1 changes.

No canonical changes.

No CTA changes.

No redirect or merge.

## 24. Final decision

**PHASE 6.4 — PASS / CLOSED**

Current batch outcome:

- `CREATE`: **0**;
- `MERGE`: **0**;
- `OPTIMIZE EXISTING`: Arabic advanced mathematics, Hamilton, Alexandria, Naperville, Cedar Rapids, Chemistry;
- `HOLD`: British Columbia, New Orleans, Porter TX, Madison study skills, English/French support topics, additional Ontario course pages;
- `REJECT`: Madison + Science, duplicate Homework Help variants, duplicate Exam Preparation variants, city + subject/course/service doorway patterns.

This is the correct outcome for the current evidence state: preserve and strengthen proven owners instead of increasing URL count.

Next:

**Phase 6.5 — Local Authority Expansion**
