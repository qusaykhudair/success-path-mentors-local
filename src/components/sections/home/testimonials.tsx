import { getTranslations } from 'next-intl/server';
import { Quote } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
const placeholderTestimonials = [1, 2, 3];

export async function Testimonials() {
  const t = await getTranslations('testimonials');

  return (
    <Section>
      <SectionHeading heading={t('heading')} subheading={t('subheading')} />
      <div className="grid gap-6 md:grid-cols-3">
        {placeholderTestimonials.map((id) => (
          <Card key={id} className="flex flex-col">
            <Quote className="h-8 w-8 text-accent-400" aria-hidden />
            <p className="mt-4 flex-1 text-small italic text-ink/50">
              Testimonial content pending — to be provided by the client.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-primary-100 pt-4">
              <div className="h-10 w-10 rounded-full bg-primary-100" aria-hidden />
              <div>
                <p className="text-small font-semibold text-primary">Parent / Student name</p>
                <p className="text-caption text-ink/50">Pending</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
