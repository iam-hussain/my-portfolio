'use client'

import { useEffect, useRef } from 'react'

export function CanvasBackground() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number
    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        glow.style.left = `${e.clientX}px`
        glow.style.top = `${e.clientY}px`
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div className="absolute inset-0 canvas-dots" />

      {/* Cursor-following ambient glow */}
      <div
        ref={glowRef}
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-[600ms] ease-out will-change-[left,top]"
        style={{
          background: 'radial-gradient(circle, var(--color-accent-cyan), transparent 70%)',
          opacity: 'var(--canvas-glow-opacity)',
          left: '50%',
          top: '50%',
        }}
      />

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg-primary to-transparent opacity-80" />
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-primary to-transparent opacity-80" />
    </div>
  )
}
