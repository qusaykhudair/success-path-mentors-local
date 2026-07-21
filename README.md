# Success Path Mentors — Website Rebuild

Enterprise Next.js 15 rebuild of the Success Path Mentors marketing site.
Bilingual (English/Arabic), SEO-first, built on the specification set in
`/docs` (see `docs/Master Project Blueprint.md`).

## Status

**Phase 1–4 foundation complete** (project structure, routing, global
layout, error/loading architecture, design tokens). **No real page
content has been built yet** — see
`docs/09 - Project Implementation Roadmap.md` for the phased plan.
Phase 5 (Home Page) is next.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · next-intl ·
Framer Motion · React Hook Form · Zod · ESLint · Prettier · pnpm

## Getting started

```bash
pnpm install
cp .env.example .env.local   # then fill in NEXT_PUBLIC_SITE_URL etc.
pnpm dev
```

Visit `http://localhost:3000` — it redirects to `/en` (default locale).
Try `/ar` to see the RTL layout.

## Scripts

| Script               | Purpose                                |
| -------------------- | --------------------------------------- |
| `pnpm dev`            | Start the dev server                    |
| `pnpm build`          | Production build                        |
| `pnpm start`          | Serve the production build              |
| `pnpm lint`           | ESLint                                  |
| `pnpm lint:fix`       | ESLint with autofix                     |
| `pnpm format`         | Prettier — write                        |
| `pnpm format:check`   | Prettier — check only                   |
| `pnpm typecheck`      | `tsc --noEmit`                          |

## Folder structure

See `docs/02 - Folder Structure Specification.md` for the full rationale,
and `docs/adr/0002-sections-folder-structure.md` for how
`components/sections` and `features/*/sections` divide responsibility
(short version: default to feature-owned, promote to `components/sections`
only once a section is reused verbatim by a second page).

```
src/
├── app/[locale]/     # App Router routes (locale-prefixed)
│   ├── error.tsx      # route-level error boundary
│   ├── loading.tsx    # route-level loading skeleton
│   └── not-found.tsx  # localized 404
├── app/global-error.tsx  # last-resort boundary (root layout failures)
├── components/       # Global reusable UI (ui, forms, navigation, cards,
│                        feedback, loaders, sections, common, ...)
├── features/         # Feature-owned modules (home, about, subjects, ...)
├── shared/           # seo, animations, hooks, validators, helpers
├── i18n/             # next-intl routing, navigation, request config
├── config/           # site.ts, seo.ts, navigation.ts
├── data/             # Typed dummy-data layer (currently empty — see TODOs)
├── types/            # Domain types (Subject, Service, Location, ...)
├── providers/         # AppProviders (NextIntlClientProvider + MotionConfig)
├── styles/           # globals.css (design tokens), typography.css, animations.css
└── middleware.ts      # next-intl locale middleware
```

## Design tokens

`src/styles/globals.css` uses a paired semantic scheme — every "loud"
background color has a matching `*-foreground` token (`primary`/
`primary-foreground`, `secondary`/`secondary-foreground`, `accent`/
`accent-foreground`, `danger`/`danger-foreground`), plus `background`/
`foreground` for page-level text and `muted`/`muted-foreground` for
subtle fills (skeletons, disabled states) and de-emphasized text. All
radii derive from a single `--radius` base value via `calc()`.

## Known gaps (carried over from the documentation review)

- **Home Page Specification is missing** from `/docs` — the file present
  (`Home-Page-Specification.md`) is a duplicate of the i18n spec, not the
  real content. Needed before Phase 5.
- **Design tokens are placeholders.** Colors are a deliberate, documented
  placeholder palette (navy + brass gold) — swap for the real brand
  palette before any content phase begins.
- **Tajawal is loaded via `@fontsource/tajawal`**, not `next/font/local`
  as the docs specify, since no font files were supplied and
  `next/font/google` requires a live network fetch at build time.
  `@fontsource` self-hosts the same files with correct subset handling.
- **No backend/CMS/email vendor is chosen.** Contact, Newsletter, and
  Become-a-Tutor forms have Zod schemas and translation keys ready, but
  submission currently has nowhere to go — see `.env.example` for the
  placeholder vars to fill in once a vendor is picked.
- **Logo is a placeholder** (text wordmark + monogram) — no real brand
  logo asset was supplied.
