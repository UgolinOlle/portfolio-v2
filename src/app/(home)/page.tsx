import React from 'react';
import { Metadata } from 'next';

import { Box, Container } from '~/components/commons/animation';
import { HeroAbout, HeroAboutTwo } from '~/components/hero/about';
import { PicturesBento } from '~/components/about/pictures-bento';

// --- Metadata
export const metadata: Metadata = {
  title: 'À propos · Ugolin Ollé',
  description: "Page d'accueil de mon portfolio",
};

/**
 * @function HomePage
 * @description Main page of the portfolio.
 * @exports HomePage
 */
export default function HomePage() {
  // --- Render
  return (
    <Container className="my-16 flex flex-col gap-16">
      <Box className="flex flex-col items-center gap-5 md:px-20">
        <HeroAbout />
      </Box>
      <Box>
        <PicturesBento />
      </Box>
      <Box className="md:px-20">
        <HeroAboutTwo />
      </Box>
    </Container>
  );
}
