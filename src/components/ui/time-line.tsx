'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { ITimelineItem } from '@/lib/constants/experience';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

// -- Timeline configuration
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

export const Timeline = ({
  timelineData,
}: {
  timelineData: ITimelineItem[];
}): JSX.Element => {
  // -- Render
  return (
    <div>
      <ul className="relative border-l border-gray-300 border-opacity-50">
        {timelineData.map((item, index) => (
          <li key={index} className={cn('mb-10 ms-4')}>
            <div
              className={`absolute w-2 h-2 ${item.color} rounded-full mt-1.5 -start-1`}
            ></div>
            <motion.div
              className="pl-1"
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
                    className="rounded-full"
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
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};
