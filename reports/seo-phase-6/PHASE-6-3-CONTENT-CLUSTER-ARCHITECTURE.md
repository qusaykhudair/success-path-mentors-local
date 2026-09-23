# Phase 6.3 — Content Cluster Architecture

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Baseline:** `main @ 243ba081f079f02b85dad34f2efb5eb53ee9c10e`  
**Issue:** #77  
**Status:** PASS — OWNER-SAFE CLUSTER ARCHITECTURE ESTABLISHED

## 1. Purpose

Phase 6.3 converts the Phase 6.1 topical authority map and Phase 6.2 first-party demand map into a practical cluster architecture.

The objective is not to multiply URLs. The objective is to make every topic, course, service and local signal reinforce the correct canonical owner.

The governing structure is:

**Pillar owner → supporting topic family → specialist/course/service owner when intent becomes explicit → contextual conversion CTA**

This phase is architecture and control only. It introduces no runtime, title/meta, H1, canonical, routing, CTA or page-content change.

No new URL is approved in Phase 6.3.

## 2. Inputs carried forward

### Phase 6.1

Phase 6.1 established the topical universe and the owner hierarchy:

**Course / named course → Service → Subject → Curriculum → Generic Location → Homepage for brand**

It also classified mapped nodes as existing owners, support nodes, existing course owners, supporting-topic candidates, holds or rejects.

### Phase 6.2

Phase 6.2 validated the map against the current short GSC window.

The current first-party demand truth remains:

- generic local tutoring is the dominant observed demand type;
- Arabic advanced mathematics has a small but correct existing-owner signal;
- Chemistry has an early homepage owner mismatch;
- Madison science has a thin location-vs-subject mismatch;
- English, French, service-support and Ontario course-code support families have no mature first-party demand yet;
- British Columbia remains a protected live experiment.

Therefore Phase 6.3 is designed to strengthen existing ownership rather than manufacture new pages.

## 3. Cluster architecture model

Each cluster is governed by five layers.

### Layer A — Pillar owner

The canonical page that owns the broad commercial or educational intent.

Examples:

- Math → `/en/subjects/math`
- English → `/en/subjects/english`
- General Science → `/en/subjects/general-science`
- Chemistry → `/en/subjects/chemistry`
- Physics → `/en/subjects/physics`
- French → `/en/subjects/french`
- Ontario Curriculum → `/en/curriculum/ontario`
- Exam Preparation → `/en/services/exam-preparation`
- Homework Help → `/en/services/homework-help`

### Layer B — Supporting topics

Subtopics, strands, skills or informational needs that strengthen topical depth inside the pillar unless later evidence proves they deserve an independent asset.

Examples:

- English phonics, reading comprehension, grammar and writing;
- Math algebra, functions, geometry and statistics;
- Science inquiry, life science and Earth/space science;
- French Immersion, Extended French and Core French;
- Exam study plans and test-taking strategy;
- Homework routines and assignment planning.

A supporting topic is not automatically a URL.

### Layer C — Stronger specialist / course / service owner

When query intent becomes explicit enough to map to a stronger owner, the stronger owner takes precedence.

Examples:

- `chemistry tutoring` → Chemistry;
- `SPH4U tutoring` → senior Physics course owner;
- `math homework help` → Homework Help;
- `MHF4U homework help` → MHF4U course owner;
- `math exam prep` → Exam Preparation;
- `SCH4U exam prep` → senior Chemistry course owner.

### Layer D — Contextual internal links

Internal links should help users and crawlers move from the broad topic to the stronger relevant owner without creating competing ownership signals.

### Layer E — Existing conversion path

The final conversion CTA belongs to the canonical destination owner and continues to use the existing booking / free-trial flow.

Supporting-topic sections do not receive separate duplicate funnels in Phase 6.3.

## 4. Math cluster

### Pillar

`/en/subjects/math`

### Supporting topic families

- basics and operations;
- fractions and rational numbers;
- algebra and equations;
- functions;
- geometry and trigonometry;
- statistics and probability;
- advanced mathematics / pre-calculus context;
- financial literacy.

### Named course owners

- MTH1W;
- MPM2D;
- MCR3U;
- MHF4U;
- MCV4U;
- MDM4U.

### Link architecture

Broad Math content may point to a named course owner where the context is explicitly about that course.

Named course owners may point back to Math for broad subject context.

### Service boundary

- `math homework help` → Homework Help;
- `math exam prep` → Exam Preparation;
- named course + homework/exam modifier → named course owner.

### CTA rule

Use the existing destination-owner free-trial / booking CTA.

### 6.3 decision

**ARCHITECTURE READY — NO NEW URL**

## 5. English cluster

### Pillar

`/en/subjects/english`

### Supporting topic families

- foundational reading / phonics / decoding / spelling / syllabication;
- reading comprehension;
- reading fluency;
- grammar and language conventions;
- vocabulary and word study;
- writing;
- speaking and listening;
- literature and literary analysis;
- academic skills and assignments.

### Link architecture

Supporting topics reinforce the English pillar.

Explicit homework intent moves to Homework Help.

