'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Heading } from '@/components/ui/headers';
import { cn } from '@/lib/utils';

export interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
}

const UseCard: React.FC<CardProps> = ({ title, description, image, link }) => {
  // --- Render
  return (
    <div className="flex items-center justify-between rounded-lg dark:hover:bg-muted py-4 px-2 transition duration-300 ease-in-out group/uses-card">
      <Image
        src={image}
        alt={title}
        width="70"
        height="70"
        className="rounded-lg m-auto transform group-hover/uses-card:translate-x-1 transition duration-300 ease-in-out"
      />
      <div className="flex flex-col gap-2 items-start w-2/3">
        <div className="flex justify-between items-center w-full">
          <Heading
            variant="h3"
            border={false}
            className="transform group-hover/uses-card:translate-x-1 transition duration-300 ease-in-out"
          >
            {title}
          </Heading>
          {link && (
            <Link
              target="_blank"
              href={link}
              passHref
              className="cursor-none text-sm px-2 py-1 rounded-full text-neutral-600/70 dark:text-neutral-400/70 bg-neutral-300/70 dark:bg-neutral-700/70 dark:hover:text-neutral-200/70 hover:text-neutral-800/70 transition duration-300 ease-in-out"
            >
              Obtenir
            </Link>
          )}
        </div>
        <p className="text-neutral-600/70 dark:text-neutral-400/70 transform group-hover/uses-card:translate-x-1 transition duration-300 ease-in-out">
          {description}
        </p>
      </div>
    </div>
  );
};

const UseCardImage: React.FC<CardProps> = ({ title, description, image }) => {
  // --- Variables
  const textVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 10,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  // --- Render
  return (
    <div className="relative flex items-center justify-center rounded-lg py-4 px-2 transition duration-300 ease-in-out group/uses-card overflow-hidden">
      <Image
        src={image}
        alt={title}
        width="300"
        height="300"
        className="rounded-lg m-auto transform transition duration-300 ease-in-out w-full h-full object-cover"
      />
      <motion.div
        initial="hidden"
        whileHover="visible"
        className={cn(
          'absolute bottom-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 pb-8 opacity-0 group-hover/uses-card:opacity-100 transition duration-300 ease-in-out',
          'bg-gradient-to-t from-white/60 to-transparent'
        )}
      >
        <motion.div variants={textVariants}>
          <Heading
            variant="h3"
            className="text-lg text-neutral-100 font-semibold"
          >
            {title}
          </Heading>
        </motion.div>
        <motion.p variants={textVariants} className="text-neutral-100 mt-1">
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
};

export { UseCard, UseCardImage };
