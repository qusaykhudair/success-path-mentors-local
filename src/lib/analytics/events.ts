export type AnalyticsMarket = 'north-america' | 'germany';
export type AnalyticsLocale = 'en' | 'ar' | 'de' | 'fr';

export interface BaseEventProperties {
  market?: AnalyticsMarket;
  locale?: AnalyticsLocale;
  surface?: string;
  ads_region?: string;
}

export interface AttributionProperties {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing_path?: string;
  referrer_host?: string;
  ads_region?: string;
}

export type TrialFormStartProperties = BaseEventProperties;

export interface TrialFormStepProperties extends BaseEventProperties {
  step_number: 1 | 2 | 3 | number;
  action: 'completed';
}

export type TrialRegistrationHandoffProperties = BaseEventProperties;

export type RegistrationFlowStartProperties = BaseEventProperties;

export interface RegistrationStepProperties extends BaseEventProperties {
  step_number: number;
  action: 'completed';
}

export type TrialRegistrationSubmitStartedProperties = BaseEventProperties;

export interface TrialRegistrationFailedProperties extends BaseEventProperties {
  error_category?: string;
  http_status?: number;
}

export interface TrialRegistrationCompleteProperties extends BaseEventProperties {
  status?: string;
  trial_status?: string;
  subject_category?: string;
}

export type WhatsAppCtaClickedProperties = BaseEventProperties;

export type ContactCtaClickedProperties = BaseEventProperties;

export type AnalyticsEventMap = {
  trial_form_start: TrialFormStartProperties;
  trial_form_step: TrialFormStepProperties;
  trial_registration_handoff: TrialRegistrationHandoffProperties;
  registration_flow_start: RegistrationFlowStartProperties;
  registration_step: RegistrationStepProperties;
  trial_registration_submit_started: TrialRegistrationSubmitStartedProperties;
  trial_registration_complete: TrialRegistrationCompleteProperties;
  trial_registration_failed: TrialRegistrationFailedProperties;
  whatsapp_cta_clicked: WhatsAppCtaClickedProperties;
  contact_cta_clicked: ContactCtaClickedProperties;
};

import { parseAcquisitionContext } from '@/config/acquisition-contexts';

export type AnalyticsEventName = keyof AnalyticsEventMap;

export const ANALYTICS_EVENT_NAMES = [
  'trial_form_start',
  'trial_form_step',
  'trial_registration_handoff',
  'registration_flow_start',
  'registration_step',
  'trial_registration_submit_started',
  'trial_registration_complete',
  'trial_registration_failed',
  'whatsapp_cta_clicked',
  'contact_cta_clicked',
] as const;

export function isAnalyticsEventName(value: unknown): value is AnalyticsEventName {
  return typeof value === 'string' && ANALYTICS_EVENT_NAMES.includes(value as AnalyticsEventName);
}

const ALLOWED_PROPERTIES_BY_EVENT: Record<AnalyticsEventName, string[]> = {
  trial_form_start: ['market', 'locale', 'surface'],
  trial_form_step: ['market', 'locale', 'surface', 'step_number', 'action'],
  trial_registration_handoff: ['market', 'locale', 'surface'],
  registration_flow_start: ['market', 'locale'],
  registration_step: ['market', 'locale', 'step_number', 'action'],
  trial_registration_submit_started: ['market', 'locale'],
  trial_registration_failed: ['market', 'locale', 'error_category', 'http_status'],
  trial_registration_complete: ['market', 'locale', 'status', 'trial_status', 'subject_category'],
  whatsapp_cta_clicked: ['market', 'locale', 'surface'],
  contact_cta_clicked: ['market', 'locale', 'surface'],
};

const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'landing_path',
  'referrer_host',
  'ads_region',
];

const PII_KEYS = [
  'parent_name',
  'student_name',
  'student_first_name',
  'email',
  'phone',
  'whatsapp',
  'otp',
  'ticket',
  'signup_ticket',
  'registration_id',
  'guardian_mid',
  'student_mid',
  'contact_id',
  'challenge_id',
  'message',
  'notes',
];

export function sanitizeEventProperties(
  eventName: AnalyticsEventName,
  properties: Record<string, unknown>
): Record<string, unknown> {
  const allowedBaseKeys = ALLOWED_PROPERTIES_BY_EVENT[eventName] || [];
  const allowedKeys = new Set([...allowedBaseKeys, ...ATTRIBUTION_KEYS]);
  const piiKeys = new Set(PII_KEYS);

  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(properties)) {
    if (piiKeys.has(key)) continue;
    if (allowedKeys.has(key)) {
      if (key === 'ads_region') {
        const parsedContext = parseAcquisitionContext(value);
        if (parsedContext) {
          sanitized[key] = parsedContext.id;
        }
      } else {
        sanitized[key] = value;
      }
    }
  }

  return sanitized;
}
