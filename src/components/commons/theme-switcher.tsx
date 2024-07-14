'use client';

import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggler() {
  // -- Variables
  const { resolvedTheme, setTheme } = useTheme();

  // -- Functions
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      onClick={toggleTheme}
      className={cn(
        'rounded-full p-2',
        `${resolvedTheme === 'dark' ? 'bg-yellow-500/75' : 'bg-purple-500/75'}`
      )}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="fill-white" size={22} />
      ) : (
        <MoonIcon className="fill-white" size={22} />
      )}
    </div>
  );
}
