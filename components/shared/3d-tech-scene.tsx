'use client'

import { motion } from 'framer-motion'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

export function Tech3DScene() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return
      const rect = sceneRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set((e.clientX - centerX) / window.innerWidth)
      mouseY.set((e.clientY - centerY) / window.innerHeight)
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      mouseY.set(scrollY * 0.001)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mouseX, mouseY])

  const springConfig = { damping: 50, stiffness: 100 }
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig)

  return (
    <div
      ref={sceneRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => {
          const delay = Math.random() * 5
          const duration = Math.random() * 10 + 10
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#3b82f6' : '#06b6d4',
                opacity: 0.3,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
                delay,
              }}
            />
          )
        })}
      </div>

      {/* Main 3D Scene Container */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[700px] hidden lg:block"
        style={{
          x: parallaxX,
          y: parallaxY,
          filter: 'blur(0.5px)',
        }}
        animate={{
          y: [0, -4, 0],
          x: [0, 2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Glowing halo around scene with edge blur */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.4), transparent)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Edge blur mask */}
          <div
            className="absolute inset-0"
            style={{
              maskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%)',
            }}
          />
        </div>

        <svg
          viewBox="0 0 800 700"
          className="w-full h-full opacity-90"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))',
          }}
        >
          <defs>
            <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a2e" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f0f23" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="glowNeon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>

            <filter id="sceneGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="softBlur">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>

          {/* Floating Window 1 - Code Editor */}
          <motion.g
            transform="translate(100, 50)"
            animate={{
              y: [0, -8, 0],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <rect x="0" y="0" width="180" height="140" rx="8" fill="url(#windowGradient)" stroke="#8b5cf6" strokeWidth="2" opacity="0.8" filter="url(#sceneGlow)" />
            <rect x="8" y="8" width="164" height="124" rx="4" fill="#0a0a0a" />
            <text x="15" y="30" fontSize="10" fill="#8b5cf6" fontFamily="monospace">api.ts</text>
            <line x1="8" y1="35" x2="172" y2="35" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.5" />
            <text x="15" y="55" fontSize="8" fill="#3b82f6" fontFamily="monospace">export async</text>
            <text x="15" y="75" fontSize="8" fill="#a1a1aa" fontFamily="monospace">  function</text>
            <text x="15" y="95" fontSize="8" fill="#06b6d4" fontFamily="monospace">  fetchData()</text>
            <text x="15" y="115" fontSize="8" fill="#8b5cf6" fontFamily="monospace">{'}'}</text>
          </motion.g>

          {/* Floating Window 2 - GraphQL Schema */}
          <motion.g
            transform="translate(320, 80)"
            animate={{
              y: [0, -6, 0],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <rect x="0" y="0" width="200" height="160" rx="8" fill="url(#windowGradient)" stroke="#3b82f6" strokeWidth="2" opacity="0.8" filter="url(#sceneGlow)" />
            <rect x="8" y="8" width="184" height="144" rx="4" fill="#0a0a0a" />
            <text x="15" y="30" fontSize="10" fill="#3b82f6" fontFamily="monospace">schema.graphql</text>
            <line x1="8" y1="35" x2="192" y2="35" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <text x="15" y="55" fontSize="8" fill="#a1a1aa" fontFamily="monospace">type Query {'{'}</text>
            <text x="15" y="75" fontSize="8" fill="#3b82f6" fontFamily="monospace">  users: [User]</text>
            <text x="15" y="95" fontSize="8" fill="#3b82f6" fontFamily="monospace">  posts: [Post]</text>
            <text x="15" y="115" fontSize="8" fill="#a1a1aa" fontFamily="monospace">{'}'}</text>
            <text x="15" y="135" fontSize="8" fill="#06b6d4" fontFamily="monospace">type User {'{'}</text>
          </motion.g>

          {/* Floating Window 3 - Analytics Dashboard */}
          <motion.g
            transform="translate(550, 120)"
            animate={{
              y: [0, -10, 0],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <rect x="0" y="0" width="220" height="180" rx="8" fill="url(#windowGradient)" stroke="#06b6d4" strokeWidth="2" opacity="0.8" filter="url(#sceneGlow)" />
            <rect x="8" y="8" width="204" height="164" rx="4" fill="#0a0a0a" />
            <text x="15" y="30" fontSize="10" fill="#06b6d4" fontFamily="monospace">Analytics</text>
            <line x1="8" y1="35" x2="212" y2="35" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5" />
            {/* Chart bars */}
            <rect x="20" y="120" width="25" height="40" fill="#06b6d4" opacity="0.7" />
            <rect x="55" y="100" width="25" height="60" fill="#3b82f6" opacity="0.7" />
            <rect x="90" y="110" width="25" height="50" fill="#8b5cf6" opacity="0.7" />
            <rect x="125" y="90" width="25" height="70" fill="#06b6d4" opacity="0.7" />
            <rect x="160" y="105" width="25" height="55" fill="#3b82f6" opacity="0.7" />
            {/* Line chart */}
            <polyline
              points="20,80 50,70 80,65 110,60 140,55 170,50"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2"
              opacity="0.8"
            />
          </motion.g>

          {/* API Flow Diagram */}
          <motion.g
            transform="translate(150, 300)"
            animate={{
              x: [0, 5, 0],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* API Nodes */}
            <circle cx="0" cy="0" r="25" fill="url(#windowGradient)" stroke="#8b5cf6" strokeWidth="2" opacity="0.8" filter="url(#sceneGlow)" />
            <text x="-15" y="5" fontSize="9" fill="#8b5cf6" fontFamily="monospace" textAnchor="middle">API</text>
            
            <circle cx="120" cy="0" r="25" fill="url(#windowGradient)" stroke="#3b82f6" strokeWidth="2" opacity="0.8" filter="url(#sceneGlow)" />
            <text x="105" y="5" fontSize="9" fill="#3b82f6" fontFamily="monospace" textAnchor="middle">DB</text>
            
            <circle cx="240" cy="0" r="25" fill="url(#windowGradient)" stroke="#06b6d4" strokeWidth="2" opacity="0.8" filter="url(#sceneGlow)" />
            <text x="225" y="5" fontSize="9" fill="#06b6d4" fontFamily="monospace" textAnchor="middle">Cache</text>
            
            {/* Connection lines */}
            <line x1="25" y1="0" x2="95" y2="0" stroke="#8b5cf6" strokeWidth="2" opacity="0.5" />
            <line x1="145" y1="0" x2="215" y2="0" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
            
            {/* Data flow arrows */}
            <motion.path
              d="M 30 0 L 40 -5 L 40 5 Z"
              fill="#8b5cf6"
              opacity="0.7"
              animate={{
                x: [0, 60, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.path
              d="M 150 0 L 160 -5 L 160 5 Z"
              fill="#3b82f6"
              opacity="0.7"
              animate={{
                x: [0, 60, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'linear',
                delay: 0.5,
              }}
            />
          </motion.g>

          {/* Component Tree */}
          <motion.g
            transform="translate(450, 350)"
            animate={{
              y: [0, -5, 0],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
          >
            <rect x="0" y="0" width="160" height="200" rx="8" fill="url(#windowGradient)" stroke="#8b5cf6" strokeWidth="2" opacity="0.7" filter="url(#sceneGlow)" />
            <rect x="8" y="8" width="144" height="184" rx="4" fill="#0a0a0a" />
            <text x="15" y="30" fontSize="10" fill="#8b5cf6" fontFamily="monospace">Components</text>
            <line x1="8" y1="35" x2="152" y2="35" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.5" />
            {/* Tree structure */}
            <text x="20" y="60" fontSize="8" fill="#3b82f6" fontFamily="monospace">App</text>
            <line x1="20" y1="65" x2="20" y2="85" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
            <text x="30" y="90" fontSize="8" fill="#06b6d4" fontFamily="monospace">Header</text>
            <text x="30" y="110" fontSize="8" fill="#06b6d4" fontFamily="monospace">Main</text>
            <text x="30" y="130" fontSize="8" fill="#06b6d4" fontFamily="monospace">Footer</text>
            <line x1="30" y1="95" x2="30" y2="135" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
            <text x="40" y="150" fontSize="7" fill="#a1a1aa" fontFamily="monospace">Button</text>
            <text x="40" y="170" fontSize="7" fill="#a1a1aa" fontFamily="monospace">Card</text>
          </motion.g>

          {/* Network Flow */}
          <motion.g
            transform="translate(80, 500)"
            animate={{
              x: [0, 8, 0],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          >
            {/* Network nodes */}
            {[0, 80, 160, 240].map((x, i) => (
              <g key={`node-${i}`}>
                <rect x={x} y="0" width="60" height="50" rx="6" fill="url(#windowGradient)" stroke={i % 2 === 0 ? '#8b5cf6' : '#3b82f6'} strokeWidth="1.5" opacity="0.7" filter="url(#sceneGlow)" />
                <text x={x + 10} y="30" fontSize="8" fill={i % 2 === 0 ? '#8b5cf6' : '#3b82f6'} fontFamily="monospace" textAnchor="middle">
                  {i === 0 ? 'Client' : i === 1 ? 'API' : i === 2 ? 'DB' : 'Cache'}
                </text>
                {i < 3 && (
                  <line x1={x + 60} y1="25" x2={x + 80} y2="25" stroke={i % 2 === 0 ? '#8b5cf6' : '#3b82f6'} strokeWidth="1.5" opacity="0.5" />
                )}
              </g>
            ))}
          </motion.g>

          {/* Data Stream Lines */}
          <g opacity="0.4">
            {[...Array(5)].map((_, i) => (
              <motion.line
                key={`stream-${i}`}
                x1={100 + i * 120}
                y1="600"
                x2={150 + i * 120}
                y2="550"
                stroke={i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#3b82f6' : '#06b6d4'}
                strokeWidth="2"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, -10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.3,
                }}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  )
}

