import { useTranslations } from "next-intl";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContentPending } from "@/components/feedback/ContentPending";

/**
 * Per docs/11 - About Page Specification.md — Our Story:
 * "Timeline, Milestones, Educational philosophy, Growth."
 *
 * The company's actual founding story/milestones/dates are real business
 * facts not present anywhere in the supplied documentation — inventing
 * a founding year or growth narrative would violate the "no fake
 * business data" rule. Structure is in place (heading, timeline slot);
 * the timeline itself renders as a pending-content notice until real
 * milestones are supplied.
 */
export function OurStory() {
  const t = useTranslations("about.ourStory");

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-8">
        <SectionHeading align="start" title={t("title")} description={t("description")} />
        <ContentPending message={t("pendingMessage")} />
      </Container>
    </section>
  );
}
