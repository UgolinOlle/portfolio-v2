/**
 * @file pictures-bento.tsx
 * @description Pictures bento component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

'use client';

// --- Imports
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ABOUT_IMAGES, ABOUT_IMAGES_2 } from '~/lib/constants/about';

/**
 * @name PicturesBento
 * @description Pictures bento component
 * @returns {React.JSX.Element} The pictures bento component
 */
export const PicturesBento: React.FC = (): React.ReactElement => {
  // --- Variables
  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  // --- Render
  return (
    <div className="relative flex flex-col justify-center items-center py-8 gap-10 w-full overflow-hidden z-0">
      <div className="w-full flex justify-start md:justify-center items-start md:items-center py-2 md:overflow-x-hidden overflow-x-auto overflow-y-hidden no-scrollbar">
        {ABOUT_IMAGES.map((image, index) => (
          <motion.div
            variants={imageVariants}
            key={'images-first' + index}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width="500"
              height="500"
              className="rounded-lg h-40 w-40 md:h-60 md:w-60 object-cover flex-shrink-0"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJncmF5Ii8+PC9zdmc+"
            />
          </motion.div>
        ))}
      </div>
      <div className="w-full flex justify-start md:justify-center items-start md:items-center py-2 md:overflow-x-hidden overflow-x-auto overflow-y-hidden no-scrollbar">
        {ABOUT_IMAGES_2.map((image, idx) => (
          <motion.div
            key={'images-second' + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width="500"
              height="500"
              className="rounded-lg h-40 w-40 md:h-60 md:w-60 object-cover flex-shrink-0"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJncmF5Ii8+PC9zdmc+"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
