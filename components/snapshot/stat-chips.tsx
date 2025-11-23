'use client'

import { statChips } from '@/lib/data/stat-chips'
import { motion } from 'framer-motion'

export function StatChips() {
  return (
    <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
      {statChips.map((chip, index) => (
        <motion.div
          key={chip.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="px-4 py-2 rounded-full border border-border-subtle bg-bg-card/50 backdrop-blur-sm hover:border-border-accent hover:glow-effect-hover transition-all"
        >
          <span className="text-text-primary text-sm font-medium">
            {chip.value}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

