import React from 'react';
import { Button } from '../ui/button';
import { MoonStar, Rss } from 'lucide-react';

export const TopNavbar: React.FC = () => {
  // -- Render
  return (
    <nav className="w-full h-auto flex justify-center items-start gap-5">
      <Button variant="ghost">
        <Rss size={24} />
      </Button>
      <Button variant="ghost">
        <MoonStar size={24} />
      </Button>
    </nav>
  );
};
