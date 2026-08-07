# Educational References Integration

This update adds the supplied education, curriculum, assessment, special-education, pathway, and French-proficiency references without changing the existing route structure or copying third-party documents into the website.

## Integration approach

- External sources open in a new tab with `rel="noopener noreferrer"`.
- References are stored separately from the large generated location-content file.
- Existing `page.resources` entries are preserved and merged by URL to prevent duplicates.
- English and Arabic labels/descriptions are localized on the location pages.
- Older documents are clearly marked as archived or historical references.
- Independent practice sources are clearly identified as non-official.
- The French DELF references are shown on the French-program overview and the French subject page.

## Page mapping

### Ontario

- `/en/locations/canada/ontario` and Arabic equivalent:
  - Ontario curriculum review and revision guide
  - Official EQAO assessments
  - HCDSB parent guide to education

- `/en/locations/canada/ontario/curriculum` and Arabic equivalent:
  - Ontario curriculum review
  - EQAO official assessments
  - YRDSB secondary-assessment guide
  - HDSB Grades 7–12 assessment practices
  - WCDSB French proficiency testing
  - DSBN DELF examinations
  - SCDSB DELF/CEFR information
  - Independent Think Academy EQAO practice guide

- `/en/locations/canada/ontario/toronto` and Arabic equivalent:
  - TDSB special-education parent guides
  - TDSB IEP guide
  - TDSB 2024–2025 international-student handbook, marked as archived
  - TDSB school EQAO information
  - EQAO official assessments

- `/en/locations/canada/ontario/mississauga` and `/brampton`, plus Arabic equivalents:
  - Peel school-system guide
  - Peel EQAO information
  - EQAO official assessments

- `/en/locations/canada/ontario/milton` and `/oakville`, plus Arabic equivalents:
  - HDSB secondary-school guide and PDF
  - HDSB postsecondary guide
  - HDSB education and career-life planning
  - HDSB assessment and evaluation practices
  - HCDSB parent guide
  - HCDSB special-education guides, marked where archived/older

- `/en/locations/canada/ontario/kitchener` and Arabic equivalent:
  - WCDSB French proficiency testing
  - EQAO official assessments

### Alberta

- `/en/locations/canada/alberta` and Arabic equivalent:
  - Government of Alberta Provincial Achievement Tests

- `/en/locations/canada/alberta/curriculum` and Arabic equivalent:
  - Government of Alberta PAT information
  - Released 2019 Grade 9 Mathematics PAT Part A, marked as historical practice

- `/en/locations/canada/alberta/calgary` and Arabic equivalent:
  - CBE Grade 6 and 9 PAT information
  - Government of Alberta PAT information

- `/en/locations/canada/alberta/edmonton` and Arabic equivalent:
  - Edmonton Catholic Schools at-home PAT preparation PDF
  - Government of Alberta PAT information

### British Columbia

- `/en/locations/canada/british-columbia` and Arabic equivalent:
  - Official B.C. Mathematics 3 curriculum

- `/en/locations/canada/british-columbia/curriculum` and Arabic equivalent:
  - Official B.C. Mathematics 3 curriculum
  - ExamBank Grade 9 practice bank, clearly marked as independent/non-official

### French program

- `/fr/programme-francais`
- `/fr/programme-francais/francais`

Both pages include:

- WCDSB French proficiency testing
- DSBN DELF examinations
- SCDSB DELF and CEFR-level information

## Main implementation files

- `src/content/locations/education-resources.ts`
- `src/lib/locations/get-location-page.ts`
- `src/components/locations/location-page-content.tsx`
- `src/content/programme-francais/external-resources.ts`
- `src/components/programme-francais/french-reference-resources.tsx`
- `src/components/programme-francais/french-program-overview.tsx`
- `src/components/programme-francais/french-subject-overview.tsx`
