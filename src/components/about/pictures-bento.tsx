'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { CursorPopup } from '../cursor-popup';
import { ABOUT_IMAGES } from '@/lib/constants/about';

export const PicturesBento: React.FC = (): React.ReactElement => {
  // -- Variables
  const [hovered, setHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [popupContent, setPopupContent] = useState('');

  // -- Functions
  const handleMouseEnter = (text: string) => {
    setHovered(true);
    setPopupContent(text);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // -- Render
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-full flex flex-wrap justify-between gap-5"
    >
      {ABOUT_IMAGES.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={300}
          height={300}
          objectFit="cover"
          className="rounded-lg shadow-xl"
          onMouseEnter={() => handleMouseEnter(image.text)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
      ))}
      <AnimatePresence>
        {hovered && (
          <CursorPopup content={popupContent} position={cursorPosition} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
