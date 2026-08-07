import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 24 * 1024;
const WINDOW_MS =
  10 * 60 * 1000;
const MIN_FORM_TIME_MS = 500;
const MAX_FORM_AGE_MS =
  2 * 60 * 60 * 1000;

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

type ContactPayload = {
  locale?: unknown;
  contactName?: unknown;
  email?: unknown;
  phone?: unknown;
  whatsapp?: unknown;
  studentFirstName?: unknown;
  studentAge?: unknown;
  grade?: unknown;
  subject?: unknown;
  curriculum?: unknown;
  preferredLanguage?: unknown;
  country?: unknown;
  timeZone?: unknown;
  preferredSchedule?: unknown;
  inquiryType?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

const globalContactState =
  globalThis as typeof globalThis & {
    contactRateLimits?: Map<
      string,
      RateLimitRecord
    >;
  };

const rateLimits =
  globalContactState
    .contactRateLimits ??
  new Map<string, RateLimitRecord>();

globalContactState.contactRateLimits =
  rateLimits;

function getClientIp(
  request: Request
): string {
  const forwarded =
    request.headers.get(
      'x-forwarded-for'
    );

  return (
    forwarded
      ?.split(',')[0]
      ?.trim() ||
    request.headers.get(
      'x-real-ip'
    ) ||
    'unknown'
  );
}

function isRateLimited(
  key: string
): boolean {
  const now = Date.now();
  const existing =
    rateLimits.get(key);

  if (
    !existing ||
    existing.resetAt <= now
  ) {
    rateLimits.set(key, {
      count: 1,
      resetAt:
        now + WINDOW_MS,
    });

    return false;
  }

  if (
    existing.count >=
    MAX_REQUESTS
  ) {
    return true;
  }

  existing.count += 1;
  rateLimits.set(
    key,
    existing
  );

  return false;
}

function cleanText(
  value: unknown,
  maxLength: number
): string {
  if (
    typeof value !== 'string'
  ) {
    return '';
  }

  return value
    .replace(/\0/g, '')
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(
  email: string
): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

function sameOrigin(
  request: Request
): boolean {
  const origin =
    request.headers.get(
      'origin'
    );

  const forwardedHost =
    request.headers.get(
      'x-forwarded-host'
    );

  const host =
    forwardedHost ||
    request.headers.get(
      'host'
    );

  if (!origin || !host) {
    return true;
  }

  try {
    return (
      new URL(origin).host ===
      host
    );
  } catch {
    return false;
  }
}

function getRequiredEnvironmentValue(
  name: string
): string {
  const value =
    process.env[name]?.trim();

  if (!value) {
    throw new Error(
      `Missing environment variable: ${name}`
    );
  }

  return value;
}

export async function POST(
  request: Request
) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: 'Request body is too large' },
      { status: 413, headers: { 'Cache-Control': 'no-store' } }
    );
  }
  if (!sameOrigin(request)) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Invalid origin',
      },
      {
        status: 403,
      }
    );
  }

  const clientIp =
    getClientIp(request);

  if (
    isRateLimited(
      `contact:${clientIp}`
    )
  ) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'Too many contact requests',
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil(WINDOW_MS / 1000)),
          'Cache-Control': 'no-store',
        },
      }
    );
  }

  let payload: ContactPayload;

  try {
    payload =
      (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          'Invalid request body (JSON parse failed)',
      },
      {
        status: 400,
      }
    );
  }

  const honeypot =
    cleanText(
      payload.website,
      100
    );

  if (honeypot) {
    return NextResponse.json({
      ok: true,
    });
  }

  const startedAt =
    typeof payload.startedAt ===
    'number'
      ? payload.startedAt
      : Number(
          payload.startedAt
        );

  const elapsed =
    Date.now() - startedAt;

  if (
    !Number.isFinite(
      startedAt
    ) ||
    elapsed <
      MIN_FORM_TIME_MS ||
    elapsed >
      MAX_FORM_AGE_MS
  ) {
    return NextResponse.json(
      {
        ok: false,
        error:
          `Invalid form timing (Elapsed: ${elapsed}ms, Min: ${MIN_FORM_TIME_MS}ms, StartedAt: ${startedAt})`,
      },
      {
        status: 400,
      }
    );
  }

  const contactName =
    cleanText(
      payload.contactName,
      120
    );

  const email =
    cleanText(
      payload.email,
      160
    ).toLowerCase();

  const inquiryType =
    cleanText(
      payload.inquiryType,
      80
    );

  if (email && isRateLimited(`contact-email:${email}`)) {
    return NextResponse.json(
      { ok: false, error: 'Too many contact requests' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil(WINDOW_MS / 1000)),
          'Cache-Control': 'no-store',
        },
      }
    );
  }

  const message =
    cleanText(
      payload.message,
      4000
    );

  if (
    contactName.length < 2 ||
    !isValidEmail(email) ||
    !inquiryType ||
    message.length < 10 ||
    payload.consent !== true
  ) {
    return NextResponse.json(
      {
        ok: false,
        error:
          `Required fields are missing or invalid: name_length=${contactName.length}, valid_email=${isValidEmail(email)}, has_inquiry=${!!inquiryType}, msg_length=${message.length}, consent=${payload.consent}`,
      },
      {
        status: 400,
      }
    );
  }

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  const emailPassword = process.env.GMAIL_APP_PASSWORD?.trim();

  if (!contactEmail || !emailPassword) {
    console.error('Email configuration is missing');
    return NextResponse.json(
      { ok: false, error: 'Contact service is not configured' },
      { status: 503 }
    );
  }

  const inquiryId = `SPM-${Date.now().toString(36).toUpperCase()}`;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: contactEmail,
        pass: emailPassword,
      },
    });

    const mailOptions = {
      from: contactEmail,
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Request: ${inquiryId} - ${inquiryType}`,
      text: `
New contact request from the Success Path Mentors website
Inquiry ID: ${inquiryId}
Locale: ${cleanText(payload.locale, 5) === 'ar' ? 'ar' : 'en'}

Contact name: ${contactName}
Email: ${email}
Phone: ${cleanText(payload.phone, 40) || '—'}
WhatsApp: ${cleanText(payload.whatsapp, 40) || '—'}

Student: ${cleanText(payload.studentFirstName, 80) || '—'}
Age: ${cleanText(payload.studentAge, 20) || '—'}
Grade: ${cleanText(payload.grade, 60) || '—'}
Subject: ${cleanText(payload.subject, 100) || '—'}
Curriculum: ${cleanText(payload.curriculum, 120) || '—'}
Teaching language: ${cleanText(payload.preferredLanguage, 40) || '—'}
Country: ${cleanText(payload.country, 100) || '—'}
Time zone: ${cleanText(payload.timeZone, 100) || '—'}
Preferred schedule: ${cleanText(payload.preferredSchedule, 240) || '—'}
Inquiry type: ${inquiryType}

Message:
${message}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      ok: true,
      inquiryId,
    });
  } catch (error) {
    console.error('Nodemailer request failed', error);

    return NextResponse.json(
      {
        ok: false,
        error: 'Contact delivery failed',
        diagnostic:
          process.env.NODE_ENV === 'development'
            ? error instanceof Error ? error.message : 'Unknown Error'
            : undefined,
      },
      {
        status: 502,
      }
    );
  }
}