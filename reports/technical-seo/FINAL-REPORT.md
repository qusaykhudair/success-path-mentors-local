# Final technical SEO cleanup — locations excluded

Scope baseline: `226219b`. Application commit: `441146b`, pushed to `origin/main`.

## Final live acceptance — 15 September 2026

Deployment **confirmed**: the GitHub push was automatically published. The requested homepage title was first observed live at 2026-09-14 22:56:03 UTC; the final crawl completed at 22:56:58 UTC. No further confirmation of the deployment mechanism is needed for this release.

| Item | Live status | Finding |
|---|---|---|
| A. Homepage title | PASS | Exact requested HTML/OG/Twitter title. |
| B. Homepage description | PASS | Exact requested description in all three fields. |
| C. Hreflang | PASS | Actual head en-CA/ar-CA/x-default; self-reference and reciprocity checked. |
| D. robots.txt | PASS | /_next/ is crawlable; private exclusions retained. |
| E. www/non-www | FAIL | HTML redirects correctly, but www /images/logo.png is served directly by the outer hosting/CDN layer (200). |
| F. HTTP → HTTPS | FAIL | Apex /en is direct, but HTTP www still first redirects to HTTPS www; HTTP trailing-slash requests also require another normalization hop. |
| G. Canonicals | FAIL | All existing audited pages pass; explicitly requested /en/subjects/science remains an existing 404. Correct existing route: /en/subjects/general-science. |
| H. About duplicate | PASS | Exactly one occurrence live. |
| I. How It Works terms | PASS | Zero the-academy references on this English page. |
| J. Image alt | PASS | Descriptive alts published; every rendered image has an alt attribute. |
| K. Structured data | PASS | EN/AR homepage schemas exactly match the already validated pre-change schemas; public logo loads. |
| L. Sitemap | PASS | Valid XML; 427 entries; all 347 location blocks unchanged apart from their existing generated date values. Non-location lastmod omitted. |
| M. Legacy brand | PASS | Zero matches on the 147 successful non-location pages and active source. |
| N. Trust claims | PASS | Unverified review score/count remain removed. |
| O. Regression acceptance | FAIL | Build and automated tests pass; required mobile/desktop browser visual QA is unverified because no browser is connected. |

Overall: **not a full PASS**. Deployed application changes are verified; hosting/CDN configuration, the supplied science URL discrepancy, and browser visual QA remain outstanding. See live-final-qa.json and live-final-redirects.json. The final redirect matrix passes 10/17 cases; the remaining seven originate at or bypass the hosting/CDN layer. Local application tests pass 17/17.

## Changes and local verification

| Check | Local result | Evidence / limit |
|---|---|---|
| A. Homepage title | PASS | Exact requested title in HTML title, Open Graph and Twitter. H1 unchanged. |
| B. Homepage description | PASS | Exact requested description; one HTML description; matching OG/Twitter copy. |
| C. Hreflang | PASS | Actual HTML head links, self-reference and reciprocal destinations. Home uses en-CA/ar-CA/x-default. No false French-home equivalent. Location hreflang untouched. |
| D. robots.txt | PASS | Removed only the /_next/ exclusion. Private-path exclusions and sitemap declaration preserved. CSS and image requests succeed. |
| E. www/non-www | PASS at application | Explicit 301 to HTTPS apex, preserving path/query. Hosting/CDN deployment still requires live verification. |
| F. HTTP to HTTPS | PASS at application | Origin redirect tests pass. Existing CDN HTTP redirects execute before Next.js and must be combined with host normalization at that layer for one-hop HTTP www redirects. |
| G. Canonicals | FAIL for supplied URL list | All 147 existing audited pages pass. /en/subjects/science is an existing 404; actual page is /en/subjects/general-science, whose canonical passes. No new route or speculative alias was introduced. |
| H. About duplicate text | PASS | Removed the repeated description prop at the page component. Sentence now appears once; surrounding prose unchanged. |
| I. How It Works terminology | PASS | Four company references changed naturally to our team; no remaining English the-academy references on this page. |
| J. Image alt QA | PASS for source/rendered HTML | Inspected both homepage images; concise EN/AR alt text now describes the visible scenes. All 298 rendered image tags have alt attributes. Logos use Success Path Mentors; decorative testimonial images retain empty alt. |
| K. Structured data | PASS for preservation | EN and AR homepage JSON-LD is deeply identical to the live baseline. WebSite, FAQPage, EducationalOrganization, name, URL, logo and phone preserved. No Person/LocalBusiness/Review/AggregateRating nodes. No new external validator certification claimed. |
| L. Sitemap | PASS in scope | Native XML parsing succeeds; 427 entries, all preferred HTTPS host. All 347 location entries, inclusion, alternate URLs, priority and date policy unchanged. Omitted untrustworthy lastmod on 80 non-location entries only. |
| M. Legacy brand | PASS | Zero old business-brand matches in application source/translation/public text or audited rendered non-location pages. Personal-name references and historical audit evidence are not business branding. |
| N. Trust claims | PASS | Review score/count remain removed, locally and in live baseline. No operational figures restored or changed in this task. |
| O. Regression tests | FAIL for complete acceptance | Build, TypeScript, rendered SEO and redirect tests pass. Mobile/desktop browser visual tests remain unverified because the Browser runtime has no available browser. |

