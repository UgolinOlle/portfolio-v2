import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import { SOCIALS } from '@/lib/constants/socials';
import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/headers';
import { Button } from '@/components/ui/button';
import { Appointement } from '@/components/hero/appointement';
import { RetroGrid } from '@/components/commons/retro';
import { Clock } from '@/components/hero/clock';
import AnimatedShinyText from '@/components/ui/shiny';
import { CrossIcon } from '@/components/commons/icons/common';

export const Hero: React.FC = () => {
  // -- Render
  return (
    <div className="relative w-full h-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between md:border md:border-neutral-200/70 dark:md:border-neutral-400/70 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
      <CrossIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <CrossIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <CrossIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <CrossIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <div className="flex flex-col justify-between items-center lg:items-start gap-3 w-full lg:w-2/3 py-4 px-2 md:py-8 md:px-8">
        <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-5 h-full">
          <div className="flex flex-col items-center lg:justify-start lg:items-start gap-3">
            <Heading
              variant="hero"
              className="font-bumbbled mt-8 md:mt-0"
              border={false}
            >
              Ugolin Ollé
            </Heading>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 mt-7">
            <Appointement />
            <div className="flex flex-row gap-3 items-center z-20">
              {SOCIALS.map((social, index) => (
                <Button
                  key={index}
                  rel="noopener noreferrer"
                  variant="secondary"
                  className={cn(
                    'text-md dark:text-gray-300 text-gray-700/75 hover:text-gray-700 transition ease-in-out px-3 py-2 shadow-md hover:shadow-xl border border-black/10 dark:border-white/10',
                    `${social.name.toLowerCase() === 'linkedin' && 'hover:text-[#0A66C2]'}`
                  )}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    className="flex justify-center items-center gap-2"
                  >
                    <div className="w-5 h-5">
                      {React.createElement(social.icon)}
                    </div>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <p className="text-center md:text-justify text-lg dark:text-gray-300 text-gray-700 hover:text-gray-700 transition ease-in-out w-full lg:w-3/4">
            🌟 Je craft des logiciels sur mesure, dynamise vos sites et met en
            lumières vos idées.
          </p>
        </div>
        <div
          className={cn(
            'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mt-5 lg:mt-10'
          )}
        >
          <AnimatedShinyText className="cursor-none px-4 py-1 flex flex-col md:flex-row md:justify-between lg:justify-normal items-center gap-2 md:gap-4 rounded-full w-full lg:w-auto text-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock />
              GMT+1
            </div>
            <div className="hidden md:block border border-neutral-600/70 dark:border-neutral-400/70 rounded-full w-full lg:w-56" />
            <span className="text-nowrap">📍 Phnom Penh, Cambodge</span>
          </AnimatedShinyText>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-5 py-4 px-2 md:py-8 md:px-8">
        <Image src="/profile.png" alt="Ugolin Ollé" width={250} height={250} />
        <div className="flex min-h-10 items-center justify-center">
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
      </div>
      <RetroGrid />
    </div>
  );
};
