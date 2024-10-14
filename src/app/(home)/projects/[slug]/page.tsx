/**
 * @file page.tsx
 * @description Page to display a specific project
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '~/components/commons/animation';

import { MdxRender } from '~/components/commons/mdx/render';
import { Heading } from '~/components/ui/headers';
import { getProject, getProjects } from '~/lib/mdx/project';

export const dynamic = 'force-static';

/**
 * Generates static params for all project pages.
 * 
 * This function is used by Next.js to statically generate all project pages
 * at build time.
 * 
 * @returns {Promise<Array<{slug: string}>>} An array of objects containing the slug for each project.
 */
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Generates metadata for a specific project page.
 * 
 * This function is used by Next.js to generate the metadata for each project page,
 * including the title and description.
 * 
 * @param {Object} props - The props object containing the route parameters.
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.slug - The slug of the project.
 * @returns {Promise<Metadata>} A Promise that resolves to the Metadata object.
 */
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

/**
 * RoutePage component for rendering individual project pages.
 * 
 * This component fetches the project data based on the slug from the URL parameters,
 * and renders the project content using MDX. If the project is not found, it triggers
 * the notFound() function.
 * 
 * @param {Object} props - The props object containing the route parameters.
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.slug - The slug of the project to render.
 * @returns {Promise<JSX.Element>} A Promise that resolves to the rendered project page.
 */
export default async function RoutePage(props: { params: { slug: string } }) {
  // --- Variables
  const post = await getProject(props.params.slug);

  if (!post) {
    notFound();
  }

  // --- Render
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
