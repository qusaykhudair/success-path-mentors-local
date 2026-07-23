import { getTranslations } from 'next-intl/server';
import { PlayCircle } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

interface ChallengeItem {
  title: string;
  description: string;
}

export async function Challenges() {
  const t = await getTranslations('challenges');
  const items = t.raw('items') as ChallengeItem[];

  return (
    <Section tone="tint">
      <SectionHeading heading={t('heading')} subheading={t('subheading')} />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 className="text-h4">{item.title}</h3>
            <p className="mt-2 text-small text-ink/70">{item.description}</p>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 text-small font-semibold text-accent-700 hover:text-accent-800"
            >
              <PlayCircle className="h-5 w-5" aria-hidden />
              {t('watchVideo')}
            </button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
