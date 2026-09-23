import type { SiteLocale } from '@/config/site';
import type { LocalizedLocationPage } from '@/types/location';

const BC_OWNER_ID = 'british-columbia';
const BC_CURRICULUM_OVERVIEW_URL =
  'https://curriculum.gov.bc.ca/curriculum/overview';
const BC_GRADUATION_ASSESSMENTS_URL =
  'https://www2.gov.bc.ca/gov/content/education-training/k-12/administration/program-management/assessment/graduation';

function addBritishColumbiaOfficialResources(
  page: LocalizedLocationPage
): LocalizedLocationPage['resources'] {
  const resourcesByUrl = new Map(
    page.resources.map((resource) => [resource.url, resource])
  );

  const officialResources: LocalizedLocationPage['resources'] = [
    {
      name: 'B.C. Curriculum — curriculum overview',
      description:
        'Official British Columbia curriculum overview explaining the Know–Do–Understand model, Big Ideas, Curricular Competencies, Content, Core Competencies, and literacy and numeracy foundations.',
      url: BC_CURRICULUM_OVERVIEW_URL,
      type: 'education-authority',
    },
    {
      name: 'B.C. Provincial Graduation Assessments',
      description:
        'Official British Columbia information about provincial graduation assessments, including Grade 10 Numeracy, Grade 10 Literacy, and Grade 12 Literacy requirements and resources.',
      url: BC_GRADUATION_ASSESSMENTS_URL,
      type: 'assessment',
    },
  ];

  for (const resource of officialResources) {
    resourcesByUrl.set(resource.url, resource);
  }

  return Array.from(resourcesByUrl.values());
}

export function applyLocationContentPatch(
  page: LocalizedLocationPage,
  locale: SiteLocale
): LocalizedLocationPage {
  if (locale !== 'en' || page.id !== BC_OWNER_ID) {
    return page;
  }

  return {
    ...page,
    curriculumDescription:
      'British Columbia’s curriculum uses a Know–Do–Understand model that brings together Content, Curricular Competencies and Big Ideas. Tutoring can use the student’s current course materials, assignments and teacher feedback to reinforce these expectations while the school remains the source of official curriculum and assessment decisions.',
    curriculumPoints: [
      'Big Ideas — the concepts and principles students are expected to understand',
      'Curricular Competencies — the skills, strategies and processes students develop',
      'Content — the subject knowledge and topics students are expected to know',
      'Core Competencies, literacy and numeracy foundations are central to B.C.’s K–12 curriculum',
    ],
    assessmentsDescription:
      'For secondary students, tutoring support may include review and practice relevant to B.C. graduation assessments such as Numeracy 10, Literacy 10 and Literacy 12, alongside school and course assessments where applicable.',
    resources: addBritishColumbiaOfficialResources(page),
    reviewedAt: '2026-09-23',
  };
}
