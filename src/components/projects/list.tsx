'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { IProjectItem } from '@/lib/interfaces/project';
import { SOCIALS_ICONS } from '@/components/commons/icons/socials';
import { Heading } from '@/components/ui/headers';

/**
 * @name ProjectItem
 * @description Project item with hover animations.
 * @returns {JSX.Element} React component
 * @exports ProjectItem
 */
const ProjectItem: React.FC<IProjectItem> = (props): JSX.Element => {
  // --- Variables
  const [hoverRotate, setHoverRotate] = useState<number>(0);

  // --- Functions
  const handleMouseEnter = () => {
    setHoverRotate(Math.random() * 5 - 2.5);
  };

  const handleMouseLeave = () => {
    setHoverRotate(0);
  };

  // --- Variantes pour les animations
  const variants = {
    hover: {
      rotate: hoverRotate,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  // --- Render
  return (
    <motion.li
      className={`bg-neutral-100 dark:bg-neutral-900 shadow-md rounded-lg p-4 w-full flex flex-col items-start gap-10 h-auto border`}
      variants={variants}
      whileHover="hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layout
    >
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="w-full relative" style={{ paddingBottom: '50%' }}>
          {props.imageBg && (
            <Image
              src={props.imageBg}
              alt={`${props.name} background`}
              fill
              style={{ objectFit: 'cover' }}
              className="absolute top-0 left-0 w-full h-full rounded-lg opacity-25"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJncmF5Ii8+PC9zdmc+"
            />
          )}
          <Image
            src={props.imageUrl}
            alt={props.name}
            fill
            objectFit={`${props.imageSize || 'cover'}`}
            className="rounded-lg"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJncmF5Ii8+PC9zdmc+"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Heading variant="h3" border={false}>
            {props.name}
          </Heading>
          <p className="text-md text-neutral-600 dark:text-neutral-300">
            {props.description}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href={`/projects/${props.url}`}
              className="flex items-center gap-2 text-blue-500 hover:underline group/project-link"
            >
              Voir le projet
              <MoveUpRight
                size={16}
                className="group-hover/project-link:underline"
              />
            </Link>

            {props.githubUrl !== '' && (
              <Link
                href={props.githubUrl}
                className="w-5 h-5 text-neutral-600 dark:text-neutral-300 hover:underline"
              >
                <SOCIALS_ICONS.github />
              </Link>
            )}
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 mt-2">
        {props.technologies.map((tech) => (
          <li
            key={tech}
            className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs px-2 py-1 rounded-lg inline-block"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.li>
  );
};

/**
 * @name ProjectsList
 * @description List of projects.
 * @returns {JSX.Element} React component
 * @example <ProjectsList />
 * @exports ProjectsList
 */
const ProjectsList: React.FC<{
  filteredProjects: IProjectItem[];
}> = ({ filteredProjects }): JSX.Element => {
  // --- Render
  return (
    <motion.ul
      className="grid grid-cols-1 md:grid-cols-2 gap-5 h-auto"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <AnimatePresence>
        {filteredProjects.map((project) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
            transition={{ duration: 0.3 }}
            layout
          >
            <ProjectItem {...project} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export { ProjectsList, ProjectItem };
