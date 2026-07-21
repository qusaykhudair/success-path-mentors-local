import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-surface to-surface" />
      
      <Container className="relative flex flex-col items-center text-center gap-8">
        <h1 className="text-foreground max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg sm:text-xl">
          {t("subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button href="/contact" size="lg" rightIcon={<ArrowRight className="size-4" />}>
            {t("primaryCta")}
          </Button>
          <Button href="/subjects" variant="outline" size="lg">
            {t("secondaryCta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
