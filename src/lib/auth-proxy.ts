import { NextResponse } from 'next/server';
import { redactAuthResponse } from './auth-response';

/** Existing identity service remains authoritative; this proxy never verifies OTPs. */
export async function forwardLoginRequest(request: Request, path: '/api/portal/auth/login/request' | '/api/portal/auth/login/verify', body: Record<string, unknown>) {
  const base = (process.env.NEXT_PUBLIC_API_BASE_URL || '').trim().replace(/\/+$/, '');
  if (!base) return NextResponse.json({ code: 'AUTH_UNAVAILABLE' }, { status: 503 });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    const headers = new Headers({ 'Content-Type': 'application/json', Accept: 'application/json' });
    for (const name of ['cookie', 'accept-language', 'origin', 'x-request-source']) {
      const value = request.headers.get(name);
      if (value) headers.set(name, value);
    }
    const response = await fetch(`${base}${path}`, { method: 'POST', headers, body: JSON.stringify(body), signal: controller.signal, redirect: 'manual', cache: 'no-store' });
    if (response.status >= 300 && response.status < 400) throw new Error('Unexpected authentication redirect');
    const data: unknown = await response.json();
    const outgoing = NextResponse.json(redactAuthResponse(data), { status: response.status, headers: { 'Cache-Control': 'no-store' } });
    const retryAfter = response.headers.get('retry-after');
    if (retryAfter) outgoing.headers.set('Retry-After', retryAfter);
    for (const cookie of response.headers.getSetCookie()) outgoing.headers.append('Set-Cookie', cookie);
    return outgoing;
  } catch {
    return NextResponse.json({ code: controller.signal.aborted ? 'REQUEST_TIMEOUT' : 'AUTH_UNAVAILABLE' }, { status: controller.signal.aborted ? 504 : 502, headers: { 'Cache-Control': 'no-store' } });
  } finally {
    clearTimeout(timeout);
  }
}
