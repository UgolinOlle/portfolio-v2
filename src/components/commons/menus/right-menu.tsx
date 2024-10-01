'use client';

import React, { useState, useEffect } from 'react';
import { MoveUp } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '~/components/ui/button';
import { Bugs } from '~/components/commons/menus/bugs';
import ThemeToggler from '~/components/commons/menus/theme-switcher';

export const RightMenu: React.FC = () => {
  // -- State
  const [isBottom, setIsBottom] = useState(false);

  // -- Functions
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

  // -- Effect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // -- Render
  return (
    <motion.div
      initial={{ bottom: '10px' }}
      animate={{ bottom: isBottom ? '70px' : '20px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed right-10 z-50 md:flex flex-col items-center gap-4 hidden"
    >
      <ThemeToggler />
      <Bugs />
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
