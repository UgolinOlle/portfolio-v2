'use client';

import { Lightbulb, LightbulbOff } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export const CozyToggler: React.FC = (): JSX.Element => {
  // --- Variables
  const [cozyActive, setCozyActive] = useState(false);

  // --- Functions
  const toggleRain = () => {
    const newState = !cozyActive;
    setCozyActive(newState);
    localStorage.setItem('cozyMode', JSON.stringify(newState));
  };

  useEffect(() => {
    const savedState = localStorage.getItem('cozyMode');
    if (savedState !== null) {
      setCozyActive(JSON.parse(savedState));
    }
  }, []);

  // --- Render
  return (
    <Button
      onClick={toggleRain}
      variant="outline"
      className={cn('rounded-full px-2 py-4 text-neutral-600/70 hover:text-neutral-900/70 dark:text-neutral-400/70')}
    >
      {cozyActive ? <LightbulbOff size={20} /> : <Lightbulb size={20} />}
    </Button>
  );
};
