# Phase 1B Event Contract

This document defines the strict, unified taxonomy for all Phase 1B analytics events, supporting both North America and Germany without duplicate events.

## General Rules
- **No PII**: Never send email, phone, WhatsApp number, OTP, signup ticket, registration_id, student/parent names, or free-text fields.
- **Allowed Context**: `market`, `locale`, `surface`, `step_number`, `action`, `subject_category`, `error_category`, `http_status`, `landing_path`, `referrer_host`, `utm_*`

---

### `trial_form_start`
- **Business Meaning**: User interacts meaningfully with the Hero 3-step enrollment card for the first time.
- **Trigger**: First interaction (typing, selecting) with the card. Fires exactly once.
- **Allowed Parameters**: `market`, `locale`, `surface`
- **Forbidden Parameters**: PII, field values
- **Conversion Status**: Engagement
- **Market Coverage**: Global

### `trial_form_step`
- **Business Meaning**: User successfully validates and completes a step in the Hero flow.
- **Trigger**: `next()` is called successfully in the enrollment card.
- **Allowed Parameters**: `market`, `locale`, `surface`, `step_number`, `action` (completed)
- **Forbidden Parameters**: PII, form selections
- **Conversion Status**: Engagement
- **Market Coverage**: Global

### `trial_registration_handoff`
- **Business Meaning**: User completed the Hero funnel and is being redirected to the real registration flow.
- **Trigger**: `handleSubmit()` validation passes, right before router pushes to `/register`.
- **Allowed Parameters**: `market`, `locale`, `surface`
- **Forbidden Parameters**: PII, form payload
- **Conversion Status**: Secondary Conversion
- **Market Coverage**: Global

### `registration_flow_start`
- **Business Meaning**: The actual registration form is rendered and available to the user.
- **Trigger**: `RegistrationForm` component mounts with verified ticket and identity.
- **Allowed Parameters**: `market`, `locale`
- **Forbidden Parameters**: PII, verified identity values
- **Conversion Status**: Engagement
- **Market Coverage**: Global

### `registration_step`
- **Business Meaning**: User successfully validates and completes a step in the real registration flow.
- **Trigger**: `nextStep()` is called successfully.
- **Allowed Parameters**: `market`, `locale`, `step_number`, `action` (completed)
- **Forbidden Parameters**: PII, form inputs
- **Conversion Status**: Engagement
- **Market Coverage**: Global

### `trial_registration_submit_started`
- **Business Meaning**: User clicks submit on the final step and the payload is assembled.
- **Trigger**: Immediately before `authApi.submitRegistration` fires.
- **Allowed Parameters**: `market`, `locale`
- **Forbidden Parameters**: PII, full payload
- **Conversion Status**: Engagement
- **Market Coverage**: Global

### `trial_registration_failed`
- **Business Meaning**: The registration backend rejected the submission or network failed.
- **Trigger**: `catch` block in `submitRegistration`.
- **Allowed Parameters**: `market`, `locale`, `error_category`, `http_status`
- **Forbidden Parameters**: PII, full error message string, user inputs
- **Conversion Status**: Error
- **Market Coverage**: Global

### `trial_registration_complete`
- **Business Meaning**: True, back-end confirmed registration success.
- **Trigger**: `RegistrationConfirmation` object is received and set in state.
- **Allowed Parameters**: `market`, `locale`, `status`, `trial_status`
- **Forbidden Parameters**: PII, `registration_id`, `guardian_mid`, `student_mid`, `challenge_id`
- **Conversion Status**: PRIMARY BUSINESS CONVERSION
- **Market Coverage**: Global

### `whatsapp_cta_clicked`
- **Business Meaning**: User clicked a link to initiate a WhatsApp chat.
- **Trigger**: `click` on an element with `data-analytics-event="whatsapp_cta_clicked"`.
- **Allowed Parameters**: `market`, `locale`, `surface`
- **Forbidden Parameters**: phone number, generated message
- **Conversion Status**: Secondary Conversion
- **Market Coverage**: Global

### `phone_cta_clicked`
- **Business Meaning**: User clicked a website telephone link to initiate a call.
- **Trigger**: `click` on an element with `data-analytics-event="phone_cta_clicked"`.
- **Allowed Parameters**: `market`, `locale`, `surface`
- **Forbidden Parameters**: phone number
- **Conversion Status**: Secondary Conversion
- **Market Coverage**: Global

### `contact_cta_clicked`
- **Business Meaning**: User clicked a link to contact (email, contact page).
- **Trigger**: `click` on an element with `data-analytics-event="contact_cta_clicked"`.
- **Allowed Parameters**: `market`, `locale`, `surface`
- **Forbidden Parameters**: email address
- **Conversion Status**: Secondary Conversion
- **Market Coverage**: Global
