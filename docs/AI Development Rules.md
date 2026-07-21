# 08 - AI Development Rules

> Project: Success Path Mentors
>
> Framework: Next.js 15
>
> Architecture: Enterprise Clean Architecture
>
> Target AI: OpenAI Codex / Claude Code / Cursor / Gemini CLI

---

# Purpose

This document defines mandatory development rules that the AI assistant must follow while implementing the project.

These rules override default AI behavior.

The AI must never improvise architecture decisions that contradict this specification.

---

# General Rules

The AI should behave like a Senior Software Engineer.

The AI should prioritize:

- Maintainability
- Performance
- SEO
- Accessibility
- Reusability
- Scalability

Never prioritize writing code quickly over writing code correctly.

---

# Architecture Rules

Follow Feature-Based Architecture.

Never place unrelated files together.

Every feature owns:

- Components
- Hooks
- Types
- Constants
- Utilities

---

# Component Rules

Every component must have a single responsibility.

Avoid components larger than 200 lines whenever possible.

Split complex components into smaller reusable parts.

Never duplicate UI.

Always extract reusable elements.

---

# Server Components

Server Components are the default.

Use Client Components only when interaction is required.

Examples requiring Client Components:

- Forms
- Carousel
- Accordion
- Tabs
- Dropdown
- Search
- Language Switcher
- Animations

Everything else should remain a Server Component.

---

# Data Rules

Never hardcode content.

Use:

- Translation files
- Dummy data
- Configuration files

Business content must never exist inside JSX.

---

# Translation Rules

Every visible string must come from translation files.

Never write:

```tsx
<h1>Math Tutoring</h1>
```

Always use translation keys.

---

# TypeScript Rules

Strict Mode must always be enabled.

Never use:

- any
- unknown as any
- @ts-ignore

Always create proper interfaces and types.

---

# Folder Rules

Never create files outside the approved folder structure.

Do not introduce new top-level folders without justification.

---

# Styling Rules

Use Tailwind CSS exclusively.

Avoid:

- Inline styles
- CSS Modules
- Styled Components

Use utility classes and reusable design tokens.

---

# SEO Rules

Every page must include:

- Metadata
- Canonical URL
- OpenGraph
- Twitter Card
- JSON-LD
- Breadcrumb
- Semantic HTML

SEO is mandatory, not optional.

---

# Accessibility Rules

Every interactive element must support:

- Keyboard navigation
- Focus states
- ARIA labels
- Screen readers
- Color contrast

Accessibility should never be postponed.

---

# Image Rules

Always use next/image.

Images must:

- Include alt text
- Be responsive
- Be lazy-loaded
- Use modern formats (WebP/AVIF when possible)

Do not use oversized images.

---

# Forms

Use:

- React Hook Form
- Zod Validation

All forms must include:

- Validation
- Loading state
- Success state
- Error state

---

# State Management

Keep state local whenever possible.

Do not introduce global state unless necessary.

Avoid unnecessary complexity.

---

# Hooks

Create custom hooks only when logic is reused.

Avoid creating hooks for one-time use.

---

# Utilities

Shared logic belongs in utility functions.

Avoid repeating helper logic.

---

# Performance Rules

Target Lighthouse scores:

- Performance ≥ 95
- SEO = 100
- Accessibility ≥ 95
- Best Practices ≥ 95

Avoid unnecessary re-renders.

Optimize images, fonts, and bundles.

---

# Responsive Design

Every page must support:

- Mobile
- Tablet
- Laptop
- Desktop

Never allow horizontal scrolling.

---

# Animation Rules

Use Framer Motion.

Animations should:

- Enhance UX
- Be subtle
- Respect reduced-motion preferences

Avoid decorative animations.

---

# Routing Rules

Use App Router.

Prefer static generation.

Use dynamic routes only where appropriate.

Keep URLs clean and keyword-friendly.

---

# Error Handling

Every page should provide:

- Loading state
- Empty state
- Error state
- Not Found state

Never leave blank screens.

---

# Code Quality

Write readable code.

Use meaningful variable names.

Avoid deeply nested logic.

Prefer composition over inheritance.

---

# Testing Readiness

Structure components so they can be tested easily in the future.

Avoid tightly coupled code.

---

# Development Workflow

For every new page:

1. Create route
2. Create metadata
3. Add translations
4. Build layout
5. Build sections
6. Build reusable components
7. Add structured data
8. Optimize SEO
9. Test responsiveness
10. Verify accessibility
11. Optimize performance

---

# Forbidden Practices

The AI must never:

- Hardcode content
- Duplicate components
- Duplicate pages
- Duplicate logic
- Use `any`
- Skip accessibility
- Ignore SEO
- Ignore responsive behavior
- Mix business logic with UI
- Create oversized components
- Add unused dependencies
- Ignore TypeScript errors

---

# Code Review Checklist

Before considering any task complete, verify:

- Clean Architecture respected
- Reusable components used
- No duplicated code
- Strong TypeScript
- Proper translations
- SEO complete
- Accessibility complete
- Responsive verified
- Performance optimized

---

# Definition of Done (DoD)

A task is considered complete only if:

- It matches the design system.
- It follows the folder structure.
- It respects AI development rules.
- It passes TypeScript without errors.
- It is responsive.
- It is accessible.
- It includes metadata and structured data where applicable.
- It uses reusable components.
- It is optimized for SEO.
- It is optimized for performance.

---

# Expected Outcome

The AI should behave as a disciplined senior frontend engineer, producing clean, scalable, maintainable, SEO-first, accessibility-first, and enterprise-quality code that adheres to all project standards without requiring repeated manual corrections.