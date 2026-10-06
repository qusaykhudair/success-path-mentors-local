import { NextResponse } from 'next/server';
import {
  sanitizeAuthMarket,
  sanitizeAuthMode,
  sanitizeAuthUiLocale,
} from '@/features/auth/social-auth';
import { createVerifiedSignupTicket } from '@/features/auth/signup-transaction';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider');
  const market = sanitizeAuthMarket(url.searchParams.get('market'));
  const uiLocale = sanitizeAuthUiLocale(url.searchParams.get('ui_locale'));
  const mode = sanitizeAuthMode(url.searchParams.get('mode'));
  const basePath = market === 'germany' ? `/de/${uiLocale}` : `/${uiLocale}`;

  // Google no longer uses this legacy callback. Google Identity Services
  // tokens are verified server-side by POST /api/auth/social/google.
  if (provider === 'google') {
    return NextResponse.redirect(
      new URL(`${basePath}/${mode === 'register' ? 'register' : 'login'}?error=google_flow_updated`, request.url)
    );
  }

  if (provider !== 'facebook') {
    return NextResponse.redirect(
      new URL(`${basePath}/login?error=unsupported_provider`, request.url)
    );
  }

  const email = url.searchParams.get('email')?.trim().toLowerCase() || '';
  const name = url.searchParams.get('name')?.trim() || '';

  if (mode !== 'register' || !email) {
    return NextResponse.redirect(
      new URL(
        `${basePath}/${mode === 'register' ? 'register' : 'login'}?error=social_auth_unavailable`,
        request.url
      )
    );
  }

  const ticket = createVerifiedSignupTicket(
    {
      method: 'facebook',
      identifier: email,
      displayName: name || undefined,
    },
    market,
    uiLocale
  );

  const targetUrl = new URL(`${basePath}/register`, request.url);
  targetUrl.searchParams.set('signup_ticket', ticket);

  const response = NextResponse.redirect(targetUrl);
  response.cookies.set('spm_signup_ticket', ticket, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 30 * 60,
  });
  response.headers.set('Cache-Control', 'no-store');
  return response;
}
