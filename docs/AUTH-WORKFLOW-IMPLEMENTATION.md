# Authentication implementation and backend handoff

## Delivery status

Latest UI correction: registration now opens `SignupMethods` with Google, Facebook, Email and WhatsApp choices before the guardian form. Email and WhatsApp reveal their respective contact inputs; their verification-send control is explicitly unavailable because no pre-registration challenge contract exists. No verification or pending identity is fabricated. The existing registration form is retained under an explicit link and can return to method selection without discarding its mounted form state. Both login method buttons and signup method buttons include the email/WhatsApp icons. This is still a partial workflow, not functional verification-first signup.

Follow-up checks: baseline focused suite passed; updated component suite passes including initial method selection, icon presence and prevention of false verification. Localized registration/login HTTP responses are 200; the initial registration HTML no longer contains guardian inputs. New signup component and login ESLint pass. Broader registration-form lint reports existing `as any` and unused `isMockAuthApi` (confirmed in the preceding commit), not introduced by this correction. Files for this correction: created `src/features/auth/signup-methods.tsx`; modified registration/login forms, `tests/phone-ui.test.mjs`, and this report. No deleted files or backend/schema changes.

This is a partial implementation against the existing website contract, not a completed authentication system. The backend source and test database were not found in the workspace. No backend, database, provider delivery, or end-to-end success is asserted. No persistence or successful authentication was mocked.

Preview: `http://localhost:3011/en/register`, `/ar/register`, `/en/login`, `/ar/login`. These changes are in `.worktrees/auth-phone-social-ui` on `fix/auth-phone-social-ui`. Port 3000 belongs to a separate checkout; opening it will not show this branch. No production deployment was made.

## Architecture discovered

The website adapter is `src/features/auth/auth-api.ts`; its UI types are in `auth-contracts.ts`. The service base comes from `NEXT_PUBLIC_API_BASE_URL` (local configuration points to `http://143.244.170.205`). `REGISTRATION_API_KEY` is server-only and is forwarded as `X-Api-Key` for registration and registration OTP. No backend repository ownership can be inferred from that IP. The workspace schema does not implement auth persistence.

| Existing endpoint | Existing request and response consumed by this website |
| --- | --- |
| POST `/api/portal/auth/login/request` | `{identifier}` (email or E.164); expects `contact_method_id`, `contact_method`, `masked_contact` |
| POST `/api/portal/auth/login/verify` | `{contact_method_id, code}`; expects `portal_token`, optional `lms_magic_token`, and `user` with roles and identifiers |
| POST `/api/registrations` | Nested guardian/student/registration/source, shown below; expects `registration_ref`, guardian/student MID, status, trial status, `verification_required`, `contact_methods` |
| POST `/api/otp/send` | `{contact_method_id}`; expects success and `expires_in_minutes` |
| POST `/api/otp/verify` | `{contact_method_id, code}`; expects `success`, `account_activated` |

These are source-derived contracts, not live backend integration verification. Registration currently precedes verification. The adapter selects the first returned contact method. The frontend cannot safely turn this into pre-registration verification using the known endpoints.

Example of the EXISTING request shape (illustrative values):

```json
{
  "guardian": {
    "full_name": "Example Parent",
    "email": "parent@example.com",
    "phone": "+970599123456",
    "relationship_type": "MOTHER"
  },
  "student": { "full_name": "Example Student", "date_of_birth": "2014-01-01" },
  "registration": {
    "subject": "MATH", "grade": 5, "curriculum": "OTHER", "language": "en",
    "timezone": "Asia/Gaza", "preferred_days": ["MONDAY"],
    "preferred_time_start": "16:00", "preferred_time_end": "17:00", "notes": ""
  },
  "source": "SUCCESS_PATH_WEBSITE"
}
```

Programme/source enum values must follow the existing form and backend. Country, structured phone metadata and optional second phone are NOT sent by this adapter: their persistence needs a backend contract extension. Do not infer that a visible country field is persisted.

## Implemented in this branch

