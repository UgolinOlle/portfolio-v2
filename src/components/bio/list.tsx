import React from 'react';
import Link from 'next/link';

import { Heading } from '@/components/ui/headers';
import { IBioItem } from '@/lib/interfaces/bio';
import { cn } from '@/lib/utils';

/**
 * @name BioList
 * @description Show a list of bios with a title, a description and url
 * @exports BioList
 */
export const BioList: React.FC<{ bios: IBioItem[]; className?: string }> = ({
  bios,
  className,
}) => {
  // -- Render
  return (
    <div
      className={cn(
        'grid gap-3 justify-center items-center w-[70vw] md:h-[50vh] mx-auto',
        'grid-cols-1 sm:grid-cols-2',
        'lg:grid-rows-2',
        className
      )}
    >
      <div className="lg:row-span-2 md:h-full flex flex-col gap-3">
        {bios.slice(0, 2).map((bio) => (
          <BioItem key={bio.name} bio={bio} />
        ))}
      </div>
      <div className="lg:row-span-2 md:h-full">
        <BioItem key={bios[2].name} bio={bios[2]} />
      </div>
      {bios.slice(3).map((bio) => (
        <BioItem key={bio.name} bio={bio} sliced />
      ))}
    </div>
  );
};

/**
 * @name BioItem
 * @description Show a single bio with a title, a description and url
 * @exports BioItem
 */
export const BioItem: React.FC<{ bio: IBioItem; sliced?: boolean }> = ({
  bio,
  sliced,
}) => {
  // -- Render
  return (
    <Link
      href={bio.url}
      target="_blank"
      className={cn(
        sliced ? 'flex flex-col' : 'flex',
        'justify-center items-center gap-5 rounded-lg px-5 py-4 text-white',
        'hover:shadow-lg transition-shadow duration-200',
        'h-full w-full'
      )}
      style={{ backgroundColor: bio.color }}
    >
      <span className="w-7 h-7 flex items-center">
        {React.createElement(bio.icon)}
      </span>
      <Heading variant="h3">{bio.name}</Heading>
    </Link>
  );
};
