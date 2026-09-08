export type AuthLocale = 'en' | 'ar';

export type LoginChannel = 'EMAIL' | 'WHATSAPP' | 'SMS';

export interface ApiFieldError {
  field: string;
  message: string;
}

export interface ApiErrorBody {
  code?: string;
  error?: string;
  message?: string;
  details?: ApiFieldError[];
  field_errors?: ApiFieldError[];
  retry_after_seconds?: number;
  request_id?: string;
}

export interface LoginRequestPayload {
  identifier: string;
  locale: AuthLocale;
}

export interface LoginChallenge {
  challenge_id: string;
  channel: LoginChannel;
  masked_destination: string;
  expires_in_seconds: number;
  resend_after_seconds: number;
}

export interface LoginVerifyPayload {
  challenge_id: string;
  otp: string;
}

export interface AuthenticatedUser {
  auth_user_id: string;
  display_name: string;
  role: 'PARENT' | 'GUARDIAN' | 'STUDENT';
  redirect_to: string;
  authorized_student_count: number;
  lms_magic_token?: string | null;
}

export interface RegistrationPayload {
  parent_name: string;
  guardian_relationship: string;
  email: string;
  whatsapp: string;
  telephone?: string;
  student_first_name: string;
  date_of_birth?: string;
  grade: string;
  subject: string;
  curriculum: string;
  preferred_language: string;
  country: string;
  timezone: string;
  preferred_day: string;
  preferred_time: string;
  preferred_time_end?: string;
  notes?: string;
  source: 'WEBSITE';
  locale: AuthLocale;
  privacy_consent: true;
}

export type RegistrationStatus =
  | 'ACCOUNT_PENDING_VERIFICATION'
  | 'MATCH_VERIFICATION_REQUIRED'
  | 'IDENTITY_LINK_REVIEW';

export interface RegistrationVerification {
  contact_id: string;
  challenge_id: string;
  channel: LoginChannel;
  masked_destination: string;
  expires_in_seconds: number;
  resend_after_seconds: number;
}

export interface RegistrationResult {
  registration_id: string;
  status: RegistrationStatus;
  trial_status: 'WAITING_FOR_ASSIGNMENT';
  verification?: RegistrationVerification;
  student_mid: string;
  guardian_mid: string;
}

export interface RegistrationVerifyPayload {
  contact_id: string;
  challenge_id: string;
  otp: string;
}

export interface RegistrationConfirmation {
  registration_id: string;
  status: 'ACCOUNT_VERIFIED' | 'WAITING_FOR_ADMIN';
  trial_status: 'WAITING_FOR_ASSIGNMENT';
}

export class AuthApiError extends Error {
  readonly code: string;
  readonly fieldErrors: ApiFieldError[];
  readonly retryAfterSeconds?: number;
  readonly requestId?: string;

  constructor(body: ApiErrorBody = {}, status = 500) {
    super(body.error || body.message || `Authentication request failed (${status}).`);
    this.name = 'AuthApiError';
    this.code = body.code || 'UNEXPECTED_ERROR';
    this.fieldErrors = body.details || body.field_errors || [];
    this.retryAfterSeconds = body.retry_after_seconds;
    this.requestId = body.request_id;
  }
} 
