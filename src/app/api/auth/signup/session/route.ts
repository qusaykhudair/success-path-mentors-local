import { NextResponse } from 'next/server';
import { verifySignupTicket } from '@/features/auth/signup-transaction';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
  const url = new URL(request.url);

  // Extract ticket from Authorization header, query param, or Cookie
  let ticket: string | null = null;
  const authHeader = request.headers.get('Authorization');
  if (authHeader?.startsWith('Bearer ')) {
    ticket = authHeader.slice(7).trim();
  }

  if (!ticket) {
    ticket = url.searchParams.get('ticket') || url.searchParams.get('signup_ticket');
  }

  if (!ticket) {
    const cookieHeader = request.headers.get('cookie') || '';
    const match = cookieHeader.match(/spm_signup_ticket=([^;]+)/);
    if (match && match[1]) {
      ticket = decodeURIComponent(match[1]);
    }
  }

  if (!ticket) {
    return NextResponse.json({ valid: false }, { headers });
  }

  const payload = verifySignupTicket(ticket);
  if (!payload) {
    return NextResponse.json({ valid: false, error: 'TICKET_EXPIRED_OR_INVALID' }, { headers });
  }

  return NextResponse.json(
    {
      valid: true,
      identity: payload.identity,
      market: payload.market,
      ui_locale: payload.uiLocale,
      expires_at: payload.expiresAt,
    },
    { headers }
  );
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: 'spm_signup_ticket',
    value: '',
    path: '/',
    maxAge: 0,
  });
  return response;
}

