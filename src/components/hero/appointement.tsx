'use client';

import React from 'react';
import { Phone } from 'lucide-react';

import { Button } from '../ui/button';
import Link from 'next/link';

export const Appointement: React.FC = () => {
  // -- Render
  return (
    <Link href="https://cal.com/ugolin-olle" passHref target="_blank">
      <Button className="relative bg-primary text-white dark:bg-white dark:text-black flex items-center justify-center group/modal-btn shadow-md hover:shadow-lg border border-black/5 dark:border-white/5 transition duration-300 ease-in-out">
        <div className="gap-2 group-hover/modal-btn:translate-x-40 text-center transition duration-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium">
          <Phone size={16} /> Prendre RDV
        </div>
        <div className="text-white dark:text-black -translate-x-32 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute transition duration-500 animate-phone">
          <Phone size={16} />
        </div>
      </Button>
    </Link>
  );
};
