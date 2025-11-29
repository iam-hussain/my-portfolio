'use client'

import { siteConfig } from '@/src/config/site'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle py-3 sm:py-4 px-4 sm:px-6 lg:px-8 bg-bg-card/50 dark:bg-bg-card/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-6">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm sm:text-base !text-black dark:!text-white hover:opacity-80 transition-colors min-h-[44px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex gap-2 sm:gap-3">
            {siteConfig.socialIcons
              .filter((social) => ['github', 'linkedin', 'email'].includes(social.type))
              .map((social) => {
                const IconComponent =
                  social.type === 'github' ? Github :
                  social.type === 'linkedin' ? Linkedin :
                  Mail
                
                return (
                  <a
                    key={social.type}
                    href={social.href}
                    target={social.type !== 'email' ? '_blank' : undefined}
                    rel={social.type !== 'email' ? 'noopener noreferrer' : undefined}
                    className="p-2.5 sm:p-2 rounded-full border border-border-subtle bg-bg-card/70 dark:bg-bg-card/80 hover:border-border-accent hover:glow-effect-hover transition-all min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
                    aria-label={`${social.type} profile`}
                  >
                    <IconComponent className="h-5 w-5 !text-black dark:!text-white hover:opacity-80" />
                  </a>
                )
              })}
          </div>
        </div>
        
        <div className="pt-3 sm:pt-4 border-t border-border-subtle text-center">
          <p className="!text-black dark:!text-white text-xs sm:text-sm">
            © {currentYear} {siteConfig.personal.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

