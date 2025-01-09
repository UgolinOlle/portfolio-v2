/**
 * @file list.tsx
 * @description List component for uses
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { Heading } from '~/components/ui/headers';
import { CardProps, UseCard, UseCardImage } from '~/components/uses/card';
import { Container } from '~/components/commons/animation';

/**
 * @type ListProps
 * @description Interface for the list props
 * @property {string} title - The title of the list
 * @property {CardProps[]} items - The items to display
 */
type ListProps = {
  title: string;
  items: CardProps[];
};

/**
 * @name UseList
 * @description List component for uses
 * @param {ListProps} props - The props for the list component
 * @returns {React.ReactElement} The component
 */
const UseList: React.FC<ListProps> = ({ title, items }) => {
  // --- Render
  return (
    <Container className="mt-16 flex flex-col gap-4">
      <Heading variant="h3" className="font-griffiths font-bold italic">
        {title}
      </Heading>
      <section className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <UseCard key={index} {...item} />
        ))}
      </section>
    </Container>
  );
};

/**
 * @name UseImagesList
 * @description List component for uses images
 * @param {ListProps} props - The props for the list component
 * @returns {React.ReactElement} The component
 */
const UseImagesList: React.FC<ListProps> = ({ title, items }) => {
  // --- Render
  return (
    <Container className="mt-16 flex flex-col gap-4">
      <Heading variant="h3" className="font-griffiths font-bold italic">
        {title}
      </Heading>
      <section className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <UseCardImage key={index} {...item} />
        ))}
      </section>
    </Container>
  );
};

export { UseList, UseImagesList };