These are **local** results, not a claim that all production acceptance conditions have passed. Live results are recorded separately below.

## Tests executed

- `npm.cmd run typecheck` — passed.
- `npm.cmd run build` — passed compilation, ESLint, type validation, and 850 generated outputs. Non-fatal webpack cache snapshot warnings occurred.
- `node scripts/technical-seo-unit.mjs` — 21 normalization cases; 13 location source files unchanged from the task baseline.
- `node scripts/technical-seo-sitemap.mjs` — all 347 location entries unchanged; non-location lastmod omitted.
- `node scripts/technical-seo-crawl.mjs http://localhost:3101 local` — 148 requested non-location URLs; 147 successful existing pages and the known science 404. Head metadata, canonical targets, hreflang reciprocity, image alt attributes, resources, brand and targeted trust checks.
- `node scripts/technical-seo-redirects.mjs http://localhost:3101 local` — 17/17 actual HTTP response cases passed. Uses the native HTTP client to preserve the Host override; spaces encoded as + and %20 are compared by query value.
- `node scripts/technical-seo-verify.mjs` — homepage schema deep-equality with live baseline, official contact links, no invented person/business/review schema, and expected SEO results.
- PowerShell XML parser — local and production sitemaps are well-formed XML, 427 entries.
- Root route remains a 307 locale redirect to /en, followed by 200. Existing trailing slash normalization remains permanent; application normalization now combines host/scheme/slash changes in one 301 where the request reaches Next.js.
- `git diff --check` — passed before publication.

The initial build exposed strict array-access typing in the new helper; it was corrected before the passing build. Initial simulated Host tests used fetch, which did not preserve the Host override; native HTTP requests verified the actual middleware behaviour. Neither initial failure is represented as a final pass without rerunning it.

## Location protection

No change to location content, titles, descriptions, canonicals, hreflang, schema, navigation, hierarchy, geographic coverage, indexability or URL structure. No location pages removed or consolidated. Source checks and sitemap-entry comparison are stored in `unit-checks.json` and `sitemap-source-qa.json`. Global host/HTTPS/slash normalization and robots resource access are the only infrastructure effects permitted by the brief. Location lastmod behaviour is intentionally unchanged because this task excludes location changes.

## Application files and components changed

- `messages/en.json`: homepage SEO copy and two image alts.
- `messages/ar.json`: two image alts only.
- `src/app/[locale]/page.tsx`: homepage hreflang region codes only.
- `src/app/[locale]/(marketing)/about/page.tsx`: duplicate description rendering removed.
- `src/content/pages/how-it-works.ts`: four English company references.
- `src/app/robots.ts`: /_next/ exclusion removed.
- `src/app/sitemap.ts`: non-location lastmod and homepage hreflang labels; location entries preserved.
- `src/lib/seo/normalize-request-url.ts`: host/scheme/slash normalization helper.
- `src/middleware.ts`: normalization before locale handling; APIs/assets skip locale middleware.
- `next.config.mjs`: disable the earlier automatic slash redirect so normalization can happen in one step.

Added five `scripts/technical-seo-*.mjs` QA tools and evidence under `reports/technical-seo/`. The active `n8n-chat.tsx`, business email, phone, existing schema builders and location files were not modified. Generated TypeScript cache changes were restored before committing.

## Deployment requirement

The tested application commit was published to GitHub main and production deployment was confirmed through the live title, descriptions, text corrections, head hreflang and robots response. The repository exposes no GitHub Actions deployment status, but the independent live checks confirm this release. No hosting/CDN control connection is available here for the remaining outer redirect rule.

Observed production server header: `hcdn`. In the baseline, HTTP www redirects to HTTPS www before the application, while HTTPS www serves duplicate content. To satisfy one-hop normalization, the outer hosting/CDN rule must direct both HTTP hostnames and HTTPS www straight to `https://successpathmentors.net`, preserving path and query and removing the trailing slash for the existing slash-normalized routes in the same response. An origin-only redirect cannot remove a redirect already issued by the CDN.

No additional application redeployment is currently required. For the remaining edge rule, use the existing hosting/CDN project; do not create a new site or change its domain. Reference hosting documentation: [Hostinger deployment documentation](https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/), [redeployment documentation](https://www.hostinger.com/support/how-to-redeploy-a-node-js-application/).

After the outer hosting/CDN redirect rule is applied:

```powershell
node scripts/technical-seo-crawl.mjs https://successpathmentors.net live-final
node scripts/technical-seo-redirects.mjs https://successpathmentors.net live-final
```

Perform browser-based mobile/desktop visual QA and resolve whether the requested science URL was a brief typo or should become an explicitly approved alias. The application deployment is complete. Until these remaining acceptance gaps are resolved, **overall status is FAIL / incomplete**, not PASS.
