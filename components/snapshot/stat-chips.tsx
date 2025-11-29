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
          className="px-3 sm:px-4 py-2 rounded-full transition-all duration-300"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 10px rgba(139, 92, 246, 0.1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)'
            e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.08)'
            e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(139, 92, 246, 0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'
            e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 10px rgba(139, 92, 246, 0.1)'
          }}
        >
          <span className="text-xs sm:text-sm font-medium" style={{ color: '#c8c8c8' }}>
            {chip.value}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
