# Phase 6.1 — Topical Authority Map

**Project:** Success Path Mentors  
**Date:** 2026-09-23  
**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Issue:** #73  
**Status:** PASS — TOPICAL AUTHORITY MAP ESTABLISHED

## 1. Purpose

Phase 6.1 builds the topical universe around the canonical owners frozen in Phase 6.0.

The operating rule remains:

> Expand authority before expanding URL count.

This phase is taxonomy, ownership and opportunity mapping only. It does not approve a new URL and introduces no runtime, route, canonical, metadata, H1, CTA or page-content change.

Any supporting topic that is not already an owner must move through Phase 6.2 search-demand validation before Phase 6.4 can consider a `CREATE` decision.

## 2. Baseline and evidence state

The production measurement snapshot remains immature:

- GSC history: 7 days;
- GA4 history: 1 day;
- 110 GSC impressions;
- 0 clicks;
- weighted average position: 11.85;
- no mature organic conversion sample.

Therefore Phase 6.1 uses current first-party signals to protect ownership boundaries and seed discovery, not to infer broad winners or to justify speculative page creation.

Phase 5.8 remains active in parallel.

## 3. Governing owner precedence

The canonical owner hierarchy remains:

**Course / named course → Service → Subject → Curriculum → Generic Location → Homepage for brand**

Examples:

- `MHF4U exam prep` → MHF4U course owner, not Exam Preparation;
- `math exam prep` → Exam Preparation service, not Math subject;
- `math homework help` → Homework Help service, not Math subject;
- `chemistry tutoring` → Chemistry subject owner, not Homepage or a generic city owner;
- `Ontario curriculum tutoring` → Ontario Curriculum owner;
- `online tutoring Hamilton` → Hamilton generic location owner;
- `Hamilton math tutoring` does **not** automatically justify a Hamilton+Math doorway URL.

## 4. Classification model

Every topical node is assigned one of the following structural states:

### EXISTING OWNER
An indexable canonical owner already exists for the intent.

Action: preserve and strengthen authority around that owner.

### EXISTING SUPPORT NODE
The topic is already represented inside an existing owner as a pathway, strand, section or content family.

Action: keep it under the current owner unless Phase 6.2 later proves materially distinct search intent.

### EXISTING COURSE OWNER
A named Ontario course/code owner already exists.

Action: preserve it as the canonical measurement target for explicit course-code intent.

### SUPPORTING-TOPIC CANDIDATE
The topic is useful for authority or may satisfy an information/support need, but taxonomy alone does not prove it deserves a page.

Action: send to Phase 6.2 for first-party demand, intent and commercial-value validation.

### HOLD
The node is intentionally protected or evidence is too thin.

Action: monitor; do not alter or expand now.

### REJECT
The proposed node would create a duplicate, doorway pattern, ownership conflict or unjustified URL.

Action: do not create under the current evidence state.

## 5. Math authority cluster

### Pillar owner

`/en/subjects/math`

The repository already contains eight structured math pathways:

1. Basics and Operations;
2. Fractions and Rational Numbers;
3. Algebra and Equations;
4. Functions;
5. Geometry and Trigonometry;
6. Statistics and Probability;
7. Advanced Mathematics and Pre-Calculus;
8. Financial Literacy.

These are treated as **EXISTING SUPPORT NODES**, not eight automatic new-page candidates.

### Ontario named-course owners

The existing course owners remain:

- `/en/subjects/math/grade-9-math-mth1w`;
- `/en/subjects/math/grade-10-math-mpm2d`;
- `/en/subjects/math/grade-11-functions-mcr3u`;
- `/en/subjects/math/grade-12-advanced-functions-mhf4u`;
- `/en/subjects/math/grade-12-calculus-vectors-mcv4u`;
- `/en/subjects/math/grade-12-data-management-mdm4u`.

Boundary examples:

