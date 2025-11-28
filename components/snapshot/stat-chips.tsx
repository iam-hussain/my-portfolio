'use client'

import { statChips } from '@/lib/data/stat-chips'
import { motion } from 'framer-motion'

export function StatChips() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
      {statChips.map((chip, index) => (
        <motion.div
          key={chip.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="px-3 sm:px-4 py-2 rounded-full border border-border-subtle bg-bg-card/50 backdrop-blur-sm hover:border-border-accent hover:glow-effect-hover transition-all"
        >
          <span className="text-text-primary text-xs sm:text-sm font-medium">
            {chip.value}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

