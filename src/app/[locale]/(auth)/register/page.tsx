import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { AuthShell } from '@/features/auth/auth-shell';
import { getAuthCopy } from '@/features/auth/auth-copy';
import { RegistrationForm } from '@/features/auth/registration-form';
import type { AuthLocale } from '@/features/auth/auth-contracts';
import { routing } from '@/i18n/routing';

interface RegisterPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ demo?: string }>;
}

function getLocale(value: string): AuthLocale {
  if (value === 'fr') {
    redirect('/fr/programme-francais');
  }

  if (!(routing.locales as readonly string[]).includes(value)) {
    notFound();
  }
  return value as AuthLocale;
}

export async function generateMetadata({ params }: RegisterPageProps): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  const copy = getAuthCopy(locale);

  return {
    title: copy.register.metadataTitle,
    description: copy.register.description,
    robots: { index: false, follow: true },
  };
}

export default async function RegisterPage({ params, searchParams }: RegisterPageProps) {
  const locale = getLocale((await params).locale);

  return (
    <AuthShell locale={locale}>
      <RegistrationForm locale={locale} demo={(await searchParams).demo === '1'} />
    </AuthShell>
  );
}
