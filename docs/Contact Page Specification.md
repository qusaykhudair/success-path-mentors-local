# 21 - Contact Page Specification

> Project: Success Path Mentors

> Framework: Next.js 15

> Page Type: Conversion Landing Page

> Priority: High

> SEO Level: High

---

# Purpose

The Contact page serves as the primary conversion point for visitors interested in tutoring services.

Its objectives are:

- Generate tutoring inquiries
- Book free consultations
- Answer visitor questions
- Build trust
- Reduce friction before conversion

---

# Business Goals

- Increase contact submissions
- Increase consultation bookings
- Improve conversion rate
- Support customer support
- Collect qualified leads

---

# SEO Goals

Primary Keywords

- Contact Success Path Mentors
- Book a Tutor
- Free Tutoring Consultation

Secondary Keywords

- Tutoring Support
- Contact Private Tutor
- Academic Consultation

---

# Metadata

Generate dynamically.

Title

Contact Us | Success Path Mentors

Description

Contact Success Path Mentors to book a free tutoring consultation, ask questions, or find the right tutor for your academic goals.

---

# Structured Data

ContactPage

Organization

Breadcrumb

FAQ

---

# Page Structure

1. Hero
2. Contact Options
3. Contact Form
4. Why Contact Us
5. Frequently Asked Questions
6. Service Areas
7. Testimonials
8. Final CTA

---

# Hero Section

Components

Headline

Description

CTA

Illustration

Trust Badges

---

Example Headline

Let's Help You Reach Academic Success

---

CTA

Book Free Consultation

---

# Contact Options

Display as Cards

Phone

Email

WhatsApp

Business Hours

Location (Future)

Emergency Support (Optional)

Each card includes

Icon

Title

Description

Action Button

---

# Contact Form

Fields

First Name

Last Name

Email Address

Phone Number

Preferred Contact Method

Student Grade

Subject Needed

Preferred Service

Preferred City

Message

Consent Checkbox

Submit Button

---

# Form Validation

Required Fields

Real-time Validation

Inline Error Messages

Success Message

Loading State

Spam Protection

---

# Submission Flow

User submits form

↓

Validation

↓

API Request

↓

Confirmation Screen

↓

Email Notification

↓

CRM Integration (Future)

---

# Why Contact Us

Feature Cards

Fast Response

Experienced Tutors

Free Consultation

Flexible Scheduling

Personalized Learning Plans

Trusted by Families

---

# FAQ

Minimum

8 Questions

Examples

How quickly will someone contact me?

Is the consultation free?

Can I request a specific tutor?

Do you offer online tutoring?

Can I change my booking?

What subjects are available?

How do I schedule lessons?

Do you offer weekend sessions?

---

# Service Areas

Display

Interactive Cards

Toronto

Montreal

Ottawa

Calgary

Vancouver

Laval

Each card links to its location page.

---

# Testimonials

Carousel

Photo

Name

City

Service

Review

Rating

---

# Final CTA

Headline

Ready to Start Learning?

Buttons

Book a Tutor

Explore Subjects

---

# Internal Linking

The Contact page should link to

Subjects

Services

Locations

FAQ

About

Blog

Become a Tutor

---

# Accessibility

Semantic HTML

Keyboard Navigation

ARIA Labels

Accessible Form Labels

Screen Reader Support

Error Announcements

---

# Responsive Design

Desktop

Laptop

Tablet

Mobile

Forms must remain easy to complete on all screen sizes.

---

# Performance

Server Components

Optimized Assets

Minimal JavaScript

Fast Form Submission

Lazy Loading (non-critical sections)

---

# Components Required

HeroSection

ContactCard

ContactForm

FeatureCard

LocationCard

TestimonialsCarousel

FAQAccordion

CTASection

---

# Dummy Data Model

contactMethods[]

businessHours

serviceAreas[]

faq[]

testimonials[]

formFields[]

seoTitle

seoDescription

---

# URL

/contact

---

# Development Rules

- Validate all fields on client and server.
- Prevent spam submissions.
- Support bilingual content.
- Display clear success and error states.
- Generate metadata automatically.
- Follow accessibility best practices.

---

# Success Metrics

The Contact page is successful when it achieves:

- High form completion rate
- Low abandonment rate
- Increased consultation requests
- Fast response times
- High mobile usability
- Strong conversion rate

---

# Expected Outcome

The Contact page should function as the primary lead-generation page for Success Path Mentors, offering multiple communication channels, a frictionless inquiry process, and a trustworthy experience that encourages prospective students and parents to take the next step.