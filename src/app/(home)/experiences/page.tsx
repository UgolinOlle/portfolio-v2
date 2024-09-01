import { Metadata } from 'next';

import { ExperiencesInfo } from '@/components/experiences/info';
import { AnimatedContainer } from '@/components/commons/animation';
import { Heading } from '@/components/ui/headers';

export const metadata: Metadata = {
  title: 'Experiences | Ugolin Ollé',
  description: 'Mex experiences professionnelles',
};

export default function ExperiencePage() {
  // -- Render
  return (
    <AnimatedContainer custom={0} className="mt-10 mb-28">
      <AnimatedContainer custom={1} className="mb-5 w-full">
        <Heading variant="h2">Experiences</Heading>
        <p className="text-lg text-gray-700/75 text-justify">
          Voici l'ensemble de mes expériences.
        </p>
      </AnimatedContainer>
      <AnimatedContainer
        custom={2}
        className="w-full flex flex-col lg:flex-row justify-between items-start"
      >
        <ExperiencesInfo />
      </AnimatedContainer>
    </AnimatedContainer>
  );
}
