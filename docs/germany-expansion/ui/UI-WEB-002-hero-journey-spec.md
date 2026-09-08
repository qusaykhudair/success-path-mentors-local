# UI-WEB-002 — Shared Hero Lead Journey Product & Technical Specification

## 1. Product Model
The future SPM journey separates lightweight lead creation from full registration.
**Target Flow:**
Visitor → Hero Service Selection → Progressive Lead Questions → Real Lead Persistence → Confirmation → Operations / Customer Coordination → WhatsApp Follow-up → Teacher Matching → Trial → Full Registration when qualified.

*Note:* V1 does NOT require a Portal account, LMS login, Payment, Checkout, complex booking, or Calendar management.

## 2. Shared Cross-Market Engine
A single reusable architecture, `SharedHeroLeadJourney`, orchestrates the flow.
```
SharedHeroLeadJourney
  ├── market
  ├── locale
  ├── services
  ├── localized copy
  ├── current step
  ├── form state
  ├── validation
  ├── attribution
  ├── submission adapter
  └── support context
```
Do NOT create `GermanyHeroForm` or `NorthAmericaHeroForm`.

## 3. Hero First Interaction
The first interaction is **SERVICE SELECTION**.
- **Semantic Question:** "What would you like help with?" (Not globally "Which language do you want to learn?").
- **Germany Services:** German, English, Arabic, French (All 4 are core launch services).
- **Germany UI Locales:** German, English, Arabic.
- **North America:** Uses its own configured service set from `MarketConfig`.

## 4. User Journey Stages
Target: 4 stages.

### Stage 1: Hero Service Selection
- **Step ID:** `step_service_selection`
- **Business purpose:** Capture initial high-level intent.
- **Question/Headline:** "What would you like help with?"
- **Fields:** `selectedService` (Card selection)
- **Required:** Yes
- **Next behavior:** Navigates to dedicated route (`/[locale]/trial`).

### Stage 2: Learner Context
- **Step ID:** `step_learner_context`
- **Business purpose:** Identify who needs the tutoring and their level.
- **Headline:** "Who is the tutoring for?"
- **Fields:**
  - `learnerType` (Child / Student / Adult) - Required
  - `learnerAge` (Number) - Optional if Adult
  - `grade` (Choice) - Optional if Adult
- **Dependencies:** If `learnerType` === 'Adult', hide `grade` and `learnerAge`.
- **Back behavior:** Navigate back to Hero (or previous route).
- **Next behavior:** Move to Stage 3.

### Stage 3: Learning Goal
- **Step ID:** `step_goal`
- **Business purpose:** Provide context for matching and coordination.
- **Headline:** "What is your main goal?"
- **Fields:**
  - `goal` (Choice: Improve grades, Exam preparation, Conversation, General learning, Other) - Required.
- **Back behavior:** Move to Stage 2.
- **Next behavior:** Move to Stage 4.

### Stage 4: Contact & Submission
- **Step ID:** `step_contact_capture`
- **Business purpose:** Capture PII to establish lead.
- **Headline:** "Where should we contact you to plan the trial?"
- **Fields:**
  - `customerName` (Text) - Required
  - `phone` (Tel) - Required
  - `email` (Email) - Required
  - `consent` (Checkbox) - Required
- **Next behavior:** Submit payload via `POST /api/leads`. Transition to submitting state.

### Success State
- **Step ID:** `step_success`
- **Business purpose:** Acknowledge receipt and manage expectations.
- **UI:** Confirms the request, explains Operations coordination, offers Germany WhatsApp `+49 1512 3974353` as immediate follow-up.

## 5. Hero → Funnel Navigation
- **Contract:** First question is inline in Hero. Selection triggers navigation to a dedicated route.
- **Route Options (Recommended):** `/[locale]/trial` (e.g., `/de/de/trial`, `/de/ar/trial`).
- **Route-State Transfer:** `selectedService` is transferred via `sessionStorage` or URL parameter (`?service=german`). PII is NEVER placed in URLs.

## 6. Localization Architecture
- **Global `next-intl` locales remain:** `en`, `ar`.
- **Germany market-scoped locales:** `de`, `en`, `ar`.
- **Adapter:** `MarketMessageResolver` allows `SharedHeroLeadJourney` to consume strings neutrally without caring if they are global or market-scoped.

## 7. UI Locale vs Service Distinction
- **UI Locales (Germany):** `de`, `en`, `ar`
- **Tutoring Services (Germany):** German, English, Arabic, French
*French must never be removed simply because `fr` is not a Germany UI locale.*

## 8. RTL / LTR Behavior
- **Arabic:** Uses `dir="rtl"`.
- **Forced LTR:** Phone, email, URLs, and codes MUST use `dir="ltr"` isolation.
- **Navigation:** Next (left), Back (right). Arrows mirrored (`rtl:-scale-x-100`). Progress indicators fill Right-to-Left.
- **Keyboard navigation:** Must match the visual DOM order.

## 9. Accessibility & Mobile Specs
- **Accessibility:** Semantic forms, visible focus, `aria-live` for errors, min 44px targets.
- **Mobile (375px/390px):** One primary interaction per viewport, safe scroll restoration, no overlapping controls when keyboard is active.

## 10. Trust & Privacy
- **Safe to Use:** "Free Trial", "1-to-1 tutoring".
- **Requires Verification:** Response times, guaranteed improvement, teacher selection specifics.
- **Privacy:** Clear consent checkbox for service-contact; marketing consent must be optional.

## 11. Implementation Boundaries
- **Shared Hero Component:** Pure UI rendering and local flow state.
- **Market Config:** Service arrays, country codes, routing definitions.
- **Localization Adapter:** String resolution.
- **Lead API:** Payload validation and CRM handoff.
- **Operations Handoff:** Handled by backend asynchronously.

## 12. Unresolved Business Questions
- Is marketing consent legally optional?
- What exact age range is supported in Germany?
- Is the trial always free?
- What counts as a duplicate lead?
- What are the SLA response times for Operations?
