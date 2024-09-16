import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import path from 'path';
import { notFound } from 'next/navigation';

import { getProject, getFilenames } from '@/lib/utils/projects';
import { Heading } from '@/components/ui/headers';
import { AnimatedContainer } from '@/components/commons/animation';
import { ClientMdxRenderer } from '@/components/commons/mdx/render';
import { CommitList } from '@/components/projects/commits';

export async function generateStaticParams() {
  const filenames = getFilenames();
  const markdownRegex = /\.md(x)?$/;
  const paths = filenames.map((filename) => ({
    slug: filename.replace(markdownRegex, '').split(path.sep),
  }));

  return paths;
}

export default async function ProjectBySlug({
  params,
}: {
  params: { slug: string };
}) {
  // --- Variables
  const project = getProject(params.slug);

  if (!project) notFound();

  let mdxSource = await serialize(project.content);

  // --- Render
  return (
    <AnimatedContainer custom={0}>
      <Heading variant="h2">{project.data.title}</Heading>

      <br />

      <em>Created: {new Date(project.data.date).toLocaleDateString()}</em>

      <br />

      {project.data.thumbnailUrl && (
        <Image
          src={`/images/${project.data.thumbnailUrl}`}
          alt={`${project.data.title} thumbnail`}
          width={640}
          height={200}
          style={{ objectFit: 'cover' }}
        />
      )}

      <br />

      <ClientMdxRenderer content={mdxSource} />

      {project.data.github && (
        <CommitList repoName={project.data.github} className="w-1/2" />
      )}
    </AnimatedContainer>
  );
}
