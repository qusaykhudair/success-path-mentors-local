# Performance Budget — Success Path Mentors

**Domain:** `https://successpathmentors.net`  
**Framework:** Next.js 15.5.22 / React 19.0.0  
**Effective Date:** September 16, 2026  
**Status:** ACTIVE

---

## 1. Executive Summary

This performance budget establishes quantitative constraints for all future development, content authoring, and third-party integrations across Success Path Mentors. The thresholds are established directly from measured production benchmarks and Lighthouse audits to ensure Core Web Vitals compliance without sacrificing SEO architecture, conversion flows, or multilingual content.

---

## 2. Core Web Vitals & Lab Metrics Budget

| Metric | Target (Good) | Needs Improvement | Budget Limit (Fail) | Baseline (Mobile) | Sprint Target |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile LCP** | **≤ 2.5 s** | 2.5 s – 4.0 s | **> 2.5 s** | ~8.9 s | **≤ 2.5 s** |
| **Desktop LCP** | **≤ 1.5 s** | 1.5 s – 2.5 s | **> 2.5 s** | ~2.0 s | **≤ 1.5 s** |
| **Mobile FCP** | **≤ 1.8 s** | 1.8 s – 3.0 s | **> 2.5 s** | ~2.5 s | **≤ 1.8 s** |
| **Desktop FCP** | **≤ 0.8 s** | 0.8 s – 1.5 s | **> 1.5 s** | ~0.5 s | **≤ 0.8 s** |
| **Mobile TBT** | **≤ 200 ms** | 200 ms – 500 ms | **> 300 ms** | ~260–1,740 ms | **≤ 200 ms** |
| **Desktop TBT** | **≤ 100 ms** | 100 ms – 300 ms | **> 200 ms** | ~430–2,320 ms | **≤ 100 ms** |
| **CLS (All devices)**| **0.000** | 0.001 – 0.100 | **> 0.05** | **0.000** | **0.000 (Hard Lock)** |
| **Speed Index (Mobile)** | **≤ 3.0 s** | 3.0 s – 4.5 s | **> 4.0 s** | ~3.4 s | **≤ 3.0 s** |
| **INP (Field data)** | **≤ 200 ms** | 200 ms – 500 ms | **> 200 ms** | Insufficient | **≤ 200 ms** |

---

## 3. Asset Transfer & Resource Budgets

| Resource Type | Maximum Budget (Gzip/Brotli) | Pre-Sprint Baseline | Notes & Constraints |
| :--- | :--- | :--- | :--- |
| **Initial JS (Main Thread)** | **≤ 180 KB** | ~350 KB | Excludes deferred chunks loaded on interaction |
| **Total JS Transferred (Initial Page Load)** | **≤ 250 KB** | ~680 KB | Chat widget (`@n8n/chat`) deferred to idle/interaction |
| **Largest Image Resource (Hero / Above-Fold)**| **≤ 75 KB** | N/A (Text LCP) | Modern WebP/AVIF format with responsive `sizes` |
| **Total Image Transfer (Above Fold)** | **≤ 120 KB** | ~280 KB | Unused or uncompressed icons strictly disallowed |
| **Third-Party Script Transfer (Initial Load)** | **≤ 20 KB** | ~478 KB | All chat, marketing, and non-essential scripts deferred |
| **Third-Party CPU Main-Thread Time** | **≤ 150 ms** | ~1,650 ms | Defer execution until idle or user interaction |
| **Long Tasks (> 50 ms) on Load** | **≤ 2** | 9–14 tasks | Measured during initial 5-second trace window |
| **Total DOM Nodes** | **≤ 1,200 nodes** | ~1,850 nodes | Locations mega-menu rendered lazily on interaction |
| **Maximum DOM Depth** | **≤ 28 levels** | 24 levels | Prevent deep nesting in navigation containers |

---

## 4. Hard Technical Rules & Enforcement

1. **Above-the-Fold LCP Protection:**
   - The primary heading (`<h1>`) and hero copy MUST be server-rendered directly into initial HTML.
   - Do NOT wrap hero text elements in animations (e.g., `<Reveal>`) that set `opacity: 0` or wait for client hydration.
2. **Third-Party Integrations:**
   - Any external chat, CRM, or marketing script must use progressive hydration (e.g., `requestIdleCallback`, user interaction triggers like `pointerdown` or `scroll`).
   - Third-party packages must never be imported synchronously in root layouts.
3. **Mega-Menu & Location Hierarchy:**
   - Global navigation location trees must NOT hydrate hundreds of hidden city links during initial page load.
   - Use deferred client rendering or progressive interaction patterns.
4. **Zero Layout Shift (CLS = 0.000):**
   - Explicit `width` and `height` attributes are mandatory on all images, icons, and SVG placeholders.
   - Font loading must employ `font-display: swap` with system fallback metrics matching web fonts.
5. **SEO & Accessibility Immutability:**
   - Performance optimizations must never remove crawlable content, alter semantic headings, compromise ARIA attributes, or reduce Lighthouse SEO below 100.
