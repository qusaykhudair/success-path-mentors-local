"use client";

import type { AbstractIntlMessages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

type AppProvidersProps = {
  locale: string;
  timeZone: string;
  messages: AbstractIntlMessages;
  children: ReactNode;
};

/**
 * Single place to compose all client-side context providers.
 * Per docs/02 - Folder Structure Specification.md (providers/).
 *
 * `timeZone` must be passed explicitly here too — the server-side
 * getRequestConfig() value (src/i18n/request.ts) does not automatically
 * propagate to NextIntlClientProvider, and omitting it causes
 * next-intl's ENVIRONMENT_FALLBACK warning in any Client Component that
 * calls useTranslations/useFormatter.
 *
 * MotionConfig's `reducedMotion="user"` makes every Framer Motion
 * animation in the tree automatically respect the OS-level
 * prefers-reduced-motion setting, per Motion & Animation Guidelines.md.
 */
export function AppProviders({
  locale,
  timeZone,
  messages,
  children,
}: AppProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} timeZone={timeZone} messages={messages}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextIntlClientProvider>
  );
}
