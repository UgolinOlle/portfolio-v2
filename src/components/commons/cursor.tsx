'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTextMode, setIsTextMode] = useState(false);
  const [isButtonMode, setIsButtonMode] = useState(false);
  const [isHeadingMode, setIsHeadingMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${event.clientY}px`;
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.transform = `translate(-50%, -50%)`;
      }

      if (
        event.target instanceof HTMLParagraphElement ||
        event.target instanceof HTMLAnchorElement
      ) {
        setIsTextMode(true);
        setIsButtonMode(false);
        setIsHeadingMode(false);
      } else if (event.target instanceof HTMLButtonElement) {
        setIsButtonMode(true);
        setIsTextMode(false);
        setIsHeadingMode(false);
      } else if (event.target instanceof HTMLHeadingElement) {
        setIsHeadingMode(true);
        setIsTextMode(false);
        setIsButtonMode(false);
      } else {
        setIsHeadingMode(false);
        setIsTextMode(false);
        setIsButtonMode(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2 h-2 bg-purple-500 pointer-events-none z-50"
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
            : isHeadingMode
              ? { width: 4, height: 34, borderRadius: '4px' }
              : { width: 14, height: 14, borderRadius: '50%' }
      }
      transition={{
        duration: 0.1,
        ease: 'easeInOut',
      }}
    />
  );
};

export { AnimatedCursor };
