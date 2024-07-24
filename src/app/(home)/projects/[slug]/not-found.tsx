import Link from 'next/link';

import { Heading } from '@/components/ui/headers';

export default function NotFound() {
  // -- Render
  return (
    <div className="w-full h-[90vh] rounded-lg border flex flex-col gap-5 justify-center items-center text-black dark:text-gray-100">
      <Heading variant="h2">Le projet n'existe pas ou a été supprimé.</Heading>
      <Link href="/" className="text-blue-500 hover:underline">
        Revenir à la page des projets.
      </Link>
    </div>
  );
}
