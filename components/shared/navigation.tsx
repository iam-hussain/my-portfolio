'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/src/config/site'

const navItems = siteConfig.navigation.main

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <nav
      className={`sticky md:fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-bg-card/80 backdrop-blur-xl border-b border-border-subtle ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link
            href={siteConfig.navigation.main[0].href}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(siteConfig.navigation.main[0].href)
            }}
            className="text-lg sm:text-xl md:text-2xl font-bold !text-black dark:!text-white hover:!text-blue-600 dark:hover:!text-blue-400 transition-colors"
            aria-label="Go to homepage"
          >
            {siteConfig.personal.fullName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="!text-black dark:!text-white hover:opacity-80 transition-colors font-medium text-sm lg:text-base min-h-[44px] px-2"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 !text-black dark:!text-white hover:!text-blue-600 dark:hover:!text-blue-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-card/95 backdrop-blur-xl border-t border-border-subtle overflow-hidden pointer-events-auto"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick(item.href)
                  }}
                  className="block w-full text-left px-4 py-3 !text-black dark:!text-white hover:opacity-80 hover:bg-bg-secondary rounded-lg transition-colors font-medium min-h-[44px] relative z-10"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

