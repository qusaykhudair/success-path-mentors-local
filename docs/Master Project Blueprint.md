# 31 - Master Project Blueprint

> Project: Success Path Mentors

> Version: 1.0

> Framework: Next.js 15

> Language: English / Arabic

> Document Type: Master Engineering Blueprint

> Priority: CRITICAL

---

# Purpose

This document is the single source of truth for the entire Success Path Mentors website redevelopment.

Before generating any code, every developer or AI coding assistant (Claude Code, Codex, Cursor, GitHub Copilot, etc.) MUST read this document and all referenced specifications.

The objective is to ensure consistent implementation, maintainability, scalability, enterprise-level code quality, and full compliance with all project specifications.

This document coordinates the other 30 specification documents.

---

# Project Goal

Completely redesign and rebuild the Success Path Mentors website using modern web technologies while preserving the company's branding and business identity.

The new platform should deliver:

• Enterprise-level architecture

• Excellent SEO

• Outstanding performance

• Fully responsive design

• Accessibility compliance

• Bilingual support (English & Arabic)

• Scalable component architecture

• Clean and maintainable codebase

---

# Technology Stack

Framework

Next.js 15 (App Router)

Language

TypeScript

Styling

Tailwind CSS

Animation

Framer Motion

Icons

Lucide React

Forms

React Hook Form

Validation

Zod

Internationalization

next-intl

Images

next/image

Fonts

next/font/local

Deployment

Vercel

Package Manager

pnpm

Linting

ESLint

Formatting

Prettier

---

# Development Philosophy

The project should prioritize

1. SEO

2. Performance

3. Accessibility

4. User Experience

5. Scalability

6. Code Quality

7. Maintainability

8. Reusability

Every implementation decision should follow this priority order.

---

# General Rules

Always

✔ Use reusable components.

✔ Prefer Server Components.

✔ Keep Client Components minimal.

✔ Use semantic HTML.

✔ Optimize every image.

✔ Optimize every font.

✔ Support RTL and LTR.

✔ Generate metadata dynamically.

✔ Follow accessibility standards.

✔ Build mobile-first.

Never

✘ Duplicate components.

✘ Duplicate validation logic.

✘ Hardcode repeated content.

✘ Use inline styles.

✘ Ignore SEO.

✘ Ignore performance.

---

# Documentation Reading Order

The implementation MUST follow this order.

Phase 1

Read

01 → 05

Project Understanding

↓

Phase 2

Read

06 → 20

Page Specifications

↓

Phase 3

Read

21 → 25

Global Components

↓

Phase 4

Read

26 → 30

Engineering Standards

Only after completing all reading should implementation begin.

---

# Folder Structure

Follow the documented architecture exactly.

Never invent new folders unless necessary.

Group files by feature.

Keep components reusable.

Separate UI from business logic.

---

# Component Strategy

All UI must be component-based.

Every repeated section must become a reusable component.

Examples

Hero

CTA

Section Header

Cards

Buttons

Forms

Accordions

Navigation

Footer

Testimonials

FAQ

Statistics

Subject Cards

Service Cards

Location Cards

---

# SEO Strategy

SEO is the highest priority.

Every page MUST include

Dynamic Metadata

Canonical URL

OpenGraph

Twitter Card

Structured Data

Breadcrumb Schema

Organization Schema

Internal Linking

Optimized URL

XML Sitemap Support

Robots.txt Support

---

# Localization

Support

English

Arabic

Requirements

RTL

LTR

Localized Metadata

Localized URLs (future-ready)

Localized Structured Data

Localized Forms

Localized Validation Messages

---

# Performance Strategy

Target

Lighthouse

Performance

95+

Accessibility

100

SEO

100

Best Practices

100

Core Web Vitals

Pass All

---

# Accessibility Strategy

Every page must satisfy

WCAG AA

Keyboard Navigation

Screen Readers

ARIA Labels

Visible Focus

Color Contrast

Reduced Motion

Semantic HTML

---

# Responsive Strategy

Support

Desktop

Laptop

Tablet

Mobile

Large Mobile

Small Mobile

Never allow horizontal scrolling.

---

# Design Rules

Maintain the existing Success Path Mentors brand identity.

Preserve

Primary Colors

Typography

Visual Style

Brand Tone

Improve

Spacing

Hierarchy

Readability

Modern UI

Animations

Component Consistency

---

# Content Rules

Keep the original business content.

Improve

Structure

Readability

Typography

SEO

Internal Linking

Dummy data should only be used where real content is unavailable.

---

# Images

Use

next/image

Optimize

WebP

Responsive Sizes

Lazy Loading

Priority Images

Meaningful Alt Text

---

# Forms

All forms must follow

Forms & Validation Standards

Never create custom validation outside the shared validation system.

---

# Animations

Follow

Motion Guidelines

Animations must

Enhance UX

Never reduce performance.

---

# Navigation

Follow

Navigation Specification

Desktop

Mega Menu

Mobile Drawer

Breadcrumb

Language Switcher

Sticky Header

---

# Footer

Follow

Footer Specification

Footer must appear on every public page.

---

# Coding Standards

Use

TypeScript Strict Mode

Reusable Hooks

Reusable Utilities

Shared Types

Consistent Naming

Avoid anonymous functions where reusable abstractions improve clarity.

---

# Error Handling

Gracefully handle

404

500

API Errors

Missing Content

Network Errors

Validation Errors

Never expose technical errors to users.

---

# Testing

Every completed feature should pass

Functional Testing

Responsive Testing

Accessibility Testing

Performance Testing

SEO Testing

Regression Testing

---

# Deployment

Deployment must follow

Deployment Checklist

No production release without passing QA.

---

# Implementation Order

The project should be implemented in the following order.

1.

Project Initialization

↓

2.

Global Theme

↓

3.

Typography

↓

4.

Layout

↓

5.

Navigation

↓

6.

Footer

↓

7.

Homepage

↓

8.

About

↓

9.

Subjects

↓

10.

Services

↓

11.

Locations

↓

12.

Blog

↓

13.

Contact

↓

14.

Become Tutor

↓

15.

FAQ

↓

16.

SEO

↓

17.

Accessibility

↓

18.

Performance Optimization

↓

19.

Testing

↓

20.

Production Deployment

---

# AI Coding Rules

Before writing code

Read all specification files.

Never assume missing requirements.

Never replace documented behavior with personal preferences.

If two specifications appear to conflict,

Stop and request clarification.

Always prioritize

Architecture

↓

SEO

↓

Performance

↓

Accessibility

↓

Design

---

# Definition of Done

A feature is complete only when

✔ Matches specification

✔ Responsive

✔ Accessible

✔ SEO optimized

✔ Localized

✔ Performance optimized

✔ Reusable

✔ Fully tested

✔ No console errors

✔ No hydration errors

✔ TypeScript clean

✔ ESLint clean

---

# Final Objective

The final product should be an enterprise-grade educational website built with Next.js 15 that exceeds the current platform in every measurable aspect:

• User Experience

• SEO

• Accessibility

• Performance

• Maintainability

• Scalability

• Code Quality

Every implementation decision should align with these goals.