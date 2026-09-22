# Phase 4.2 — Query Owner Map & Cannibalization Gate

**Project:** Success Path Mentors  
**Baseline before this document:** `main @ a6a98c4ff24cad195e5a8548b9e46edb2d0a2f6c`  
**Research date:** 2026-09-23  
**Primary inputs:** Phase 4.1 first-party GSC demand map + current production routing/sitemap architecture  
**Status:** OWNER MAP LOCKED — no new route is approved by this document.

## 1. Purpose

Phase 4.2 converts the Phase 4.1 demand map into a single-owner architecture so Local, Subject, Course, Curriculum and Service pages do not compete for the same search intent.

The rule is simple:

> **One coherent search intent → one intended indexable owner.**

Supporting pages may mention the same geography, subject or service and may link to the owner, but they must not be optimized as a second exact-match owner for the same intent.

## 2. Owner classes

| Owner class | Purpose | Current examples |
|---|---|---|
| **Location owner** | Generic tutoring demand where geography is the main intent | `/en/locations/canada/ontario`, `/en/locations/canada/ontario/hamilton`, `/en/locations/canada/ontario/milton`, `/en/locations/canada/ontario/toronto` |
| **Curriculum owner** | Explicit Ontario curriculum / curriculum-aligned tutoring intent | `/en/curriculum/ontario` |
| **Subject owner** | Broad subject tutoring intent, including Ontario/local availability modifiers | `/en/subjects/math`, `/en/subjects/english`, `/en/subjects/french`, `/en/subjects/general-science`, `/en/subjects/chemistry`, `/en/subjects/physics` |
| **Course owner** | Named grade/course-code intent that is materially narrower than the broad subject | `/en/subjects/math/grade-12-advanced-functions-mhf4u`, `/en/subjects/math/grade-12-calculus-vectors-mcv4u`, `/en/subjects/math/grade-11-functions-mcr3u`, `/en/subjects/math/grade-12-data-management-mdm4u`, `/en/subjects/math/grade-9-math-mth1w`, `/en/subjects/math/grade-10-math-mpm2d`, `/en/subjects/chemistry/senior-chemistry-sch3u-sch4u`, `/en/subjects/physics/senior-physics-sph3u-sph4u` |
| **Service owner** | Explicit service intent independent of a single subject | `/en/services/homework-help`, `/en/services/exam-preparation` |
| **Homepage** | Brand / broad company discovery only | `/en` |

## 3. Intent resolution precedence

When a query contains multiple modifiers, use the most specific educational intent that already has a dedicated owner.

### Priority 1 — Course code / named course

A recognized course code or named course wins over geography and broad subject modifiers.

Examples:

| Query pattern | Intended owner |
|---|---|
| `MHF4U tutor` | `/en/subjects/math/grade-12-advanced-functions-mhf4u` |
| `MHF4U tutor Ontario` | `/en/subjects/math/grade-12-advanced-functions-mhf4u` |
| `MHF4U tutor Milton` | `/en/subjects/math/grade-12-advanced-functions-mhf4u` |
| `SCH4U chemistry tutoring Ontario` | `/en/subjects/chemistry/senior-chemistry-sch3u-sch4u` |

**Blocked:** creating `/milton/mhf4u`, `/ontario/mhf4u`, or a second MHF4U owner.

### Priority 2 — Explicit service

Homework Help and Exam Preparation keep their dedicated service owners even when Ontario or a city is used as a modifier.

| Query pattern | Intended owner |
|---|---|
| `homework help Ontario` | `/en/services/homework-help` |
| `homework help Milton` | `/en/services/homework-help` |
| `exam preparation Ontario` | `/en/services/exam-preparation` |
| `exam prep Toronto` | `/en/services/exam-preparation` |

**Blocked:** city-specific Homework Help or Exam Preparation routes unless future evidence proves a materially distinct intent and the new-page gate passes.

### Priority 3 — Explicit subject

Broad subject pages own subject tutoring intent. Geography is supporting context, not a reason to create a city-subject page.

| Query pattern | Intended owner |
|---|---|
| `online math tutor Ontario` | `/en/subjects/math` |
| `math tutor Milton` | `/en/subjects/math` |
| `English tutoring Toronto` | `/en/subjects/english` |
| `French tutor Ontario` | `/en/subjects/french` |
| `science tutor Milton` | `/en/subjects/general-science` unless the query clearly specifies Chemistry or Physics |
| `chemistry tutor Hamilton` | `/en/subjects/chemistry` |
| `physics tutoring Ontario` | `/en/subjects/physics` |

