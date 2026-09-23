# Facebook-to-Website Organic Social Strategy & UTM Plan

**Project:** Success Path Mentors  
**Domain:** `https://successpathmentors.net`  
**Purpose:** Controlled organic Facebook distribution to canonical SEO owners with measurable GA4 attribution.  
**Policy:** Organic social only; no fabricated engagement, no storefront/location implication, no duplicate SEO destination pages.  
**Reconciled:** September 23, 2026 against the Phase 4.8 owner/entity baseline.

---

## 1. UTM standard

Every Facebook link must use:

- `utm_source=facebook`
- `utm_medium=organic_social`
- `utm_campaign=<intent_cluster>`
- `utm_content=<unique_post_variant>`

`utm_content` is mandatory for Phase 4.9 so separate posts inside the same campaign can be measured independently.

Naming rules:

- lowercase only;
- underscores instead of spaces;
- no dates inside campaign names unless required for a one-off launch;
- one campaign family per canonical owner/intent cluster;
- one unique `utm_content` per post/creative variant.

Example:

`https://successpathmentors.net/en/locations/canada/ontario/hamilton?utm_source=facebook&utm_medium=organic_social&utm_campaign=hamilton_tutoring&utm_content=hamilton_parent_support_v1`

---

## 2. Canonical social destination matrix

| # | Topic / intent | Canonical owner | Activated UTM link | Recommended CTA |
|---|---|---|---|---|
| 1 | Brand / broad online tutoring | `/en` | `https://successpathmentors.net/en?utm_source=facebook&utm_medium=organic_social&utm_campaign=brand_tutoring&utm_content=page_profile_v1` | Explore one-to-one online tutoring for Grades 1–12 |
| 2 | Ontario Math | `/en/subjects/math` | `https://successpathmentors.net/en/subjects/math?utm_source=facebook&utm_medium=organic_social&utm_campaign=math_tutoring&utm_content=math_ontario_support_v1` | Explore personalized online Math support |
| 3 | MCR3U / Grade 11 Functions | `/en/subjects/math/functions` | `https://successpathmentors.net/en/subjects/math/functions?utm_source=facebook&utm_medium=organic_social&utm_campaign=mcr3u_tutoring&utm_content=mcr3u_functions_v1` | Get one-to-one support for MCR3U Functions |
| 4 | MHF4U / Grade 12 Advanced Functions | `/en/subjects/math/advanced-precalculus` | `https://successpathmentors.net/en/subjects/math/advanced-precalculus?utm_source=facebook&utm_medium=organic_social&utm_campaign=mhf4u_tutoring&utm_content=mhf4u_advanced_functions_v1` | Strengthen MHF4U concepts with one-to-one support |
| 5 | MDM4U / Data Management | `/en/subjects/math/statistics-probability` | `https://successpathmentors.net/en/subjects/math/statistics-probability?utm_source=facebook&utm_medium=organic_social&utm_campaign=mdm4u_tutoring&utm_content=mdm4u_data_management_v1` | Explore Grade 12 Data Management support |
| 6 | Exam Preparation | `/en/services/exam-preparation` | `https://successpathmentors.net/en/services/exam-preparation?utm_source=facebook&utm_medium=organic_social&utm_campaign=exam_preparation&utm_content=exam_prep_midterm_final_v1` | Prepare for school exams with structured one-to-one support |
| 7 | Milton families | `/en/locations/canada/ontario/milton` | `https://successpathmentors.net/en/locations/canada/ontario/milton?utm_source=facebook&utm_medium=organic_social&utm_campaign=milton_tutoring&utm_content=milton_parent_support_v1` | Learn about online tutoring support for Milton students |
| 8 | Toronto / GTA families | `/en/locations/canada/ontario/toronto` | `https://successpathmentors.net/en/locations/canada/ontario/toronto?utm_source=facebook&utm_medium=organic_social&utm_campaign=toronto_tutoring&utm_content=toronto_parent_support_v1` | Explore online tutoring for Toronto students |
| 9 | Hamilton families | `/en/locations/canada/ontario/hamilton` | `https://successpathmentors.net/en/locations/canada/ontario/hamilton?utm_source=facebook&utm_medium=organic_social&utm_campaign=hamilton_tutoring&utm_content=hamilton_parent_support_v1` | Explore one-to-one online tutoring for Hamilton students |
| 10 | Ontario Curriculum | `/en/curriculum/ontario` | `https://successpathmentors.net/en/curriculum/ontario?utm_source=facebook&utm_medium=organic_social&utm_campaign=ontario_curriculum&utm_content=ontario_parent_guide_v1` | See how tutoring can align with Ontario curriculum needs |
| 11 | General Science | `/en/subjects/general-science` | `https://successpathmentors.net/en/subjects/general-science?utm_source=facebook&utm_medium=organic_social&utm_campaign=science_tutoring&utm_content=science_high_school_v1` | Explore one-to-one Science support |
| 12 | French | `/en/subjects/french` | `https://successpathmentors.net/en/subjects/french?utm_source=facebook&utm_medium=organic_social&utm_campaign=french_tutoring&utm_content=french_immersion_core_v1` | Explore French Immersion, Extended and Core French support |
| 13 | Homework Help | `/en/services/homework-help` | `https://successpathmentors.net/en/services/homework-help?utm_source=facebook&utm_medium=organic_social&utm_campaign=homework_help&utm_content=homework_independent_learning_v1` | Get structured homework support without replacing the student's own work |

