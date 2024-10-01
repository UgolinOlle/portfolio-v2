'use client'

import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'sonner'

import { ThemeProvider } from '~/lib/providers/theme'
import { CursorProvider } from '~/components/commons/cursor'

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
      <ThemeProvider>
        <CursorProvider>{children}</CursorProvider>
      </ThemeProvider>
    </>
  )
}