The shared `LocalAvailabilityBlock` on priority subject pages is supporting local relevance and links to Ontario/Milton/Toronto. It does **not** make those location pages duplicate subject owners.

**Blocked:** `/math-tutor-milton`, `/milton/math`, `/toronto/french-tutor`, `/hamilton/chemistry-tutor`, or equivalent city-subject doorway patterns.

### Priority 4 — Explicit curriculum

Queries whose central need is Ontario curriculum alignment belong to the curriculum owner.

| Query pattern | Intended owner |
|---|---|
| `Ontario curriculum tutoring` | `/en/curriculum/ontario` |
| `Ontario curriculum tutor online` | `/en/curriculum/ontario` |
| `Ontario curriculum tutoring Milton` | `/en/curriculum/ontario` |

Subject and location pages may link to the curriculum owner and mention alignment, but should not be re-titled as alternative Ontario Curriculum owners.

### Priority 5 — Generic geographic tutoring

Location pages own queries where the city/province itself is the main commercial modifier and no narrower subject/course/service intent is present.

| Query pattern | Intended owner | Current Phase 4.1 status |
|---|---|---|
| `online tutoring Hamilton ON` | `/en/locations/canada/ontario/hamilton` | WATCHLIST — 8 impressions / 0 clicks in current 7-day sample |
| `online tutoring Milton Ontario` | `/en/locations/canada/ontario/milton` | HOLD / PRESERVE — 1 impression / 0 clicks |
| `online tutoring Toronto` | `/en/locations/canada/ontario/toronto` | PRESERVE / HOLD — no current observed query row |
| `online tutoring Ontario` | `/en/locations/canada/ontario` | PRESERVE |

## 4. Canonical owner map for current Phase 4 priority intents

| Intent cluster | Intended owner | Competing URL that must not be promoted as a second owner | Decision |
|---|---|---|---|
| Generic Ontario tutoring | `/en/locations/canada/ontario` | Homepage / subject pages | **LOCK OWNER** |
| Generic Hamilton tutoring | `/en/locations/canada/ontario/hamilton` | Ontario hub / homepage | **LOCK OWNER — WATCHLIST** |
| Generic Milton tutoring | `/en/locations/canada/ontario/milton` | Ontario hub / homepage | **LOCK OWNER — HOLD** |
| Generic Toronto tutoring | `/en/locations/canada/ontario/toronto` | Ontario hub / homepage | **LOCK OWNER — HOLD** |
| Ontario curriculum | `/en/curriculum/ontario` | old English location-style curriculum path | **LOCK OWNER** |
| Math tutoring | `/en/subjects/math` | locations / homepage | **LOCK OWNER** |
| English tutoring | `/en/subjects/english` | locations / homepage | **LOCK OWNER** |
| French tutoring | `/en/subjects/french` | locations / French-language programme pages | **LOCK EN SUBJECT OWNER** |
| General Science tutoring | `/en/subjects/general-science` | Chemistry / Physics / locations | **LOCK BROAD SCIENCE OWNER** |
| Chemistry tutoring | `/en/subjects/chemistry` | homepage / General Science | **LOCK OWNER — MONITOR HOMEPAGE MISMATCH** |
| Physics tutoring | `/en/subjects/physics` | General Science / locations | **LOCK OWNER** |
| MHF4U | `/en/subjects/math/grade-12-advanced-functions-mhf4u` | Math hub / any city-course route | **LOCK COURSE OWNER** |
| MCV4U | `/en/subjects/math/grade-12-calculus-vectors-mcv4u` | Math hub / any city-course route | **LOCK COURSE OWNER** |
| MCR3U | `/en/subjects/math/grade-11-functions-mcr3u` | Math hub / any city-course route | **LOCK COURSE OWNER** |
| MDM4U | `/en/subjects/math/grade-12-data-management-mdm4u` | Math hub / any city-course route | **LOCK COURSE OWNER** |
| MTH1W | `/en/subjects/math/grade-9-math-mth1w` | Math hub / any city-course route | **LOCK COURSE OWNER** |
| MPM2D | `/en/subjects/math/grade-10-math-mpm2d` | Math hub / any city-course route | **LOCK COURSE OWNER** |
| SCH3U / SCH4U | `/en/subjects/chemistry/senior-chemistry-sch3u-sch4u` | Chemistry hub / city-course pages | **LOCK COURSE OWNER** |
| SPH3U / SPH4U | `/en/subjects/physics/senior-physics-sph3u-sph4u` | Physics hub / city-course pages | **LOCK COURSE OWNER** |
| Homework Help | `/en/services/homework-help` | location/service duplicates | **LOCK OWNER** |
| Exam Preparation | `/en/services/exam-preparation` | location/service duplicates | **LOCK OWNER** |

