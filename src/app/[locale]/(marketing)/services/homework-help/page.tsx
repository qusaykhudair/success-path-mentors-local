import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SeoGapPageShell } from '@/components/internal/seo-gap-page-shell';
import { routePath } from '@/config/routes';
import { isSupportedLocale, siteConfig } from '@/config/site';
import {
  getSeoGapPage,
  type SeoGapPageContent,
} from '@/content/pages/seo-gap-pages';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface ServicePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const PAGE_KEY = 'homework-help';
const baseContent = getSeoGapPage(PAGE_KEY);

const content = {
  ...baseContent,
  seo: {
    ...baseContent.seo,
    title:
      'Online Homework Help Canada | Grades 1–12 Tutoring | Success Path Mentors',
    description:
      '1-on-1 online homework help for Grades 1–12 students in Canada. Get structured support with assignments, concept gaps, study routines, and independent problem solving.',
  },
  hero: {
    ...baseContent.hero,
    eyebrow:
      '1-on-1 Online Homework Help in Canada',
    title:
      'Online Homework Help for Grades 1–12 Students in Canada',
    description:
      'Personalized one-to-one support for school assignments, confusing lessons, and study routines. Tutors guide students through Math, English, Science, and other supported schoolwork while keeping the student responsible for their own work.',
    primaryAction:
      'Book a Free Trial Session',
    secondaryAction:
      'How Homework Support Works',
    highlights: [
      {
        value: 'Grades 1–12',
        label:
          'Elementary & secondary support',
      },
      {
        value: '1-on-1 Online',
        label:
          'Assignment & concept guidance',
      },
      {
        value: 'Independent Skills',
        label:
          'Guided problem solving & study routines',
      },
    ],
  },
  overview: {
    ...baseContent.overview,
    eyebrow:
      'Ontario & Canada Schoolwork Support',
    title:
      'Homework Support That Clarifies Today’s Work and Builds Stronger Study Habits',
    paragraphs: [
      'Homework can become difficult when a student leaves class with an unresolved concept gap, falls behind on assignments, or is unsure how to organize several tasks at once. The goal is not to supply answers, but to help the student understand the work and learn a repeatable way to approach it.',
      'Success Path Mentors provides structured one-to-one online homework support for Grades 1–12 students. Tutors work through current assignments, explain difficult concepts, help students prioritize their workload, and reinforce independent problem-solving habits that can be used across future schoolwork.',
    ],
  },
  tutoringApproach: {
    ...baseContent.tutoringApproach,
    eyebrow:
      'Guided, Student-Led Support',
    title:
      'How Our Homework Tutors Support Students Without Doing the Work for Them',
    description:
      'Each session combines assignment guidance, concept clarification, and practical study routines while preserving the student’s academic responsibility.',
  },
  faqs: [
    {
      question:
        'Will the tutor do the homework for my child?',
      answer:
        'No. Tutors explain concepts, ask guiding questions, model similar examples, and help students plan their next steps, but the student remains responsible for completing and submitting their own work.',
    },
    {
      question:
        'Which subjects can homework help cover?',
      answer:
        'Homework support can include Math, English, Science, Chemistry, Physics, French, and other supported school subjects depending on the student’s grade, course, and tutor match.',
    },
    {
      question:
        'Is homework help available for both elementary and high school students?',
      answer:
        'Yes. The service supports Grades 1–12, from foundational elementary assignments and study routines through secondary course work, projects, quizzes, and exam-related review.',
    },
    {
      question:
        'What happens if my child finishes the assigned homework before the session ends?',
      answer:
        'The tutor can use the remaining time to reinforce a weak concept, review an upcoming topic, practise a similar problem, or help the student prepare for a quiz or future assignment.',
    },
  ],
  relatedLinks: [
    {
      title: 'Ontario Curriculum Tutoring',
      description:
        'See how tutoring support connects with Ontario curriculum expectations and school assessment practices.',
      href: '/curriculum/ontario',
      label: 'Ontario Curriculum Support',
    },
    {
      title: 'Math Tutoring',
      description:
        'Explore one-to-one mathematics support from foundational skills through senior high school courses.',
      href: '/subjects/math',
      label: 'Math Tutoring',
    },
    {
      title: 'English Tutoring',
      description:
        'Build reading, writing, grammar, comprehension, and academic communication skills.',
      href: '/subjects/english',
      label: 'English Tutoring',
    },
    {
      title: 'Science Tutoring',
      description:
        'Review broad science support and pathways into senior Chemistry and Physics.',
      href: '/subjects/general-science',
      label: 'Science Tutoring',
    },
    {
      title: 'Exam Preparation',
      description:
        'Move from ongoing homework support into structured midterm, final exam, and culminating-task preparation.',
      href: '/services/exam-preparation',
      label: 'Exam Preparation',
    },
  ],
} satisfies SeoGapPageContent;

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale !== 'en') {
    return {};
  }

  const canonical = new URL(
    `/${locale}${content.pathname}`,
    siteConfig.url
  ).toString();

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description: content.seo.description,
      pathname: content.pathname,
      languages: {
        'en-CA': canonical,
        'x-default': canonical,
      },
    },
  });
}

export default async function HomeworkHelpPage({
  params,
}: ServicePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale !== 'en') {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Home', href: routePath.home(locale) },
    { label: 'Services', href: routePath.services(locale) },
    { label: 'Homework Help' },
  ];

  const canonicalUrl = new URL(
    `/${locale}${content.pathname}`,
    siteConfig.url
  ).toString();
  const bookingHref =
    siteConfig.bookingUrl.trim() ||
    routePath.contact(locale);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: content.hero.title,
      description: content.seo.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: siteConfig.name,
        url: siteConfig.url,
      },
      serviceType: 'Online Homework Help Tutoring',
      areaServed: {
        '@type': 'Country',
        name: 'Canada',
      },
    },
  ];

  return (
    <SeoGapPageShell
      content={content}
      breadcrumbs={breadcrumbs}
      canonicalUrl={canonicalUrl}
      bookingHref={bookingHref}
      schemaData={schemas}
    />
  );
}
