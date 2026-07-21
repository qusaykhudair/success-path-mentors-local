import { useTranslations } from "next-intl";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { whyChooseUs } from "@/features/about/data/about-content";

/** Per docs/11 - About Page Specification.md — Why Choose Us. */
export function WhyChooseUs() {
  const t = useTranslations("about.whyChooseUs");

  return (
    <section className="bg-muted/40 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading title={t("title")} description={t("description")} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map(({ id, icon }) => (
            <FeatureCard
              key={id}
              icon={icon}
              title={t(`${id}.title`)}
              description={t(`${id}.description`)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
