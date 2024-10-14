/**
 * @file page.tsx
 * @description Page to display the home page
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import React from 'react';
import { Metadata } from 'next';

import { Box, Container } from '~/components/commons/animation';
import { HeroAbout, HeroAboutTwo } from '~/components/hero/about';
import { PicturesBento } from '~/components/about/pictures-bento';

/**
 * Metadata for the home page
 * 
 * @returns {Metadata} The metadata for the home page
 */
export const metadata: Metadata = {
  title: 'À propos · Ugolin Ollé',
  description: "Page d'accueil de mon portfolio",
};

/**
 * Home page component
 * 
 * This component is used to display the home page.
 * 
 * @returns {React.JSX.Element} The home page component
 */
export default function HomePage() {
  // --- Render
  return (
    <Container className="my-16 flex flex-col gap-16">
      <Box className="flex flex-col items-center gap-5 lg:px-20">
        <HeroAbout />
      </Box>
      <Box>
        <PicturesBento />
      </Box>
      <Box className="lg:px-20">
        <HeroAboutTwo />
      </Box>
    </Container>
  );
}
