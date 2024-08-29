'use client';

import React, { useState, useEffect } from 'react';
import { MoveUp } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Bugs } from '@/components/commons/bugs';
import ThemeToggler from '@/components/commons/theme-switcher';

export const BottomMenu: React.FC = () => {
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
      animate={{ bottom: isBottom ? '80px' : '20px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed right-10 z-50 md:flex flex-col items-center gap-4 hidden"
    >
      <ThemeToggler />
      <Bugs />
      <Button
        variant="outline"
        className="rounded-full px-2 py-5 bg-gray-200 text-gray-800 opacity-50 hover:opacity-100 transition-opacity ease-in-out"
        onClick={goToTop}
      >
        <MoveUp size={24} />
      </Button>
    </motion.div>
  );
};
