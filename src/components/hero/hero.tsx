import Image from 'next/image';
import Link from 'next/link';
import { Paperclip } from 'lucide-react';

import { SOCIALS } from '@/lib/constants/socials';
import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/headers';
import { Button } from '@/components/ui/button';
import { TopNavbar } from '@/components/commons/top-navbar';
import { Appointement } from '@/components/commons/appointement';
import { RetroGrid } from '../retro';
import Clock from './clock';

export const Hero: React.FC = () => {
  // -- Render
  return (
    <div className="relative w-full h-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between md:border md:border-gray-100 md:rounded-lg md:shadow-sm">
      <div className="flex flex-col justify-between items-center lg:items-start gap-3 h-full w-full lg:w-2/3 p-0 py-4 md:p-4">
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-3 h-full">
          <div className="flex flex-col items-center lg:justify-start lg:items-start gap-3">
            <Heading variant="hero" className="font-bumbbled">
              Ugolin Ollé
            </Heading>
            <p className="text-center text-lg dark:text-gray-300 text-gray-700/75 hover:text-gray-700 transition ease-in-out mt-3 lg:mt-5">
              ⌘ Software Engineer, Développeur Full Stack, et Open Source
              Contributor
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-3 w-full">
              <Appointement />
              <Button variant="secondary" className="flex items-center gap-2">
                <Paperclip size={16} />
                Mon CV
              </Button>
            </div>
            <div className="flex flex-row gap-3 items-center">
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
                    <div className="w-5 h-5">{social.icon()}</div>
                  </Link>
                </Button>
              ))}
            </div>
            <TopNavbar />
          </div>
          <p className="text-center md:text-justify text-md dark:text-gray-300 text-gray-700 hover:text-gray-700 transition ease-in-out w-full lg:w-3/4 my-5">
            🌟 Bienvenue dans mon monde. Expert en développement full stack et
            SaaS Créateur de logiciels, je transforme des idées innovantes en
            solutions évolutives.
          </p>
        </div>
        <span className="mt-5 lg:mt-10 w-full lg:w-auto text-center text-sm dark:text-gray-300 text-gray-700/75 bg-gray-300/25 hover:bg-gray-300/50 hover:text-gray-700 transition ease-in-out duration-200 px-4 py-1 flex justify-between lg:justify-normal items-center gap-4 rounded-full group/location">
          <div className="flex items-center gap-2 group-hover/location:text-gray-700 dark:group-hover/location:text-gray-100">
            <Clock />
            GMT+1
          </div>
          <div className="border border-gray-300 rounded-full w-full lg:w-56 group-hover:border-gray-700 dark:group-hover/location:border-gray-100 transition ease-in-out" />
          <span className="w-80 lg:w-auto text-sm dark:text-gray-300 text-gray-700/75 group-hover/location:text-gray-700 dark:group-hover/location:text-gray-100 transition ease-in-out">
            Phnom Penh, Cambodge
          </span>
        </span>
      </div>
      <div className="flex flex-col justify-between items-center gap-3 p-0 md:p-4">
        <Image src="/profile.png" alt="Ugolin Ollé" width={250} height={250} />
        <span className="text-center text-sm dark:text-gray-300 text-gray-700/75 bg-green-500/25 hover:bg-green-500/50 hover:text-gray-700 transition ease-in-out duration-200 w-auto px-4 py-1 flex items-center gap-2 rounded-full">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block transition-all animate-pulse" />
          Disponible pour travailler
        </span>
      </div>
      <RetroGrid />
    </div>
  );
};
