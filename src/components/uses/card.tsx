import Image, { StaticImageData } from 'next/image';
import { Heading } from '../ui/headers';
import Link from 'next/link';

export interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export const UseCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  // --- Render
  return (
    <div className="flex items-center justify-between rounded-lg dark:hover:bg-muted py-4 transition duration-300 ease-in-out group/uses-card">
      <Image
        src={image}
        alt={title}
        width="70"
        height="70"
        className="rounded-lg m-auto transform group-hover/uses-card:translate-x-1 transition duration-300 ease-in-out"
      />
      <div className="flex flex-col gap-2 items-start w-2/3 transform group-hover/uses-card:translate-x-1 transition duration-300 ease-in-out">
        <div className="flex justify-between items-center w-full">
          <Heading variant="h3" border={false}>
            {title}
          </Heading>
          <Link
            target="_blank"
            href={link}
            passHref
            className="cursor-none text-sm px-2 py-1 rounded-full text-neutral-600/70 dark:text-neutral-400/70 bg-neutral-300/70 dark:bg-neutral-700/70 dark:hover:text-neutral-200/70 hover:text-neutral-800/70 transition duration-300 ease-in-out"
          >
            Obtenir
          </Link>
        </div>
        <p className="text-neutral-600/70 dark:text-neutral-400/70">
          {description}
        </p>
      </div>
    </div>
  );
};
