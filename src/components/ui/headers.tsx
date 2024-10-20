import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

// --- Header Variants
const headingVariants = cva('text-lg font-semibold', {
  variants: {
    variant: {
      hero: 'lg:text-8xl md:text-7xl text-6xl font-light',
      h1: 'lg:text-6xl md:text-5xl text-4xl font-bold text-neutral-900 dark:text-neutral-200',
      h2: 'lg:text-5xl md:text-4xl text-3xl font-semibold text-neutral-900 dark:text-neutral-200',
      h3: 'lg:text-4xl md:text-3xl text-2xl font-medium text-neutral-900 dark:text-neutral-200',
      h4: 'lg:text-3xl md:text-2xl text-xl font-medium text-neutral-900 dark:text-neutral-200',
    },
    align: {
      left: 'justify-start leading-snug md:leading-normal text-left',
      center: 'justify-center leading-snug md:leading-normal text-center',
      right: 'justify-end leading-snug md:leading-normal text-right',
    },
  },
  defaultVariants: {
    variant: 'h1',
    align: 'left',
  },
});

interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

/**
 * @name Heading
 * @description A heading component that can be used to display different heading sizes.
 * @returns {React.ReactElement} The heading component.
 */
const Heading: React.FC<IHeadingProps> = ({ variant, align, className, ...props }): React.ReactElement => {
  return (
    <div className={cn('flex w-full items-center', headingVariants({ align }))}>
      <h1 className={cn(headingVariants({ variant }), className)}>{props.children}</h1>
    </div>
  );
};

export { headingVariants, Heading };
