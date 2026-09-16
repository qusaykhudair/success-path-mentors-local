export interface EnrollmentPayload {
  parentName: string;
  whatsapp: string;
  email: string;
  studentAge: number | null;
  country: 'usa' | 'canada' | '';
  province: string;
  subjects: string[];        // e.g. ['english','math']
  teachingLanguage: 'english' | 'french' | '';
  notes: string;
}

interface Option {
  value: string;
  label: string;
}

export interface EnrollmentCardCopy {
  title: string;
  reassurance: string;
  next: string;
  back: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
 stepOf: string;
  labels: {
    parentName: string;
    whatsapp: string;
    email: string;
    studentAge: string;
    country: string;
    province: string;
    subjects: string;
    teachingLanguage: string;
    notes: string;
  };
  placeholders: {
    parentName: string;
    whatsapp: string;
    email: string;
    studentAge: string;
    province: string;
    notes: string;
  };
  errors: {
    required: string;
    email: string;
    age: string;
    subjects: string;
  };
  countries: Option[];      // [{value:'usa',label:'...'}, {value:'canada',label:'...'}]
  subjectOptions: Option[]; // english/math/science/...
  languages: Option[];      // english / french
}

export interface EnrollmentCardProps {
  copy: EnrollmentCardCopy;
}

