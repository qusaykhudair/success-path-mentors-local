# ADR: `components/sections` vs. feature-based `features/*/sections`

**Status:** Decided, ahead of Phase 5 (Home Page).

## Context

`docs/02 - Folder Structure Specification.md` already defines both:

- `features/{name}/sections/` — per-feature section components
- `components/` (ui, forms, navigation, cards, typography, icons,
  feedback, loaders, common) — global reusable components, with no
  explicit `sections` subfolder

Before Phase 5 starts building real sections (Hero, Statistics, Subjects,
WhyChooseUs, Testimonials, FAQ, CTA, ...), we need one clear rule for
where a given section component lives — otherwise every page ends up
making that call ad hoc and the two folders drift into overlapping,
inconsistent use.

## Decision

**Default every section to `features/{name}/sections/`.** Only promote a
section to a shared location once it is actually reused, verbatim, by a
second page — not because it *might* be reused later.

Concretely:

1. **Page-specific sections** (the common case) — `HeroSection`,
   `WhyChooseUsSection`, `LearningProcessSection`, etc. that encode one
   page's content/copy/order — live in `features/{page}/sections/`.
   They can import from `components/` freely, but nothing in
   `components/` should ever import from `features/`.

2. **Truly cross-page sections** (the rule of two — used unchanged by
   two or more pages) get promoted to `components/sections/` (a new
   subfolder, added to the existing `components/` categories). Expected
   candidates once Phase 5+ content exists: a `NewsletterCTASection`
   (Home + Blog + Contact all want this per
   `docs/10 - Content Strategy & Information Architecture.md`
   "Conversion Points"), and possibly a generic `TestimonialsSection` if
   the same carousel appears on Home, About, and Subject/Service/Location
   detail pages with only the data swapped.

3. **Never duplicate a section to avoid the promotion decision.** If
   Home and About both want "Why Choose Us" but with different copy and
   layout, that's two different components with different names, not one
   shared component forced to serve both — per Architecture.md's
   "Composition Over Duplication," duplication is about logic, not
   about every component with a similar-sounding name being the same
   component.

4. **Data stays out of `components/sections`.** A promoted shared
   section takes its content via props (e.g. `title`, `items`), sourced
   from `src/data/*` by whichever feature renders it — it does not import
   `src/data/*` itself, unlike a feature-owned section, which may.

## Why not the alternatives

- **All sections in `components/sections/`** (flat, no features/)
  — this is what a lot of starter templates do, but it means every
  Home-only section sits next to every About-only section with no
  ownership boundary, and `components/` stops being "safe to import
  from anywhere" once it's full of one-off page content. Contradicts
  Architecture.md's "Feature-Based Development" principle directly.

- **All sections in `features/*/sections/`, nothing shared** — clean
  in theory, but guarantees literal copy-pasted `NewsletterCTASection`
  code across 3+ pages once Phase 6+ lands, which is exactly what
  "Composition Over Duplication" forbids.

## Consequence

`components/sections/` now exists as an empty, reserved folder (see
`src/components/sections/.gitkeep`). It should stay empty until Phase 5
or later actually produces a section used by ≥2 pages — an empty
folder here is expected and correct, not a sign something's missing.
