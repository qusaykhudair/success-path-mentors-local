// Server Component
import { getTranslations } from 'next-intl/server';
import { Section, SectionHeading } from '@/components/ui/section';
import { VideoTestimonialsGrid, type VideoTestimonial } from './video-testimonials-grid';

export async function Challenges() {
  const t = await getTranslations('challenges');
  const items = t.raw('items') as VideoTestimonial[];
  const headingId = 'challenges-heading';

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <Section id="testimonials-video"  aria-labelledby={headingId}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -end-24 top-16 h-80 w-80 rounded-full bg-accent-300/12 blur-3xl" />
        <div className="absolute -start-24 bottom-16 h-80 w-80 rounded-full bg-primary-300/12 blur-3xl" />
      </div>

      <div className="relative">
        <SectionHeading  heading={t('heading')} />
        <VideoTestimonialsGrid items={items} playLabel={t('watchVideo')} closeLabel={t('close')} />
      </div>
    </Section>
  );
}