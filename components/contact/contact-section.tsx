'use client'

import { personalInfo } from '@/lib/data/personal-info'
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
        className="py-20 px-4 sm:px-6 lg:px-8"
        aria-label="Contact section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Contact
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
                  <a href="mailto:itsjakirhussain@gmail.com">
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
                  <a href="https://wa.me/971585591060" target="_blank" rel="noopener noreferrer">
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
                  <a href="/Jakir_Hussain_Resume.pdf" download>
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
                  <a href="https://calendly.com/iamhussain" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Call
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px]"
                  size="lg"
                >
                  <a href="https://linkedin.com/in/jakirhussain18" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border-accent hover:bg-bg-card hover:border-border-accent justify-start min-h-[44px]"
                  size="lg"
                >
                  <a href="https://github.com/jakirhussain18" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 p-4 rounded-lg border border-border-subtle bg-bg-card/30 backdrop-blur-sm">
                <div className="space-y-2 text-sm text-text-secondary">
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Dubai — GMT+4</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📧</span>
                    <a href="mailto:itsjakirhussain@gmail.com" className="text-text-accent hover:text-text-primary transition-colors">
                      itsjakirhussain@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📱</span>
                    <a href="https://wa.me/971585591060" className="text-text-accent hover:text-text-primary transition-colors">
                      +971 58 559 1060
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🔗</span>
                    <span>LinkedIn: <a href="https://linkedin.com/in/jakirhussain18" target="_blank" rel="noopener noreferrer" className="text-text-accent hover:text-text-primary transition-colors">linkedin.com/in/jakirhussain18</a></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>💻</span>
                    <span>GitHub: <a href="https://github.com/jakirhussain18" target="_blank" rel="noopener noreferrer" className="text-text-accent hover:text-text-primary transition-colors">github.com/jakirhussain18</a></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📅</span>
                    <span>Book a Call: <a href="https://calendly.com/iamhussain" target="_blank" rel="noopener noreferrer" className="text-text-accent hover:text-text-primary transition-colors">calendly.com/iamhussain</a></span>
                  </p>
                </div>
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

