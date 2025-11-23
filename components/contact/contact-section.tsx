'use client'

import { personalInfo } from '@/lib/data/personal-info'
import { ContactForm } from './contact-form'
import { Button } from '@/components/ui/button'
import { Mail, MessageCircle, Download, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/shared/footer'

export function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8"
        aria-label="Contact section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Let's Connect
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Open to Senior Frontend / Senior Full-Stack roles — Dubai / Remote worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px]"
                  size="lg"
                >
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px]"
                  size="lg"
                >
                  <a href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px]"
                  size="lg"
                >
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px]"
                  size="lg"
                >
                  <a href={`https://calendly.com/${personalInfo.email.split('@')[0]}`} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