---

## 3. First organic distribution wave

The first wave should prioritize six distinct owner/intent families instead of repeatedly sending traffic to the Homepage.

1. Hamilton local owner — current strongest local GSC watchlist signal.
2. Math — highest broad academic commercial intent.
3. Homework Help — parent pain-point / high-conversion service intent.
4. Exam Preparation — time-sensitive school support intent.
5. French — high-value differentiated language support.
6. Ontario Curriculum — authority / parent-information bridge into commercial owners.

Recommended cadence: 3 posts per week for two weeks. Avoid publishing several near-identical location posts on the same day.

---

## 4. Content guardrails

- Always describe the service as **online one-to-one tutoring** unless a genuine in-person service is launched and verified.
- Do not claim physical tutoring centers in Milton, Toronto, Hamilton or elsewhere.
- Do not guarantee grades, marks, admissions, exam results or learning outcomes.
- Do not imply tutors complete student homework.
- Link to the narrowest valid canonical owner for the post's intent.
- Do not create a new city-subject URL just to have a social landing page.
- Keep social copy consistent with the website's current brand, phone, email and online-service proposition.

---

## 5. Facebook Page profile link

The official Facebook Page Website/About field should use:

`https://successpathmentors.net/en?utm_source=facebook&utm_medium=organic_social&utm_campaign=brand_tutoring&utm_content=page_profile_v1`

Do not use a location page as the permanent Page Website URL.

---

## 6. Analytics measurement

Phase 4.9 attribution is supported by the existing production analytics code:

- landing UTMs are captured from the URL;
- first-session attribution is stored after analytics consent;
- subsequent tracked events inherit the captured attribution;
- `landing_path` is retained alongside UTM fields.

Primary measurement dimensions:

- source = `facebook`
- medium = `organic_social`
- campaign
- content
- landing page
- trial-start events
- registration events

Do not judge a post only by Facebook engagement. The business metric is movement toward:

`Facebook organic → qualified website session → trial start → registration → paid student`

---

## 7. External activation gate

Phase 4.9 repository/analytics readiness can pass before publishing, but the phase must not be fully closed until external evidence confirms:

1. Facebook Page Website/About field uses the approved UTM profile URL;
2. at least one approved organic post is live with its unique UTM link;
3. the link resolves to the intended canonical landing page;
4. GA4 / production analytics receives the Facebook organic attribution after a consented test visit.

Until these are evidenced, external activation status remains **READY / PENDING**.