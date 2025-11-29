'use client'

import { statChips } from '@/lib/data/stat-chips'
import { motion } from 'framer-motion'

export function StatChips() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {statChips.map((chip, index) => (
        <motion.div
          key={chip.value}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-sm transition-all duration-300"
          style={{
            boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.02)'
          }}
        >
          <span className="text-slate-300 text-sm font-medium tracking-wide">
            {chip.value}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

