'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const iconProps = {
    onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
  };

  return (
    <Button
      variant="secondary"
      className={cn(
        'p-2 rounded-full group/theme-btn',
        `${theme === 'dark' ? 'bg-yellow-500/75 hover:bg-yellow-500/75' : 'bg-purple-500/75 hover:bg-purple-500/75'}`
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="transition animate-phone"
          >
            <SunIcon {...iconProps} className="text-white" size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="transition hover:animate-phone"
          >
            <MoonIcon {...iconProps} size={18} className="text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
