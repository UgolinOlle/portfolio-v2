import Image, { StaticImageData } from 'next/image';
import { Heading } from '../ui/headers';

export interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export const UseCard: React.FC<CardProps> = ({ title, description, image }) => {
  // --- Render
  return (
    <div className="flex items-center justify-between rounded-lg dark:hover:bg-muted p-4 transition duration-300 ease-in-out group/uses-card">
      <Image
        src={image}
        alt={title}
        width="70"
        height="70"
        className="rounded-lg m-auto transform group-hover/uses-card:translate-x-1 transition duration-300 ease-in-out"
      />
      <div className="flex flex-col gap-2 items-center w-2/3 transform group-hover/uses-card:translate-x-1 transition duration-300 ease-in-out">
        <div className="flex justify-between items-center w-full">
          <Heading variant="h3" border={false}>
            {title}
          </Heading>
          <span className="px-3 py-1 rounded-full text-neutral-600/70 dark:text-neutral-400/70 bg-neutral-300/70 dark:bg-neutral-700/70 dark:hover:text-neutral-200/70 transition duration-300 ease-in-out">
            Obtenir
          </span>
        </div>
        <p className="text-neutral-600/70 dark:text-neutral-400/70">
          {description}
        </p>
      </div>
    </div>
  );
};
