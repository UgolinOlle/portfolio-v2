import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

import { Hero } from '@/components/hero/hero';
import { MainContainer } from '@/components/ui/container';
import { Navbar } from '@/components/commons/navbar';
import { Footer } from '@/components/commons/footer';
import AnimatedShinyText from '@/components/ui/shiny';
import { cn } from '@/lib/utils';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContainer>
      <div className="w-full lg:w-[90vw] xl:w-[80vw] h-full flex flex-col justify-center gap-3 lg:gap-5 lg:justify-between">
        <div className="h-full lg:h-2/5 p-2 mt-5 mb-2 md:px-8 md:pt-8">
          <Hero />
        </div>
        <div className="h-full lg:h-auto p-2 md:px-8">
          <div className="flex min-h-10 items-center justify-center mb-8">
            <div
              className={cn(
                'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
              )}
            >
              <Link href="/contact" passHref>
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>🎉 Obtenez votre audit gratuit</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </Link>
            </div>
          </div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </MainContainer>
  );
}
