import { NextResponse } from 'next/server';

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
    const body = await request.json();

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
