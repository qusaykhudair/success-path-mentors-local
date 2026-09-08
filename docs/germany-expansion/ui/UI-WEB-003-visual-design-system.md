# UI-WEB-003 — Germany Visual Design System

## 1. Design Objective
The SPM Germany visual system must feel professional, trustworthy, warm, modern, premium (but not elitist), family-friendly, and customer-service oriented. It must be culturally respectful, appealing to Arab families in Germany and adult learners, while remaining highly conversion-focused. Avoid cold corporate styling, childish UI, generic marketplace looks, fake statistics, or excessive motion/gradients.

## 2. SPM Brand Alignment
- **KEEP:** Horizontal logo, inverse logo, favicon, navy base, turquoise/accent color.
- **REFINE:** Typography (more modern/scannable weight distribution), shadows (softer elevation), border radius (approachable but professional, e.g., 8px or 12px), spacing (increase breathing room).
- **REPLACE:** Cluttered navigation, heavy cards with excessive borders.
- **RETIRE:** Fixed-height text containers, fake statistic imagery, generic stock photos.

## 3. Semantic Color System
- `brand-primary`: SPM Navy (Trust, text headings, primary backgrounds)
- `brand-secondary`: Subtle navy tones (Secondary backgrounds, inactive states)
- `accent`: SPM Turquoise (Primary CTA buttons, active states, progress indicators)
- `background`: White or very light gray (Page background)
- `surface`: Pure white (Cards, modals, form shells)
- `surface-subtle`: Very light gray (Hover states, disabled inputs)
- `text-primary`: Dark Slate/Navy (Body text, readability)
- `text-secondary`: Mid-gray (Helper text, placeholder)
- `border`: Light gray (Card borders, input strokes)
- `focus`: Turquoise ring with offset
- `success`: Deep Green (Success states, checkmarks)
- `warning`: Amber (Warnings)
- `error`: Crimson Red (Validation errors)

## 4. Typography System
Hierarchy rules:
- **Hero Display:** Bold, tight line-height, optimized for impact.
- **H1/H2:** Section headings, semi-bold, medium tracking.
- **H3:** Card headings, form question titles, medium weight.
- **Body:** Regular weight, 1.5 line-height, optimized for readability.
- **Small Body / Helper Text:** 12px-14px, `text-secondary`.
- **Button / Navigation:** Medium/Semi-bold, crisp.

*Resilience:* Text must wrap. No fixed heights. Supports German compound words and Arabic shaping (RTL).

## 5. Layout and Spacing Tokens
- **Page Max-Width:** 1440px
- **Content Width:** 1200px max
- **Container Padding:** 16px (mobile) to 32px (desktop)
- **Section Spacing:** 64px to 96px (desktop), 48px to 64px (mobile)
- **Form Width:** Max 500px (centered or split layout)
- **Grid:** 12-column desktop, 4-column mobile.

## 6. Image Direction
- **Prefer:** Authentic online tutoring scenarios, warm home-learning contexts, diverse learners, natural expressions, professional remote setups.
- **Avoid:** Generic classroom stock, AI-looking faces, childish cartoons, visual stereotypes.

## 7. Motion System
- **Allowed:** Subtle transitions on hover (color/shadow), fast card-press feedback, lightweight progress bar fills.
- **Avoid:** Heavy parallax, constant motion, slide-ins that block content reading.
- **Accessibility:** Respect `@media (prefers-reduced-motion)`.

## 8. Testimonial & FAQ Systems
- **Testimonial System:** One canonical style. Clean card, moderate quote length, clear attribution (first name + role/grade). No duplicate styles.
- **FAQ:** Accordion style. Clear focus states. Chevron icon indicating open/closed. Smooth expand/collapse (if motion enabled).
