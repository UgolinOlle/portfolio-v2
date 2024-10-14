/**
 * @file appointement.tsx
 * @description Appointement component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

'use client'

// --- Imports
import React from 'react'
import { Phone } from 'lucide-react'

import { Button } from '../ui/button'
import Link from 'next/link'

/**
 * @name Appointement
 * @description Appointement component
 * @returns {React.JSX.Element} The appointement component
 */
export const Appointement: React.FC = () => {
  // --- Render
  return (
    <Link href="https://cal.com/ugolin-olle" passHref target="_blank">
      <Button className="group/modal-btn relative flex items-center justify-center border border-black/5 bg-primary text-white shadow-md transition duration-300 ease-in-out hover:shadow-lg">
        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-center text-sm font-medium transition duration-500 group-hover/modal-btn:translate-x-40 group-hover/modal-btn:opacity-0">
          <Phone size={16} /> Prendre RDV
        </div>
        <div className="absolute flex -translate-x-14 items-center justify-center text-white opacity-0 transition duration-300 group-hover/modal-btn:translate-x-0 group-hover/modal-btn:animate-phone group-hover/modal-btn:opacity-100 dark:text-black">
          <Phone size={16} className="text-white" />
        </div>
      </Button>
    </Link>
  )
}
