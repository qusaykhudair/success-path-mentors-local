# 02 - Folder Structure Specification

> Project: Success Path Mentors
>
> Framework: Next.js 15 (App Router)
>
> Architecture: Enterprise Feature-Based Architecture
>
> Language: TypeScript

---

# Overview

The project must follow a scalable enterprise-level folder structure.

The architecture should prioritize:

- Scalability
- Maintainability
- Reusability
- Separation of Concerns
- Performance
- SEO
- Internationalization

The folder structure must remain organized even after the project grows significantly.

---

# Project Structure

```

src/

│

├── app/

├── components/

├── features/

├── shared/

├── layouts/

├── lib/

├── hooks/

├── services/

├── providers/

├── config/

├── constants/

├── data/

├── types/

├── utils/

├── messages/

├── styles/

├── public/

└── middleware.ts

```

---

# app/

Contains all routes using the Next.js App Router.

```

app/

│

├── [locale]/

│ ├── page.tsx

│ ├── layout.tsx

│ ├── about/

│ ├── services/

│ ├── subjects/

│ ├── locations/

│ ├── contact/

│ ├── faq/

│ ├── blog/

│ ├── privacy/

│ ├── terms/

│ └── not-found.tsx

```

---

# Dynamic Routes

```

subjects/

└── [slug]/

page.tsx

```

```

services/

└── [slug]/

page.tsx

```

```

locations/

└── [slug]/

page.tsx

```

```

blog/

└── [slug]/

page.tsx

```

Every dynamic page must support:

- Metadata
- SEO
- Static Params
- JSON-LD
- Breadcrumb

---

# components/

Contains reusable UI components.

```

components/

│

├── ui/

├── forms/

├── navigation/

├── cards/

├── typography/

├── icons/

├── feedback/

├── loaders/

└── common/

```

---

# ui/

Contains reusable UI primitives.

Examples:

Button

Input

Textarea

Select

Checkbox

Accordion

Tabs

Modal

Dialog

Badge

Tooltip

Popover

Skeleton

Separator

Avatar

---

# forms/

Contains reusable form components.

Contact Form

Newsletter

Become Tutor Form

Search Form

Booking Form

---

# navigation/

Navbar

Mega Menu

Mobile Menu

Language Switcher

Breadcrumb

Footer Navigation

---

# cards/

Subject Card

Tutor Card

Location Card

Service Card

Review Card

Article Card

FAQ Card

---

# feedback/

Alert

Toast

Success

Error

Empty State

No Results

404

---

# loaders/

Skeleton Loader

Page Loader

Card Loader

Spinner

---

# features/

Contains feature modules.

```

features/

│

├── home/

├── about/

├── services/

├── subjects/

├── locations/

├── contact/

├── faq/

├── blog/

└── shared/

```

Each feature owns:

Components

Hooks

Data

Types

Utils

---

Example

```

home/

│

├── components/

├── sections/

├── hooks/

├── types/

├── utils/

└── constants/

```

---

# shared/

Contains globally reusable resources.

```

shared/

│

├── seo/

├── animations/

├── hooks/

├── constants/

├── helpers/

└── validators/

```

---

# layouts/

Contains reusable layouts.

```

layouts/

│

├── MainLayout

├── LandingLayout

├── ContentLayout

└── SectionContainer

```

---

# providers/

React Providers.

Examples:

Theme Provider

Query Provider

Intl Provider

Motion Provider

---

# hooks/

Global reusable hooks.

```

hooks/

│

├── useScroll.ts

├── useWindowSize.ts

├── useBreakpoint.ts

├── useLocale.ts

├── useDebounce.ts

├── useMediaQuery.ts

└── useMounted.ts

```

---

# services/

API abstraction layer.

```

services/

│

├── api.ts

├── subjects.ts

├── services.ts

├── locations.ts

├── blog.ts

└── contact.ts

```

Never call fetch directly inside components.

---

# lib/

Configuration.

Examples:

Metadata

SEO

JSON-LD

Analytics

Helpers

---

# config/

Application configuration.

Examples:

site.ts

navigation.ts

seo.ts

theme.ts

---

# constants/

Static constants.

Examples:

Colors

Breakpoints

Routes

Social Links

Contact Information

---

# data/

Dummy Data.

```

data/

│

├── subjects.ts

├── services.ts

├── locations.ts

├── testimonials.ts

├── faq.ts

├── reviews.ts

├── statistics.ts

├── navigation.ts

└── team.ts

```

No hardcoded content inside components.

---

# messages/

Translations.

```

messages/

│

├── en.json

└── ar.json

```

All text must come from translation files.

---

# styles/

```

styles/

│

├── globals.css

├── typography.css

└── animations.css

```

Tailwind remains the primary styling system.

---

# types/

Global TypeScript types.

Examples:

Subject

Location

Service

Review

FAQ

Blog

Tutor

---

# utils/

Utility functions.

Examples:

Slug Generator

Date Formatter

SEO Helpers

Metadata Helpers

Language Helpers

Schema Helpers

---

# public/

```

public/

│

├── images/

├── icons/

├── logos/

├── illustrations/

└── videos/

```

Images should be grouped by category.

---

# Naming Convention

Folders

lowercase

Files

kebab-case

Components

PascalCase

Hooks

camelCase

Types

PascalCase

Constants

UPPER_CASE

---

# Import Rules

Prefer aliases.

```

@/components

@/features

@/shared

@/hooks

@/services

@/utils

@/data

```

Avoid long relative imports.

---

# Folder Rules

Each folder should contain:

```

components/

hooks/

types/

utils/

constants/

```

Only when necessary.

Do not create empty folders.

---

# Forbidden Practices

Do NOT:

- Mix business logic with UI
- Hardcode translations
- Duplicate components
- Duplicate hooks
- Create huge files
- Mix APIs inside UI
- Create deeply nested folders

---

# Expected Outcome

This folder structure should support:

- Enterprise scalability
- Feature isolation
- Easy maintenance
- High code quality
- Excellent developer experience
- Clean separation of responsibilities
- Future extensibility without restructuring