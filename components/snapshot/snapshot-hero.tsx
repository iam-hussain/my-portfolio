'use client'

import { siteConfig } from '@/src/config/site'
import { StatChips } from './stat-chips'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MessageCircle, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

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
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-[#05050A]"
      aria-label="Hero section"
    >
      {/* Deep Dark Background with Soft Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main center glow - subtle blue/purple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-indigo-900/20 rounded-full blur-[100px] opacity-60 animate-[pulse_8s_ease-in-out_infinite]" />
        
        {/* Secondary glow - softer blue */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[80px] opacity-50" />
        
        {/* Vignette to darken edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05050A_100%)]" />
      </div>
      
      <div className="relative z-20 max-w-5xl w-full">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 mx-auto shadow-2xl ring-1 ring-white/5"
        >
          {/* Inner Glow/Highlight */}
          <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Content */}
            <div className="w-full max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white tracking-tight"
              >
                {siteConfig.personal.fullName}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 font-medium text-indigo-300/90"
              >
                {siteConfig.personal.role}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-medium text-slate-400"
              >
                {siteConfig.personal.heroTechLine}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-slate-300/90"
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
                  className="relative overflow-hidden bg-indigo-600 hover:bg-indigo-500 text-white border-0 min-h-[48px] sm:min-h-[52px] px-8 rounded-full text-base font-medium transition-all duration-300 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.6)] hover:scale-[1.02]"
                  size="lg"
                >
                  <Link href={siteConfig.navigation.main[2].href}>
                    {siteConfig.ctaLabels.primaryHero}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white/10 text-white hover:bg-white/5 hover:border-white/20 hover:text-white min-h-[48px] sm:min-h-[52px] px-8 rounded-full text-base font-medium transition-all duration-300 hover:scale-[1.02]"
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
                      className="group p-3 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                      aria-label={`${social.type} profile`}
                    >
                      <IconComponent className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
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

