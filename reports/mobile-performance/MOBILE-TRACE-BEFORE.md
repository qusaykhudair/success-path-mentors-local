# Mobile Performance Trace — Before Optimization

**Project:** Success Path Mentors  
**Domain:** `https://successpathmentors.net`  
**Route:** Homepage Mobile (`/en`)  
**Device Profile:** Emulated Moto G Power (4× CPU Throttling, Slow 4G / 150ms RTT)  
**Baseline Date:** September 16, 2026  

---

## 1. Executive Trace Overview

| Metric | Measured Baseline | Target | Status |
| :--- | :---: | :---: | :---: |
| **Mobile Performance Score** | **80–82** | **≥ 90** | ⚠️ Gap |
| **First Contentful Paint (FCP)** | **2.51 s** | **≤ 1.8 s** | ⚠️ Needs Reduction |
| **Largest Contentful Paint (LCP)** | **4.11 s** (Peak: 4.7 s) | **≤ 2.5 s** | ⚠️ Needs Reduction |
| **Total Blocking Time (TBT)** | **237–294 ms** | **≤ 150 ms** | ⚠️ Needs Reduction |
| **Cumulative Layout Shift (CLS)** | **0.000** | **≤ 0.05** | ✅ Pass |
| **Speed Index (SI)** | **2.47 s** | — | Good |
| **Accessibility** | **93** | **≥ 98** | ⚠️ 3 Actionable Fixes |
| **Best Practices** | **100** | **100** | ✅ Pass |
| **SEO** | **100** | **100** | ✅ Pass |
| **Agentic Browsing** | **2/3** | **3/3** | ⚠️ `llms.txt` format |

---

## 2. Main-Thread Work Breakdown (Mobile 4× Slowdown)

| Category | Duration | Impact on Load | Primary Source |
| :--- | :---: | :---: | :--- |
| **Style & Layout** | **1,123 ms** | High | Global CSS parsing, multi-section DOM layout calculation |
| **Script Evaluation** | **910 ms** | High | React 19 hydration, `framer-motion` initialization, `@n8n/chat` |
| **Other (Tasks / Overhead)** | **323 ms** | Moderate | Browser internal task queue scheduling |
| **Script Parse & Compile** | **197 ms** | Moderate | JS chunk parsing before execution |
| **Parse HTML & CSS** | **111 ms** | Low | Streaming HTML parser |
| **Rendering & Compositing** | **74 ms** | Low | Layer compositing |
| **Garbage Collection** | **26 ms** | Low | V8 memory cleanup |
| **Total Main-Thread Time** | **~2,764 ms** | Critical | Blocks interactivity & inflates LCP under throttling |

---

## 3. Render-Blocking & CSS Analysis

| Resource | Size | Potential Savings | Notes |
| :--- | :---: | :---: | :--- |
| `_next/static/css/b76389b7a39c2cc1.css` (`globals.css`) | 17.8 KiB | ~11.0 KiB unused | Global styles; required for above-the-fold hero rendering. |
| `_next/static/css/b5303e15d65092c2.css` (`@n8n/chat/style.css`) | 11.8 KiB | ~11.0 KiB unused (92.8%) | **Render-blocking in root layout `<head>`.** Chat widget is hidden on load. |
| **Total Unused CSS** | **29.6 KiB** | **~22.0 KiB** | **Action:** Decouple chat CSS from critical `<head>`. |

---

## 4. JavaScript Chunks & Hydration Breakdown

| Chunk / Module | Size (Transferred) | Main-Thread Time | Required Before Interaction? | Identified Action |
| :--- | :---: | :---: | :---: | :--- |
| `framer-motion` (in testimonials & video components) | ~120 KiB | ~250 ms | **No** | Replace with CSS transitions. Eliminate `framer-motion` from client bundle entirely. |
| `react-countup` (in `stat-counter.tsx`) | ~18 KiB | ~40 ms | **No** | Replace with native `IntersectionObserver` and lightweight JS animation. |
| `@n8n/chat` | 478 KiB | ~1,650 ms (if triggered) | **No** | Defer strictly until user explicitly clicks chat or deep idle (15s+). |
| `faq-accordion.tsx` | ~8.5 KiB | ~65 ms | **No** | Convert to server-rendered `<details><summary>` elements. |
| `supported-countries.tsx` | ~11.2 KiB | ~35 ms | **No** | Remove `'use client'` wrapper; render as pure server component. |

---

## 5. Long Tasks Audit (>50 ms on Mobile)

| # | Start Time | Duration | Execution Context | Root Cause |
| :---: | :---: | :---: | :--- | :--- |
| 1 | 1,212 ms | **463 ms** | `/en` HTML / Initial Hydration | React root hydration + heavy CSS layout evaluation |
| 2 | 3,562 ms | **247 ms** | `1255-*.js` (Component chunk) | `framer-motion` component evaluation |
| 3 | 1,762 ms | **137 ms** | `/en` Inline Execution | Layout and font style calculation |
| 4 | 3,864 ms | **105 ms** | `1255-*.js` | Testimonials carousel state initialization |
| 5 | 4,090 ms | **97 ms** | `3628-*.js` | Chat fallback timer execution |
| 6 | 4,013 ms | **77 ms** | `3714-*.js` | Secondary component hydration |
| 7 | 3,809 ms | **55 ms** | `1255-*.js` | Video testimonials state initialization |

---

## 6. Identified Accessibility Gaps (93 → ≥98 Target)

1. **`[aria-progressbar-name]` (Weight: 7)**:
   - Element: `<div class="h-1.5 w-full ... " role="progressbar" aria-valuenow="33">` in `enrollment-card.tsx`.
   - Fix: Add descriptive `aria-label={copy.stepOf.replace('#CURRENT#', String(step)).replace('#TOTAL#', String(TOTAL_STEPS))}`.
2. **`[color-contrast]` (Weight: 7)**:
   - Element: `<span class="text-primary-200">01</span>` in `steps.tsx`. Contrast ratio is 1.39:1 (fails WCAG AA 4.5:1).
   - Fix: Change to `text-primary-600` (contrast ratio > 6:1).
3. **`[label-content-name-mismatch]` (Weight: 0)**:
   - Element: Language switch trigger button displays `AR` (or `EN`), but accessible name was `Switch to العربية`.
   - Fix: Include the visible badge text inside `aria-label`.

---

## 7. Agentic Browsing Audit (2/3 → 3/3 Target)

- **Audit Failure:** `llms-txt does not follow recommendations`
- **Lighthouse Error:** `File does not appear to contain any links.`
- **Root Cause:** Plain text URLs (`- https://...`) were used in `src/app/llms.txt/route.ts` instead of standard Markdown link syntax (`- [Title](URL): Description`).
- **Fix:** Format all links as standard Markdown links.
