'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import { seededRandom } from '@/lib/seeded-random'

export function GradientPortraitBackground() {
  const [particleCount, setParticleCount] = useState(40)

  const blobOffsets = useMemo(
    () =>
      [...Array(4)].map((_, i) => ({
        x: seededRandom(i * 13) * 60 - 30,
        y: seededRandom(i * 17) * 60 - 30,
      })),
    []
  )

  const particleData = useMemo(
    () =>
      [...Array(40)].map((_, i) => {
        const r = (n: number) => seededRandom(i * 7 + n)
        return {
          delay: r(1) * 5,
          duration: r(2) * 8 + 6,
          left: r(3) * 100,
          top: r(4) * 100,
          xOffset: r(5) * 40 - 20,
        }
      }),
    []
  )

  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 20 : 40)
    }
    updateParticleCount()
    window.addEventListener('resize', updateParticleCount)
    return () => window.removeEventListener('resize', updateParticleCount)
  }, [])
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Full-screen animated gradient background - Gemini AI colors */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(33, 150, 243, 0.4), rgba(244, 143, 177, 0.3), rgba(128, 222, 234, 0.2), transparent)',
            'radial-gradient(circle at 80% 50%, rgba(244, 143, 177, 0.4), rgba(33, 150, 243, 0.3), rgba(128, 222, 234, 0.2), transparent)',
            'radial-gradient(circle at 50% 20%, rgba(128, 222, 234, 0.4), rgba(244, 143, 177, 0.3), rgba(33, 150, 243, 0.2), transparent)',
            'radial-gradient(circle at 20% 50%, rgba(33, 150, 243, 0.4), rgba(244, 143, 177, 0.3), rgba(128, 222, 234, 0.2), transparent)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Large blurred gradient halo on right side - Gemini AI colors */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-3xl opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(33, 150, 243, 0.6), rgba(244, 143, 177, 0.4), rgba(128, 222, 234, 0.3), transparent)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating gradient blobs - Gemini AI colors */}
      {[
        { size: 400, x: '70%', y: '20%', color: 'rgba(33, 150, 243, 0.3)' },
        { size: 300, x: '80%', y: '60%', color: 'rgba(244, 143, 177, 0.25)' },
        { size: 350, x: '75%', y: '80%', color: 'rgba(128, 222, 234, 0.3)' },
        { size: 250, x: '60%', y: '40%', color: 'rgba(33, 150, 243, 0.2)' },
      ].map((blob, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: blob.x,
            top: blob.y,
            background: blob.color,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, blobOffsets[i].x, 0],
            y: [0, blobOffsets[i].y, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Small floating particles - Gemini AI colors (reduced on mobile for performance) */}
      {particleData.slice(0, particleCount).map((p, i) => {
        const colors = ['#2196f3', '#f48fb1', '#80deea', '#ffeb3b']
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              backgroundColor: colors[i % colors.length],
              opacity: 0.4,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, p.xOffset, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        )
      })}
    </div>
  )
}

