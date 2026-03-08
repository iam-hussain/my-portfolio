'use client'

import { siteConfig } from '@/src/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-2 text-center">
        <p className="font-semibold text-foreground">{siteConfig.personal.fullName}</p>
        <p className="text-sm text-muted-foreground">{siteConfig.personal.role}</p>
        <p className="text-xs text-muted-foreground/80">
          © {currentYear} {siteConfig.personal.fullName}
        </p>
      </div>
    </footer>
  )
}
