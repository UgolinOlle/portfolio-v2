'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

import { IProjectItem } from '@/lib/interfaces/project';
import { SOCIALS_ICONS } from '@/components/commons/icons/socials';
import { Heading } from '@/components/ui/headers';
import { AnimatedGrid } from '@/components/commons/animation';

/**
 * @name ProjectItem
 * @description Project item.
 * @returns {JSX.Element} React component
 * @exports ProjectItem
 */
const ProjectItem: React.FC<IProjectItem> = (props): JSX.Element => {
  // --- Variables
  const [hoverRotate, setHoverRotate] = useState(0);

  // --- Functions
  const handleMouseEnter = () => {
    setHoverRotate(Math.random() * 5 - 2.5);
  };

  const handleMouseLeave = () => {
    setHoverRotate(0);
  };

  // --- Render
  return (
    <li
      className={`bg-neutral-100 dark:bg-neutral-900 shadow-md rounded-lg p-4 w-full flex flex-col items-start justify-between min-h-[130px] max-h-[650px] border`}
      style={{ rotate: `${hoverRotate}deg`, transition: 'rotate 0.3s' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="w-full relative" style={{ paddingBottom: '50%' }}>
          {props.imageBg && (
            <Image
              src={props.imageBg}
              alt={`${props.name} background`}
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 w-full h-full rounded-lg opacity-25"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJncmF5Ii8+PC9zdmc+"
            />
          )}
          <Image
            src={props.imageUrl}
            alt={props.name}
            layout="fill"
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
    </li>
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
  custom: number;
}> = ({ filteredProjects, custom }): JSX.Element => {
  // -- Render
  return (
    <AnimatedGrid custom={custom}>
      {filteredProjects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </AnimatedGrid>
  );
};

export { ProjectsList, ProjectItem };
