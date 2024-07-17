import { ProjectsList } from '@/components/projects/list';
import { Heading } from '@/components/ui/headers';

export default function ProjectsPage() {
  // -- Render
  return (
    <div className="flex flex-col gap-10">
      <Heading variant="h2">Projects</Heading>
      <ProjectsList />
    </div>
  );
}
