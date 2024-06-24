import Image from 'next/image';
import Link from 'next/link';
import { Paperclip, Phone } from 'lucide-react';

import { SOCIALS } from '@/lib/constants/socials';
import { cn } from '@/lib/utils';
import { Heading } from '../ui/headers';
import { Button } from '../ui/button';
import ThemeToggler from '../theme-switcher';

export const Hero: React.FC = () => {
  // -- Render
  return (
    <div className="w-full h-full flex flex-col-reverse lg:flex-row lg:flex-wrap justify-center lg:justify-between p-0 md:p-4">
      <div className="flex flex-col justify-between items-center lg:items-start gap-3 h-full w-full lg:w-2/3">
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-3 h-full">
          <div className="flex flex-col items-center lg:justify-start lg:items-start gap-3">
            <Heading>Ugolin Ollé</Heading>
            <p className="text-center text-lg text-gray-700/75 hover:text-gray-700 transition ease-in-out">
              Software Engineer, Développeur Full Stack, et Open Source
              Contributor
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-3">
              <Button className="flex items-center gap-2">
                <Phone size={16} /> Prendre RDV
              </Button>
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
                    'text-md text-gray-700/75 hover:text-gray-700 transition ease-in-out px-3 py-2',
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
          </div>
          <p className="text-center md:text-justify text-md text-gray-700 hover:text-gray-700 transition ease-in-out w-full lg:w-3/4 my-auto">
            🌟 Bienvenue dans mon monde. Expert en développement full stack et
            SaaS Créateur de logiciels, je transforme des idées innovantes en
            solutions évolutives.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/profile.png"
          alt="Ugolin Ollé"
          width={250}
          height={250}
          className="m-auto"
        />
        <div className="flex flex-row gap-3 items-center">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};
