/**
 * @file not-found.tsx
 * @description Page to display when a project is not found
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import Link from 'next/link';

import { Heading } from '~/components/ui/headers';

/**
 * NotFound component for project pages.
 * 
 * This component is displayed when a project is not found or has been deleted.
 * It shows a message to the user and provides a link to return to the projects page.
 * 
 * @returns {JSX.Element} The rendered NotFound component.
 */
export default function NotFound() {
  // --- Render
  return (
    <div
      className="w-full h-[90vh] rounded-lg border flex flex-col gap-5 justify-center items-center text-black 
    dark:text-gray-100 text-center"
    >
      <Heading variant="h2" border={false} className="text-center mx-auto">
        Le projet n'existe pas ou a été supprimé.
      </Heading>
      <Link href="/projects" className="text-blue-500 hover:underline">
        Revenir à la page des projets.
      </Link>
    </div>
  );
}
