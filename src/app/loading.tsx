/**
 * @file loading.tsx
 * @description Loading component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { Container } from '~/components/commons/animation';
import { Heading } from '~/components/ui/headers';

/**
 * Loading component
 * 
 * @returns {React.JSX.Element} The loading component
 */
export default function Loading() {
  // --- Render
  return (
    <Container className="flex h-[90vh] w-full flex-col items-center justify-center gap-5 rounded-lg text-black sm:border">
      <Heading
        variant="hero"
        align="center"
        border={false}
        className="bg-gradient-to-r from-primary to-neutral-800 bg-clip-text px-4 py-7 font-bumbbled text-transparent"
      >
        Ugolin Olle
      </Heading>
    </Container>
  );
}
