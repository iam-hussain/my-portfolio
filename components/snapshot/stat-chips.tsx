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
          className="hero-chip"
        >
          <span className="text-[0.7rem] font-medium tracking-wide text-text-primary sm:text-xs">
            {chip.value}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

