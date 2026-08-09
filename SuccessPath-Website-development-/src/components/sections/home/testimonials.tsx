// Server Component

import { getTranslations } from 'next-intl/server';

import {
  Section,
  SectionHeading,
} from '@/components/ui/section';

import {
  TestimonialsGrid,
  type Testimonial,
} from './testimonials-grid';

export async function Testimonials() {
  const t = await getTranslations('testimonials');

  const allItems = t.raw('items') as Testimonial[];

  // نعرض بحد أقصى 8 آراء للمحافظة على تركيز القسم.
  const items = Array.isArray(allItems)
    ? allItems.slice(0, 8)
    : [];

  const headingId = 'testimonials-heading';

  if (items.length === 0) {
    return null;
  }

  return (
    <Section
      id="testimonials"
      tone="background"
      spacing="md"
      aria-labelledby={headingId}
      className="
        relative
        isolate
        overflow-hidden
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-background
          via-accent-50/45
          to-background
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -end-40
          top-10
          -z-10
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-accent-100/45
          blur-3xl
        "
      />

      <SectionHeading
        align="start"
        eyebrow={t('eyebrow')}
        heading={
          <span id={headingId}>
            {t('heading')}
          </span>
        }
        subheading={t('subheading')}
        className="
          mb-12
          max-w-3xl
          md:mb-14
        "
      />

      <TestimonialsGrid
        items={items}
        labels={{
          carousel: t('carouselLabel'),
          feedback: t('feedbackLabel'),
          rating: t.raw('ratingLabel') as string,
          previous: t('previous'),
          next: t('next'),
          view: t('viewTestimonial'),
        }}
      />
    </Section>
  );
}