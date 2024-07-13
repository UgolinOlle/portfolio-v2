'use client';

import React from 'react';

import AutoForm, { AutoFormSubmit } from '@/components/ui/auto-form';
import { contactFormSchema } from '@/lib/forms/contanct';
import { AnimatedContainer } from '@/components/commons/animation';
import { Heading } from '@/components/ui/headers';

export default function Contact() {
  // -- Render
  return (
    <AnimatedContainer custom={0}>
      <Heading variant="h2" className="mb-6">
        Un projet ? Une question ? On en discute ?
      </Heading>
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
    </AnimatedContainer>
  );
}
