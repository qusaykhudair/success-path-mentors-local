# Current SPM site audit

Scope: repository at parent 596ea1d; source-defined design and local asset inspection. No rendered desktop/mobile browser was available. Priorities are design/conversion risk judgments, not analytics findings. P0 = must resolve before Germany launch; P1 = important for the next authorized design specification; P2 = refinement. No current production component is changed by this report.

## Current composition and evidence

`src/app/[locale]/page.tsx:165` renders Hero → Programs → Steps → Services → Challenges → Testimonials → VideoTestimonials → Pricing → FAQ → FinalCta. The locale layout adds the shared header/footer, WhatsApp, back-to-top and chat. Germany must not inherit this whole page by copying it.

The hero (`src/components/sections/home/hero.tsx`) defines mesh/blur backgrounds, gradient heading emphasis, rating, three counters and a three-step enrollment card. Its primary trial action opens WhatsApp; the secondary action jumps to programs. On small widths the content precedes the enrollment card; desktop uses a two-column grid. These are source facts, not measured viewport impressions.

Header evidence: `src/components/layout/site-header.tsx:153` defines six section links alongside subject/location menus, login/register, telephone, WhatsApp and language handling. `mobile-nav.tsx` implements a deep subject/location tree with focus trapping, Escape handling, scroll lock and inert hidden panels. Germany needs a smaller public journey, but the existing North America navigation must remain untouched.

## Prioritized gap analysis

| Area | Current state / evidence | Problem or risk | Reference pattern | Recommended direction | Priority |
|---|---|---|---|---|---|
| Lead completion | EnrollmentCard lines 137–158 waits 900ms then sets success; network example is commented out | Source-defined false success can lose leads; production deployment equivalence not verified | G3: explicit coordinator handoff | Future Germany form must confirm persistence/delivery before success, retain inputs on failure and provide fallback | P0 |
| Form accessibility | EnrollmentCard labels lack htmlFor/id association; errors are nearby text | Labels may not name inputs programmatically; no observed keyboard test | Internal contact form uses explicit labels | Reuse semantics, not the simulation; explicit labels, errors, focus management | P0 |
| Proof | messages/en.json:145–166 contains 150+ students, 700+ sessions, 30+ tutors and 4.9/2,000+ reviews | Code does not substantiate claims or Germany relevance | S1: attach evidence to identity | Obtain dated source/consent; remove from future Germany model until verified | P0 |
| Brand fidelity | 120×35 header logo; app icons are 2048×601 wordmarks despite square manifest sizes | Small raster header source and incorrect compact-icon shapes | SPM identity requirement | Obtain approved vector/high-resolution masters and proper compact exports | P0 |
| Audience fit | Hero says Grades 1–12; form begins with parentName and CA/US options | Adults and Germany context are not first-class | P1/G4: audience distinctions | Germany-specific learner/guardian choice and three use cases | P0 |
| Navigation | Six section links plus multi-level menus and account/contact actions | High choice load for four-service landing page | G3: customer acquisition separated from tutor path | New Germany nav: services, process, quality, FAQ/contact; no portal acquisition gate | P1 |
| CTA consistency | Trial-to-WhatsApp, enrollment card, contact form and account entry coexist | Similar intent leads to different paths; outcome unclear | G2: explicit sequence | Primary Free Trial to one request flow; secondary WhatsApp clearly labeled | P1 |
| Form density | Three steps collect name, WhatsApp, email, age, country, province, subjects, teaching language, notes | Both contact channels and academic detail precede contact | G3: advisory handoff | 4–5 essential fields; optional detail later; no precise DOB or school upload | P1 |
| Service clarity | Programs and Services describe overlapping curriculum/support concepts | Four Germany languages could be buried in academic taxonomy | S2: recognizable subject access | Equal German/English/Arabic/French cards early | P1 |
| Teacher quality | General qualified-tutor language in messages and matching content; no evidence ledger found | Marketing adjectives carry trust burden | P2: explain selection steps | Publish only operationally verified selection, matching and review steps | P0 |
| Decoration | Hero/services/programs combine gradients, blur, overlay cards and hover effects | Competing emphasis can dilute service/CTA clarity | R: restrained hierarchy | Limit accent treatment to key action and one proof moment | P1 |
| Token wiring | Components use rounded-card/rounded-image; CSS has radius variables; tailwind.config.ts has no borderRadius mapping | Intended reusable radius classes may not resolve; requires rendered check | Internal token consolidation | Verify generated utility coverage before future reuse; avoid implicit tokens | P1 |
| Testimonials | Separate written and video sections; written collection capped at eight | Long proof sequence; no source ledger in inspected content | P1/S1: contextual proof | Two or three relevant excerpts, optional accessible video, source/date/consent | P1 |
| FAQ | Custom disclosure uses cards, shadows and state styling | Heavier treatment than concise objection handling needs | G4: organized support | Six to eight practical questions, simpler boundary styling | P2 |
| Pricing | CAD package cards with North America amounts and package WhatsApp actions | Cannot carry forward into unpublished Germany pricing | Business constraint | Exclude Germany pricing cards and schema until approval | P0 |
| Footer | Inverse footer logo, contact and legal/navigation groups | Useful structure; NA contacts/organization cannot be reused for Germany | S3/P3: clear help access | Preserve layout principles, use only approved Germany/legal data later | P1 |
| Mobile controls | WhatsApp fixed left; back-to-top right; chat bottom-right with higher stacking | Potential overlap/attention competition; not browser-confirmed | R: one coherent contact area | Define occupied zones and keyboard states; suppress redundant floaters on form | P1 |
| RTL | Logical spacing and arrow mirroring exist; phone/email forced LTR; some physical left/right controls | Needs mixed-script and overlay testing; do not mirror everything blindly | Existing SPM conventions | Preserve reading order, isolate phone/email, test keyboard and text expansion | P1 |
| French | Dedicated header/footer and programme overview reuse SPM logos/palette | Useful brand continuity, but separate programme architecture | Existing French implementation | Reuse visual discipline only; preserve /fr routing and content | P1 |
| Searchability | EN/AR metadata and detailed NA subject/location content exist | Not a Germany content strategy; city cloning would misrepresent coverage | Scope freeze | Define German-language learning intents later; no location/SEO activation now | P0 |

