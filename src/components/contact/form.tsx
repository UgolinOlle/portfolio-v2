'use client';

import * as z from 'zod';
import AutoForm, { AutoFormSubmit } from '../ui/auto-form';
import React from 'react';

const contactFormSchema = z.object({
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

export const ContactForm: React.FC = () => {
  // -- Render
  return (
    <AutoForm
      formSchema={contactFormSchema}
      fieldConfig={{
        firstName: {
          inputProps: {
            type: 'text',
            placeholder: 'Ugolin',
            showLabel: true,
          },
          label: 'Prénom',
        },
        lastName: {
          inputProps: {
            type: 'text',
            placeholder: 'Ollé',
            showLabel: true,
          },
          label: 'Nom',
        },
        companyName: {
          inputProps: {
            type: 'text',
            placeholder: 'Papillon & Fils',
            showLabel: true,
          },
          label: "Nom de l'entreprise",
        },
        email: {
          inputProps: {
            type: 'email',
            placeholder: 'hello@ugolin-olle.com',
            showLabel: true,
          },
          label: 'Email',
        },
        message: {
          inputProps: {
            type: 'textarea',
            placeholder: 'Bonjour, je suis intéressé par...',
            showLabel: true,
          },
          label: 'Message',
        },
      }}
    >
      <AutoFormSubmit>Envoyer</AutoFormSubmit>

      <p className="text-sm text-muted-foreground mt-4">
        En soumettant ce formulaire, vous acceptez que vos données soient
        utilisées pour vous recontacter.
      </p>
    </AutoForm>
  );
};
