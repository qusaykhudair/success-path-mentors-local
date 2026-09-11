import {
  AuthApiError,
  type AuthenticatedUser,
  type LoginChallenge,
  type LoginRequestPayload,
  type LoginVerifyPayload,
  type RegistrationConfirmation,
  type RegistrationPayload,
  type RegistrationResult,
  type RegistrationVerifyPayload,
  type RegistrationVerification,
} from './auth-contracts';

const apiBaseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || '')
  .trim()
  .replace(/\/+$/, '');

export const isMockAuthApi = false;

const REQUEST_TIMEOUT_MS = 15_000;

function apiUrl(path: string, useProxy = false): string {
  if (useProxy) return path;
  return `${apiBaseUrl}${path}`;
}

async function requestJson<T>(
  path: string,
  init: RequestInit,
  locale: 'en' | 'ar',
  useProxy = false
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT_MS
  );

  try {
    const response = await fetch(apiUrl(path, useProxy), {
      ...init,
      credentials: 'include',
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': locale,
        'X-Request-Source': 'SUCCESS_PATH_WEBSITE',
        ...init.headers,
      },
    });

    const body = (await response
      .json()
      .catch(() => ({}))) as T;

    if (!response.ok) {
      const errorBody = body as Record<string, unknown>;
      let mappedCode = errorBody.code as string | undefined;

      if (!mappedCode) {
        if (response.status === 429) {
          mappedCode = 'RATE_LIMITED';
        } else if (response.status === 400 && typeof errorBody.error === 'string' && errorBody.error.toLowerCase().includes('already verified')) {
          mappedCode = 'ALREADY_VERIFIED';
        } else if (response.status === 400 && typeof errorBody.error === 'string' && errorBody.error.toLowerCase().includes('incorrect')) {
          mappedCode = 'OTP_INVALID';
        } else if (response.status === 401 && typeof errorBody.error === 'string' && errorBody.error.toLowerCase().includes('expired')) {
          mappedCode = 'OTP_EXPIRED';
        } else if (response.status === 401 && typeof errorBody.error === 'string' && errorBody.error.toLowerCase().includes('invalid')) {
          mappedCode = 'OTP_INVALID';
        }
      }

      if (mappedCode) {
        errorBody.code = mappedCode;
      }

      throw new AuthApiError(
        errorBody,
        response.status
      );
    }

    return body;
  } catch (error) {
    if (error instanceof AuthApiError) {
      throw error;
    }

    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new AuthApiError({ code: 'REQUEST_TIMEOUT' }, 408);
    }

    throw new AuthApiError({ code: 'NETWORK_ERROR' }, 503);
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function wait(ms = 550): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function createId(prefix: string): string {
  const randomPart = window.crypto
    .randomUUID()
    .replaceAll('-', '')
    .slice(0, 12)
    .toUpperCase();

  return `${prefix}-${randomPart}`;
}

function maskIdentifier(identifier: string): {
  channel: LoginChallenge['channel'];
  destination: string;
} {
  if (identifier.includes('@')) {
    const [name = '', domain = ''] = identifier.split('@');
    const visibleName = name.slice(0, 2);

    return {
      channel: 'EMAIL',
      destination: `${visibleName}${'*'.repeat(Math.max(3, name.length - 2))}@${domain}`,
    };
  }

  const digits = identifier.replace(/\D/g, '');
  return {
    channel: 'WHATSAPP',
    destination: `+${'*'.repeat(Math.max(5, digits.length - 4))}${digits.slice(-4)}`,
  };
}

async function mockRequestLogin(
  payload: LoginRequestPayload
): Promise<LoginChallenge> {
  throw new Error("Mock API disabled");
}

async function mockVerifyLogin(
  payload: LoginVerifyPayload,
  locale: 'en' | 'ar'
): Promise<AuthenticatedUser> {
  throw new Error("Mock API disabled");
}

async function mockSubmitRegistration(
  payload: RegistrationPayload
): Promise<RegistrationResult> {
  throw new Error("Mock API disabled");
}

async function mockVerifyRegistration(
  payload: RegistrationVerifyPayload,
  registrationId: string
): Promise<RegistrationConfirmation> {
  throw new Error("Mock API disabled");
}

