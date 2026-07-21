import { useTranslations } from "next-intl";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsCarousel() {
  const t = useTranslations("about.testimonials");

  return (
    <section className="py-16 sm:py-24 bg-muted/20">
      <Container className="flex flex-col gap-10">
        <SectionHeading title={t("title")} description={t("description")} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(0, 4).map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
