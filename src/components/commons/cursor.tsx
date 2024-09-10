'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AnimatedCursor: React.FC = () => {
  // --- Variables
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTextMode, setIsTextMode] = useState(false);
  const [isButtonMode, setIsButtonMode] = useState(false);
  const [headingSize, setHeadingSize] = useState(0);

  // --- Functions
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${event.clientY}px`;
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.transform = `translate(-50%, -50%)`;
      }

      if (event.target instanceof HTMLParagraphElement) {
        setIsTextMode(true);
        setIsButtonMode(false);
        setHeadingSize(0);
      } else if (
        event.target instanceof HTMLButtonElement ||
        event.target instanceof HTMLAnchorElement ||
        event.target instanceof HTMLSpanElement
      ) {
        setIsButtonMode(true);
        setIsTextMode(false);
        setHeadingSize(0);
      } else if (event.target instanceof HTMLHeadingElement) {
        const tagName = event.target.tagName;
        const size =
          tagName === 'H1'
            ? 40
            : tagName === 'H2'
              ? 34
              : tagName === 'H3'
                ? 28
                : tagName === 'H4'
                  ? 22
                  : tagName === 'H5'
                    ? 16
                    : 12;
        setHeadingSize(size);
        setIsTextMode(false);
        setIsButtonMode(false);
      } else {
        setHeadingSize(0);
        setIsTextMode(false);
        setIsButtonMode(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // --- Render
  return (
    <motion.div
      ref={cursorRef}
      className={cn(
        `fixed top-0 left-0 w-2 h-2 bg-purple-500/75 pointer-events-none z-[100]`
      )}
      animate={
        isTextMode
          ? { width: 2, height: 24, borderRadius: '4px' }
          : isButtonMode
            ? {
                width: 24,
                height: 24,
                borderRadius: '4px',
                pointerEvents: 'none',
              }
            : headingSize > 0
              ? { width: 4, height: headingSize, borderRadius: '4px' }
              : { width: 20, height: 20, borderRadius: '50%' }
      }
      transition={{
        duration: 0.1,
        ease: 'easeInOut',
      }}
    />
  );
};

export { AnimatedCursor };
