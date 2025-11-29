'use client'

import { siteConfig } from '@/src/config/site'
import { ContactForm } from './contact-form'
import { Button } from '@/components/ui/button'
import { Mail, MessageCircle, Download, Calendar, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/shared/footer'

export function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-36 md:scroll-mt-40"
        aria-label="Contact section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold !text-black dark:!text-white mb-3 sm:mb-4">
            Contact
          </h2>
          <p className="text-base sm:text-lg md:text-xl !text-black dark:!text-white max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0 font-medium">
              {siteConfig.personal.openToRoles}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold !text-black dark:!text-white mb-3 sm:mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px] text-foreground hover:text-[var(--color-gradient-blue)]"
                  size="lg"
                >
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    {siteConfig.ctaLabels.contactEmail}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px] text-foreground hover:text-[var(--color-gradient-blue)]"
                  size="lg"
                >
                  <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {siteConfig.ctaLabels.contactWhatsApp}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px] text-foreground hover:text-[var(--color-gradient-blue)]"
                  size="lg"
                >
                  <a href={siteConfig.links.resumeUrl} download>
                    <Download className="mr-2 h-5 w-5" />
                    {siteConfig.ctaLabels.contactDownloadResume}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px] text-foreground hover:text-[var(--color-gradient-blue)]"
                  size="lg"
                >
                  <a href={siteConfig.contact.calendly} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    {siteConfig.ctaLabels.contactBookCall}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px] text-foreground hover:text-[var(--color-gradient-blue)]"
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
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px] text-foreground hover:text-[var(--color-gradient-blue)]"
                  size="lg"
                >
                  <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
              
              <div className="mt-6 sm:mt-8 p-4 rounded-lg border border-border-subtle bg-bg-card/70 dark:bg-bg-card/80 backdrop-blur-sm shadow-sm">
                <div className="space-y-2 text-xs sm:text-sm !text-black dark:!text-white">
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{siteConfig.personal.location}</span>
                  </p>
                  <p className="flex items-center gap-2 flex-wrap">
                    <span>📧</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="!text-blue-600 dark:!text-blue-400 hover:!text-black dark:hover:!text-white transition-colors break-all">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 flex-wrap">
                    <span>📱</span>
                    <a href={siteConfig.contact.whatsappLink} className="!text-blue-600 dark:!text-blue-400 hover:!text-black dark:hover:!text-white transition-colors min-h-[44px] flex items-center">
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                  <p className="flex items-start gap-2 flex-wrap">
                    <span>🔗</span>
                    <span className="flex-1 min-w-0">LinkedIn: <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="!text-blue-600 dark:!text-blue-400 hover:!text-black dark:hover:!text-white transition-colors break-all">{siteConfig.links.linkedin.replace('https://', '')}</a></span>
                  </p>
                  <p className="flex items-start gap-2 flex-wrap">
                    <span>💻</span>
                    <span className="flex-1 min-w-0">GitHub: <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="!text-blue-600 dark:!text-blue-400 hover:!text-black dark:hover:!text-white transition-colors break-all">{siteConfig.links.github.replace('https://', '')}</a></span>
                  </p>
                  <p className="flex items-start gap-2 flex-wrap">
                    <span>📅</span>
                    <span className="flex-1 min-w-0">Book a Call: <a href={siteConfig.contact.calendly} target="_blank" rel="noopener noreferrer" className="!text-blue-600 dark:!text-blue-400 hover:!text-black dark:hover:!text-white transition-colors break-all">{siteConfig.contact.calendly.replace('https://', '')}</a></span>
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold !text-black dark:!text-white mb-3 sm:mb-4">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

