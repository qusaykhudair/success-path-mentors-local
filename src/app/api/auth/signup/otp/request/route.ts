import { NextResponse } from 'next/server';
import { requestSignupOtp } from '@/features/auth/signup-otp-service';
import { sanitizeAuthMarket, sanitizeAuthUiLocale } from '@/features/auth/social-auth';

export const dynamic = 'force-dynamic';

function isValidEmail(val: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
}

function isValidPhone(val: string): boolean {
  const digits = val.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export async function POST(request: Request) {
  const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };

  try {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    const rawChannel = String(body.channel || '').toUpperCase();
    const rawIdentifier = String(body.identifier || '').trim();

    if (rawChannel !== 'EMAIL' && rawChannel !== 'WHATSAPP') {
      return NextResponse.json(
        { code: 'INVALID_CHANNEL', message: 'Channel must be EMAIL or WHATSAPP' },
        { status: 400, headers }
      );
    }

    if (!rawIdentifier) {
      return NextResponse.json(
        { code: 'MISSING_IDENTIFIER', message: 'Identifier is required' },
        { status: 400, headers }
      );
    }

    if (rawChannel === 'EMAIL' && !isValidEmail(rawIdentifier)) {
      return NextResponse.json(
        { code: 'INVALID_EMAIL', message: 'Please enter a valid email address' },
        { status: 400, headers }
      );
    }

    if (rawChannel === 'WHATSAPP' && !isValidPhone(rawIdentifier)) {
      return NextResponse.json(
        { code: 'INVALID_PHONE', message: 'Please enter a valid international phone number' },
        { status: 400, headers }
      );
    }

    const market = sanitizeAuthMarket(body.market);
    const uiLocale = sanitizeAuthUiLocale(body.ui_locale || body.locale);

    const result = await requestSignupOtp({
      channel: rawChannel,
      identifier: rawIdentifier,
      market,
      uiLocale,
    });

    return NextResponse.json(result, { status: 200, headers });
  } catch (error) {
    console.error('Error in /api/auth/signup/otp/request:', error);
    return NextResponse.json(
      { code: 'INTERNAL_ERROR', message: 'Unable to send verification code' },
      { status: 500, headers }
    );
  }
}
