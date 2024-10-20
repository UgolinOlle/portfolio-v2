/**
 * @file not-found.tsx
 * @description Not found component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { Heading } from '~/components/ui/headers';
import Link from 'next/link';

/**
 * Not found component
 *
 * @returns {React.JSX.Element} The not found component
 */
export default function NotFound() {
  // --- Render
  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-5 rounded-lg text-black sm:border">
      <Heading align="center">404</Heading>
      <Link href="/" className="text-blue-500 hover:underline">
        Go to Home
      </Link>
    </div>
  );
}
