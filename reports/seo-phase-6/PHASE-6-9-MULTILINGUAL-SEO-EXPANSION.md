# Phase 6.9 — Multilingual SEO Expansion

**Repository:** `SuccessPathMentors/SuccessPath-Website-development-`  
**Baseline main:** `a7ebab5d8a10aa76349d3f5939726bc9f000c000`  
**Control issue:** #89  
**Status:** PATCH IMPLEMENTED — QA REQUIRED

## Objective

Harden multilingual SEO across the existing North America, French-programme and Germany namespaces without manufacturing translated URL volume, weakening canonical ownership, or converting translation into a substitute for search-intent evidence.

The controlling owner hierarchy remains:

> **Course code / named course → Service → Subject → Curriculum → Generic Location → Homepage for brand**

A language variant is not automatically a new owner. A translated page must represent a real equivalent intent, have a valid canonical owner, and satisfy the same evidence and quality controls as any other indexable asset.

## Measurement baseline

The production dashboard is still an immature baseline:

- GSC history: 7 days;
- GA4 history: 1 day;
- data through: 2026-09-19;
- GSC impressions: 110;
- GSC clicks: 0;
- CTR: 0.0%;
- average position: 11.85;
- production organic conversion volume remains too thin for multilingual conversion conclusions.

Language-specific evidence in the current first-party extract:

- Arabic `الرياضيات المتقدمة`: 5 impressions across 2 dates, routed to the existing Arabic advanced-math owner;
- `/fr/` pages: 0 matching GSC rows in the current raw extract;
- `/de/` pages: 0 matching GSC rows in the current raw extract.

Decision: the current sample supports architecture hardening and existing-owner preservation, not broad translated-page scale.

## Namespace and owner matrix

| Namespace | Language / hreflang | Canonical pattern | Relationship | Phase 6.9 decision |
|---|---|---|---|---|
| North America core | English / `en-CA` | `/en/...` | True EN counterpart where an Arabic equivalent exists | ACTIVE / PRESERVE |
| North America core | Arabic / `ar-CA` | `/ar/...` | True AR counterpart where an English equivalent exists | ACTIVE / PRESERVE |
| English-only services/courses | English / `en-CA` | `/en/...` | No Arabic alternate unless a real equivalent page exists | PRESERVE SELF-ONLY |
| French programme | French / `fr-CA` | `/fr/programme-francais/...` | Distinct programme namespace | ACTIVE SEPARATE NAMESPACE |
| English French-subject owner | English / `en-CA` | `/en/subjects/french` | French as a subject, not the French-language programme | PRESERVE DISTINCT OWNER |
| Germany market | German / `de-DE` | `/de...` | Germany market localization | PRESERVE |
| Germany market | English / `en-DE` | `/de/en...` | Germany market localization | PRESERVE |
| Germany market | Arabic / `ar-DE` | `/de/ar...` | Germany market localization | PRESERVE |

## North America EN/AR control

Core public-language routing remains intentionally limited to:

- English;
- Arabic.

The shared metadata helper already emits regional alternates:

- `en-CA`;
- `ar-CA`;
- `x-default` → English.

Phase 6.9 keeps this architecture and reconciles the sitemap to the same hreflang vocabulary so HTML metadata and sitemap signals do not use different language-label conventions for the same owner family.

### Equivalent-page rule

Use reciprocal EN/AR alternates only where both URLs are genuine equivalents.

Do not add an Arabic hreflang target to an English page merely because Arabic is supported elsewhere on the site. Examples of currently English-only owners include:

- Homework Help;
- Exam Preparation;
- named Ontario course owners;
- the English `/subjects/french` owner.

These remain self-canonical with `en-CA` plus `x-default` until an independently justified Arabic equivalent exists.

## French programme control

`/fr/programme-francais` is not the French translation of `/en/subjects/french`.

They serve different intent:

- `/en/subjects/french` → tutoring French as a school subject;
- `/fr/programme-francais/...` → a French-language programme namespace that includes French and mathematics taught in French.

Phase 6.9 therefore:

- preserves the standalone `/fr` namespace;
- keeps each French programme page self-canonical;
- standardizes the hreflang label to `fr-CA`, consistent with the existing `fr_CA` OpenGraph locale;
- does **not** advertise `/en/subjects/french` or Arabic subject URLs as alternates of the French programme.

Current first-party demand is still 0 `/fr/` rows in the seven-day GSC extract, so there is no evidence for broad new French URL creation.

## Germany market control

Germany already has its own market-scoped multilingual architecture and must not be collapsed into the North America `next-intl` locale registry.

Current owner patterns remain:

- German: `/de...`;
- English for Germany: `/de/en...`;
- Arabic for Germany: `/de/ar...`.

The Germany metadata and sitemap continue to use:

