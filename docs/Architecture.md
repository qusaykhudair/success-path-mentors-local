# Website Architecture Specification

> Project: Success Path Mentors
>
> Framework: Next.js 15
>
> Architecture: Enterprise Clean Architecture
>
> Rendering Strategy: Hybrid (Server Components + Client Components)
>
> Language: TypeScript

---

# Architecture Philosophy

The application must be designed following modern enterprise frontend architecture principles.

The project should prioritize:

- Scalability
- Reusability
- Maintainability
- Performance
- SEO
- Accessibility
- Internationalization

The codebase should remain clean, modular, and easy to extend over time.

---

# Architectural Principles

The following principles are mandatory.

## Single Responsibility Principle (SRP)

Every component should have one responsibility only.

Examples:

✓ HeroSection

✓ FAQSection

✓ SubjectCard

✗ HomePageComponent (contains everything)

---

## Separation of Concerns

Separate:

- UI
- Business Logic
- Data
- Configuration
- Translation
- Routing

Never mix these together.

---

## Feature-Based Development

The project should be organized around features rather than pages.

Avoid grouping files only by type.

Instead group them by functionality.

---

## Reusability First

Every reusable UI should become a reusable component.

Examples:

Button

Card

Badge

Accordion

Tabs

FAQ

CTA

Statistic Card

Tutor Card

Location Card

Subject Card

Service Card

Review Card

---

## Composition Over Duplication

Never duplicate components.

Instead:

Build generic reusable components.

---

## Server Components by Default

Every component should be a Server Component unless interactivity is required.

Use Client Components only when necessary.

Examples requiring Client Components:

Forms

Carousel

Animations

Tabs

Dropdown

Language Switcher

Theme Toggle

Search

---

# Rendering Strategy

Use the following rendering methods.

## Static Pages

Home

About

Services

Subjects

Locations

FAQ

Contact

Privacy

Terms

These pages should be statically generated.

---

## Dynamic Pages

Subject Details

Location Details

Service Details

Blog Articles

Use Dynamic Metadata.

---

# Component Hierarchy

Application

↓

Layout

↓

Navbar

↓

Page

↓

Sections

↓

Components

↓

Shared UI

Never allow sections to communicate directly.

Use props only.

---

# Data Flow

Data should always flow downward.

Never mutate parent state directly.

Preferred order:

Static Data

↓

Server Fetch

↓

Props

↓

Component

Avoid deep prop drilling.

---

# State Management

Keep state local whenever possible.

Global state should only be used for:

Language

Navigation

Theme (future)

Authentication (future)

Avoid unnecessary global stores.

---

# Routing Strategy

Use App Router exclusively.

Example:

/

/about

/services

/services/private-tutoring

/services/online-tutoring

/subjects

/subjects/math

/subjects/english

/subjects/french

/subjects/science

/subjects/physics

/subjects/chemistry

/subjects/history

/subjects/biology

/subjects/geography

/locations

/locations/toronto

/locations/montreal

/locations/calgary

/blog

/blog/[slug]

/contact

---

# Component Categories

The project should separate components into categories.

Shared Components

Buttons

Inputs

Cards

Icons

Badge

Typography

Feature Components

Hero

Subjects

Services

Locations

Testimonials

FAQ

CTA

Layout Components

Navbar

Footer

Container

Section

Sidebar (future)

---

# Data Layer

All static content should be stored separately.

Never hardcode data inside components.

Examples:

subjects.ts

locations.ts

services.ts

faq.ts

navigation.ts

testimonials.ts

statistics.ts

reviews.ts

---

# Translation Layer

Every visible string must come from translation files.

Never hardcode text inside components.

Example:

en.json

ar.json

---

# Styling Rules

Use Tailwind CSS.

Avoid:

CSS Modules

Inline Styles

Large CSS Files

Prefer utility classes.

---

# Animation Rules

Use Framer Motion only.

Animation should enhance UX.

Never distract users.

Preferred animations:

Fade

Slide

Scale

Reveal

CountUp

Hover

Avoid excessive motion.

---

# Image Strategy

Use next/image everywhere.

Images should be:

Optimized

Responsive

Lazy Loaded

Properly Sized

Alt Tagged

---

# Error Handling

Every page should support:

Loading State

Error State

Empty State

Not Found

Unexpected Error

---

# Accessibility

Every page must support:

Keyboard Navigation

Screen Readers

ARIA Labels

Proper Heading Order

Contrast Ratio

Focus States

Semantic HTML

---

# Performance Goals

Lighthouse

Performance > 95

SEO > 100

Accessibility > 95

Best Practices > 95

Core Web Vitals should pass.

---

# Code Quality

Strict TypeScript

No any

No duplicated logic

No duplicated components

No dead code

Reusable hooks

Reusable utilities

---

# Development Workflow

Every new page should follow this sequence:

1. Create Route
2. Create Metadata
3. Create Page Layout
4. Create Sections
5. Create Components
6. Add Dummy Data
7. Add Translation
8. Optimize SEO
9. Test Responsive
10. Test Accessibility
11. Optimize Performance

---

# AI Development Rules

When generating code:

- Never hardcode text.
- Never duplicate components.
- Never use any.
- Prefer async Server Components.
- Keep components under 200 lines whenever possible.
- Use reusable UI primitives.
- Follow folder structure strictly.
- Follow design system consistently.
- Optimize for SEO before styling.
- Optimize accessibility before animations.

---

# Expected Outcome

The final application should feel like a modern enterprise educational platform rather than a traditional tutoring website.

Every architectural decision should prioritize long-term maintainability, scalability, and search engine visibility while preserving the existing Success Path Mentors brand identity.
