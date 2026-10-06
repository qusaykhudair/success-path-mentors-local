# Success Path Mentors Unified Identity & Authentication Integration

This document defines the actual, canonical API contracts and integration architecture for Success Path Mentors authentication and registration across North America and Germany markets.

---

## 1. Overview & Architectural Principles

### Canonical Sign-Up State Machine (UI-WEB-004D3)
The sign-up journey follows the **Verified-Identity-First** architecture:
```
METHOD_SELECTION
  ├── Google OAuth ──────┐
  ├── Facebook OAuth ────┤
  ├── Email OTP ─────────┼─► IDENTITY_VERIFICATION ─► IDENTITY_VERIFIED (ticket issued)
  └── WhatsApp OTP ──────┘                                    │
                                                              ▼
                                                     PROFILE_COMPLETION (one shared form)
                                                              │
                                                              ▼
                                                      ACCOUNT_CREATING (submit /api/registrations)
                                                              │
                                                              ▼
                                                  ACCOUNT_CREATED_AND_LINKED (LMS/MIDs linked)
```

1. **Verify Identity First**: An active SPM family/student account is **never** created before identity verification has succeeded.
2. **Unified LMS Identity**: Sign Up must not create orphaned or unlinked records; every verified registration produces authoritative system identifiers (`registration_ref`, `guardian_mid`, `student_mid`).
3. **Short-Lived Cryptographic Signup Transaction**: Upon OTP or OAuth completion, a signed HMAC-SHA256 ticket is established (`30-minute expiry`, server-validated, tamper-resistant, bound to market & UI locale) and preserved via HttpOnly cookie `spm_signup_ticket` and query param `?signup_ticket=`.
4. **Single Shared Profile Completion Screen**: Google, Facebook, Email, and WhatsApp share one common Profile Completion form with verified badge and prefilled verified identifiers. `SocialAuthButtons` are removed from the Guardian step to prevent redundant re-authentication.

---

## 2. Routes & Markets

| Route | Market | Locales | Purpose |
| --- | --- | --- | --- |
| `/en/login` | North America | English | Parent / Student login |
| `/ar/login` | North America | Arabic (RTL) | Parent / Student login |
| `/en/register` | North America | English | Verified signup & registration |
| `/ar/register` | North America | Arabic (RTL) | Verified signup & registration |
| `/de/de/login` | Germany | German | Parent / Student login |
| `/de/en/login` | Germany | English | Parent / Student login |
| `/de/ar/login` | Germany | Arabic (RTL) | Parent / Student login |
| `/de/de/register` | Germany | German | Verified signup & registration |
| `/de/en/register` | Germany | English | Verified signup & registration |
| `/de/ar/register` | Germany | Arabic (RTL) | Verified signup & registration |

All authentication routes are marked `robots: { index: false, follow: true }`.

---

## 3. Login API Contracts (Preserved)

Login utilizes the live SPM portal authentication service at `${NEXT_PUBLIC_API_BASE_URL}/api/portal/auth/*`.

### 3.1 Request Login OTP
`POST /api/portal/auth/login/request`

**Request Body:**
```json
{
  "identifier": "parent@example.com"
}
```
*Note: `identifier` supports verified Email, WhatsApp phone (E.164), or Mobile number.*

**Response (200 OK):**
```json
{
  "challenge_id": "CHL-a1b2c3d4",
  "channel": "EMAIL",
  "masked_destination": "pa***@example.com",
  "expires_in_seconds": 600,
  "resend_after_seconds": 60
}
```

### 3.2 Verify Login OTP
`POST /api/portal/auth/login/verify`

**Request Body:**
```json
{
  "challenge_id": "CHL-a1b2c3d4",
  "otp": "123456"
}
```

**Response (200 OK):**
```json
{
  "portal_token": "eyJhbGciOi...",
  "auth_user_id": "USR-1001",
  "display_name": "Sarah Miller",
  "role": "PARENT",
  "redirect_to": "/portal",
  "authorized_student_count": 2,
  "lms_magic_token": "lms_sec_xyz789"
}
```

---

## 4. Verified Sign-Up API Contracts (UI-WEB-004D3)

### 4.1 Request Sign-Up OTP (Email or WhatsApp)
`POST /api/auth/signup/otp/request`

**Request Body:**
```json
{
  "channel": "EMAIL",
  "identifier": "newparent@example.de",
  "market": "germany",
  "ui_locale": "de"
}
```
*(For WhatsApp, `"channel": "WHATSAPP"` and `"identifier": "+49 151 23456789"`)*

**Response (200 OK):**
```json
{
  "success": true,
  "challenge_id": "SIG-f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "channel": "EMAIL",
  "masked_destination": "ne***@example.de",
  "expires_in_seconds": 600,
  "resend_after_seconds": 60
}
```

**Controls:**
- 6-digit cryptographically secure server-generated OTP
- 10-minute expiry
- 60-second resend cooldown per identifier
- Email dispatch via SendGrid (`SENDGRID_API_KEY`)
- Real WhatsApp delivery via WhatsApp Business provider integration

### 4.2 Verify Sign-Up OTP
`POST /api/auth/signup/otp/verify`

