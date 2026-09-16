# Mobile trace before this continuation

## Evidence and scope

Measured 2026-09-16 against a local **production build**, `http://localhost:3100/en`, Chrome and Lighthouse 13.4.1, default simulated mobile / desktop presets. These are **not production PageSpeed results**. Production browser measurement returned HTTP 403; PageSpeed API returned HTTP 429. The user requested continuing local improvements and tests first.

The supplied production range (mobile 80–82, desktop 96–99) is historical user-provided context, not a fresh measured baseline. Previously interrupted changes (including content visibility and mobile decorative blur suppression) were already present in this baseline.

Invalid recordings (`NO_NAVSTART`) are retained in raw reports and excluded, never treated as zero or passing scores. Valid mobile files: `local-baseline-mobile-1.json`, `local-baseline-extra-mobile-1.json`, `local-baseline-extra-mobile-2.json`. Desktop files: `local-baseline-desktop-desktop-{1,2,3}.json`.

| Device / run | Performance | FCP ms | LCP ms | TBT ms | CLS |
|---|---:|---:|---:|---:|---:|
| Mobile 1 | 84 | 2332.7 | 3621.5 | 202 | 0 |
| Mobile 2 | 87 | 2298.0 | 3581.0 | 73 | .000247 |
| Mobile 3 | 87 | 2293.8 | 3576.1 | 89 | .000247 |
| **Mobile median** | **87** | **2298.0** | **3581.0** | **89** | **.000247** |
| Desktop 1 | 99 | 569.7 | 798.0 | 0 | .001510 |
| Desktop 2 | 99 | 582.4 | 804.6 | 7 | .001510 |
| Desktop 3 | 99 | 611.9 | 853.1 | 12 | .001510 |
| **Desktop median** | **99** | **582.4** | **804.6** | **7** | **.001510** |

Accessibility / best practices / SEO / agentic browsing: 100 in all six valid runs.

## Exact trace attribution (mobile run 1)

Trace timings and simulated audit timings are different measurements; do not add them together. Lighthouse does not identify individual React hydration components reliably in this production trace.

| Component / resource | Measured time | Transfer bytes | Priority / action |
|---|---:|---:|---|
| Global Tailwind/design CSS, `92dd6415bba43857.css` | Blocking duration 478 ms | 18,230 | High: keep first viewport CSS blocking; inspect safely separable styles |
| Next font CSS, `ea74a6e06598b1af.css` | Blocking duration 178 ms | 1,115 | High: eliminate duplicate font declarations that override this family |
| Regular TTF requested through global CSS | Chain finishes at 323 ms | 77,754 | High: unify font definition; verify rendered family and loading order |
| Bold TTF requested through global CSS | Chain finishes at 320 ms | 76,120 | High: same font correction; preserve font-display swap |
| Hero heading `h1#hero-heading` | Trace render delay 750.3 ms; TTFB 24.7 ms | — | High: preserve SSR and immediately available hero styles |
| Style and layout, page total | 731.7 ms | — | High: reduce hidden navigation markup and retain below-fold content visibility |
| Script evaluation, page total | 647.1 ms | — | High: split location data and advanced enrollment fields |
| Script parse / compile, page total | 161.5 ms | — | Same action; no unsupported per-component timing claim |
| HTML / CSS parsing | 167.6 ms | — | Reduce hidden menu DOM without removing visible content |
| React `4bd1b696-f785427dddbba9fb.js` | Eval 188.3 ms, parse 19.1 ms | 54,796 | Required framework; reduce work around it |
| Next `1255-752ce95040351c71.js` | Eval 322.6 ms, parse 27.9 ms | 46,796 | Required framework; do not remove compatibility code blindly |
| Layout chunk `layout-943a705a0aa0f987.js` | Eval 33.7 ms, parse 7.8 ms | 16,517 | Split navigation data and stop incidental chat initialization |
| n8n chat and CSS | No initial request in this run | 0 | Source still starts on scroll / key / pointer or delayed timer; require explicit chat click |

Global CSS unused estimate: 13,235 bytes (74.1%). Combined render-blocking **estimated FCP/LCP savings: 1,100 ms**; individual request durations above are not that savings figure. Total transfer: 451,279 bytes. Lighthouse DOM: 1,585 elements (later browser snapshot 1,621; collection time differs). Initial JS transfer approximately 168 KiB; full request list in `before-page-snapshot.json`.

Lighthouse reports no unused-JS opportunity above its reporting threshold. This does **not** mean every delivered byte executes. Legacy warning is 11,815 bytes in the Next framework chunk: Array.at/flat/flatMap, Object.fromEntries/hasOwn, String.trimStart/trimEnd.

## Long tasks and reflow

| Source | Duration ms | Attribution limit / action |
|---|---:|---|
| Document | 272 | Lighthouse cannot resolve a component/function; reduce initial DOM/layout work |
| React chunk | 203 | Hydration/runtime work; split interaction-only UI |
| Unattributable | 100 | No defensible component attribution |
| Next framework chunk | 91 | Framework runtime |
| Unattributable | 71 | No defensible component attribution |
| Next framework chunk | 58 | Framework runtime |

Forced reflow: 42.992 ms unattributed + 2.194 ms layout chunk. The 2.194 ms top-call table repeats the same event and must not be double-counted. Initial scroll position measurement is already animation-frame scheduled; no large component-specific layout read is proven.

Critical dependency tree: HTML → global CSS → regular/bold fonts. Longest recorded chain is actually HTML → manifest, 406 ms (local network only, not a production latency claim).

## Component audit

- Hero and FAQ already server rendered; FAQ uses native details and retains answers and schema in HTML.
- Enrollment has no large validation library, but secondary steps are in its initial client module. Separate server shell and dynamically import secondary fields.
- Full location data is statically imported in both menus even though location DOM is delayed. Load shared data only when menus are used; render regions/cities only when expanded.
- Testimonial/video sections are already disabled by existing verified-content configuration. No testimonial content is removed by this task.
- StatCounter is not imported by a rendered route; it already has server-visible final values and viewport-triggered animation. No change warranted.
- No initial framer-motion, react-countup, n8n, carousel, or external analytics request found in the recorded initial request list.
- Existing enrollment submission simulates success after 900 ms; it has no backend request. UI regression testing cannot establish real enrollment persistence. Do not silently invent a backend in a performance task.

## Protected baseline

`before-page-snapshot.json` preserves EN/AR title, metadata, canonical, hreflang, JSON-LD, main text, FAQ content, direction, and font requests. Location page source, SEO configuration, redirects and HOLD definitions must remain unchanged. Production CSP/HSTS values remain unchanged; the interrupted localhost-only HTTP exception is narrowed to exact loopback hostnames.
