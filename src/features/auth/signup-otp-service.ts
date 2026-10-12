import { randomInt, randomUUID } from 'node:crypto';
import { createVerifiedSignupTicket, type VerifiedIdentity } from './signup-transaction';

export interface SignupOtpChallenge {
  challengeId: string;
  channel: 'EMAIL' | 'WHATSAPP';
  identifier: string;
  otp: string;
  attempts: number;
  expiresAt: number;
  resendAfter: number;
  market: 'germany' | 'north-america';
  uiLocale: 'de' | 'en' | 'ar';
}

export interface SignupOtpRequestResult {
  success: boolean;
  challenge_id?: string;
  channel?: 'EMAIL' | 'WHATSAPP';
  masked_destination?: string;
  expires_in_seconds?: number;
  resend_after_seconds?: number;
  code?: string;
  error?: string;
}

export interface SignupOtpVerifyResult {
  success: boolean;
  signup_ticket: string;
  verified_identity: VerifiedIdentity;
}

// Global in-memory challenge store (persisted across HMR / Fast Refresh in development)
const globalForOtp = globalThis as unknown as {
  __spm_challengeStore?: Map<string, SignupOtpChallenge>;
  __spm_identifierCooldownStore?: Map<string, { lastSentAt: number; challengeId: string }>;
};

const challengeStore = globalForOtp.__spm_challengeStore ?? new Map<string, SignupOtpChallenge>();
const identifierCooldownStore =
  globalForOtp.__spm_identifierCooldownStore ?? new Map<string, { lastSentAt: number; challengeId: string }>();

if (process.env.NODE_ENV !== 'production') {
  globalForOtp.__spm_challengeStore = challengeStore;
  globalForOtp.__spm_identifierCooldownStore = identifierCooldownStore;
}

const OTP_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes
const RESEND_COOLDOWN_MS = 60 * 1000; // 60 seconds
const MAX_ATTEMPTS = 5;

function maskIdentifier(channel: 'EMAIL' | 'WHATSAPP', identifier: string): string {
  if (channel === 'EMAIL') {
    const [user = '', domain = ''] = identifier.split('@');
    const visible = user.slice(0, 2);
    const masked = '*'.repeat(Math.max(3, user.length - 2));
    return `${visible}${masked}@${domain}`;
  }
  const digits = identifier.replace(/\D/g, '');
  const last4 = digits.slice(-4);
  const countryPrefix = identifier.startsWith('+') ? identifier.slice(0, 3) : '';
  return `${countryPrefix} *** *** ${last4}`;
}

function normalizeIdentifier(channel: 'EMAIL' | 'WHATSAPP', identifier: string): string {
  const trimmed = identifier.trim();
  if (channel === 'EMAIL') {
    return trimmed.toLowerCase();
  }
  // Phone: retain leading plus and digits
  const hasPlus = trimmed.startsWith('+');
  const digits = trimmed.replace(/\D/g, '');
  return hasPlus ? `+${digits}` : digits;
}

async function sendSendGridEmail(
  toEmail: string,
  otp: string,
  locale: 'de' | 'en' | 'ar'
): Promise<{ ok: boolean; error?: string }> {
  if (process.env.MOCK_AUTH_PROVIDERS === 'true') {
    return { ok: true };
  }

  const apiKey = process.env.SENDGRID_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, error: 'Email delivery service is not configured.' };
  }

  // Use verified SendGrid sender identity
  const fromEmail = process.env.SENDGRID_FROM_EMAIL?.trim() || 'engqusaykhudair@gmail.com';
  const subjects = {
    de: 'Ihr Bestätigungscode für Success Path Mentors',
    ar: 'رمز التحقق الخاص بك — مسار النجاح التعليمي',
    en: 'Your Success Path Mentors Verification Code',
  };
  const subject = subjects[locale] || subjects.en;

  const textContent =
    locale === 'de'
      ? `Ihr Bestätigungscode lautet: ${otp}\n\nDieser Code ist 10 Minuten gültig. Bitte geben Sie ihn niemals an Dritte weiter.`
      : locale === 'ar'
      ? `رمز التحقق الخاص بك هو: ${otp}\n\nهذا الرمز صالح لمدة 10 دقائق. يُرجى عدم مشاركته مع أي شخص.`
      : `Your verification code is: ${otp}\n\nThis code expires in 10 minutes. Do not share this code with anyone.`;

  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: fromEmail, name: 'Success Path Mentors' },
        subject,
        content: [{ type: 'text/plain', value: textContent }],
      }),
    });
    if (!res.ok) {
      console.error(`SendGrid email dispatch failed with status: ${res.status}`);
      return { ok: false, error: 'Email delivery was rejected by the provider.' };
    }
    return { ok: true };
  } catch {
    console.error('SendGrid network error during email dispatch.');
    return { ok: false, error: 'Network error connecting to email provider.' };
  }
}

