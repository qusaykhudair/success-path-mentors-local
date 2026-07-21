# 07 - Component Library Specification

> Project: Success Path Mentors

> Framework: Next.js 15

> Component Architecture: Reusable Enterprise Components

---

# Overview

The entire application must be built using reusable, composable, and scalable components.

Components should be generic whenever possible and must avoid business-specific logic.

Every component should have:

- Single Responsibility
- Strong TypeScript Typing
- Accessibility Support
- Responsive Design
- RTL / LTR Compatibility
- Dark Mode Ready (Future)
- Reusable API
- SEO-Friendly HTML

---

# Component Categories

The application is divided into the following component groups.

## 1. Layout Components

Responsible for page structure.

Components

Navbar

MegaMenu

TopAnnouncementBar

Footer

Container

Section

PageHeader

Sidebar (Future)

Breadcrumb

PageHero

MobileMenu

LanguageSwitcher

---

## 2. UI Components

Small reusable building blocks.

Button

IconButton

Input

Textarea

Select

Checkbox

Radio

Switch

Badge

Chip

Avatar

Tooltip

Popover

Dropdown

Accordion

Tabs

Divider

Modal

Dialog

Toast

Alert

Progress

Spinner

Skeleton

Pagination

Rating

Tag

---

## 3. Typography Components

Heading

Text

Paragraph

Caption

Label

Quote

List

Link

---

## 4. Card Components

SubjectCard

ServiceCard

LocationCard

TutorCard

ReviewCard

StatisticCard

FeatureCard

ArticleCard

FAQCard

TeamCard

CourseCard

PricingCard

---

## 5. Section Components

HeroSection

StatisticsSection

SubjectsSection

ServicesSection

LocationsSection

WhyChooseUsSection

TestimonialsSection

FAQSection

CTASection

BlogSection

NewsletterSection

ContactSection

PartnersSection

---

## 6. Form Components

ContactForm

NewsletterForm

BecomeTutorForm

SearchForm

BookingForm

ApplicationForm

---

## 7. Feedback Components

EmptyState

ErrorState

SuccessState

LoadingState

NotFound

Maintenance

NoResults

---

## 8. SEO Components

MetaData

BreadcrumbSchema

OrganizationSchema

FAQSchema

ArticleSchema

ServiceSchema

CourseSchema

Canonical

OpenGraph

TwitterCard

---

# Component Design Rules

Every component must satisfy the following.

Reusable

Accessible

Responsive

Typed

Documented

SEO Friendly

Animation Ready

RTL Compatible

---

# Component Folder Structure

Every major component should follow:

```

Component/

│

├── index.ts

├── Component.tsx

├── Component.types.ts

├── Component.styles.ts

├── Component.test.tsx (Future)

└── README.md (Optional)

```

---

# Button Component

Variants

Primary

Secondary

Outline

Ghost

Danger

Link

Sizes

Small

Medium

Large

States

Default

Hover

Focus

Loading

Disabled

Icon Support

Left Icon

Right Icon

Loading Spinner

Accessibility

Keyboard

ARIA

Focus Visible

---

# Card Component

Every card should support

Image

Icon

Title

Description

CTA

Badge

Hover Animation

Responsive Layout

Optional Shadow

---

# Hero Component

Contains

Headline

Subtitle

Description

Primary CTA

Secondary CTA

Image

Statistics

Trust Badges

Background Decoration

---

# Subject Card

Contains

Subject Icon

Title

Description

Learn More Button

SEO Link

Hover Effect

---

# Service Card

Contains

Service Image

Title

Description

Benefits

CTA

---

# Location Card

Contains

City Image

City Name

Description

CTA

Local SEO Link

---

# Testimonial Card

Contains

Avatar

Name

Role

Location

Rating

Review

Date

---

# Tutor Card

Contains

Photo

Name

Specialization

Experience

Languages

Rating

CTA

---

# Blog Card

Contains

Featured Image

Category

Title

Description

Reading Time

Date

Author

CTA

---

# Statistic Card

Contains

Icon

Number

Label

CountUp Animation

---

# FAQ Accordion

Contains

Question

Answer

Expand Animation

Structured Data Support

Keyboard Navigation

---

# CTA Section

Contains

Headline

Description

Primary Button

Secondary Button

Background Image

---

# Navbar

Desktop

Logo

Navigation

Mega Menu

Language Switcher

CTA

Mobile

Logo

Hamburger

Drawer

Language Switcher

CTA

Sticky Behavior

Supported

---

# Footer

Contains

Company

Subjects

Locations

Services

Resources

Newsletter

Social Links

Copyright

Legal

---

# Animation Rules

Preferred

Fade

Slide

Scale

Reveal

CountUp

Hover

Avoid

Bounce

Rotate

Flash

Large Motions

---

# Responsive Rules

Every component must support

Desktop

Laptop

Tablet

Mobile

No overflow.

---

# Accessibility Rules

Keyboard Navigation

Focus States

ARIA Labels

Semantic HTML

Screen Reader Support

Contrast Compliance

---

# SEO Rules

Buttons

Use semantic links when navigation is intended.

Cards

Wrap titles with proper heading hierarchy.

Images

Always include alt text.

Lists

Use semantic UL / OL.

---

# Reusability Rules

Never duplicate components.

Instead

Create configurable props.

Example

SubjectCard

↓

Can also display

Course

Program

Workshop

without duplication.

---

# Component API Rules

Every reusable component should expose:

Variant

Size

ClassName

Children

Icon

Loading

Disabled

Direction

Locale

Animation

---

# Development Rules

Components should remain:

Small

Composable

Reusable

Typed

Easy to maintain

Avoid components larger than 200 lines whenever possible.

Split complex components into smaller subcomponents.

---

# Expected Outcome

The component library should serve as the foundation of the entire application, enabling consistent UI, excellent developer experience, maintainability, scalability, and a unified visual language across all pages while supporting future expansion without major refactoring.
