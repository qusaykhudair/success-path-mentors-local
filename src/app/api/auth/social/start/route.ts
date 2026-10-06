import { NextResponse } from 'next/server';
import {
  configuredSocialStartUrl,
  isSocialProvider,
  sanitizeAuthMarket,
  sanitizeAuthMode,
  sanitizeAuthUiLocale,
} from '@/features/auth/social-auth';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider');
  const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };

  if (!isSocialProvider(provider)) {
    return NextResponse.json({ code: 'UNSUPPORTED_PROVIDER' }, { status: 400, headers });
  }

  // Google now uses Google Identity Services directly in the browser and is
  // verified by POST /api/auth/social/google. This legacy start endpoint is
  // retained only for Facebook.
  if (provider === 'google') {
    return NextResponse.json({ code: 'GOOGLE_AUTH_USES_GIS' }, { status: 410, headers });
  }

  const baseAuthorizationUrl = configuredSocialStartUrl(process.env.FACEBOOK_AUTH_START_URL);

  if (!baseAuthorizationUrl) {
    return NextResponse.json({ code: 'SOCIAL_AUTH_UNAVAILABLE' }, { status: 503, headers });
  }

  const hasContext =
    url.searchParams.has('market') ||
    url.searchParams.has('ui_locale') ||
    url.searchParams.has('mode');

  if (!hasContext) {
    return NextResponse.json({ authorization_url: baseAuthorizationUrl }, { headers });
  }

  const market = sanitizeAuthMarket(url.searchParams.get('market'));
  const uiLocale = sanitizeAuthUiLocale(url.searchParams.get('ui_locale'));
  const mode = sanitizeAuthMode(url.searchParams.get('mode'));

  try {
    const authUrl = new URL(baseAuthorizationUrl);
    authUrl.searchParams.set('market', market);
    authUrl.searchParams.set('ui_locale', uiLocale);
    authUrl.searchParams.set('mode', mode);

    return NextResponse.json(
      {
        authorization_url: authUrl.href,
        context: { provider: 'facebook', market, ui_locale: uiLocale, mode },
      },
      { headers }
    );
  } catch {
    return NextResponse.json({ authorization_url: baseAuthorizationUrl }, { headers });
  }
}
