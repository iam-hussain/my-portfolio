'use client'

import { siteConfig } from '@/src/config/site'
import { StatChips } from './stat-chips'
import { JourneyHeroBackground } from '@/components/shared/journey-hero-background'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MessageCircle, Calendar } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const roleAnimation = {
  initial: fadeInUp.initial,
  animate: fadeInUp.animate,
  transition: { delay: 0.3, duration: 0.8 },
}

export function SnapshotHero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-background"
      aria-label="Hero section"
    >
      <JourneyHeroBackground />
      
      <div className="relative z-20 max-w-5xl w-full">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 mx-auto border border-[rgba(15,23,42,0.08)] dark:border-[rgba(148,163,184,0.3)] bg-[#F9FAFB] dark:bg-[#020617]/90 shadow-[0_24px_60px_rgba(15,23,42,0.12)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Inner Glow/Highlight - Theme-aware */}
          <div 
            className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(15,23,42,0.02)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.02)_0%,transparent_50%)]"
          />

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Content */}
            <div className="w-full max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight text-[#111827] dark:text-[#F9FAFB]"
              >
                {siteConfig.personal.fullName}
              </motion.h1>
              
              <motion.div
                {...roleAnimation}
                className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-medium flex flex-col text-[#2196f3] dark:text-[#2196f3]"
              >
                <span>Senior Full-Stack Engineer</span>
                <span>Product-Focused & Performance-Driven</span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-medium text-[#374151] dark:text-[#D1D5DB]"
              >
                {siteConfig.personal.heroTechLine}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-[#374151] dark:text-[#D1D5DB]"
              >
                {siteConfig.personal.headline}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mb-10 sm:mb-14"
              >
                <StatChips />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-14 w-full max-w-md mx-auto"
              >
                <Button
                  asChild
                  className="relative overflow-hidden bg-[#2196f3] hover:bg-[#1e88e5] text-white border-0 min-h-[48px] sm:min-h-[52px] px-8 rounded-full text-base font-medium transition-all duration-300 shadow-[0_0_20px_-5px_rgba(33,150,243,0.4)] hover:shadow-[0_0_25px_-5px_rgba(33,150,243,0.5)] hover:scale-[1.02]"
                  size="lg"
                >
                  <Link href={siteConfig.navigation.main[2].href}>
                    {siteConfig.ctaLabels.primaryHero}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-[rgba(15,23,42,0.2)] dark:border-[rgba(148,163,184,0.3)] text-[#111827] dark:text-[#F9FAFB] hover:bg-[rgba(15,23,42,0.05)] dark:hover:bg-[rgba(148,163,184,0.1)] hover:border-[rgba(15,23,42,0.3)] dark:hover:border-[rgba(148,163,184,0.4)] min-h-[48px] sm:min-h-[52px] px-8 rounded-full text-base font-medium transition-all duration-300 hover:scale-[1.02]"
                  size="lg"
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
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-4 justify-center"
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
                      className="group p-3 rounded-full border border-[rgba(15,23,42,0.15)] dark:border-[rgba(148,163,184,0.2)] bg-[rgba(15,23,42,0.03)] dark:bg-[rgba(148,163,184,0.05)] hover:bg-[rgba(15,23,42,0.08)] dark:hover:bg-[rgba(148,163,184,0.1)] hover:border-[rgba(15,23,42,0.25)] dark:hover:border-[rgba(148,163,184,0.3)] transition-all duration-300 hover:scale-110"
                      aria-label={`${social.type} profile`}
                    >
                      <IconComponent className="h-5 w-5 text-[#6B7280] dark:text-[#9CA3AF] group-hover:text-[#2196f3] dark:group-hover:text-[#2196f3] transition-colors" />
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
