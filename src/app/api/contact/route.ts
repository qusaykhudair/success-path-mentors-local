import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_REQUESTS = 5;
const WINDOW_MS =
  10 * 60 * 1000;
const MIN_FORM_TIME_MS = 2500;
const MAX_FORM_AGE_MS =
  2 * 60 * 60 * 1000;
const APPS_SCRIPT_TIMEOUT_MS =
  15000;

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

type AppsScriptResponse = {
  ok?: boolean;
  inquiryId?: string;
  error?: string;
  delivery?: {
    gmail?: string;
    sheet?: string;
    confirmation?: string;
  };
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
          'Invalid request body',
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
          'Invalid form timing',
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
          'Required fields are missing or invalid',
      },
      {
        status: 400,
      }
    );
  }

  let webAppUrl: string;
  let secret: string;

  try {
    webAppUrl =
      getRequiredEnvironmentValue(
        'APPS_SCRIPT_WEB_APP_URL'
      );

    secret =
      getRequiredEnvironmentValue(
        'APPS_SCRIPT_CONTACT_SECRET'
      );
  } catch (error) {
    console.error(
      'Apps Script configuration is missing',
      error
    );

    return NextResponse.json(
      {
        ok: false,
        error:
          'Contact service is not configured',
      },
      {
        status: 503,
      }
    );
  }

  const controller =
    new AbortController();

  const timeout =
    setTimeout(
      () =>
        controller.abort(),
      APPS_SCRIPT_TIMEOUT_MS
    );

  try {
    const response =
      await fetch(webAppUrl, {
        method: 'POST',
        redirect: 'follow',
        cache: 'no-store',
        signal:
          controller.signal,
        headers: {
          'Content-Type':
            'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          secret,
          locale:
            cleanText(
              payload.locale,
              5
            ) === 'ar'
              ? 'ar'
              : 'en',
          contactName,
          email,
          phone:
            cleanText(
              payload.phone,
              40
            ),
          whatsapp:
            cleanText(
              payload.whatsapp,
              40
            ),
          studentFirstName:
            cleanText(
              payload.studentFirstName,
              80
            ),
          studentAge:
            cleanText(
              payload.studentAge,
              20
            ),
          grade:
            cleanText(
              payload.grade,
              60
            ),
          subject:
            cleanText(
              payload.subject,
              100
            ),
          curriculum:
            cleanText(
              payload.curriculum,
              120
            ),
          preferredLanguage:
            cleanText(
              payload.preferredLanguage,
              40
            ),
          country:
            cleanText(
              payload.country,
              100
            ),
          timeZone:
            cleanText(
              payload.timeZone,
              100
            ),
          preferredSchedule:
            cleanText(
              payload.preferredSchedule,
              240
            ),
          inquiryType,
          message,
          consent: true,
        }),
      });

    const responseText =
      await response.text();

    let result:
      AppsScriptResponse;

    try {
      result =
        JSON.parse(
          responseText
        ) as AppsScriptResponse;
    } catch {
      throw new Error(
        'Apps Script returned an invalid response'
      );
    }

    if (
      !response.ok ||
      result.ok !== true
    ) {
      console.error(
        'Apps Script contact request failed',
        {
          status:
            response.status,
          result,
        }
      );

      return NextResponse.json(
        {
          ok: false,
          error:
            result.error ||
            'Contact delivery failed',
        },
        {
          status: 502,
        }
      );
    }

    return NextResponse.json({
      ok: true,
      inquiryId:
        result.inquiryId,
      delivery:
        result.delivery,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unknown Apps Script error';

    console.error(
      'Apps Script request failed',
      error
    );

    return NextResponse.json(
      {
        ok: false,
        error:
          'Contact delivery failed',
        diagnostic:
          process.env.NODE_ENV ===
          'development'
            ? message
            : undefined,
      },
      {
        status: 502,
      }
    );
  } finally {
    clearTimeout(timeout);
  }
}