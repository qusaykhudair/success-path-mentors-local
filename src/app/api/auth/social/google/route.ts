import { NextResponse } from 'next/server';
import {
  sanitizeAuthMarket,
  sanitizeAuthMode,
  sanitizeAuthUiLocale,
} from '@/features/auth/social-auth';
import {
  createVerifiedSignupTicket,
  type VerifiedIdentity,
} from '@/features/auth/signup-transaction';
import { verifyGoogleIdToken } from '@/features/auth/google-id-token';

export const dynamic = 'force-dynamic';

function authBasePath(
  market: 'germany' | 'north-america',
  uiLocale: 'de' | 'en' | 'ar'
): string {
  return market === 'germany' ? `/de/${uiLocale}` : `/${uiLocale}`;
}

function sameOriginRequest(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true;

  try {
    const originHost = new URL(origin).host.toLowerCase();
    const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim();
    const requestHost = (forwardedHost || request.headers.get('host') || new URL(request.url).host)
      .toLowerCase();
    return originHost === requestHost;
  } catch {
    return false;
  }
}

function cleanText(value: unknown, maxLength: number): string | undefined {
  if (typeof value !== 'string') return undefined;
  const cleaned = value.trim();
  if (!cleaned) return undefined;
  return cleaned.slice(0, maxLength);
}

function cleanLocale(value: unknown): string | undefined {
  const locale = cleanText(value, 35);
  if (!locale) return undefined;
  return /^[A-Za-z]{2,8}(?:[-_][A-Za-z0-9]{2,8})*$/.test(locale)
    ? locale.replace(/_/g, '-')
    : undefined;
}

function cleanHttpsUrl(value: unknown): string | undefined {
  const candidate = cleanText(value, 2048);
  if (!candidate) return undefined;

  try {
    const url = new URL(candidate);
    return url.protocol === 'https:' ? url.href : undefined;
  } catch {
    return undefined;
  }
}

function cleanTimezone(value: unknown): string | undefined {
  const timezone = cleanText(value, 100);
  if (!timezone) return undefined;

  try {
    new Intl.DateTimeFormat('en-US', { timeZone: timezone }).format();
    return timezone;
  } catch {
    return undefined;
  }
}

export async function POST(request: Request) {
  const headers = {
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
  };

  if (!sameOriginRequest(request)) {
    return NextResponse.json({ code: 'INVALID_ORIGIN' }, { status: 403, headers });
  }

  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return NextResponse.json({ code: 'INVALID_CONTENT_TYPE' }, { status: 415, headers });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ code: 'INVALID_REQUEST' }, { status: 400, headers });
  }

  const credential =
    typeof body.credential === 'string' ? body.credential.trim() : '';
  const market = sanitizeAuthMarket(body.market);
  const uiLocale = sanitizeAuthUiLocale(body.ui_locale);
  const mode = sanitizeAuthMode(body.mode);
  const browserTimezone = cleanTimezone(body.browser_timezone);
  const browserLocale = cleanLocale(body.browser_locale);

  if (!credential || credential.length < 100 || credential.length > 16_384) {
    return NextResponse.json({ code: 'INVALID_GOOGLE_CREDENTIAL' }, { status: 400, headers });
  }

  try {
    const profile = await verifyGoogleIdToken(credential);
    const email = profile.email.trim().toLowerCase();

    const identity: VerifiedIdentity = {
      method: 'google',
      identifier: email,
      displayName: cleanText(profile.name, 100),
      providerSubject: cleanText(profile.sub, 255),
      givenName: cleanText(profile.given_name, 100),
      familyName: cleanText(profile.family_name, 100),
      avatarUrl: cleanHttpsUrl(profile.picture),
      providerLocale: cleanLocale(profile.locale),
      browserLocale,
      timezone: browserTimezone,
      timezoneSource: browserTimezone ? 'browser' : undefined,
    };

    const ticket = createVerifiedSignupTicket(identity, market, uiLocale);
    const basePath = authBasePath(market, uiLocale);
    const redirectTarget =
      mode === 'register'
        ? `${basePath}/register?signup_ticket=${encodeURIComponent(ticket)}`
        : `${basePath}/login?social=google`;

    const response = NextResponse.json(
      {
        success: true,
        signup_ticket: ticket,
        redirect_to: redirectTarget,
        identity,
      },
      { headers }
    );

    response.cookies.set('spm_signup_ticket', ticket, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 30 * 60,
    });

    return response;
  } catch (error) {
    console.warn('Google ID token verification failed.', {
      error: error instanceof Error ? error.message : 'UNKNOWN_GOOGLE_AUTH_ERROR',
    });
    return NextResponse.json(
      { code: 'GOOGLE_IDENTITY_UNVERIFIED' },
      { status: 401, headers }
    );
  }
}
