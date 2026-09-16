# UI-WEB-003 — Component Inventory

## 1. Classification Model
- **SHARED:** Used globally, layout/logic identical across all markets.
- **SHARED + MARKET CONFIG:** Reusable UI, but content/behavior is driven by MarketConfig (e.g., service list).
- **GERMANY-SPECIFIC:** Unique to Germany requirements.
- **NORTH-AMERICA-SPECIFIC:** Unique to NA legacy requirements.

## 2. Future Component List
| Component | Classification | Description |
|---|---|---|
| `SiteHeader` | SHARED | Main navigation, responsive menu, sticky behavior. |
| `SiteFooter` | SHARED + MARKET CONFIG | Links, legal, WhatsApp number injected via config. |
| `HeroSection` | SHARED | Layout shell for Hero. |
| `HeroServiceSelector` | SHARED + MARKET CONFIG | Renders service cards based on active market. |
| `TrustStrip` | SHARED | Lightweight bar for verifications. |
| `ServiceGrid` | SHARED + MARKET CONFIG | Displays the 4 DE services or NA services. |
| `UseCaseCards` | GERMANY-SPECIFIC | Targeted audience scenarios (Arab family, adult learner). |
| `TeacherQuality` | SHARED | Verified credential display. |
| `HowItWorks` | SHARED | 3-step process visualizer. |
| `Testimonials` | SHARED | Canonical quote/avatar card system. |
| `FAQ` | SHARED | Accordion list. |
| `WhatsAppSupport` | SHARED + MARKET CONFIG | Contextual CTA injecting the correct market phone number. |
| `LeadJourneyShell` | SHARED | Full-page layout for the dedicated `/trial` route. |
| `LeadProgress` | SHARED | Visual progress bar. |
| `ChoiceCardGroup` | SHARED | Reusable radio/checkbox cards for Goal/Learner type. |
| `LeadContactForm` | SHARED + MARKET CONFIG | Collects PII. Requiredness configurable via market. |
| `LeadSuccess` | SHARED + MARKET CONFIG | Success state, dynamic WhatsApp routing. |
