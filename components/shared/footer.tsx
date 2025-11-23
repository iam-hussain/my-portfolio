'use client'

import { personalInfo } from '@/lib/data/personal-info'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle py-8 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="#snapshot" className="text-text-secondary hover:text-text-primary transition-colors">
              Snapshot
            </Link>
            <Link href="#value-pillars" className="text-text-secondary hover:text-text-primary transition-colors">
              Value Pillars
            </Link>
            <Link href="#impact-gallery" className="text-text-secondary hover:text-text-primary transition-colors">
              Impact
            </Link>
            <Link href="#storyline" className="text-text-secondary hover:text-text-primary transition-colors">
              Storyline
            </Link>
            <Link href="#playground" className="text-text-secondary hover:text-text-primary transition-colors">
              Playground
            </Link>
            <Link href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5 text-text-secondary hover:text-text-primary" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5 text-text-secondary hover:text-text-primary" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all"
              aria-label="Send email"
            >
              <Mail className="h-5 w-5 text-text-secondary hover:text-text-primary" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border-subtle text-center">
          <p className="text-text-muted text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

