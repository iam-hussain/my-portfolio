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
          className="px-4 py-1.5 rounded-full border border-[rgba(15,23,42,0.15)] dark:border-[rgba(148,163,184,0.2)] bg-[rgba(15,23,42,0.05)] dark:bg-[rgba(148,163,184,0.08)] hover:bg-[rgba(15,23,42,0.1)] dark:hover:bg-[rgba(148,163,184,0.12)] backdrop-blur-sm transition-all duration-300 shadow-[inset_0_0_8px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.03)]"
        >
          <span className="text-[#374151] dark:text-[#D1D5DB] text-sm font-medium tracking-wide">
            {chip.value}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
