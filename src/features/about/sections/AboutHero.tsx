import { useTranslations } from "next-intl";
import { ShieldCheck, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

/**
 * Per docs/11 - About Page Specification.md — Hero: "Headline, Short
 * Description, CTA, Background Image, Trust Indicators."
 *
 * No real photography was supplied (see docs/03 - Design System
 * Specification.md Images section — "Professional Photography, Real
 * Tutors" required, none available), so the background is a token-based
 * gradient rather than a placeholder stock photo. Trust indicators are
 * qualitative (what the service does), not numeric claims — real stats
 * belong in the Statistics section below, sourced from actual data.
 */
const trustIndicators = [
  { key: "vettedTutors", icon: ShieldCheck },
  { key: "flexibleScheduling", icon: Clock },
  { key: "personalizedPlans", icon: Sparkles },
] as const;

export function AboutHero() {
  const t = useTranslations("about.hero");
  const tTrust = useTranslations("about.hero.trustIndicators");

  return (
    <section className="from-primary to-secondary relative overflow-hidden bg-gradient-to-br py-20 sm:py-28">
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="text-accent text-xs font-semibold tracking-[0.14em] uppercase">
          {t("eyebrow")}
        </span>
        <h1 className="text-primary-foreground max-w-3xl text-3xl font-bold sm:text-5xl">
          {t("title")}
        </h1>
        <p className="max-w-2xl text-sm text-white/80 sm:text-base">{t("description")}</p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button href={ROUTES.contact} size="lg">
            {t("primaryCta")}
          </Button>
          <Button
            href={ROUTES.becomeTutor}
            variant="outline"
            size="lg"
            className="text-primary-foreground border-white/30 hover:bg-white/10"
          >
            {t("secondaryCta")}
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustIndicators.map(({ key, icon: Icon }) => (
            <li
              key={key}
              className="flex items-center gap-2 text-sm font-medium text-white/90"
            >
              <Icon className="text-accent size-4" aria-hidden="true" />
              {tTrust(key)}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
