import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IProjectItem } from '@/lib/constants/projects';
import { SOCIALS_ICONS } from '@/components/commons/icons/socials';
import { Heading } from '@/components/ui/headers';
import { AnimatedGrid } from '../commons/animation';

/**
 * @name ProjectItem
 * @description Project item.
 * @returns {JSX.Element} React component
 * @exports ProjectItem
 */
const ProjectItem: React.FC<IProjectItem> = (props): JSX.Element => {
  // -- Render
  return (
    <li className="bg-white dark:bg-secondary-black/75 shadow-md rounded-lg p-4 w-full flex flex-col items-start gap-6 min-h-[150px]">
      <div className="w-full relative" style={{ paddingBottom: '50%' }}>
        <Image
          src={props.imageUrl}
          alt={props.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <Heading variant="h3" border={false}>
          {props.name}
        </Heading>
        <p className="text-md text-gray-500">{props.description}</p>
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
          <Link
            href={props.githubUrl}
            className="w-5 h-5 text-gray-800 dark:text-gray-200/75 hover:underline"
          >
            <SOCIALS_ICONS.github />
          </Link>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 mt-2">
        {props.technologies.map((tech) => (
          <li
            key={tech}
            className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-lg inline-block"
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
