'use client'

import { personalInfo } from '@/lib/data/personal-info'
import { StatChips } from './stat-chips'
import { GradientOrb } from '@/components/shared/gradient-orb'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MessageCircle, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function SnapshotHero() {
  return (
    <section
      id="snapshot"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      aria-label="Hero section"
    >
      <GradientOrb />
      
      <div className="relative z-10 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-bg-card/80 backdrop-blur-xl rounded-2xl border border-border-subtle p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4"
              >
                JAKIR HUSSAIN
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-text-accent mb-3 font-semibold"
              >
                Senior Full-Stack Engineer — Product-Focused & Performance-Driven
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-base md:text-lg text-text-secondary mb-6"
              >
                Node.js · React · TypeScript · GraphQL · AWS
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                I build modern, high-performance digital experiences by combining strong UI engineering, production-grade backend development, and cloud-native architectures. My work focuses on delivering smooth user flows, clean system design, and scalable platforms that evolve with real product needs.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <StatChips />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Button
                  asChild
                  className="gradient-button-primary text-white hover:opacity-90 glow-effect-hover min-h-[44px]"
                  size="lg"
                >
                  <Link href="#storyline">Explore My Work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border-accent hover:bg-bg-card hover:border-border-accent min-h-[44px]"
                  size="lg"
                >
                  <a href={personalInfo.resumeUrl} download>
                    Open Resume
                  </a>
                </Button>
              </motion.div>
              
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all"
                  aria-label="Send email"
                >
                  <Mail className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                </a>
                <a
                  href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                </a>
                <a
                  href={`https://calendly.com/${personalInfo.email.split('@')[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all"
                  aria-label="Calendly"
                >
                  <Calendar className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

