import React from 'react';

import { AnimatedContainer } from '@/components/commons/animation';
import { Heading } from '@/components/ui/headers';
import { ContactForm } from '@/components/contact/form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Ugolin Ollé',
  description: 'Contactez-moi pour un projet ou un audit gratuit.',
};

export default function Contact() {
  // -- Render
  return (
    <AnimatedContainer custom={0}>
      <AnimatedContainer custom={0} className="w-full lg:w-1/2 m-auto">
        <Heading variant="h2" border={false} className="mb-6">
          Un projet ? Une question ? <br />
          On en discute !
        </Heading>
        <ContactForm />
      </AnimatedContainer>
    </AnimatedContainer>
  );
}
