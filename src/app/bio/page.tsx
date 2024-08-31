import { BioList } from '@/components/bio/list';
import { AnimatedContainer } from '@/components/commons/animation';
import { Heading } from '@/components/ui/headers';
import { BIO_LINKS } from '@/lib/constants/bio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lien bio | Ugolin Ollé',
  description: 'Liste de mes liens',
};

export default function BioPage() {
  // -- Render
  return (
    <AnimatedContainer
      custom={0}
      className="flex flex-col min-h-[80vh] items-center justify-center"
    >
      <Heading variant="h1" border={false} align="center">
        Bio links
      </Heading>
      <BioList bios={BIO_LINKS} className="mt-5" />
    </AnimatedContainer>
  );
}