References S1–P5 are defined in [the reference audit](UI-WEB-001-reference-audit.md). Current-state evidence is repository source, not competitor material.

## KEEP / IMPROVE / REMOVE / REDESIGN / REUSE

| Decision | Elements | Boundary |
|---|---|---|
| KEEP | SPM wordmark identity, navy/turquoise family, direct support, humane tutoring tone | Preserve NA/FR behavior and branding |
| IMPROVE | CTA destination clarity, evidence provenance, language selector labels, typography coverage, mobile controls | Future Germany specifications only |
| REMOVE from Germany proposal | Simulated success, unsupported statistics, public unapproved pricing, duplicate benefit/proof blocks | Does not authorize deletion from current production |
| REDESIGN for Germany | Hero priority, lead form, four-language service presentation, audience/use-case model, compact navigation | Not implemented in UI-WEB-001 |
| REUSE after verification | Container/Section/Card/Button primitives, field label/error semantics, focus/keyboard patterns, logical spacing, inverse-logo concept | Check token wiring and accessibility before reuse |

## Ten strengths worth preserving

1. Recognizable SPM wordmark rather than a new identity.
2. Navy light-surface and inverse dark-surface brand logic.
3. Semantic colors and responsive type/spacing scales.
4. Shared Container/Section/Card/Button primitives.
5. Direct WhatsApp access and human contact emphasis.
6. Existing EN/AR language structure and mixed-script intent.
7. Mobile drawer focus trapping, Escape and scroll-lock logic.
8. Global reduced-motion and higher-contrast preference rules.
9. Existing matching-process content that avoids guaranteeing results (`src/content/pages/tutor-matching.ts`).
10. French visual continuity using the same header/footer logo family.

## Typography, spacing and motion

The font is locally declared DIN Next LT Arabic, weights 300/400/700, with system fallbacks. `src/lib/fonts.ts` exports a class marker; it does not load next/font. Test German umlauts/ß and Arabic shaping before selecting it for Germany. Body is 16px/1.75 in Tailwind; headings use clamp; content widths include 65ch/72ch. Maintain readable copy but reduce landing paragraph length. Button component uses pill rounding while input tokens use 12px; define a deliberate future role for each shape. Avoid autoplay and extra animation; keep reduced-motion behavior. No typography licensing evidence was found in the inspected asset folder.

## Mobile/RTL/French verification still needed

This source audit cannot confirm clipping, scroll depth, focus visibility, contrast, touch sizes or actual floating-control overlap. Later evidence completion must inspect 320/390/768/1440 widths, 200% zoom, keyboard-only navigation, virtual keyboard on form fields, reduced motion, German wrapping and Arabic mixed phone/email values. Inspect French visually without changing its architecture. No current route or behavior was repaired in this unit.
