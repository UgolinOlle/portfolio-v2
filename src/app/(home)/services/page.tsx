import { Skills } from '@/components/about/skills';
import { AnimatedContainer } from '@/components/commons/animation';
import { Metadata } from 'next';

// --- Metadata
export const metadata: Metadata = {
  title: 'Services | Ugolin Olle',
  description: 'Les services que je propose',
};

export default function ServicesPage() {
  // --- Render
  return (
    <AnimatedContainer custom={0}>
      <Skills />
    </AnimatedContainer>
  );
}
