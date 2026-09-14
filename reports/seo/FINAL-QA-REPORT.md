# SEO Brand Identity and Trust QA — Success Path Mentors

Audit date: 15 September 2026 (Africa/Cairo; crawl timestamps are recorded in UTC).

**Status: local implementation and automated QA passed; overall production acceptance remains pending.** The changes have not been deployed. Production still serves legacy identity and unverified claims. Location content requires editorial review; no pages were deleted, no routes changed, and no redirects added.

## A. Legacy Brand Cleanup

The root sources were `messages/en.json`, `messages/ar.json`, and Arabic location content. Corrected shared footer text, logo alt text, homepage metadata site name, how-it-works heading, FAQ questions/answers, testimonial introduction, contact copy, and WhatsApp booking messages. Arabic legacy names and phonetic translations of the current brand now use the exact official name **Success Path Mentors**. The large location-file diff is 694 brand-only line changes; local content was not rewritten.

Final case-insensitive search of application source, translations, and public text assets found zero old business-brand variants. Personal references in withheld quotes remain unchanged. Their authenticity is not asserted. The internal `whyMustafa` translation key and `why-mustafa` section anchor are implementation identifiers, not displayed branding; the anchor was preserved for existing fragment links. The IDE workspace file retains an external legacy-named filesystem directory reference, which is not published business branding. Live crawl evidence intentionally retains pre-deployment old text.

The public logo was visually inspected and displays the current brand. Binary assets were not exhaustively OCR-audited.

## B. Claims Verification

See [claims-audit.csv](claims-audit.csv) for the requested claim / page / source / verified / action table, including every testimonial identity in both languages.

- Removed the hardcoded 4.9 rating, 2,000+ review count, 150+ active students, 700+ monthly sessions, and 30+ specialized tutors. No supporting platform links or operational records were found.
- Replaced the separate monthly-session programme badge with a factual one-to-one online tutoring label in both languages.
- Withheld all eight written testimonials and all three video testimonials in each locale using `src/config/trust.ts`. Original names, quotes, ratings, and links remain available in translations for attribution review. All three video identities use the same YouTube URL, which does not establish three different customer identities. The README also records a historical need for genuine testimonial sources; it is corroborating context, not proof that any individual quote is false.
- The “real feedback” introduction now uses the official brand, but its entire section remains unpublished pending verification. No customer identity or performance story is represented as verified.
- Replaced the absolute security promise with a statement about using contact information to respond to tutoring requests.
- Replaced the unused money-back-guarantee label with a cancellation-policy label. The existing refund policy is conditional.
- Preserved package prices, lesson quantities, and confirmation-before-payment terms as internally published service offers. They are not verified performance statistics.

Restoring testimonials requires original platform permalinks or internal source records, correct attribution, permission to publish, and confirmation that any displayed rating actually belongs to the source. A video URL alone is insufficient evidence for the supplied name, grade, and outcome quotation.

## C. Location Page Risks

See [location-audit.csv](location-audit.csv): 347 English location pages, including the index, with one row per URL and all requested columns.

All 347 have unique titles, meta descriptions, and H1 strings. All 347 also have a highly similar nearest neighbour under the normalized-body comparison. This is a screening result, **not** a search-engine penalty determination.

Method: compare introduction, curriculum copy, assessment copy, local context, and FAQs using five-word shingles and Jaccard similarity, after replacing known place names. Unique content score = 100 × (1 − closest-page similarity), rounded. High duplicate risk means similarity above 0.80; medium above 0.60. The score is a relative originality heuristic, not an SEO ranking score. Closest page and similarity are included for inspection. Navigation and footer boilerplate are excluded.

Local guidance repeatedly asks for grade, school materials, schedule, and learning needs. Regional curriculum/assessment references provide some value, but city pages largely inherit regional information and use generic local guidance. Many pages differ primarily by place name, creating potential doorway-style risk. Parent and curriculum pages also share substantial copy, so they are flagged rather than presumed unique because of their hierarchy.

Recommendation: preserve routes while reviewing city pages against the relevant regional/curriculum pages. Add distinct, source-supported help only where there is an actual local need. Evaluate consolidation only after analysing search performance and user value. No unsupported local facts, schools, offices, or statistics were added. The existing visible online-only/no-physical-office disclaimer and virtual service model were preserved.

Useful *unique* local context is therefore not a PASS across this section. All external curriculum and assessment references have not been independently revalidated for current requirements.

## D. Metadata QA

Automated local crawl: **842 pages**, plus **409 additional internal destinations**, all HTTP 200 after following redirects. All audited page records include title, description, canonical, Open Graph title/description, Twitter title/description, language, H1 count, and language alternates. No missing required metadata or invalid canonical targets were detected.

Every audited page has one H1. Canonicals resolve to successful, self-canonical targets. Language alternates resolve and are reciprocal. Existing English-slug Arabic aliases can legitimately point to the existing translated Arabic canonical URLs; they were not treated as broken routes.

Fixed `buildLocalizedPath` so nested Arabic location sitemap URLs match the translated canonical route already used by location metadata and links. This changes sitemap output, not routing or redirects. Existing alias URLs continue to work.

The crawl checks HTTP destinations, not every fragment anchor, form submission, external link, or client-side interaction. Open Graph image dimensions and social-platform previews were not independently validated.

## E. Schema QA

