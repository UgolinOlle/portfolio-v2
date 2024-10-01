import { Heading } from '~/components/ui/headers';
import Link from 'next/link';

export default function NotFound() {
  // -- Render
  return (
    <div className="w-full h-[90vh] rounded-lg sm:border flex flex-col gap-5 justify-center items-center text-black">
      <Heading>404 Not Found</Heading>
      <Link href="/" className="text-blue-500 hover:underline">
        Go to Home
      </Link>
    </div>
  );
}
