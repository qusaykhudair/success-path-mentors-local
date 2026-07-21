# 27 - Motion & Animation Guidelines

> Project: Success Path Mentors

> Framework: Next.js 15

> Type: Global UX Standard

> Priority: High

> UX Level: Enterprise

---

# Purpose

This document defines the global motion and animation principles for the Success Path Mentors platform.

Animations should improve usability, communicate state changes, guide user attention, and create a premium user experience without becoming distracting.

All animations must prioritize performance, accessibility, and consistency.

---

# Objectives

- Improve User Experience
- Guide User Attention
- Communicate State Changes
- Increase Perceived Performance
- Reinforce Brand Identity
- Maintain Accessibility

---

# Motion Principles

Every animation should be:

- Purposeful
- Fast
- Consistent
- Smooth
- Accessible
- Lightweight

Avoid decorative animations that do not improve usability.

---

# Animation Library

Recommended Library

Framer Motion

Alternative

Native CSS Transitions

CSS Keyframes (Minimal Usage)

---

# Global Motion Rules

Default Duration

150ms–300ms

Large Section Transitions

300ms–500ms

Micro Interactions

100ms–200ms

Never exceed

700ms

---

# Easing

Preferred

ease-out

ease-in-out

Spring (Framer Motion)

Avoid

Linear animations for UI interactions

---

# Page Transitions

Allowed

Fade

Fade + Slide

Opacity Transition

Subtle Scale

Not Allowed

3D Rotations

Long Zoom Effects

Flash Transitions

Heavy Blur

---

# Scroll Animations

Use only when content enters the viewport.

Examples

Fade In

Slide Up

Slide Left

Slide Right

Scale In (Minimal)

Rules

Animate once

Respect reduced-motion preference

Avoid excessive delays

---

# Hero Section

Allowed Animations

Headline Fade

CTA Slide Up

Image Fade

Statistics Count Animation

Background Gradient Motion (Subtle)

Maximum Delay

400ms

---

# Cards

Hover Effects

Slight Elevation

Shadow Transition

Border Highlight

Small Scale (1.02 max)

Icon Animation

Optional

---

# Buttons

States

Hover

Focus

Active

Loading

Disabled

Hover

Small background transition

Optional icon movement (≤4px)

Never bounce repeatedly.

---

# Navigation

Sticky Header Transition

Background Fade

Shadow Fade

Mega Menu

Fade + Slide

Duration

200ms

---

# Mega Menu

Animation

Fade

Slide Down

Opacity Transition

Avoid

Zoom

Rotation

Complex transforms

---

# Mobile Drawer

Animation

Slide From Right (LTR)

Slide From Left (RTL)

Backdrop Fade

Duration

250ms

---

# Accordion

Animation

Height Transition

Opacity Fade

Chevron Rotation

Duration

200ms

---

# Form Interactions

Focus Ring Animation

Error Shake (Subtle)

Success Check Animation

Loading Spinner

Button Loading State

Never animate continuously.

---

# Input Validation

Valid

Green Border Transition

Invalid

Red Border Transition

Error Text Fade

---

# Loading States

Preferred

Skeleton Loaders

Shimmer Effect (Subtle)

Progress Indicators

Avoid

Infinite Spinners for long operations

---

# Skeleton Guidelines

Use for

Cards

Articles

Subject Pages

Service Pages

Blog

Testimonials

Never use skeletons for tiny UI elements.

---

# Images

Fade In

Lazy Load

Blur Placeholder (Optional)

Avoid

Zoom on load

---

# Statistics

Count-up Animation

Animate once

Duration

1–2 seconds

Use Intersection Observer

---

# FAQ Accordion

Expand

Height Animation

Opacity Fade

Chevron Rotation

Collapse

Reverse Animation

---

# Modal

Backdrop Fade

Modal Scale

Opacity Transition

Focus Trap

ESC Close

Click Outside Close

---

# Toast Notifications

Slide In

Fade

Auto Hide

Manual Close

Duration

4–5 seconds

---

# Empty States

Illustration Fade

Headline Slide

CTA Fade

---

# Success States

Success Icon

Fade

Scale

Short Duration

---

# Error States

Display immediately

Minimal motion

No aggressive shaking

---

# Accessibility

Respect

prefers-reduced-motion

If reduced motion is enabled:

Disable

Parallax

Auto Animations

Count Animations

Complex Transitions

Keep

Opacity Changes

Instant State Changes

---

# Performance Rules

Use

transform

opacity

Avoid animating

width

height (except accordion)

top

left

box-shadow (heavy)

filter

---

# Framer Motion Guidelines

Use Motion Components Only When Needed

Avoid wrapping every element.

Prefer

motion.section

motion.div

motion.button

Only animate visible elements.

---

# Animation Tokens

Fast

150ms

Normal

250ms

Medium

350ms

Slow

500ms

---

# Components Covered

Hero

Navigation

Mega Menu

Cards

Buttons

Forms

Accordion

Tabs

Modal

Drawer

Statistics

Testimonials

CTA Sections

Blog Cards

Subject Cards

Service Cards

Location Cards

---

# Development Rules

- Keep animations subtle.
- Prioritize usability over decoration.
- Respect accessibility settings.
- Avoid layout shifts.
- Use GPU-friendly animations.
- Reuse motion variants.
- Maintain consistency across the platform.

---

# Testing Requirements

Verify

Desktop

Tablet

Mobile

Reduced Motion

60 FPS Performance

No Layout Shift

Keyboard Navigation

Screen Readers

---

# Success Metrics

The motion system is successful when it achieves:

- Smooth interactions
- No animation-related layout shifts
- High Lighthouse Performance score
- Excellent Accessibility score
- Consistent UX
- Fast perceived performance

---

# Expected Outcome

The motion system should create a polished and modern user experience that enhances navigation, improves usability, and reinforces the Success Path Mentors brand while maintaining excellent performance and accessibility across all devices.