Explicit test-preparation intent moves to Exam Preparation.

### Current evidence condition

Phase 6.2 observed no first-party support-topic impressions for these families in the current short window.

### 6.3 decision

**DISCOVERY CLUSTER — KEEP UNDER ENGLISH OWNER**

No standalone phonics, reading-comprehension or writing asset is approved from taxonomy alone.

## 6. General Science cluster

### Pillar

`/en/subjects/general-science`

### Supporting topic families

- Earth and space science;
- life science;
- scientific inquiry and laboratory skills;
- structures and engineering.

### Specialist owners

- Chemistry → `/en/subjects/chemistry`
- Physics → `/en/subjects/physics`

### Link architecture

Broad science intent remains with General Science.

Explicit Chemistry and Physics intent moves to specialist owners.

Specialist pages may link back to General Science when broader science context is useful.

### Madison boundary

The current Madison science signal must not create a Madison + Science doorway page.

If the signal persists, the architecture should reinforce General Science as the subject owner while preserving Madison as the generic local owner.

### 6.3 decision

**ARCHITECTURE READY / OWNER WATCH FOR MADISON**

## 7. Chemistry cluster

### Pillar

`/en/subjects/chemistry`

### Supporting topical depth

The current structured chemistry coverage includes major strands such as:

- atomic structure;
- bonding;
- chemical reactions;
- stoichiometry;
- equilibrium;
- acids and bases;
- kinetics;
- organic chemistry;
- electrochemistry;
- thermochemistry;
- related senior chemistry topics.

### Course owner

`/en/subjects/chemistry/senior-chemistry-sch3u-sch4u`

### Link architecture

Broad chemistry tutoring remains Chemistry-owned.

Explicit SCH3U/SCH4U intent goes to the course owner.

Generic chemistry homework or exam-prep intent can link to the appropriate service owner, but a named course modifier returns ownership to the course page.

### Owner mismatch

The single observed `chemistry tutoring` homepage impression remains an owner watch only.

### 6.3 decision

**PILLAR READY / OWNER MISMATCH MONITOR**

No redirect or merge action is justified.

## 8. Physics cluster

### Pillar

`/en/subjects/physics`

### Course owner

`/en/subjects/physics/senior-physics-sph3u-sph4u`

### Link architecture

Broad Physics intent remains on the Physics pillar.

SPH3U/SPH4U intent goes to the named course owner.

Generic homework and exam-prep intent may move to the appropriate service owner; explicit course-code intent remains course-owned.

### 6.3 decision

**ARCHITECTURE READY — NO NEW URL**

## 9. French cluster

### Pillar

`/en/subjects/french`

### Supporting topic families

- French Immersion;
- Extended French;
- Core French;
- reading;
- grammar;
- writing;
- oral communication.

### Link architecture

Program and skill topics remain under the French pillar.

Explicit homework-help intent moves to Homework Help.

Explicit exam-preparation intent moves to Exam Preparation unless a stronger named-course owner exists.

### Current evidence condition

Phase 6.2 observed no current first-party impressions for these support families.

### 6.3 decision

**DISCOVERY CLUSTER — KEEP ONE FRENCH AUTHORITY HUB**

## 10. Ontario Curriculum cluster

### Pillar

`/en/curriculum/ontario`

### Supporting topic families

- curriculum expectations;
- curriculum-aligned tutoring;
- grade and course pathway context;
- course-code discovery and navigation.

### Stronger owners

Exact course codes belong to the named course owners.

Subject-specific tutoring belongs to the subject owner.

Explicit exam-preparation intent belongs to Exam Preparation unless a named course owner is stronger.

### Link architecture

Ontario Curriculum should act as contextual curriculum authority and discovery support, not as a duplicate subject or course landing page.

### 6.3 decision

**ARCHITECTURE READY — CURRICULUM CONTEXT HUB**

## 11. Exam Preparation service cluster

### Pillar

`/en/services/exam-preparation`

### Supporting topic families

- study plans;
- review schedules;
- practice strategy;
- test-taking strategy;
- broad subject exam-prep intent.

### Link architecture

Subject owners may link to Exam Preparation where the user intent is explicitly exam-preparation focused.

Exam Preparation may link back to subject owners where subject context is useful.

Exact named-course exam intent belongs to the course owner.

### Examples

- `math exam prep` → Exam Preparation;
- `chemistry exam prep` → Exam Preparation;
- `MHF4U exam prep` → MHF4U;
- `SCH4U exam prep` → SCH3U/SCH4U owner;
- `SPH4U exam prep` → SPH3U/SPH4U owner.

### 6.3 decision

**SERVICE PILLAR — BOUNDARY LOCKED**

## 12. Homework Help service cluster

### Pillar

`/en/services/homework-help`

### Supporting topic families

- assignment planning;
- concept-gap support;
- homework routines;
- multi-subject homework support.

### Link architecture

Subject pages may link to Homework Help when the intent becomes explicitly homework focused.

Homework Help may link to subject owners for subject context.

Exact named-course homework intent belongs to the named course owner.

### Examples

