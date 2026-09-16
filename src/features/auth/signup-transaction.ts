import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';

export type VerifiedSignupMethod = 'email' | 'whatsapp' | 'google' | 'facebook';

export interface VerifiedIdentity {
  method: VerifiedSignupMethod;
  identifier: string;
  displayName?: string;
  maskedDestination?: string;
}

export interface SignupTicketPayload {
  ticketId: string;
  identity: VerifiedIdentity;
  market: 'germany' | 'north-america';
  uiLocale: 'de' | 'en' | 'ar';
  verifiedAt: number;
  expiresAt: number;
}

const TICKET_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes

function getSigningSecret(): string {
  const secret =
    process.env.REGISTRATION_API_KEY?.trim() ||
    process.env.AUTH_SECRET?.trim() ||
    'spm-signup-tx-secret-key-fallback-2026';
  return secret;
}

function base64UrlEncode(str: string): string {
  return Buffer.from(str, 'utf8')
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  return Buffer.from(base64, 'base64').toString('utf8');
}

function signString(data: string, secret: string): string {
  return createHmac('sha256', secret)
    .update(data)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

/**
 * Creates a cryptographically signed, short-lived verified signup transaction token.
 */
export function createVerifiedSignupTicket(
  identity: VerifiedIdentity,
  market: 'germany' | 'north-america' = 'north-america',
  uiLocale: 'de' | 'en' | 'ar' = 'en'
): string {
  const now = Date.now();
  const payload: SignupTicketPayload = {
    ticketId: `TX-${randomUUID()}`,
    identity: {
      method: identity.method,
      identifier: identity.identifier.trim(),
      displayName: identity.displayName?.trim(),
      maskedDestination: identity.maskedDestination?.trim(),
    },
    market,
    uiLocale,
    verifiedAt: now,
    expiresAt: now + TICKET_EXPIRY_MS,
  };

  const payloadEncoded = base64UrlEncode(JSON.stringify(payload));
  const signature = signString(payloadEncoded, getSigningSecret());
  return `${payloadEncoded}.${signature}`;
}

/**
 * Verifies a signup ticket token: checks cryptographic signature and expiry.
 * Returns null if forged, corrupted, or expired.
 */
export function verifySignupTicket(token: string | null | undefined): SignupTicketPayload | null {
  if (!token || typeof token !== 'string') return null;

  const parts = token.trim().split('.');
  if (parts.length !== 2) return null;

  const [payloadEncoded, signature] = parts;
  if (!payloadEncoded || !signature) return null;

  try {
    const expectedSignature = signString(payloadEncoded, getSigningSecret());
    const expectedBuf = Buffer.from(expectedSignature);
    const actualBuf = Buffer.from(signature);

    if (expectedBuf.length !== actualBuf.length || !timingSafeEqual(expectedBuf, actualBuf)) {
      return null;
    }

    const jsonStr = base64UrlDecode(payloadEncoded);
    const payload = JSON.parse(jsonStr) as SignupTicketPayload;

    if (!payload.ticketId || !payload.identity || !payload.expiresAt) {
      return null;
    }

    if (Date.now() > payload.expiresAt) {
      return null; // Expired ticket
    }

    return payload;
  } catch {
    return null;
  }
}
