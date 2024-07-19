import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// -- Header Variants
const headingVariants = cva('text-lg font-semibold', {
  variants: {
    variant: {
      hero: 'lg:text-8xl md:text-7xl text-6xl font-light',
      h1: 'lg:text-6xl md:text-5xl text-4xl font-bold',
      h2: 'lg:text-3xl md:text-2xl text-xl font-bold',
      h3: 'lg:text-2xl md:text-xl text-lg font-bold',
      h4: 'lg:text-xl md:text-lg text-base font-bold',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

export interface IHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

function Heading({
  variant,
  className,
  ...props
}: IHeadingProps): React.ReactElement {
  return (
    <h1 className={cn(headingVariants({ variant }), className)}>
      {props.children}
    </h1>
  );
}

export { headingVariants, Heading };
