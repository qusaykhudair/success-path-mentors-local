import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";

export function HomeCta() {
  const t = useTranslations("about.cta");

  return (
    <section className="bg-primary text-primary-foreground py-20 sm:py-32">
      <Container className="flex flex-col items-center text-center gap-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="text-primary-foreground/80 max-w-xl text-lg">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button href="/contact" variant="secondary" size="lg">
            {t("bookConsultation")}
          </Button>
          <Button href="/become-tutor" variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            {t("becomeTutor")} <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
