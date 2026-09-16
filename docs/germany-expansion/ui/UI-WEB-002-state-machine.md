# UI-WEB-002 — UI State Machine

## 1. Submission State Model
The frontend handles strict states to ensure data integrity and prevent false success screens.

### States:
- `IDLE`: User is actively filling out the form.
- `EDITING`: User has interacted with fields.
- `VALIDATING`: Validating constraints before moving to next step or submitting.
- `SUBMITTING`: HTTP request in flight. CTA is disabled with a loading indicator.
- `SUCCESS`: Backend explicitly returned 201 Created. Renders confirmation UI.
- `RECOVERABLE_ERROR`: Backend returned 400 (Validation) or 429 (Rate Limit). For 400 VALIDATION_ERROR, return the user to correct the invalid field(s). For 429 RATE_LIMITED, preserve form state and tell the user to retry later or use supported contact fallback. For 5xx TEMPORARY_UNAVAILABLE, preserve form state and provide retry/support path.
- `DUPLICATE_OR_EXISTING_LEAD`: Backend returns 409 DUPLICATE_LEAD. UI enters duplicate/existing-lead state with server-guided safe next action. UI explains that a request already exists and offers a supported recovery/contact path (e.g., continue on WhatsApp, contact team). Do not promise proactive contact unless backend rules guarantee it.

## 2. State Machine Diagram

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Editing : User inputs data
    Editing --> Validating : Click Next/Submit
    Validating --> Editing : Validation Failed
    Validating --> Submitting : Validation Passed (Final Step)
    Submitting --> Success : 201 Created
    Submitting --> RecoverableError : 400 / 500 / 429
    Submitting --> DuplicateLead : 409 Conflict
    RecoverableError --> Editing : User corrects data
    Success --> [*]
```

## 3. Persistence & Recovery
- **Browser Back:** Preserves form state via `sessionStorage` or React state (if SPA navigation).
- **Accidental Refresh:** Form state ideally recovered from `sessionStorage` (except PII if security dictates).
- **Abandonment:** Analytics triggers `lead_submit_failed` or `lead_abandoned`.
