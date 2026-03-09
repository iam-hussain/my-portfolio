'use client'

import { siteConfig } from '@/src/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle py-4 sm:py-5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-1 sm:gap-1.5 text-center">
        <p className="font-semibold text-foreground text-sm sm:text-base">{siteConfig.personal.fullName}</p>
        <p className="text-xs sm:text-sm text-muted-foreground">{siteConfig.personal.role}</p>
        <p className="text-xs text-muted-foreground/80">
          © {currentYear} {siteConfig.personal.fullName}
        </p>
      </div>
    </footer>
  )
}
