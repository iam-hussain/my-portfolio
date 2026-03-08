'use client'

import { siteConfig } from '@/src/config/site'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github } from 'lucide-react'
import { AnimateInView } from '@/components/ui/animate-in-view'
import { Footer } from '@/components/shared/footer'

export function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-36 md:scroll-mt-40"
        aria-label="Contact section"
      >
        <div className="max-w-3xl mx-auto">
          <AnimateInView className="rounded-2xl border border-border-subtle bg-bg-card/60 backdrop-blur-xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              {siteConfig.contactCta.headline}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              {siteConfig.contactCta.subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[var(--accent-cyan)] text-white hover:opacity-90 min-h-[48px] px-8 rounded-xl font-semibold"
                size="lg"
              >
                <a href={`mailto:${siteConfig.contact.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border-subtle text-foreground hover:border-[var(--accent-cyan)]/50 min-h-[48px] px-8 rounded-xl font-semibold"
                size="lg"
              >
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border-subtle text-foreground hover:border-[var(--accent-cyan)]/50 min-h-[48px] px-8 rounded-xl font-semibold"
                size="lg"
              >
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </AnimateInView>
        </div>
      </section>

      <Footer />
    </>
  )
}
