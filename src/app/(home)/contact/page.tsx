'use client';

import React from 'react';
import { toast } from 'sonner';

import AutoForm, { AutoFormSubmit } from '@/components/ui/auto-form';
import { AnimatedContainer } from '@/components/commons/animation';
import { Heading } from '@/components/ui/headers';
import { ContactFormData, contactFormSchema } from '@/lib/schemas/contact';

export default function Contact() {
  // -- Functions
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        toast.success('Message envoyé avec succès');
        return;
      } else {
        toast.error("Une erreur est survenue lors de l'envoi du message");
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi du message");
    }
  };

  // -- Render
  return (
    <AnimatedContainer custom={0}>
      <Heading variant="h2" className="mb-6">
        Un projet ? Une question ? On en discute ?
      </Heading>
      <AutoForm
        onSubmit={onSubmit}
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
