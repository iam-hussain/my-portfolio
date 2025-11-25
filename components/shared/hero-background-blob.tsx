'use client'

import { motion } from 'framer-motion'

export function HeroBackgroundBlob() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large blurred gradient blob behind hero card */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.2))',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}


