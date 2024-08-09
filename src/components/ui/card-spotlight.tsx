'use client';

import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';
import React, { MouseEvent as ReactMouseEvent } from 'react';

import { cn } from '@/lib/utils';

/**
 * @component CardSpotlight
 * @description Card with spotlight effect.
 * @returns {JSX.Element} React component
 * @param {number} radius - Radius of the CardSpotlight
 * @exports CardSpotlight
 */
const CardSpotlight = ({
  children,
  radius = 360,
  color = '#8338ec',
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  // -- Variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // -- Functions
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // -- Render
  return (
    <div
      className={cn('group/spotlight relative', className)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

export { CardSpotlight };