- `math homework help` → Homework Help;
- `French homework help` → Homework Help;
- `MHF4U homework help` → MHF4U;
- `SCH4U homework help` → senior Chemistry owner.

### 6.3 decision

**SERVICE PILLAR — BOUNDARY LOCKED**

## 13. Arabic advanced mathematics cluster

### Current owner

`/ar/subjects/math/advanced-precalculus`

### Phase 6.2 evidence

The Arabic query family `الرياضيات المتقدمة` produced a small repeated signal on the correct existing owner.

### Architecture

Arabic advanced-math intent should reinforce the existing Arabic owner.

It must not be used to create a duplicate English route or a second Arabic route.

Contextual links may connect to relevant Arabic math or service surfaces only when the intent is explicit.

### 6.3 decision

**PROMOTED EXISTING-OWNER CLUSTER**

This promotion means architecture priority, not new-page approval.

## 14. Local-demand routing

Phase 6.2 identified repeated generic local families including Hamilton, Alexandria, Naperville, Cedar Rapids, Lexington, Omaha and Porter, Texas.

These signals do not become subject/service clusters in Phase 6.3.

They are routed to:

**Phase 6.5 — Local Authority Expansion**

Generic location owners may contextually link to relevant subject and service pillars.

Topic pillars may use a limited approved local-availability block where appropriate.

But the architecture explicitly rejects:

- city + subject doorway pages;
- city + course doorway pages;
- city + service doorway pages.

## 15. British Columbia protection

`/en/locations/canada/british-columbia` remains protected under EXP-002.

Phase 6.3 does not alter its title, metadata, content, owner, CTA or internal-link treatment.

Any future architecture change that would materially alter the experiment treatment must wait for the scheduled measurement checkpoints unless a hard regression is found.

## 16. Internal-link direction rules

### Rule 1 — Support topic → pillar

If a supporting topic has no independent owner, the topic should reinforce the nearest canonical pillar.

### Rule 2 — Pillar → stronger owner

A pillar may link to a stronger specialist, course or service owner when the surrounding context clearly expresses that stronger intent.

### Rule 3 — Stronger owner → broad context

Course, specialist or service owners may link back to a broader pillar where the link genuinely helps the user understand the wider subject or curriculum context.

### Rule 4 — Location is not a substitute for subject/service ownership

A generic location page can support local discovery, but it should not become the destination for explicit subject, course or service anchors when a stronger owner exists.

### Rule 5 — Avoid competing exact-match anchors

Internal links should not send the same exact intent repeatedly to multiple weaker owners.

The anchor should describe the destination intent and reinforce the canonical owner.

## 17. Anchor-intent examples

| Anchor intent | Destination owner |
|---|---|
| Math tutoring | Math pillar |
| MHF4U tutoring | MHF4U course owner |
| Math homework help | Homework Help |
| MHF4U homework help | MHF4U course owner |
| Chemistry tutoring | Chemistry pillar |
| SCH4U tutoring | senior Chemistry course owner |
| Science tutoring | General Science |
| Physics tutoring | Physics pillar |
| SPH4U tutoring | senior Physics course owner |
| French tutoring | French pillar |
| Ontario curriculum tutoring | Ontario Curriculum |
| Online tutoring Hamilton | Hamilton location owner |

## 18. CTA architecture

Phase 6.3 does not introduce a new funnel.

The CTA rule is:

**The canonical destination owner carries the existing booking / free-trial conversion path.**

Supporting sections should guide users toward the appropriate canonical owner or the existing conversion CTA without creating support-topic-specific duplicate funnels.

Any future CTA experiment belongs in the conversion / experiment framework and must be measured separately from cluster creation.

## 19. Phase 6.4 handoff

Phase 6.3 sends potential standalone assets to Phase 6.4 only when they can be tested against the new-page gate.

The required gate remains:

1. demonstrable demand;
2. materially unique intent;
3. existing owner cannot satisfy the intent normally;
4. cannibalization review passes;
5. conversion value is credible;
6. page type is supported by the search-result landscape where relevant;
7. no stronger existing owner is being bypassed.

Phase 6.4 decisions are limited to:

- `CREATE`;
- `OPTIMIZE EXISTING`;
- `MERGE`;
- `HOLD`;
- `REJECT`.

Taxonomy or cluster architecture alone cannot produce `CREATE`.

## 20. Dashboard control

The production SEO dashboard now includes:

`Phase6_Content_Cluster_Architecture`

The control tab records:

- cluster;
- pillar owner;
- supporting topic family;
- related stronger owners;
- link direction;
- anchor intent rule;
- CTA owner;
- Phase 6.3 state;
- Phase 6.4 boundary.

## 21. Change classification

Repository change in Phase 6.3 is documentation/control only.

No production runtime behavior changes.

No route changes.

No metadata changes.

No canonical changes.

No H1 changes.

No CTA changes.

No new URL creation.

## 22. Final decision

**PHASE 6.3 — PASS / CLOSED**

The site now has a documented cluster architecture that can support controlled authority growth without sacrificing query ownership.

Next:

**Phase 6.4 — Evidence-Based New Page Gate**
