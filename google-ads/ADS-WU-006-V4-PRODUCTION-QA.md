# WU-006 V4 — Production Deployment & QA

## 1. PRODUCTION COMMIT
- **Deployed Commit SHA:** e5c76cb689e5459c05a120f7a2a8c20b4cb20bcc
- **Environment:** Production (https://successpathmentors.net)
- **Deployment Status:** Live

## 2. GLOBAL HOMEPAGE QA
- **Test URL:** `/en`
- **Result:** PASS
- **Notes:** Global homepage remains unchanged. Ontario-specific hero is NOT shown. Standard EnrollmentCard remains available.

## 3. ONTARIO PAID LANDING QA
- **Test URL:** `/en?ads_region=ontario`
- **Result:** PASS
- **Notes:** Above-the-fold contains the correct Ontario context. Eyebrow: "Ontario Online Tutoring • Grades 1–12". H1: "1-to-1 Online Tutoring in Ontario for Grades 1–12". QuickStartCard is present instead of EnrollmentCard. Secondary CTA is "Book a Free Trial".

## 4. WHATSAPP QA
- **Result:** PASS
- **Notes:** WhatsApp CTA clicks route to Canadian number (+1-647-787-5999) with Ontario-specific prefilled message. No PII submitted automatically.

## 5. REGISTRATION HANDOFF QA
- **Result:** PASS
- **Notes:** Clicking "Book a Free Trial" successfully routes to `/en/register?ads_region=ontario`, preserving the ads context.

## 6. LANGUAGE / MARKET SAFETY
- **Test URL:** `/ar?ads_region=ontario`
- **Result:** PASS — Rendered normal Arabic experience.
- **Notes:** Arabic, French, and Germany routes remain unaffected. The Ontario experience is correctly isolated to the English locale.

## 7. SEO QA
- **Result:** PASS
- **Notes:** `/en/landing/ontario` internal route properly includes `<meta name="robots" content="noindex, follow"/>` and canonicalizes to `https://successpathmentors.net/en`. The global route `/en` correctly retains index and follow status.

## 8. ANALYTICS / PRIVACY QA
- **Test URL:** `/en?ads_region=evil`
- **Result:** PASS
- **Notes:** Unrecognized values are safely ignored and serve the global homepage.

## 9. MOBILE + DESKTOP VISUAL QA
- **Result:** PASS
- **Notes:** Verified visually via browser subagent tests. No horizontal scrolling on mobile; buttons are visible and tap targets usable. Content scales nicely and there is no text clipping.

## 10. PERFORMANCE QA
- **Result:** PASS
- **Notes:** Global homepage response time is ~1.9s. Ontario contextual landing is also ~1.9s. There is no material performance regression; page weight and TTFB are identical.

## 11. CONSOLE / NETWORK QA
- **Result:** PASS
- **Notes:** Clean console logs with no rewrite loop, 404 assets, or hydration warnings observed during QA.

## 12. FINAL STATUS
**V4 PASS — READY FOR V5 ACTIVATION GATE**
