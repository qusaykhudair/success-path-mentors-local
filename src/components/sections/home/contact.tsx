import { getTranslations } from 'next-intl/server';
import { Section, SectionHeading } from '@/components/ui/section';
import { ContactForm } from './contact-form';

export async function Contact() {
  const t = await getTranslations('contact');

  return (
    <Section id="contact" tone="tint">
      <SectionHeading heading={t('heading')} subheading={t('subheading')} align="center" />
      <div className="mx-auto max-w-4xl rounded-card border border-primary-100 bg-surface p-8 shadow-card">
        <ContactForm />
      </div>
    </Section>
  );
}
