# Success Path Mentors — Website Rebuild

Next.js 15 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS.
Full EN/AR internationalization with RTL/LTR support via `next-intl`.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000/en` or `http://localhost:3000/ar`.

> **Note:** `npm run build` requires network access to `fonts.googleapis.com`
> to fetch the Tajawal font at build time (via `next/font/google`). This
> failed only in the sandboxed environment this project was built in — it
> will work normally on your machine, CI, or any standard hosting provider
> (Vercel, etc.) with internet access. Everything else (TypeScript, ESLint,
> the dev server, both locales) has been verified working.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
npm run typecheck  # TypeScript strict check
```

## What's Implemented

- **Architecture:** Enterprise folder structure — `components/ui` (primitives),
  `components/layout` (header/footer/nav), `components/sections/home`
  (page-specific sections), `i18n`, `lib`, `messages`.
- **Design system:** Locked brand tokens in `tailwind.config.ts`
  — Primary `#205375`, Accent `#D5A021`, Body `#010101`, Background `#FFFFFF`
  — with a mathematically-derived tint/shade scale for hover/active states.
  Tajawal typography throughout via `next/font/google`.
- **i18n:** Full EN/AR routing with localized Arabic slugs (see
  `src/i18n/routing.ts`), RTL/LTR switching, locale switcher, hreflang
  alternates, per-locale metadata.
- **SEO:** Dynamic metadata, OpenGraph, canonical URLs, `sitemap.ts`,
  `robots.ts`, Organization + WebSite JSON-LD (global), FAQPage JSON-LD
  (conditional — see below).
- **Accessibility:** Skip-to-content link, visible focus states, semantic
  landmarks, `aria-expanded`/`aria-controls` on interactive widgets (FAQ
  accordion, mobile nav), reduced-motion support.
- **Home page sections:** Hero (animated stat counters), Programs, Steps,
  Services, Challenges, Pricing, FAQ, Contact form (React Hook Form + Zod +
  Server Action), Trust badges, Closing CTA.

## Known Gaps — Needs Client Input Before Launch

These are placeholders by necessity, not oversights — the source content
didn't include them:

| Item | Location | What's needed |
|---|---|---|
| Testimonials | `components/sections/home/testimonials.tsx` | Real name, quote, and (optional) photo per testimonial — the source PDF only showed generic avatar placeholders with no quotes |
| FAQ answers | `messages/en.json` / `messages/ar.json` → `faq.items[].answer` | The source PDF listed only questions, no answers. FAQPage JSON-LD is intentionally skipped until answers exist (empty answers would hurt SEO, not help it) |
| Hero image | `public/images/hero-placeholder.jpg` | Real photography — current image is a generated on-brand placeholder |
| Lead delivery | `src/app/[locale]/actions/submit-lead.ts` | Contact form validation is production-ready; wiring to a CRM/email provider (e.g. SendGrid, HubSpot) is pending a provider decision |
| Social links | `src/lib/constants.ts` → `ORGANIZATION.sameAs` | Real social profile URLs for JSON-LD |
| Other pages | — | About, Subjects, Locations, Services, Blog, FAQ, Contact, Become Tutor, Find Tutor, Privacy, Terms — no content specs uploaded yet beyond Home |

## Tech Stack

Next.js 15.1.11 (patched — see below), React 19, TypeScript (strict),
Tailwind CSS, next-intl, React Hook Form, Zod, Lucide Icons, Framer Motion,
React CountUp.

## Security Note

The initially scaffolded Next.js version (15.1.6) had a critical
unauthenticated RCE (CVE-2025-66478, CVSS 10.0) plus a follow-up DoS/source-
exposure advisory. This project is pinned to `15.1.11`, which is fully
patched against both. Keep this pin (or move forward, never back) when
updating dependencies.
