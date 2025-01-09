/**
 * @file appointment.tsx
 * @description Appointment component with purple gradient styling
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.1.0
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

interface AppointmentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

/**
 * @name Appointment
 * @description Appointment button component with purple gradient and hover effects
 * @returns {React.JSX.Element} The appointment button component
 */
export const Appointment: React.FC<AppointmentProps> = ({ className, ...props }): React.JSX.Element => {
  return (
    <Link href="https://cal.com/ugolin-olle" passHref target="_blank">
      <Button
        className={cn(
          'group/modal-btn relative flex items-center justify-center',
          'w-full text-lg font-medium text-white',
          'bg-gradient-to-r from-primary to-purple-600',
          'shadow-[inset_0_-3px_6px_rgba(255,255,255,0.7)]',
          'transition-all duration-300 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          className
        )}
        {...props}
      >
        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-center text-sm font-medium transition duration-500 group-hover/modal-btn:translate-x-40 group-hover/modal-btn:opacity-0">
          <Phone size={16} /> Prendre RDV
        </div>
        <div className="absolute flex -translate-x-14 items-center justify-center text-white opacity-0 transition duration-300 group-hover/modal-btn:translate-x-0 group-hover/modal-btn:animate-phone group-hover/modal-btn:opacity-100">
          <Phone size={16} className="text-white" />
        </div>
      </Button>
    </Link>
  );
};
