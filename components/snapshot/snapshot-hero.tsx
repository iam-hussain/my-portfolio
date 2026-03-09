'use client'

import { siteConfig } from '@/src/config/site'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const floatingBadge: Variants = {
  animate: (i: number) => ({
    y: [0, -6, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.2,
    },
  }),
}

const heroBadges = ['LangGraph', 'MCP', 'RAG', 'Node.js', 'Open Finance', 'AI Platform']

export function SnapshotHero() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-dvh sm:min-h-screen flex items-center justify-center w-full overflow-hidden scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
      aria-label="Hero section"
    >
      {/* Subtle grid/glow background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 pointer-events-none gradient-hero" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:max-w-[90rem] 3xl:px-24 pt-20 sm:pt-24 md:pt-28 lg:pt-24 pb-12 sm:pb-16 md:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Left: Copy */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-hero font-extrabold tracking-tight text-foreground text-balance hyphens-none mb-3 sm:mb-4"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground/95 mb-2 sm:mb-3"
            >
              {siteConfig.personal.fullName}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-accent-cyan font-semibold mb-4 sm:mb-6"
            >
              {siteConfig.hero.subheadline}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-body text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10"
            >
              {siteConfig.hero.supportingText}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10"
            >
              <Button
                onClick={() => handleScrollTo('#projects')}
                className="bg-[var(--accent-cyan)] text-white hover:opacity-90 min-h-[48px] w-full sm:w-auto px-6 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                size="lg"
              >
                {siteConfig.ctaLabels.primaryHero}
              </Button>
              <Button
                onClick={() => handleScrollTo('#contact')}
                variant="secondary"
                className="border border-border-subtle min-h-[48px] w-full sm:w-auto px-6 sm:px-8 rounded-xl text-sm sm:text-base font-semibold"
                size="lg"
              >
                {siteConfig.ctaLabels.secondaryHero}
              </Button>
              <Button
                asChild
                variant="secondary"
                className="border border-border-subtle min-h-[48px] w-full sm:w-auto px-6 sm:px-8 rounded-xl text-sm sm:text-base font-semibold"
                size="lg"
              >
                <a href={siteConfig.links.resumeUrl} target="_blank" rel="noopener noreferrer">
                  {siteConfig.ctaLabels.tertiaryHero}
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {siteConfig.socialIcons
                .filter((s) => ['github', 'linkedin', 'email'].includes(s.type))
                .map((social) => {
                  const Icon =
                    social.type === 'github' ? Github : social.type === 'linkedin' ? Linkedin : Mail
                  return (
                    <a
                      key={social.type}
                      href={social.href}
                      target={social.type !== 'email' ? '_blank' : undefined}
                      rel={social.type !== 'email' ? 'noopener noreferrer' : undefined}
                      className="p-2.5 sm:p-3 rounded-xl border border-border-subtle bg-bg-secondary/50 hover:border-accent-cyan/50 hover:bg-bg-tertiary transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label={`${social.type} profile`}
                    >
                      <Icon className="h-5 w-5 text-foreground" />
                    </a>
                  )
                })}
            </motion.div>
          </div>

          {/* Right: Futuristic composition - hidden on mobile/tablet */}
          <div className="hidden lg:flex flex-1 relative min-h-[280px] xl:min-h-[320px] 2xl:min-h-[360px] items-center justify-center">
            {/* Terminal-inspired card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute rounded-2xl border border-border-subtle bg-bg-secondary/80 backdrop-blur-xl p-4 w-full max-w-[18rem] xl:max-w-sm 2xl:max-w-md shadow-xl"
            >
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="font-mono text-sm text-muted-foreground space-y-1">
                <p>
                  <span className="text-accent-cyan">&gt;</span> jakir.role
                </p>
                <p className="text-foreground">Senior Full-Stack & AI Platform Engineer</p>
                <p>
                  <span className="text-accent-cyan">&gt;</span> jakir.specialties
                </p>
                <p className="text-foreground">
                  [LangChain, LangGraph, MCP, RAG, Node.js, TypeScript]
                </p>
              </div>
            </motion.div>

            {/* Floating tech badges - orbit around terminal */}
            {heroBadges.map((badge, i) => {
              const positions: Record<number, string> = {
                0: 'top-[10%] left-[5%]',
                1: 'top-[5%] right-[15%]',
                2: 'top-[35%] left-[-5%]',
                3: 'top-[30%] right-[-2%]',
                4: 'bottom-[25%] left-[10%]',
                5: 'bottom-[20%] right-[8%]',
              }
              return (
                <motion.div
                  key={badge}
                  custom={i}
                  variants={floatingBadge}
                  animate="animate"
                  className={`absolute px-4 py-2 rounded-xl border border-border-subtle bg-bg-card/90 backdrop-blur-md font-mono text-sm font-medium text-foreground shadow-lg ${positions[i] ?? ''}`}
                >
                  {badge}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
