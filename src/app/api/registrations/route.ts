import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const apiKey = (process.env.REGISTRATION_API_KEY || 'ma_de5206975b70c38102c4ce171e087109f96e22b99efa1db4649b88c0b358e465').trim();
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://143.244.170.205').trim().replace(/\/+$/, '');

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
    const body = await request.json();

    const guardian = body?.guardian;
    const email = typeof guardian?.email === 'string' ? guardian.email.trim() : '';
    const phone = typeof guardian?.phone === 'string'
      ? guardian.phone.trim()
      : (typeof guardian?.whatsapp === 'string' ? guardian.whatsapp.trim() : '');

    const hasEmail = Boolean(email);
    const hasPhone = Boolean(phone);

    if (!hasEmail && !hasPhone) {
      return NextResponse.json(
        {
          error: 'Please provide at least one contact method: Email Address or WhatsApp Number.',
          code: 'CONTACT_METHOD_REQUIRED',
        },
        { status: 400 }
      );
    }

    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Enter a valid email address.', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    if (hasPhone) {
      const digits = phone.replace(/\D/g, '');
      if (digits.length < 7 || digits.length > 20) {
        return NextResponse.json(
          { error: 'Enter a valid international number with country code.', code: 'INVALID_PHONE' },
          { status: 400 }
        );
      }
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

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error proxying registration request:', error);
    return NextResponse.json(
      { error: 'Failed to proxy registration request to backend' },
      { status: 502 }
    );
  }
}
