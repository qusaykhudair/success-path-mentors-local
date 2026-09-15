import {
  Calculator,
  Compass,
  Layers,
  Sparkles,
  TrendingUp,
  BrainCircuit,
  FileCheck2,
  BookOpenCheck,
  CheckCircle2,
  Atom,
  Flame,
  Zap,
  HelpCircle,
  Award,
  BookMarked,
  Languages,
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
  // 1. French Tutoring for English-Speaking Families
  'french-tutoring': {
    slug: 'french',
    pathname: '/subjects/french',
    seo: {
      title: 'Online French Tutoring | French Immersion & Core French | Success Path Mentors',
      description: 'Personalized 1-on-1 online French tutoring for Grades 1–12. Expert support for French Immersion, Core French, reading comprehension, grammar, and oral confidence.',
      pathname: '/subjects/french',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Subjects', href: '/en/subjects' },
      { label: 'French Tutoring' },
    ],
    breadcrumbLabel: 'French tutoring breadcrumb',
    hero: {
      eyebrow: 'Bilingual Instruction • Grades 1–12',
      title: 'Online French Tutoring for French Immersion & Core French Learners',
      description: 'Strengthen oral fluency, reading comprehension, verb conjugation, and writing skills with patient, bilingual mentors who understand the demands of Canadian French school programs.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Explore Tutoring Approach',
        href: '/en/how-it-works',
      },
      highlights: [
        { value: 'Immersion & Core', label: 'Adapted for English-speaking families navigating French programs.' },
        { value: '1-on-1 Mentorship', label: 'Targeted support for school assignments, dictées, and oral presentations.' },
        { value: 'Grades 1–12', label: 'From early phonics and vocabulary to senior secondary French literature.' },
      ],
    },
    overview: {
      id: 'french-overview',
      eyebrow: 'Program Focus',
      title: 'Demystifying the French Language for Non-French-Speaking Households',
      description: 'Many families enroll their children in French Immersion or Core French to open future career and academic doors, only to discover how difficult it is to assist with homework when parents do not speak the language.',
      paragraphs: [
        'Success Path Mentors provides a structured bridge for students learning French as a second or third language. Our mentors work in English and French to explain grammar concepts, verb patterns, and complex vocabulary so the student actually comprehends the structural mechanics rather than just memorizing phrases for upcoming evaluations.',
        'Whether your student is in early French Immersion encountering phonics and basic reading, in middle school tackling irregular past tenses (passé composé and imparfait), or in high school preparing for secondary French exam essays, our sessions are customized to their school board curriculum expectations.',
        'We emphasize oral comfort alongside written literacy. Students practise reading out loud, participating in supportive conversation, and analyzing authentic texts without fear of making mistakes.',
      ],
    },
    struggles: {
      id: 'french-struggles',
      eyebrow: 'Common Challenges',
      title: 'Where French Students Often Lose Confidence',
      description: 'Learning an academic subject in an immersion environment presents distinct cognitive hurdles:',
      items: [
        {
          title: 'Verb Tense Confusion',
          description: 'Distinguishing between passé composé and imparfait, remembering irregular stems in the futur simple, and applying conditional and subjunctive moods correctly.',
          icon: BookOpenCheck,
        },
        {
          title: 'Oral Hesitation & Pronunciation',
          description: 'Inability to participate freely in classroom discussions due to anxiety about silent letters, liaison rules, nasal vowel sounds, and speaking speed.',
          icon: Languages,
        },
        {
          title: 'Homework Barriers at Home',
          description: 'Parents inability to decipher grammar instructions, review daily dictées, or proofread written compositions, leaving students feeling isolated.',
          icon: HelpCircle,
        },
        {
          title: 'Vocabulary & Academic Reading Gaps',
          description: 'Struggling to comprehend complex narrative or informational texts in subjects like science and social studies taught entirely in French.',
          icon: BrainCircuit,
        },
      ],
    },
    howWeHelp: {
      id: 'french-how-we-help',
      eyebrow: 'Instructional Method',
      title: 'How 1-on-1 French Tutoring Transforms Performance',
      description: 'Our four-step framework develops durable linguistic competence and independence:',
      steps: [
        {
          title: 'Diagnostic Language & Schoolwork Audit',
          description: 'We evaluate reading automaticity, oral comprehension, grammar mechanics, and current classroom assignments to pinpoint exact skill gaps.',
        },
        {
          title: 'Bilingual Conceptual Clarification',
          description: 'Grammar rules are explained clearly in the language the student understands best, connecting English and French structural cognates.',
        },
        {
          title: 'Guided Oral Practice & Dictée Preparation',
          description: 'Regular conversational practice and spelling breakdown build instinctive pronunciation and written accuracy.',
        },
        {
          title: 'School Assignment & Test Review',
          description: 'We support upcoming projects, novel studies, reading responses, and grammar assessments with constructive rubric-based feedback.',
        },
      ],
    },
    outcomes: {
      id: 'french-outcomes',
      eyebrow: 'Learning Outcomes',
      title: 'Targeted Competencies Developed in Every Session',
      description: 'Students achieve tangible growth across provincial language curriculum strands:',
      items: [
        {
          title: 'Oral Communication Fluency',
          description: 'Confident speaking, active listening, and clear pronunciation for classroom presentations and teacher dialogues.',
          icon: Sparkles,
        },
        {
          title: 'Accurate Grammar & Conjugation',
          description: 'Mastery of noun-adjective agreements, pronominal verbs, complex tenses, and sentence structure.',
          icon: FileCheck2,
        },
        {
          title: 'Independent Reading Comprehension',
          description: 'Ability to read grade-level texts, summarize main ideas, and infer meaning from contextual clues.',
          icon: BookMarked,
        },
      ],
    },
    faq: {
      eyebrow: 'Questions & Answers',
      title: 'Frequently Asked Questions About French Tutoring',
      description: 'Common questions from parents navigating French Immersion and Core French programs:',
      items: [
        {
          question: 'Do your tutors conduct lessons entirely in French or in English?',
          answer: 'We adjust the language balance based on the student’s needs. For beginners or students experiencing high anxiety, we explain complex grammar rules in English so concepts click immediately, then transition into French for reading, speaking, and practice exercises.',
        },
        {
          question: 'Can the tutor help with my child’s weekly school homework and dictées?',
          answer: 'Yes. Homework support, reading practice, and dictée preparation are standard components of our one-to-one French sessions. You can upload assignments prior to lessons for focused review.',
        },
        {
          question: 'What is the difference between Core French and French Immersion tutoring?',
          answer: 'Core French focuses on foundational grammar, practical vocabulary, and conversation for students taking French as one single subject. French Immersion tutoring handles advanced academic literacy, novel studies, and vocabulary used in French-taught science and social studies.',
        },
        {
          question: 'How quickly will we see improvement in reading and speaking confidence?',
          answer: 'Most parents report noticeable reductions in homework anxiety within 3 to 4 weeks of consistent one-to-one lessons, as students gain a safe environment to practise speaking without peer pressure.',
        },
      ],
    },
    relatedPages: {
      heading: 'Explore Related Subjects & Programs',
      items: [
        {
          title: 'All Tutoring Subjects',
          description: 'Browse our full curriculum directory including Math, Sciences, and English.',
          href: '/en/subjects',
          label: 'View Subjects',
        },
        {
          title: 'Online English Tutoring',
          description: 'Comprehensive K–12 language arts, essay writing, and reading comprehension.',
          href: '/en/subjects/english',
          label: 'Explore English',
        },
        {
          title: 'Programme Français (Français Langue Première)',
          description: 'Espace d’apprentissage entièrement en français pour les élèves des écoles de langue française.',
          href: '/fr/programme-francais',
          label: 'Programme Français',
        },
      ],
    },
    cta: {
      eyebrow: 'Start With Confidence',
      title: 'Give Your Student the French Support They Need to Flourish',
      description: 'Connect with a bilingual tutor suited to your student’s grade level, curriculum strand, and current learning challenges.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'How Tutoring Works',
        href: '/en/how-it-works',
      },
    },
  },

  // 2. Grade 12 Advanced Functions (MHF4U)
  'math-grade-12-advanced-functions-mhf4u': {
    slug: 'grade-12-advanced-functions-mhf4u',
    pathname: '/subjects/math/grade-12-advanced-functions-mhf4u',
    seo: {
      title: 'MHF4U Tutor | Grade 12 Advanced Functions Online Tutoring | Success Path Mentors',
      description: 'Master Ontario Grade 12 Advanced Functions (MHF4U). One-to-one online tutoring covering polynomial, rational, trigonometric, and logarithmic functions.',
      pathname: '/subjects/math/grade-12-advanced-functions-mhf4u',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Subjects', href: '/en/subjects' },
      { label: 'Mathematics', href: '/en/subjects/math' },
      { label: 'Grade 12 Advanced Functions (MHF4U)' },
    ],
    breadcrumbLabel: 'MHF4U Advanced Functions breadcrumb',
    hero: {
      eyebrow: 'Ontario Secondary School Curriculum • Grade 12',
      title: 'Grade 12 Advanced Functions (MHF4U) Online Tutoring',
      description: 'Targeted one-to-one mentoring for Ontario Grade 12 students aiming for high university entrance averages in Engineering, Business, Computer Science, and Life Sciences.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'View Mathematics Roadmap',
        href: '/en/subjects/math',
      },
      highlights: [
        { value: 'MHF4U Course Code', label: 'Aligned directly with Ontario Ministry of Education curriculum expectations.' },
        { value: 'University Prerequisite', label: 'Critical foundation for MCV4U Calculus and competitive post-secondary entry.' },
        { value: 'Unit-by-Unit Mastery', label: 'In-depth review of polynomial, rational, trig, and exponential functions.' },
      ],
    },
    overview: {
      id: 'mhf4u-overview',
      eyebrow: 'Curriculum & University Context',
      title: 'The High-Stakes Gateway to Senior Secondary Mathematics',
      description: 'Advanced Functions (MHF4U) extends students experience with functions, exploring the properties of polynomial, rational, logarithmic, and trigonometric functions.',
      paragraphs: [
        'In the Ontario secondary curriculum, MHF4U is a mandatory prerequisite for Calculus and Vectors (MCV4U) and a required subject for entry into competitive university faculties including engineering, commerce, software development, physical sciences, and healthcare.',
        'Unlike junior secondary math, MHF4U demands sophisticated algebraic manipulation and rigorous graphical interpretation. Students must not only solve equations but also analyze instantaneous rates of change, understand asymptotic behavior, and combine functions algebraically and graphically.',
        'At Success Path Mentors, our MHF4U tutoring breaks down complex mathematical theory into step-by-step analytical routines. We provide students with extensive practice on exam-style Thinking and Application problems that define final grade cutoffs.',
      ],
    },
    struggles: {
      id: 'mhf4u-struggles',
      eyebrow: 'Common Obstacles',
      title: 'Where Grade 12 Advanced Functions Students Struggle Most',
      description: 'Our mentors specifically target the four most difficult units in the MHF4U syllabus:',
      items: [
        {
          title: 'Polynomial & Rational Functions',
          description: 'Factoring higher-degree polynomials with the Factor and Remainder Theorems, polynomial division, and finding vertical, horizontal, and oblique asymptotes.',
          icon: Calculator,
        },
        {
          title: 'Trigonometric Identities & Equations',
          description: 'Proving compound-angle and double-angle identities, solving trig equations on restricted intervals in radian measure, and modeling periodic behavior.',
          icon: Compass,
        },
        {
          title: 'Exponential & Logarithmic Functions',
          description: 'Applying laws of logarithms, solving exponential equations with differing bases, and modeling real-world pH, decibel, and earthquake scales.',
          icon: TrendingUp,
        },
        {
          title: 'Rates of Change & Function Operations',
          description: 'Calculating average and estimating instantaneous rates of change using difference quotients—the core conceptual bridge to calculus.',
          icon: Layers,
        },
      ],
    },
    howWeHelp: {
      id: 'mhf4u-how-we-help',
      eyebrow: 'Instructional Approach',
      title: 'How Our One-to-One Tutoring Elevates MHF4U Grades',
      description: 'We prepare students systematically for unit tests and final examinations:',
      steps: [
        {
          title: 'Prerequisite Gap Remediation',
          description: 'We review factoring, exponent rules, and foundational function transformations from Grade 11 Functions (MCR3U).',
        },
        {
          title: 'Step-by-Step Problem Deconstruction',
          description: 'Students observe how to systematically structure solutions to complex Thinking and Application questions without skipping steps.',
        },
        {
          title: 'Radian Measure & Graphing Fluency',
          description: 'Dedicated drills on radian transformations, reciprocal functions, and sketch verification without reliance on graphing calculators.',
        },
        {
          title: 'Timed Exam Simulation & Rubric Analysis',
          description: 'Practice with authentic Ontario secondary school tests, identifying common calculation pitfalls and mark loss traps.',
        },
      ],
    },
    outcomes: {
      id: 'mhf4u-outcomes',
      eyebrow: 'Learning Outcomes',
      title: 'Measurable Academic Skills Developed in MHF4U',
      description: 'Our students achieve mastery across all four Achievement Chart categories:',
      items: [
        {
          title: 'Knowledge & Understanding',
          description: 'Flawless recall of function definitions, asymptotic behavior, transformations, and algebraic laws.',
          icon: CheckCircle2,
        },
        {
          title: 'Thinking & Inquiry',
          description: 'Ability to devise multi-step problem-solving plans for non-routine questions and proofs.',
          icon: BrainCircuit,
        },
        {
          title: 'Application & Modelling',
          description: 'Skill in converting complex word problems into accurate mathematical models and interpreting real-world results.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      title: 'Questions About MHF4U Advanced Functions Tutoring',
      description: 'Everything parents and students need to know before booking:',
      items: [
        {
          question: 'Can a student take MHF4U and MCV4U at the same time?',
          answer: 'In most Ontario school boards, MHF4U is a strict prerequisite that must be completed before MCV4U. However, some private or semestered schools allow corequisite enrollment. If taking both concurrently, consistent tutoring is strongly advised due to the combined workload.',
        },
        {
          question: 'How does MHF4U tutoring help with university admissions?',
          answer: 'Ontario universities evaluate applicants based on their top 6 Grade 12 U/M courses. For STEM and business degrees, MHF4U is a mandatory calculation in the admission average. Improving a grade from 75% to 90% can mean the difference between acceptance and rejection.',
        },
        {
          question: 'What if the student struggled in Grade 11 Functions (MCR3U)?',
          answer: 'We begin by diagnosing the specific Grade 11 gaps—such as polynomial factoring or trig ratios—and integrate targeted 15-minute reviews into the initial lessons while keeping up with current MHF4U course material.',
        },
        {
          question: 'Can the tutor review upcoming unit assignments and quizzes?',
          answer: 'Yes. Students can share their teacher’s unit outlines, rubrics, and practice problem sets with the tutor to ensure complete alignment with classroom expectations.',
        },
      ],
    },
    relatedPages: {
      heading: 'Related Mathematics Courses & Pathways',
      items: [
        {
          title: 'Grade 12 Calculus & Vectors (MCV4U)',
          description: 'The natural next step following Advanced Functions for STEM and commerce students.',
          href: '/en/subjects/math/grade-12-calculus-vectors-mcv4u',
          label: 'Explore MCV4U',
        },
        {
          title: 'Grade 11 Functions (MCR3U)',
          description: 'Review foundational concepts in quadratic relations, rational expressions, and trigonometry.',
          href: '/en/subjects/math/grade-11-functions-mcr3u',
          label: 'Explore MCR3U',
        },
        {
          title: 'Online Math Tutoring Hub',
          description: 'Browse our complete Grade 2–12 mathematics curriculum framework.',
          href: '/en/subjects/math',
          label: 'Math Overview',
        },
      ],
    },
    cta: {
      eyebrow: 'Secure Your University Average',
      title: 'Gain Mastery in Grade 12 Advanced Functions Today',
      description: 'Book a free trial session to discuss your student’s current MHF4U syllabus, target average, and upcoming unit test schedule.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 3. Grade 12 Calculus and Vectors (MCV4U)
  'math-grade-12-calculus-vectors-mcv4u': {
    slug: 'grade-12-calculus-vectors-mcv4u',
    pathname: '/subjects/math/grade-12-calculus-vectors-mcv4u',
    seo: {
      title: 'MCV4U Tutor | Grade 12 Calculus & Vectors Online Tutoring | Success Path Mentors',
      description: 'Excel in Ontario Grade 12 Calculus and Vectors (MCV4U). One-on-one tutoring for derivatives, curve sketching, velocity, vector equations, and university prep.',
      pathname: '/subjects/math/grade-12-calculus-vectors-mcv4u',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Subjects', href: '/en/subjects' },
      { label: 'Mathematics', href: '/en/subjects/math' },
      { label: 'Grade 12 Calculus & Vectors (MCV4U)' },
    ],
    breadcrumbLabel: 'MCV4U Calculus and Vectors breadcrumb',
    hero: {
      eyebrow: 'Ontario Secondary School Curriculum • Grade 12',
      title: 'Grade 12 Calculus & Vectors (MCV4U) Online Tutoring',
      description: 'Rigorous one-to-one mentoring to conquer differential calculus, 3D spatial vectors, and optimization applications for future engineers, scientists, and analysts.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Explore Mathematics Roadmap',
        href: '/en/subjects/math',
      },
      highlights: [
        { value: 'MCV4U Course Code', label: 'Aligned directly with Ontario Ministry of Education senior secondary requirements.' },
        { value: 'Dual Discipline', label: 'Covers differential calculus and geometric & algebraic vectors in 2D/3D space.' },
        { value: 'First-Year University Ready', label: 'Builds foundational analytical habits required for university STEM calculus.' },
      ],
    },
    overview: {
      id: 'mcv4u-overview',
      eyebrow: 'Curriculum & University Preparation',
      title: 'The Pinnacle Course of High School Mathematics in Ontario',
      description: 'Calculus and Vectors (MCV4U) builds upon Advanced Functions, introducing students to rate-of-change models and vector representations of physical phenomena.',
      paragraphs: [
        'MCV4U is the primary admissions metric for university faculties of engineering, computer science, mathematics, architecture, and economics. It is uniquely challenging because it combines two completely distinct mathematical disciplines into a single semester.',
        'The calculus component introduces limits, derivative rules (product, quotient, chain rule), second derivatives, and curve sketching. The vectors component shifts spatial thinking into two- and three-dimensional Cartesian planes, planes in space, and intersections of lines and planes.',
        'Success Path Mentors provides the focused, patient instruction needed to synthesize these abstract concepts. Our tutors ensure students do not just execute algorithms blindly, but conceptually visualize geometric tangents, normal vectors, and rate-of-change graphs.',
      ],
    },
    struggles: {
      id: 'mcv4u-struggles',
      eyebrow: 'Key Challenge Areas',
      title: 'Where MCV4U Students Encounter Major Roadblocks',
      description: 'Common stumbling blocks in Ontario Calculus and Vectors classrooms:',
      items: [
        {
          title: 'Optimization & Related Rates',
          description: 'Translating complex real-world geometry into single-variable calculus functions, setting constraints, and differentiating with respect to time.',
          icon: TrendingUp,
        },
        {
          title: 'Curve Sketching with Derivatives',
          description: 'Synthesizing first and second derivative tests, concavity, points of inflection, and asymptotic limits into an accurate, complete curve sketch.',
          icon: Compass,
        },
        {
          title: 'Dot & Cross Products in 3D Space',
          description: 'Understanding the geometric and algebraic meanings of dot products (work, angles) and cross products (torque, normal vectors, area of parallelograms).',
          icon: Layers,
        },
        {
          title: 'Intersections of Lines and Planes',
          description: 'Solving systems of linear equations in 3-space, identifying coincident, parallel, and intersecting planes, and classifying infinite solutions.',
          icon: Calculator,
        },
      ],
    },
    howWeHelp: {
      id: 'mcv4u-how-we-help',
      eyebrow: 'Our Teaching Methodology',
      title: 'Proven Strategies for Achieving 90%+ in MCV4U',
      description: 'How our tutors develop analytical precision and exam mastery:',
      steps: [
        {
          title: 'Intuitive Concept Introductions',
          description: 'We ground derivative concepts in physical rates of change and vector directions before introducing complex symbolic notation.',
        },
        {
          title: 'Structured Proof & Solution Modeling',
          description: 'Tutors model clear, line-by-line mathematical communication, ensuring zero marks are lost on communication rubrics.',
        },
        {
          title: 'Comprehensive Optimization Frameworks',
          description: 'Students learn standard templates for geometric, business revenue, and distance minimization problems.',
        },
        {
          title: 'Past Exam & University Style Drills',
          description: 'Exposure to challenging questions that mirror university entrance exam styles and challenging teacher test banks.',
        },
      ],
    },
    outcomes: {
      id: 'mcv4u-outcomes',
      eyebrow: 'Academic Goals',
      title: 'Skills That Prepare Students for University Success',
      description: 'Long-term competencies built during MCV4U tutoring:',
      items: [
        {
          title: 'Differential Calculus Fluency',
          description: 'Instant recall and application of power, product, quotient, and chain rules across polynomial, rational, exponential, and trig functions.',
          icon: CheckCircle2,
        },
        {
          title: '3D Spatial Geometric Reasoning',
          description: 'Ability to visualize vectors, write vector/parametric/symmetric equations of lines, and find scalar plane equations.',
          icon: BrainCircuit,
        },
        {
          title: 'Resilient Exam Problem Solving',
          description: 'Confidence when confronted with unfamiliar, multi-step word problems under strict time limits.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions About MCV4U Tutoring',
      description: 'Answers for students preparing for Ontario Grade 12 Calculus & Vectors:',
      items: [
        {
          question: 'How much harder is MCV4U compared to MHF4U?',
          answer: 'MCV4U is generally considered more conceptually demanding because it introduces two entirely new branches of mathematics (limits/derivatives and 3D vectors) rather than simply extending Grade 11 algebra. Consistent weekly tutoring keeps students ahead of the steep pacing.',
        },
        {
          question: 'Can the tutor assist with the vectors unit specifically?',
          answer: 'Yes. Many students do well in the calculus half of the semester but struggle when the course abruptly shifts to vector geometry and planes in 3D. We customize the lesson schedule to spend extra time wherever the student needs it most.',
        },
        {
          question: 'Do universities care about the mark in MCV4U?',
          answer: 'Extremely. For competitive programs like Engineering, Computer Science, and Finance at universities like Waterloo, Toronto, McMaster, and Queen’s, MCV4U is a mandatory admission requirement and often a tie-breaker course.',
        },
        {
          question: 'Does this tutoring prepare students for first-year university calculus?',
          answer: 'Yes. By emphasizing conceptual understanding of limits and derivative definitions rather than mechanical memorization, our students transition smoothly into university Math 101/Calculus I courses.',
        },
      ],
    },
    relatedPages: {
      heading: 'Related Senior Mathematics Pathways',
      items: [
        {
          title: 'Grade 12 Advanced Functions (MHF4U)',
          description: 'Review prerequisite function transformations, polynomials, and trigonometry.',
          href: '/en/subjects/math/grade-12-advanced-functions-mhf4u',
          label: 'Explore MHF4U',
        },
        {
          title: 'Grade 12 Data Management (MDM4U)',
          description: 'Explore statistical distributions and combinatorics for business and social sciences.',
          href: '/en/subjects/math/grade-12-data-management-mdm4u',
          label: 'Explore MDM4U',
        },
        {
          title: 'Senior High Physics (SPH3U & SPH4U)',
          description: 'Apply calculus and vectors directly to classical mechanics and dynamics problems.',
          href: '/en/subjects/physics/senior-physics-sph3u-sph4u',
          label: 'Explore Physics',
        },
      ],
    },
    cta: {
      eyebrow: 'Prepare for University STEM',
      title: 'Conquer Calculus and Vectors with One-to-One Guidance',
      description: 'Book your free trial session to discuss your MCV4U syllabus and build an effective study plan.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 4. Grade 11 Functions (MCR3U)
  'math-grade-11-functions-mcr3u': {
    slug: 'grade-11-functions-mcr3u',
    pathname: '/subjects/math/grade-11-functions-mcr3u',
    seo: {
      title: 'MCR3U Tutor | Grade 11 Functions Online Tutoring | Success Path Mentors',
      description: 'One-to-one Ontario Grade 11 Functions (MCR3U) tutoring. Master quadratic relations, rational expressions, exponential functions, trigonometry, and sequences.',
      pathname: '/subjects/math/grade-11-functions-mcr3u',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Subjects', href: '/en/subjects' },
      { label: 'Mathematics', href: '/en/subjects/math' },
      { label: 'Grade 11 Functions (MCR3U)' },
    ],
    breadcrumbLabel: 'MCR3U Grade 11 Functions breadcrumb',
    hero: {
      eyebrow: 'Ontario Secondary School Curriculum • Grade 11',
      title: 'Grade 11 Functions (MCR3U) Online Tutoring',
      description: 'Support your student through the most demanding academic transition in Ontario high school math, establishing the essential foundation for Grade 12 university courses.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Explore Math Roadmap',
        href: '/en/subjects/math',
      },
      highlights: [
        { value: 'MCR3U Course Code', label: 'Strictly aligned with the Ontario Grade 11 University Preparation curriculum.' },
        { value: 'Critical Turning Point', label: 'The steepest step in secondary math difficulty; requires formal algebraic reasoning.' },
        { value: 'Confidence Restored', label: 'Transforms student stress into systematic, step-by-step problem-solving ability.' },
      ],
    },
    overview: {
      id: 'mcr3u-overview',
      eyebrow: 'Curriculum Reality',
      title: 'Navigating the Biggest Academic Leap in Ontario Secondary School',
      description: 'Functions (MCR3U) introduces students to the formal concept of a function, transforming Grade 10 arithmetic and basic algebra into rigorous abstract analysis.',
      paragraphs: [
        'Ask high school educators across Ontario which course causes the most abrupt drop in student marks, and the unanimous answer is MCR3U. Students who coasted with 80s in Grade 10 frequently find themselves averaging 60s within the first month of Grade 11.',
        'The course covers seven extensive units: characteristics of functions, simplifying rational expressions with restrictions, quadratic functions (completing the square, discriminant), exponential functions, discrete mathematics (arithmetic and geometric sequences and series), trigonometric ratios in standard position, and sinusoidal transformations.',
        'Success Path Mentors acts as an indispensable safety net. Our one-to-one tutors identify missing foundational concepts early, eliminate bad algebraic habits, and teach students how to read, interpret, and write formal mathematical proofs.',
      ],
    },
    struggles: {
      id: 'mcr3u-struggles',
      eyebrow: 'Common Pitfalls',
      title: 'The Units Where MCR3U Students Lose the Most Marks',
      description: 'Specific curriculum areas where students consistently stumble:',
      items: [
        {
          title: 'Simplifying Rational Expressions',
          description: 'Factoring complex numerators and denominators, stating all non-permissible restrictions, and executing algebraic addition/multiplication accurately.',
          icon: Calculator,
        },
        {
          title: 'Function Transformations & Inverses',
          description: 'Mastering the base notation f(x) = a f(k(x - d)) + c, understanding horizontal stretches by 1/k, and determining inverse functions algebraically.',
          icon: Compass,
        },
        {
          title: 'Trigonometry & The CAST Rule',
          description: 'Working with angles of any magnitude in standard position, calculating exact values using special triangles, and solving non-right-angled triangles.',
          icon: TrendingUp,
        },
        {
          title: 'Financial Applications of Sequences',
          description: 'Determining whether a problem requires an arithmetic or geometric sequence/series, and applying compound interest and annuity formulas.',
          icon: Layers,
        },
      ],
    },
    howWeHelp: {
      id: 'mcr3u-how-we-help',
      eyebrow: 'Teaching Strategy',
      title: 'How Our Tutors Turn MCR3U Frustration into Success',
      description: 'A disciplined, supportive approach tailored to each student’s learning pace:',
      steps: [
        {
          title: 'Grade 10 MPM2D Foundation Review',
          description: 'Rapid reinforcement of factoring trinomials, quadratic formula usage, and coordinate geometry.',
        },
        {
          title: 'Visual & Numerical Function Mapping',
          description: 'Connecting tables of values, mapping notation, algebraic formulas, and coordinate graphs.',
        },
        {
          title: 'Deliberate Error Checking Drills',
          description: 'Training students to avoid common sign errors, restriction omissions, and notation penalties.',
        },
        {
          title: 'Weekly Test Preparation',
          description: 'Pre-testing with authentic unit reviews to build stamina and eliminate test anxiety.',
        },
      ],
    },
    outcomes: {
      id: 'mcr3u-outcomes',
      eyebrow: 'Core Competencies',
      title: 'Lasting Skills That Ensure Grade 12 Readiness',
      description: 'Key academic milestones achieved through MCR3U tutoring:',
      items: [
        {
          title: 'Rigorous Algebraic Fluency',
          description: 'Effortless manipulation of polynomials, rational fractions, radicals, and exponent laws.',
          icon: CheckCircle2,
        },
        {
          title: 'Complete Domain & Range Precision',
          description: 'Accurate determination and mathematical communication of domain and range across all parent functions.',
          icon: BrainCircuit,
        },
        {
          title: 'Preparation for Senior University Math',
          description: 'A solid foundation that makes MHF4U Advanced Functions and MCV4U Calculus feel manageable and rewarding.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions About Grade 11 Functions (MCR3U) Tutoring',
      description: 'Helpful guidance for parents and high school students:',
      items: [
        {
          question: 'Why is MCR3U so much harder than Grade 10 math?',
          answer: 'Grade 10 focuses largely on procedural calculations with linear and quadratic equations. MCR3U introduces abstract function notation, multi-step rational fractions, and requires students to justify mathematical reasoning rather than just plugging in numbers.',
        },
        {
          question: 'My child has a test next week and is failing. Can you help quickly?',
          answer: 'Yes. We offer focused, immediate diagnostic sessions to identify the urgent unit hurdles, clarify critical concepts, and provide targeted practice sets to stabilize grades before test day.',
        },
        {
          question: 'Does the student need a graphing calculator for MCR3U?',
          answer: 'Most Ontario teachers require students to understand transformations and sketches by hand without a graphing calculator. Our tutors emphasize manual algebraic graphing so students are never stranded during no-calculator tests.',
        },
        {
          question: 'What is the difference between MCR3U and MCF3M?',
          answer: 'MCR3U is the University-level course required as a prerequisite for Grade 12 Advanced Functions and Calculus. MCF3M is a University/College mixed course that moves at a slower pace and does not grant direct entry into MHF4U or MCV4U.',
        },
      ],
    },
    relatedPages: {
      heading: 'Continue Exploring Mathematics Pathways',
      items: [
        {
          title: 'Grade 10 Academic Math (MPM2D)',
          description: 'Review foundational quadratic relations, factoring, and analytic geometry.',
          href: '/en/subjects/math/grade-10-math-mpm2d',
          label: 'Explore MPM2D',
        },
        {
          title: 'Grade 12 Advanced Functions (MHF4U)',
          description: 'See the next senior mathematics course that builds directly upon MCR3U.',
          href: '/en/subjects/math/grade-12-advanced-functions-mhf4u',
          label: 'Explore MHF4U',
        },
        {
          title: 'All Mathematics Pathways',
          description: 'Explore our complete Grade 2–12 curriculum pathways directory.',
          href: '/en/subjects/math',
          label: 'Mathematics Directory',
        },
      ],
    },
    cta: {
      eyebrow: 'Build Solid Math Foundations',
      title: 'Overcome the Grade 11 Functions Hurdle Today',
      description: 'Book a free trial session to discuss your student’s current MCR3U grade, unit schedule, and target university path.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 5. Grade 12 Data Management (MDM4U)
  'math-grade-12-data-management-mdm4u': {
    slug: 'grade-12-data-management-mdm4u',
    pathname: '/subjects/math/grade-12-data-management-mdm4u',
    seo: {
      title: 'MDM4U Tutor | Grade 12 Data Management Online Tutoring | Success Path Mentors',
      description: 'Master Ontario Grade 12 Mathematics of Data Management (MDM4U). One-to-one tutoring in counting principles, probability distributions, statistics, and culminating projects.',
      pathname: '/subjects/math/grade-12-data-management-mdm4u',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Subjects', href: '/en/subjects' },
      { label: 'Mathematics', href: '/en/subjects/math' },
      { label: 'Grade 12 Data Management (MDM4U)' },
    ],
    breadcrumbLabel: 'MDM4U Data Management breadcrumb',
    hero: {
      eyebrow: 'Ontario Secondary School Curriculum • Grade 12',
      title: 'Grade 12 Data Management (MDM4U) Online Tutoring',
      description: 'Master counting principles, probability theory, two-variable statistical analysis, and culminating data projects with experienced academic mentors.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Explore Math Roadmap',
        href: '/en/subjects/math',
      },
      highlights: [
        { value: 'MDM4U Course Code', label: 'Aligned with Ontario Ministry of Education Mathematics of Data Management expectations.' },
        { value: 'University Essential', label: 'Required course for Business Administration, Economics, Social Sciences, and Nursing.' },
        { value: 'Project & Exam Support', label: 'Guidance on culminating data research projects, spreadsheets, and probability calculations.' },
      ],
    },
    overview: {
      id: 'mdm4u-overview',
      eyebrow: 'Course Purpose',
      title: 'Applied Mathematics for the Modern Data-Driven World',
      description: 'Mathematics of Data Management (MDM4U) equips students with counting techniques, probability models, and statistical analysis tools essential for post-secondary study.',
      paragraphs: [
        'MDM4U is very different from calculus and algebra. Instead of continuous curves and equations, students explore combinatorics (permutations and combinations), Pascal’s Triangle, discrete probability distributions (binomial, hypergeometric, normal), and two-variable statistics.',
        'For students entering university programs in business, marketing, nursing, psychology, social sciences, and humanities, MDM4U is often the primary math requirement. However, its heavy reliance on word problems and logical interpretation makes it deceptively difficult.',
        'At Success Path Mentors, our MDM4U tutors guide students through the subtle logical distinctions that separate permutations from combinations, explain standard deviation and z-scores, and assist with culminating statistical investigation projects.',
      ],
    },
    struggles: {
      id: 'mdm4u-struggles',
      eyebrow: 'Common Stumbling Blocks',
      title: 'Where MDM4U Students Most Often Lose Marks',
      description: 'Frequent areas of confusion in the Ontario Data Management curriculum:',
      items: [
        {
          title: 'Permutations vs. Combinations',
          description: 'Deciding whether order matters in complex real-world scenarios, accounting for identical items, and handling indirect constraints ("at least", "at most").',
          icon: Calculator,
        },
        {
          title: 'Discrete Probability Distributions',
          description: 'Differentiating between uniform, binomial, and hypergeometric distributions, and calculating expected values accurately.',
          icon: Compass,
        },
        {
          title: 'The Normal Distribution & Z-Scores',
          description: 'Standardizing data using z-score tables, calculating confidence intervals, and understanding the Central Limit Theorem.',
          icon: TrendingUp,
        },
        {
          title: 'Culminating Data Projects & Bias',
          description: 'Formulating hypotheses, cleaning two-variable survey data, running regressions, and evaluating sampling and response bias.',
          icon: Layers,
        },
      ],
    },
    howWeHelp: {
      id: 'mdm4u-how-we-help',
      eyebrow: 'Our Tutoring Approach',
      title: 'Step-by-Step Clarity for Combinatorics and Statistics',
      description: 'How we ensure students excel in tests and major assignments:',
      steps: [
        {
          title: 'Word Problem Deconstruction',
          description: 'We teach structured annotation techniques to extract relevant counting conditions from dense problem descriptions.',
        },
        {
          title: 'Venn Diagram & Tree Diagram Mastery',
          description: 'Visual representations clarify mutually exclusive vs. non-mutually exclusive events and conditional probability.',
        },
        {
          title: 'Spreadsheet & Statistical Software Guidance',
          description: 'Support in utilizing spreadsheet formulas, scatter plots, and correlation coefficients for class projects.',
        },
        {
          title: 'Past Exam & Culminating Assignment Review',
          description: 'Thorough review of culminating project rubrics and practice with authentic school board examination questions.',
        },
      ],
    },
    outcomes: {
      id: 'mdm4u-outcomes',
      eyebrow: 'Measurable Outcomes',
      title: 'Core Analytical Skills Acquired in MDM4U',
      description: 'Key mathematical and critical-thinking abilities developed:',
      items: [
        {
          title: 'Combinatorial Problem-Solving',
          description: 'Confidence in formulating and executing complex counting problems involving factorials and combinations.',
          icon: CheckCircle2,
        },
        {
          title: 'Critical Statistical Literacy',
          description: 'Ability to detect misleading statistics, evaluate survey methodology, and calculate accurate probability models.',
          icon: BrainCircuit,
        },
        {
          title: 'University Research Preparedness',
          description: 'Solid groundwork for mandatory university statistics courses in Commerce, Health, and Social Sciences.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions About MDM4U Tutoring',
      description: 'Guidance for parents and Grade 12 students:',
      items: [
        {
          question: 'Is MDM4U easier than Calculus (MCV4U) and Advanced Functions (MHF4U)?',
          answer: 'It is different rather than strictly easier. It involves less continuous algebra, but significantly more reading comprehension, logic, and word-problem translation. Students who struggle with reading or abstract logic often find MDM4U quite challenging.',
        },
        {
          question: 'Can the tutor assist with the culminating statistical project?',
          answer: 'Yes. Our tutors assist with structuring hypotheses, organizing datasets, calculating linear and non-linear regressions, and ensuring all rubric requirements for analysis and bias evaluation are fulfilled.',
        },
        {
          question: 'Which university programs require MDM4U?',
          answer: 'Many business administration (BBA), management, nursing, psychology, communications, sociology, and economics degree programs recommend or require MDM4U as part of their Grade 12 admission average.',
        },
        {
          question: 'What is the prerequisite for MDM4U in Ontario?',
          answer: 'The official prerequisite is Grade 11 Functions (MCR3U) or Grade 11 Functions and Applications (MCF3M).',
        },
      ],
    },
    relatedPages: {
      heading: 'Related Senior Mathematics Options',
      items: [
        {
          title: 'Grade 12 Advanced Functions (MHF4U)',
          description: 'Explore the companion Grade 12 math course covering polynomials and logarithms.',
          href: '/en/subjects/math/grade-12-advanced-functions-mhf4u',
          label: 'Explore MHF4U',
        },
        {
          title: 'Grade 12 Calculus & Vectors (MCV4U)',
          description: 'Targeted support for STEM-bound students taking senior calculus.',
          href: '/en/subjects/math/grade-12-calculus-vectors-mcv4u',
          label: 'Explore MCV4U',
        },
        {
          title: 'Mathematics Pathways Hub',
          description: 'Browse all mathematical curriculum areas from primary foundations to senior high.',
          href: '/en/subjects/math',
          label: 'Math Overview',
        },
      ],
    },
    cta: {
      eyebrow: 'Excel in Statistics & Probability',
      title: 'Master Grade 12 Data Management with an Expert Mentor',
      description: 'Book your free trial session to discuss upcoming MDM4U unit assessments or culminating project requirements.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 6. Grade 9 Math (MTH1W)
  'math-grade-9-math-mth1w': {
    slug: 'grade-9-math-mth1w',
    pathname: '/subjects/math/grade-9-math-mth1w',
    seo: {
      title: 'Grade 9 Math Tutor | Ontario De-Streamed MTH1W Tutoring | Success Path Mentors',
      description: 'Personalized Grade 9 Math (MTH1W) tutoring in Ontario. Build high school math confidence across numbers, algebra, coding, data, and financial literacy.',
      pathname: '/subjects/math/grade-9-math-mth1w',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Subjects', href: '/en/subjects' },
      { label: 'Mathematics', href: '/en/subjects/math' },
      { label: 'Grade 9 Math (MTH1W)' },
    ],
    breadcrumbLabel: 'Grade 9 Math MTH1W breadcrumb',
    hero: {
      eyebrow: 'Ontario Secondary School Curriculum • Grade 9',
      title: 'Grade 9 Math (MTH1W) De-Streamed Online Tutoring',
      description: 'Empower your student to transition smoothly into high school mathematics with personalized one-to-one tutoring that builds strong algebraic thinking and confidence.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Explore Math Roadmap',
        href: '/en/subjects/math',
      },
      highlights: [
        { value: 'MTH1W De-streamed', label: 'Aligned with the updated Ontario single-stream curriculum for all Grade 9 students.' },
        { value: 'High School Transition', label: 'Bridges elementary gaps in fractions, integers, and introduces algebra and coding.' },
        { value: 'Individual Pace', label: 'Patient, supportive mentors who eliminate math anxiety early in high school.' },
      ],
    },
    overview: {
      id: 'mth1w-overview',
      eyebrow: 'Curriculum Transition',
      title: 'Supporting All Students in Ontario’s De-Streamed High School Math',
      description: 'The Ontario Grade 9 Mathematics course (MTH1W) replaced separate Academic and Applied streams with a single unified, rigorous curriculum.',
      paragraphs: [
        'Entering Grade 9 represents a major adjustment for Ontario students. With the elimination of streamed courses, every student now learns advanced algebraic principles, coding concepts in mathematics, mathematical modelling, data analysis, and practical financial literacy.',
        'Because elementary preparation varies widely across elementary schools, many students enter Grade 9 with unaddressed gaps in foundational number sense—especially fractions, negative integers, and order of operations (BEDMAS). When algebra and linear relations are introduced, these small gaps quickly turn into falling grades and high anxiety.',
        'Success Path Mentors provides the individualized attention that large de-streamed classrooms cannot offer. Our tutors diagnose missing middle-school concepts immediately, explain algebraic equations in plain language, and reinforce daily schoolwork so students stay confident and on track.',
      ],
    },
    struggles: {
      id: 'mth1w-struggles',
      eyebrow: 'Common Hurdles',
      title: 'Where Grade 9 Math Students Frequently Stumble',
      description: 'Typical stumbling points in the MTH1W curriculum:',
      items: [
        {
          title: 'Integers & Fraction Operations',
          description: 'Carrying forward uncertainty with negative numbers, common denominators, and mixed-number arithmetic into multi-step algebraic expressions.',
          icon: Calculator,
        },
        {
          title: 'Algebraic Expressions & Equations',
          description: 'Transitioning from concrete arithmetic to abstract variable manipulation, expanding brackets with distributive property, and isolating variables.',
          icon: Compass,
        },
        {
          title: 'Linear Relations & Slope',
          description: 'Understanding rate of change (m = Δy/Δx), connecting tables of values to graphs and y = mx + b equations, and interpreting direct vs. partial variation.',
          icon: TrendingUp,
        },
        {
          title: 'Coding & Computational Thinking',
          description: 'Understanding how nested events, conditional statements, and loops apply to mathematical problems and algorithms.',
          icon: Layers,
        },
      ],
    },
    howWeHelp: {
      id: 'mth1w-how-we-help',
      eyebrow: 'Instructional Method',
      title: 'How Our Tutors Build Confident High School Mathematicians',
      description: 'A proactive approach that builds both competence and self-assurance:',
      steps: [
        {
          title: 'Diagnostic Elementary Gap Identification',
          description: 'We pinpoint exact gaps in Grades 7 and 8 number sense and algebra to ensure the student has the tools needed for Grade 9.',
        },
        {
          title: 'Visual Representation of Variables',
          description: 'Using algebra tile models and clear step-by-step visual balancing to make abstract equation solving clear.',
        },
        {
          title: 'Linear Graphing Fluency Drills',
          description: 'Hands-on practice identifying initial values, slopes, and intercepts from real-world contexts and story problems.',
        },
        {
          title: 'Regular Homework & Quiz Support',
          description: 'Ongoing review of school assignments and pre-quiz check-ins to reinforce weekly classroom learning.',
        },
      ],
    },
    outcomes: {
      id: 'mth1w-outcomes',
      eyebrow: 'Expected Results',
      title: 'Key Competencies Achieved in Grade 9 Tutoring',
      description: 'Skills that set students up for success throughout secondary school:',
      items: [
        {
          title: 'Confidence in Equation Solving',
          description: 'Ability to solve multi-step linear equations and check answers systematically.',
          icon: CheckCircle2,
        },
        {
          title: 'Mastery of Linear Relations',
          description: 'Fluency in graphing, finding slopes, writing linear equations, and interpreting real-world graphs.',
          icon: BrainCircuit,
        },
        {
          title: 'Readiness for Grade 10 Academic Math',
          description: 'A solid, well-rounded foundation that unlocks Grade 10 MPM2D and senior university math pathways.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions About Grade 9 Math (MTH1W) Tutoring',
      description: 'Clear answers for parents of incoming and current high school students:',
      items: [
        {
          question: 'What is de-streamed math in Ontario?',
          answer: 'Prior to 2021, Ontario students chose between Academic (MPM1D) and Applied (MFM1P) math. The Ministry unified this into MTH1W, which teaches a single rigorous curriculum for all students. Tutors ensure students receive the individualized support previously divided by streams.',
        },
        {
          question: 'How do I know if my child has elementary math gaps?',
          answer: 'If your child struggles with multiplying fractions, applying negative signs, or becomes frustrated when solving simple algebra puzzles, they likely have foundational gaps that will impact their Grade 9 performance.',
        },
        {
          question: 'Does this course include coding concepts?',
          answer: 'Yes. The MTH1W curriculum integrates computational thinking and pseudocode/coding concepts to solve mathematical problems. Our tutors explain these concepts clearly so non-programming students can excel.',
        },
        {
          question: 'Can tutoring help prepare for Grade 9 before high school starts?',
          answer: 'Yes. Many families book summer preparatory sessions during July and August to preview Grade 9 algebra and linear relations, giving their child a head start in September.',
        },
      ],
    },
    relatedPages: {
      heading: 'Explore Related Mathematics Courses',
      items: [
        {
          title: 'Grade 10 Academic Math (MPM2D)',
          description: 'Learn about the quadratic and geometric concepts taught in Grade 10.',
          href: '/en/subjects/math/grade-10-math-mpm2d',
          label: 'Explore MPM2D',
        },
        {
          title: 'Elementary & Middle School Math',
          description: 'Foundations in number operations, fractions, and early algebra.',
          href: '/en/subjects/math',
          label: 'Math Overview',
        },
        {
          title: 'Ontario Curriculum Tutoring',
          description: 'How our tutoring aligns with the Ontario Ministry of Education framework.',
          href: '/en/curriculum/ontario',
          label: 'Ontario Curriculum',
        },
      ],
    },
    cta: {
      eyebrow: 'Start High School Strong',
      title: 'Equip Your Student with Confident Grade 9 Math Skills',
      description: 'Book a free trial session to evaluate your student’s current math level and establish a clear learning plan for Grade 9.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 7. Grade 10 Academic Math (MPM2D)
  'math-grade-10-math-mpm2d': {
    slug: 'grade-10-math-mpm2d',
    pathname: '/subjects/math/grade-10-math-mpm2d',
    seo: {
      title: 'Grade 10 Math Tutor | Ontario MPM2D Academic Math Tutoring | Success Path Mentors',
      description: 'Targeted Ontario Grade 10 Academic Math (MPM2D) tutoring. Master quadratic functions, factoring, analytic geometry, and trigonometry before Grade 11.',
      pathname: '/subjects/math/grade-10-math-mpm2d',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Subjects', href: '/en/subjects' },
      { label: 'Mathematics', href: '/en/subjects/math' },
      { label: 'Grade 10 Math (MPM2D)' },
    ],
    breadcrumbLabel: 'Grade 10 Math MPM2D breadcrumb',
    hero: {
      eyebrow: 'Ontario Secondary School Curriculum • Grade 10',
      title: 'Grade 10 Academic Math (MPM2D) Online Tutoring',
      description: 'Master quadratic relations, polynomial factoring, analytic geometry, and trigonometry with dedicated one-to-one academic mentors who prepare students for senior high.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Explore Math Roadmap',
        href: '/en/subjects/math',
      },
      highlights: [
        { value: 'MPM2D Course Code', label: 'Aligned directly with the Ontario Principles of Mathematics Grade 10 curriculum.' },
        { value: 'Gateway to Grade 11', label: 'The essential prerequisite for Grade 11 University Functions (MCR3U).' },
        { value: 'Quadratics & Trig Focus', label: 'Deep mastery of parabolas, factoring strategies, SOH CAH TOA, and sine/cosine laws.' },
      ],
    },
    overview: {
      id: 'mpm2d-overview',
      eyebrow: 'Curriculum Significance',
      title: 'The Bridge to Senior Secondary University Mathematics',
      description: 'Principles of Mathematics (MPM2D) introduces students to non-linear quadratic relations and formal geometry, cementing the algebraic skills needed for upper-year STEM success.',
      paragraphs: [
        'Grade 10 Academic Math is widely recognized by Ontario guidance counselors as a decisive crossroad. How a student performs in MPM2D directly determines their readiness for Grade 11 Functions (MCR3U) and eventual university entrance options.',
        'The curriculum transitions students away from straight-line linear models into curved parabolic relationships. Key units include expanding and factoring quadratic polynomials, solving quadratic equations using the quadratic formula and completing the square, analytic geometry (midpoints, distance, circle equations), and trigonometry (primary trig ratios, sine law, cosine law).',
        'Success Path Mentors provides one-on-one structured tutoring to ensure that students do not just survive Grade 10 math, but develop the strong factoring and geometric problem-solving fluency required to thrive in Grade 11 and 12 university courses.',
      ],
    },
    struggles: {
      id: 'mpm2d-struggles',
      eyebrow: 'Frequent Challenges',
      title: 'Where Grade 10 Math Students Encounter Roadblocks',
      description: 'The core topics that define MPM2D test and exam performance:',
      items: [
        {
          title: 'Factoring Quadratic Trinomials',
          description: 'Factoring complex trinomials (ax² + bx + c where a ≠ 1), recognizing difference of squares, and common factoring under timed test conditions.',
          icon: Calculator,
        },
        {
          title: 'Completing the Square & Vertex Form',
          description: 'Converting standard form y = ax² + bx + c into vertex form y = a(x - h)² + k to identify maximum or minimum values in word problems.',
          icon: Compass,
        },
        {
          title: 'Analytic Geometry Proofs',
          description: 'Verifying properties of triangles and quadrilaterals using midpoint, length, slope formulas, and circle equations.',
          icon: TrendingUp,
        },
        {
          title: 'Sine & Cosine Law Application',
          description: 'Determining which trigonometric formula applies to non-right triangles, solving multi-step bearing and navigation word problems.',
          icon: Layers,
        },
      ],
    },
    howWeHelp: {
      id: 'mpm2d-how-we-help',
      eyebrow: 'Our Tutoring Methodology',
      title: 'Proven Strategies for Excelling in MPM2D',
      description: 'How our tutors build consistent academic achievement:',
      steps: [
        {
          title: 'Systematic Factoring Algorithms',
          description: 'Students learn foolproof decomposition and inspection techniques so factoring becomes automatic rather than a guessing game.',
        },
        {
          title: 'Parabola Curve Graphing Drills',
          description: 'Clear understanding of intercepts, axis of symmetry, vertex coordinates, and direction of opening.',
        },
        {
          title: 'Multi-Step Geometry Proof Practice',
          description: 'Training in formal mathematical communication so full marks are earned on thinking and inquiry questions.',
        },
        {
          title: 'Regular Test Simulation & Homework Review',
          description: 'Ongoing alignment with the student’s classroom teacher tests, quizzes, and homework expectations.',
        },
      ],
    },
    outcomes: {
      id: 'mpm2d-outcomes',
      eyebrow: 'Expected Results',
      title: 'Key Competencies Developed in Grade 10 Math',
      description: 'Academic milestones that ensure strong progression into Grade 11:',
      items: [
        {
          title: 'Effortless Quadratic Factoring',
          description: 'Instant recognition of factoring patterns essential for all senior high school calculus and algebra.',
          icon: CheckCircle2,
        },
        {
          title: 'Trigonometric Problem Solving',
          description: 'Fluency with right and oblique triangles using primary trig ratios, the Sine Law, and the Cosine Law.',
          icon: BrainCircuit,
        },
        {
          title: 'Seamless Grade 11 Functions Transition',
          description: 'Complete confidence and preparedness for Grade 11 University Functions (MCR3U).',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions About MPM2D Tutoring',
      description: 'Helpful information for parents and Grade 10 students:',
      items: [
        {
          question: 'What minimum mark should a student aim for in MPM2D to succeed in Grade 11?',
          answer: 'We strongly recommend aiming for at least 75% to 80% in MPM2D before enrolling in Grade 11 Functions (MCR3U). Students who finish Grade 10 with a mark in the 60s often face severe difficulties in Grade 11 without supplementary tutoring.',
        },
        {
          question: 'Can the tutor help my child with quadratic word problems?',
          answer: 'Yes. Word problems involving projectile motion (maximum height and time to hit the ground), business profit, and area optimization are standard areas where our tutors provide structured, step-by-step guidance.',
        },
        {
          question: 'What is the difference between MPM2D and MFM2P?',
          answer: 'MPM2D is the Academic course required for Grade 11 University Functions (MCR3U). MFM2P is the Applied course designed for college pathway courses. Our tutors ensure Academic students master the theoretical rigor required.',
        },
        {
          question: 'How many sessions per week are recommended for Grade 10 math?',
          answer: 'Most students benefit significantly from 1 to 2 focused one-to-one sessions per week, keeping up with homework and preparing for upcoming unit evaluations.',
        },
      ],
    },
    relatedPages: {
      heading: 'Related Mathematics Pathways',
      items: [
        {
          title: 'Grade 9 Math (MTH1W)',
          description: 'Review foundational algebra, linear equations, and number sense.',
          href: '/en/subjects/math/grade-9-math-mth1w',
          label: 'Explore MTH1W',
        },
        {
          title: 'Grade 11 Functions (MCR3U)',
          description: 'Discover the next university mathematics course that builds directly upon MPM2D.',
          href: '/en/subjects/math/grade-11-functions-mcr3u',
          label: 'Explore MCR3U',
        },
        {
          title: 'Mathematics Pathways Directory',
          description: 'Explore all math topics organized across our eight curriculum pathways.',
          href: '/en/subjects/math',
          label: 'Math Overview',
        },
      ],
    },
    cta: {
      eyebrow: 'Master Grade 10 Math',
      title: 'Prepare for Senior High Math Success with a Personal Tutor',
      description: 'Book your free trial session to evaluate your student’s MPM2D progress and set clear academic goals.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 8. Senior High Chemistry (SCH3U & SCH4U)
  'chemistry-senior-chemistry-sch3u-sch4u': {
    slug: 'senior-chemistry-sch3u-sch4u',
    pathname: '/subjects/chemistry/senior-chemistry-sch3u-sch4u',
    seo: {
      title: 'SCH4U & SCH3U Chemistry Tutor | Ontario Grade 11 & 12 Chemistry | Success Path Mentors',
      description: 'Comprehensive Grade 11 (SCH3U) and Grade 12 (SCH4U) chemistry tutoring. Master stoichiometry, chemical equilibrium, thermochemistry, and organic reactions.',
      pathname: '/subjects/chemistry/senior-chemistry-sch3u-sch4u',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Subjects', href: '/en/subjects' },
      { label: 'Chemistry', href: '/en/subjects/chemistry' },
      { label: 'Senior Chemistry (SCH3U & SCH4U)' },
    ],
    breadcrumbLabel: 'Senior Chemistry SCH3U SCH4U breadcrumb',
    hero: {
      eyebrow: 'Ontario Secondary School Curriculum • Grades 11 & 12',
      title: 'Senior High Chemistry (SCH3U & SCH4U) Online Tutoring',
      description: 'Demystify quantitative chemistry, molecular orbital theory, chemical equilibrium, thermochemistry, and organic reaction mechanisms with expert science mentors.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Explore Chemistry Strands',
        href: '/en/subjects/chemistry',
      },
      highlights: [
        { value: 'SCH3U & SCH4U Codes', label: 'Aligned with Ontario Grade 11 and 12 University Preparation chemistry curricula.' },
        { value: 'Health Sciences & Pre-Med', label: 'Crucial prerequisite for Life Sciences, Pharmacy, Nursing, and Chemical Engineering.' },
        { value: 'Theory & Calculations', label: 'Balances mathematical stoichiometry with deep conceptual atomic understanding.' },
      ],
    },
    overview: {
      id: 'senior-chem-overview',
      eyebrow: 'Curriculum Scope',
      title: 'From Foundational Reactions to Advanced Chemical Thermodynamics',
      description: 'Senior secondary chemistry in Ontario bridges atomic theory with quantitative laboratory analysis, demanding both high-level mathematical ability and conceptual precision.',
      paragraphs: [
        'In Grade 11 Chemistry (SCH3U), students transition into rigorous quantitative work: the mole concept, stoichiometry, solution concentration, gas laws, and basic chemical bonding. In Grade 12 Chemistry (SCH4U), the curriculum accelerates into quantum mechanics, electron configurations, thermochemistry, rates of reaction, chemical equilibrium (including acid-base titration equilibria and solubility products), electrochemistry, and organic functional groups.',
        'Many students find the transition from Grade 10 General Science to senior chemistry jarring. The workload is heavy, and memorizing facts is no longer sufficient; students must perform multi-step dimensional analysis and explain microscopic molecular phenomena clearly on written evaluations.',
        'Success Path Mentors provides the dedicated one-to-one mentoring needed to conquer senior chemistry. Our tutors clarify complex unit conversions, illustrate molecular geometry, and teach students how to write complete, high-scoring lab reports and test responses.',
      ],
    },
    struggles: {
      id: 'senior-chem-struggles',
      eyebrow: 'Core Obstacles',
      title: 'Where Senior Chemistry Students Frequently Face Difficulties',
      description: 'The highest-difficulty units in the Ontario SCH3U and SCH4U syllabi:',
      items: [
        {
          title: 'Stoichiometry & Limiting Reactants (SCH3U)',
          description: 'Navigating mole ratios, percentage yields, gravimetric analysis, and solution dilutions without losing track of units.',
          icon: Calculator,
        },
        {
          title: 'Chemical Equilibrium & Le Chatelier (SCH4U)',
          description: 'Setting up ICE tables, calculating equilibrium constants (Kc, Kp), common-ion effect problems, and predicting shifts using reaction quotients (Q).',
          icon: Atom,
        },
        {
          title: 'Acid-Base Equilibria & Titration Curves (SCH4U)',
          description: 'Calculating pH of weak acids and bases using Ka and Kb, analyzing buffer capacity, and determining equivalence points in titration curves.',
          icon: Flame,
        },
        {
          title: 'Organic Chemistry & Mechanisms (SCH4U)',
          description: 'Naming IUPAC organic molecules, identifying functional groups (alcohols, esters, amides), and predicting substitution and elimination reactions.',
          icon: Layers,
        },
      ],
    },
    howWeHelp: {
      id: 'senior-chem-how-we-help',
      eyebrow: 'Instructional Approach',
      title: 'How Our Chemistry Mentors Drive Academic Excellence',
      description: 'A balanced strategy that combines calculation practice and conceptual mastery:',
      steps: [
        {
          title: 'Dimensional Analysis & Unit Tracking',
          description: 'We train students to use units systematically so calculation errors in moles, liters, and grams are caught immediately.',
        },
        {
          title: 'Visualizing Molecular Geometry & Bonding',
          description: 'Clear 3D representations of VSEPR theory, polarity, intermolecular forces, and Lewis structures.',
        },
        {
          title: 'ICE Table & Equilibrium Workflows',
          description: 'Repeatable, structured frameworks for tackling complex quadratic equilibrium calculations with confidence.',
        },
        {
          title: 'Lab Report & Test Question Review',
          description: 'Guidance on error analysis, experimental design questions, and teacher-specific evaluation rubrics.',
        },
      ],
    },
    outcomes: {
      id: 'senior-chem-outcomes',
      eyebrow: 'Expected Results',
      title: 'Key Competencies Developed in Senior Chemistry',
      description: 'Skills that build a competitive transcript for university health science and engineering:',
      items: [
        {
          title: 'Quantitative Chemistry Precision',
          description: 'Fluency in mole calculations, solution stoichiometry, gas laws, and thermochemical enthalpy equations.',
          icon: CheckCircle2,
        },
        {
          title: 'Equilibrium & Kinetics Mastery',
          description: 'Thorough understanding of dynamic equilibrium, reaction rates, catalysts, and electrochemistry cells.',
          icon: BrainCircuit,
        },
        {
          title: 'Competitive University Admission Average',
          description: 'A high Grade 12 chemistry grade that opens doors to top Canadian university science programs.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions About SCH3U & SCH4U Tutoring',
      description: 'Helpful information for high school science students:',
      items: [
        {
          question: 'Can the tutor assist with Grade 11 and Grade 12 chemistry at the same time?',
          answer: 'Yes. For Grade 12 students who feel shaky about Grade 11 foundations (like mole conversions or nomenclature), our tutors integrate targeted reviews of Grade 11 concepts directly into Grade 12 homework and test prep.',
        },
        {
          question: 'Does the tutor help with laboratory reports and data analysis?',
          answer: 'Yes. We guide students on how to present quantitative lab observations, calculate percentage error, explain theoretical discrepancies, and answer post-lab discussion questions clearly.',
        },
        {
          question: 'Which university programs require SCH4U?',
          answer: 'SCH4U is required for virtually all university Life Sciences, Health Sciences, Pre-Med, Nursing, Chemical Engineering, Biochemistry, and Environmental Science programs.',
        },
        {
          question: 'How is online chemistry tutoring delivered effectively?',
          answer: 'Our tutors use digital whiteboards to write out chemical equations, draw molecular structures, sketch titration curves, and solve stoichiometry calculations live with the student.',
        },
      ],
    },
    relatedPages: {
      heading: 'Related Senior Science Pathways',
      items: [
        {
          title: 'Senior High Physics (SPH3U & SPH4U)',
          description: 'Explore the companion senior science course covering thermodynamics and energy.',
          href: '/en/subjects/physics/senior-physics-sph3u-sph4u',
          label: 'Explore Physics',
        },
        {
          title: 'Grade 12 Advanced Functions (MHF4U)',
          description: 'Strengthen the logarithmic and algebraic skills used in pH and equilibrium calculations.',
          href: '/en/subjects/math/grade-12-advanced-functions-mhf4u',
          label: 'Explore MHF4U',
        },
        {
          title: 'All Chemistry Strands',
          description: 'Browse all 16 modular chemistry strands from atomic theory to organic chemistry.',
          href: '/en/subjects/chemistry',
          label: 'Chemistry Overview',
        },
      ],
    },
    cta: {
      eyebrow: 'Excel in High School Chemistry',
      title: 'Master Senior Chemistry with a Dedicated Academic Mentor',
      description: 'Book your free trial session to review your current chemistry syllabus and prepare for upcoming unit tests.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 9. Senior High Physics (SPH3U & SPH4U)
  'physics-senior-physics-sph3u-sph4u': {
    slug: 'senior-physics-sph3u-sph4u',
    pathname: '/subjects/physics/senior-physics-sph3u-sph4u',
    seo: {
      title: 'SPH4U & SPH3U Physics Tutor | Ontario Grade 11 & 12 Physics | Success Path Mentors',
      description: 'Expert Ontario Grade 11 (SPH3U) and Grade 12 (SPH4U) physics tutoring. Master kinematics, dynamics, energy, gravitational and magnetic fields, and wave theory.',
      pathname: '/subjects/physics/senior-physics-sph3u-sph4u',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Subjects', href: '/en/subjects' },
      { label: 'Physics', href: '/en/subjects/physics' },
      { label: 'Senior Physics (SPH3U & SPH4U)' },
    ],
    breadcrumbLabel: 'Senior Physics SPH3U SPH4U breadcrumb',
    hero: {
      eyebrow: 'Ontario Secondary School Curriculum • Grades 11 & 12',
      title: 'Senior High Physics (SPH3U & SPH4U) Online Tutoring',
      description: 'Master mechanics, forces, gravitational and electric fields, energy conservation, wave theory, and special relativity with patient mentors specialized in secondary physics.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Explore Physics Strands',
        href: '/en/subjects/physics',
      },
      highlights: [
        { value: 'SPH3U & SPH4U Codes', label: 'Aligned directly with Ontario Grade 11 and 12 University Preparation physics curricula.' },
        { value: 'Engineering Gateway', label: 'Mandatory prerequisite for all Canadian university Engineering and Physical Science faculties.' },
        { value: 'Vector Problem Solving', label: 'Builds free-body diagram accuracy, mathematical modeling, and conceptual clarity.' },
      ],
    },
    overview: {
      id: 'senior-phys-overview',
      eyebrow: 'Curriculum Structure',
      title: 'Understanding the Mathematical Laws That Govern the Physical World',
      description: 'Physics teaches students to model physical reality using mathematical formulas, vector mechanics, and conservation laws.',
      paragraphs: [
        'In Grade 11 Physics (SPH3U), students explore one-dimensional kinematics, Newton’s laws of motion, energy transformations, wave behavior and sound, and electricity and magnetism. In Grade 12 Physics (SPH4U), the curriculum deepens into two-dimensional kinematics (projectile motion), circular motion, universal gravitation, electric and magnetic fields, light as a wave, and an introduction to Einstein’s special relativity and quantum mechanics.',
        'Physics is frequently cited by high school students as their most difficult course because it requires combining advanced math with deep spatial and physical intuition. Memorizing formulas does not work; each problem requires drawing a careful diagram, setting up vector components, and creating a customized system of equations.',
        'Success Path Mentors specializes in teaching the analytical thinking required for senior physics. Our tutors ensure students master Free Body Diagrams (FBDs), sign conventions, and multi-step derivations so they can tackle test problems with complete composure.',
      ],
    },
    struggles: {
      id: 'senior-phys-struggles',
      eyebrow: 'Common Challenges',
      title: 'The Units Where Physics Students Encounter the Most Trouble',
      description: 'Typical stumbling points in the Ontario SPH3U and SPH4U curricula:',
      items: [
        {
          title: '2D Kinematics & Projectiles (SPH4U)',
          description: 'Decomposing initial velocity vectors into horizontal and vertical components, and solving for range, flight time, and maximum height.',
          icon: Calculator,
        },
        {
          title: 'Dynamics & Connected Systems (SPH3U/4U)',
          description: 'Drawing accurate Free Body Diagrams for inclined planes, pulley systems (Atwood machines), friction coefficients, and tension forces.',
          icon: Compass,
        },
        {
          title: 'Gravitational & Electric Fields (SPH4U)',
          description: 'Understanding potential vs. field strength, Coulomb’s law, Millikan’s oil drop experiment, and motion of charged particles in magnetic fields.',
          icon: Zap,
        },
        {
          title: 'Wave Interference & Quantum Physics',
          description: 'Analyzing Young’s double-slit experiment, thin-film interference, photoelectric effect equations, and relativistic time dilation.',
          icon: Layers,
        },
      ],
    },
    howWeHelp: {
      id: 'senior-phys-how-we-help',
      eyebrow: 'Our Teaching Methodology',
      title: 'How Our Tutors Build Physics Problem-Solving Confidence',
      description: 'A disciplined framework that transforms how students approach complex physics problems:',
      steps: [
        {
          title: 'Mandatory Free-Body Diagram Mastery',
          description: 'We train students never to start a mechanics problem without a comprehensive, correctly labeled vector diagram.',
        },
        {
          title: 'Vector Component Decomposition',
          description: 'Systematic practice resolving forces into parallel and perpendicular axes for inclined planes and circular motion.',
        },
        {
          title: 'Conservation Laws as Primary Tools',
          description: 'Teaching students to evaluate work-energy and momentum conservation before resorting to tedious kinematics equations.',
        },
        {
          title: 'Test-Level Multi-Concept Drills',
          description: 'Practice with past test banks from top Ontario school boards to eliminate surprise during midterm and final exams.',
        },
      ],
    },
    outcomes: {
      id: 'senior-phys-outcomes',
      eyebrow: 'Expected Results',
      title: 'Skills That Prepare Students for University Engineering',
      description: 'Key competencies developed during senior physics tutoring:',
      items: [
        {
          title: 'Intuitive Physical Reasoning',
          description: 'Ability to predict physical outcomes and verify whether calculated numbers make real-world physical sense.',
          icon: CheckCircle2,
        },
        {
          title: 'Flawless Vector Mathematics',
          description: 'Mastery of trigonometry, vector components, resultants, and relative velocity calculations.',
          icon: BrainCircuit,
        },
        {
          title: 'Competitive University Admission Average',
          description: 'A strong physics mark that strengthens applications to Waterloo, U of T, McMaster, and Queen’s Engineering.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions About SPH3U & SPH4U Tutoring',
      description: 'Common questions from parents and senior physics students:',
      items: [
        {
          question: 'Does a student need to be taking Calculus at the same time as SPH4U?',
          answer: 'While Ontario SPH4U is technically an algebra-based physics course (calculus is not officially required on tests), having strong trigonometry and algebraic skills is critical. Taking MHF4U or MCV4U concurrently helps significantly with understanding rates of change and vectors.',
        },
        {
          question: 'My child understands the concepts in class but fails the tests. Why?',
          answer: 'This is the most common complaint in high school physics. Understanding an explanation in class is very different from setting up an unfamiliar, multi-step problem on a blank test page. Our tutors bridge this gap through deliberate, unassisted problem-solving practice during sessions.',
        },
        {
          question: 'Can the tutor assist with physics laboratory write-ups?',
          answer: 'Yes. We help students with graphing motion and force data, calculating percent discrepancies, analyzing systematic vs. random errors, and writing concise scientific conclusions.',
        },
        {
          question: 'Which university programs require SPH4U?',
          answer: 'SPH4U is a mandatory prerequisite for all accredited Canadian university engineering programs, astrophysics, physical sciences, and many architecture programs.',
        },
      ],
    },
    relatedPages: {
      heading: 'Related Secondary STEM Pathways',
      items: [
        {
          title: 'Grade 12 Calculus & Vectors (MCV4U)',
          description: 'Explore the mathematics course that shares 3D vectors and rate-of-change models with SPH4U.',
          href: '/en/subjects/math/grade-12-calculus-vectors-mcv4u',
          label: 'Explore MCV4U',
        },
        {
          title: 'Senior High Chemistry (SCH3U & SCH4U)',
          description: 'Discover the companion science course covering atomic physics and thermodynamics.',
          href: '/en/subjects/chemistry/senior-chemistry-sch3u-sch4u',
          label: 'Explore Chemistry',
        },
        {
          title: 'All Physics Strands Directory',
          description: 'Browse our complete 13-strand physics learning map from kinematics to modern quantum physics.',
          href: '/en/subjects/physics',
          label: 'Physics Overview',
        },
      ],
    },
    cta: {
      eyebrow: 'Master Senior Physics',
      title: 'Build Unshakable Physics Problem-Solving Confidence',
      description: 'Book your free trial session to review your current physics syllabus and prepare for your next major exam.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 10. Online Homework Help
  'services-homework-help': {
    slug: 'homework-help',
    pathname: '/services/homework-help',
    seo: {
      title: 'Online Homework Help | After-School Academic Tutoring | Success Path Mentors',
      description: 'Eliminate evening homework battles. One-to-one online homework help in math, science, and English for Grades 1–12 with personalized subject mentors.',
      pathname: '/services/homework-help',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Services', href: '/en/#services' },
      { label: 'Homework Help' },
    ],
    breadcrumbLabel: 'Online homework help breadcrumb',
    hero: {
      eyebrow: 'After-School Academic Support • Grades 1–12',
      title: 'One-to-One Online Homework Help for Grades 1–12',
      description: 'Transform evening homework frustration into calm, focused learning. Our qualified subject mentors guide students through daily assignments, projects, and test prep.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'How Tutoring Works',
        href: '/en/how-it-works',
      },
      highlights: [
        { value: 'All Core Subjects', label: 'Dedicated assistance across Mathematics, English, Sciences, and French.' },
        { value: 'Conceptual Understanding', label: 'We teach the principles behind the questions rather than just handing out answers.' },
        { value: 'Evening & Weekend Hours', label: 'Flexible scheduling that fits smoothly around family routines and extracurriculars.' },
      ],
    },
    overview: {
      id: 'homework-overview',
      eyebrow: 'The Parent Dilemma',
      title: 'Ending Evening Homework Struggles and Rebuilding Independence',
      description: 'After a full day of school, homework can quickly turn family evenings into a stressful battleground of tears, exhaustion, and confusion.',
      paragraphs: [
        'Modern curricula have evolved significantly. Teaching methods in mathematics, reading phonics, and scientific inquiry look very different today than they did a generation ago, leaving even the most dedicated parents feeling uncertain about how to assist their children.',
        'Success Path Mentors provides a dependable, calm third-party mentor who steps in to handle after-school homework. During private one-to-one sessions, our tutors review the day’s classroom instruction, break down difficult worksheet questions, and guide the student to arrive at solutions independently.',
        'We do not simply provide answers. Our focus is on fostering self-regulation, note-taking habits, and organizational skills so students gradually require less assistance as their academic stamina and confidence grow.',
      ],
    },
    struggles: {
      id: 'homework-struggles',
      eyebrow: 'Typical Household Challenges',
      title: 'Common Homework Pain Points Faced by Families',
      description: 'The recurring friction points that our homework support resolves:',
      items: [
        {
          title: 'Parent-Child Conflict',
          description: 'Evening arguments over unfinished worksheets, late-night cramming, and emotional fatigue that damages family time.',
          icon: HelpCircle,
        },
        {
          title: 'Unfamiliar Teaching Methods',
          description: 'Parents struggling to explain new curriculum approaches in math or language arts without confusing the student.',
          icon: Compass,
        },
        {
          title: 'Incomplete or Rushed Work',
          description: 'Students rushing through assignments without understanding core concepts, resulting in low marks on subsequent class tests.',
          icon: FileCheck2,
        },
        {
          title: 'Disorganization & Procrastination',
          description: 'Difficulty breaking large multi-week projects or novel studies into manageable daily tasks.',
          icon: BrainCircuit,
        },
      ],
    },
    howWeHelp: {
      id: 'homework-how-we-help',
      eyebrow: 'Our Structured Routine',
      title: 'How Our One-to-One Homework Sessions Work',
      description: 'A predictable, supportive framework that turns chaos into productive learning:',
      steps: [
        {
          title: 'Assignment Review & Goal Setting',
          description: 'The student and tutor review what is due, prioritize the most challenging tasks, and establish a clear session goal.',
        },
        {
          title: 'Clarifying the Underlying Concept',
          description: 'Before attempting the first question, the tutor ensures the student understands the relevant classroom lesson or rule.',
        },
        {
          title: 'Guided Independent Execution',
          description: 'The tutor observes as the student works through problems, stepping in with Socratic questions whenever a block occurs.',
        },
        {
          title: 'Review, Error Checking & Follow-Up',
          description: 'Checking completed work, correcting notation, and assigning 2–3 consolidation questions to verify true mastery.',
        },
      ],
    },
    outcomes: {
      id: 'homework-outcomes',
      eyebrow: 'Long-Term Benefits',
      title: 'Tangible Outcomes Beyond Finished Homework',
      description: 'The lasting academic habits developed during our homework sessions:',
      items: [
        {
          title: 'Peaceful Family Evenings',
          description: 'Homework gets completed thoroughly with an expert mentor, leaving family time calm and relaxed.',
          icon: Sparkles,
        },
        {
          title: 'Higher Daily Classroom Marks',
          description: 'Consistently submitted, high-quality assignments that elevate overall report card grades.',
          icon: CheckCircle2,
        },
        {
          title: 'Self-Directed Study Habits',
          description: 'Students learn how to read instructions carefully, organize their time, and check their own work.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions About Homework Help',
      description: 'Practical details on how our after-school tutoring functions:',
      items: [
        {
          question: 'Can my child get help with multiple subjects in the same session?',
          answer: 'Yes. Many students spend half a session reviewing math homework and the remaining time working on English reading, science questions, or French vocabulary.',
        },
        {
          question: 'Will the tutor just give my child the answers to complete their work?',
          answer: 'Never. Our educational philosophy strictly forbids doing the work for the student. Our tutors ask guiding questions, explain underlying rules, and provide similar practice examples until the student completes the assignment independently.',
        },
        {
          question: 'How do students share their worksheets or online textbooks with the tutor?',
          answer: 'Students can upload pictures of worksheets, share links to Google Classroom or Brightspace, or share their screen during the online lesson for immediate collaborative review.',
        },
        {
          question: 'How many days per week can we schedule homework help?',
          answer: 'Families can book anywhere from 1 to 4 sessions per week depending on their student’s workload, schedule, and learning needs.',
        },
      ],
    },
    relatedPages: {
      heading: 'Explore Other Academic Support Services',
      items: [
        {
          title: 'Exam Preparation Tutoring',
          description: 'Targeted midterms and final exam preparation strategies for secondary students.',
          href: '/en/services/exam-preparation',
          label: 'View Exam Prep',
        },
        {
          title: 'Tutor Matching Process',
          description: 'Learn how we select the right mentor based on subject, grade, and personality fit.',
          href: '/en/tutor-matching',
          label: 'Tutor Matching',
        },
        {
          title: 'Online Math Tutoring Hub',
          description: 'Targeted mathematics instruction from elementary foundations to senior calculus.',
          href: '/en/subjects/math',
          label: 'Math Tutoring',
        },
      ],
    },
    cta: {
      eyebrow: 'End the Homework Battle',
      title: 'Give Your Child Calm, Dependable Homework Support Tonight',
      description: 'Book a free trial session to experience how our mentors make after-school learning productive and stress-free.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 11. Exam Preparation & Study Skills
  'services-exam-preparation': {
    slug: 'exam-preparation',
    pathname: '/services/exam-preparation',
    seo: {
      title: 'Exam Preparation Tutor | Midterm & Final Exam Tutoring | Success Path Mentors',
      description: 'Targeted high school exam preparation tutoring. Review past exam questions, master time management, reduce test anxiety, and secure peak semester grades.',
      pathname: '/services/exam-preparation',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Services', href: '/en/#services' },
      { label: 'Exam Preparation' },
    ],
    breadcrumbLabel: 'Exam preparation tutoring breadcrumb',
    hero: {
      eyebrow: 'Seasonal & Intensive Support • Grades 7–12',
      title: 'Targeted Exam Preparation & Study Skills Tutoring',
      description: 'Equip your student to enter exam week with total confidence. Structured review of semester concepts, timed mock tests, and proven stress-reduction strategies.',
      primaryAction: {
        label: 'Book an Exam Prep Consultation',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'View Tutoring Packages',
        href: '/en/#pricing',
      },
      highlights: [
        { value: 'Midterms & Finals', label: 'Intensive prep tailored to secondary school January and June assessment periods.' },
        { value: 'Exam Strategy', label: 'Techniques for pacing, question triage, and high-value rubric targeting.' },
        { value: 'Anxiety Reduction', label: 'Transform nervousness into systematic, rehearsed test execution.' },
      ],
    },
    overview: {
      id: 'exam-overview',
      eyebrow: 'The Stakes of Exam Season',
      title: 'Turning High-Stakes Assessments into Confident Performances',
      description: 'In Ontario secondary schools, final exams and culminating performance tasks typically account for 30% of a student’s final course grade.',
      paragraphs: [
        'A single exam can elevate a student into university scholarship standing—or drop their final average below admission cutoffs. Many students study for hours by passively re-reading notes or watching videos, only to blank out when confronted with unfamiliar application questions under timed pressure.',
        'True exam readiness requires active retrieval practice, synthetic concept mapping across multiple course units, and disciplined time management. Success Path Mentors provides intensive, structured exam preparation programs scheduled in the weeks leading up to midterms and final evaluations.',
        'Our mentors analyze the student’s specific exam format, administer past exam-style questions under timed conditions, and teach practical test-taking strategies that maximize mark capture across Knowledge, Thinking, Communication, and Application categories.',
      ],
    },
    struggles: {
      id: 'exam-struggles',
      eyebrow: 'Why Students Falter on Exams',
      title: 'The Most Common Pitfalls During High School Exams',
      description: 'The recurring reasons capable students underperform during finals:',
      items: [
        {
          title: 'Passive & Ineffective Studying',
          description: 'Highlighting textbooks and re-reading notebooks without actively testing recall through unassisted practice problems.',
          icon: BookOpenCheck,
        },
        {
          title: 'Poor Examination Pacing',
          description: 'Spending 20 minutes stuck on an early 3-mark question, leaving high-value long-answer questions rushed or blank at the end.',
          icon: Compass,
        },
        {
          title: 'Acute Test Anxiety',
          description: 'Physical stress and mental panic that impairs working memory and leads to careless computational or reading mistakes.',
          icon: HelpCircle,
        },
        {
          title: 'Cumulative Memory Overload',
          description: 'Difficulty synthesizing concepts learned in September or February with material introduced at the very end of the semester.',
          icon: BrainCircuit,
        },
      ],
    },
    howWeHelp: {
      id: 'exam-how-we-help',
      eyebrow: 'Our 4-Phase System',
      title: 'How Our Exam Preparation Framework Maximizes Grades',
      description: 'A disciplined, time-tested preparation sprint:',
      steps: [
        {
          title: 'Semester Curriculum Audit & Priority Matrix',
          description: 'We audit all course units, identifying the student’s weakest areas and cross-referencing them against high-yield exam topics.',
        },
        {
          title: 'Comprehensive Formula & Concept Synthesis',
          description: 'Creating structured summary sheets, memory aids, and procedural templates for quick formula selection.',
        },
        {
          title: 'Timed Simulation of Mock Exam Questions',
          description: 'Students solve challenging, mixed-unit problems under authentic timed conditions to develop pacing rhythm.',
        },
        {
          title: 'Rubric Optimization & Communication Polish',
          description: 'Refining written explanations, units, and mathematical proofs so zero marks are lost on teacher rubrics.',
        },
      ],
    },
    outcomes: {
      id: 'exam-outcomes',
      eyebrow: 'Tangible Results',
      title: 'Skills That Produce Peak Exam Scores',
      description: 'What students walk into the examination hall equipped with:',
      items: [
        {
          title: 'Strategic Question Triage',
          description: 'Knowing which questions to tackle first to build immediate momentum and secure guaranteed marks.',
          icon: CheckCircle2,
        },
        {
          title: 'Calm Mental Focus Under Pressure',
          description: 'Rehearsed confidence that replaces panic with methodical, step-by-step problem deconstruction.',
          icon: Sparkles,
        },
        {
          title: 'Protected & Elevated Final Grades',
          description: 'Securing the 30% culminating component to guarantee university admission cutoffs and honour roll standing.',
          icon: Award,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions About Exam Prep Tutoring',
      description: 'Planning guidance for midterms and final exam cycles:',
      items: [
        {
          question: 'When should a student begin exam preparation tutoring?',
          answer: 'We recommend starting 3 to 4 weeks prior to the scheduled exam period. This allows adequate time to review earlier semester units systematically without stressful last-minute cramming.',
        },
        {
          question: 'Can the tutor review past exams from our specific school or board?',
          answer: 'Yes. Students are encouraged to bring past tests, teacher review packages, and provincial course outlines so our sessions mirror their exact classroom evaluation format.',
        },
        {
          question: 'Do you offer intensive crash courses before exam week?',
          answer: 'Yes. During January and June exam seasons, we offer multi-session intensive packages where students can meet with their tutor 2 to 3 times per week for concentrated review.',
        },
        {
          question: 'Is exam preparation available for Grade 9 and 10 students?',
          answer: 'Yes. For junior high school students taking their very first formal semester exams, our tutors place special emphasis on exam format orientation, study schedules, and anxiety management.',
        },
      ],
    },
    relatedPages: {
      heading: 'Related Academic Support Options',
      items: [
        {
          title: 'Online Homework Help',
          description: 'Consistent day-to-day academic assistance throughout the school semester.',
          href: '/en/services/homework-help',
          label: 'Homework Help',
        },
        {
          title: 'Ontario Secondary Mathematics Hub',
          description: 'Explore course-specific prep for MHF4U, MCV4U, MCR3U, and MDM4U.',
          href: '/en/subjects/math',
          label: 'Math Courses',
        },
        {
          title: 'Pricing & Lesson Packages',
          description: 'View flexible tutoring packages designed for intensive exam review.',
          href: '/en/#pricing',
          label: 'View Packages',
        },
      ],
    },
    cta: {
      eyebrow: 'Ace Your Final Exams',
      title: 'Step Into Exam Week Prepared, Focused, and Confident',
      description: 'Book your exam preparation consultation today to lock in your study schedule before peak exam season.',
      primaryAction: {
        label: 'Book an Exam Prep Consultation',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },

  // 12. Ontario Curriculum Tutoring
  'curriculum-ontario': {
    slug: 'ontario',
    pathname: '/curriculum/ontario',
    seo: {
      title: 'Ontario Curriculum Tutoring | K–12 Ministry Aligned Tutoring | Success Path Mentors',
      description: 'Expert online tutoring strictly aligned with the Ontario Ministry of Education curriculum. Personalized support across Knowledge, Thinking, Communication, and Application.',
      pathname: '/curriculum/ontario',
    },
    breadcrumbs: [
      { label: 'Home', href: '/en' },
      { label: 'Curriculum', href: '/en/#programs' },
      { label: 'Ontario Curriculum Tutoring' },
    ],
    breadcrumbLabel: 'Ontario curriculum tutoring breadcrumb',
    hero: {
      eyebrow: 'Ministry of Education Standards • Grades 1–12',
      title: 'Ontario Curriculum-Aligned Online Tutoring (Grades 1–12)',
      description: 'Give your student the decisive advantage of one-to-one tutoring strictly aligned with the Ontario curriculum, Growing Success assessment policies, and provincial achievement charts.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Explore Our Subjects',
        href: '/en/subjects',
      },
      highlights: [
        { value: 'Ontario Standards Aligned', label: 'Strict fidelity to Ministry expectations across Math, Sciences, English, and French.' },
        { value: 'Achievement Chart Focus', label: 'Explicit coaching across Knowledge, Thinking, Communication, and Application.' },
        { value: 'Report Card Impact', label: 'Directly targets the learning skills and criteria evaluated on provincial report cards.' },
      ],
    },
    overview: {
      id: 'ontario-overview',
      eyebrow: 'Why Provincial Alignment Matters',
      title: 'Why Generic Tutoring Fails Ontario Students',
      description: 'Generic, Americanized, or international tutoring platforms often teach concepts out of order, use non-standard terminology, and overlook Ontario Ministry evaluation criteria.',
      paragraphs: [
        'Ontario education is governed by strict, specific curriculum policy documents and the provincial Growing Success assessment framework. In Ontario classrooms, getting the correct answer is only one small part of an evaluation—teachers score students across an Achievement Chart divided into Knowledge & Understanding (30%), Thinking & Inquiry (25%), Communication (20%), and Application (25%).',
        'When students receive tutoring from educators who do not understand this framework, they frequently lose marks for not showing required steps, failing to justify thinking with mathematical or scientific vocabulary, or solving problems using methods not recognized by local school boards (such as TDSB, PDSB, YRDSB, HDSB, or OCDSB).',
        'Success Path Mentors designs every learning plan around Ontario course codes, strand expectations, and evaluation rubrics. We speak your child’s educational language and prepare them directly for what their classroom teacher evaluates.',
      ],
    },
    struggles: {
      id: 'ontario-struggles',
      eyebrow: 'The Assessment Gap',
      title: 'Where Ontario Students Lose Marks on Provincial Report Cards',
      description: 'The subtle grading expectations that catch students and parents off guard:',
      items: [
        {
          title: 'Thinking & Inquiry Questions',
          description: 'Unfamiliar non-routine problems that require students to devise a multi-step strategy rather than copy a memorized formula.',
          icon: BrainCircuit,
        },
        {
          title: 'Mathematical & Scientific Communication',
          description: 'Losing marks for missing units, undefined variables, incomplete geometric statements, or poorly structured written explanations.',
          icon: BookOpenCheck,
        },
        {
          title: 'Real-World Application Word Problems',
          description: 'Connecting abstract classroom formulas to practical engineering, financial, or biological real-world contexts.',
          icon: Compass,
        },
        {
          title: 'Learning Skills & Work Habits',
          description: 'Struggles with organization, self-regulation, and initiative that drag down student report card comments and teacher perceptions.',
          icon: Layers,
        },
      ],
    },
    howWeHelp: {
      id: 'ontario-how-we-help',
      eyebrow: 'Our Alignment Strategy',
      title: 'How Success Path Mentors Aligns with Ontario Classrooms',
      description: 'Our four-pillar approach to provincial curriculum mastery:',
      steps: [
        {
          title: 'Curriculum Code & Strand Mapping',
          description: 'Every lesson references the student’s exact course code (e.g. MTH1W, MCR3U, SPH4U) and current teacher unit outline.',
        },
        {
          title: 'Four-Category Achievement Chart Training',
          description: 'We deliberately train students to solve questions designed for Knowledge, Thinking, Communication, and Application.',
        },
        {
          title: 'School Board Syllabus Synchronization',
          description: 'Our tutors keep pace with local school board semester timelines, midterm schedules, and culminating deadlines.',
        },
        {
          title: 'Formative Assessment & Continuous Feedback',
          description: 'Parents receive clear updates detailing how their child is progressing relative to grade-level provincial expectations.',
        },
      ],
    },
    outcomes: {
      id: 'ontario-outcomes',
      eyebrow: 'Measurable Outcomes',
      title: 'Demonstrable Growth on Ontario Provincial Evaluations',
      description: 'What parents and students achieve with our Ontario-aligned mentoring:',
      items: [
        {
          title: 'Level 4 (80%–100%) Achievement',
          description: 'Guiding students from Level 2 or 3 into Level 4 excellence across all curriculum strands.',
          icon: Award,
        },
        {
          title: 'University Admissions Readiness',
          description: 'Securing the competitive Grade 11 and 12 U-level marks required for competitive Ontario university programs.',
          icon: CheckCircle2,
        },
        {
          title: 'Independent Academic Stamina',
          description: 'Students develop the critical thinking, communication, and work habits celebrated on provincial report cards.',
          icon: Sparkles,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions About Ontario Curriculum Tutoring',
      description: 'Key information about our provincial curriculum alignment:',
      items: [
        {
          question: 'Which Ontario school boards do your students attend?',
          answer: 'Our students attend public and Catholic school boards across Ontario, including Toronto District School Board (TDSB), Peel District School Board (PDSB), York Region (YRDSB), Halton (HDSB), Ottawa-Carleton (OCDSB), Waterloo (WRDSB), and Thames Valley (TVDSB), as well as prominent private schools.',
        },
        {
          question: 'Are your tutors familiar with the new de-streamed Grade 9 math (MTH1W)?',
          answer: 'Yes. All our junior high school math tutors are trained in the revised single-stream MTH1W curriculum, including its integration of coding, mathematical modeling, and financial literacy.',
        },
        {
          question: 'How do you help students with the OSSLT (Ontario Secondary School Literacy Test)?',
          answer: 'Our English tutors provide targeted reading and writing preparation for the Grade 10 OSSLT, practicing short-answer responses, opinion essays, and graphic text interpretation to ensure students fulfill their graduation requirement.',
        },
        {
          question: 'Can the tutor communicate with my child’s classroom teacher?',
          answer: 'While direct communication with teachers is generally handled by parents, our tutors review the teacher’s written feedback, rubrics, and Google Classroom notes to ensure complete alignment with class goals.',
        },
      ],
    },
    relatedPages: {
      heading: 'Explore Ontario Subject & Course Offerings',
      items: [
        {
          title: 'Ontario Secondary Mathematics Hub',
          description: 'Course-specific tutoring for MHF4U, MCV4U, MCR3U, MDM4U, MPM2D, and MTH1W.',
          href: '/en/subjects/math',
          label: 'Math Courses',
        },
        {
          title: 'Senior High Chemistry & Physics',
          description: 'University preparation for SCH3U, SCH4U, SPH3U, and SPH4U science courses.',
          href: '/en/subjects/chemistry',
          label: 'Science Courses',
        },
        {
          title: 'How Our Tutoring Works',
          description: 'Learn about our assessment, matching, and ongoing progress reporting process.',
          href: '/en/how-it-works',
          label: 'How It Works',
        },
      ],
    },
    cta: {
      eyebrow: 'Give Your Student the Ontario Advantage',
      title: 'Partner with Mentors Who Truly Understand the Ontario Curriculum',
      description: 'Book your free trial session to discuss your student’s grade level, school board, and upcoming academic goals.',
      primaryAction: {
        label: 'Book a Free Trial Session',
        href: '/en/contact',
      },
      secondaryAction: {
        label: 'Contact Our Team',
        href: '/en/contact',
      },
    },
  },
};

export function getSeoGapPageContent(key: string): SeoGapPageContent {
  const page = seoGapPages[key];
  if (!page) {
    throw new Error(`SEO gap page content not found for key: ${key}`);
  }
  return page;
}
