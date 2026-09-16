# UI-WEB-002 — Analytics Event Model

## 1. Event Definitions
| Event | Trigger | Properties |
|---|---|---|
| `hero_service_selected` | User clicks a service card in the Hero. | `market`, `locale`, `selected_service`, `session_id`, `landing_page` |
| `lead_flow_started` | User lands on the dedicated trial route. | `market`, `locale`, `selected_service`, `session_id` |
| `lead_step_viewed` | User enters a specific step (2, 3, 4). | `step_id`, `session_id` |
| `lead_step_completed` | User successfully answers and clicks Next. | `step_id`, `session_id` |
| `lead_validation_error` | User attempts to proceed but fails frontend validation. | `step_id`, `field_name`, `error_type` |
| `lead_submit_started` | User clicks final Submit CTA. | `market`, `session_id` |
| `lead_created` | Backend returns 201 Success. | `lead_id` (hashed), `market`, `selected_service` |
| `lead_submit_failed` | Backend returns an error. | `error_category`, `status_code` |
| `whatsapp_cta_clicked` | User clicks the WhatsApp button on the success screen. | `market`, `lead_id` (hashed) |

## 2. Attribution Strategy
**First Touch vs Current Touch:**
- **First Touch:** Captured via session cookie/localStorage upon initial entry (e.g., `utm_source=meta`). Sent in the API payload to credit the acquiring campaign. *Note:* Storage behavior must respect applicable consent/privacy rules. Necessary operational session state and marketing attribution must be treated separately. Do not assume marketing attribution storage is always allowed before consent.
- **Current Touch:** Derived from the current session or URL parameters if the user left and came back via a retargeting link.
- **Fields:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `landing_page`, `referrer`, `session_id`.