- Reusable country/calling-code selector and local phone input, with country search and strict `libphonenumber-js/max` normalization; both registration phone inputs use it.
- Country and IANA timezone defaults from the primary phone country, manual overrides, explicit timezone reset, and preservation across registration steps. Defaults are suggestions, not proof of residence. Multi-zone countries still require user choice.
- Google/Facebook buttons restored on registration and login. The local GET `/api/auth/social/start?provider=google|facebook` resolves an operator-configured HTTPS backend start URL, rejecting unsafe configurations. Missing configuration returns 503 with a localized recoverable UI error. This is an entry dispatcher, not an OAuth implementation.
- Distinct Email and WhatsApp login choices, validation appropriate to each, separate preserved drafts and country selection, pending-state controls, existing OTP challenge flow and session behavior.
- Explicit local login POST proxies now shadow those two paths in the existing portal rewrite. They validate input, normalize phone/email, forward the SAME request shapes, preserve session cookies and Retry-After, bound upstream time, and redact OTP debug fields. Other portal paths remain on the original rewrite.
- Shared recursive response redaction on login, registration and registration OTP proxies strips `_dev_otp`, `otp`, `otp_code`, and `verification_code`, retaining protocol error codes and session fields. It is defense in depth: the backend must stop emitting secrets, including inside arbitrary message strings.
- Removed client OTP debug logging and dead mock helpers. Registration OTP confirmation now requires both backend `success` and `account_activated`; HTTP 200 alone cannot produce confirmation.

Existing portal token storage, magic-token redirect and role mapping remain. This change does not establish secure server sessions or protected-route enforcement. WhatsApp delivery is delegated to the existing identity service, with no provider SDK or delivery verification here. Email delivery is likewise unverified. Existing client cooldowns are UI timers, not security limits.

## Backend work required before full rollout

The target state machine must be authoritative on the server:

`unauthenticated -> challenge pending -> identity verified / registration incomplete -> registration completed -> active account -> authenticated session -> authorized application access`.

The backend team must provide a versioned, agreed contract for starting signup challenges by email/WhatsApp BEFORE a contact row exists; verifying challenges into a short-lived, purpose-bound registration session; reading completion state; and idempotently completing a profile. Endpoint names are deliberately not invented here. The existing contact-ID endpoints cannot be assumed to support these operations.

Required completion contract: existing profile fields plus an agreed nested phone object such as `{phoneNumber:"599123456", countryCode:"PS", dialCode:"+970", phoneE164:"+970599123456"}`, an independent `country` and `timezone`. The server must recompute phone metadata, validate country ISO and IANA zone, and bind the submitted verified identifier to the server-held identity. Responses must carry authoritative verification/completion state, stable account/MID identifiers, field errors and session transition instructions; never OTPs or provider secrets. Define duplicate conflicts and safe recovery without leaking private account information.

Google/Facebook require registered provider applications, server callbacks, state/nonce and PKCE where applicable, server-side code exchange and provider/issuer/audience/expiry validation. Link by stable provider subject; never merge accounts merely because an unverified email matches. Existing-account linking requires authenticated proof, conflict handling, and a transaction. Provider cancellation/missing email must leave a recoverable incomplete state. Start URL configuration alone does not implement this.

OTP generation, hashed storage with server-side secret protection, purpose/destination binding, expiration, single use, atomic consume, attempt limits, resend invalidation, per-identity/IP limits, trusted proxy IP handling, delivery retries and audit redaction belong to the backend. Set explicit tested policies; return Retry-After on rate limiting. No such security policy is implemented by a browser countdown.

Schema/migration requirements (logical, not executable migrations without the actual schema):

- Account with stable MID, explicit completion/status fields and completion timestamps; transactions and idempotency must prevent duplicate account/MID creation.
- Verified contact records with canonical E.164, ISO country code, dial code, national number, verification timestamps and database-enforced uniqueness according to the actual account ownership policy. Independent country and IANA timezone must be persisted in the agreed profile table.
- Provider identities with unique `(provider, provider_subject)` and account foreign key; email must not replace the provider subject.
- Expiring OTP challenges with protected digest, purpose, destination reference, attempts and consumed timestamp; server sessions with rotation/revocation and pending-registration scope.
- Existing data backfill, collision audit, unique constraints and rollback plan before enforcing canonical-phone uniqueness. No migration was applied here.