- generic `functions tutoring` remains under Math;
- `MCR3U tutor` or `MHF4U tutor` belongs to the named course owner;
- `math homework help` belongs to Homework Help;
- `MHF4U homework help` belongs to the MHF4U course owner;
- `math exam prep` belongs to Exam Preparation;
- `MHF4U exam prep` belongs to the MHF4U owner.

## 6. English authority cluster

### Pillar owner

`/en/subjects/english`

The repository already defines eleven approved English strands:

1. Foundational Reading;
2. Grammar and Language Conventions;
3. Literature and Literary Analysis;
4. Reading Comprehension;
5. Reading Fluency;
6. Speaking and Listening;
7. Vocabulary and Word Study;
8. Academic Skills and Assignments;
9. Writing;
10. Assessment and Test Preparation;
11. Cross-Curricular Academic Support.

All remain under the English owner in Phase 6.1.

High-value discovery families for Phase 6.2 include:

- phonics / decoding / spelling / syllabication;
- reading comprehension;
- writing;
- vocabulary / morphology / word study.

This is a discovery queue, not a page-creation approval.

Boundary rules:

- explicit homework-help intent belongs to Homework Help;
- explicit exam-preparation intent belongs to Exam Preparation;
- cross-curricular English support must not blur Math, Science or specialist subject ownership.

## 7. Science authority cluster

### Broad owner

`/en/subjects/general-science`

The repository defines four approved broad-science strands:

- Earth and Space Science;
- Life Science;
- Scientific Inquiry and Laboratory Skills;
- Structures and Engineering.

These are existing support nodes.

### Specialist owners

Chemistry:

`/en/subjects/chemistry`

Physics:

`/en/subjects/physics`

Explicit Chemistry or Physics intent outranks the broad General Science owner.

### Chemistry authority depth

The repository already contains sixteen approved chemistry strands spanning:

- atomic structure and periodicity;
- bonding and molecular structure;
- nomenclature and formulas;
- reactions and equations;
- stoichiometry;
- states of matter and gases;
- solutions and solubility;
- acids, bases and aqueous equilibria;
- chemical equilibrium;
- kinetics;
- thermochemistry;
- organic chemistry;
- redox and electrochemistry;
- nuclear chemistry;
- matter and chemical properties;
- integrated chemistry review.

This means Phase 6 does not have a topical-coverage shortage that requires immediate strand URLs. Phase 6.2 must first identify which families, if any, have distinct persistent demand.

The current Chemistry owner mismatch remains only an early monitor: one wrong-owner impression to the Homepage. No redirect, merge or structural change is justified.

### Ontario Chemistry / Physics course owners

- `/en/subjects/chemistry/senior-chemistry-sch3u-sch4u`;
- `/en/subjects/physics/senior-physics-sph3u-sph4u`.

These stay frozen as named-course owners.

The observed Madison science mismatch remains a monitoring signal only. A Madison+Science doorway page is explicitly rejected.

## 8. French authority cluster

### Pillar owner

`/en/subjects/french`

The existing owner already covers:

- Grades 1–12 French tutoring;
- French Immersion;
- Extended French;
- Core French;
- reading;
- grammar;
- writing;
- oral communication;
- homework and school assignments.

Phase 6.1 classifies these as existing support nodes under the French owner.

French Immersion is a useful Phase 6.2 search-demand seed because it is a distinct parent-recognizable programme term, but it is not a separate page approval in 6.1.

Explicit `French homework help` remains service-owned by Homework Help under the owner-precedence rule.

## 9. Ontario Curriculum authority cluster

### Pillar owner

`/en/curriculum/ontario`

Supporting-topic candidates include:

- grade expectations and curriculum-aligned support;
- secondary pathways;
- course selection and course-code discovery;
- curriculum context around school assessments.

Boundary rule:

- informational Ontario pathway context may sit under the curriculum owner;
- explicit course codes belong to named course owners;
- transactional provincial-assessment preparation belongs to Exam Preparation unless the intent is purely informational curriculum context.

No additional Ontario curriculum URL is approved in 6.1.

## 10. Exam Preparation authority cluster

