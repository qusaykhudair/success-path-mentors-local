import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const { ref } = await params;
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://143.244.170.205').trim().replace(/\/+$/, '');

  if (!ref) {
    return NextResponse.json({ error: 'Missing registration reference' }, { status: 400 });
  }

  try {
    const response = await fetch(`${baseUrl}/api/registrations/${encodeURIComponent(ref)}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error(`Error fetching registration status for ref ${ref}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch registration status from backend' },
      { status: 502 }
    );
  }
}
