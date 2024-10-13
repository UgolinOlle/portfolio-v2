'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '~/components/ui/button';
import { ITimelineItem } from '~/lib/interfaces/experience';
import { cn } from '~/lib/utils';

export const Timeline = ({
  timelineData,
  onExperienceClick,
}: {
  timelineData: ITimelineItem[];
  onExperienceClick: (experience: ITimelineItem) => void;
}): JSX.Element => {
  // --- Variables
  const config = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  // --- Render
  return (
    <ul className="relative border-l border-neutral-300 border-opacity-50">
      {timelineData.map((item, index) => {
        return (
          <li key={index} className={cn(`mb-10 ms-4 rounded-lg border bg-background p-4 pl-1 shadow-sm`)}>
            <div
              className={cn(`absolute -start-1 mt-1.5 h-2 w-2 rounded-full`)}
              style={{ backgroundColor: item.color }}
            />
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={config}
              className="flex flex-col items-start gap-2 px-4"
            >
              <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-2">
                <div className="flex items-center gap-2">
                  {item.picture && (
                    <Image src={item.picture} alt={item.title} width={20} height={20} className="rounded-sm" />
                  )}
                  <h1>{item.title}</h1>
                </div>
                <p className="rounded-lg bg-gray-100 px-2 py-1 text-sm font-medium dark:bg-muted">{item.date}</p>
              </div>
              <p className="text-medium font-normal text-neutral-600/70 dark:text-neutral-100/70">{item.description}</p>
              <Button variant="link" onClick={() => onExperienceClick(item)} className="p-0">
                Voir en détail
              </Button>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
};
