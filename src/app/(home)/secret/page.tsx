/**
 * @file page.tsx
 * @description Page to display a secret
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { Container } from '~/components/commons/animation';
import { SphereOrbitalTracerLoader } from '~/components/commons/loader';

/**
 * Secret page component
 * 
 * This component is used to display a secret page.
 * 
 * @returns {React.JSX.Element} The secret page component
 */
export default function SecretPage() {
  // --- Render
  return (
    <Container>
      <SphereOrbitalTracerLoader />
    </Container>
  );
}
