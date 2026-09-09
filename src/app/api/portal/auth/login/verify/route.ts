import { NextResponse } from 'next/server';
import { z } from 'zod';
import { forwardLoginRequest } from '@/lib/auth-proxy';

export async function POST(request: Request) {
  let body: { contact_method_id: number; code: string };
  try {
    body = z.object({ contact_method_id: z.number().int().positive().safe(), code: z.string().regex(/^\d{6}$/) }).parse(await request.json());
  } catch {
    return NextResponse.json({ code: 'OTP_INVALID' }, { status: 400, headers: { 'Cache-Control': 'no-store' } });
  }
  return forwardLoginRequest(request, '/api/portal/auth/login/verify', body);
}
