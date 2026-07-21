import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.string().trim().email("forms.validation.invalidEmail"),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
