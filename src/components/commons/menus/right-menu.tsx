/**
 * @file right-menu.tsx
 * @description Right menu component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

'use client';

// --- Imports
import React, { useState, useEffect } from 'react';
import { MoveUp } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '~/components/ui/button';
import { ThemeToggler } from '~/components/commons/menus/theme-toggler';
import { RainToggler } from '~/components/commons/menus/rain-toggler';

/**
 * @name RightMenu
 * @description Right menu component
 * @returns {React.JSX.Element} The right menu component
 */
export const RightMenu: React.FC = () => {
  // --- Variables
  const [isBottom, setIsBottom] = useState(false);

  // --- Functions  
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;

    if (windowHeight + scrollTop >= docHeight - 10) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- Render
  return (
    <motion.div
      initial={{ bottom: '10px' }}
      animate={{ bottom: isBottom ? '70px' : '20px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed right-10 z-50 hidden flex-col items-center gap-4 md:flex"
    >
      <RainToggler />
      <ThemeToggler />
      <Button
        variant="outline"
        className="rounded-full px-2 py-4 text-neutral-600/70 dark:text-neutral-400/70"
        onClick={goToTop}
      >
        <MoveUp size={18} />
      </Button>
    </motion.div>
  );
};
