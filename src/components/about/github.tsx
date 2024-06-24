import useSWR from 'swr';
import { toast } from 'sonner';
import { Heading } from '../ui/headers';
import { SOCIALS_ICONS } from '../socials';
import Link from 'next/link';
import Image from 'next/image';

interface GithubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const GithubProfile: React.FC = () => {
  // -- Functions
  const { data, error } = useSWR<GithubProfile>('/api/github', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 12 * 60 * 60 * 1000,
  });

  if (error) {
    toast.error('An error occurred while fetching data from GitHub');
    return <div>Error: Failed to load</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // -- Render
  return (
    <div className="flex flex-col items-start gap-10 bg-gradient-to-br from-black/75 to-gray-700/75 p-6 rounded-lg shadow-lg">
      <Heading
        variant="h2"
        className="flex flex-row gap-3 items-center text-white"
      >
        <span className="w-6 h-6">{SOCIALS_ICONS.github()}</span>
        Profile GitHub
      </Heading>
      <div className="flex flex-col gap-3 items-start">
        <p className="text-white font-bold">Repos: {data.public_repos}</p>
        <p className="text-white font-bold">Abonnés: {data.followers}</p>
        <p className="text-white font-bold">Abonnements: {data.following}</p>
      </div>
      <Link
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 transition ease-in-out hover:text-blue-400"
      >
        View Profile on GitHub
      </Link>
    </div>
  );
};
