'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { Button } from '@/components/ui/button'

export function ScrollToTop() {
  const [hasClient, setHasClient] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setHasClient(true)

    const getScrollPosition = () =>
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    const updateVisibility = () => {
      const scrollY = getScrollPosition()
      const isMobile = window.matchMedia('(max-width: 640px)').matches
      const threshold = isMobile ? 80 : 320
      setIsVisible(scrollY > threshold)
    }

    updateVisibility()

    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('touchmove', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility, { passive: true })
    window.addEventListener('orientationchange', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('touchmove', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
      window.removeEventListener('orientationchange', updateVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!hasClient) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 24 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-9999"
          style={{
            bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)',
          }}
        >
          <Button
            onClick={scrollToTop}
            onTouchStart={(event) => {
              event.stopPropagation()
              scrollToTop()
            }}
            size="icon"
            className="pointer-events-auto rounded-full bg-bg-card border border-border-subtle hover:bg-bg-card/90 active:bg-bg-card/80 hover:border-border-accent shadow-xl hover:shadow-2xl transition-all h-11 w-11 text-black! dark:text-white!"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

