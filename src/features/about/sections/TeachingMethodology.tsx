import { useTranslations } from "next-intl";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { methodologySteps } from "@/features/about/data/about-content";

/**
 * Per docs/11 - About Page Specification.md — Teaching Methodology:
 * "Assessment, Planning, Teaching, Evaluation, Continuous Improvement.
 * Illustrated process." A real sequential process, so numbered steps
 * are justified here (unlike a generic feature list).
 */
export function TeachingMethodology() {
  const t = useTranslations("about.methodology");

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading title={t("title")} description={t("description")} />

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {methodologySteps.map(({ id, icon: Icon }, index) => (
            <li
              key={id}
              className="border-border bg-surface rounded-card relative flex flex-col gap-3 border p-6"
            >
              <span className="text-primary/20 absolute end-4 top-4 text-3xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="bg-primary/10 text-primary inline-flex size-11 items-center justify-center rounded-lg">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-foreground text-base font-semibold">
                {t(`${id}.title`)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`${id}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
