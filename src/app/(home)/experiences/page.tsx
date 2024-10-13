import { Metadata } from 'next';

import { ExperiencesInfo } from '~/components/experiences/info';
import { Container } from '~/components/commons/animation';
import { Heading } from '~/components/ui/headers';

export const metadata: Metadata = {
  title: 'Experiences · Ugolin Ollé',
  description: 'Liste des expériences professionnelles.',
};

export default function ExperiencePage() {
  // -- Render
  return (
    <Container className="mb-28">
      <Container className="mb-5 w-full">
        <Heading variant="h2">Experiences</Heading>
        <p className="py-4 text-justify text-lg text-neutral-600 dark:text-neutral-200">
          Voici l'ensemble de mes expériences.
        </p>
      </Container>
      <Container className="flex w-full flex-col items-start justify-between lg:flex-row">
        <ExperiencesInfo />
      </Container>
    </Container>
  );
}
