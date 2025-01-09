/**
 * @file page.tsx
 * @description Component file for the projects page of Ugolin Ollé's portfolio
 * @author Ugolin Ollé
 * @version 1.0.0
 */

// --- Imports
import { Heading } from '~/components/ui/headers';
import { Container } from '~/components/commons/animation';
import { ProjectsInfo } from '~/components/projects/info';
import { Metadata } from 'next';

/**
 * Metadata for the projects page
 *
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: 'Projects · Ugolin Ollé',
  description: "Discover the projects I've worked on.",
};

/**
 * Page component for the projects page
 *
 * @returns {React.JSX.Element} The projects page component
 */
export default function ProjectsPage(): React.JSX.Element {
  // -- Rendering
  return (
    <Container className="my-8 flex flex-col gap-8">
      <Heading variant="h2">Projets</Heading>
      <ProjectsInfo />
    </Container>
  );
}
