import {
  Compass,
  Sparkles,
  BrainCircuit,
  BookOpenCheck,
  CheckCircle2,
  HelpCircle,
  Award,
} from 'lucide-react';

import type {
  BreadcrumbItem,
  FaqItem,
  FeatureItem,
  PageAction,
  PageHighlight,
  PageSeo,
  ProcessStep,
  RelatedPage,
} from '@/types/internal-page';

export interface SeoGapPageContent {
  slug: string;
  pathname: string;
  seo: PageSeo;
  breadcrumbs: BreadcrumbItem[];
  breadcrumbLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: PageAction;
    secondaryAction: PageAction;
    highlights: PageHighlight[];
  };
  overview: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
  };
  struggles: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
  howWeHelp: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  outcomes: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  relatedPages: {
    heading: string;
    items: RelatedPage[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: PageAction;
    secondaryAction: PageAction;
  };
}

export const seoGapPages: Record<string, SeoGapPageContent> = {
  'exam-preparation': {
    slug: 'exam-preparation',
    pathname: '/exam-preparation',
    seo: {
      title: 'School Exam Preparation Tutor | Final Exam Tutoring | Success Path Mentors',
      description: 'Targeted school exam preparation tutoring. One-to-one support for midterm and final exam review, active study habits, time management, and test anxiety reduction.',
      pathname: '/exam-preparation',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Exam Preparation' },
    ],
    breadcrumbLabel: 'Exam preparation tutoring breadcrumb',
    hero: {
      eyebrow: 'Seasonal & Focused Support • Grades 7–12',
      title: 'Targeted School Exam Preparation & Study Skills Tutoring',
      description: 'Equip your student to enter exam week with structured review of course concepts, timed practice questions, and effective test-taking strategies.',
      primaryAction: {
        label: 'Book an Exam Prep Consultation',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'View Tutoring Packages',
        href: '/en/#pricing',
      },
      highlights: [
        { value: 'Midterms & Finals', label: 'Structured preparation tailored to secondary school assessment periods.' },
        { value: 'Exam Strategy', label: 'Techniques for pacing, question triage, and clear responses.' },
        { value: 'Confidence Building', label: 'Replacing exam anxiety with methodical, practiced problem-solving.' },
      ],
    },
    overview: {
      id: 'exam-overview',
      eyebrow: 'School Assessment Support',
      title: 'Turning Major School Assessments into Confident Performances',
      description: 'In secondary schools, final exams and culminating tasks often represent a substantial component of a student’s course evaluation.',
      paragraphs: [
        'Preparing effectively for major exams requires synthesizing concepts learned over several months and demonstrating that knowledge under timed conditions. Many students spend hours passively re-reading notes without actively testing their recall through unassisted practice problems.',
        'Success Path Mentors provides structured, subject-by-subject school exam preparation in the weeks leading up to midterms and final evaluations. Mentors work one-to-one with students to clarify difficult units, review past test feedback, and develop organized revision routines.',
        'Our mentors help students practice answering exam-style questions under timed conditions and refine their written solutions to meet teacher evaluation expectations across conceptual understanding, problem-solving, and communication.',
      ],
    },
    struggles: {
      id: 'exam-struggles',
      eyebrow: 'Common Challenges',
      title: 'Frequent Hurdles Students Face During Exam Season',
      description: 'The recurring reasons capable students struggle during school exams:',
      items: [
        {
          title: 'Passive Study Habits',
          description: 'Highlighting textbooks and re-reading notes without actively testing recall through unassisted practice problems.',
          icon: BookOpenCheck,
        },
        {
          title: 'Time Allocation on Tests',
          description: 'Spending disproportionate time on difficult early questions, leaving high-value long-answer questions rushed or incomplete.',
          icon: Compass,
        },
        {
          title: 'Test Anxiety',
          description: 'Stress and nervousness that make it difficult to recall information accurately under examination pressure.',
          icon: HelpCircle,
        },
        {
          title: 'Synthesizing Multiple Units',
          description: 'Difficulty connecting concepts learned early in the term with advanced topics introduced late in the course.',
          icon: BrainCircuit,
        },
      ],
    },
    howWeHelp: {
      id: 'exam-how-we-help',
      eyebrow: 'Preparation Process',
      title: 'Our Structured School Exam Preparation Framework',
      description: 'A focused, step-by-step revision approach:',
      steps: [
        {
          title: 'Course Curriculum & Priority Review',
          description: 'We review the course syllabus and teacher guidelines, identifying high-priority units and areas where the student needs more support.',
        },
        {
          title: 'Concept & Formula Synthesis',
          description: 'Organizing key formulas, definitions, and problem-solving templates into clear summary sheets for active review.',
        },
        {
          title: 'Timed Practice & Question Triage',
          description: 'Practicing mixed-unit problems under timed conditions so students learn which questions to complete first and how to pace themselves.',
        },
        {
          title: 'Clear Written Presentation',
          description: 'Practicing step-by-step written work, units, and reasoning to ensure work is shown clearly and marks are not lost on formatting.',
        },
      ],
    },
    outcomes: {
      id: 'exam-outcomes',
      eyebrow: 'Learning Goals',
      title: 'What Students Gain from Exam Preparation Sessions',
      description: 'Key skills developed throughout preparation:',
      items: [
        {
          title: 'Strategic Question Prioritization',
          description: 'Knowing how to evaluate an exam paper, begin with high-confidence questions, and manage allocated time.',
          icon: CheckCircle2,
        },
        {
          title: 'Calm, Methodical Problem Solving',
          description: 'Practiced routines that help students deconstruct complex questions calmly instead of feeling overwhelmed.',
          icon: Sparkles,
        },
        {
          title: 'Comprehensive Subject Review',
          description: 'Consolidated understanding across all semester units, providing a strong foundation for the final assessment.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions About Exam Prep Tutoring',
      description: 'Guidance for midterms and final exam cycles:',
      items: [
        {
          question: 'When should a student begin exam preparation tutoring?',
          answer: 'Starting several weeks before the scheduled exam period gives students enough time to review earlier course units systematically and practice challenging question types without last-minute stress.',
        },
        {
          question: 'Can the tutor review school-specific practice material?',
          answer: 'Yes. Students are encouraged to bring teacher review packages, past quizzes, and course outlines so the sessions align with their specific school and class requirements.',
        },
        {
          question: 'Are sessions available for middle school and high school students?',
          answer: 'Yes. Tutoring is available for students in Grades 7–12 preparing for semester exams, midterm evaluations, and final assessments.',
        },
        {
          question: 'Do you help with standardized tests like SAT, ACT, or IELTS on this page?',
          answer: 'No. This service is specifically designed for school-based midterm and final examinations in regular academic courses. Subject-specific exam review is also integrated directly into our mathematics, science, and English tutoring.',
        },
      ],
    },
    relatedPages: {
      heading: 'Subject Tutoring Support',
      items: [
        {
          title: 'Mathematics Tutoring',
          description: 'Targeted mathematics instruction from elementary foundations to senior secondary math.',
          href: '/en/subjects/math',
          label: 'Math Tutoring',
        },
        {
          title: 'Chemistry Tutoring',
          description: 'One-to-one chemistry support from middle school science to senior chemistry.',
          href: '/en/subjects/chemistry',
          label: 'Chemistry Tutoring',
        },
        {
          title: 'Physics Tutoring',
          description: 'Comprehensive physics tutoring covering mechanics, electricity, energy, and waves.',
          href: '/en/subjects/physics',
          label: 'Physics Tutoring',
        },
        {
          title: 'English Tutoring',
          description: 'Reading comprehension, writing structure, analysis, and communication skills.',
          href: '/en/subjects/english',
          label: 'English Tutoring',
        },
      ],
    },
    cta: {
      eyebrow: 'Prepare with Confidence',
      title: 'Schedule Exam Preparation Support for Your Student',
      description: 'Book a consultation to discuss your student’s upcoming exams, priority subjects, and tailored preparation timeline.',
      primaryAction: {
        label: 'Book an Exam Consultation',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'How Tutoring Works',
        href: '/en/how-it-works',
      },
    },
  },
};

export function getSeoGapPageContent(key: string): SeoGapPageContent {
  const content = seoGapPages[key];
  if (!content) {
    throw new Error(`SEO gap page content not found for key: ${key}`);
  }
  return content;
}
