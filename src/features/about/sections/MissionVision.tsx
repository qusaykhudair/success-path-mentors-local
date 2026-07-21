import { useTranslations } from "next-intl";
import { Compass, Telescope } from "lucide-react";
import { Container } from "@/components/common/Container";

/**
 * Per docs/11 - About Page Specification.md — Mission (#3) then
 * Vision (#4), in that order. Kept as two distinct blocks (correct
 * order preserved) within one section for visual pairing.
 */
export function MissionVision() {
  const t = useTranslations("about");

  return (
    <section className="border-border bg-muted/40 border-y py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-surface rounded-card flex flex-col gap-3 p-8">
          <div className="bg-primary/10 text-primary inline-flex size-11 items-center justify-center rounded-lg">
            <Compass className="size-5" aria-hidden="true" />
          </div>
          <h2 className="text-foreground text-xl font-bold">{t("mission.title")}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t("mission.description")}
          </p>
        </div>
        <div className="bg-surface rounded-card flex flex-col gap-3 p-8">
          <div className="bg-accent/10 text-accent inline-flex size-11 items-center justify-center rounded-lg">
            <Telescope className="size-5" aria-hidden="true" />
          </div>
          <h2 className="text-foreground text-xl font-bold">{t("vision.title")}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t("vision.description")}
          </p>
        </div>
      </Container>
    </section>
  );
}
