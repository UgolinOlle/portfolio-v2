import React from 'react';
import { Rss } from 'lucide-react';

import { Button } from '../ui/button';
import ThemeToggler from './theme-switcher';

export const TopNavbar: React.FC = () => {
  // -- Render
  return (
    <nav className="flex justify-center items-center gap-3">
      <Button variant="secondary">
        <Rss size={24} />
      </Button>
      <ThemeToggler />
    </nav>
  );
};
