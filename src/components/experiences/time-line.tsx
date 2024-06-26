'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ITimelineItem } from '@/lib/constants/experience';
import { Button } from '../ui/button';

export const Timeline = ({
  timelineData,
  onExperienceClick,
}: {
  timelineData: ITimelineItem[];
  onExperienceClick: (experience: ITimelineItem) => void;
}): JSX.Element => {
  // -- Variables
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

  // -- Render
  return (
    <div>
      <ul className="relative border-l border-gray-300 border-opacity-50">
        {timelineData.map((item, index) => {
          const bgColor = item.color.replace('bg-', '');
          return (
            <li
              key={index}
              className="mb-10 ms-4 pl-1 rounded-lg p-4 shadow-sm"
              style={{
                background: `linear-gradient(to right, var(--${bgColor}), #fff)`,
              }}
            >
              <div
                className={`absolute w-2 h-2 ${item.color} rounded-full mt-1.5 -start-1`}
              />
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={config}
              >
                <div className="flex items-center gap-2">
                  {item.picture && (
                    <Image
                      src={item.picture}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  )}
                  <h1>{item.title}</h1>
                  <p className="px-2 py-1 bg-gray-100 rounded-lg text-sm font-light">
                    {item.date}
                  </p>
                </div>
                <p className="text-medium text-gray-700/75 font-normal">
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
    </div>
  );
};
