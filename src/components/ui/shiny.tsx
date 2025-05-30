import { CSSProperties, FC, ReactNode } from 'react';

import { cn } from '~/lib/utils';

interface ShinyContainerProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export const ShinyContainer: FC<ShinyContainerProps> = ({ children, className, shimmerWidth = 100 }) => {
  return (
    <div
      style={
        {
          '--shimmer-width': `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        'mx-auto max-w-md text-neutral-600 dark:text-neutral-400',
        'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',
        'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80',
        className
      )}
    >
      {children}
    </div>
  );
};
