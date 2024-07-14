import { z } from 'zod';

/**
 * @constant contactFormSchema
 * @description The schema for the contact form.
 * @type {z.ZodObject<{
 *  firstName: z.ZodString,
 *  lastName: z.ZodString,
 *  companyName: z.ZodString,
 *  email: z.ZodString,
 *  message: z.ZodString
 *  }>}
 * @exports
 */
export const contactFormSchema: z.ZodObject<{
  firstName: z.ZodString;
  lastName: z.ZodString;
  companyName: z.ZodString;
  email: z.ZodString;
  message: z.ZodString;
}> = z.object({
  firstName: z
    .string({
      required_error: 'Le prénom est requis',
    })
    .min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z
    .string({
      required_error: 'Le nom est requis',
    })
    .min(2, 'Le nom doit contenir au moins 2 caractères'),
  companyName: z
    .string({
      required_error: "Le nom de l'entreprise est requis",
    })
    .min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères"),
  email: z
    .string({
      required_error: "L'email est requis",
    })
    .email("L'email est invalide"),
  message: z
    .string({
      required_error: 'Le message est requis',
    })
    .min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
