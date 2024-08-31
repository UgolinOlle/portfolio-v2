import { AnimatedContainer } from '@/components/commons/animation';
import { ProjectsContent } from '@/components/projects/content';

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <AnimatedContainer custom={0}>
      <ProjectsContent slug={params.slug} />
    </AnimatedContainer>
  );
}
