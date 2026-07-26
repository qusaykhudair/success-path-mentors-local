// testimonials.tsx  — Server Component
import { getTranslations } from 'next-intl/server';
import { Section, SectionHeading } from '@/components/ui/section';
import { TestimonialsCarousel, type Testimonial } from './testimonials-carousel';

export async function Testimonials() {
  const t = await getTranslations('testimonials');
  const items = t.raw('items') as Testimonial[];
  const headingId = 'testimonials-heading';

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <Section id="testimonials" tone="tint" aria-labelledby={headingId}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -end-20 top-10 h-72 w-72 rounded-full bg-accent-300/15 blur-3xl" />
        <div className="absolute -start-20 bottom-10 h-72 w-72 rounded-full bg-primary-300/15 blur-3xl" />
      </div>

      <div className="relative">
        <SectionHeading  heading={t('heading')} />
        <TestimonialsCarousel items={items} ratingLabel={t('ratingLabel', { rating: 5 })} />
      </div>
    </Section>
  );
}