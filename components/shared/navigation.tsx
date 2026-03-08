'use client'

import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { siteConfig } from '@/src/config/site'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navItems = siteConfig.navigation.main

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsSheetOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-bg-primary/80 dark:bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <button
            type="button"
            onClick={() => handleNavClick(siteConfig.navigation.home)}
            className="text-lg sm:text-xl md:text-2xl font-bold text-foreground hover:text-accent-cyan transition-colors"
            aria-label="Go to homepage"
          >
            {siteConfig.personal.fullName}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="text-foreground/90 hover:text-foreground transition-colors font-medium text-sm lg:text-base min-h-[44px] px-2 relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-accent-cyan after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="ml-2 bg-[var(--accent-cyan)] text-white hover:opacity-90 font-semibold rounded-lg"
            >
              <a href={siteConfig.links.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile: Sheet + Menu trigger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="bg-[var(--accent-cyan)] text-white hover:opacity-90 font-semibold rounded-lg"
            >
              <a href={siteConfig.links.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-bg-secondary min-h-[44px] min-w-[44px]"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[320px] bg-bg-secondary border-border-subtle"
              >
                <SheetHeader>
                  <SheetTitle className="text-foreground font-bold">
                    {siteConfig.personal.fullName}
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-1">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className="w-full text-left px-4 py-3 text-foreground hover:bg-bg-tertiary rounded-lg transition-colors font-medium min-h-[44px]"
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <a
                    href={siteConfig.links.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-[var(--accent-cyan)] text-white font-semibold text-center min-h-[44px] flex items-center justify-center hover:opacity-90 transition-colors"
                  >
                    Resume
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
