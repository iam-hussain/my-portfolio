'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu } from 'lucide-react'
import { siteConfig } from '@/src/config/site'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { MobileSidebar } from '@/components/shared/mobile-sidebar'

const navItems = siteConfig.navigation.main
const sectionIds = navItems.map((item) => item.href.replace('#', ''))

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY + 120
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i])
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sectionIds[i])
        return
      }
    }
    setActiveSection('')
  }, [])

  useEffect(() => {
    setIsScrolled(window.scrollY > 50)
    updateActiveSection()
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      updateActiveSection()
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateActiveSection])

  const handleNavClick = (href: string) => {
    setIsSidebarOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-bg-primary/60 backdrop-blur-2xl border-border-subtle/50 shadow-lg shadow-black/5'
            : 'bg-transparent border-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-14 lg:h-16">
            <button
              type="button"
              onClick={() => handleNavClick(siteConfig.navigation.home)}
              className="text-base sm:text-lg md:text-xl font-bold text-foreground hover:text-accent-cyan transition-colors truncate max-w-[45vw] sm:max-w-none font-mono"
              aria-label="Go to homepage"
            >
              {siteConfig.personal.shortName}
              <span className="text-accent-cyan">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`transition-colors font-medium text-sm min-h-[44px] min-w-[44px] flex items-center justify-center px-2 font-mono ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-accent-cyan'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
              <ThemeToggle />
              <Button
                asChild
                size="sm"
                className="ml-1 bg-accent-cyan text-white hover:opacity-90 font-semibold rounded-lg min-h-[40px] px-4 text-sm"
              >
                <a href={siteConfig.links.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-2 min-h-[44px]">
              <ThemeToggle />
              <Button
                asChild
                size="sm"
                className="bg-accent-cyan text-white hover:opacity-90 font-semibold rounded-lg"
              >
                <a href={siteConfig.links.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-bg-secondary min-h-[44px] min-w-[44px]"
                aria-label="Open menu"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <div className="mb-6">
          <span className="text-lg font-bold font-mono text-foreground">
            {siteConfig.personal.shortName}<span className="text-accent-cyan">.</span>
          </span>
        </div>
        <div className="flex flex-col gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className={`sidebar-item w-full text-left px-4 py-3 rounded-lg transition-colors font-medium min-h-[44px] font-mono text-sm ${
                activeSection === item.href.replace('#', '')
                  ? 'text-accent-cyan bg-bg-tertiary'
                  : 'text-foreground hover:bg-bg-tertiary'
              }`}
              style={{ '--item-index': i } as React.CSSProperties}
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={siteConfig.links.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-item mt-2 px-4 py-3 rounded-lg bg-accent-cyan text-white font-semibold text-center min-h-[44px] flex items-center justify-center hover:opacity-90 transition-colors"
            style={{ '--item-index': navItems.length } as React.CSSProperties}
          >
            Resume
          </a>
        </div>
      </MobileSidebar>
    </>
  )
}
