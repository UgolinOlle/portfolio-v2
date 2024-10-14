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
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // --- Render
  return (
    <MainContainer>
      <div className="w-full lg:w-[90vw] xl:w-[80vw] h-full flex flex-col justify-center gap-3 lg:gap-5 lg:justify-between">
        <Container
          className="h-full lg:h-2/5 p-2 mt-5 mb-2 md:px-8 md:pt-8"
        >
          <Hero />
        </Container>
        <Container  className="h-full lg:h-auto p-2 md:px-8">
          <Navbar />
          {children}
          <Footer />
        </Container>
      </div>
    </MainContainer>
  );
}
