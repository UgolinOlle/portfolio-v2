/**
 * @file cursor.tsx
 * @description Cursor component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

'use client';

// --- Imports
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation';

/**
 * @name Cursor
 * @description Cursor component
 * @returns {React.JSX.Element} The cursor component
 */
export const Cursor: React.FC = () => {
  // --- Variables
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const pathname = usePathname();
  const controls = useAnimation();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorColor =
    pathname === '/'
      ? 'hsl(262 100% 49%)'
      : pathname === '/services'
        ? 'hsl(22.93, 92.59%, 52.35%)'
        : pathname === '/contact'
          ? 'hsl(204 100% 49%)'
          : pathname === '/projects'
            ? 'hsl(0 100% 49%)'
            : 'hsl(262 100% 49%)';

  // --- Functions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      if (isExploding) {
        setIsExploding(false);
        if (cursorRef.current) {
          cursorRef.current.style.display = 'block';
        }
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = () => {
      controls
        .start({
          scale: 0.8,
          transition: { duration: 0.1 },
        })
        .then(() => {
          controls.start({
            scale: 1,
            transition: { duration: 0.2 },
          });
        });
    };

    const handleMouseLeave = () => {
      setIsExploding(true);
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('click', handleClick);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [controls, isExploding]);

  // --- Render
  const explodingParticles = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={i}
      className="fixed h-2 w-2 rounded-full"
      style={{
        backgroundColor: cursorColor,
        top: mousePosition.y,
        left: mousePosition.x,
      }}
      initial={{ scale: 0 }}
      animate={
        isExploding
          ? {
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              scale: [1, 0],
              opacity: [1, 0],
            }
          : { scale: 0 }
      }
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  ));

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[10001]"
        animate={mousePosition}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 28,
          mass: 0.1,
        }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 397 433"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          animate={controls}
          style={{
            transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`,
            transformOrigin: 'center',
            opacity: isExploding ? 0 : 1,
          }}
        >
          <g filter="url(#filter0_d_2_20)">
            <path
              d="M40.3124 32.127C38.5563 23.7337 47.5414 17.2056 54.9813 21.4695L351.448 191.378C358.992 195.701 357.739 206.943 349.429 209.499L205.537 253.762C203.309 254.448 201.392 255.894 200.123 257.85L128.108 368.785C123.278 376.224 111.862 374.091 110.045 365.409L40.3124 32.127Z"
              fill={cursorColor}
            />
            <path
              d="M119.772 363.374L50.0397 30.0918L346.507 200L202.615 244.264C198.159 245.634 194.326 248.528 191.788 252.439L200.123 257.85L191.788 252.439L119.772 363.374Z"
              stroke="white"
              strokeWidth="19.8759"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2_20"
              x="0.338074"
              y="0.251175"
              width="395.86"
              height="432.694"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="19.8759" />
              <feGaussianBlur stdDeviation="19.8759" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape" />
            </filter>
          </defs>
        </motion.svg>
      </motion.div>
      {explodingParticles}
    </>
  );
};
