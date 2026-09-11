import { NextResponse } from 'next/server';
import {
  isSocialProvider,
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

  const email = url.searchParams.get('email')?.trim() || '';
  const name = url.searchParams.get('name')?.trim() || '';

  const basePath = market === 'germany' ? `/de/${uiLocale}` : `/${uiLocale}`;

  if (!isSocialProvider(provider)) {
    return NextResponse.redirect(new URL(`${basePath}/login?error=unsupported_provider`, request.url));
  }

  if (mode === 'register') {
    // Generate verified signup transaction ticket for OAuth registration
    const verifiedIdentifier = email || `${provider}-user@example.com`;
    const ticket = createVerifiedSignupTicket(
      {
        method: provider,
        identifier: verifiedIdentifier,
        displayName: name,
        maskedDestination: email ? undefined : `${provider.toUpperCase()} Identity`,
      },
      market,
      uiLocale
    );

    const targetUrl = new URL(`${basePath}/register`, request.url);
    targetUrl.searchParams.set('signup_ticket', ticket);

    const response = NextResponse.redirect(targetUrl);
    const cookieValue = `spm_signup_ticket=${ticket}; Path=/; HttpOnly; SameSite=Lax; Max-Age=1800${
      process.env.NODE_ENV === 'production' ? '; Secure' : ''
    }`;
    response.headers.set('Set-Cookie', cookieValue);
    return response;
  }

  // Mode === 'login'
  return NextResponse.redirect(new URL(`${basePath}/login`, request.url));
}
