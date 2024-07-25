import React from 'react';
import { Rss } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ThemeToggler from '@/components/commons/theme-switcher';

export const TopNavbar: React.FC = () => {
  // -- Render
  return (
    <nav className="flex justify-center items-center gap-3">
      <Button variant="secondary">
        <span className="transition-all duration-500 ease-in-out hover:animate-phone">
          <Rss size={24} />
        </span>
      </Button>
      <ThemeToggler />
    </nav>
  );
};
