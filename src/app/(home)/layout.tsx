/**
 * @file layout.tsx
 * @description Layout for the home page
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import React from 'react';

import { Hero } from '~/components/hero/hero';
import { MainContainer } from '~/components/ui/container';
import { Navbar } from '~/components/commons/menus/navbar';
import { Footer } from '~/components/commons/footer';
import { Container } from '~/components/commons/animation';

/**
 * Home layout component
 *
 * This component is used to display the home layout.
 *
 * @returns {React.JSX.Element} The home layout component
 */
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  // --- Render
  return (
    <MainContainer>
      <div className="flex h-full w-full flex-col justify-center gap-3 text-base lg:w-[90vw] lg:justify-between lg:gap-5 xl:w-[80vw]">
        <Container className="mb-2 mt-5 h-full p-2 md:px-8 md:pt-8 lg:h-2/5">
          <Hero />
        </Container>
        <Container className="h-full p-2 md:px-8 lg:h-auto">
          <Navbar />
          {children}
          <Footer />
        </Container>
      </div>
    </MainContainer>
  );
}
