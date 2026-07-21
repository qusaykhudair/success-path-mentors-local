import { useTranslations } from "next-intl";
import { SearchX } from "lucide-react";
import { EmptyState } from "@/components/feedback/EmptyState";
import { Button } from "@/components/ui/Button";

/**
 * Per docs/07 - Component Library Specification.md — Feedback Components
 * (NotFound). Used by app/[locale]/not-found.tsx, and reusable for any
 * scoped 404 (e.g. a missing subject/service/location slug in later
 * phases) without re-implementing the layout each time.
 */
export function NotFound() {
  const t = useTranslations("common");

  return (
    <EmptyState
      icon={
        <div className="bg-muted text-muted-foreground inline-flex size-12 items-center justify-center rounded-full">
          <SearchX className="size-6" aria-hidden="true" />
        </div>
      }
      title={t("pageNotFound")}
      description={t("pageNotFoundDescription")}
      action={<Button href="/">{t("backHome")}</Button>}
    />
  );
}
