import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { routing } from './i18n/routing';
import { isReservedMarketPathname } from './lib/market-routing';
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

function applySecurityHeaders(response: NextResponse, isLocal = false): NextResponse {
  const csp = isLocal
    ? CONTENT_SECURITY_POLICY.replace(/;\s*upgrade-insecure-requests/, '')
    : CONTENT_SECURITY_POLICY;
  response.headers.set('Content-Security-Policy', csp);
  if (!isLocal) {
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  return response;
}


const PERMANENT_REDIRECTS: Record<string, string> = {
  '/en/subjects/math/grade-9-math-mth1w': '/en/subjects/math',
  '/subjects/math/grade-9-math-mth1w': '/en/subjects/math',
  '/en/subjects/math/grade-10-math-mpm2d': '/en/subjects/math',
  '/subjects/math/grade-10-math-mpm2d': '/en/subjects/math',
  '/en/subjects/math/grade-11-functions-mcr3u': '/en/subjects/math/functions',
  '/subjects/math/grade-11-functions-mcr3u': '/en/subjects/math/functions',
  '/en/subjects/math/grade-12-advanced-functions-mhf4u': '/en/subjects/math/advanced-precalculus',
  '/subjects/math/grade-12-advanced-functions-mhf4u': '/en/subjects/math/advanced-precalculus',
  '/en/subjects/math/grade-12-data-management-mdm4u': '/en/subjects/math/statistics-probability',
  '/subjects/math/grade-12-data-management-mdm4u': '/en/subjects/math/statistics-probability',
  '/en/subjects/chemistry/senior-chemistry-sch3u-sch4u': '/en/subjects/chemistry',
  '/subjects/chemistry/senior-chemistry-sch3u-sch4u': '/en/subjects/chemistry',
  '/en/subjects/physics/senior-physics-sph3u-sph4u': '/en/subjects/physics',
  '/subjects/physics/senior-physics-sph3u-sph4u': '/en/subjects/physics',
  '/en/services/homework-help': '/en',
  '/services/homework-help': '/en',
  '/en/curriculum/ontario': '/en/locations/canada/ontario/curriculum',
  '/curriculum/ontario': '/en/locations/canada/ontario/curriculum',
  '/en/services/exam-preparation': '/en/exam-preparation',
  '/services/exam-preparation': '/en/exam-preparation',
};

const HOLD_ROUTES = [
  '/en/subjects/math/grade-12-calculus-vectors-mcv4u',
  '/subjects/math/grade-12-calculus-vectors-mcv4u',
  '/en/subjects/french',
  '/subjects/french',
];

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const isLocal = /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i.test(host);

  const normalizedUrl = getNormalizedRequestUrl(
    request.url,
    request.headers.get('host'),
    request.headers.get('x-forwarded-proto')
  );
  if (normalizedUrl) {
    return applySecurityHeaders(NextResponse.redirect(normalizedUrl, 301), isLocal);
  }

  const pathname = request.nextUrl.pathname;

  // Resources and APIs participate in host normalization, not locale routing.
  if (/^\/(?:api|_next|_vercel)(?:\/|$)/.test(pathname) || pathname.includes('.')) {
    return NextResponse.next();
  }

  // Enforce 301 Permanent Redirects for merged/redirected SEO pages
  const targetRedirect = PERMANENT_REDIRECTS[pathname];
  if (targetRedirect) {
    const url = new URL(targetRedirect, request.url);
    url.search = request.nextUrl.search;
    return applySecurityHeaders(NextResponse.redirect(url, 301), isLocal);
  }

  // Enforce 404 for unapproved HOLD pages
  if (HOLD_ROUTES.includes(pathname)) {
    return applySecurityHeaders(new NextResponse(null, { status: 404 }), isLocal);
  }

  if (isReservedMarketPathname(pathname)) {
    return applySecurityHeaders(NextResponse.next(), isLocal);
  }

  if (pathname === '/fr' || pathname.startsWith('/fr/')) {
    return applySecurityHeaders(NextResponse.next(), isLocal);
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
  return applySecurityHeaders(response, isLocal);
}

export const config = {
  matcher: ['/:path*'],
};
