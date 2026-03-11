'use client'

import { siteConfig } from '@/src/config/site'
import { Github, Linkedin, Mail } from 'lucide-react'

const footerSocials = [
  { type: 'github', href: siteConfig.links.github, Icon: Github, label: 'GitHub' },
  { type: 'linkedin', href: siteConfig.links.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { type: 'email', href: `mailto:${siteConfig.contact.email}`, Icon: Mail, label: 'Email' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle/50 py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-3">
          {footerSocials.map(({ type, href, Icon, label }) => (
            <a
              key={type}
              href={href}
              target={type !== 'email' ? '_blank' : undefined}
              rel={type !== 'email' ? 'noopener noreferrer' : undefined}
              className="p-2.5 rounded-xl border border-border-subtle bg-bg-card/40 backdrop-blur-xl hover:border-accent-cyan/40 transition-all min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label={label}
            >
              <Icon className="h-4 w-4 text-foreground" />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-xs font-mono text-muted-foreground/60">
            {siteConfig.personal.location}
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/40">
            &copy; {currentYear} {siteConfig.personal.fullName}
          </p>
        </div>
      </div>
    </footer>
  )
}
