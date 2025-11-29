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
          className="px-4 py-1.5 rounded-full border border-slate-300/80 dark:border-slate-700/50 bg-white/95 dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-700/70 hover:border-slate-400 dark:hover:border-slate-600 backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold tracking-wide">
            {chip.value}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
