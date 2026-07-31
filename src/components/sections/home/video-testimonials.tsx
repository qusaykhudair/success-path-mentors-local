// Server Component

import { getTranslations } from 'next-intl/server';

import { Reveal } from '@/components/motion/reveal';
import {
  Section,
  SectionHeading,
} from '@/components/ui/section';

import {
  VideoTestimonialsGrid,
  type VideoTestimonial,
} from './video-testimonials-grid';

export async function VideoTestimonials() {
  const t = await getTranslations(
    'videoTestimonials'
  );

  const items = t.raw(
    'items'
  ) as VideoTestimonial[];

  const headingId =
    'video-testimonials-heading';

  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <Section
      id="video-testimonials"
      tone="background"
      spacing="md"
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -end-40 top-16 h-[28rem] w-[28rem] rounded-full bg-accent-100/45 blur-3xl" />
        <div className="absolute -start-36 bottom-0 h-96 w-96 rounded-full bg-primary-100/45 blur-3xl" />
      </div>

      <SectionHeading
        align="center"
        eyebrow={t('eyebrow')}
        heading={
          <span id={headingId}>
            {t('heading')}
          </span>
        }
        subheading={t('subheading')}
        className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
      />

      <Reveal>
        <VideoTestimonialsGrid
          items={items}
          labels={{
            region: t('galleryLabel'),
            watch: t('watchVideo'),
            stop: t('stopVideo'),
            select: t('selectVideo'),
            nowPlaying: t('nowPlaying'),
            moreVideos: t('moreVideos'),
            youtube: t('youtubeLabel'),
            invalidVideo: t('invalidVideo'),
          }}
        />
      </Reveal>
    </Section>
  );
}