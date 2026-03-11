'use client'

import { siteConfig } from '@/src/config/site'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github } from 'lucide-react'
import { SectionReveal } from '@/components/canvas/section-reveal'
import { Footer } from '@/components/shared/footer'

export function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="relative section-padding scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
        aria-label="Contact section"
      >
        <div className="max-w-3xl mx-auto px-0">
          <SectionReveal>
            <div className="glass-panel p-6 sm:p-8 md:p-10 lg:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-state-success/30 bg-state-success/5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-state-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-state-success" />
                </span>
                <span className="text-xs font-mono text-state-success">Available</span>
              </div>

              <h2 className="text-section-title font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
                {siteConfig.contactCta.headline}
              </h2>
              <p className="text-body text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto">
                {siteConfig.contactCta.subtext}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
                <Button
                  asChild
                  className="bg-accent-cyan text-white hover:opacity-90 min-h-[48px] w-full sm:w-auto px-6 sm:px-8 rounded-xl font-semibold text-sm sm:text-base"
                  size="lg"
                >
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    <Mail className="mr-2 h-5 w-5 shrink-0" />
                    Email
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border-subtle text-foreground hover:border-accent-cyan/50 min-h-[48px] w-full sm:w-auto px-6 sm:px-8 rounded-xl font-semibold text-sm sm:text-base"
                  size="lg"
                >
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5 shrink-0" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border-subtle text-foreground hover:border-accent-cyan/50 min-h-[48px] w-full sm:w-auto px-6 sm:px-8 rounded-xl font-semibold text-sm sm:text-base"
                  size="lg"
                >
                  <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5 shrink-0" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
