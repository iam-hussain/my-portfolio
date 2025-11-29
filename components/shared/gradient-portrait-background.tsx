'use client'

import { motion } from 'framer-motion'

export function GradientPortraitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[var(--color-bg-primary)]" aria-hidden>
      <motion.div
        className="absolute inset-0 opacity-80"
        animate={{
          opacity: [0.75, 0.9, 0.75],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: `
            radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--color-gradient-purple) 35%, transparent) 0%, transparent 60%),
            radial-gradient(circle at 75% 70%, color-mix(in srgb, var(--color-gradient-blue) 28%, transparent) 0%, transparent 55%)
          `,
        }}
      />

      <motion.div
        className="hero-glow-halo"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="hero-glow-halo hero-glow-halo--secondary"
        animate={{
          scale: [0.9, 1, 0.9],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

