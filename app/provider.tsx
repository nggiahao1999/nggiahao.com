'use client'

import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}
