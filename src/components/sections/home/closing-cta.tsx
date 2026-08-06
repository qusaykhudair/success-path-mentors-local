import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { buttonVariants } from '../../ui/button';
import { Section } from '@/components/ui/section';

export async function ClosingCta() {
  const t = await getTranslations('closingCta');

  return (
    <Section tone="primary" className="text-center">
      <h2 className="text-h2 text-white">{t('heading')}</h2>
      <p className="mx-auto mt-4 max-w-xl text-body text-white/80">{t('subheading')}</p>
      <Link href="/" className={`${buttonVariants({ variant: 'accent', size: 'lg' })} mt-8`}>
        {t('cta')}
      </Link>
    </Section>
  );
}
