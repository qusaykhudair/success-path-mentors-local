import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { routing } from './i18n/routing';
import { isReservedMarketPathname } from './lib/market-routing';

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
  `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''}`,
  "connect-src 'self' https:",
  "media-src 'self' https:",
  "worker-src 'self' blob:",
  'upgrade-insecure-requests',
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

export default function proxy(request: NextRequest) {
  const host =
    request.headers?.get?.('x-forwarded-host') ||
    request.headers?.get?.('host') ||
    request.nextUrl?.host;
  const proto =
    request.headers?.get?.('x-forwarded-proto') ||
    request.nextUrl?.protocol?.replace(':', '');

  if (host) {
    const normalizedHost = host.toLowerCase().split(':')[0];
    const isWww = normalizedHost === 'www.successpathmentors.net';
    const isHttp =
      normalizedHost === 'successpathmentors.net' && proto === 'http';

    if (isWww || isHttp) {
      const destinationUrl = new URL(
        request.nextUrl.pathname + request.nextUrl.search,
        'https://successpathmentors.net'
      );
      return applySecurityHeaders(
        NextResponse.redirect(destinationUrl, 301)
      );
    }
  }

  const pathname = request.nextUrl.pathname;

  if (
    pathname === '/en/exam-preparation' ||
    pathname === '/services/exam-preparation' ||
    pathname === '/exam-preparation'
  ) {
    const destinationUrl = new URL(
      '/en/services/exam-preparation' + request.nextUrl.search,
      request.url
    );
    return applySecurityHeaders(NextResponse.redirect(destinationUrl, 301));
  }

  if (pathname === '/de/de' || pathname.startsWith('/de/de/')) {
    const newPath = pathname.replace(/^\/de\/de/, '/de');
    const destinationUrl = new URL(newPath + request.nextUrl.search, request.url);
    return applySecurityHeaders(NextResponse.redirect(destinationUrl, 301));
  }

  if (isReservedMarketPathname(pathname)) {
    return applySecurityHeaders(NextResponse.next());
  }

  if (pathname === '/fr' || pathname.startsWith('/fr/')) {
    const allowedFrenchPrefix = '/fr/programme-francais';
    const isFrenchProgramRoute =
      pathname === '/fr' ||
      pathname === '/fr/' ||
      pathname === allowedFrenchPrefix ||
      pathname.startsWith(`${allowedFrenchPrefix}/`);

    if (!isFrenchProgramRoute) {
      return applySecurityHeaders(
        NextResponse.redirect(new URL(allowedFrenchPrefix, request.url))
      );
    }

    return applySecurityHeaders(NextResponse.next());
  }

  return applySecurityHeaders(intlMiddleware(request));
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
