'use client'

import { personalInfo } from '@/lib/data/personal-info'
import { StatChips } from './stat-chips'
import { GradientPortraitBackground } from '@/components/shared/gradient-portrait-background'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MessageCircle, Calendar } from 'lucide-react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

export function SnapshotHero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 200 }
  const cardSpringX = useSpring(cardX, springConfig)
  const cardSpringY = useSpring(cardY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const xPercent = (e.clientX - centerX) / (rect.width / 2)
    const yPercent = (e.clientY - centerY) / (rect.height / 2)
    
    cardX.set(xPercent * 3)
    cardY.set(yPercent * 3)
  }

  return (
    <section
      ref={sectionRef}
      id="snapshot"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      aria-label="Hero section"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient Portrait Background */}
      <GradientPortraitBackground />
      
      <div className="relative z-20 max-w-6xl w-full">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            x: cardSpringX,
            y: cardSpringY,
            maxWidth: '900px',
          }}
          className="relative bg-transparent rounded-3xl p-10 md:p-14 lg:p-20 mx-auto"
        >
          <div className="flex flex-col items-center text-center relative z-10">
            {/* Content */}
            <div className="w-full max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
                style={{
                  background: 'linear-gradient(to right, var(--gradient-hero-start, var(--color-text-primary)), var(--gradient-hero-mid, #2196f3), var(--gradient-hero-end, #80deea))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                JAKIR HUSSAIN
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl mb-6 font-semibold"
                style={{
                  background: 'linear-gradient(to right, var(--gradient-subtitle-start, #2196f3), var(--gradient-subtitle-mid, #f48fb1), var(--gradient-subtitle-end, #80deea))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Senior Full-Stack Engineer — Product-Focused & Performance-Driven
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-base md:text-lg mb-8 font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Node.js · React · TypeScript · GraphQL · AWS
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                style={{ color: 'var(--color-text-primary)' }}
              >
                I build modern, high-performance digital experiences by combining strong UI engineering, production-grade backend development, and cloud-native architectures. My work focuses on delivering smooth user flows, clean system design, and scalable platforms that evolve with real product needs.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <StatChips />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Button
                  asChild
                  className="gradient-button-primary text-white hover:opacity-90 min-h-[44px] transition-all duration-300"
                  size="lg"
                  style={{
                    boxShadow: '0 4px 20px rgba(33, 150, 243, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 30px rgba(33, 150, 243, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(33, 150, 243, 0.3)'
                  }}
                >
                  <Link href="#storyline">Explore My Work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border-accent hover:bg-bg-card hover:border-border-accent min-h-[44px] transition-all duration-300"
                  size="lg"
                  style={{
                    boxShadow: '0 4px 20px rgba(33, 150, 243, 0.15)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 30px rgba(33, 150, 243, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(33, 150, 243, 0.15)'
                  }}
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
                className="flex gap-4 justify-center"
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

