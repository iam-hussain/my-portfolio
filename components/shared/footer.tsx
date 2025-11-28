'use client'

import { siteConfig } from '@/src/config/site'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-8">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm sm:text-base text-text-secondary hover:text-text-primary transition-colors min-h-[44px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex gap-3 sm:gap-4">
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
                    className="p-2.5 sm:p-2 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label={`${social.type} profile`}
                  >
                    <IconComponent className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                  </a>
                )
              })}
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border-subtle text-center">
          <p className="text-text-muted text-xs sm:text-sm">
            © {currentYear} {siteConfig.personal.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

