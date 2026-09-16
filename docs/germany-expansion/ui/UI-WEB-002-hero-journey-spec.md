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
- **North America:** Retains its own current service portfolio.
*Note:* `MarketConfig` does NOT yet contain a tutoring services array. Service availability should be market-aware and configuration-driven in the future. This is a future extension owned by an implementation work unit.

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
- **Dependencies:** If `learnerType` === 'Adult', hide `grade`. `learnerAge` should not be permanently removed from the adult flow until the Germany/adult eligibility business rule is approved. Adult-age collection is configurable/pending business decision.
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
  - `phone` (Tel) - HIGH-PRIORITY contact field. Likely required for current coordination workflow, but final requiredness remains subject to business approval.
  - `email` (Email) - Requiredness remains configurable / pending business decision.
  - `serviceContactAcknowledgement` (Checkbox) - Permission for service contact.
  - `marketingConsent` (Checkbox) - Optional and separate.
  - `privacyAcknowledgement` (Checkbox) - Where legally required.
- **Next behavior:** Submit payload via `POST /api/leads`. Transition to submitting state.

### Success State
- **Step ID:** `step_success`
- **Business purpose:** Acknowledge receipt and manage expectations.
- **UI:** Confirms the request, explains Operations coordination, offers Germany WhatsApp `+49 1512 3974353` as immediate follow-up.

## 5. Hero → Funnel Navigation
- **Contract:** First question is inline in Hero. Selection triggers navigation to a dedicated route. Route generation is conceptually market-aware:
  - North America: `getLeadFlowRoute(north-america, en)` → `/en/trial`
  - Germany future contract: `getLeadFlowRoute(germany, de)` → `/de/de/trial`
- **Current Limitation & Dependency:** Germany trial child routes are NOT currently supported. Current GER-WEB-003 routing intentionally supports only `/de`, `/de/de`, `/de/en`, `/de/ar` and rejects deeper Germany segments. A future Germany routing-extension work unit (e.g., **GER-WEB-005A - Germany Market Child Route Foundation**) is required before implementing `/de/{marketLocale}/trial`.
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
- **Navigation & Layout:** RTL visually mirrors direction-sensitive affordances while preserving correct logical interaction semantics.
- **Requirements:** Logical DOM order, correct tab/focus order, correct screen-reader reading order, mirrored directional icons where appropriate, progress visualization adapted to RTL, Arabic labels/content RTL.
- **Do NOT:** mechanically reverse DOM or keyboard navigation merely because locale is Arabic.

## 9. Accessibility & Mobile Specs
- **Accessibility:** Semantic forms, visible focus, `aria-live` for errors, min 44px targets.
- **Mobile (375px/390px):** One primary interaction per viewport, safe scroll restoration, no overlapping controls when keyboard is active.

## 10. Trust & Privacy
- **Safe to Use:** "Free Trial", "1-to-1 tutoring".
- **Requires Verification:** Response times, guaranteed improvement, teacher selection specifics.
- **Privacy:** Clear conceptual consent model (`serviceContactAcknowledgement`, `privacyAcknowledgement`). Marketing consent (`marketingConsent`) must remain optional and separate. Flag legal wording and Germany/EU consent requirements for legal validation.

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
- Is email mandatory?
- Is phone/WhatsApp mandatory?
- Should preferred contact channel be captured?
- What exact age range is supported in Germany?
- What is the adult learner eligibility?
- Is the trial always free?
- Can the same phone submit multiple services?
- What counts as a duplicate lead? (Evaluate future candidates such as phone, email, phone+service, phone+market, recent active lead window. Backend should own duplicate determination.)
- Is marketing consent legally optional?
- What are the SLA response times for Operations?
