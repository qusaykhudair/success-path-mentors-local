import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/common/JsonLd";
import { faqSchema } from "@/shared/seo/json-ld";
import type { FaqItem } from "@/types";

type FAQSectionProps = {
  title: string;
  description?: string;
  items: FaqItem[];
};

/**
 * Cross-page shared section per docs/adr/0002-sections-folder-structure.md
 * — FAQ + FAQPage schema appears on nearly every page in the spec set
 * (About, Subjects, Services, Locations, Contact, Become a Tutor, the
 * dedicated FAQ page, blog articles). Emits its own FAQPage JSON-LD
 * scoped to just the items shown, so multiple FAQSection instances on
 * different pages never produce duplicate/conflicting schema.
 */
export function FAQSection({ title, description, items }: FAQSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <JsonLd
        data={faqSchema(
          items.map((item) => ({ question: item.question, answer: item.answer })),
        )}
      />
      <Container className="flex flex-col gap-10">
        <SectionHeading title={title} description={description} />
        <div className="mx-auto w-full max-w-3xl">
          <Accordion
            items={items.map((item) => ({
              id: item.id,
              question: item.question,
              answer: item.answer,
            }))}
          />
        </div>
      </Container>
    </section>
  );
}