**Request Body:**
```json
{
  "challenge_id": "SIG-f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "code": "849201"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "signup_ticket": "eyJ0aWNrZXRJZCI6IlRYLTEyMyIs...hmac_sha256_signature",
  "verified_identity": {
    "method": "email",
    "identifier": "newparent@example.de",
    "maskedDestination": "ne***@example.de"
  }
}
```
**Headers Set:**
`Set-Cookie: spm_signup_ticket=<ticket>; Path=/; HttpOnly; SameSite=Lax; Max-Age=1800; Secure`

**Controls:**
- Maximum 5 attempts before challenge invalidation (`RATE_LIMITED`)
- Single-use consumption (challenge deleted upon success to prevent replay)

### 4.3 Validate Sign-Up Session
`GET /api/auth/signup/session`

Validates ticket from:
- `Authorization: Bearer <ticket>` header, OR
- `?ticket=<ticket>` or `?signup_ticket=<ticket>` query parameter, OR
- `spm_signup_ticket` HttpOnly cookie.

**Response (200 OK when valid):**
```json
{
  "valid": true,
  "identity": {
    "method": "email",
    "identifier": "newparent@example.de"
  },
  "market": "germany",
  "ui_locale": "de",
  "expires_at": 1789091410000
}
```

---

## 5. Social OAuth Contracts (Google & Facebook)

### 5.1 Google Identity Services Flow

Google uses the browser-based Google Identity Services (GIS) token client with:

`client_id=541344539683-mfeio08fjgkh4fu2u1um2bqddt2h00cl.apps.googleusercontent.com`

Scopes:
- `openid`
- `email`
- `profile`

The browser sends the Google access token to:

`POST /api/auth/social/google`

with the current market, UI locale, browser locale, and detected IANA browser timezone.

The server then:
1. Validates the access token with Google's token-info endpoint.
2. Requires the token audience to match the Success Path Google client ID and requires a positive expiry.
3. Fetches Google's OpenID userinfo.
4. Requires `sub`, `email`, and `email_verified=true`.
5. Creates a short-lived signed SPM signup ticket.

The verified identity context may contain:
- Google subject ID (`sub`) as `providerSubject`
- verified email
- display name
- given name
- family name
- profile photo URL
- Google locale
- browser locale
- browser IANA timezone
- `timezoneSource=browser`

Caller-supplied profile data is never trusted as Google identity data.

### 5.2 Profile Prefill

For Google registration, the shared Profile Completion screen automatically prefills supported LMS fields:
- Guardian full name from the verified Google display name (or given/family name fallback)
- Guardian email from the verified Google email
- Registration timezone from the browser IANA timezone

The user can still review or change editable registration values before submission.

The existing LMS registration contract currently persists the supported fields above. Google-specific metadata such as `providerSubject`, avatar URL, and provider locale stays inside the signed signup identity context until corresponding backend/LMS fields are introduced; it is not injected into arbitrary LMS notes or undocumented fields.

### 5.3 Existing Account Login

For `mode=login`, Google verifies the email identity first and the website resumes the existing portal OTP challenge for that verified email. The portal backend remains the authority that issues the final portal/LMS token.

### 5.4 Facebook

Facebook keeps the existing configured social-start integration and is independent from the Google GIS flow.

---

## 6. Profile Completion & Account Creation

`POST /api/registrations` (Proxied to backend with server-side `X-Api-Key`)

**Request Payload:**
```json
{
  "guardian": {
    "full_name": "Jane Doe",
    "email": "jane.doe@example.de",
    "whatsapp": "+4915123456789",
    "telephone": "+4915123456789",
    "relationship_type": "PARENT"
  },
  "student": {
    "full_name": "Leo Doe",
    "date_of_birth": null
  },
  "registration": {
    "subject": "German",
    "grade": 5,
    "curriculum": "German School Curriculum",
    "language": "German",
    "timezone": "Europe/Berlin",
    "preferred_days": ["MONDAY"],
    "preferred_time_start": "16:00",
    "notes": null
  },
  "source": "WEBSITE",
  "signup_ticket": "eyJ0aWNrZXRJZCI6IlRYLTEyMyIs...hmac_sha256_signature"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "registration_ref": "REG-839210",
  "student_mid": "MID-S-99201",
  "guardian_mid": "MID-G-44810",
  "is_existing_guardian": false,
  "status": "ACCOUNT_VERIFIED",
  "trial_status": "WAITING_FOR_ASSIGNMENT",
  "verification_required": false,
  "next_step": "WAITING_FOR_ADMIN"
}
```

---

## 7. Security Audit & Token Storage

### Current `portal_token` Handling
- **Audit Result:** The existing `/api/portal/auth/login/verify` endpoint returns `portal_token` in the JSON body. The frontend stores it in `localStorage` for portal API calls.
- **Security Assessment:** An HttpOnly Secure cookie is strictly preferred to protect bearer tokens against XSS exfiltration.
- **Action / Blocker Status:** Because the live backend at `NEXT_PUBLIC_API_BASE_URL` currently expects Authorization header bearer token authorization from browser storage, migrating portal login away from `localStorage` requires backend cookie support (`Set-Cookie: spm_portal_token=...; HttpOnly; Secure`). Modifying this in the frontend alone would break existing live logins. It is tracked as a priority security task for the backend API team.
- **Signup Flow Security (004D3):** For the newly implemented signup flow, the verified transaction ticket is transmitted via HttpOnly Secure cookie (`spm_signup_ticket`) with 30-minute expiration and HMAC-SHA256 tamper verification.
