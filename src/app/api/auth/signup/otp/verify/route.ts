import { NextResponse } from 'next/server';
import { verifySignupOtp } from '@/features/auth/signup-otp-service';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const headers = new Headers({
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Content-Type': 'application/json',
  });

  try {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    const challengeId = String(body.challenge_id || '').trim();
    const code = String(body.code || body.otp || '').trim();

    if (!challengeId || !code) {
      return NextResponse.json(
        { code: 'MISSING_FIELDS', message: 'Challenge ID and verification code are required' },
        { status: 400, headers }
      );
    }

    const result = verifySignupOtp({ challengeId, code });

    if ('error' in result) {
      return NextResponse.json(
        { code: result.code, message: result.error },
        { status: result.status, headers }
      );
    }

    // Set HttpOnly cookie for extra browser session protection
    const cookieValue = `spm_signup_ticket=${result.signup_ticket}; Path=/; HttpOnly; SameSite=Lax; Max-Age=1800${
      process.env.NODE_ENV === 'production' ? '; Secure' : ''
    }`;
    headers.set('Set-Cookie', cookieValue);

    return NextResponse.json(result, { status: 200, headers });
  } catch (error) {
    console.error('Error in /api/auth/signup/otp/verify:', error);
    return NextResponse.json(
      { code: 'INTERNAL_ERROR', message: 'Unable to verify code' },
      { status: 500, headers }
    );
  }
}