export async function requestSignupOtp(params: {
  channel: 'EMAIL' | 'WHATSAPP';
  identifier: string;
  market?: 'germany' | 'north-america';
  uiLocale?: 'de' | 'en' | 'ar';
}): Promise<SignupOtpRequestResult> {
  const channel = params.channel;
  const market = params.market || 'north-america';
  const uiLocale = params.uiLocale || 'en';
  const normalized = normalizeIdentifier(channel, params.identifier);

  // Check cooldown
  const existingCooldown = identifierCooldownStore.get(normalized);
  const now = Date.now();
  if (existingCooldown && now - existingCooldown.lastSentAt < RESEND_COOLDOWN_MS) {
    const remainingSeconds = Math.ceil((RESEND_COOLDOWN_MS - (now - existingCooldown.lastSentAt)) / 1000);
    const existing = challengeStore.get(existingCooldown.challengeId);
    if (existing && existing.expiresAt > now) {
      return {
        success: true,
        challenge_id: existing.challengeId,
        channel: existing.channel,
        masked_destination: maskIdentifier(existing.channel, existing.identifier),
        expires_in_seconds: Math.ceil((existing.expiresAt - now) / 1000),
        resend_after_seconds: remainingSeconds,
      };
    }
  }

  // If WhatsApp requested, fail safely with explicit dependency report
  if (channel === 'WHATSAPP') {
    if (process.env.MOCK_AUTH_PROVIDERS !== 'true') {
      return {
        success: false,
        code: 'WHATSAPP_UNAVAILABLE',
        error:
          uiLocale === 'ar'
            ? 'خدمة إرسال الرمز عبر واتساب غير متوفرة حالياً. يرجى استخدام البريد الإلكتروني.'
            : uiLocale === 'de'
            ? 'Der WhatsApp-Verifizierungsdienst ist derzeit nicht verfügbar. Bitte verwenden Sie die E-Mail-Registrierung.'
            : 'WhatsApp verification is currently unavailable. Please sign up using your email address.',
      };
    }
  }

  // Generate cryptographically random 6-digit OTP
  const otpNumber = randomInt(100000, 1000000);
  const otp = String(otpNumber);
  const challengeId = `SIG-${randomUUID()}`;

  // Attempt real delivery first: never store active challenge or start cooldown on failed delivery
  if (channel === 'EMAIL') {
    const delivery = await sendSendGridEmail(normalized, otp, uiLocale);
    if (!delivery.ok) {
      return {
        success: false,
        code: 'DELIVERY_FAILED',
        error:
          uiLocale === 'ar'
            ? 'تعذر إرسال رمز التحقق إلى بريدك الإلكتروني. يرجى التحقق من العنوان والمحاولة مجدداً.'
            : uiLocale === 'de'
            ? 'Der Bestätigungscode konnte nicht gesendet werden. Bitte überprüfen Sie Ihre E-Mail-Adresse und versuchen Sie es erneut.'
            : 'Unable to deliver verification code. Please check your email address and try again.',
      };
    }
  }

  // Delivery accepted by provider: invalidate any superseded challenge
  if (existingCooldown?.challengeId) {
    challengeStore.delete(existingCooldown.challengeId);
  }

  const challenge: SignupOtpChallenge = {
    challengeId,
    channel,
    identifier: normalized,
    otp,
    attempts: 0,
    expiresAt: now + OTP_EXPIRY_MS,
    resendAfter: now + RESEND_COOLDOWN_MS,
    market,
    uiLocale,
  };

  challengeStore.set(challengeId, challenge);
  identifierCooldownStore.set(normalized, { lastSentAt: now, challengeId });

  return {
    success: true,
    challenge_id: challengeId,
    channel,
    masked_destination: maskIdentifier(channel, normalized),
    expires_in_seconds: Math.round(OTP_EXPIRY_MS / 1000),
    resend_after_seconds: Math.round(RESEND_COOLDOWN_MS / 1000),
  };
}

export function verifySignupOtp(params: {
  challengeId: string;
  code: string;
}): SignupOtpVerifyResult | { error: string; code: string; status: number } {
  const now = Date.now();
  const challenge = challengeStore.get(params.challengeId);

  if (!challenge) {
    return { error: 'Verification session not found or expired', code: 'OTP_EXPIRED', status: 400 };
  }

  if (now > challenge.expiresAt) {
    challengeStore.delete(params.challengeId);
    return { error: 'Verification code has expired', code: 'OTP_EXPIRED', status: 400 };
  }

  if (challenge.attempts >= MAX_ATTEMPTS) {
    challengeStore.delete(params.challengeId);
    return { error: 'Too many incorrect attempts. Please request a new code.', code: 'RATE_LIMITED', status: 429 };
  }

  const submittedCode = params.code.trim().replace(/\D/g, '');
  if (submittedCode !== challenge.otp) {
    challenge.attempts += 1;
    return { error: 'Incorrect verification code', code: 'OTP_INVALID', status: 400 };
  }

  // Code is valid! Consume challenge (single-use, no replay)
  challengeStore.delete(params.challengeId);

  const identity: VerifiedIdentity = {
    method: challenge.channel === 'EMAIL' ? 'email' : 'whatsapp',
    identifier: challenge.identifier,
    maskedDestination: maskIdentifier(challenge.channel, challenge.identifier),
  };

  const ticket = createVerifiedSignupTicket(identity, challenge.market, challenge.uiLocale);

  return {
    success: true,
    signup_ticket: ticket,
    verified_identity: identity,
  };
}

export function __getTestOtp(challengeId: string): string | undefined {
  if (process.env.NODE_ENV === 'production') return undefined;
  return challengeStore.get(challengeId)?.otp;
}

export function __resetTestOtpStore(): void {
  if (process.env.NODE_ENV === 'production') return;
  challengeStore.clear();
  identifierCooldownStore.clear();
}