export const authApi = {
  requestLogin(payload: LoginRequestPayload): Promise<LoginChallenge> {
    if (isMockAuthApi) {
      return mockRequestLogin(payload);
    }

    return requestJson<{
      masked_contact: string;
      contact_method_id: number;
      contact_method: string;
      message: string;
      _dev_otp?: string;
    }>(
      '/api/portal/auth/login/request',
      { method: 'POST', body: JSON.stringify({ identifier: payload.identifier }) },
      payload.locale,
      true
    ).then((res) => {
      if (res._dev_otp) {
        console.log('Backend returned DEV OTP code (Login):', res._dev_otp);
      }
      return {
        challenge_id: res.contact_method_id.toString(),
        channel: res.contact_method as any,
        masked_destination: res.masked_contact,
        expires_in_seconds: 300,
        resend_after_seconds: 60,
      };
    });
  },

  verifyLogin(
    payload: LoginVerifyPayload,
    locale: 'en' | 'ar'
  ): Promise<AuthenticatedUser> {
    if (isMockAuthApi) {
      return mockVerifyLogin(payload, locale);
    }

    return requestJson<{
      portal_token: string;
      lms_magic_token?: string | null;
      user: {
        auth_user_id: number;
        name: string;
        roles: string[];
        is_guardian: boolean;
        guardian_id: string;
        family_id: string;
      };
    }>(
      '/api/portal/auth/login/verify',
      {
        method: 'POST',
        body: JSON.stringify({
          contact_method_id: parseInt(payload.challenge_id, 10),
          code: payload.otp,
        }),
      },
      locale,
      true
    ).then((res) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('portal_token', res.portal_token);
      }
      return {
        auth_user_id: res.user.auth_user_id.toString(),
        display_name: res.user.name,
        role: res.user.roles.includes('PARENT') ? 'PARENT' : 'STUDENT',
        redirect_to: res.lms_magic_token ? `https://lms.successpathmentors.net/api/auth/magic-token?token=${res.lms_magic_token}` : `/${locale}`,
        authorized_student_count: 0,
        lms_magic_token: res.lms_magic_token,
      };
    });
  },

  submitRegistration(
    payload: RegistrationPayload
  ): Promise<RegistrationResult> {
    if (isMockAuthApi) {
      return mockSubmitRegistration(payload);
    }

    const backendPayload = {
      guardian: {
        full_name: payload.parent_name,
        email: payload.email,
        phone: payload.whatsapp || payload.telephone,
        relationship_type: payload.guardian_relationship,
      },
      student: {
        full_name: payload.student_first_name,
        date_of_birth: payload.date_of_birth,
      },
      registration: {
        subject: payload.subject,
        grade: parseInt(payload.grade, 10) || payload.grade,
        curriculum: payload.curriculum,
        language: payload.preferred_language,
        timezone: payload.timezone,
        preferred_days: [payload.preferred_day.toUpperCase()],
        preferred_time_start: payload.preferred_time,
        preferred_time_end: payload.preferred_time_end,
        notes: payload.notes,
      },
      source: payload.source,
      signup_ticket: payload.signup_ticket,
    };

    // We call our Next.js API proxy route because the actual backend
    // requires an API key which shouldn't be exposed to the browser.
    return requestJson<{
      success: boolean;
      registration_ref: string;
      student_mid: string;
      guardian_mid: string;
      is_existing_guardian: boolean;
      status: string;
      trial_status: string;
      verification_required?: boolean;
      contact_methods?: Array<{
        contact_method_id: number;
        contact_type: string;
        masked_value: string;
      }>;
      next_step: string;
    }>(
      '/api/registrations', // The proxy route
      { method: 'POST', body: JSON.stringify(backendPayload) },
      payload.locale,
      true // use proxy
    ).then(async (res) => {
      let verification: RegistrationVerification | undefined;

      if (res.verification_required && res.contact_methods && res.contact_methods.length > 0) {
        const contact = res.contact_methods[0]!;
        
        let sendRes: {
          success: boolean;
          message: string;
          expires_in_minutes: number;
          _dev_otp?: string;
        } | null = null;

        try {
          // Trigger the OTP send request immediately
          sendRes = await requestJson<{
            success: boolean;
            message: string;
            expires_in_minutes: number;
            _dev_otp?: string;
          }>(
            '/api/otp/send',
            { method: 'POST', body: JSON.stringify({ contact_method_id: contact.contact_method_id }) },
            payload.locale,
            true // use proxy
          );
        } catch (err) {
          console.warn('Initial OTP send failed, but registration succeeded. Proceeding to verification screen.', err);
        }

        if (sendRes?._dev_otp) {
          console.log('Backend returned DEV OTP code:', sendRes._dev_otp);
        }

        verification = {
          contact_id: String(contact.contact_method_id),
          challenge_id: String(contact.contact_method_id),
          channel: contact.contact_type as any,
          masked_destination: contact.masked_value,
          expires_in_seconds: (sendRes?.expires_in_minutes || 10) * 60,
          resend_after_seconds: 60,
        };
      }

      return {
        registration_id: res.registration_ref,
        status: (res.is_existing_guardian ? 'ACCOUNT_VERIFIED' : (res.verification_required ? 'ACCOUNT_PENDING_VERIFICATION' : res.status)) as any,
        trial_status: res.trial_status as any,
        verification,
        student_mid: res.student_mid,
        guardian_mid: res.guardian_mid,
      };
    });
  },

  verifyRegistration(
    payload: RegistrationVerifyPayload,
    registrationId: string,
    locale: 'en' | 'ar'
  ): Promise<RegistrationConfirmation> {
    if (isMockAuthApi) {
      return mockVerifyRegistration(payload, registrationId);
    }

    return requestJson<{
      success: boolean;
      message: string;
      account_activated: boolean;
    }>(
      `/api/otp/verify`,
      {
        method: 'POST',
        body: JSON.stringify({
          contact_method_id: parseInt(payload.contact_id, 10),
          code: payload.otp,
        }),
      },
      locale,
      true // use proxy
    ).then(() => ({
      registration_id: registrationId,
      status: 'ACCOUNT_VERIFIED' as any,
      trial_status: 'WAITING_FOR_ASSIGNMENT' as any,
    }));
  },

  async resendRegistrationVerification(
    contactId: string,
    locale: 'en' | 'ar'
  ): Promise<LoginChallenge> {
    if (isMockAuthApi) {
      await wait();
      return {
        challenge_id: createId('CHL'),
        channel: 'EMAIL',
        masked_destination: 'ac*****@example.com',
        expires_in_seconds: 300,
        resend_after_seconds: 45,
      };
    }

    return requestJson<{
      success: boolean;
      message: string;
      expires_in_minutes: number;
      _dev_otp?: string;
    }>(
      `/api/otp/send`,
      { method: 'POST', body: JSON.stringify({ contact_method_id: parseInt(contactId, 10) }) },
      locale,
      true // use proxy
    ).then((res) => {
      if (res._dev_otp) {
        console.log('Backend returned DEV OTP code (Resend):', res._dev_otp);
      }
      return {
        challenge_id: contactId,
        channel: 'EMAIL',
        masked_destination: '',
        expires_in_seconds: (res.expires_in_minutes || 10) * 60,
        resend_after_seconds: 60,
      };
    });
  },
};
