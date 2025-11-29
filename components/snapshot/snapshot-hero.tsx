'use client'

import { siteConfig } from '@/src/config/site'
import { StatChips } from './stat-chips'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MessageCircle, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function SnapshotHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden"
      aria-label="Hero section"
      style={{
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Subtle radial gradient backgrounds behind the card */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.1), transparent)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12), rgba(139, 92, 246, 0.08), transparent)',
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>
      
      {/* Glass card container */}
      <div className="relative z-20 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 mx-auto"
          style={{
            backgroundColor: 'rgba(15, 15, 20, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="flex flex-col items-center text-center">
            {/* Name - Large, white, clean */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white"
            >
              {siteConfig.personal.fullName.toUpperCase()}
            </motion.h1>
            
            {/* Role - Subtle accent colors, split into two lines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-semibold"
            >
              {siteConfig.personal.role.includes('—') ? (
                <>
                  <div className="text-white">{siteConfig.personal.role.split('—')[0]}</div>
                  <div className="text-[#3b82f6]">{siteConfig.personal.role.split('—')[1]}</div>
                </>
              ) : (
                <div className="text-white">{siteConfig.personal.role}</div>
              )}
            </motion.div>
            
            {/* Tech line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-medium text-[#a8a8a8]"
            >
              {siteConfig.personal.heroTechLine}
            </motion.p>
            
            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-[#c8c8c8]"
            >
              {siteConfig.personal.headline}
            </motion.p>
            
            {/* Stat Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 sm:mb-12"
            >
              <StatChips />
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 w-full"
            >
              <Button
                asChild
                className="min-h-[44px] transition-all duration-300 text-white font-medium"
                size="lg"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 30px rgba(139, 92, 246, 0.5)'
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.3)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <Link href={siteConfig.navigation.main[2].href}>{siteConfig.ctaLabels.primaryHero}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-[44px] transition-all duration-300 font-medium"
                size="lg"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#e8e8e8',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
                  e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)'
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.transform = 'scale(1)'
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
              transition={{ delay: 0.6, duration: 0.6 }}
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
                    className="p-2.5 sm:p-3 rounded-full border min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      color: '#a8a8a8',
                    }}
                    aria-label={`${social.type} profile`}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)'
                      e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)'
                      e.currentTarget.style.color = '#e8e8e8'
                      e.currentTarget.style.transform = 'scale(1.1)'
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'
                      e.currentTarget.style.color = '#a8a8a8'
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
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
