"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { ContentPending } from "@/components/feedback/ContentPending";
import { IconButton } from "@/components/ui/IconButton";
import type { Review } from "@/types";

type TestimonialsSectionProps = {
  title: string;
  description?: string;
  items: Review[];
  pendingMessage: string;
};

/**
 * Cross-page shared section per docs/adr/0002-sections-folder-structure.md
 * — "Testimonials" carousel appears identically on About, Home, and every
 * detail page template. Takes data as props; never imports src/data.
 *
 * Carousel implementation: native scroll-snap (accessible via keyboard/
 * touch by default) with prev/next buttons that scroll by one card width
 * — avoids pulling in a full carousel library for a single-row list.
 */
export function TestimonialsSection({
  title,
  description,
  items,
  pendingMessage,
}: TestimonialsSectionProps) {
  const t = useTranslations("common");
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
    const amount = (card?.offsetWidth ?? 320) + 16;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="bg-muted/40 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          title={title}
          description={description}
          action={
            items.length > 0 ? (
              <div className="mt-2 flex items-center gap-2">
                <IconButton
                  aria-label={t("back")}
                  icon={
                    <ChevronLeft className="size-4 rtl:-scale-x-100" aria-hidden="true" />
                  }
                  onClick={() => scrollByCard(-1)}
                  className="border-border border"
                />
                <IconButton
                  aria-label={t("viewAll")}
                  icon={
                    <ChevronRight
                      className="size-4 rtl:-scale-x-100"
                      aria-hidden="true"
                    />
                  }
                  onClick={() => scrollByCard(1)}
                  className="border-border border"
                />
              </div>
            ) : undefined
          }
        />

        {items.length > 0 ? (
          <div
            ref={scrollerRef}
            className="-mx-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto scroll-smooth px-4 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((review) => (
              <div
                key={review.id}
                data-testimonial-card
                className="w-[85%] shrink-0 snap-start sm:w-[360px]"
              >
                <TestimonialCard review={review} />
              </div>
            ))}
          </div>
        ) : (
          <ContentPending message={pendingMessage} />
        )}
      </Container>
    </section>
  );
}
