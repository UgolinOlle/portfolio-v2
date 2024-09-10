import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import path from 'path';
import { notFound } from 'next/navigation';

import { getProject, getFilenames } from '@/lib/utils/projects';
import { Heading } from '@/components/ui/headers';
import { AnimatedContainer } from '@/components/commons/animation';
import { ClientMdxRenderer } from '@/components/commons/mdx/render';

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
  try {
    // Récupère les données du projet
    const project = getProject(params.slug);

    if (!project) notFound();

    // Sérialisation du contenu MDX avant de l'envoyer au composant client
    const mdxSource = await serialize(project.content);

    return (
      <AnimatedContainer custom={0}>
        <Heading variant="h2">{project.data.title}</Heading>
        <em>Created: {project.data.publishedDate.toLocaleDateString()}</em>
        <br />
        {project.data.modifiedDate && (
          <>
            <em>Modified: {project.data.modifiedDate.toLocaleDateString()}</em>
            <br />
          </>
        )}
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

        {/* Passer le contenu sérialisé à ClientMdxRenderer */}
        <ClientMdxRenderer content={mdxSource} />
      </AnimatedContainer>
    );
  } catch (error) {
    console.error('Error rendering project:', error);
    notFound();
  }
}
