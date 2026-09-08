# Success Path unified identity frontend

This implementation adds complete bilingual parent/student authentication and registration surfaces to the existing Next.js App Router project.

## Routes

| Experience | English | Arabic |
| --- | --- | --- |
| Parent/student login | `/en/login` | `/ar/login` |
| Registration | `/en/register` | `/ar/register` |

Both routes use the existing DIN font, navy/turquoise design tokens, responsive navigation and RTL/LTR layout. Authentication routes are intentionally marked `noindex`.

## Runtime configuration

Copy `.env.example` to `.env.local` for local development.

```env
NEXT_PUBLIC_AUTH_API_MODE=mock
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

- `mock`: enables the complete interactive review flow without a backend. Any six-digit OTP is accepted. Mock mode never creates real accounts and never sends data outside the browser.
- `live`: sends requests to `NEXT_PUBLIC_API_BASE_URL`. Requests use `credentials: include` so the backend can set and rotate an HttpOnly session cookie.

Never place database credentials, OTP secrets, private keys or access tokens in a `NEXT_PUBLIC_*` variable.

## API contracts used by the frontend

### Request login OTP

`POST /api/auth/login/request`

```json
{
  "identifier": "ahmed@example.com",
  "locale": "en"
}
```

Expected response:

```json
{
  "challenge_id": "CHL-123",
  "channel": "EMAIL",
  "masked_destination": "ah***@example.com",
  "expires_in_seconds": 300,
  "resend_after_seconds": 45
}
```

The backend should return a non-enumerating response strategy and apply eligibility, verification, resend and rate-limit rules server-side.

### Verify login OTP

`POST /api/auth/login/verify`

```json
{
  "challenge_id": "CHL-123",
  "otp": "123456"
}
```

The endpoint sets or rotates the secure session. After it succeeds, the frontend calls `GET /api/auth/me` as required by the identity manual.

Expected `GET /api/auth/me` response:

```json
{
  "auth_user_id": "USER-1001",
  "display_name": "Ahmed Ali",
  "role": "PARENT",
  "redirect_to": "/en/portal",
  "authorized_student_count": 2
}
```

### Submit registration

`POST /api/registrations`

The frontend sends the PDF-defined fields plus `guardian_relationship`, `source`, `locale` and `privacy_consent`. The TypeScript source of truth is `src/features/auth/auth-contracts.ts`.

Expected new-account response:

```json
{
  "registration_id": "REG-1001",
  "status": "ACCOUNT_PENDING_VERIFICATION",
  "trial_status": "WAITING_FOR_ASSIGNMENT",
  "verification": {
    "contact_id": "CONTACT-1001",
    "challenge_id": "CHL-1001",
    "channel": "EMAIL",
    "masked_destination": "ah***@example.com",
    "expires_in_seconds": 300,
    "resend_after_seconds": 45
  }
}
```

Supported duplicate-safe outcomes:

- `MATCH_VERIFICATION_REQUIRED`: an existing verified guardian is a strong match. The UI requires verification before attaching the new student.
- `IDENTITY_LINK_REVIEW`: possible records conflict. The UI confirms that no account relationship was guessed and sends the case for review.
- Every registration keeps `trial_status` at `WAITING_FOR_ASSIGNMENT`; the frontend never auto-selects a teacher or slot.

### Verify registration contact

`POST /api/auth/contacts/{contact_id}/verify`

```json
{
  "challenge_id": "CHL-1001",
  "otp": "123456",
  "registration_id": "REG-1001"
}
```

### Resend registration verification

`POST /api/auth/contacts/{contact_id}/verification/request`

```json
{
  "purpose": "REGISTRATION"
}
```

The backend should return the same challenge shape as the login request.

## Standard error envelope

```json
{
  "code": "OTP_INVALID",
  "message": "Optional safe message",
  "field_errors": [
    { "field": "email", "message": "Email is invalid" }
  ],
  "retry_after_seconds": 45,
  "request_id": "REQ-123"
}
```

The UI directly handles `OTP_INVALID`, `OTP_EXPIRED`, `RATE_LIMITED`, `REQUEST_TIMEOUT`, `NETWORK_ERROR` and field-level validation errors. Unknown backend messages are not exposed verbatim.

## Backend security responsibilities

- Normalize and validate every payload again on the server.
- Never use Parent MID, Student MID, Family ID, a name or a phone number alone as proof of identity.
- Enforce OTP randomness, short expiry, single use, replay prevention, attempt limits and resend throttling.
- Set the browser session with HttpOnly, Secure and appropriate SameSite attributes; rotate it after authentication.
- Authorize every protected student/family request on the server. The frontend is not an authorization boundary.
- Log security events without OTPs, passwords, access tokens or secret values.
- Keep registration and `STUDENT_REGISTERED` / `TRIAL_SCHEDULED` event publication idempotent.

## Backend handoff checklist

1. Set `NEXT_PUBLIC_AUTH_API_MODE=live` and the API gateway URL.
2. Confirm CORS allows only approved website origins and supports credentialed requests.
3. Confirm endpoint payloads against `auth-contracts.ts`.
4. Confirm secure-cookie behavior in development, staging and production.
5. Test wrong, expired, reused and throttled OTPs.
6. Test new family, existing parent adding a second student and identity conflict review.
7. Test independent husband/wife identities linked to the same authorized students.
8. Test cross-family and cross-student access rejection at the API layer.
9. Confirm registration does not create a teacher assignment or confirmed booking.
10. Replace mock mode before production release.
