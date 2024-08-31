'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import AutoForm, { AutoFormSubmit } from '@/components/ui/auto-form';
import { ContactFormData, contactFormSchema } from '@/lib/schemas/contact';

export const ContactForm: React.FC = () => {
  // --- Variables
  const [loading, setLoading] = useState(false);

  // --- Functions
  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

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
        setLoading(false);
      } else {
        toast.error("Une erreur est survenue lors de l'envoi du message");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Une erreur est survenue lors de l'envoi du message");
    }
  };

  // --- Render
  return (
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
          fieldType: 'textarea',
          inputProps: {
            type: 'textarea',
            placeholder: 'Bonjour, je suis intéressé par...',
            showLabel: true,
          },
          label: 'Message',
        },
      }}
    >
      <p className="text-sm text-muted-foreground mt-4">
        En soumettant ce formulaire, vous acceptez que vos données soient
        utilisées pour vous recontacter.
      </p>

      <AutoFormSubmit disabled={loading}>
        {loading ? 'Envoi en cours...' : 'Envoyer'}
      </AutoFormSubmit>
    </AutoForm>
  );
};