- `de-DE`;
- `en-DE`;
- `ar-DE`;
- `x-default` → German.

Phase 6.9 makes no Germany route, title, H1, canonical or content expansion from the current dataset. There are 0 `/de/` GSC rows in the present raw extract.

## Implemented patch

### Sitemap consistency

Updated:

`src/app/sitemap.ts`

Changes:

1. Core EN/AR entries now reuse `buildLanguageAlternates(path)` rather than creating a separate `en` / `ar` sitemap vocabulary.
2. English-only gap owners now use `en-CA` + `x-default`.
3. French programme entries now use `fr-CA`.
4. Germany alternates remain unchanged at `de-DE` / `en-DE` / `ar-DE` / `x-default`.
5. No route, owner, canonical destination or sitemap URL was added.

### French metadata consistency

Updated:

`src/lib/programme-francais/metadata.ts`

The French programme hreflang changed from generic `fr` to `fr-CA`.

This is a signal-normalization patch only. It does not create cross-language alternates.

## Hreflang / canonical matrix after patch

| Page family | Canonical | Hreflang |
|---|---|---|
| Core equivalent EN page | self `/en/...` | `en-CA`, `ar-CA`, `x-default` |
| Core equivalent AR page | self `/ar/...` | `en-CA`, `ar-CA`, `x-default` |
| English-only money/service/course page | self `/en/...` | `en-CA`, `x-default` |
| French programme page | self `/fr/...` | `fr-CA` only |
| Germany German page | self `/de...` | `de-DE`, `en-DE`, `ar-DE`, `x-default` |
| Germany English page | self `/de/en...` | `de-DE`, `en-DE`, `ar-DE`, `x-default` |
| Germany Arabic page | self `/de/ar...` | `de-DE`, `en-DE`, `ar-DE`, `x-default` |

## Translation quality gate

A translated indexable page is **not** approved solely because a source-language page exists.

Before a new language owner can be created, all of the following must pass:

1. **Language-specific demand** — first-party search evidence or another documented high-confidence demand source exists for the target language/market.
2. **Distinct or equivalent intent** — the search intent is explicitly mapped; translation is not used to invent a separate intent.
3. **Owner fit** — the current canonical owner cannot satisfy the language need through an approved equivalent route or normal improvement.
4. **Localized originality** — copy is reviewed for the target audience, curriculum/market terminology and natural language; thin machine translation is not sufficient.
5. **Operational completeness** — material conversion, contact, policy or scheduling information needed by the user is available and accurate for that language/market.
6. **Cannibalization / doorway PASS** — the page does not create city-language, city-subject, city-course or repeated template-doorway patterns.
7. **Conversion value** — the page has a direct or strategically meaningful path to a trial or qualified family action.

If any gate fails: **HOLD / OPTIMIZE EXISTING**, not CREATE.

## Explicitly blocked multilingual patterns

Without new evidence Phase 6.9 blocks:

- mass EN→AR or EN→FR page duplication;
- language folders added to city URLs merely to multiply indexable pages;
- city + language + subject pages;
- city + language + course pages;
- city + language + service pages;
- claiming `/fr/programme-francais` is an alternate of `/en/subjects/french`;
- adding French or German to the core EN/AR locale registry simply to expose more URLs;
- new Germany language/service pages from the current zero-row GSC sample.

## Regression coverage

Created:

`tests/phase6-multilingual-seo-expansion.test.mjs`

The focused guard verifies:

1. core locale routing remains EN/AR only;
2. core hreflang helper remains `en-CA` / `ar-CA` / `x-default`;
3. sitemap core entries reuse the shared helper;
4. English-only owners do not advertise a nonexistent Arabic alternate;
5. French programme remains `fr-CA` and has no EN/AR alternate;
6. Germany keeps `de-DE` / `en-DE` / `ar-DE` / `x-default`;
7. no language-local doorway pattern is introduced in changed source.

## Files changed

Runtime/SEO infrastructure:

- `src/app/sitemap.ts`
- `src/lib/programme-francais/metadata.ts`

Regression:

- `tests/phase6-multilingual-seo-expansion.test.mjs`

Documentation:

- `reports/seo-phase-6/PHASE-6-9-MULTILINGUAL-SEO-EXPANSION.md`

## Dashboard control

A dedicated production-dashboard control tab is required:

`Phase6_Multilingual_SEO`

It records namespace, language/hreflang, owner pattern, current demand, canonical rule, hreflang rule, intent relationship, state and scale gate.

## Pre-QA decision

**PATCH IMPLEMENTED — QA REQUIRED**

Phase 6.9 may be closed only after:

- dashboard control is written;
- focused regression passes;
- TypeScript passes;
- changed-file ESLint passes;
- production build passes;
- final PR diff contains only the reviewed Phase 6.9 scope;
- the merged `main` SHA is verified.