Every audited page contains JSON-LD; none failed JSON parsing. Automated checks verified the full-page organization name, URL, logo URL, official phone (normalizing punctuation), breadcrumb sequence/names, and FAQ question/answer structure. All checks passed. Shared organization type remains `EducationalOrganization`; existing Service/WebPage/BreadcrumbList/FAQPage types were retained.

Added the official phone to the French organization schema and removed its inconsistent brand-as-legal-name field. The existing EN/AR corporate legal name is retained because a trading brand and corporate legal identity need not be identical; corporate registration has not been independently verified.

Location schema still represents online tutoring and virtual service channels. No business street address or physical branch was added. These are syntax and targeted semantic checks, not a complete schema.org vocabulary or Google Rich Results validation, and do not establish rich-result eligibility.

## F. Multilingual QA

EN and AR are the full-site locales. FR is a separate French programme section with its own metadata, header, and footer. The existing `/fr` redirect ends at `/fr/programme-francais` (HTTP 200); `/fr` itself is not a direct 200 page. No unnecessary redirect or translated route was created.

Arabic public brand mentions now use the exact Latin-script official brand, as requested. Arabic surrounding copy remains Arabic. French programme pages retain French content and self-referential French hreflang; they are not falsely declared equivalents of the English or Arabic homepage. Automated document-language and reciprocal-alternate checks passed. Full human linguistic review was not performed.

## G. Pages Changed

- `/en` and `/ar`: homepage trust sections, copy, metadata site names, and brand identity.
- All shared-footer EN/AR pages: corrected shared footer text, logo accessibility labels, and relevant translated contact messages.
- All 347 AR location definitions: brand normalization in titles/FAQ text, reflected in visible copy and metadata/schema.
- French programme pages: shared organization schema phone and legal-name consistency.
- `/sitemap.xml`: canonical Arabic nested-location URLs.

## H. Files Changed

Application files:

- `messages/en.json`
- `messages/ar.json`
- `src/components/sections/home/hero.tsx`
- `src/components/sections/home/testimonials.tsx`
- `src/components/sections/home/video-testimonials.tsx`
- `src/config/trust.ts`
- `src/content/locations/location-pages.ts`
- `src/lib/seo/urls.ts`
- `src/app/fr/layout.tsx`
- `src/components/subjects/english/english-strand-icon.tsx` (stale comment only)

Added audit tooling: `scripts/seo-source-audit.mjs`, `scripts/seo-crawl.mjs`, `scripts/seo-verify.mjs`. Added this report, claim/location CSVs, location inventory, live/local crawl JSON, and semantic QA JSON in `reports/seo/`. Generated TypeScript cache changes were reverted. No changes were made to the active chat component.

## I. Tests Passed

- `npm.cmd run typecheck`.
- `npm.cmd run build`: successful production compilation, lint/type validation, and 850 generated outputs.
- Focused ESLint check of changed components and trust configuration.
- `git diff --check`.
- Final source-brand and numeric-claim searches.
- `node scripts/seo-crawl.mjs http://localhost:3100 local`: 842 pages + 409 internal destinations; no failed HTTP destinations, legacy public branding, flagged numeric trust claims, required metadata failures, or invalid JSON-LD.
- `node scripts/seo-verify.mjs`: no document-language, H1, hreflang, canonical, organization identity/contact, breadcrumb-structure, or FAQ-structure issues.

The crawler follows redirects with a timeout; no loops were encountered. Its numeric-claim detector is targeted to the audited claims and is complemented by source review, not a general truth detector. The first build caught a malformed JSON edit; it was corrected before the final passing build. Webpack emitted non-fatal cache snapshot warnings.

Reproduce after deployment:

```powershell
npm.cmd run build
npm.cmd run start -- --port 3100
# In another terminal:
node scripts/seo-crawl.mjs http://localhost:3100 local
node scripts/seo-verify.mjs
node scripts/seo-crawl.mjs https://successpathmentors.net live
```

`seo-source-audit.mjs` regenerates the location audit while preserving the original claim-evidence snapshot. Crawl JSON is overwritten when rerun with the same label.

## J. Remaining Risks / Production Acceptance

**No overall PASS is claimed.** Production crawl evidence: **1,188 pages** plus **63 other internal destinations**, all successful, but **1,174 pages** still contain legacy or translated branding and **2 homepages** still expose the targeted numeric claims. See [live-crawl.json](live-crawl.json). Counts differ from the local crawl because the pre-change sitemap lists English-slug Arabic aliases in addition to discovered translated canonical pages. Both crawls checked 1,251 total destinations.

The six requested key URLs were checked. `/en`, `/ar`, `/en/about`, `/en/how-it-works`, and `/en/locations/canada` return 200; `/fr` follows its existing redirect to a successful French programme page.

Outstanding acceptance work:

1. Deploy the reviewed changes using the site's hosting workflow, then rerun the live crawl. No configured hosting deployment workflow or deployment target was present in the repository; no production publish, git push, or deploy was performed.
2. Review location originality and usefulness using the per-page audit. No mass rewrite is justified without factual local input and performance analysis.
3. Supply testimonial attribution/permission and operational records before republishing withheld trust content.
4. Complete browser visual QA: the Browser runtime reported no available browser, so screenshots, responsive layout, animation, and interactive behaviour were not verified.
5. If required for final sign-off, perform complete schema vocabulary/rich-result validation, human language review, and current external curriculum-reference verification.

Evidence: [local-crawl.json](local-crawl.json), [semantic-qa.json](semantic-qa.json), [claims-audit.csv](claims-audit.csv), [location-audit.csv](location-audit.csv).
