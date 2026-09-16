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
- **Logical Flow:** RTL visually mirrors direction-sensitive affordances where appropriate while preserving logical DOM order, keyboard/tab order, focus progression, screen-reader semantics, and form progression semantics.
- **RTL Application:** Applied at the layout level (`dir="rtl"`). 
- **Typography:** Arabic content is right-aligned.
- **Interaction/Layout:** Use logical layout concepts (`inline-start`, `inline-end`, content side, interaction side) instead of physical left/right rules.
- **Icons:** Directional icons (e.g., Next chevron) may mirror visually using `rtl:-scale-x-100`.
- **Progress:** Progress bar adapts to locale without changing logical workflow semantics.
- **Forced LTR Islands:** Phone numbers, Emails, and URLs must be wrapped in `dir="ltr"` islands to prevent mixed-script corruption.
- **Keyboard:** Tab order must flow naturally through the DOM. Do NOT mechanically reverse DOM nodes just because the locale is Arabic.
