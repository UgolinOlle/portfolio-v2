import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SOCIALS } from '@/lib/constants/socials';
import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/headers';
import { Button } from '@/components/ui/button';
import { Appointement } from '@/components/hero/appointement';
import { RetroGrid } from '@/components/retro';
import { Clock } from '@/components/hero/clock';
import { Resume } from '@/components/hero/resume';

export const Hero: React.FC = () => {
  // -- Render
  return (
    <div className="relative w-full h-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between md:border md:border-gray-200 md:rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <div className="flex flex-col justify-between items-center lg:items-start gap-3 w-full lg:w-2/3 p-0 py-4 md:p-4">
        <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-5 h-full">
          <div className="flex flex-col items-center lg:justify-start lg:items-start gap-3">
            <Heading variant="hero" className="font-bumbbled" border={false}>
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
                    'text-md dark:text-gray-300 text-gray-700/75 hover:text-gray-700 transition ease-in-out px-3 py-2',
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
        <span className="mt-5 lg:mt-10 w-full lg:w-auto text-center text-sm dark:text-gray-300 text-gray-700/75 bg-gray-300/25 hover:bg-gray-300/50 hover:text-gray-700 transition ease-in-out duration-200 px-4 py-1 flex justify-between lg:justify-normal items-center gap-4 rounded-full group/location">
          <div className="flex items-center gap-2 group-hover/location:text-gray-700 dark:group-hover/location:text-gray-100">
            <Clock />
            GMT+1
          </div>
          <div className="hidden md:block border border-gray-300 rounded-full w-full lg:w-56 group-hover:border-gray-700 dark:group-hover/location:border-gray-100 transition ease-in-out" />
          <span className="w-80 lg:w-auto text-sm dark:text-gray-300 text-gray-700/75 group-hover/location:text-gray-700 dark:group-hover/location:text-gray-100 transition ease-in-out">
            Phnom Penh, Cambodge
          </span>
        </span>
      </div>
      <div className="flex flex-col justify-between items-center gap-5 p-0 md:p-4">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.png"
            alt="Ugolin Ollé"
            width={250}
            height={250}
          />
          <p className="group/software text-center text-lg dark:text-gray-300 text-gray-700 hover:text-gray-700 transition ease-in-out">
            <span className="group-hover/software:rotate-90 transition-transform duration-300 inline-block">
              ⌘
            </span>{' '}
            Développeur Logiciel
          </p>
        </div>
        <span className="text-center text-sm dark:text-gray-300 text-gray-700/75 bg-green-500/25 hover:bg-green-500/50 hover:text-gray-700 transition ease-in-out duration-200 w-auto px-4 py-1 flex items-center gap-2 rounded-full">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block transition-all animate-pulse" />
          Disponible pour travailler
        </span>
      </div>
      <RetroGrid />
    </div>
  );
};
