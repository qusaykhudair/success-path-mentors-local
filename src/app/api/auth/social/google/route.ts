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

export const dynamic = 'force-dynamic';

const GOOGLE_CLIENT_ID =
  '541344539683-mfeio08fjgkh4fu2u1um2bqddt2h00cl.apps.googleusercontent.com';
const GOOGLE_TOKENINFO_ENDPOINT = 'https://oauth2.googleapis.com/tokeninfo';
const GOOGLE_USERINFO_ENDPOINT = 'https://openidconnect.googleapis.com/v1/userinfo';

interface GoogleTokenInfo {
  aud?: string;
  scope?: string;
  expires_in?: string | number;
  error?: string;
  error_description?: string;
}

interface GoogleUserInfo {
  sub?: string;
  email?: string;
  email_verified?: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  locale?: string;
}

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
    // Validate against the runtime IANA time-zone database.
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

  const accessToken =
    typeof body.access_token === 'string' ? body.access_token.trim() : '';
  const market = sanitizeAuthMarket(body.market);
  const uiLocale = sanitizeAuthUiLocale(body.ui_locale);
  const mode = sanitizeAuthMode(body.mode);
  const browserTimezone = cleanTimezone(body.browser_timezone);
  const browserLocale = cleanLocale(body.browser_locale);

  if (!accessToken || accessToken.length < 20 || accessToken.length > 4096) {
    return NextResponse.json({ code: 'INVALID_GOOGLE_TOKEN' }, { status: 400, headers });
  }

  try {
    const tokenInfoResponse = await fetch(
      `${GOOGLE_TOKENINFO_ENDPOINT}?access_token=${encodeURIComponent(accessToken)}`,
      {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
      }
    );
    const tokenInfo = (await tokenInfoResponse.json().catch(() => ({}))) as GoogleTokenInfo;

    const expiresIn = Number(tokenInfo.expires_in || 0);
    if (
      !tokenInfoResponse.ok ||
      tokenInfo.aud !== GOOGLE_CLIENT_ID ||
      !Number.isFinite(expiresIn) ||
      expiresIn <= 0
    ) {
      console.warn('Rejected Google access token.', {
        status: tokenInfoResponse.status,
        audienceMatches: tokenInfo.aud === GOOGLE_CLIENT_ID,
        expiresIn,
      });
      return NextResponse.json({ code: 'INVALID_GOOGLE_TOKEN' }, { status: 401, headers });
    }

    const profileResponse = await fetch(GOOGLE_USERINFO_ENDPOINT, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    });
    const profile = (await profileResponse.json().catch(() => ({}))) as GoogleUserInfo;

    const email = profile.email?.trim().toLowerCase() || '';
    if (
      !profileResponse.ok ||
      !profile.sub ||
      !email ||
      profile.email_verified !== true
    ) {
      console.warn('Rejected Google profile.', {
        status: profileResponse.status,
        hasSubject: Boolean(profile.sub),
        hasEmail: Boolean(email),
        emailVerified: profile.email_verified === true,
      });
      return NextResponse.json({ code: 'GOOGLE_IDENTITY_UNVERIFIED' }, { status: 401, headers });
    }

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
    console.error('Google authentication verification failed.', error);
    return NextResponse.json({ code: 'GOOGLE_AUTH_UNAVAILABLE' }, { status: 502, headers });
  }
}
