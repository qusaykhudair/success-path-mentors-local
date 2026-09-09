import { NextResponse } from 'next/server';
import { configuredSocialStartUrl, isSocialProvider } from '@/features/auth/social-auth';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const provider = new URL(request.url).searchParams.get('provider');
  const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
  if (!isSocialProvider(provider)) {
    return NextResponse.json({ code: 'UNSUPPORTED_PROVIDER' }, { status: 400, headers });
  }
  const authorizationUrl = configuredSocialStartUrl(provider === 'google'
    ? process.env.GOOGLE_AUTH_START_URL
    : process.env.FACEBOOK_AUTH_START_URL);
  if (!authorizationUrl) {
    return NextResponse.json({ code: 'SOCIAL_AUTH_UNAVAILABLE' }, { status: 503, headers });
  }
  return NextResponse.json({ authorization_url: authorizationUrl }, { headers });
}
