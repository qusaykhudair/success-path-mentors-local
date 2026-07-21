# 26 - Forms & Validation Standards

> Project: Success Path Mentors

> Framework: Next.js 15

> Type: Global Development Standard

> Priority: Critical

> UX Level: Enterprise

---

# Purpose

This document defines the global standards for all forms across the Success Path Mentors platform.

The objective is to ensure consistency, accessibility, security, validation quality, and an excellent user experience across every form.

This specification applies to:

- Contact Form
- Become a Tutor Form
- Newsletter Subscription
- Consultation Request
- Future Registration Forms
- Any future user input forms

---

# Objectives

- Ensure consistent UX
- Prevent invalid submissions
- Improve accessibility
- Improve security
- Reduce user frustration
- Increase successful submissions

---

# Global Form Principles

Every form should be:

- Simple
- Responsive
- Accessible
- Fast
- Secure
- Mobile-friendly
- Keyboard-friendly

---

# Form Layout

Desktop

Maximum Width

720px

Field Spacing

24px

Section Spacing

48px

Button Width

Auto

---

Tablet

Maximum Width

100%

---

Mobile

Single-column layout

Full-width inputs

Large touch targets

---

# Input Components

Supported Components

Text Input

Email Input

Phone Input

Textarea

Select

Multi Select

Radio Group

Checkbox

Date Picker (Future)

File Upload

Search Input

Password (Future)

OTP Input (Future)

---

# Input Design Rules

Every input must include

Label

Placeholder

Helper Text (Optional)

Validation Message

Required Indicator

Focus State

Disabled State

Read-only State

---

# Validation Strategy

Validation must occur on:

Client Side

+

Server Side

Never rely on client-side validation alone.

---

# Validation Timing

Validate

On Blur

During Typing (when appropriate)

On Submit

---

# Required Field Rules

Required fields must display

Required Indicator

Accessible Label

Clear Error Message

---

# Email Validation

Requirements

RFC-compliant email format

Trim whitespace

Convert to lowercase

Reject invalid formats

Example

john@example.com

---

# Phone Validation

Requirements

International format support

Country selector (Future)

Numbers only

Length validation

---

# Text Validation

Trim leading and trailing spaces

Collapse multiple spaces

Reject empty strings

Reject whitespace-only values

---

# Textarea Rules

Character Counter

Minimum Length

Maximum Length

Auto Resize

---

# File Upload Rules

Allowed Formats

PDF

DOC

DOCX

Maximum Size

10 MB

Display

Upload Progress

Success State

Error State

Preview (when applicable)

---

# Password Rules (Future)

Minimum 8 characters

Uppercase letter

Lowercase letter

Number

Special character

Password visibility toggle

Strength indicator

---

# Error Messages

Rules

Clear

Specific

Actionable

Never technical

Examples

Incorrect

Invalid Input

Correct

Please enter a valid email address.

Incorrect

Error 500

Correct

Something went wrong. Please try again.

---

# Success State

After successful submission

Show confirmation message

Disable duplicate submission

Provide next step

Optional redirect

---

Example

Thank you!

Your request has been received successfully.

Our team will contact you shortly.

---

# Loading State

Disable submit button

Show loading spinner

Prevent duplicate requests

Keep entered values

---

# Submit Button

States

Default

Hover

Focus

Loading

Disabled

Success

---

# Spam Protection

Implement

Rate Limiting

CSRF Protection

Server Validation

Honeypot Field

Future

Google reCAPTCHA v3

Cloudflare Turnstile

---

# Security Rules

Sanitize all inputs

Escape HTML

Prevent XSS

Prevent SQL Injection

Validate server-side

Limit file uploads

Reject executable files

---

# Accessibility

Every form must support

Keyboard Navigation

Screen Readers

ARIA Labels

Error Announcements

Focus Management

Visible Focus States

Accessible Labels

---

# Localization

All forms must support

English

Arabic

Requirements

RTL/LTR Layout

Localized Validation Messages

Localized Placeholders

Localized Success Messages

---

# Form Analytics

Track

Form Views

Started Forms

Completed Forms

Abandoned Forms

Submission Errors

Conversion Rate

Average Completion Time

Future

Field Drop-off Analysis

---

# Autosave (Future)

Optional

Save partially completed forms locally

Restore after refresh

---

# Components Required

FormContainer

FormField

Input

Textarea

Select

Checkbox

RadioGroup

FileUpload

SubmitButton

ErrorMessage

SuccessMessage

LoadingSpinner

---

# Global Validation Messages

Examples

Required

This field is required.

Email

Please enter a valid email address.

Phone

Please enter a valid phone number.

File Size

The selected file exceeds the maximum allowed size.

File Type

Unsupported file format.

Server Error

Something went wrong. Please try again later.

---

# Dummy Form Schema

formId

title

description

fields[]

validationRules[]

submitEndpoint

successMessage

errorMessage

trackingId

---

# Development Rules

- Build reusable form components.
- Centralize validation logic.
- Use schema-based validation (e.g., Zod).
- Share validation rules across client and server.
- Never duplicate validation logic.
- Keep all validation messages localized.
- Ensure accessibility compliance.
- Prevent duplicate submissions.
- Handle API failures gracefully.

---

# Recommended Libraries

Validation

Zod

React Hook Form

Input Formatting

React Number Format

File Upload

Native File API

Future

Uppy

---

# Testing Requirements

Validate

Empty Inputs

Invalid Email

Invalid Phone

Large Files

Wrong File Types

Network Errors

Double Submission

Keyboard Navigation

Screen Readers

RTL Support

---

# Success Metrics

The forms system is successful when it achieves:

- High completion rate
- Low validation error rate
- Low abandonment rate
- Excellent accessibility score
- Fast submission time
- Consistent UX across all forms

---

# Expected Outcome

All forms across the Success Path Mentors platform should provide a unified, secure, accessible, and user-friendly experience. Validation logic should be centralized, reusable, and consistent, ensuring high-quality data collection while minimizing user friction and maximizing conversion rates.