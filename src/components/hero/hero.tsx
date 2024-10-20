/**
 * @file hero.tsx
 * @description Hero component with enhanced magnet effect using Framer Motion
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.3.0
 */

'use client';

// --- Imports
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { Heading } from '~/components/ui/headers';
import { Button } from '~/components/ui/button';
import { Appointement } from '~/components/hero/appointement';
import { RetroGrid } from '~/components/commons/retro';
import { Clock } from '~/components/hero/clock';
import { CrossIcon } from '~/components/commons/icons/common';

import { SOCIALS } from '~/lib/constants/socials';
import { cn } from '~/lib/utils';
import { ShinyContainer } from '../ui/shiny';

export const Hero: React.FC = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dampenedX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const dampenedY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(dampenedY, [-500, 500], [15, -15]);
  const rotateY = useTransform(dampenedX, [-500, 500], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      const maxDistance = Math.max(rect.width, rect.height);

      if (Math.abs(distanceX) < maxDistance && Math.abs(distanceY) < maxDistance) {
        mouseX.set(distanceX);
        mouseY.set(distanceY);
      } else {
        handleMouseLeave();
      }
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="relative flex h-full w-full flex-col-reverse justify-center shadow-sm transition duration-300 ease-in-out md:border md:border-neutral-200/70 dark:md:border-neutral-400/70 lg:flex-row lg:justify-between"
    >
      <CrossIcon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <CrossIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <CrossIcon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <CrossIcon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <div className="flex w-full flex-col items-center justify-between gap-3 px-2 py-4 md:px-8 md:py-8 lg:w-2/3 lg:items-start">
        <div className="flex h-full flex-col items-center gap-8 lg:items-start lg:gap-5">
          <div className="flex flex-col items-center gap-3 lg:items-start lg:justify-start">
            <Heading
              variant="hero"
              className="mt-8 bg-gradient-to-r from-primary to-neutral-800 bg-clip-text px-4 py-7 font-bumbbled text-transparent dark:text-neutral-200 md:mt-0"
            >
              Ugolin Ollé
            </Heading>
          </div>
          <div className="mt-7 flex items-center gap-3 md:flex-row">
            <Appointement />
            <div className="z-20 flex flex-row items-center gap-3">
              {SOCIALS.map((social, index) => (
                <Button
                  key={index}
                  rel="noopener noreferrer"
                  variant="secondary"
                  className={cn(
                    'text-md group/social-link border border-neutral-900/10 px-3 py-2 text-neutral-800 shadow-md transition ease-in-out dark:border-neutral-100/10 dark:text-neutral-200 md:hover:text-neutral-900 md:hover:shadow-xl md:dark:hover:text-neutral-100',
                    `${social.name.toLowerCase() === 'linkedin' && 'hover:text-[#0A66C2]'}`
                  )}
                >
                  <Link href={social.url} target="_blank" className="flex items-center justify-center gap-2">
                    <span className="h-5 w-5 transform cursor-none transition duration-300 ease-in-out md:group-hover/social-link:-translate-y-4 md:group-hover/social-link:rotate-12">
                      {React.createElement(social.icon)}
                    </span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <p className="w-full text-center font-body text-lg font-normal text-gray-700 transition ease-in-out hover:text-gray-700 dark:text-gray-300 md:text-justify lg:w-3/4">
            Je craft des logiciels sur mesure, dynamise vos sites et met en lumières vos idées.
          </p>
        </div>
        <div
          className={cn(
            'group mt-5 rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 lg:mt-10'
          )}
        >
          <ShinyContainer className="flex w-full cursor-none flex-col items-center gap-2 rounded-full px-4 py-1 text-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 md:flex-row md:justify-between md:gap-4 lg:w-auto lg:justify-normal">
            <div className="flex items-center gap-2">
              <Clock />
              GMT+5
            </div>
            <div className="hidden w-full rounded-full border border-neutral-600/70 dark:border-neutral-400/70 md:block lg:w-56" />
            <span className="flex items-center gap-2 text-nowrap">
              <span className="transform transition duration-300 ease-in-out group-hover:-translate-y-1">📍</span>
              Phnom Penh, Cambodge
            </span>
          </ShinyContainer>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 px-2 py-4 md:px-8 md:py-8">
        <Image src="/profile.png" alt="Ugolin Ollé" width={250} height={250} />
        <div className="flex min-h-10 items-center justify-center">
          <div
            className={cn(
              'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
            )}
          >
            <Link href="https://cal.com/ugolin-olle" passHref>
              <ShinyContainer className="inline-flex items-center justify-center px-4 py-1 text-neutral-600 transition duration-300 ease-out hover:text-neutral-800 hover:dark:text-neutral-200">
                <span>🎉 Obtenez votre audit gratuit</span>
                <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
              </ShinyContainer>
            </Link>
          </div>
        </div>
      </div>
      <RetroGrid />
    </motion.div>
  );
};
