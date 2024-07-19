'use client';

import { useState, useMemo } from 'react';

import { ProjectsList } from '@/components/projects/list';
import { Folder, File, Tree } from '@/components/ui/file-tree';
import { Heading } from '@/components/ui/headers';
import { AnimatedContainer } from '@/components/commons/animation';
import { PROJECTS, PROJECTS_TREE } from '@/lib/constants/projects';

export default function ProjectsPage() {
  // -- Variables
  const [selectedKeyword, setSelectedKeyword] = useState('');

  // -- Functions
  const handleSelect = (element: any) => {
    console.log('Selected element:');
    console.log(element);
    setSelectedKeyword(element);
  };

  const filteredProjects = useMemo(() => {
    if (!selectedKeyword) return PROJECTS;
    return PROJECTS.filter((project) =>
      project.technologies.includes(selectedKeyword)
    );
  }, [selectedKeyword]);

  // -- Render
  return (
    <AnimatedContainer custom={0} className="flex flex-col gap-10">
      <Heading variant="h2">Projects</Heading>
      <div className="flex items-start justify-between gap-10">
        <AnimatedContainer
          custom={1}
          className="relative flex h-[100%] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background"
        >
          <Tree
            className="p-2 overflow-hidden rounded-md bg-background"
            initialSelectedId="7"
            initialExpandedItems={[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
            ]}
            elements={PROJECTS_TREE}
          >
            <Folder element="src" value="1">
              <Folder value="2" element="perso">
                <Folder value="6" element="ui">
                  <File value="7">
                    <p>landing-page.tsx</p>
                  </File>
                </Folder>
                <File value="3" onSelect={handleSelect}>
                  <p>web-app.tsx</p>
                </File>
                <File value="4">
                  <p>software.tsx</p>
                </File>
              </Folder>
              <Folder value="5" element="core">
                <File value="8">
                  <p>test.tsx</p>
                </File>
                <File value="9">
                  <p>footer.tsx</p>
                </File>
              </Folder>
              <Folder value="10" element="misc">
                <File value="11">
                  <p>utils.ts</p>
                </File>
              </Folder>
            </Folder>
          </Tree>
        </AnimatedContainer>
        <ProjectsList filteredProjects={filteredProjects} custom={2} />
      </div>
    </AnimatedContainer>
  );
}
