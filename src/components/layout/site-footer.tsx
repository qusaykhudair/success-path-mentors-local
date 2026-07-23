import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/container';

export async function SiteFooter() {
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-100 bg-primary-50">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/images/logo.png"
            alt="Mustafa Academy — Success Path Mentors"
            width={160}
            height={47}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-md text-small text-ink/70">{t('description')}</p>
        </div>

        <div>
          <h3 className="text-h4 text-primary">{t('quickLinks')}</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/about" className="text-small text-ink/70 hover:text-primary">{tNav('about')}</Link></li>
            <li><Link href="/services" className="text-small text-ink/70 hover:text-primary">{tNav('services')}</Link></li>
            <li><Link href="/faq" className="text-small text-ink/70 hover:text-primary">{tNav('faq')}</Link></li>
            <li><Link href="/contact" className="text-small text-ink/70 hover:text-primary">{tNav('contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-h4 text-primary">{t('subjectsOffered')}</h3>
          <ul className="mt-4 space-y-2">
            {t.raw('subjects').map((subject: string) => (
              <li key={subject} className="text-small text-ink/70">{subject}</li>
            ))}
          </ul>
          <p className="mt-4 text-caption font-semibold text-accent-700">{t('gradeRange')}</p>
        </div>
      </Container>

      <div className="border-t border-primary-100 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-caption text-ink/60 sm:flex-row">
          <p>© {year} Mustafa Academy — Success Path Mentors. {t('rightsReserved')}.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
