import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { buttonVariants } from '@/components/ui/button';
import { Section, SectionHeading } from '@/components/ui/section';
import { FaqAccordion } from './faq-accordion';

interface FaqItem {
  question: string;
  answer: string;
}

export async function Faq() {
  const t = await getTranslations('faq');
  const items = t.raw('items') as FaqItem[];
  const answeredItems = items.filter((item) => item.answer.trim().length > 0);

  const faqJsonLd =
    answeredItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: answeredItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }
      : null;

  return (
    <Section id="faq">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <SectionHeading heading={t('heading')} subheading={t('subheading')} />
      <div className="mx-auto max-w-3xl">
        <FaqAccordion items={items} />
        <div className="mt-10 text-center">
          <p className="text-h4">{t('stillHaveQuestions')}</p>
          <p className="mt-2 text-small text-ink/70">{t('supportText')}</p>
          <Link href="/contact" className={`${buttonVariants({ variant: 'outline' })} mt-4`}>
            {t('contactUs')}
          </Link>
        </div>
      </div>
    </Section>
  );
}
