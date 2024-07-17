import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IProjectItem, PROJECTS } from '@/lib/constants/projects';
import { SOCIALS_ICONS } from '@/components/commons/icons/socials';
import { Heading } from '@/components/ui/headers';

/**
 * @name ProjectItem
 * @description Project item.
 * @returns {JSX.Element} React component
 * @exports ProjectItem
 */
const ProjectItem: React.FC<IProjectItem> = (props): JSX.Element => {
  // -- Render
  return (
    <li className="bg-white dark:bg-black/75 shadow-md rounded-lg p-4 w-full flex flex-col justify-between items-start gap-4">
      <Image
        src={props.imageUrl}
        alt={props.name}
        width={400}
        height={200}
        className="rounded-lg"
      />
      <div className="flex flex-col items-start gap-2">
        <Heading variant="h3">{props.name}</Heading>
        <p className="text-md text-gray-500">{props.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <Link
            href={props.githubUrl}
            className="w-5 h-5 text-black/80 hover:underline"
          >
            <SOCIALS_ICONS.github />
          </Link>
          <Link
            href={props.url}
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            Voir le projet <MoveUpRight size={16} />
          </Link>
        </div>
      </div>
      <ul className="flex gap-2 mt-2">
        {props.technologies.map((tech) => (
          <li
            key={tech}
            className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-lg"
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
const ProjectsList: React.FC = (): JSX.Element => {
  // -- Render
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </ul>
  );
};

export { ProjectsList };
