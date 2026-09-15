# Performance Optimization Sprint — Baseline Measurement Report

**Project:** Success Path Mentors  
**Domain:** `https://successpathmentors.net`  
**Framework:** Next.js 15.5.22 (App Router) / React 19.0.0  
**Baseline Date:** September 16, 2026  

---

## 1. Executive Baseline Summary

This audit establishes the pre-optimization baseline across the two primary benchmark pages:
1. **Homepage (`/en`)**
2. **Milton Location Page (`/en/locations/canada/ontario/milton`)**

External lab audits triggered this performance sprint due to sub-optimal mobile performance (~65–66), prolonged mobile LCP (up to 8.9–9.9s), and substantial JavaScript main-thread blocking time (TBT).

---

## 2. Benchmark Metrics (Lab vs. Field Data)

### A. Homepage (`/en`)

#### Lab Data (Lighthouse Mobile — Emulated Moto G Power, 4x CPU Slowdown, Slow 4G)
- **Performance Score:** **66**
- **Accessibility Score:** **93**
- **Best Practices Score:** **100**
- **SEO Score:** **100**
- **First Contentful Paint (FCP):** **2.5 s**
- **Largest Contentful Paint (LCP):** **8.9 s** (Lab range: 8.9s – 9.9s)
- **Total Blocking Time (TBT):** **260 ms** (Lab peak: up to 1,740 ms under full execution trace)
- **Cumulative Layout Shift (CLS):** **0.000**
- **Speed Index:** **3.4 s**
- **Time to First Byte (TTFB):** **~26 ms** (Local/CDN Edge)

#### Lab Data (Lighthouse Desktop)
- **Performance Score:** **72**
- **Accessibility Score:** **90**
- **Best Practices Score:** **100**
- **SEO Score:** **100**
- **First Contentful Paint (FCP):** **0.5 s**
- **Largest Contentful Paint (LCP):** **2.0 s**
- **Total Blocking Time (TBT):** **430 ms**
- **Cumulative Layout Shift (CLS):** **0.000**
- **Speed Index:** **1.1 s**

#### Field Data (Chrome UX Report / CrUX)
- **INP Field Data:** Insufficient field data (Traffic volume below CrUX 28-day public threshold)
- **LCP Field Data:** Insufficient field data
- **CLS Field Data:** Insufficient field data

---

### B. Milton Location Page (`/en/locations/canada/ontario/milton`)

#### Lab Data (Lighthouse Mobile — Emulated Moto G Power, 4x CPU Slowdown, Slow 4G)
- **Performance Score:** **65**
- **Accessibility Score:** **96**
- **Best Practices Score:** **100**
- **SEO Score:** **100**
- **First Contentful Paint (FCP):** **2.2 s**
- **Largest Contentful Paint (LCP):** **4.7 s** (Lab range: 4.7s – 9.0s)
- **Total Blocking Time (TBT):** **590 ms**
- **Cumulative Layout Shift (CLS):** **0.000**
- **Speed Index:** **3.0 s**
- **Time to First Byte (TTFB):** **~35 ms**

#### Lab Data (Lighthouse Desktop)
- **Performance Score:** **63**
- **Accessibility Score:** **92**
- **Best Practices Score:** **100**
- **SEO Score:** **100**
- **First Contentful Paint (FCP):** **0.5 s**
- **Largest Contentful Paint (LCP):** **1.4 s**
- **Total Blocking Time (TBT):** **2,320 ms** (Elevated desktop TBT caused by full layout evaluation)
- **Cumulative Layout Shift (CLS):** **0.000**
- **Speed Index:** **1.9 s**

#### Field Data (Chrome UX Report / CrUX)
- **INP Field Data:** Insufficient field data
- **LCP Field Data:** Insufficient field data
- **CLS Field Data:** Insufficient field data

---

## 3. Real LCP DOM Element Identification

Through deep Chrome Performance traces and Lighthouse `lcp-breakdown-insight`, the exact LCP elements have been identified:

### 1. Homepage (`/en`) LCP Element
- **Element Type:** HTML Heading (`<h1>`)
- **Selector:** `div.mx-auto > div.order-1 > div > h1#hero-heading`
- **Text Content:** *"One-to-One Online Tutoring That Builds Real Academic Confidence"*
- **Image URL:** N/A (Text-based LCP; hero contains no photographic image)
- **Rendered Dimensions:** 360px × 158px (Mobile viewport)
- **Root Cause of LCP Delay:**
  The `<h1>` element was wrapped in `<Reveal delay={0.05}>` (`src/components/motion/reveal.tsx`). `<Reveal>` initialized with `opacity: 0, y: 30`, keeping the heading invisible during initial paint. The heading was only painted after the full client JavaScript bundle (`framer-motion`, `@n8n/chat`, and React hydration) completed execution on the main thread.
- **Element Render Delay:** **1,637.91 ms** (unthrottled) &rarr; **8.9s – 9.9s** (under 4x mobile CPU throttling).

### 2. Milton Page (`/en/locations/canada/ontario/milton`) LCP Element
- **Element Type:** Paragraph (`<p>`)
- **Selector:** `section.relative > div.mx-auto > div > p.mt-5`
- **Text Content:** *"One-to-one online tutoring for Grades 1–12 students in Milton, Ontario. Get help..."*
- **Image URL:** N/A (Text-based LCP)
- **Rendered Dimensions:** 380px × 160px
- **Root Cause of LCP Delay:**
  Delayed main-thread availability caused by global layout hydration overhead, specifically the root layout's immediate execution of `@n8n/chat` (478 KB JS chunk) and unpruned hidden location DOM trees in navigation.

---

## 4. Primary Bottlenecks & Root Causes

1. **Third-Party Chat Blocking Main Thread (`@n8n/chat`):**
   Mounted in `src/app/[locale]/layout.tsx` and immediately imported on mount. Transferred 478 KB of JS (1.48 MB uncompressed), consuming **1,653 ms** of main-thread execution time and **245 ms** of script parse/compile time on every route.
2. **Above-the-Fold Framer Motion Hiding Heading (`<Reveal>`):**
   `Reveal` rendered `initial={{ opacity: 0 }}`. It suppressed the `<h1>` from early paint, artificially inflating LCP until all hydration finished.
3. **Massive Location Navigation Tree in Mobile & Desktop Menus:**
   `MobileNav` and `LocationsMenu` held the complete `locationNavigation` dataset (72.5 KB raw JSON, 2,624 lines) and rendered hundreds of country, region, and city links in hidden drawers on initial load. This generated **1,073 ms** of style calculation and layout cost.
4. **Oversized Mobile Icon Resource (`apple-touch-icon.png`):**
   A 2048×601 uncompressed PNG (236.5 KB) was loaded as the Apple Touch Icon.
