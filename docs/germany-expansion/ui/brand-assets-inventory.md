# SPM brand assets inventory

Inspected 2026-09-08. No assets were created, recolored, resized or replaced. This inventory concerns files actually found under public and src/assets, not an assumed external brand kit.

## Approved identity direction

Preserve Success Path Mentors identity. Navy/blue wordmark belongs on light surfaces; white/inverse wordmark belongs on dark/navy surfaces. Icon-only or genuinely stacked variants are for compact placements only. Never stretch the full wordmark into a square or substitute an unrelated mark.

## File inventory

| File | Observed properties | Current use / decision |
|---|---|---|
| `public/images/logo.png` | 120×35 PNG, 2,763 bytes; visually opened: blue horizontal SPM symbol plus two-line wordmark | Header and French header. KEEP identity; obtain a larger/vector master before high-density reuse |
| `public/images/footer.png` | 1000×296 PNG, 74,781 bytes; visually opened: pale/inverse horizontal mark | Shared and French footers. REUSE on navy after checking transparency/edge quality; it is not necessarily a flat-white vector |
| `public/icons/icon-192.png` | Actual 2048×601 PNG, 236,514 bytes; visually opened: full blue wordmark, not square icon | Manifest declares 192×192. P0 asset/manifest mismatch for future correction |
| `public/icons/icon-512.png` | Actual 2048×601 PNG, 236,514 bytes | Manifest declares 512×512; same dimensional problem |
| `public/icons/apple-touch-icon.png` | Actual 2048×601 PNG, 236,514 bytes | Manifest declares 180×180; compact app-icon export needed |
| `public/favicon.svg` | 24×24 viewBox; blue rounded geometric blocks, colors #68C4FF/#0C79D8/#2E9EFF; source inspected | Does not express the observed SPM monogram; brand ownership/intent needs confirmation |
| `public/images/programs-showcase.webp` | Visually opened: smiling child on a video-call-style portrait with embedded camera/microphone graphics | Current Programs section. Warm tutoring context; rights/source and Germany relevance unverified |
| `public/images/services-showcase.webp` | Visually opened: adult woman in video-call-style portrait, embedded controls and purple detail | Current Services section. Do not label this person an SPM tutor without evidence |
| `public/images/testimonial-bg.jpg` | 1280×720 JPEG, 131,982 bytes | Available image; composition not visually reviewed in this session; provenance unverified |
| `public/file.svg`, `public/globe.svg`, `public/window.svg` | Generic utility SVG files present | Inventory only; not approved SPM logos |
| `src/assets/din-next-lt-arabic/DINNextLTArabic-Regular.ttf` | Local regular font file, declared 400 | License and German glyph coverage require confirmation |
| `src/assets/din-next-lt-arabic/DINNextLTArabic-Light.ttf` | Local light font file, declared 300 | Avoid light weight for small functional text |
| `src/assets/din-next-lt-arabic/DINNextLTArabic-Bold.ttf` | Local bold font file, declared 700 | Candidate headings/controls subject to testing |

PNG/JPG dimensions were read directly using image metadata. The Windows image reader did not decode WebP metadata; no dimensions are asserted for those files. Local image viewing succeeded for both WebP assets. Equal sizes of the three icon files are not a claim that their bytes are identical.

## Missing or unverified variants

- No separate icon-only SPM master or genuinely vertically stacked compact lockup was found in the inspected public/src/assets tree. The text in the horizontal wordmark occupies two lines; that does not make the whole logo a compact stacked lockup.
- No SPM vector logo master, formal clear-space/minimum-size guide or asset-license ledger was found there.
- Inverse raster exists; flat-white vector fidelity and transparent edges require review.
- No evidence establishes that tutoring photos depict SPM staff/customers or have consent for Germany marketing.
- Do not generate replacement brand assets during this audit. Ask the brand owner for approved masters in the next authorized asset task.

## Existing tokens and proposed reuse

| Role | Existing source value | Guidance |
|---|---|---|
| Primary navy | #0B1F3A | Primary text/brand and dark footer |
| Deep navy | #071426 | Limited dark emphasis |
| Turquoise | #16C7C7 | Accent; use navy text on bright turquoise, verify all contrast states |
| Supporting blue | #386C8E / #2C5774 / #24475F | Existing palette, not a new identity |
| Page/surface | #FFFFFF / #F8FAFC / #F1F6FA | Calm alternating surfaces |
| Muted text/border | #475569 / #E2E8F0 | Test contrast; do not use border color as text |
| CSS radii | button/input 0.75rem; card/image 1.25rem; modal 1.5rem | Variables exist; verify utility mappings before reuse |
| Type | DIN Next LT Arabic 300/400/700; body 1rem/1.75; fluid headings | German glyph, Arabic shaping and line-length review required |
| Touch/input | minimum touch 44px; button 48px; input 52px | Retain as design targets, verify actual computed dimensions |
| Layout | container 1320px; reading 65ch; form 560px; fluid gutters | Use fewer columns and shorter text in Germany V1 |
| Motion | reduced-motion override, focus rings, hover-lift and multiple gradients | Preserve accessibility rules; reduce decorative effects |

Sources: `tailwind.config.ts`, `src/app/globals.css`, `src/lib/fonts.ts`, `src/components/ui/button.tsx`, `src/app/manifest.ts`. Some components use radius utility names absent from Tailwind's radius extension; see the current-site audit. Token existence is not proof of rendered contrast or correct class generation.

## Future asset acceptance requirements

Obtain navy and inverse vector masters, compact monogram/stacked approvals, clear-space guidance and real square icon exports. Preserve aspect ratio and choose a display size from the master rather than upscale the 120px header raster. Require source/license/consent records for all people imagery; do not infer nationality, language or qualifications from appearance. Use inclusive everyday learning settings for children and adults. Avoid flags as the sole language identifier and avoid embedding text inside imagery.
