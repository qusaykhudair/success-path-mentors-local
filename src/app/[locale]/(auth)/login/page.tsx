import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AuthShell } from '@/features/auth/auth-shell';
import { getAuthCopy } from '@/features/auth/auth-copy';
import { LoginForm } from '@/features/auth/login-form';
import type { AuthLocale } from '@/features/auth/auth-contracts';
import { routing } from '@/i18n/routing';

interface LoginPageProps {
  params: Promise<{ locale: string }>;
}

function getLocale(value: string): AuthLocale {
  if (!(routing.locales as readonly string[]).includes(value)) {
    notFound();
  }
  return value as AuthLocale;
}

export async function generateMetadata({ params }: LoginPageProps): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  const copy = getAuthCopy(locale);

  return {
    title: copy.login.metadataTitle,
    description: copy.login.description,
    robots: { index: false, follow: true },
  };
}

export default async function LoginPage({ params }: LoginPageProps) {
  const locale = getLocale((await params).locale);

  return (
    <AuthShell locale={locale}>
      <LoginForm locale={locale} />
    </AuthShell>
  );
}
