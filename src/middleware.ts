import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { routing } from './i18n/routing';
import { getNormalizedRequestUrl } from './lib/seo/normalize-request-url';

const intlMiddleware = createMiddleware(routing);

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' https:",
  "media-src 'self' https:",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join('; ');

function applySecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set('Content-Security-Policy', CONTENT_SECURITY_POLICY);
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  return response;
}

export default function middleware(request: NextRequest) {
  const normalizedUrl = getNormalizedRequestUrl(
    request.url,
    request.headers.get('host'),
    request.headers.get('x-forwarded-proto')
  );
  if (normalizedUrl) {
    return applySecurityHeaders(NextResponse.redirect(normalizedUrl, 301));
  }

  const pathname = request.nextUrl.pathname;

  // Resources and APIs participate in host normalization, not locale routing.
  if (/^\/(?:api|_next|_vercel)(?:\/|$)/.test(pathname) || pathname.includes('.')) {
    return NextResponse.next();
  }

  if (pathname === '/fr' || pathname.startsWith('/fr/')) {
    return applySecurityHeaders(NextResponse.next());
  }

  const response = intlMiddleware(request);
  // Page metadata owns audited hreflang. next-intl's automatic Link header
  // guesses equivalents from locale prefixes, including noncanonical aliases.
  // Preserve every location response, including localized Arabic paths.
  const locationRoots = ['en', 'ar'].flatMap(locale =>
    ['locations', 'المواقع', encodeURIComponent('المواقع')].map(slug => `/${locale}/${slug}`.toLowerCase())
  );
  const isLocation = locationRoots.some(root =>
    pathname.toLowerCase() === root || pathname.toLowerCase().startsWith(`${root}/`)
  );
  if (!isLocation) {
    response.headers.delete('link');
  }
  return applySecurityHeaders(response);
}

export const config = {
  matcher: ['/:path*'],
};