## 5. Current live mismatch to monitor

Phase 4.1 found one Canadian impression for the generic query `chemistry tutoring` where GSC surfaced the homepage rather than the intended Chemistry owner.

Current decision:

- **Do not redirect or de-index the homepage.**
- **Do not create another Chemistry page.**
- Keep `/en/subjects/chemistry` as the intended owner.
- Re-check the 56-day query-to-page distribution.
- If the mismatch persists, first strengthen internal links, anchors and owner signals toward the Chemistry page rather than changing architecture.

## 6. Cannibalization detection gate

Use a rolling 56-day GSC window once enough history exists.

A cluster becomes a **cannibalization review candidate** when:

1. the same coherent intent appears on **2 or more indexable URLs** across at least **3 distinct weeks**; and
2. the secondary URL receives either:
   - at least **20% of cluster impressions**, or
   - at least **1 organic click** for that intent; and
3. both URLs plausibly target the same user need rather than different stages or languages.

These are internal operating thresholds, not universal SEO rules.

### Review outcomes

- **NO CONFLICT:** one page is clearly primary and the other is incidental → monitor.
- **SIGNAL PATCH:** wrong/supporting page is surfacing → strengthen internal links, anchors, metadata boundaries and content hierarchy toward the intended owner.
- **MERGE / REDIRECT CANDIDATE:** two indexable pages materially duplicate the same intent → merge content and redirect only after technical review.
- **NEW OWNER CANDIDATE:** only when the Phase 4.1 creation gate is met and no existing owner can satisfy the intent.

## 7. Page-boundary rules

### Location pages

May:
- describe local online tutoring availability;
- list supported subjects at summary level;
- link to Subject, Course, Curriculum and Service owners.

Must not:
- use subject/course exact-match metadata as if they are specialist money pages;
- create deep MHF4U/SCH4U/etc. sections intended to outrank the dedicated course owners;
- imply a physical local centre unless factually true.

### Subject pages

May:
- mention Ontario, Milton, Toronto and online availability;
- link to location owners through the shared local block;
- link to relevant course pages.

Must not:
- generate separate city-subject URLs;
- turn the H1/title into a city-specific page unless architecture is formally changed after evidence.

### Course pages

May:
- state Ontario/course context and online availability;
- link upward to the broad subject and curriculum owner.

Must not:
- spawn province/city duplicates of the same course intent.

### Curriculum page

May:
- explain Ontario curriculum alignment and link to subjects/courses.

Must not:
- duplicate the full commercial proposition of every subject page.

### Service pages

May:
- mention Ontario/local availability and relevant subjects.

Must not:
- create city-service duplicates from local modifiers alone.

### Homepage

The homepage is not the intended SEO owner for non-brand Subject, Course, Service or Local queries. Incidental impressions are monitored and resolved through stronger owner signals if persistent.

## 8. Locale boundary

English French-tutoring intent belongs to `/en/subjects/french`.

French-language programme/content routes under `/fr/...` serve a different language/user-context layer. They should not be converted into English French-tutor substitutes. Hreflang/language intent is treated separately from English subject ownership.

## 9. New-page gate inherited from Phase 4.1

No new Local/Subject/Course/Service route is approved from this owner map.

A new page can become a **CREATE CANDIDATE** only when all Phase 4.1 conditions are met, including:

- sufficient persistent first-party demand over the 56-day window;
- materially distinct intent;
- SERP support for a distinct page type;
- current owner cannot satisfy the intent through normal optimization;
- cannibalization review = PASS;
- direct conversion path to trial registration.

## 10. Phase 4.2 decision

**PASS — the Query Owner Map and Cannibalization Gate are now defined.**

Immediate architecture decisions:

- preserve existing Ontario/Hamilton/Milton/Toronto owners;
- preserve Phase 3 Subject, Curriculum, Course and Service owners;
- block city-subject, city-course and city-service doorway expansion;
- treat `chemistry tutoring → homepage` as a monitored owner mismatch, not a routing change;
- use this document as the required gate before any Phase 4.3 page or internal-link optimization.
