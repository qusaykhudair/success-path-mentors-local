import Image from 'next/image';
import { getDefaultMarket } from '@/config/markets';
import { getDefaultTelephoneHref } from '@/lib/market-display';
import { Phone } from 'lucide-react';

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
import { LocationsMenu } from './locations-menu';
import { locationNavigation } from '@/content/locations/location-navigation';
import { buildTrialLessonMessage, buildWhatsAppHref, WHATSAPP_DISPLAY_NUMBER } from '@/lib/whatsapp';

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
      'Our Locations',
    about:
      'About Us',
    howItWorks:
      'How It Works',
    packages:
      'Packages',
    primaryNavigation:
      'Primary navigation',
    login:
      'Log in',
    createAccount:
      'Sign up',
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
      'أين نحن',
    about:
      'من نحن',
    howItWorks:
      'آلية عمل المنصة',
    packages:
      'الباقات',
    primaryNavigation:
      'التنقل الرئيسي',
    login:
      'تسجيل الدخول',
    createAccount:
      'إنشاء حساب',
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

  const whatsappHref = buildWhatsAppHref(
    buildTrialLessonMessage(currentLocale)
  );

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
    'px-2',
    'text-[0.78rem]',
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
          gap-2
          xl:min-h-[4.5rem]
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
            alt="Success Path Mentors"
            width={145}
            height={47}
            priority
            sizes="(max-width: 1024px) 122px, 145px"
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
              xl:h-8
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
            flex-1
            justify-center
            gap-0
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

          <LocationsMenu
            triggerLabel={copy.locations}
            overviewHref={routePath.locations(currentLocale)}
            overviewLabel={currentLocale === 'ar' ? 'عرض جميع المواقع' : 'View all locations'}
            countries={locationNavigation}
            locale={currentLocale}
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
            href={routePath.login(currentLocale)}
            className="hidden min-h-touch items-center rounded-full border border-primary-200 bg-background px-4 text-[0.78rem] font-black text-primary shadow-xs transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 2xl:inline-flex"
          >
            {copy.login}
          </a>

          <a
            href={routePath.register(currentLocale)}
            className="hidden min-h-touch items-center rounded-full bg-accent px-4 text-[0.78rem] font-black text-primary-950 shadow-button-accent transition-colors hover:bg-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 2xl:inline-flex"
          >
            {copy.createAccount}
          </a>

          <a
            href={getDefaultTelephoneHref()}
            aria-label={currentLocale === 'ar' ? `اتصل بنا على الرقم ${getDefaultMarket().contact.phone}` : `Call us at ${getDefaultMarket().contact.phone}`}
            className="hidden items-center gap-1.5 rounded-full border border-border/70 bg-background px-2.5 py-2 text-[0.78rem] font-bold text-foreground shadow-xs transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 2xl:inline-flex"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-accent" />
            <span dir="ltr" className="whitespace-nowrap">{WHATSAPP_DISPLAY_NUMBER}</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={
              buttonVariants({
                variant: 'accent',
                size: 'sm',
                className:
                  'hidden min-[1680px]:inline-flex',
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
            locationsLabel={copy.locations}
            locationsOverviewHref={routePath.locations(currentLocale)}
            locationsOverviewLabel={currentLocale === 'ar' ? 'عرض جميع أماكن خدمتنا' : 'View all locations'}
            locationCountries={locationNavigation}
            locale={currentLocale}
            openMenuLabel={
              t('openMenu')
            }
            closeMenuLabel={
              t('closeMenu')
            }
            phoneLabel={currentLocale === 'ar' ? 'اتصل بنا' : 'Call us'}
            phoneNumber={WHATSAPP_DISPLAY_NUMBER}
            loginLabel={copy.login}
            loginHref={routePath.login(currentLocale)}
            registerLabel={copy.createAccount}
            registerHref={routePath.register(currentLocale)}
          />
        </div>
      </Container>
    </header>
  );
}
