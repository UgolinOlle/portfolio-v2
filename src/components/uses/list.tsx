import { Heading } from '@/components/ui/headers';
import { CardProps, UseCard, UseCardImage } from '@/components/uses/card';
import { AnimatedContainer } from '@/components/commons/animation';

interface ListProps {
  title: string;
  items: CardProps[];
}

const UseList: React.FC<ListProps> = ({ title, items }) => {
  // --- Render
  return (
    <AnimatedContainer custom={1} className="flex flex-col gap-4 mt-16">
      <Heading variant="h3" border={false}>
        {title}
      </Heading>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-5">
        {items.map((item, index) => (
          <UseCard key={index} {...item} />
        ))}
      </section>
    </AnimatedContainer>
  );
};

const UseImagesList: React.FC<ListProps> = ({ title, items }) => {
  // --- Render
  return (
    <AnimatedContainer custom={1} className="flex flex-col gap-4 mt-16">
      <Heading variant="h3" border={false}>
        {title}
      </Heading>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-5">
        {items.map((item, index) => (
          <UseCardImage key={index} {...item} />
        ))}
      </section>
    </AnimatedContainer>
  );
};

export { UseList, UseImagesList };
