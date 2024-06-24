import useSWR from 'swr';
import { toast } from 'sonner';
import { Heading } from '../ui/headers';
import { SOCIALS_ICONS } from '../socials';
import Link from 'next/link';

interface LinkedInProfile {
  localizedFirstName: string;
  localizedLastName: string;
  profilePicture: {
    displayImage: string;
  };
  publicProfileUrl: string;
  followers: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const LinkedInProfile: React.FC = () => {
  const { data, error } = useSWR<LinkedInProfile>('/api/linkedin', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 12 * 60 * 60 * 1000,
  });

  if (error) {
    toast.error('An error occurred while fetching data from LinkedIn');
    return <div>Error: Failed to load</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-start gap-10 bg-gradient-to-br from-blue-700 to-blue-200 p-6 rounded-lg shadow-lg">
      <Heading
        variant="h2"
        className="flex flex-row gap-3 items-center text-white"
      >
        <span className="w-6 h-6">{SOCIALS_ICONS.linkedin()}</span>
        Profile LinkedIn
      </Heading>
      <div className="flex flex-col gap-3 items-start">
        <p className="text-white font-bold">
          Nom: {data.localizedFirstName} {data.localizedLastName}
        </p>
        <p className="text-white font-bold">Abonnés: {data.followers}</p>
      </div>
      {data.publicProfileUrl && (
        <Link
          href={data.publicProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 transition ease-in-out hover:text-blue-400"
        >
          View Profile on LinkedIn
        </Link>
      )}
    </div>
  );
};
