import Image from 'next/image';

import {
  getLocale,
  getTranslations,
} from 'next-intl/server';

import {
  Link,
} from '@/i18n/navigation';

import {
  buttonVariants,
} from '@/components/ui/button';
import {
  Container,
} from '@/components/ui/container';
import {
  routePath,
} from '@/config/routes';
import {
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';
import {
  approvedChemistryStrands,
} from '@/content/subjects/chemistry/chemistry-strands';
import {
  approvedEnglishStrands,
} from '@/content/subjects/english/english-strands';
import {
  publicMathPathways,
} from '@/content/subjects/math/math-pathways';
import {
  approvedGeneralScienceStrands,
} from '@/content/subjects/general-science/general-science-strands';
import {
  approvedPhysicsStrands,
} from '@/content/subjects/physics/physics-strands';

import {
  LocaleSwitcher,
} from './locale-switcher';
import {
  MobileNav,
} from './mobile-nav';
import {
  SubjectsMenu,
  type SubjectCategory,
} from './subjects-menu';

const WHATSAPP_NUMBER =
  '16477875999';

const navigationCopy = {
  en: {
    subjects: 'Subjects',
    allSubjects:
      'View all subjects',
    math:
      'Mathematics',
    english:
      'English',
    chemistry:
      'Chemistry',
    physics:
      'Physics',
    generalScience:
      'General Science',
    frenchProgram:
      'Programme français',
    locations:
      'Locations',
    about:
      'About Us',
    howItWorks:
      'How It Works',
    packages:
      'Packages',
    primaryNavigation:
      'Primary navigation',
  },
  ar: {
    subjects: 'المواد الدراسية',
    allSubjects:
      'عرض جميع المواد الدراسية',
    math:
      'الرياضيات',
    english:
      'اللغة الإنجليزية',
    chemistry:
      'الكيمياء',
    physics:
      'الفيزياء',
    generalScience:
      'العلوم العامة',
    frenchProgram:
      'Programme français',
    locations:
      'المواقع',
    about:
      'من نحن',
    howItWorks:
      'آلية عمل المنصة',
    packages:
      'الباقات',
    primaryNavigation:
      'التنقل الرئيسي',
  },
} as const;

export async function SiteHeader() {
  const t =
    await getTranslations('nav');

  const locale =
    await getLocale();

  const currentLocale =
    locale === 'ar'
      ? 'ar'
      : 'en';

  const copy =
    navigationCopy[
      currentLocale
    ];

  const whatsappMessage =
    encodeURIComponent(
      t('whatsappBookingMessage')
    );

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const sectionLinks = [
    {
      href:
        routePath.programs(
          currentLocale
        ),
      label:
        t('programs'),
    },
    {
      href:
        routePath.services(
          currentLocale
        ),
      label:
        t('services'),
    },
    {
      href:
        routePath.packages(
          currentLocale
        ),
      label:
        copy.packages,
    },
    {
      href:
        routePath.howItWorks(
          currentLocale
        ),
      label:
        copy.howItWorks,
    },
    {
      href:
        routePath.locations(
          currentLocale
        ),
      label:
        copy.locations,
    },
    {
      href:
        routePath.about(
          currentLocale
        ),
      label:
        copy.about,
    },
    {
      href:
        routePath.faq(
          currentLocale
        ),
      label:
        t('faq'),
    },
  ];

  const subjectCategories:
    SubjectCategory[] = [
      {
        key: 'math',
        label:
          copy.math,
        href:
          routePath.subject(
            currentLocale,
            'math'
          ),
        children:
          publicMathPathways.map(
            (pathway) => ({
              label:
                pathway.title[
                  currentLocale
                ],
              href:
                routePath.mathPathway(
                  currentLocale,
                  pathway.slug
                ),
            })
          ),
      },
      {
        key: 'english',
        label:
          copy.english,
        href:
          routePath.subject(
            currentLocale,
            'english'
          ),
        children:
          approvedEnglishStrands.map(
            (strand) => ({
              label:
                strand.title[
                  currentLocale
                ],
              href:
                routePath.englishStrand(
                  currentLocale,
                  strand.slug
                ),
            })
          ),
      },
      {
        key: 'general-science',
        label:
          copy.generalScience,
        href:
          routePath.subject(
            currentLocale,
            'general-science'
          ),
        children:
          approvedGeneralScienceStrands.map(
            (strand) => ({
              label:
                strand.title[
                  currentLocale
                ],
              href:
                routePath.scienceStrand(
                  currentLocale,
                  'general-science',
                  strand.slug
                ),
            })
          ),
      },
      {
        key: 'chemistry',
        label:
          copy.chemistry,
        href:
          routePath.subject(
            currentLocale,
            'chemistry'
          ),
        children:
          approvedChemistryStrands.map(
            (strand) => ({
              label:
                strand.title[
                  currentLocale
                ],
              href:
                routePath.scienceStrand(
                  currentLocale,
                  'chemistry',
                  strand.slug
                ),
            })
          ),
      },
      {
        key: 'physics',
        label:
          copy.physics,
        href:
          routePath.subject(
            currentLocale,
            'physics'
          ),
        children:
          approvedPhysicsStrands.map(
            (strand) => ({
              label:
                strand.title[
                  currentLocale
                ],
              href:
                routePath.scienceStrand(
                  currentLocale,
                  'physics',
                  strand.slug
                ),
            })
          ),
      },
      {
        key: 'programme-francais',
        label:
          copy.frenchProgram,
        href:
          programmeFrancaisRoutes.home,
        children: [
          {
            label:
              'Français',
            href:
              programmeFrancaisRoutes.subject(
                'francais'
              ),
          },
          {
            label:
              'Mathématiques en français',
            href:
              programmeFrancaisRoutes.subject(
                'mathematiques-en-francais'
              ),
          },
        ],
      },
    ];

  const navLinkClass = [
    'group',
    'relative',
    'inline-flex',
    'min-h-touch',
    'items-center',
    'rounded-button',
    'px-2.5',
    'text-small',
    'font-bold',
    'text-muted-foreground',
    'transition-[color,background-color]',
    'duration-200',
    'hover:bg-muted',
    'hover:text-foreground',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-ring',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-background',
  ].join(' ');

  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-border/70
        bg-background/90
        shadow-xs
        backdrop-blur-xl
      "
    >
      <Container
        className="
          flex
          min-h-16
          items-center
          justify-between
          gap-3
          xl:min-h-20
        "
      >
        <Link
          href="/"
          aria-label={t('home')}
          className="
            group
            inline-flex
            shrink-0
            items-center
            rounded-button
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
          "
        >
          <Image
            src="/images/logo.png"
            alt="Mustafa Academy"
            width={160}
            height={47}
            priority
            sizes="(max-width: 1024px) 130px, 160px"
            className="
              h-8
              w-auto
              object-contain
              transition-transform
              duration-300
              ease-out
              group-hover:scale-[1.03]
              motion-reduce:transition-none
              motion-reduce:group-hover:scale-100
              xl:h-9
            "
          />
        </Link>

        <nav
          aria-label={
            copy.primaryNavigation
          }
          className="
            hidden
            items-center
            gap-0.5
            xl:flex
          "
        >
          <SubjectsMenu
            triggerLabel={
              copy.subjects
            }
            overviewHref={
              routePath.subjects(
                currentLocale
              )
            }
            overviewLabel={
              copy.allSubjects
            }
            categories={
              subjectCategories
            }
          />

          {sectionLinks.map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  navLinkClass
                }
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-3
                    bottom-1
                    h-0.5
                    origin-center
                    scale-x-0
                    rounded-full
                    bg-accent
                    transition-transform
                    duration-200
                    group-hover:scale-x-100
                  "
                />
              </a>
            )
          )}
        </nav>

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3
          "
        >
          <div className="hidden xl:block">
            <LocaleSwitcher />
          </div>

          <div className="xl:hidden">
            <LocaleSwitcher variant="compact" />
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={
              buttonVariants({
                variant: 'accent',
                size: 'sm',
                className:
                  'hidden 2xl:inline-flex',
              })
            }
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              className="
                h-4
                w-4
                shrink-0
              "
              aria-hidden="true"
            >
              <rect
                x="3"
                y="4"
                width="14"
                height="13"
                rx="2"
              />

              <path
                strokeLinecap="round"
                d="M3 8h14M7 2.5v3M13 2.5v3"
              />
            </svg>

            {t('bookFreeSession')}
          </a>

          <MobileNav
            sectionLinks={
              sectionLinks
            }
            homeLabel={
              t('home')
            }
            homeHref={
              routePath.home(
                currentLocale
              )
            }
            bookLabel={
              t('bookFreeSession')
            }
            bookingHref={
              whatsappHref
            }
            subjectsLabel={
              copy.subjects
            }
            subjectsOverviewHref={
              routePath.subjects(
                currentLocale
              )
            }
            subjectsOverviewLabel={
              copy.allSubjects
            }
            subjectCategories={
              subjectCategories
            }
            openMenuLabel={
              t('openMenu')
            }
            closeMenuLabel={
              t('closeMenu')
            }
          />
        </div>
      </Container>
    </header>
  );
}
