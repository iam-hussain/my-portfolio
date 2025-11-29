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

  const roleParts = siteConfig.personal.role.split(' — ')
  const primaryRole = roleParts[0]
  const secondaryRole = roleParts.slice(1).join(' — ')

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-hidden bg-[var(--color-bg-primary)]"
      aria-label="Hero section"
      onMouseMove={handleMouseMove}
    >
      <GradientPortraitBackground />

      <div className="relative z-20 w-full">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{
            x: !isMobile ? cardSpringX : 0,
            y: !isMobile ? cardSpringY : 0,
          }}
          className="hero-glass-panel mx-auto flex w-full max-w-4xl flex-col items-center rounded-[36px] px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16 text-center shadow-2xl"
        >
          <div className="flex w-full flex-col gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="mb-2 text-4xl font-semibold leading-tight text-text-primary sm:mb-4 sm:text-5xl lg:text-6xl">
                {siteConfig.personal.fullName.toUpperCase()}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl font-semibold"
            >
              <span className="hero-role-accent">{primaryRole}</span>
              {secondaryRole ? (
                <span className="text-text-secondary"> {`— ${secondaryRole}`}</span>
              ) : null}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-sm sm:text-base text-text-secondary"
            >
              {siteConfig.personal.heroTechLine}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-text-primary"
            >
              {siteConfig.personal.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <StatChips />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              <Button
                asChild
                className="hero-primary-button min-h-[48px] rounded-2xl px-6 py-4 text-base font-semibold text-text-primary transition-transform duration-300 hover:scale-[1.02]"
                size="lg"
              >
                <Link href={siteConfig.navigation.main[2].href}>{siteConfig.ctaLabels.primaryHero}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="hero-secondary-button min-h-[48px] rounded-2xl px-6 py-4 text-base font-semibold text-text-primary transition-transform duration-300 hover:scale-[1.02]"
                size="lg"
              >
                <a href={siteConfig.links.resumeUrl} download>
                  {siteConfig.ctaLabels.secondaryHero}
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {siteConfig.socialIcons.map((social) => {
                const IconComponent =
                  social.type === 'github'
                    ? Github
                    : social.type === 'linkedin'
                      ? Linkedin
                      : social.type === 'email'
                        ? Mail
                        : social.type === 'whatsapp'
                          ? MessageCircle
                          : Calendar

                return (
                  <a
                    key={social.type}
                    href={social.href}
                    target={social.type !== 'email' ? '_blank' : undefined}
                    rel={social.type !== 'email' ? 'noopener noreferrer' : undefined}
                    className="hero-social-icon flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105"
                    aria-label={`${social.type} profile`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

