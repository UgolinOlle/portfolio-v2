'use client';

import { Umbrella, UmbrellaOff } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export const RainToggler: React.FC = (): JSX.Element => {
  // --- Variables
  const [isRainActive, setIsRainActive] = useState(false);

  // --- Functions
  const toggleRain = () => {
    const newState = !isRainActive;
    setIsRainActive(newState);
    // Enregistrer dans le LocalStorage
    localStorage.setItem('rainActive', JSON.stringify(newState));
  };

  useEffect(() => {
    const savedState = localStorage.getItem('rainActive');
    if (savedState !== null) {
      setIsRainActive(JSON.parse(savedState));
    }
  }, []);

  // --- Render
  return (
    <Button
      onClick={toggleRain}
      variant="outline"
      className={cn('rounded-full p-2 text-neutral-600/70 hover:text-neutral-900/70 dark:text-neutral-400/70')}
    >
      {isRainActive ? <UmbrellaOff size={20} /> : <Umbrella size={20} />}
    </Button>
  );
};
