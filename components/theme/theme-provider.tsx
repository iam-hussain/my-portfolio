'use client'

import { useEffect, type ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
    root.classList.remove('light')

    try {
      localStorage.setItem('theme', 'dark')
    } catch {
      // Ignore storage errors (e.g., privacy mode)
    }
  }, [])

  return children
}

