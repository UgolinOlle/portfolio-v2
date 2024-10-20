/**
 * @file list.tsx
 * @description List component for projects
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

'use client';

// --- Imports
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { IProjectItem } from '~/lib/interfaces/project';
import { SOCIALS_ICONS } from '~/components/commons/icons/socials';
import { Heading } from '~/components/ui/headers';

/**
 * @name ProjectItem
 * @description Project item with hover animations.
 * @param {IProjectItem} props - The props for the project item
 * @returns {JSX.Element} React component
 */
const ProjectItem: React.FC<IProjectItem> = (props): JSX.Element => {
  // --- Variables
  const [hoverRotate, setHoverRotate] = useState<number>(0);
  const variants = {
    hover: {
      rotate: hoverRotate,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  // --- Functions
  const handleMouseEnter = () => {
    setHoverRotate(Math.random() * 5 - 2.5);
  };

  const handleMouseLeave = () => {
    setHoverRotate(0);
  };

  // --- Render
  return (
    <motion.li
      className={`flex h-auto w-full flex-col items-start gap-10 rounded-lg border bg-neutral-100 p-4 shadow-md dark:bg-neutral-900`}
      variants={variants}
      whileHover="hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layout
    >
      <div className="flex w-full flex-col items-start gap-6">
        <div className="relative w-full" style={{ paddingBottom: '50%' }}>
          {props.imageBg && (
            <Image
              src={props.imageBg}
              alt={`${props.name} background`}
              fill
              style={{ objectFit: 'cover' }}
              className="absolute left-0 top-0 h-full w-full rounded-lg opacity-25"
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
          <Heading variant="h3">{props.name}</Heading>
          <p className="text-md text-neutral-600 dark:text-neutral-300">{props.description}</p>
          <div className="flex items-center gap-5">
            <Link
              href={`/projects/${props.url}`}
              className="group/project-link flex items-center gap-2 text-blue-500 hover:underline"
            >
              Voir le projet
              <MoveUpRight size={16} className="group-hover/project-link:underline" />
            </Link>

            {props.githubUrl !== '' && (
              <Link href={props.githubUrl} className="h-5 w-5 text-neutral-600 hover:underline dark:text-neutral-300">
                <SOCIALS_ICONS.github />
              </Link>
            )}
          </div>
        </div>
      </div>
      <ul className="mt-2 flex flex-wrap gap-2">
        {props.technologies.map((tech) => (
          <li
            key={tech}
            className="inline-block rounded-lg bg-neutral-200 px-2 py-1 text-xs text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300"
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
 * @param {IProjectItem[]} filteredProjects - The filtered projects
 * @returns {JSX.Element} React component
 */
const ProjectsList: React.FC<{
  filteredProjects: IProjectItem[];
}> = ({ filteredProjects }): JSX.Element => {
  // --- Render
  return (
    <motion.ul
      className="grid h-auto grid-cols-1 gap-5 md:grid-cols-2"
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
