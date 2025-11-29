'use client'

import { siteConfig } from '@/src/config/site'
import { StatChips } from './stat-chips'
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

const roleAnimation: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.3, duration: 0.8 }
  },
}

const floatingBubble: Variants = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const floatingPill: Variants = {
  animate: (i: number) => ({
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5,
    },
  }),
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

  // Decorative tags
  const tags: string[] = [];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden"
      aria-label="Hero section"
    >
      <div className="relative z-20 max-w-6xl sm:max-w-6xl md:max-w-7xl lg:max-w-7xl xl:max-w-7xl w-full">
        
        {/* Optional Floating Pills */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
           {tags.map((tag, i) => (
             <motion.div
               key={tag}
               custom={i}
               variants={floatingPill}
               animate="animate"
               className={`absolute px-4 py-2 rounded-full backdrop-blur-md border border-slate-200/50 dark:border-white/10 bg-white/70 dark:bg-black/20 text-sm font-medium text-slate-700 dark:text-foreground/80 shadow-sm
                 ${i === 0 ? 'top-[-20px] left-0' : ''}
                 ${i === 1 ? 'top-[40%] -right-10' : ''}
                 ${i === 2 ? 'bottom-[10%] -left-6' : ''}
               `}
               style={{ opacity: 0.8 }}
             >
               {tag}
             </motion.div>
           ))}
        </div>

        {/* 2) Hero Content - Glass Panel */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative backdrop-blur-xl rounded-[0.5rem] p-8 sm:p-12 md:p-16 lg:p-20 mx-auto border border-slate-200/60 dark:border-white/10 bg-white/30 dark:bg-slate-900/30 shadow-2xl"
        >
          {/* Inner Highlight */}
          <div 
            className="absolute inset-0 rounded-[0.5rem] pointer-events-none bg-gradient-to-b from-white/30 to-transparent dark:from-white/5 dark:to-transparent"
          />

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-full max-w-4xl sm:max-w-4xl md:max-w-5xl lg:max-w-5xl xl:max-w-6xl">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight text-slate-900 dark:text-white drop-shadow-sm"
              >
                {siteConfig.personal.fullName}
              </motion.h1>
              
              {/* Role - Gradient Text */}
              <motion.div
                variants={roleAnimation}
                initial="initial"
                animate="animate"
                className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-medium flex flex-col"
              >
                <span className="text-slate-900 dark:text-white font-bold">
                  Senior Full-Stack Engineer
                </span>
                <span className="text-slate-800 dark:text-slate-100 mt-1 font-semibold">
                  Product-Focused & Performance-Driven
                </span>
              </motion.div>
              
              {/* Tech Line */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-semibold text-slate-700 dark:text-slate-50"
              >
                {siteConfig.personal.heroTechLine}
              </motion.p>
              
              {/* Headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-slate-700 dark:text-slate-200 font-medium"
              >
                {siteConfig.personal.headline}
              </motion.p>
              
              {/* Stat Chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mb-10 sm:mb-14"
              >
                <StatChips />
              </motion.div>
              
              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-14 w-full max-w-md mx-auto"
              >
                <Button
                  asChild
                  className="bg-[var(--color-gradient-blue)] text-white hover:bg-[var(--color-gradient-blue)]/90 min-h-[48px] sm:min-h-[52px] px-8 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  size="lg"
                >
                  <Link href={siteConfig.navigation.main[2].href}>
                    {siteConfig.ctaLabels.primaryHero}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-white dark:bg-slate-900/50 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_-5px_rgba(148,163,184,0.5)] min-h-[48px] sm:min-h-[52px] px-8 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  size="lg"
                >
                  <a href={siteConfig.links.resumeUrl} download>
                    {siteConfig.ctaLabels.secondaryHero}
                  </a>
                </Button>
              </motion.div>
              
              {/* Social Bubbles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-6 justify-center"
              >
                {siteConfig.socialIcons.map((social) => {
                  const IconComponent = 
                    social.type === 'github' ? Github :
                    social.type === 'linkedin' ? Linkedin :
                    social.type === 'email' ? Mail :
                    social.type === 'whatsapp' ? MessageCircle :
                    Calendar
                  
                  return (
                    <motion.a
                      key={social.type}
                      href={social.href}
                      target={social.type !== 'email' ? '_blank' : undefined}
                      rel={social.type !== 'email' ? 'noopener noreferrer' : undefined}
                      variants={floatingBubble}
                      animate="animate"
                      className="group relative p-[2px] rounded-full overflow-hidden transition-transform hover:scale-110"
                      aria-label={`${social.type} profile`}
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Inner Content */}
                      <div className="relative bg-white dark:bg-slate-900 p-3 rounded-full">
                        <IconComponent className="h-6 w-6 text-slate-700 dark:text-slate-300 group-hover:text-[#1976d2] dark:group-hover:text-[#2196f3] transition-colors" />
                      </div>
                    </motion.a>
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
