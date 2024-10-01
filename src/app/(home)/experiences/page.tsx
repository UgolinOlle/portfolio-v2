import { Metadata } from 'next';

import { ExperiencesInfo } from '~/components/experiences/info';
import { Container } from '~/components/commons/animation';
import { Heading } from '~/components/ui/headers';

export const metadata: Metadata = {
  title: 'Experiences | Ugolin Ollé',
  description: 'Mex experiences professionnelles',
};

export default function ExperiencePage() {
  // -- Render
  return (
    <Container  className="mb-28">
      <Container  className="mb-5 w-full">
        <Heading variant="h2">Experiences</Heading>
        <p className="text-lg text-neutral-600 dark:text-neutral-200 text-justify py-4">
          Voici l'ensemble de mes expériences.
        </p>
      </Container>
      <Container
        
        className="w-full flex flex-col lg:flex-row justify-between items-start"
      >
        <ExperiencesInfo />
      </Container>
    </Container>
  );
}
