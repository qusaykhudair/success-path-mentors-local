import { redactAuthResponse } from '@/lib/auth-response';
import { NextResponse } from 'next/server';
import { validateRegistrationPhone } from '@/lib/registration-phone';

export async function POST(request: Request) {
  const apiKey = process.env.REGISTRATION_API_KEY;
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || '').trim().replace(/\/+$/, '');

  if (!apiKey) {
    console.error('REGISTRATION_API_KEY is not configured on the server.');
    return NextResponse.json(
      { error: 'Server misconfiguration: API key is missing' },
      { status: 500 }
    );
  }

  if (!baseUrl) {
    console.error('NEXT_PUBLIC_API_BASE_URL is not configured on the server.');
    return NextResponse.json(
      { error: 'Server misconfiguration: API base URL is missing' },
      { status: 500 }
    );
  }

  try {
    let body: Record<string, unknown>;
    try {
      body = validateRegistrationPhone(await request.json());
    } catch (error) {
      return NextResponse.json({ code: 'VALIDATION_ERROR', error: error instanceof Error ? error.message : 'Invalid registration' }, { status: 400 });
    }

    const response = await fetch(`${baseUrl}/api/registrations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    return NextResponse.json(redactAuthResponse(data), { status: response.status, headers: { 'Cache-Control': 'no-store', ...(response.headers.get('retry-after') ? { 'Retry-After': response.headers.get('retry-after')! } : {}) } });
  } catch (error) {
    console.error('Error proxying registration request:', error);
    return NextResponse.json(
      { error: 'Failed to proxy registration request to backend' },
      { status: 502 }
    );
  }
}
