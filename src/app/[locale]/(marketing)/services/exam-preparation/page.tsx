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

const PAGE_KEY = 'exam-preparation';
const baseContent = getSeoGapPage(PAGE_KEY);

const content = {
  ...baseContent,
  seo: {
    ...baseContent.seo,
    title:
      'Exam Prep Tutoring Ontario | High School Exams | Success Path Mentors',
    description:
      '1-on-1 online exam preparation for Ontario high school students. Review key concepts, practise exam-style questions, and prepare for midterms and finals.',
  },
  hero: {
    ...baseContent.hero,
    eyebrow:
      '1-on-1 Online Exam Preparation in Ontario',
    title:
      'Online Exam Preparation Tutoring for Ontario High School Students',
    description:
      'Personalized one-to-one support for midterms, final exams, and culminating tasks. Review course concepts, practise exam-style questions, improve time management, and build confidence under timed conditions.',
    primaryAction:
      'Book a Free Trial Session',
    secondaryAction:
      'Explore Exam Prep Strategies',
    highlights: [
      {
        value: 'Ontario High School',
        label:
          'Midterms, finals & culminating tasks',
      },
      {
        value: '1-on-1 Online',
        label:
          'Targeted concept review',
      },
      {
        value: 'Exam-Style Practice',
        label:
          'Timing & test strategy',
      },
    ],
  },
  overview: {
    ...baseContent.overview,
    eyebrow:
      'Structured Midterm & Final Exam Support',
    title:
      'Exam Preparation Built Around the Student’s Ontario High School Course',
    paragraphs: [
      'Major assessments can have a significant impact on a secondary student’s course grade. Effective preparation requires more than re-reading notes: students need to identify knowledge gaps, retrieve concepts from memory, practise under time limits, and learn how to approach unfamiliar questions.',
      'Success Path Mentors provides structured one-to-one online exam preparation around the student’s current course. Tutors prioritize weaker topics, review key concepts, use exam-style practice questions, and coach practical time-management and answer-checking strategies for midterms, finals, and culminating assessments.',
    ],
  },
  tutoringApproach: {
    ...baseContent.tutoringApproach,
    title:
      'Our 4-Phase Exam Preparation Framework',
    description:
      'A structured approach to strengthen course knowledge, timed practice, and test-taking habits before important school assessments.',
  },
  faqs: [
    {
      question:
        'When should a student start preparing for final exams?',
      answer:
        'Starting several weeks before exam week gives students time to review each course unit, identify weak areas, practise exam-style questions, and avoid last-minute cramming. The exact timeline depends on the course and the student’s current readiness.',
    },
    {
      question:
        'Do you provide practice exam questions?',
      answer:
        'Tutors can use course-relevant exam-style questions and timed practice to review concepts and help students become more comfortable with the format and pacing of school assessments.',
    },
    {
      question:
        'Can exam prep tutoring help with culminating performance tasks?',
      answer:
        'Yes. When a course includes a culminating assignment, presentation, or portfolio, tutors can support planning, concept review, organization, and rehearsal while keeping the student responsible for their own work.',
    },
    {
      question:
        'How do tutors support students who feel nervous before tests?',
      answer:
        'Tutors build familiarity through structured review, timed practice, clear question-triage strategies, and repeat exposure to exam-style tasks so students can approach test day with a more predictable routine.',
    },
  ],
  relatedLinks: [
    {
      title: 'Ontario Curriculum Tutoring',
      description:
        'See how our tutoring aligns with Ontario curriculum expectations and school assessment categories.',
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
      title: 'Science Tutoring',
      description:
        'Review our broad science support and pathways into senior Chemistry and Physics.',
      href: '/subjects/general-science',
      label: 'Science Tutoring',
    },
    {
      title: 'Homework Help',
      description:
        'Build stronger study routines and address course gaps before exam season.',
      href: '/services/homework-help',
      label: 'Homework Help',
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

export default async function ExamPreparationPage({
  params,
}: ServicePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale !== 'en') {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Home', href: routePath.home(locale) },
    { label: 'Services', href: routePath.services(locale) },
    { label: 'Exam Preparation' },
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
      serviceType: 'Online Exam Preparation Tutoring',
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
