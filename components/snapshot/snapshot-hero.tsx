'use client'

import { siteConfig } from '@/src/config/site'
import { StatChips } from './stat-chips'
import { GradientPortraitBackground } from '@/components/shared/gradient-portrait-background'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MessageCircle, Calendar } from 'lucide-react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

export function SnapshotHero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 200 }
  const cardSpringX = useSpring(cardX, springConfig)
  const cardSpringY = useSpring(cardY, springConfig)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Disable parallax on mobile for better performance
    if (window.innerWidth < 768) return
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
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden"
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
            x: !isMobile ? cardSpringX : 0,
            y: !isMobile ? cardSpringY : 0,
            maxWidth: '900px',
          }}
          className="relative bg-transparent rounded-3xl p-6 sm:p-8 md:p-14 lg:p-20 mx-auto"
        >
          <div className="flex flex-col items-center text-center relative z-10">
            {/* Content */}
            <div className="w-full max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8"
                style={{
                  background: 'linear-gradient(to right, var(--gradient-hero-start, var(--color-text-primary)), var(--gradient-hero-mid, #2196f3), var(--gradient-hero-end, #80deea))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {siteConfig.personal.fullName.toUpperCase()}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-semibold"
                style={{
                  background: 'linear-gradient(to right, var(--gradient-subtitle-start, #2196f3), var(--gradient-subtitle-mid, #f48fb1), var(--gradient-subtitle-end, #80deea))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {siteConfig.personal.role}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {siteConfig.personal.heroTechLine}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {siteConfig.personal.headline}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 sm:mb-12"
              >
                <StatChips />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 w-full"
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
                  <Link href={siteConfig.navigation.main[2].href}>{siteConfig.ctaLabels.primaryHero}</Link>
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
                  <a href={siteConfig.links.resumeUrl} download>
                    {siteConfig.ctaLabels.secondaryHero}
                  </a>
                </Button>
              </motion.div>
              
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 sm:gap-4 justify-center"
              >
                {siteConfig.socialIcons.map((social) => {
                  const IconComponent = 
                    social.type === 'github' ? Github :
                    social.type === 'linkedin' ? Linkedin :
                    social.type === 'email' ? Mail :
                    social.type === 'whatsapp' ? MessageCircle :
                    Calendar
                  
                  return (
                    <a
                      key={social.type}
                      href={social.href}
                      target={social.type !== 'email' ? '_blank' : undefined}
                      rel={social.type !== 'email' ? 'noopener noreferrer' : undefined}
                      className="p-2.5 sm:p-3 rounded-full border border-border-subtle bg-bg-card/50 hover:border-border-accent hover:glow-effect-hover transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label={`${social.type} profile`}
                    >
                      <IconComponent className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                    </a>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

