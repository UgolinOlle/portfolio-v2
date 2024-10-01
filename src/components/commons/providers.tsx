'use client'

import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/lib/providers/theme'
import { Cursor } from './cursor'

export const Providers = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement => {
  // --- Render
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Toaster richColors />
      <Cursor />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  )
}
