'use client'

import { useTheme } from './theme-provider'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="border-border-subtle bg-bg-card/50 hover:bg-bg-card hover:border-border-accent min-h-[44px] min-w-[44px]"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-5 w-5 !text-black dark:!text-white" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-border-subtle bg-bg-card/50 hover:bg-bg-card hover:border-border-accent min-h-[44px] min-w-[44px]"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 !text-black dark:!text-white" />
        ) : (
          <Moon className="h-5 w-5 !text-black dark:!text-white" />
        )}
      </motion.div>
    </Button>
  )
}

