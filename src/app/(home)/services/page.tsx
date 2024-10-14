/**
 * @file page.tsx
 * @description Page to display the services offered
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import React from 'react';
import { Metadata } from 'next';
import { CircleCheckBig } from 'lucide-react';

import { Skills } from '~/components/about/skills';
import { Box, Container } from '~/components/commons/animation';
import { ServiceCard } from '~/components/services/card';
import { Heading } from '~/components/ui/headers';
import { Marquee } from '~/components/ui/marquee';

import { SERVICES, SERVICES_BENEFITS } from '~/lib/constants/service';

/**
 * Metadata for the services page
 * 
 * @returns {Metadata} The metadata for the services page
 */
export const metadata: Metadata = {
  title: 'Services · Ugolin Ollé',
  description: 'Liste des services proposés.',
};

/**
 * Services page component
 * 
 * This component is used to display the services page.
 * 
 * @returns {React.JSX.Element} The services page component
 */
export default function ServicesPage() {
  // --- Render
  return (
    <Container className="my-16">
      <Heading variant="h2">Services</Heading>
      <Box className="my-16 grid grid-cols-1 gap-10 md:grid-cols-2">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Box>
      <Box className="relative my-16">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <Marquee pauseOnHover className="[--duration:20s] [--gap:2rem]">
          {SERVICES_BENEFITS.map((review) => (
            <div className="flex items-center gap-2">
              <CircleCheckBig className="text-primary-500 dark:text-primary-400 h-6 w-6" />
              <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{review.title}</p>
            </div>
          ))}
        </Marquee>
      </Box>
      <Box>
        <Skills />
      </Box>
    </Container>
  );
}
