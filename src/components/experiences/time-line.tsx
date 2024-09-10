'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { ITimelineItem } from '@/lib/interfaces/experience';
import { cn } from '@/lib/utils';

export const Timeline = ({
  timelineData,
  onExperienceClick,
}: {
  timelineData: ITimelineItem[];
  onExperienceClick: (experience: ITimelineItem) => void;
}): JSX.Element => {
  // --- Variables
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverRotates, setHoverRotates] = useState<number[]>([]);
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

  // --- Functions
  const handleMouseEnter = (index: number) => {
    const randomRotation = Math.random() * 5 - 2.5;
    setHoverIndex(index);
    setHoverRotates((prevRotates) => {
      const newRotates = [...prevRotates];
      newRotates[index] = randomRotation;
      return newRotates;
    });
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  // --- Render
  return (
    <ul className="relative border-l border-gray-300 border-opacity-50">
      {timelineData.map((item, index) => {
        return (
          <li
            key={index}
            className={cn(
              `mb-10 ms-4 pl-1 rounded-lg p-4 bg-neutral-100/70 dark:bg-neutral-800/70`
            )}
            // style={{
            //   rotate:
            //     hoverIndex === index
            //       ? `${hoverRotates[index] || 0}deg`
            //       : '0deg',
            //   transition: 'rotate 0.3s',
            // }}
            // onMouseEnter={() => handleMouseEnter(index)}
            // onMouseLeave={handleMouseLeave}
          >
            <div
              className={cn(`absolute w-2 h-2 rounded-full mt-1.5 -start-1`)}
              style={{ backgroundColor: item.color }}
            />
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={config}
              className="flex flex-col items-start gap-2"
            >
              <div className="flex flex-col items-start md:flex-row md:items-center gap-3 md:gap-2">
                <div className="flex items-center gap-2">
                  {item.picture && (
                    <Image
                      src={item.picture}
                      alt={item.title}
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                  )}
                  <h1>{item.title}</h1>
                </div>
                <p className="px-2 py-1 bg-gray-100 dark:bg-muted rounded-lg text-sm font-medium">
                  {item.date}
                </p>
              </div>
              <p className="text-medium text-neutral-600/70 dark:text-neutral-100/70 font-normal">
                {item.description}
              </p>
              <Button
                variant="link"
                onClick={() => onExperienceClick(item)}
                className="p-0"
              >
                Voir en détail
              </Button>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
};
