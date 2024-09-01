'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MoonIcon, SunIcon, Monitor, SwatchBook } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ThemeToggler() {
  // --- Variables
  const { theme, setTheme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // --- Functions
  const togglePopup = () => setShowPopup((prev) => !prev);

  const themes = [
    { name: 'System', icon: <Monitor size={18} /> },
    { name: 'Light', icon: <SunIcon size={18} /> },
    { name: 'Dark', icon: <MoonIcon size={18} /> },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  // --- Render
  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={togglePopup}
        className={cn(
          'p-2 rounded-full text-neutral-600/70 dark:text-neutral-400/70 hover:text-neutral-900/70'
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          <SwatchBook size={20} />
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-2 right-12 mt-2 bg-white dark:bg-neutral-900/70 shadow-md rounded-lg w-32 py-2 z-10 border border-neutral-200 dark:border-neutral-700"
          >
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name.toLowerCase());
                  setShowPopup(false);
                }}
                className={cn(
                  'flex items-center w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-700',
                  theme === t.name.toLowerCase() && 'font-bold'
                )}
              >
                {t.icon}
                <span className="ml-2">{t.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
