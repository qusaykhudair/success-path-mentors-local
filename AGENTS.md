# Project Rules

- Canonical repository is `qusaykhudair/success-path-mentors-local`.
- Stack: Next.js 16 / React 19 / next-intl / Vinext / Vite / Cloudflare / TypeScript.
- North America is the currently enabled production market.
- Germany is publicly launched and enabled (germany.enabled = true). Do not disable it.
- Global next-intl locales remain en/ar unless a work unit explicitly changes this.
- French programme routing under /fr must not be modified unless explicitly authorized.
- Execute one GER-WEB work unit at a time.
- Never proceed automatically to the next work unit.
- Do not modify unrelated files.
- Preserve EN/AR/FR behavior unless explicitly authorized.
- Run focused regression tests before and after implementation.
- Report baseline/pre-existing failures separately.
- Never change public URLs, pricing, API contracts, authentication, registration workflow or production contact values unless the work unit explicitly requires it.
- End every work unit with files created/modified/deleted, tests, failures, and status.

## Deployment Remotes

- **Every push to `main` must go to BOTH remotes:**
  - `origin` → `qusaykhudair/success-path-mentors-local` (development + Vercel)
  - `hostinger` → `SuccessPathMentors/SuccessPath-Website-development-` (production / Hostinger)
- After committing to main, always run:
  ```
  git push origin main
  git push hostinger main
  ```
- Hostinger production (`successpathmentors.net`) deploys from `SuccessPathMentors/SuccessPath-Website-development-`.
- Vercel preview deploys from `qusaykhudair/success-path-mentors-local`.
- Do NOT push to only one remote. Both must stay in sync.
