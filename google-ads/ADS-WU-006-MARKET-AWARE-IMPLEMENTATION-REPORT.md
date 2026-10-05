# ADS-WU-006: Market-Aware Landing Page Implementation Report

## Status
**Implemented / Awaiting activation and measured validation**

## Overview
This document records the implementation details for the market-aware landing page, driven by the findings in `ADS-WU-006-LANDING-PAGE-AUDIT-2026-10-05.md`.

The implementation leverages a parameterized entry point (`/?ads_region=ontario`) and an SEO-hardened physical route (`/en/landing/ontario`) to deliver a tailored experience for the `SPM_ON_Search_Clicks_Learning_Oct2026` Google Ads campaign without disrupting the canonical global homepage or SEO structure.

## Architecture and Components

### 1. Acquisition Context System (`src/config/acquisition-contexts.ts`)
Created a strong, type-safe definition for valid regions to prevent query-string abuse.
- Defines `AcquisitionContextId` (currently `'ontario'`).
- Provides specific `heroOverrides` (eyebrow, heading, subheading, CTAs).
- Replaces generic region data with Ontario-specific location context (`'Ontario'`).

### 2. Homepage Abstraction (`src/components/sections/home/home-page-content.tsx`)
Extracted the core homepage logic from `src/app/[locale]/page.tsx` into `HomePageContent` to share it between the global root and the localized landing pages.
- Allows injection of an `AcquisitionContext` to override the hero and WhatsApp pre-fills.

### 3. Dedicated Landing Route (`src/app/[locale]/landing/ontario/page.tsx`)
Created a dedicated SEO-hardened entry point.
- **English-Only:** Guards against Arabic traffic (`notFound()` for `locale !== 'en'`), ensuring no accidental Arabic paid-search route.
- **SEO Protection:** Prevents duplicate content indexing by returning a custom `robots` meta tag with `noindex, follow` and a canonical link pointing to the main `/en` homepage.
- **Analytics:** Serves as the primary structure but will primarily be hit via the `/?ads_region=ontario` rewrite or query parameter.

### 4. Hero and Quick Start Enhancements
- `Hero` component dynamically applies the `acquisitionContext` overrides.
- Substituted the 3-step `EnrollmentCard` for a simplified `QuickStartCard` when the region is Ontario. This removes friction from disposable fields and directs the user to WhatsApp for immediate consultation.

### 5. Analytics Sanitization (`src/lib/analytics/events.ts`)
- Added `ads_region` tracking for attribution on `page_view`, `registration_flow_start`, `contact_cta_clicked`, etc.
- **Hardening:** Safely sanitizes the incoming `ads_region` parameter through `parseAcquisitionContext`. Invalid, arbitrary, or malicious inputs (e.g., `'evil'`, `'<script>'`) are dropped before tracking.

## Testing and Verification
The implementation is covered by a suite of tests that verify:
- Valid and invalid acquisition contexts.
- Routing guards (returns 404 for non-English locales).
- SEO guards (correctly sets `noindex`).
- Baseline hash stability for unchanged market-adoption layouts and formats.

All tests, type checking, and linting checks are currently passing on this branch.

## Next Steps
- **Do not merge immediately.** Wait for the baseline learning window on the Google Ads campaign to finish.
- Monitor `google-ads/QA-CURRENT-STAGE-2026-10-04.md` and standard analytics to confirm current baseline health.
- When approved for launch, activate the parameterized URLs in Google Ads and merge the V3 branch to `main`.
