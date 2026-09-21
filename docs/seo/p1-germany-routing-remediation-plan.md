# P1 Germany Routing Remediation Plan

This document is a planning artifact only. No production runtime change is included here.

## Scope

1. Replace Germany default-locale internal `/de/de/*` links with direct canonical `/de/*` links using existing market-routing helpers.
2. Add real indexable Germany child landing pages to the XML sitemap for de/en/ar equivalents; exclude auth/trial utilities.
3. Add hreflang alternates (`de-DE`, `en-DE`, `ar-DE`, `x-default`) to real equivalent Germany child landing pages.

## Guardrails

- Keep `/de/de` and `/de/de/*` 301 redirects as legacy safety nets.
- Do not change North America or French routing except where explicitly scoped elsewhere.
- Do not add non-existent translated alternates.
- Do not index login/register/trial/free-trial utilities.
- Preserve existing canonical behavior and Germany index/follow state.
- Build, typecheck, tests, and live redirect/canonical smoke checks must pass before merge.
