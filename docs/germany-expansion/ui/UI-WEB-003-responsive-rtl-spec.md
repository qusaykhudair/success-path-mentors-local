# UI-WEB-003 — Responsive & RTL Specification

## 1. Responsive Rules
- **Breakpoints:** Mobile (375px / 390px), Tablet (768px), Desktop (1024px+).
- **Mobile Behavior:** 
  - One primary interaction per viewport.
  - Stacked form layouts (no side-by-side inputs on mobile).
  - Sticky bottom CTAs are avoided inside forms to prevent keyboard overlap.
  - Generous vertical spacing. Minimum 44px touch targets.
- **Desktop Behavior:**
  - Split layouts (e.g., Image left, Form right).
  - Hover states activated.

## 2. German Text Resilience
- German words are notoriously long (e.g., `Datenschutzerklärung`).
- **Rules:** No fixed-height containers for text or cards. Avoid narrow fixed-width buttons. Use `break-words` or `hyphens: auto` where appropriate. Allow text to wrap naturally without breaking the flex/grid layout.

## 3. RTL (Arabic) Rules
- **Logical Flow:** The UI visually mirrors direction-sensitive affordances, preserving correct logical DOM interaction semantics.
- **RTL Application:** Applied at the layout level (`dir="rtl"`). 
- **Typography:** Arabic labels and content align right.
- **Navigation:** Next button is positioned on the visual Left. Back button on the visual Right.
- **Icons:** Directional arrows (e.g., Next chevron) are mirrored using `rtl:-scale-x-100`.
- **Progress:** Progress bar fills from Right to Left.
- **Forced LTR Islands:** Phone numbers, Emails, and URLs must be wrapped in `dir="ltr"` to prevent mixed-script corruption (e.g., country code shifting sides).
- **Keyboard:** Tab order must flow naturally through the DOM; do not mechanically reverse DOM nodes just because the locale is Arabic.
