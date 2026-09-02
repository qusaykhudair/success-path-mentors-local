import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const DEFAULT_N8N_WEBHOOK_URL =
  'https://successpathmentors.app.n8n.cloud/webhook/5b3759e3-1f64-470f-9661-98db6565863f/chat';

function getWebhookUrl(): string {
  return (
    process.env.N8N_CHAT_WEBHOOK_URL?.trim() ||
    process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL?.trim() ||
    DEFAULT_N8N_WEBHOOK_URL
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: NextRequest) {
  const webhookUrl = getWebhookUrl();

  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const isLoadPreviousSession = body.action === 'loadPreviousSession';

  try {
    const controller = new AbortController();
    const timeoutMs = isLoadPreviousSession ? 10000 : 50000;
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const upstreamResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const responseText = await upstreamResponse.text();

    if (!upstreamResponse.ok) {
      console.warn(
        `[api/chat] Upstream returned status ${upstreamResponse.status} for action: ${String(body.action)}`
      );

      // If loadPreviousSession fails upstream, return empty session data gracefully so @n8n/chat initializes cleanly
      if (isLoadPreviousSession) {
        return NextResponse.json({ data: [] }, { status: 200 });
      }

      return new NextResponse(responseText || 'Upstream service error', {
        status: upstreamResponse.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const parsedJson = JSON.parse(responseText);
      return NextResponse.json(parsedJson, { status: 200 });
    } catch {
      return new NextResponse(responseText, {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
  } catch (error) {
    console.error('[api/chat] Error proxying chat request:', error);

    // Never break initial session loading if upstream is temporarily unreachable
    if (isLoadPreviousSession) {
      return NextResponse.json({ data: [] }, { status: 200 });
    }

    return NextResponse.json(
      {
        error: 'Service temporarily unavailable. Please try again in a moment.',
      },
      { status: 502 }
    );
  }
}
