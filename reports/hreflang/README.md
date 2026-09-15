# Hreflang-only audit

## Status

Local production build: **PASS, 134/134 rendered pages (67 EN/AR pairs)**.

Deployment: **pending**. No hosting deployment workflow or command is configured in this checkout. Production was inspected before deployment; these local changes have not been published. Final post-deployment approval remains pending.

## Files changed

- `src/app/[locale]/page.tsx`: use the audited helper; preserve the already-correct homepage language set.
- `src/lib/seo/urls.ts`: emit `en-CA`, `ar-CA`, and English `x-default` only for audited pairs. URL and canonical construction are unchanged.
- `src/lib/seo/hreflang-pages.ts`: explicit page eligibility, with published subject definitions supplying existing curriculum equivalents.
- `src/middleware.ts`: remove automatic non-location HTTP hreflang headers, which inferred language targets from route prefixes and included noncanonical Arabic aliases. Location headers and French handling remain unchanged. No redirect logic changed.
- `scripts/hreflang-verify.cjs`: repeatable rendered-head/HTTP validation and protected-file checks.
- `reports/hreflang/`: per-page results and captured HTML head evidence.

## Equivalent page audit

| Group | Pairs | Evidence |
|---|---:|---|
| Homepage | 1 | Same home components with `messages/en.json` and `messages/ar.json`. |
| About, how-it-works, contact, tutor-matching | 4 | Corresponding EN/AR content records in `src/content/pages/`, used by the same page components. |
| Privacy, terms, cancellation-policy, data-deletion | 4 | Corresponding EN/AR policy records in `src/content/legal/`. |
| Subject index and math, English, general science, chemistry, physics overviews | 6 | Localized overview content describing the same subjects. |
| Math pathways | 8 | `publicMathPathways`, localized titles/descriptions and the same grade/topic curriculum. |
| English strands | 11 | Approved strand records, bilingual presentation and the same curriculum data. |
| General science strands | 4 | Approved strand records, bilingual presentation and the same curriculum data. |
| Chemistry strands | 16 | Approved strand records, bilingual presentation and the same curriculum data. |
| Physics strands | 13 | Approved strand records, bilingual presentation and the same curriculum data. |

Subject pairs are equivalent localized curriculum views; technical curriculum topic names may remain in English. Eligibility is based on shared subject/grade/topic identity and localized presentation, not merely route existence.

All 134 generated non-location EN/AR routes are covered. The exact canonical pairs appear in [local/results.md](local/results.md). In particular, the Arabic About destination is `/ar/عن-المنصة`, not the `/ar/about` alias. Existing canonical destinations were retained throughout.

## Skipped

- `/fr/programme-francais` and its descendants: a separate French program, not an EN/AR homepage equivalent. No French route or metadata changes.
- Every location page, including localized `/ar/المواقع` aliases: excluded by task scope; no location metadata changes.
- Routing declarations without implemented equivalent pages (services, blog, FAQ, become-tutor, find-tutor) and nonexistent subject routes: not eligible. No pages created.
- No existing non-location EN/AR page was rejected for lack of an equivalent in this audit.

## Validation

- `npm.cmd run build`: successful, including lint and TypeScript checks.
- `node scripts/hreflang-verify.cjs http://localhost:3100 local`: **134 PASS, 0 FAIL**.
- Actual server-rendered `<head>` links checked for exact language set, duplicates, reciprocal/self references and English default. All canonical destination requests returned **200**, with redirect following disabled.
- [Local per-page table](local/results.md) includes URL, canonical, all three hreflang targets, reciprocity, each target status, and PASS/FAIL.
- [Production baseline](live-before/results.md): all destinations returned 200 with matching canonicals. Homepages already passed the required HTML language-set check; 132 other pages used generic `en`/`ar`. The stricter combined HTML/header validator flagged all 134 pages because automatic generic HTTP hreflang headers also remained present.
- [Metadata preservation](metadata-preservation.json): titles, canonical links and meta tags match the live baseline on all 134 pages, excluding the environment-dependent Next.js `next-size-adjust` marker.
- [Excluded-page checks](excluded-pages.json): sampled location routes (including Arabic aliases) and French program retain identical SEO tags and hreflang HTTP headers, after normalizing the local origin for comparison.
- 49 tracked location/French/sitemap-related files match HEAD exactly after line-ending normalization. Page copy, schema, navigation, redirects, routes, titles, descriptions and canonicals were not edited.
- `git diff --check`: passed.

## Remaining work and risks

1. Publish the verified change through the site's deployment workflow, then run:

   ```sh
   node scripts/hreflang-verify.cjs https://successpathmentors.net live-after
   ```

2. Require `134 PASS, 0 FAIL` from production before assigning final production PASS. Local success does not establish that a deployment or its cache serves the new HTML.
3. New pages require an equivalence audit before inclusion. Do not add language mappings merely because matching slugs exist.
