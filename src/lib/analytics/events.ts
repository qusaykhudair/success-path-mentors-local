export type AnalyticsMarket = 'north-america' | 'germany';
export type AnalyticsLocale = 'en' | 'ar' | 'de' | 'fr';

export interface BaseEventProperties {
  market?: AnalyticsMarket | string;
  locale?: AnalyticsLocale | string;
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

export interface TrialFormStartProperties extends BaseEventProperties {}

export interface TrialFormStepProperties extends BaseEventProperties {
  step_number: 1 | 2 | 3 | number;
  action: 'completed';
}

export interface TrialRegistrationHandoffProperties extends BaseEventProperties {}

export interface RegistrationFlowStartProperties extends BaseEventProperties {}

export interface RegistrationStepProperties extends BaseEventProperties {
  step_number: number;
  action: 'completed';
}

export interface TrialRegistrationSubmitStartedProperties extends BaseEventProperties {}

export interface TrialRegistrationFailedProperties extends BaseEventProperties {
  error_category?: string;
  http_status?: number;
}

export interface TrialRegistrationCompleteProperties extends BaseEventProperties {
  status?: string;
  trial_status?: string;
  subject_category?: string;
}

export interface WhatsAppCtaClickedProperties extends BaseEventProperties {}

export interface ContactCtaClickedProperties extends BaseEventProperties {}

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

export type AnalyticsEventName = keyof AnalyticsEventMap;