### Pillar owner

`/en/services/exam-preparation`

Supporting-topic candidates for 6.2 include:

- study plans;
- review schedules;
- practice strategies;
- response planning;
- test-taking strategies;
- provincial assessment preparation where the intent is transactional support.

Boundary rules:

- `math exam prep`, `English exam prep`, `science exam prep` remain service-owned;
- explicit named-course exam intent, e.g. `MHF4U exam prep`, moves to the named course owner;
- no duplicate `course + exam-prep` URL should be created.

## 11. Homework Help authority cluster

### Pillar owner

`/en/services/homework-help`

Supporting-topic candidates for 6.2 include:

- assignment planning;
- identifying missing concepts;
- homework routines;
- multi-subject homework support;
- organizing school assignments.

Boundary rules:

- generic subject-modified homework intent remains service-owned, e.g. `math homework help`;
- explicit course-code homework intent moves to the named course owner;
- no duplicate subject-homework or course-homework route should be created from taxonomy alone.

## 12. Local-intent boundary

Generic local tutoring intent remains with existing location owners.

Phase 6.1 explicitly rejects automatic cross-product URLs such as:

- Hamilton + Math;
- Toronto + French;
- Hamilton + MHF4U;
- city + Homework Help;
- city + Exam Preparation.

A future local-topic page could only be reconsidered if Phase 6.2/6.4 establishes materially distinct demand, SERP support, no cannibalization and conversion value.

## 13. EXP-002 protection

British Columbia remains a protected active experiment on:

`/en/locations/canada/british-columbia`

EXP-002 started on 2026-09-23.

Scheduled checkpoints remain:

- 14-day monitor: 2026-10-07;
- 28-day + ≥100 relevant impressions: 2026-10-21;
- 56-day scale gate: 2026-11-18.

Phase 6.1 may map BC context but must not change BC title, metadata, owner or experiment content before the scheduled readout unless a hard factual/technical regression appears.

## 14. Phase 6.2 seed groups

Phase 6.2 should test demand around the mapped universe rather than invent a separate keyword universe.

Primary seed groups include:

### Math
- algebra;
- fractions;
- functions;
- geometry/trigonometry;
- statistics/probability;
- course-code families.

### English
- phonics / decoding / spelling;
- reading comprehension;
- writing;
- vocabulary;
- grammar.

### Science
- chemistry topic families;
- general science strands;
- explicit Chemistry vs broad Science owner signals;
- Ontario SCH/SPH course codes.

### French
- French Immersion;
- Core French;
- Extended French;
- reading/writing/oral support.

### Service / Curriculum
- Ontario grade/curriculum support;
- Ontario pathway/course-selection questions;
- exam strategy and review planning;
- homework planning / assignment support.

Phase 6.2 must score these against actual first-party query evidence, owner fit, commercial intent and cannibalization risk.

## 15. Dashboard control

The production SEO dashboard now includes:

`Phase6_Topical_Authority_Map`

The control view records:

- cluster;
- topic/query family;
- intended owner;
- node type;
- current surface;
- current evidence;
- Phase 6.1 decision;
- boundary / next step.

It explicitly marks topical classification as non-equivalent to a new-page decision.

## 16. New-URL gate carried forward

A topical candidate may only become a page candidate after the existing Phase 6 gate is satisfied:

**Demand + Unique Intent + Existing Owner Cannot Satisfy + No Cannibalization + Conversion Value**

Default actions remain:

- optimize existing owner;
- deepen existing owner;
- strengthen internal links;
- hold;
- reject.

`CREATE` remains exceptional rather than default.

## 17. Phase 6.1 decision

**PASS — TOPICAL AUTHORITY MAP ESTABLISHED.**

The site already has substantial structured topical coverage in Math, English, General Science and Chemistry plus established specialist, service, curriculum and Ontario course owners.

The next job is not to manufacture more URLs. It is to test the mapped families against real search demand.

**Next stage: Phase 6.2 — Search Demand Expansion.**
