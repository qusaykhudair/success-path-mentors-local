# UI-WEB-003 — Shared Hero & Lead Form Visual Spec

## 1. Header Specification
- **Logo:** Left-aligned (LTR) or Right-aligned (RTL).
- **Navigation:** Clean links, Language control dropdown, prominent "Free Trial" primary CTA. WhatsApp contact visible as secondary header link on desktop.
- **Behavior:** Sticky on scroll (lightweight). Mobile uses a hamburger menu containing identical routing.

## 2. Desktop Hero Visual Hierarchy
1. Value Proposition (H1)
2. Supporting Copy (Short description)
3. Trust/Support Context (Microcopy under CTA/Cards)
4. Inline Service Selection (First interaction)

## 3. Shared Hero Service Selector
- **Question:** "What would you like help with?" (Translated via `next-intl`).
- **Germany Services:** German, English, Arabic, French (All 4 equal priority).
- **Visual Pattern:** Grid of choice cards.
- **States:** Default (bordered), Hover (subtle shadow), Selected (accent border + slight tint), Focus (ring).
- **Accessibility:** Selection uses a visible checkmark or thick border, not just color change.

## 4. Hero CTA Behavior
- **Explicit Continue vs Auto-Advance:** **Explicit Continue.**
- **Justification:** Avoids accidental taps on mobile, gives users time to read their selection, improves accessibility by not unexpectedly stealing focus or changing routes, and provides a clear intent `submit` event for analytics before navigating to the dedicated lead flow.
- **State:** "Continue" CTA is disabled until a service is selected.

## 5. Progressive Lead Flow Visual System
- **Shell:** Dedicated route (`/[locale]/trial`). Clean, minimal header (Logo + secure lock/trust indicator).
- **Progress Indicator:** **Progress Bar.** (Thin, accent-colored bar at the top of the form shell, showing percentage completion. Works flawlessly for RTL/LTR and any language length).
- **Form Control States:** Hover (border darken), Focus (ring offset), Filled (subtle check or active text color), Error (red border + message below). Minimum 44px touch targets for all cards, inputs, and buttons.

## 6. Error & Success States
- **Validation Error:** Field border red, clear helper text below field.
- **Duplicate Lead (409):** Transition to a specialized view: "We already have a request for these details." Provide WhatsApp CTA to continue conversation.
- **Rate Limit / Network:** Toast or inline banner. Preserve user input.
- **Success State:** Request received → What happens next → Operations coordination → Teacher matching. Offer Germany WhatsApp (`+49 1512 3974353`) button for immediate continuation.

## 7. WhatsApp / Customer Support Pattern
- **Preferred Pattern:** **Contextual CTA only + Footer/Header links.**
- **Justification:** Avoids floating WhatsApp bubbles that obscure content on mobile, conflict with the primary "Free Trial" CTA, and cause Z-index issues. WhatsApp is integrated naturally into the Success Screen, Header, Footer, and dedicated contact sections.

## 8. Trust Strip & Germany Service Section
- **Trust Strip:** Placed immediately after Hero. Emphasizes verified evidence: "1-to-1 tutoring", "Human coordination". Avoids fake statistics.
- **Service Section:** 4 equal-priority cards for German, English, Arabic, French. Each features an authentic image, title, short descriptor, and a "Learn More" or "Start Trial" CTA.
- **How It Works:** 3 simple visual steps: Tell us what you need → We coordinate/match → Start your trial.
