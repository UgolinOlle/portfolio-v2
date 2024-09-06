import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// -- Header Variants
const headingVariants = cva('text-lg font-semibold', {
  variants: {
    variant: {
      hero: 'lg:text-8xl md:text-7xl text-6xl font-light',
      h1: 'lg:text-5xl md:text-4xl text-3xl font-bold',
      h2: 'lg:text-3xl md:text-2xl text-xl font-bold',
      h3: 'lg:text-2xl md:text-xl text-lg font-bold',
      h4: 'lg:text-xl md:text-lg text-base font-bold',
    },
    align: {
      left: 'justify-start leading-snug md:leading-normal text-center md:text-left',
      center: 'justify-center leading-snug md:leading-normal text-center',
      right:
        'justify-end text-center leading-snug md:leading-normal md:text-right',
    },
  },
  defaultVariants: {
    variant: 'h1',
    align: 'left',
  },
});

export interface IHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  border?: boolean;
}

/**
 * @name Heading
 * @description A heading component that can be used to display different heading sizes.
 * @param {string} variant - The variant of the heading.
 * @returns {React.ReactElement} The heading component.
 */
function Heading({
  variant,
  align,
  className,
  border = true,
  ...props
}: IHeadingProps): React.ReactElement {
  return (
    <div
      className={cn(
        'flex items-center w-full',
        `${border ? 'gap-5' : ''}`,
        headingVariants({ align })
      )}
    >
      <h1 className={cn(headingVariants({ variant }), className)}>
        {props.children}
      </h1>
      <span
        className={cn(border ? '' : 'hidden', `flex-grow h-0.5 bg-gray-100`)}
      />
    </div>
  );
}

export { headingVariants, Heading };
