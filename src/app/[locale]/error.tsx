"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/feedback/EmptyState";

/**
 * Per docs/03 - Design System Specification.md ("Error States: provide
 * clear error messages, offer recovery actions") and
 * docs/28 - Performance Optimization Guide.md error-handling rules
 * ("never expose technical errors to users").
 *
 * Catches errors thrown by any page/layout below [locale]/layout.tsx —
 * the Navbar/Footer in MainLayout stay mounted since this only replaces
 * the <main> content. Must be a Client Component (Next.js requirement
 * for error.tsx).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("common");

  useEffect(() => {
    // Report to an error-monitoring service (Sentry — planned integration,
    // see project memory) once configured. Logged locally for now.
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      icon={
        <div className="bg-danger/10 text-danger inline-flex size-12 items-center justify-center rounded-full">
          <AlertTriangle className="size-6" aria-hidden="true" />
        </div>
      }
      title={t("somethingWentWrong")}
      description={t("errorDescription")}
      action={
        <div className="flex items-center gap-3">
          <Button onClick={reset}>{t("tryAgain")}</Button>
          <Button href="/" variant="outline">
            {t("back")}
          </Button>
        </div>
      }
    />
  );
}