Backend test matrix required:

| Area | Required cases |
| --- | --- |
| `countryCode` | PS/EG/JO/SA/AE/GB/US accepted; unknown ISO and mismatched number rejected; shared dial-code countries resolved correctly |
| `dialCode` | Server derives +970 for PS; submitted inconsistent code rejected; no duplicated prefix |
| `phoneNumber` | Local normalization, leading trunk prefixes, whitespace, invalid length, extensions, wrong-country number |
| `phoneE164` | Canonical persisted value and read-back; equivalent formatting yields the same identity |
| `country` | Stored/read back independently of calling-code defaults; manual override retained |
| `timezone` | Valid IANA stored/read back; invalid zone rejected; multi-zone/manual choice retained |
| Duplicate phone | Existing number and concurrent equivalent registrations produce one account/MID; no silent takeover; authenticated linking only |
| OTP | Correct, incorrect, expired, replayed, exhausted, resend-invalidated, wrong purpose/destination, concurrent verification, delivery failure and rate limit |
| Social | Valid/invalid callback, bad state/nonce, expired/replayed code, missing email, existing provider, duplicate email and safe linking |
| Completion/session | Refresh/resume incomplete profile, idempotent completion, tampered verification flag, unauthenticated and incomplete route denial, role isolation, logout/revocation |

## Verification and files

| Category | Result |
| --- | --- |
| FRONTEND VERIFIED | Focused DOM/component and phone tests pass; en/ar login and registration return HTTP 200 with Google/Facebook in rendered HTML. No screenshot/browser-layout verification performed |
| API CONTRACT VERIFIED | Source inspection and local malformed-input/redaction/configuration checks pass; live upstream acceptance is NOT verified |
| BACKEND VERIFIED | No |
| DATABASE VERIFIED | No |
| E2E VERIFIED | No |

Tests: `node --test tests/auth-security.test.mjs tests/social-auth.test.mjs tests/phone.test.mjs tests/phone-ui.test.mjs`: 20 pass. Baseline focused suite: 15 pass. The new draft-switch regression initially failed and passes after fixing capture of the outgoing value. Focused ESLint for new login proxy/helpers and changed login/social components passes.

Full TypeScript check retains four baseline failures: `src/app/api/test-email/route.ts` unknown `to`; `src/lib/market-messages.ts` non-exported `MarketId`; `vite.config.ts` unknown `d1` and `r2`. Earlier broad checks also found pre-existing auth-contract endpoint and market-adoption ContactForm expectations. They were not changed to make this task appear green.

Created components/helpers across the isolated repair: `src/components/ui/phone-input.tsx`, `src/lib/phone.ts`, `src/lib/registration-phone.ts`, `src/features/auth/social-auth.ts`, `src/features/auth/social-auth-buttons.tsx`, `src/lib/auth-response.ts`, `src/lib/auth-proxy.ts`.

Created routes: `src/app/api/auth/social/start/route.ts`, `src/app/api/portal/auth/login/request/route.ts`, `src/app/api/portal/auth/login/verify/route.ts`. Modified existing routes: registration and both OTP routes. Modified UI/adapter: `registration-form.tsx`, `login-form.tsx`, `auth-api.ts`. Dependencies: `package.json` and lockfile. Tests: phone, phone UI, social auth and auth security test files. Documentation: this report and `AUTH-REPAIR-PREVIEW.md`. No files deleted, no database migrations.

Diff review is scoped to auth UI, phone helpers, existing-contract proxy handling, tests and documentation. No market, French route, pricing, header, production contact or other work-unit edits are included.

Environment: preserve `NEXT_PUBLIC_API_BASE_URL` and server-only `REGISTRATION_API_KEY`; configure `GOOGLE_AUTH_START_URL` and `FACEBOOK_AUTH_START_URL` only after actual backend OAuth entrypoints exist. Provider credentials belong in the backend secret store. The currently configured HTTP upstream is not a verified production-secure transport; an HTTPS identity-service endpoint is required for rollout.

To complete the remaining work, the real identity-service repository, agreed API additions, provider configuration and a test database are required. The requested verification-first signup, complete OAuth, account linking, persistence, session authorization and true E2E remain unfinished.
