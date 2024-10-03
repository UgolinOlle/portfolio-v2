import { Heading } from '~/components/ui/headers';
import Link from 'next/link';

export default function NotFound() {
  // -- Render
  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-5 rounded-lg text-black sm:border">
      <Heading border={false} align="center">
        404
      </Heading>
      <Link href="/" className="text-blue-500 hover:underline">
        Go to Home
      </Link>
    </div>
  );
}
