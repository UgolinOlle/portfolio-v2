import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '~/components/commons/animation';

import { MdxRender } from '~/components/commons/mdx/render';
import { Heading } from '~/components/ui/headers';
import { getProject, getProjects } from '~/lib/mdx/project';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const generateMetadata = async (props: { params: { slug: string } }): Promise<Metadata> => {
  const post = await getProject(props.params.slug);

  if (!post) {
    return {
      title: '404 - Page Not Found',
      description: 'Page not found',
    };
  }

  return {
    title: `${post.title} · Ugolin Ollé`,
    description: post.description,
  };
};

export default async function RoutePage(props: { params: { slug: string } }) {
  const post = await getProject(props.params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <article className="prose prose-sm max-w-none lg:prose-lg">
        <div className="flex items-center gap-2">
          <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
        </div>
        <Heading variant="h1" border={false}>
          {post.title}
        </Heading>
        <MdxRender>{post.content}</MdxRender>
      </article>
    </Container>
  );
}
