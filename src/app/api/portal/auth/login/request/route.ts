import { NextResponse } from 'next/server';
import { z } from 'zod';
import { normalizePhone } from '@/lib/phone';
import { forwardLoginRequest } from '@/lib/auth-proxy';

export async function POST(request: Request) {
  let identifier: string;
  try {
    const raw: unknown = await request.json();
    const body = z.object({ identifier: z.string().trim().min(1).max(254) }).parse(raw);
    if (z.string().email().safeParse(body.identifier).success) identifier = body.identifier.toLowerCase();
    else {
      const phone = normalizePhone(body.identifier);
      if (!phone) throw new Error('Invalid phone');
      identifier = phone.phoneE164;
    }
  } catch {
    return NextResponse.json({ code: 'INVALID_IDENTIFIER' }, { status: 400, headers: { 'Cache-Control': 'no-store' } });
  }
  return forwardLoginRequest(request, '/api/portal/auth/login/request', { identifier });
}
