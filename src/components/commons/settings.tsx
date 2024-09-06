'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Heading } from '../ui/headers';

export const SettingsPopup: React.FC = () => {
  // --- Variables
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCursorActive, setIsCursorActive] = useState<boolean>(true);
  const [isClient, setIsClient] = useState(false); // Ajout pour vérifier si on est côté client
  const popupRef = useRef<HTMLDivElement>(null);

  // --- Functions
  const togglePopup = () => setIsPopupOpen((prev) => !prev);

  // Vérifie si on est côté client et récupère l'état du curseur
  useEffect(() => {
    setIsClient(true); // Le composant est monté côté client

    if (typeof window !== 'undefined') {
      const savedCursorState = localStorage.getItem('cursor-active');
      console.log(savedCursorState); // Cela devrait maintenant s'afficher

      if (savedCursorState !== null) {
        setIsCursorActive(JSON.parse(savedCursorState));
      }
    }
  }, []);

  // Sauvegarde l'état du curseur dans le localStorage à chaque changement
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cursor-active', JSON.stringify(isCursorActive));
    }
  }, [isCursorActive, isClient]);

  // Fermer la popup en cliquant à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  const toggleCursor = () => {
    setIsCursorActive((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={togglePopup}
        className={cn(
          'p-2 rounded-full text-neutral-600/70 dark:text-neutral-400/70 hover:text-neutral-900/70'
        )}
      >
        <Settings size={20} />
      </Button>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            ref={popupRef}
            className="absolute -top-5 right-12 mt-2 bg-white dark:bg-neutral-900/70 w-72 shadow-md rounded-lg py-2 px-4 z-10 border border-neutral-200 dark:border-neutral-700"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <Heading variant="h4" border={false}>
                Paramètres
              </Heading>
              <Button
                variant="ghost"
                onClick={() => setIsPopupOpen(false)}
                className="text-red-500 rounded-full hover:bg-transparent hover:text-red-600"
              >
                <X size={14} />
              </Button>
            </div>

            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isCursorActive}
                  onChange={toggleCursor}
                />
                {isCursorActive
                  ? 'Désactiver le curseur'
                  : 'Activer le curseur'}
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
