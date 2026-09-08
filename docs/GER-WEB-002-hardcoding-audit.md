# GER-WEB-002 hardcoded-value audit

Scope: every matching line across the complete src directory, before and after adoption. A = business configuration/reference; B = localized marketing/help content; C = SEO/editorial content; D = form options/defaults; E = unrelated/type declarations.

Measurement: one occurrence is one matching source line containing a literal business value in A or D. Multiple literals on one line count once. Reference-only lines are classified but excluded from the reduction metric. Authoritative market values and retained contact-form options are included. This is not a count of all prose mentions.

**BEFORE: 84 business literal-bearing lines. AFTER: 40. Reduction: 44.**

| Classification | Before matching lines | After matching lines |
|---|---:|---:|
| A | 90 | 48 |ئ
| B | 9 | 9 |
| C | 758 | 758 |
| D | 28 | 20 |
| E | 38 | 38 |

Retained: fixed NA source values in markets.ts; registration label mapping; broader contact form country/curriculum/timezone options and distinct phone example; translated copy; location-specific SEO content; unrelated color/data matches. Existing siteConfig/CONTACT/WhatsApp references now use market-backed compatibility facades. The contact API still requires explicitly configured credentials and receives no market email fallback.

## Before: complete classified match inventory

| Source | Class | Literal counted | Reason | Match |
|---|---|---|---|---|
| src/app/fr/not-found.tsx:43 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/app/fr/programme-francais/error.tsx:57 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/app/llms.txt/route.ts:10 | C | no | Service-region descriptive copy | > One-to-one online tutoring for Grades 1–12 in Canada and the United States, with curriculum-aligned academic support and support for Arabic-speaking families. |
| src/app/llms.txt/route.ts:34 | C | no | Service-region descriptive copy | - Main service regions: Canada and the United States |
| src/app/llms.txt/route.ts:35 | A | yes | Business configuration or compatibility consumer | - Contact: successpathmentors@gmail.com \| +1 647 787 5999 |
| src/app/[locale]/(catalog)/locations/error.tsx:41 | E | no | Color, dataset number, or type declaration | className="mt-4 text-body leading-8 text-[#64748B]" |
| src/app/[locale]/(catalog)/subjects/chemistry/page.tsx:93 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/chemistry/[strand]/page.tsx:250 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/english/page.tsx:88 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/english/[strand]/page.tsx:232 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/general-science/page.tsx:93 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/general-science/[strand]/page.tsx:248 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/math/page.tsx:88 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/math/[pathway]/page.tsx:268 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/physics/page.tsx:93 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/physics/[strand]/page.tsx:250 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(marketing)/about/page.tsx:68 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim() \|\| |
| src/app/[locale]/(marketing)/about/page.tsx:72 | A | no | Business configuration or compatibility consumer | \`mailto:${siteConfig.email}\`; |
| src/app/[locale]/(marketing)/contact/page.tsx:65 | A | no | Business configuration or compatibility consumer | \`mailto:${siteConfig.email}\`; |
| src/app/[locale]/(marketing)/contact/page.tsx:102 | A | no | Business configuration or compatibility consumer | email: siteConfig.email, |
| src/app/[locale]/(marketing)/contact/page.tsx:107 | A | no | Business configuration or compatibility consumer | email: siteConfig.email, |
| src/app/[locale]/(marketing)/how-it-works/page.tsx:71 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim() \|\| |
| src/app/[locale]/(marketing)/tutor-matching/page.tsx:68 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim() \|\| |
| src/app/[locale]/layout.tsx:108 | A | yes | Business configuration or compatibility consumer | ? 'ar_CA' |
| src/app/[locale]/layout.tsx:109 | A | yes | Business configuration or compatibility consumer | : 'en_CA', |
| src/app/[locale]/layout.tsx:113 | A | yes | Business configuration or compatibility consumer | ? 'en_CA' |
| src/app/[locale]/layout.tsx:114 | A | yes | Business configuration or compatibility consumer | : 'ar_CA', |
| src/app/[locale]/layout.tsx:210 | A | yes | Business configuration or compatibility consumer | { '@type': 'Country', name: 'Canada' }, |
| src/app/[locale]/layout.tsx:211 | A | yes | Business configuration or compatibility consumer | { '@type': 'Country', name: 'United States' }, |
| src/app/[locale]/layout.tsx:216 | C | no | SEO descriptive copy | 'Canadian provincial curricula', |
| src/app/[locale]/layout.tsx:217 | C | no | SEO descriptive copy | 'United States state curricula', |
| src/app/[locale]/layout.tsx:230 | A | yes | Business configuration or compatibility consumer | telephone: '+1-647-787-5999', |
| src/app/[locale]/layout.tsx:231 | A | yes | Business configuration or compatibility consumer | email: 'successpathmentors@gmail.com', |
| src/app/[locale]/layout.tsx:233 | A | yes | Business configuration or compatibility consumer | areaServed: ['CA', 'US'], |
| src/app/[locale]/page.tsx:78 | A | yes | Business configuration or compatibility consumer | ? 'ar_CA' |
| src/app/[locale]/page.tsx:79 | A | yes | Business configuration or compatibility consumer | : 'en_CA'; |
| src/app/[locale]/page.tsx:83 | A | yes | Business configuration or compatibility consumer | ? 'en_CA' |
| src/app/[locale]/page.tsx:84 | A | yes | Business configuration or compatibility consumer | : 'ar_CA'; |
| src/components/contact/contact-form.tsx:24 | A | no | Business configuration or compatibility consumer | const PLATFORM_WHATSAPP_NUMBER = |
| src/components/contact/contact-form.tsx:25 | A | yes | Business configuration or compatibility consumer | '16477875999'; |
| src/components/contact/contact-form.tsx:242 | A | no | Business configuration or compatibility consumer | \`https://wa.me/${PLATFORM_WHATSAPP_NUMBER}\` + |
| src/components/layout/mobile-nav.tsx:819 | A | yes | Business configuration or compatibility consumer | href="tel:+16477875999" |
| src/components/layout/mobile-nav.tsx:827 | A | yes | Business configuration or compatibility consumer | href="tel:+16477875999" |
| src/components/layout/site-footer.tsx:30 | A | yes | Business configuration or compatibility consumer | 'successpathmentors@gmail.com'; |
| src/components/layout/site-footer.tsx:533 | A | yes | Business configuration or compatibility consumer | +1 647 787 5999 |
| src/components/layout/site-header.tsx:53 | A | no | Business configuration or compatibility consumer | import { buildTrialLessonMessage, buildWhatsAppHref, WHATSAPP_DISPLAY_NUMBER } from '@/lib/whatsapp'; |
| src/components/layout/site-header.tsx:528 | A | yes | Business configuration or compatibility consumer | href="tel:+16477875999" |
| src/components/layout/site-header.tsx:529 | A | yes | Business configuration or compatibility consumer | aria-label={currentLocale === 'ar' ? 'اتصل بنا على الرقم +1 647 787 5999' : 'Call us at +1 647 787 5999'} |
| src/components/layout/site-header.tsx:533 | A | no | Business configuration or compatibility consumer | <span dir="ltr" className="whitespace-nowrap">{WHATSAPP_DISPLAY_NUMBER}</span> |
| src/components/layout/site-header.tsx:622 | A | no | Business configuration or compatibility consumer | phoneNumber={WHATSAPP_DISPLAY_NUMBER} |
| src/components/locations/location-page-content.tsx:110 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim(); |
| src/components/locations/location-page-content.tsx:188 | E | no | Color, dataset number, or type declaration | className="mx-auto flex min-h-12 w-full max-w-[82rem] items-center gap-2 overflow-x-auto px-4 text-caption text-[#64748B] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6 lg:px-8" |
| src/components/locations/location-page-content.tsx:528 | E | no | Color, dataset number, or type declaration | className="mt-2 text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:588 | E | no | Color, dataset number, or type declaration | className="mt-3 text-small leading-7 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:608 | E | no | Color, dataset number, or type declaration | className="mt-2 text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:804 | E | no | Color, dataset number, or type declaration | className="mt-2 block text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:859 | E | no | Color, dataset number, or type declaration | className="mt-2 text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:1020 | E | no | Color, dataset number, or type declaration | className="mt-4 text-body leading-8 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:1062 | E | no | Color, dataset number, or type declaration | className="mt-2 text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:1108 | E | no | Color, dataset number, or type declaration | className="mt-3 text-small leading-7 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:1186 | E | no | Color, dataset number, or type declaration | className="mt-2 line-clamp-3 text-caption leading-6 text-[#64748B]" |
| src/components/programme-francais/french-domain-page-content.tsx:67 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-domain-page-content.tsx:488 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-domain-page-content.tsx:570 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-domain-page-content.tsx:798 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-domain-page-content.tsx:845 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-program-footer.tsx:195 | A | yes | Business configuration or compatibility consumer | href="mailto:successpathmentors@gmail.com" |
| src/components/programme-francais/french-program-footer.tsx:211 | A | yes | Business configuration or compatibility consumer | successpathmentors@gmail.com |
| src/components/programme-francais/french-program-overview.tsx:345 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-program-overview.tsx:455 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-program-overview.tsx:605 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-reference-resources.tsx:42 | E | no | Color, dataset number, or type declaration | <p className="mt-4 text-body leading-8 text-[#64748B]"> |
| src/components/programme-francais/french-reference-resources.tsx:80 | E | no | Color, dataset number, or type declaration | <p className="mt-3 text-caption leading-6 text-[#64748B]"> |
| src/components/programme-francais/french-subject-overview.tsx:58 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-subject-overview.tsx:367 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-subject-overview.tsx:484 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/english/english-strand-grid.tsx:232 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/english/english-strand-grid.tsx:247 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/english/english-strand-grid.tsx:295 | E | no | Color, dataset number, or type declaration | : 'bg-[#F1F5F9] text-[#64748B]' |
| src/components/subjects/english/english-strand-grid.tsx:315 | E | no | Color, dataset number, or type declaration | : 'bg-[#F1F5F9] text-[#64748B]' |
| src/components/subjects/english/english-strand-page-content.tsx:670 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/math/math-pathway-page-content.tsx:803 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/math/math-pathway-page-content.tsx:986 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/science/science-strand-page-content.tsx:746 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/subjects-page-content.tsx:392 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/subjects-page-content.tsx:712 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/config/legal.ts:6 | A | no | Business configuration or compatibility consumer | contactEmail: siteConfig.email, |
| src/config/markets.ts:3 | A | no | Business configuration or compatibility consumer | import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_NUMBER } from '../lib/whatsapp'; |
| src/config/markets.ts:9 | A | yes | Business configuration or compatibility consumer | export type CountryCode = 'CA' \| 'US' \| 'DE'; |
| src/config/markets.ts:10 | E | no | Color, dataset number, or type declaration | export type CurrencyCode = 'CAD' \| 'EUR'; |
| src/config/markets.ts:68 | A | yes | Business configuration or compatibility consumer | defaultCountry: 'CA', |
| src/config/markets.ts:69 | A | yes | Business configuration or compatibility consumer | supportedCountries: ['CA', 'US'], |
| src/config/markets.ts:70 | A | yes | Business configuration or compatibility consumer | defaultTimezone: 'America/Toronto', |
| src/config/markets.ts:73 | A | yes | Business configuration or compatibility consumer | 'America/Toronto', 'America/Vancouver', 'America/Edmonton', |
| src/config/markets.ts:79 | A | yes | Business configuration or compatibility consumer | currency: 'CAD', |
| src/config/markets.ts:81 | A | no | Business configuration or compatibility consumer | email: siteConfig.email, |
| src/config/markets.ts:82 | A | no | Business configuration or compatibility consumer | phone: CONTACT.phone, |
| src/config/markets.ts:83 | A | no | Business configuration or compatibility consumer | whatsapp: WHATSAPP_NUMBER, |
| src/config/markets.ts:84 | A | no | Business configuration or compatibility consumer | whatsappDisplay: WHATSAPP_DISPLAY_NUMBER, |
| src/config/markets.ts:86 | A | yes | Business configuration or compatibility consumer | seo: { region: 'CA', locales: { en: 'en_CA', ar: 'ar_CA' } }, |
| src/config/markets.ts:89 | A | no | Business configuration or compatibility consumer | { '@type': 'Country', name: CONTACT.country }, |
| src/config/markets.ts:90 | A | yes | Business configuration or compatibility consumer | { '@type': 'Country', name: 'United States' }, |
| src/config/markets.ts:97 | A | no | Business configuration or compatibility consumer | countryValue: CONTACT.country, |
| src/config/markets.ts:99 | A | yes | Business configuration or compatibility consumer | phonePlaceholder: '+1 647 000 0000', |
| src/config/markets.ts:100 | A | no | Business configuration or compatibility consumer | bookingUrl: siteConfig.bookingUrl, |
| src/config/site.ts:26 | A | yes | Business configuration or compatibility consumer | 'successpathmentors@gmail.com', |
| src/content/locations/location-navigation.ts:9 | B | no | Localized location navigation labels | "en": "Canada", |
| src/content/locations/location-navigation.ts:583 | B | no | Localized location navigation labels | "en": "United States", |
| src/content/locations/location-pages.ts:32 | C | no | Location-specific page/SEO content | "en": "Online Tutoring Across Canada and the United States \| Success Path Mentors", |
| src/content/locations/location-pages.ts:63 | C | no | Location-specific page/SEO content | "en": "Online Tutoring Across Canada and the United States", |
| src/content/locations/location-pages.ts:311 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:401 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:423 | C | no | Location-specific page/SEO content | "en": "Canada", |
| src/content/locations/location-pages.ts:427 | C | no | Location-specific page/SEO content | "en": "Canada", |
| src/content/locations/location-pages.ts:436 | C | no | Location-specific page/SEO content | "en": "Online Tutoring in Canada for Grades 1–12 \| Success Path Mentors", |
| src/content/locations/location-pages.ts:440 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across Canada, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:444 | C | no | Location-specific page/SEO content | "en": "online tutoring in Canada", |
| src/content/locations/location-pages.ts:449 | C | no | Location-specific page/SEO content | "online tutoring in Canada", |
| src/content/locations/location-pages.ts:450 | C | no | Location-specific page/SEO content | "math tutoring Canada", |
| src/content/locations/location-pages.ts:451 | C | no | Location-specific page/SEO content | "Arabic-speaking tutor Canada", |
| src/content/locations/location-pages.ts:452 | C | no | Location-specific page/SEO content | "Grades 1–12 tutoring Canada" |
| src/content/locations/location-pages.ts:462 | C | no | Location-specific page/SEO content | "en": "Online tutoring for students in Canada", |
| src/content/locations/location-pages.ts:467 | C | no | Location-specific page/SEO content | "en": "Online Tutoring in Canada for Grades 1–12", |
| src/content/locations/location-pages.ts:471 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across Canada, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:489 | C | no | Location-specific page/SEO content | "en": "Tutoring support designed for students in Canada", |
| src/content/locations/location-pages.ts:493 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across Canada, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:497 | C | no | Location-specific page/SEO content | "en": "Online tutoring services in Canada", |
| src/content/locations/location-pages.ts:551 | C | no | Location-specific page/SEO content | "en": "Subject tutoring in Canada", |
| src/content/locations/location-pages.ts:561 | C | no | Location-specific page/SEO content | "en": "Mathematics in Canada", |
| src/content/locations/location-pages.ts:573 | C | no | Location-specific page/SEO content | "en": "English in Canada", |
| src/content/locations/location-pages.ts:585 | C | no | Location-specific page/SEO content | "en": "General Science in Canada", |
| src/content/locations/location-pages.ts:597 | C | no | Location-specific page/SEO content | "en": "Chemistry in Canada", |
| src/content/locations/location-pages.ts:609 | C | no | Location-specific page/SEO content | "en": "Physics in Canada", |
| src/content/locations/location-pages.ts:621 | C | no | Location-specific page/SEO content | "en": "Canada Education Systems support", |
| src/content/locations/location-pages.ts:653 | C | no | Location-specific page/SEO content | "en": "Canada school and course assessments", |
| src/content/locations/location-pages.ts:715 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:728 | C | no | Location-specific page/SEO content | "en": "Education and family context in Canada", |
| src/content/locations/location-pages.ts:737 | C | no | Location-specific page/SEO content | "Online tutoring serves students throughout Canada; no physical branch is implied.", |
| src/content/locations/location-pages.ts:751 | C | no | Location-specific page/SEO content | "en": "Frequently asked questions about tutoring in Canada", |
| src/content/locations/location-pages.ts:761 | C | no | Location-specific page/SEO content | "en": "Do you provide online tutoring for students in Canada?", |
| src/content/locations/location-pages.ts:765 | C | no | Location-specific page/SEO content | "en": "Yes. Success Path Mentors serves students in Canada online, with tutor matching based on grade, subject, curriculum, availability, and learning needs.", |
| src/content/locations/location-pages.ts:771 | C | no | Location-specific page/SEO content | "en": "Can tutors support the Canada curriculum?", |
| src/content/locations/location-pages.ts:805 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:1123 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:1213 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:1522 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:1612 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:1916 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:2006 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:2310 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:2400 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:2704 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:2794 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:3098 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:3188 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:3492 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:3582 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:3886 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:3976 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:4280 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:4370 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:4674 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:4764 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:5068 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:5158 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:5462 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:5552 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:5867 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:5957 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:6266 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:6356 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:6660 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:6750 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:7054 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:7144 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:7448 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:7538 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:7842 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:7932 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:8236 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:8326 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:8630 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:8720 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:9024 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:9114 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:9427 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:9517 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:9825 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:9915 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:10219 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:10309 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:10613 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:10703 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:11007 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:11097 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:11401 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:11491 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:11795 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:11885 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:12200 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:12290 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:12599 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:12689 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:12993 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:13083 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:13387 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:13477 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:13781 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:13871 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:14175 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:14265 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:14569 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:14659 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:14963 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:15053 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:15357 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:15447 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:15757 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:15847 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:16153 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:16243 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:16547 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:16637 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:16941 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:17031 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:17335 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:17425 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:17735 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:17825 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:18131 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:18221 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:18525 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:18615 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:18919 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:19009 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:19313 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:19403 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:19713 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:19803 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:20109 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:20199 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:20503 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:20593 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:20897 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:20987 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:21291 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:21381 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:21691 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:21781 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:22087 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:22177 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:22481 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:22571 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:22875 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:22965 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:23269 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:23359 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:23669 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:23759 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:24065 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:24155 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:24459 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:24549 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:24853 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:24943 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:25247 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:25337 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:25645 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:25735 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:26040 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:26130 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:26434 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:26524 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:26828 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:26918 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:27224 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:27314 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:27618 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:27708 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:28012 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:28102 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:28408 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:28498 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:28802 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:28892 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:29196 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:29286 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:29592 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:29682 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:29986 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:30076 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:30380 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:30470 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:30529 | C | no | Location-specific page/SEO content | "en": "United States", |
| src/content/locations/location-pages.ts:30533 | C | no | Location-specific page/SEO content | "en": "United States", |
| src/content/locations/location-pages.ts:30542 | C | no | Location-specific page/SEO content | "en": "Online Tutoring in United States for Grades 1–12 \| Success Path Mentors", |
| src/content/locations/location-pages.ts:30546 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across United States, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:30550 | C | no | Location-specific page/SEO content | "en": "online tutoring in United States", |
| src/content/locations/location-pages.ts:30555 | C | no | Location-specific page/SEO content | "online tutoring in United States", |
| src/content/locations/location-pages.ts:30556 | C | no | Location-specific page/SEO content | "math tutoring United States", |
| src/content/locations/location-pages.ts:30557 | C | no | Location-specific page/SEO content | "Arabic-speaking tutor United States", |
| src/content/locations/location-pages.ts:30558 | C | no | Location-specific page/SEO content | "Grades 1–12 tutoring United States" |
| src/content/locations/location-pages.ts:30568 | C | no | Location-specific page/SEO content | "en": "Online tutoring for students in United States", |
| src/content/locations/location-pages.ts:30573 | C | no | Location-specific page/SEO content | "en": "Online Tutoring in United States for Grades 1–12", |
| src/content/locations/location-pages.ts:30577 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across United States, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:30595 | C | no | Location-specific page/SEO content | "en": "Tutoring support designed for students in United States", |
| src/content/locations/location-pages.ts:30599 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across United States, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:30603 | C | no | Location-specific page/SEO content | "en": "Online tutoring services in United States", |
| src/content/locations/location-pages.ts:30657 | C | no | Location-specific page/SEO content | "en": "Subject tutoring in United States", |
| src/content/locations/location-pages.ts:30667 | C | no | Location-specific page/SEO content | "en": "Mathematics in United States", |
| src/content/locations/location-pages.ts:30679 | C | no | Location-specific page/SEO content | "en": "English in United States", |
| src/content/locations/location-pages.ts:30691 | C | no | Location-specific page/SEO content | "en": "General Science in United States", |
| src/content/locations/location-pages.ts:30703 | C | no | Location-specific page/SEO content | "en": "Chemistry in United States", |
| src/content/locations/location-pages.ts:30715 | C | no | Location-specific page/SEO content | "en": "Physics in United States", |
| src/content/locations/location-pages.ts:30727 | C | no | Location-specific page/SEO content | "en": "United States Education Systems support", |
| src/content/locations/location-pages.ts:30759 | C | no | Location-specific page/SEO content | "en": "United States school and course assessments", |
| src/content/locations/location-pages.ts:30821 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:30834 | C | no | Location-specific page/SEO content | "en": "Education and family context in United States", |
| src/content/locations/location-pages.ts:30843 | C | no | Location-specific page/SEO content | "Online tutoring serves students throughout United States; no physical branch is implied.", |
| src/content/locations/location-pages.ts:30857 | C | no | Location-specific page/SEO content | "en": "Frequently asked questions about tutoring in United States", |
| src/content/locations/location-pages.ts:30867 | C | no | Location-specific page/SEO content | "en": "Do you provide online tutoring for students in United States?", |
| src/content/locations/location-pages.ts:30871 | C | no | Location-specific page/SEO content | "en": "Yes. Success Path Mentors serves students in United States online, with tutor matching based on grade, subject, curriculum, availability, and learning needs.", |
| src/content/locations/location-pages.ts:30877 | C | no | Location-specific page/SEO content | "en": "Can tutors support the United States curriculum?", |
| src/content/locations/location-pages.ts:30911 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:31221 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:31311 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:31617 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:31707 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:32011 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:32101 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:32405 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:32495 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:32799 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:32889 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:33199 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:33289 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:33595 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:33685 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:33989 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:34079 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:34383 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:34473 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:34777 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:34867 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:35177 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:35267 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:35573 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:35663 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:35967 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:36057 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:36361 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:36451 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:36755 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:36845 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:37155 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:37245 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:37551 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:37641 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:37945 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:38035 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:38339 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:38429 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:38733 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:38823 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:39138 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:39228 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:39537 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:39627 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:39931 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:40021 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:40325 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:40415 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:40719 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:40809 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:41113 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:41203 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:41507 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:41597 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:41901 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:41991 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:42295 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:42385 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:42695 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:42785 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:43091 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:43181 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:43485 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:43575 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:43879 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:43969 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:44273 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:44363 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:44673 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:44763 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:45069 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:45159 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:45463 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:45553 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:45857 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:45947 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:46251 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:46341 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:46651 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:46741 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:47047 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:47137 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:47441 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:47531 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:47835 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:47925 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:48229 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:48319 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:48632 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:48722 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:49030 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:49120 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:49424 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:49514 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:49818 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:49908 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:50212 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:50302 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:50606 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:50696 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:51000 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:51090 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:51400 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:51490 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:51796 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:51886 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:52190 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:52280 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:52584 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:52674 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:52978 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:53068 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:53378 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:53468 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:53774 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:53864 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:54168 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:54258 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:54562 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:54652 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:54956 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:55046 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:55356 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:55446 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:55752 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:55842 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:56146 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:56236 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:56540 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:56630 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:56934 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:57024 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:57336 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:57426 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:57733 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:57823 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:58127 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:58217 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:58521 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:58611 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:58915 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:59005 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:59309 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:59399 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:59709 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:59799 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:60105 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:60195 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:60499 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:60589 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:60893 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:60983 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:61287 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:61377 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:61687 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:61777 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:62083 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:62173 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:62477 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:62567 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:62871 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:62961 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:63265 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:63355 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:63665 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:63755 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:64061 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:64151 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:64455 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:64545 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:64849 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:64939 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:65243 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:65333 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:65643 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:65733 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:66039 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:66129 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:66433 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:66523 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:66827 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:66917 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:67221 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:67311 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:67621 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:67711 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:68017 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:68107 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:68411 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:68501 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:68805 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:68895 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:69199 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:69289 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:69599 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:69689 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:69995 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:70085 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:70389 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:70479 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:70783 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:70873 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:71177 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:71267 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:71579 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:71669 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:71976 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:72066 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:72370 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:72460 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:72764 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:72854 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:73158 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:73248 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:73552 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:73642 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:73952 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:74042 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:74348 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:74438 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:74742 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:74832 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:75136 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:75226 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:75530 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:75620 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:75933 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:76023 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:76331 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:76421 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:76725 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:76815 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:77119 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:77209 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:77513 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:77603 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:77907 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:77997 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:78301 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:78391 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:78701 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:78791 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:79097 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:79187 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:79491 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:79581 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:79885 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:79975 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:80279 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:80369 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:80679 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:80769 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:81075 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:81165 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:81469 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:81559 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:81863 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:81953 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:82257 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:82347 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:82657 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:82747 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:83053 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:83143 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:83447 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:83537 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:83841 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:83931 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:84235 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:84325 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:84635 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:84725 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:85031 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:85121 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:85425 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:85515 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:85819 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:85909 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:86213 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:86303 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:86613 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:86703 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:87009 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:87099 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:87403 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:87493 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:87797 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:87887 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:88191 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:88281 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:88591 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:88681 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:88987 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:89077 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:89381 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:89471 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:89775 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:89865 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:90169 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:90259 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:90569 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:90659 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:90965 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:91055 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:91359 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:91449 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:91753 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:91843 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:92147 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:92237 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:92550 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:92640 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:92948 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:93038 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:93342 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:93432 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:93736 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:93826 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:94130 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:94220 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:94524 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:94614 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:94918 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:95008 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:95318 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:95408 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:95714 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:95804 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:96108 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:96198 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:96502 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:96592 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:96896 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:96986 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:97299 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:97389 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:97697 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:97787 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:98091 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:98181 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:98485 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:98575 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:98879 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:98969 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:99273 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:99363 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:99667 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:99757 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:100067 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:100157 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:100463 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:100553 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:100857 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:100947 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:101251 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:101341 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:101645 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:101735 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:102045 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:102135 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:102441 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:102531 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:102835 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:102925 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:103229 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:103319 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:103623 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:103713 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:104025 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:104115 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:104422 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:104512 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:104816 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:104906 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:105210 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:105300 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:105604 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:105694 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:105998 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:106088 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:106398 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:106488 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:106794 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:106884 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:107188 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:107278 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:107582 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:107672 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:107976 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:108066 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:108376 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:108466 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:108772 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:108862 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:109166 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:109256 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:109560 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:109650 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:109954 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:110044 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:110354 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:110444 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:110750 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:110840 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:111144 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:111234 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:111538 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:111628 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:111932 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:112022 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:112332 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:112422 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:112728 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:112818 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:113122 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:113212 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:113516 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:113606 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:113910 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:114000 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:114310 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:114400 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:114706 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:114796 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:115100 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:115190 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:115494 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:115584 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:115888 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:115978 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:116288 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:116378 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:116684 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:116774 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:117078 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:117168 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:117472 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:117562 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:117866 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:117956 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:118266 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:118356 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:118662 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:118752 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:119056 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:119146 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:119450 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:119540 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:119844 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:119934 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:120247 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:120337 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:120645 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:120735 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:121039 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:121129 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:121433 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:121523 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:121827 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:121917 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:122221 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:122311 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:122615 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:122705 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:123015 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:123105 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:123411 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:123501 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:123805 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:123895 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:124199 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:124289 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:124593 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:124683 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:124993 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:125083 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:125389 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:125479 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:125783 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:125873 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:126177 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:126267 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:126571 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:126661 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:126974 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:127064 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:127372 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:127462 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:127766 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:127856 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:128160 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:128250 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:128554 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:128644 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:128948 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:129038 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:129342 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:129432 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:129742 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:129832 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:130138 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:130228 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:130532 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:130622 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:130926 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:131016 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:131320 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:131410 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:131720 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:131810 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:132116 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:132206 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:132510 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:132600 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:132904 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:132994 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:133298 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:133388 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:133698 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:133788 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:134094 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:134184 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:134488 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:134578 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:134882 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:134972 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:135276 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:135366 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:135676 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:135766 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:136072 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:136162 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:136466 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:136556 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:136860 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:136950 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:137254 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/pages/contact.ts:198 | B | no | Translated prose/example | 'Messages are sent directly to successpathmentors@gmail.com. Replies are sent to the email or telephone details entered below.', |
| src/content/pages/contact.ts:240 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | phone: '+1 000 000 0000', |
| src/content/pages/contact.ts:252 | B | no | Translated prose/example | 'Example: Toronto, Canada', |
| src/content/pages/contact.ts:445 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'Canadian Curriculum - Other Province', |
| src/content/pages/contact.ts:447 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'Canadian curriculum — another province or territory', |
| src/content/pages/contact.ts:450 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'United States / Common Core', |
| src/content/pages/contact.ts:452 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'United States / Common Core', |
| src/content/pages/contact.ts:504 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'Canada', |
| src/content/pages/contact.ts:505 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | label: 'Canada', |
| src/content/pages/contact.ts:508 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'United States', |
| src/content/pages/contact.ts:509 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | label: 'United States', |
| src/content/pages/contact.ts:701 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | label: 'Canada', |
| src/content/pages/contact.ts:717 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'America/Toronto', |
| src/content/pages/contact.ts:719 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'Eastern Time — Toronto (America/Toronto)', |
| src/content/pages/contact.ts:743 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'United States', |
| src/content/pages/contact.ts:1050 | A | yes | Fixed direct-contact display email | 'successpathmentors@gmail.com', |
| src/content/pages/contact.ts:1112 | B | no | Translated prose/example | 'تصل الرسائل مباشرة إلى successpathmentors@gmail.com، ويتم الرد على البريد أو رقم التواصل الذي تدخله.', |
| src/content/pages/contact.ts:1156 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | phone: '+1 000 000 0000', |
| src/content/pages/contact.ts:1360 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'Canadian Curriculum - Other Province', |
| src/content/pages/contact.ts:1365 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'United States / Common Core', |
| src/content/pages/contact.ts:1419 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'Canada', |
| src/content/pages/contact.ts:1423 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'United States', |
| src/content/pages/contact.ts:1634 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'America/Toronto', |
| src/content/pages/contact.ts:1636 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'التوقيت الشرقي — تورونتو (America/Toronto)', |
| src/content/pages/contact.ts:1968 | A | yes | Fixed direct-contact display email | 'successpathmentors@gmail.com', |
| src/content/subjects/english/data/grammar-language-conventions.json:4608 | E | no | Color, dataset number, or type declaration | 647, |
| src/features/auth/auth-copy.ts:41 | B | no | Translated authentication example/help text | identifierPlaceholder: 'name@example.com or +1 647 000 0000', |
| src/features/auth/auth-copy.ts:78 | B | no | Translated authentication example/help text | contactHint: 'Include the country code, for example +1 647 000 0000.', |
| src/features/auth/auth-copy.ts:155 | B | no | Translated authentication example/help text | identifierPlaceholder: 'name@example.com أو +1 647 000 0000', |
| src/features/auth/auth-copy.ts:192 | B | no | Translated authentication example/help text | contactHint: 'أدخل رمز الدولة، مثال: +1 647 000 0000.', |
| src/features/auth/registration-form.tsx:85 | D | yes | Registration defaults/options: preserve API names, Other, and browser timezone | ['Canada', 'كندا'], |
| src/features/auth/registration-form.tsx:86 | D | yes | Registration defaults/options: preserve API names, Other, and browser timezone | ['United States', 'الولايات المتحدة'], |
| src/features/auth/registration-form.tsx:101 | D | yes | Registration defaults/options: preserve API names, Other, and browser timezone | 'America/Toronto', |
| src/features/auth/registration-form.tsx:232 | D | yes | Registration defaults/options: preserve API names, Other, and browser timezone | return Intl.DateTimeFormat().resolvedOptions().timeZone \|\| 'America/Toronto'; |
| src/features/auth/registration-form.tsx:234 | D | yes | Registration defaults/options: preserve API names, Other, and browser timezone | return 'America/Toronto'; |
| src/features/auth/registration-form.tsx:257 | D | yes | Registration defaults/options: preserve API names, Other, and browser timezone | country: 'Canada', |
| src/features/auth/registration-form.tsx:588 | D | yes | Registration defaults/options: preserve API names, Other, and browser timezone | <input id="whatsapp" type="tel" autoComplete="tel" dir="ltr" placeholder="+1 647 000 0000" aria-invalid={Boolean(form.formState.errors.whatsapp)} aria-describedby="whatsapp-hint whatsapp-error" className={cn(authInputClass, 'ps-12')} {...form.register('whatsapp')} /> |
| src/features/auth/registration-form.tsx:594 | D | yes | Registration defaults/options: preserve API names, Other, and browser timezone | <input id="telephone" type="tel" autoComplete="tel" dir="ltr" placeholder="+1 647 000 0000" aria-invalid={Boolean(form.formState.errors.telephone)} aria-describedby="telephone-hint telephone-error" className={authInputClass} {...form.register('telephone')} /> |
| src/lib/constants.ts:42 | C | no | SEO descriptive copy | 'Success Path Mentors provides one-to-one online tutoring for Grades 1–12, with curriculum-aligned support for families in Canada and the United States, including Arabic-speaking families and students transitioning between education systems.', |
| src/lib/constants.ts:93 | A | yes | Business configuration or compatibility consumer | phone: '+1 647 787 5999', |
| src/lib/constants.ts:95 | A | yes | Business configuration or compatibility consumer | whatsapp: '+1 647 787 5999', |
| src/lib/constants.ts:97 | A | yes | Business configuration or compatibility consumer | email: 'successpathmentors@gmail.com', |
| src/lib/constants.ts:103 | A | yes | Business configuration or compatibility consumer | country: 'Canada', |
| src/lib/locations/metadata.ts:18 | A | yes | Business configuration or compatibility consumer | countryCode?: 'CA' \| 'US' |
| src/lib/locations/metadata.ts:20 | A | yes | Business configuration or compatibility consumer | if (countryCode === 'US') { |
| src/lib/locations/metadata.ts:26 | A | yes | Business configuration or compatibility consumer | if (countryCode === 'CA') { |
| src/lib/locations/metadata.ts:37 | A | yes | Business configuration or compatibility consumer | countryCode?: 'CA' \| 'US' |
| src/lib/locations/metadata.ts:40 | A | yes | Business configuration or compatibility consumer | countryCode === 'US' |
| src/lib/locations/metadata.ts:41 | A | yes | Business configuration or compatibility consumer | ? 'US' |
| src/lib/locations/metadata.ts:42 | A | yes | Business configuration or compatibility consumer | : 'CA'; |
| src/lib/programme-francais/routes.ts:40 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim(); |
| src/lib/seo/english-subject-schema.ts:36 | A | yes | Business configuration or compatibility consumer | 'Canada', |
| src/lib/seo/english-subject-schema.ts:37 | A | yes | Business configuration or compatibility consumer | 'United States', |
| src/lib/seo/metadata.ts:18 | A | yes | Business configuration or compatibility consumer | ? 'ar_CA' |
| src/lib/seo/metadata.ts:19 | A | yes | Business configuration or compatibility consumer | : 'en_CA'; |
| src/lib/seo/metadata.ts:26 | A | yes | Business configuration or compatibility consumer | ? 'en_CA' |
| src/lib/seo/metadata.ts:27 | A | yes | Business configuration or compatibility consumer | : 'ar_CA'; |
| src/lib/whatsapp.ts:3 | A | yes | Business configuration or compatibility consumer | export const WHATSAPP_NUMBER = '16477875999'; |
| src/lib/whatsapp.ts:4 | A | yes | Business configuration or compatibility consumer | export const WHATSAPP_DISPLAY_NUMBER = '+1 647 787 5999'; |
| src/lib/whatsapp.ts:9 | A | no | Business configuration or compatibility consumer | return \`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}\`; |
| src/types/location.ts:6 | A | yes | Business configuration or compatibility consumer | \| 'CA' |
| src/types/location.ts:7 | A | yes | Business configuration or compatibility consumer | \| 'US'; |

## After: complete classified match inventory

| Source | Class | Literal counted | Reason | Match |
|---|---|---|---|---|
| src/app/fr/not-found.tsx:43 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/app/fr/programme-francais/error.tsx:57 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/app/llms.txt/route.ts:11 | C | no | Service-region descriptive copy | > One-to-one online tutoring for Grades 1–12 in Canada and the United States, with curriculum-aligned academic support and support for Arabic-speaking families. |
| src/app/llms.txt/route.ts:35 | C | no | Service-region descriptive copy | - Main service regions: Canada and the United States |
| src/app/[locale]/(catalog)/locations/error.tsx:41 | E | no | Color, dataset number, or type declaration | className="mt-4 text-body leading-8 text-[#64748B]" |
| src/app/[locale]/(catalog)/subjects/chemistry/page.tsx:93 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/chemistry/[strand]/page.tsx:250 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/english/page.tsx:88 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/english/[strand]/page.tsx:232 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/general-science/page.tsx:93 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/general-science/[strand]/page.tsx:248 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/math/page.tsx:88 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/math/[pathway]/page.tsx:268 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/physics/page.tsx:93 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(catalog)/subjects/physics/[strand]/page.tsx:250 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl |
| src/app/[locale]/(marketing)/about/page.tsx:68 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim() \|\| |
| src/app/[locale]/(marketing)/about/page.tsx:72 | A | no | Business configuration or compatibility consumer | \`mailto:${siteConfig.email}\`; |
| src/app/[locale]/(marketing)/contact/page.tsx:65 | A | no | Business configuration or compatibility consumer | \`mailto:${siteConfig.email}\`; |
| src/app/[locale]/(marketing)/contact/page.tsx:102 | A | no | Business configuration or compatibility consumer | email: siteConfig.email, |
| src/app/[locale]/(marketing)/contact/page.tsx:107 | A | no | Business configuration or compatibility consumer | email: siteConfig.email, |
| src/app/[locale]/(marketing)/how-it-works/page.tsx:71 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim() \|\| |
| src/app/[locale]/(marketing)/tutor-matching/page.tsx:68 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim() \|\| |
| src/app/[locale]/layout.tsx:210 | C | no | SEO descriptive copy | 'Canadian provincial curricula', |
| src/app/[locale]/layout.tsx:211 | C | no | SEO descriptive copy | 'United States state curricula', |
| src/components/contact/contact-form.tsx:4 | A | no | Business configuration or compatibility consumer | import { WHATSAPP_NUMBER } from '@/lib/whatsapp'; |
| src/components/contact/contact-form.tsx:240 | A | no | Business configuration or compatibility consumer | \`https://wa.me/${WHATSAPP_NUMBER}\` + |
| src/components/layout/site-header.tsx:55 | A | no | Business configuration or compatibility consumer | import { buildTrialLessonMessage, buildWhatsAppHref, WHATSAPP_DISPLAY_NUMBER } from '@/lib/whatsapp'; |
| src/components/layout/site-header.tsx:535 | A | no | Business configuration or compatibility consumer | <span dir="ltr" className="whitespace-nowrap">{WHATSAPP_DISPLAY_NUMBER}</span> |
| src/components/layout/site-header.tsx:624 | A | no | Business configuration or compatibility consumer | phoneNumber={WHATSAPP_DISPLAY_NUMBER} |
| src/components/locations/location-page-content.tsx:110 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim(); |
| src/components/locations/location-page-content.tsx:188 | E | no | Color, dataset number, or type declaration | className="mx-auto flex min-h-12 w-full max-w-[82rem] items-center gap-2 overflow-x-auto px-4 text-caption text-[#64748B] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6 lg:px-8" |
| src/components/locations/location-page-content.tsx:528 | E | no | Color, dataset number, or type declaration | className="mt-2 text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:588 | E | no | Color, dataset number, or type declaration | className="mt-3 text-small leading-7 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:608 | E | no | Color, dataset number, or type declaration | className="mt-2 text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:804 | E | no | Color, dataset number, or type declaration | className="mt-2 block text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:859 | E | no | Color, dataset number, or type declaration | className="mt-2 text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:1020 | E | no | Color, dataset number, or type declaration | className="mt-4 text-body leading-8 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:1062 | E | no | Color, dataset number, or type declaration | className="mt-2 text-caption leading-6 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:1108 | E | no | Color, dataset number, or type declaration | className="mt-3 text-small leading-7 text-[#64748B]" |
| src/components/locations/location-page-content.tsx:1186 | E | no | Color, dataset number, or type declaration | className="mt-2 line-clamp-3 text-caption leading-6 text-[#64748B]" |
| src/components/programme-francais/french-domain-page-content.tsx:67 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-domain-page-content.tsx:488 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-domain-page-content.tsx:570 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-domain-page-content.tsx:798 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-domain-page-content.tsx:845 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-program-overview.tsx:345 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-program-overview.tsx:455 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-program-overview.tsx:605 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-reference-resources.tsx:42 | E | no | Color, dataset number, or type declaration | <p className="mt-4 text-body leading-8 text-[#64748B]"> |
| src/components/programme-francais/french-reference-resources.tsx:80 | E | no | Color, dataset number, or type declaration | <p className="mt-3 text-caption leading-6 text-[#64748B]"> |
| src/components/programme-francais/french-subject-overview.tsx:58 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-subject-overview.tsx:367 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/programme-francais/french-subject-overview.tsx:484 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/english/english-strand-grid.tsx:232 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/english/english-strand-grid.tsx:247 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/english/english-strand-grid.tsx:295 | E | no | Color, dataset number, or type declaration | : 'bg-[#F1F5F9] text-[#64748B]' |
| src/components/subjects/english/english-strand-grid.tsx:315 | E | no | Color, dataset number, or type declaration | : 'bg-[#F1F5F9] text-[#64748B]' |
| src/components/subjects/english/english-strand-page-content.tsx:670 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/math/math-pathway-page-content.tsx:803 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/math/math-pathway-page-content.tsx:986 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/science/science-strand-page-content.tsx:746 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/subjects-page-content.tsx:392 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/components/subjects/subjects-page-content.tsx:712 | E | no | Color, dataset number, or type declaration | text-[#64748B] |
| src/config/legal.ts:6 | A | no | Business configuration or compatibility consumer | contactEmail: siteConfig.email, |
| src/config/markets.ts:5 | A | yes | Business configuration or compatibility consumer | export type CountryCode = 'CA' \| 'US' \| 'DE'; |
| src/config/markets.ts:6 | E | no | Color, dataset number, or type declaration | export type CurrencyCode = 'CAD' \| 'EUR'; |
| src/config/markets.ts:10 | A | yes | Business configuration or compatibility consumer | CA: 'Canada', |
| src/config/markets.ts:11 | A | yes | Business configuration or compatibility consumer | US: 'United States', |
| src/config/markets.ts:65 | A | yes | Business configuration or compatibility consumer | const northAmericaEmail = 'successpathmentors@gmail.com'; |
| src/config/markets.ts:66 | A | yes | Business configuration or compatibility consumer | const northAmericaPhone = '+1 647 787 5999'; |
| src/config/markets.ts:67 | A | yes | Business configuration or compatibility consumer | const northAmericaTimezone = 'America/Toronto'; |
| src/config/markets.ts:68 | A | yes | Business configuration or compatibility consumer | const northAmericaCountries = ['CA', 'US'] as const; |
| src/config/markets.ts:77 | A | yes | Business configuration or compatibility consumer | defaultCountry: 'CA', |
| src/config/markets.ts:88 | A | yes | Business configuration or compatibility consumer | currency: 'CAD', |
| src/config/markets.ts:96 | A | yes | Business configuration or compatibility consumer | seo: { region: 'CA', locales: { en: 'en_CA', ar: 'ar_CA' } }, |
| src/config/markets.ts:106 | A | yes | Business configuration or compatibility consumer | phonePlaceholder: '+1 647 000 0000', |
| src/content/locations/location-navigation.ts:9 | B | no | Localized location navigation labels | "en": "Canada", |
| src/content/locations/location-navigation.ts:583 | B | no | Localized location navigation labels | "en": "United States", |
| src/content/locations/location-pages.ts:32 | C | no | Location-specific page/SEO content | "en": "Online Tutoring Across Canada and the United States \| Success Path Mentors", |
| src/content/locations/location-pages.ts:63 | C | no | Location-specific page/SEO content | "en": "Online Tutoring Across Canada and the United States", |
| src/content/locations/location-pages.ts:311 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:401 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:423 | C | no | Location-specific page/SEO content | "en": "Canada", |
| src/content/locations/location-pages.ts:427 | C | no | Location-specific page/SEO content | "en": "Canada", |
| src/content/locations/location-pages.ts:436 | C | no | Location-specific page/SEO content | "en": "Online Tutoring in Canada for Grades 1–12 \| Success Path Mentors", |
| src/content/locations/location-pages.ts:440 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across Canada, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:444 | C | no | Location-specific page/SEO content | "en": "online tutoring in Canada", |
| src/content/locations/location-pages.ts:449 | C | no | Location-specific page/SEO content | "online tutoring in Canada", |
| src/content/locations/location-pages.ts:450 | C | no | Location-specific page/SEO content | "math tutoring Canada", |
| src/content/locations/location-pages.ts:451 | C | no | Location-specific page/SEO content | "Arabic-speaking tutor Canada", |
| src/content/locations/location-pages.ts:452 | C | no | Location-specific page/SEO content | "Grades 1–12 tutoring Canada" |
| src/content/locations/location-pages.ts:462 | C | no | Location-specific page/SEO content | "en": "Online tutoring for students in Canada", |
| src/content/locations/location-pages.ts:467 | C | no | Location-specific page/SEO content | "en": "Online Tutoring in Canada for Grades 1–12", |
| src/content/locations/location-pages.ts:471 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across Canada, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:489 | C | no | Location-specific page/SEO content | "en": "Tutoring support designed for students in Canada", |
| src/content/locations/location-pages.ts:493 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across Canada, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:497 | C | no | Location-specific page/SEO content | "en": "Online tutoring services in Canada", |
| src/content/locations/location-pages.ts:551 | C | no | Location-specific page/SEO content | "en": "Subject tutoring in Canada", |
| src/content/locations/location-pages.ts:561 | C | no | Location-specific page/SEO content | "en": "Mathematics in Canada", |
| src/content/locations/location-pages.ts:573 | C | no | Location-specific page/SEO content | "en": "English in Canada", |
| src/content/locations/location-pages.ts:585 | C | no | Location-specific page/SEO content | "en": "General Science in Canada", |
| src/content/locations/location-pages.ts:597 | C | no | Location-specific page/SEO content | "en": "Chemistry in Canada", |
| src/content/locations/location-pages.ts:609 | C | no | Location-specific page/SEO content | "en": "Physics in Canada", |
| src/content/locations/location-pages.ts:621 | C | no | Location-specific page/SEO content | "en": "Canada Education Systems support", |
| src/content/locations/location-pages.ts:653 | C | no | Location-specific page/SEO content | "en": "Canada school and course assessments", |
| src/content/locations/location-pages.ts:715 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:728 | C | no | Location-specific page/SEO content | "en": "Education and family context in Canada", |
| src/content/locations/location-pages.ts:737 | C | no | Location-specific page/SEO content | "Online tutoring serves students throughout Canada; no physical branch is implied.", |
| src/content/locations/location-pages.ts:751 | C | no | Location-specific page/SEO content | "en": "Frequently asked questions about tutoring in Canada", |
| src/content/locations/location-pages.ts:761 | C | no | Location-specific page/SEO content | "en": "Do you provide online tutoring for students in Canada?", |
| src/content/locations/location-pages.ts:765 | C | no | Location-specific page/SEO content | "en": "Yes. Success Path Mentors serves students in Canada online, with tutor matching based on grade, subject, curriculum, availability, and learning needs.", |
| src/content/locations/location-pages.ts:771 | C | no | Location-specific page/SEO content | "en": "Can tutors support the Canada curriculum?", |
| src/content/locations/location-pages.ts:805 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:1123 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:1213 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:1522 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:1612 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:1916 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:2006 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:2310 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:2400 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:2704 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:2794 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:3098 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:3188 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:3492 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:3582 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:3886 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:3976 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:4280 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:4370 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:4674 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:4764 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:5068 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:5158 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:5462 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:5552 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:5867 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:5957 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:6266 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:6356 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:6660 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:6750 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:7054 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:7144 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:7448 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:7538 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:7842 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:7932 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:8236 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:8326 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:8630 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:8720 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:9024 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:9114 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:9427 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:9517 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:9825 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:9915 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:10219 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:10309 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:10613 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:10703 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:11007 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:11097 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:11401 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:11491 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:11795 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:11885 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:12200 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:12290 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:12599 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:12689 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:12993 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:13083 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:13387 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:13477 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:13781 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:13871 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:14175 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:14265 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:14569 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:14659 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:14963 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:15053 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:15357 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:15447 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:15757 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:15847 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:16153 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:16243 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:16547 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:16637 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:16941 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:17031 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:17335 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:17425 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:17735 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:17825 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:18131 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:18221 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:18525 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:18615 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:18919 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:19009 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:19313 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:19403 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:19713 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:19803 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:20109 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:20199 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:20503 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:20593 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:20897 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:20987 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:21291 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:21381 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:21691 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:21781 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:22087 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:22177 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:22481 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:22571 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:22875 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:22965 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:23269 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:23359 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:23669 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:23759 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:24065 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:24155 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:24459 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:24549 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:24853 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:24943 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:25247 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:25337 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:25645 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:25735 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:26040 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:26130 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:26434 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:26524 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:26828 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:26918 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:27224 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:27314 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:27618 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:27708 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:28012 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:28102 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:28408 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:28498 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:28802 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:28892 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:29196 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:29286 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:29592 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:29682 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:29986 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:30076 | C | no | Location-specific page/SEO content | "countryCode": "CA", |
| src/content/locations/location-pages.ts:30380 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:30470 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:30529 | C | no | Location-specific page/SEO content | "en": "United States", |
| src/content/locations/location-pages.ts:30533 | C | no | Location-specific page/SEO content | "en": "United States", |
| src/content/locations/location-pages.ts:30542 | C | no | Location-specific page/SEO content | "en": "Online Tutoring in United States for Grades 1–12 \| Success Path Mentors", |
| src/content/locations/location-pages.ts:30546 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across United States, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:30550 | C | no | Location-specific page/SEO content | "en": "online tutoring in United States", |
| src/content/locations/location-pages.ts:30555 | C | no | Location-specific page/SEO content | "online tutoring in United States", |
| src/content/locations/location-pages.ts:30556 | C | no | Location-specific page/SEO content | "math tutoring United States", |
| src/content/locations/location-pages.ts:30557 | C | no | Location-specific page/SEO content | "Arabic-speaking tutor United States", |
| src/content/locations/location-pages.ts:30558 | C | no | Location-specific page/SEO content | "Grades 1–12 tutoring United States" |
| src/content/locations/location-pages.ts:30568 | C | no | Location-specific page/SEO content | "en": "Online tutoring for students in United States", |
| src/content/locations/location-pages.ts:30573 | C | no | Location-specific page/SEO content | "en": "Online Tutoring in United States for Grades 1–12", |
| src/content/locations/location-pages.ts:30577 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across United States, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:30595 | C | no | Location-specific page/SEO content | "en": "Tutoring support designed for students in United States", |
| src/content/locations/location-pages.ts:30599 | C | no | Location-specific page/SEO content | "en": "One-to-one online tutoring for students across United States, with support for local curricula, schoolwork, assessments, newcomer transitions, and Arabic-speaking families.", |
| src/content/locations/location-pages.ts:30603 | C | no | Location-specific page/SEO content | "en": "Online tutoring services in United States", |
| src/content/locations/location-pages.ts:30657 | C | no | Location-specific page/SEO content | "en": "Subject tutoring in United States", |
| src/content/locations/location-pages.ts:30667 | C | no | Location-specific page/SEO content | "en": "Mathematics in United States", |
| src/content/locations/location-pages.ts:30679 | C | no | Location-specific page/SEO content | "en": "English in United States", |
| src/content/locations/location-pages.ts:30691 | C | no | Location-specific page/SEO content | "en": "General Science in United States", |
| src/content/locations/location-pages.ts:30703 | C | no | Location-specific page/SEO content | "en": "Chemistry in United States", |
| src/content/locations/location-pages.ts:30715 | C | no | Location-specific page/SEO content | "en": "Physics in United States", |
| src/content/locations/location-pages.ts:30727 | C | no | Location-specific page/SEO content | "en": "United States Education Systems support", |
| src/content/locations/location-pages.ts:30759 | C | no | Location-specific page/SEO content | "en": "United States school and course assessments", |
| src/content/locations/location-pages.ts:30821 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:30834 | C | no | Location-specific page/SEO content | "en": "Education and family context in United States", |
| src/content/locations/location-pages.ts:30843 | C | no | Location-specific page/SEO content | "Online tutoring serves students throughout United States; no physical branch is implied.", |
| src/content/locations/location-pages.ts:30857 | C | no | Location-specific page/SEO content | "en": "Frequently asked questions about tutoring in United States", |
| src/content/locations/location-pages.ts:30867 | C | no | Location-specific page/SEO content | "en": "Do you provide online tutoring for students in United States?", |
| src/content/locations/location-pages.ts:30871 | C | no | Location-specific page/SEO content | "en": "Yes. Success Path Mentors serves students in United States online, with tutor matching based on grade, subject, curriculum, availability, and learning needs.", |
| src/content/locations/location-pages.ts:30877 | C | no | Location-specific page/SEO content | "en": "Can tutors support the United States curriculum?", |
| src/content/locations/location-pages.ts:30911 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:31221 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:31311 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:31617 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:31707 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:32011 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:32101 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:32405 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:32495 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:32799 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:32889 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:33199 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:33289 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:33595 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:33685 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:33989 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:34079 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:34383 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:34473 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:34777 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:34867 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:35177 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:35267 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:35573 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:35663 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:35967 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:36057 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:36361 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:36451 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:36755 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:36845 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:37155 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:37245 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:37551 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:37641 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:37945 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:38035 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:38339 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:38429 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:38733 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:38823 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:39138 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:39228 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:39537 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:39627 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:39931 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:40021 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:40325 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:40415 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:40719 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:40809 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:41113 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:41203 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:41507 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:41597 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:41901 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:41991 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:42295 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:42385 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:42695 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:42785 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:43091 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:43181 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:43485 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:43575 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:43879 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:43969 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:44273 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:44363 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:44673 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:44763 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:45069 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:45159 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:45463 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:45553 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:45857 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:45947 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:46251 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:46341 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:46651 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:46741 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:47047 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:47137 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:47441 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:47531 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:47835 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:47925 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:48229 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:48319 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:48632 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:48722 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:49030 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:49120 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:49424 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:49514 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:49818 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:49908 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:50212 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:50302 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:50606 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:50696 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:51000 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:51090 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:51400 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:51490 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:51796 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:51886 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:52190 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:52280 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:52584 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:52674 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:52978 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:53068 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:53378 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:53468 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:53774 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:53864 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:54168 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:54258 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:54562 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:54652 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:54956 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:55046 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:55356 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:55446 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:55752 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:55842 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:56146 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:56236 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:56540 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:56630 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:56934 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:57024 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:57336 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:57426 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:57733 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:57823 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:58127 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:58217 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:58521 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:58611 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:58915 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:59005 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:59309 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:59399 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:59709 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:59799 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:60105 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:60195 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:60499 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:60589 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:60893 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:60983 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:61287 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:61377 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:61687 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:61777 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:62083 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:62173 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:62477 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:62567 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:62871 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:62961 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:63265 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:63355 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:63665 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:63755 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:64061 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:64151 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:64455 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:64545 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:64849 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:64939 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:65243 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:65333 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:65643 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:65733 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:66039 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:66129 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:66433 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:66523 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:66827 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:66917 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:67221 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:67311 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:67621 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:67711 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:68017 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:68107 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:68411 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:68501 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:68805 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:68895 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:69199 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:69289 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:69599 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:69689 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:69995 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:70085 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:70389 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:70479 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:70783 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:70873 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:71177 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:71267 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:71579 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:71669 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:71976 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:72066 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:72370 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:72460 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:72764 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:72854 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:73158 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:73248 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:73552 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:73642 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:73952 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:74042 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:74348 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:74438 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:74742 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:74832 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:75136 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:75226 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:75530 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:75620 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:75933 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:76023 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:76331 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:76421 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:76725 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:76815 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:77119 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:77209 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:77513 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:77603 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:77907 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:77997 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:78301 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:78391 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:78701 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:78791 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:79097 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:79187 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:79491 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:79581 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:79885 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:79975 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:80279 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:80369 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:80679 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:80769 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:81075 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:81165 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:81469 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:81559 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:81863 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:81953 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:82257 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:82347 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:82657 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:82747 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:83053 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:83143 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:83447 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:83537 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:83841 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:83931 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:84235 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:84325 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:84635 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:84725 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:85031 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:85121 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:85425 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:85515 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:85819 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:85909 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:86213 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:86303 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:86613 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:86703 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:87009 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:87099 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:87403 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:87493 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:87797 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:87887 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:88191 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:88281 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:88591 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:88681 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:88987 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:89077 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:89381 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:89471 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:89775 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:89865 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:90169 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:90259 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:90569 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:90659 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:90965 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:91055 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:91359 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:91449 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:91753 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:91843 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:92147 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:92237 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:92550 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:92640 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:92948 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:93038 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:93342 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:93432 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:93736 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:93826 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:94130 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:94220 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:94524 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:94614 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:94918 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:95008 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:95318 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:95408 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:95714 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:95804 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:96108 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:96198 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:96502 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:96592 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:96896 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:96986 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:97299 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:97389 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:97697 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:97787 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:98091 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:98181 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:98485 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:98575 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:98879 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:98969 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:99273 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:99363 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:99667 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:99757 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:100067 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:100157 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:100463 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:100553 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:100857 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:100947 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:101251 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:101341 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:101645 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:101735 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:102045 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:102135 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:102441 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:102531 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:102835 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:102925 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:103229 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:103319 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:103623 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:103713 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:104025 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:104115 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:104422 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:104512 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:104816 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:104906 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:105210 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:105300 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:105604 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:105694 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:105998 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:106088 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:106398 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:106488 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:106794 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:106884 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:107188 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:107278 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:107582 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:107672 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:107976 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:108066 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:108376 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:108466 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:108772 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:108862 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:109166 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:109256 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:109560 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:109650 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:109954 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:110044 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:110354 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:110444 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:110750 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:110840 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:111144 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:111234 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:111538 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:111628 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:111932 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:112022 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:112332 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:112422 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:112728 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:112818 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:113122 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:113212 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:113516 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:113606 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:113910 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:114000 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:114310 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:114400 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:114706 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:114796 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:115100 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:115190 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:115494 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:115584 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:115888 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:115978 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:116288 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:116378 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:116684 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:116774 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:117078 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:117168 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:117472 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:117562 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:117866 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:117956 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:118266 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:118356 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:118662 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:118752 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:119056 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:119146 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:119450 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:119540 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:119844 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:119934 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:120247 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:120337 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:120645 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:120735 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:121039 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:121129 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:121433 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:121523 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:121827 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:121917 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:122221 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:122311 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:122615 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:122705 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:123015 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:123105 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:123411 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:123501 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:123805 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:123895 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:124199 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:124289 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:124593 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:124683 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:124993 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:125083 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:125389 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:125479 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:125783 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:125873 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:126177 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:126267 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:126571 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:126661 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:126974 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:127064 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:127372 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:127462 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:127766 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:127856 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:128160 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:128250 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:128554 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:128644 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:128948 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:129038 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:129342 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:129432 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:129742 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:129832 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:130138 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:130228 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:130532 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:130622 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:130926 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:131016 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:131320 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:131410 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:131720 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:131810 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:132116 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:132206 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:132510 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:132600 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:132904 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:132994 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:133298 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:133388 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:133698 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:133788 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:134094 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:134184 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:134488 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:134578 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:134882 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:134972 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:135276 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:135366 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:135676 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:135766 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:136072 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:136162 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:136466 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:136556 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:136860 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/locations/location-pages.ts:136950 | C | no | Location-specific page/SEO content | "countryCode": "US", |
| src/content/locations/location-pages.ts:137254 | C | no | Location-specific page/SEO content | "Students new to Canada or the United States", |
| src/content/pages/contact.ts:199 | B | no | Translated prose/example | 'Messages are sent directly to successpathmentors@gmail.com. Replies are sent to the email or telephone details entered below.', |
| src/content/pages/contact.ts:241 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | phone: '+1 000 000 0000', |
| src/content/pages/contact.ts:253 | B | no | Translated prose/example | 'Example: Toronto, Canada', |
| src/content/pages/contact.ts:446 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'Canadian Curriculum - Other Province', |
| src/content/pages/contact.ts:448 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'Canadian curriculum — another province or territory', |
| src/content/pages/contact.ts:451 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'United States / Common Core', |
| src/content/pages/contact.ts:453 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'United States / Common Core', |
| src/content/pages/contact.ts:505 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'Canada', |
| src/content/pages/contact.ts:506 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | label: 'Canada', |
| src/content/pages/contact.ts:509 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'United States', |
| src/content/pages/contact.ts:510 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | label: 'United States', |
| src/content/pages/contact.ts:702 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | label: 'Canada', |
| src/content/pages/contact.ts:718 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'America/Toronto', |
| src/content/pages/contact.ts:720 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'Eastern Time — Toronto (America/Toronto)', |
| src/content/pages/contact.ts:744 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'United States', |
| src/content/pages/contact.ts:1113 | B | no | Translated prose/example | 'تصل الرسائل مباشرة إلى successpathmentors@gmail.com، ويتم الرد على البريد أو رقم التواصل الذي تدخله.', |
| src/content/pages/contact.ts:1157 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | phone: '+1 000 000 0000', |
| src/content/pages/contact.ts:1361 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'Canadian Curriculum - Other Province', |
| src/content/pages/contact.ts:1366 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'United States / Common Core', |
| src/content/pages/contact.ts:1420 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'Canada', |
| src/content/pages/contact.ts:1424 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | value: 'United States', |
| src/content/pages/contact.ts:1635 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'America/Toronto', |
| src/content/pages/contact.ts:1637 | D | yes | Contact form country/curriculum/timezone option or label; broader choices retained | 'التوقيت الشرقي — تورونتو (America/Toronto)', |
| src/content/subjects/english/data/grammar-language-conventions.json:4608 | E | no | Color, dataset number, or type declaration | 647, |
| src/features/auth/auth-copy.ts:41 | B | no | Translated authentication example/help text | identifierPlaceholder: 'name@example.com or +1 647 000 0000', |
| src/features/auth/auth-copy.ts:78 | B | no | Translated authentication example/help text | contactHint: 'Include the country code, for example +1 647 000 0000.', |
| src/features/auth/auth-copy.ts:155 | B | no | Translated authentication example/help text | identifierPlaceholder: 'name@example.com أو +1 647 000 0000', |
| src/features/auth/auth-copy.ts:192 | B | no | Translated authentication example/help text | contactHint: 'أدخل رمز الدولة، مثال: +1 647 000 0000.', |
| src/lib/constants.ts:44 | C | no | SEO descriptive copy | 'Success Path Mentors provides one-to-one online tutoring for Grades 1–12, with curriculum-aligned support for families in Canada and the United States, including Arabic-speaking families and students transitioning between education systems.', |
| src/lib/locations/metadata.ts:18 | A | yes | Business configuration or compatibility consumer | countryCode?: 'CA' \| 'US' |
| src/lib/locations/metadata.ts:20 | A | yes | Business configuration or compatibility consumer | if (countryCode === 'US') { |
| src/lib/locations/metadata.ts:26 | A | yes | Business configuration or compatibility consumer | if (countryCode === 'CA') { |
| src/lib/locations/metadata.ts:37 | A | yes | Business configuration or compatibility consumer | countryCode?: 'CA' \| 'US' |
| src/lib/locations/metadata.ts:40 | A | yes | Business configuration or compatibility consumer | countryCode === 'US' |
| src/lib/locations/metadata.ts:41 | A | yes | Business configuration or compatibility consumer | ? 'US' |
| src/lib/locations/metadata.ts:42 | A | yes | Business configuration or compatibility consumer | : 'CA'; |
| src/lib/programme-francais/routes.ts:40 | A | no | Business configuration or compatibility consumer | siteConfig.bookingUrl.trim(); |
| src/lib/whatsapp.ts:4 | A | no | Business configuration or compatibility consumer | export const WHATSAPP_NUMBER = getDefaultMarket().contact.whatsapp; |
| src/lib/whatsapp.ts:5 | A | no | Business configuration or compatibility consumer | export const WHATSAPP_DISPLAY_NUMBER = getDefaultMarket().contact.whatsappDisplay; |
| src/lib/whatsapp.ts:10 | A | no | Business configuration or compatibility consumer | return \`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}\`; |
| src/types/location.ts:6 | A | yes | Business configuration or compatibility consumer | \| 'CA' |
| src/types/location.ts:7 | A | yes | Business configuration or compatibility consumer | \| 'US'; |
