# 05 - Internationalization (i18n) Specification

> Project: Success Path Mentors
>
> Framework: Next.js 15
>
> Library: next-intl
>
> Languages:
>
> - English (Default)
> - Arabic

---

# Overview

The website must provide a fully localized experience for both English and Arabic users.

Localization is not limited to translating text.

It includes:

- Routing
- Metadata
- SEO
- RTL / LTR
- Images
- Forms
- Dates
- Numbers
- URLs
- Navigation
- Structured Data

The user should feel that each language is a native experience.

---

# Supported Languages

English

Locale

en

Direction

LTR

Primary Market

Canada

---

Arabic

Locale

ar

Direction

RTL

Primary Market

Middle East

---

# URL Structure

Every public page must exist in both languages.

Examples

/en

/ar

/en/about

/ar/about

/en/services

/ar/services

/en/subjects

/ar/subjects

/en/locations

/ar/locations

/en/contact

/ar/contact

---

# Localized Routes

Subject Pages

/en/subjects/math-tutoring

/ar/subjects/math-tutoring

Location Pages

/en/locations/toronto

/ar/locations/toronto

Service Pages

/en/services/private-tutoring

/ar/services/private-tutoring

Blog

/en/blog

/ar/blog

---

# Locale Detection

The application should:

Detect browser language.

Redirect users accordingly.

Allow manual language switching.

Remember user preference.

Never force language changes unexpectedly.

---

# Language Switcher

The language switcher should:

Be visible in the navigation.

Display:

English

العربية

Switch instantly.

Preserve the current page whenever possible.

Example

/en/subjects/math

↓

/ar/subjects/math

---

# Translation Strategy

All user-facing text must come from translation files.

Never hardcode strings inside components.

---

# Translation Files

messages/

├── en.json

└── ar.json

---

# Translation Structure

Group translations by feature.

Example

navigation

hero

subjects

services

locations

faq

contact

footer

forms

validation

buttons

errors

metadata

seo

---

Example

{
  "navigation": {
    "home": "",
    "about": "",
    "subjects": ""
  }
}

---

# Metadata Localization

Every page must generate localized metadata.

Each language must have:

Unique Title

Unique Description

Unique Keywords

Unique OpenGraph

Unique Twitter Metadata

Unique Canonical

Unique Structured Data

---

# SEO Localization

Each language should target different search intent.

English

Math Tutor Toronto

Private Tutoring

Online Tutoring

French Tutor

Arabic

دروس خصوصية

مدرس خصوصي

تعليم عن بعد

مدرس رياضيات

Avoid direct machine translation.

Content should be culturally adapted.

---

# hreflang

Every page must define:

English

Arabic

Default

Example

hreflang="en"

hreflang="ar"

hreflang="x-default"

---

# Direction

English

LTR

Arabic

RTL

The layout should automatically adapt.

No duplicated components.

---

# Layout Adaptation

RTL should affect:

Navigation

Dropdowns

Forms

Breadcrumbs

Cards

Spacing

Icons

Buttons

Tables

Pagination

Animations

---

# Icon Mirroring

Icons representing direction should flip.

Examples

Arrow Left

Arrow Right

Back

Forward

Next

Previous

---

# Typography

The website uses:

Tajawal

for both languages.

No font switching required.

---

# Numbers

Support localized number formatting.

Examples

English

1,250

Arabic

١٬٢٥٠

---

# Dates

Use locale-aware formatting.

English

July 20, 2026

Arabic

٢٠ يوليو ٢٠٢٦

---

# Currency

Support locale formatting.

English

$120

Arabic

120 دولار

---

# Forms

Validation messages must be translated.

Labels

Placeholders

Errors

Success Messages

Buttons

Descriptions

---

# Validation

Every validation message must exist in both languages.

Example

Required

Invalid Email

Minimum Length

Maximum Length

Success

Error

---

# Images

Most images remain identical.

Only replace images if they contain embedded text.

Avoid text inside images whenever possible.

---

# Accessibility

Language attributes

Proper direction

Screen reader support

Translated ARIA labels

Accessible forms

---

# Search

Search should support both languages.

Users should be able to search content using Arabic or English keywords.

---

# Navigation

Menu items must be translated.

Dropdown labels

Footer

Buttons

Breadcrumbs

Everything.

---

# Slugs

English slugs remain in English.

Examples

subjects/math-tutoring

locations/toronto

services/private-tutoring

Do not translate slugs unless SEO research justifies it.

---

# Structured Data

Generate JSON-LD in the active language.

Localized:

Organization

FAQ

Service

Breadcrumb

Article

Course

Review

---

# OpenGraph

Generate localized OpenGraph data.

Title

Description

Locale

Image

---

# Twitter Cards

Generate localized Twitter metadata.

---

# Robots

Public pages

Index

Localized versions

Index

Private pages

No Index

---

# Sitemap

Generate multilingual sitemap.

Include

English URLs

Arabic URLs

Alternate Language References

---

# Internal Linking

Internal links should stay inside the active language.

Example

English page

↓

English links

Arabic page

↓

Arabic links

Avoid cross-language linking unless switching language.

---

# Content Rules

Never mix languages on the same page.

English pages

100% English

Arabic pages

100% Arabic

---

# Performance

Translations should load efficiently.

Only load the active locale.

Avoid loading all languages simultaneously.

---

# Development Rules

Never hardcode text.

Never duplicate pages for languages.

Always use translation keys.

Always generate localized metadata.

Always support RTL.

Always preserve URL structure.

---

# Expected Outcome

The website should provide a seamless bilingual experience where English and Arabic users receive a fully localized interface, optimized metadata, culturally appropriate content, and equal SEO performance without maintaining separate codebases.