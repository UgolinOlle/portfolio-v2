import React from 'react';
import { IconType } from 'react-icons';

import { cn } from '~/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-full mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: IconType;
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden row-span-1 rounded-xl group/bento shadow-sm hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-neutral-800 bg-neutral-100 dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      <span className="absolute transform transition-all duration-300 ease-in-out rotate-3 -top-8 -right-8 opacity-25 group-hover/bento:opacity-75 group-hover/bento:rotate-5 group-hover/bento:-top-3 group-hover/bento:-right-3 h-56 w-56">
        {icon && React.createElement(icon)}
      </span>
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col justify-end items-start h-full">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
