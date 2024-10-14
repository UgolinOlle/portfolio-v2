/**
 * @file info.tsx
 * @description Info component for projects
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

'use client';

// --- Imports
import { useState, useMemo } from 'react';

import { ProjectsList } from '~/components/projects/list';
import { ProjectExplorer } from '~/components/projects/explorer';
import { Container } from '~/components/commons/animation';
import * as projects from '~/lib/constants/projects';

/**
 * @name ProjectsInfo
 * @description Info component for projects
 * @returns {React.ReactElement} The component
 */
export const ProjectsInfo: React.FC = () => {
  // --- Variables
  const [selectedKeyword, setSelectedKeyword] = useState('');

  // --- Functions
  const handleSelect = (element: string) => setSelectedKeyword(element);

  const filteredProjects = useMemo(() => {
    if (!selectedKeyword) return projects.PROJECTS;
    return projects.PROJECTS.filter((project) => project.keywords?.includes(selectedKeyword));
  }, [selectedKeyword]);

  // --- Render
  return (
    <Container className="flex flex-col gap-10 lg:flex-row">
      <Container className="flex-shrink-0 overflow-auto transition duration-300 ease-in-out lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-1/3">
        <ProjectExplorer handleSelect={handleSelect} />
      </Container>
      <ProjectsList filteredProjects={filteredProjects} />
    </Container>
  );
};
