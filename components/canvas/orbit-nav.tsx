'use client'

import { useState, useEffect, useCallback } from 'react'

const nodes = [
  { id: 'home', label: 'Home', short: 'H' },
  { id: 'about', label: 'About', short: 'A' },
  { id: 'projects', label: 'Work', short: 'W' },
  { id: 'experience', label: 'Journey', short: 'J' },
  { id: 'skills', label: 'Stack', short: 'S' },
  { id: 'contact', label: 'Connect', short: 'C' },
]

export function OrbitNav() {
  const [active, setActive] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  const updateActive = useCallback(() => {
    const scrollY = window.scrollY + 200
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0)

    for (let i = nodes.length - 1; i >= 0; i--) {
      const el = document.getElementById(nodes[i].id)
      if (el && el.offsetTop <= scrollY) {
        setActive(nodes[i].id)
        return
      }
    }
    setActive('home')
  }, [])

  useEffect(() => {
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    return () => window.removeEventListener('scroll', updateActive)
  }, [updateActive])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className="fixed right-4 xl:right-6 2xl:right-8 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col items-center gap-0"
      aria-label="Section navigation"
    >
      {/* Progress line behind nodes */}
      <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-border-subtle/40">
        <div
          className="w-full bg-accent-cyan/60 transition-[height] duration-300 ease-out rounded-full"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {nodes.map((node) => {
        const isActive = active === node.id
        return (
          <button
            key={node.id}
            onClick={() => handleClick(node.id)}
            className="relative group flex items-center py-3 px-2"
            aria-label={`Navigate to ${node.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {/* Label — shows on hover */}
            <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-bg-card/80 backdrop-blur-xl border border-border-subtle text-xs font-mono text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {node.label}
            </span>

            {/* Node dot */}
            <span
              className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-accent-cyan scale-150 orbit-node-active'
                  : 'bg-border-subtle group-hover:bg-foreground/50 group-hover:scale-125'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
