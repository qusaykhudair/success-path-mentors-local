import { z } from 'zod';

export const contactFormSchema = z.object({
  parentName: z.string().min(2).max(100),
  whatsapp: z.string().min(6).max(20),
  email: z.string().email(),
  childAge: z.coerce.number().int().min(3).max(19),
  country: z.string().min(1),
  state: z.string().min(1).max(100),
  subject: z.string().min(1),
  teachingLanguage: z.string().min(1),
  notes: z.string().max(1000).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
