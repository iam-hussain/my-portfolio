'use client'

import { motion } from 'framer-motion'

export function CodingDeskIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        style={{ transform: 'scale(1.35)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="deskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a2e" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#16213e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0f0f23" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="monitorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1e3f" />
            <stop offset="100%" stopColor="#0f0f23" />
          </linearGradient>

          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="50%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>

          <linearGradient id="glowPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="glowBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating particles background */}
        <g opacity="0.3">
          {[...Array(15)].map((_, i) => {
            const initialY = Math.random() * 600
            const initialX = Math.random() * 800
            return (
              <motion.circle
                key={`particle-${i}`}
                cx={initialX}
                cy={initialY}
                r={Math.random() * 2 + 1}
                fill="#8b5cf6"
                animate={{
                  cy: [initialY, initialY - 50, initialY],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </g>

        {/* Floating UI Panel - React Component */}
        <g transform="translate(50, 80)">
          <motion.rect
            x="0"
            y="0"
            width="120"
            height="80"
            rx="8"
            fill="url(#monitorGradient)"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            opacity="0.8"
            filter="url(#softGlow)"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="10" y="25" fontSize="10" fill="#8b5cf6" fontFamily="monospace">
            {'<Component />'}
          </text>
          <line x1="10" y1="30" x2="110" y2="30" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.5" />
          <text x="10" y="45" fontSize="8" fill="#a1a1aa" fontFamily="monospace">
            export const
          </text>
          <text x="10" y="60" fontSize="8" fill="#3b82f6" fontFamily="monospace">
            Button
          </text>
        </g>

        {/* Floating UI Panel - API Route */}
        <g transform="translate(650, 100)">
          <motion.rect
            x="0"
            y="0"
            width="100"
            height="70"
            rx="8"
            fill="url(#monitorGradient)"
            stroke="#3b82f6"
            strokeWidth="1.5"
            opacity="0.8"
            filter="url(#softGlow)"
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <text x="10" y="20" fontSize="9" fill="#3b82f6" fontFamily="monospace">
            /api/users
          </text>
          <line x1="10" y1="25" x2="90" y2="25" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
          <text x="10" y="40" fontSize="8" fill="#a1a1aa" fontFamily="monospace">
            GET 200 OK
          </text>
          <text x="10" y="55" fontSize="8" fill="#06b6d4" fontFamily="monospace">
            {'{...data}'}
          </text>
        </g>

        {/* Main Desk - Floating */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Desk Surface */}
          <rect
            x="200"
            y="300"
            width="400"
            height="20"
            rx="4"
            fill="url(#deskGradient)"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            opacity="0.9"
            filter="url(#glow)"
          />

          {/* Desk Glow Effect */}
          <rect
            x="200"
            y="300"
            width="400"
            height="20"
            rx="4"
            fill="url(#glowPurple)"
            opacity="0.3"
          />

          {/* Left Monitor */}
          <g transform="translate(220, 200)">
            {/* Monitor Stand */}
            <rect x="75" y="100" width="10" height="20" fill="#1a1a2e" />
            {/* Monitor Base */}
            <rect x="50" y="120" width="60" height="5" rx="2" fill="#1a1a2e" />
            {/* Monitor Frame */}
            <rect x="40" y="20" width="80" height="100" rx="4" fill="url(#monitorGradient)" stroke="#8b5cf6" strokeWidth="2" />
            {/* Screen */}
            <rect x="45" y="25" width="70" height="90" rx="2" fill="url(#screenGradient)" />
            {/* Screen Content - Code */}
            <text x="50" y="40" fontSize="7" fill="#8b5cf6" fontFamily="monospace">const api =</text>
            <text x="50" y="52" fontSize="7" fill="#3b82f6" fontFamily="monospace">  async () =&gt;</text>
            <text x="50" y="64" fontSize="7" fill="#a1a1aa" fontFamily="monospace">  return data</text>
            <text x="50" y="76" fontSize="7" fill="#8b5cf6" fontFamily="monospace">{'}'}</text>
            {/* Monitor Glow */}
            <rect x="40" y="20" width="80" height="100" rx="4" fill="url(#glowPurple)" opacity="0.2" />
          </g>

          {/* Center Monitor */}
          <g transform="translate(320, 180)">
            {/* Monitor Stand */}
            <rect x="75" y="120" width="10" height="20" fill="#1a1a2e" />
            {/* Monitor Base */}
            <rect x="50" y="140" width="60" height="5" rx="2" fill="#1a1a2e" />
            {/* Monitor Frame */}
            <rect x="40" y="20" width="80" height="120" rx="4" fill="url(#monitorGradient)" stroke="#3b82f6" strokeWidth="2" />
            {/* Screen */}
            <rect x="45" y="25" width="70" height="110" rx="2" fill="url(#screenGradient)" />
            {/* Screen Content - UI Components */}
            <rect x="50" y="35" width="60" height="40" rx="4" fill="#1a1a2e" stroke="#3b82f6" strokeWidth="1" />
            <circle cx="60" cy="50" r="3" fill="#3b82f6" />
            <text x="70" y="53" fontSize="6" fill="#a1a1aa" fontFamily="monospace">Card</text>
            <rect x="50" y="80" width="60" height="25" rx="4" fill="#1a1a2e" stroke="#8b5cf6" strokeWidth="1" />
            <text x="55" y="95" fontSize="6" fill="#8b5cf6" fontFamily="monospace">Button</text>
            {/* Monitor Glow */}
            <rect x="40" y="20" width="80" height="120" rx="4" fill="url(#glowBlue)" opacity="0.2" />
          </g>

          {/* Right Monitor - Analytics */}
          <g transform="translate(420, 200)">
            {/* Monitor Stand */}
            <rect x="75" y="100" width="10" height="20" fill="#1a1a2e" />
            {/* Monitor Base */}
            <rect x="50" y="120" width="60" height="5" rx="2" fill="#1a1a2e" />
            {/* Monitor Frame */}
            <rect x="40" y="20" width="80" height="100" rx="4" fill="url(#monitorGradient)" stroke="#06b6d4" strokeWidth="2" />
            {/* Screen */}
            <rect x="45" y="25" width="70" height="90" rx="2" fill="url(#screenGradient)" />
            {/* Screen Content - Chart */}
            <text x="50" y="40" fontSize="7" fill="#06b6d4" fontFamily="monospace">Analytics</text>
            <line x1="50" y1="45" x2="110" y2="45" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5" />
            {/* Simple bar chart */}
            <rect x="55" y="70" width="8" height="20" fill="#06b6d4" opacity="0.7" />
            <rect x="68" y="60" width="8" height="30" fill="#3b82f6" opacity="0.7" />
            <rect x="81" y="65" width="8" height="25" fill="#8b5cf6" opacity="0.7" />
            <rect x="94" y="55" width="8" height="35" fill="#06b6d4" opacity="0.7" />
            {/* Monitor Glow */}
            <rect x="40" y="20" width="80" height="100" rx="4" fill="url(#glowBlue)" opacity="0.2" />
          </g>

          {/* Laptop */}
          <g transform="translate(250, 320)">
            {/* Laptop Base */}
            <rect x="0" y="0" width="120" height="80" rx="4" fill="url(#monitorGradient)" stroke="#8b5cf6" strokeWidth="1.5" />
            {/* Laptop Screen */}
            <rect x="10" y="10" width="100" height="60" rx="2" fill="url(#screenGradient)" />
            {/* Keyboard Glow */}
            <rect x="15" y="70" width="90" height="8" rx="2" fill="#8b5cf6" opacity="0.4" filter="url(#glow)" />
            {/* Keyboard Keys */}
            {[...Array(6)].map((_, i) => (
              <rect
                key={`key-${i}`}
                x={20 + i * 14}
                y="72"
                width="12"
                height="4"
                rx="1"
                fill="#8b5cf6"
                opacity="0.6"
              />
            ))}
            {/* Screen Content */}
            <text x="20" y="30" fontSize="7" fill="#8b5cf6" fontFamily="monospace">$ npm start</text>
            <text x="20" y="45" fontSize="7" fill="#3b82f6" fontFamily="monospace">✓ Ready</text>
            <text x="20" y="60" fontSize="7" fill="#06b6d4" fontFamily="monospace">localhost:3000</text>
          </g>

          {/* Coffee Mug */}
          <g transform="translate(480, 310)">
            {/* Mug Body */}
            <rect x="0" y="0" width="30" height="40" rx="4" fill="#1a1a2e" stroke="#8b5cf6" strokeWidth="1.5" />
            {/* Mug Handle */}
            <path
              d="M 30 10 Q 40 10, 40 20 Q 40 30, 30 30"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="1.5"
            />
            {/* Coffee Liquid */}
            <rect x="3" y="5" width="24" height="30" rx="2" fill="#3a2a1a" />
            {/* Coffee Surface */}
            <ellipse cx="15" cy="5" rx="12" ry="3" fill="#5a3a2a" />
            {/* Steam Animation */}
            <g opacity="0.6">
              <motion.path
                d="M 8 0 Q 10 -5, 12 0"
                stroke="#8b5cf6"
                strokeWidth="1.5"
                fill="none"
                filter="url(#softGlow)"
                initial={{ y: 0, opacity: 0.6 }}
                animate={{ y: [-10, -20, -30], opacity: [0.6, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.path
                d="M 15 0 Q 17 -5, 19 0"
                stroke="#3b82f6"
                strokeWidth="1.5"
                fill="none"
                filter="url(#softGlow)"
                initial={{ y: 0, opacity: 0.6 }}
                animate={{ y: [-10, -20, -30], opacity: [0.6, 0.4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
              />
              <motion.path
                d="M 22 0 Q 24 -5, 26 0"
                stroke="#8b5cf6"
                strokeWidth="1.5"
                fill="none"
                filter="url(#softGlow)"
                initial={{ y: 0, opacity: 0.6 }}
                animate={{ y: [-10, -20, -30], opacity: [0.6, 0.4, 0] }}
                transition={{ duration: 2.1, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
              />
            </g>
          </g>

          {/* Small Plant */}
          <g transform="translate(550, 290)">
            {/* Pot */}
            <rect x="0" y="20" width="20" height="15" rx="2" fill="#1a1a2e" stroke="#06b6d4" strokeWidth="1" />
            {/* Plant Stem */}
            <line x1="10" y1="20" x2="10" y2="5" stroke="#06b6d4" strokeWidth="2" />
            {/* Leaves */}
            <ellipse cx="5" cy="8" rx="4" ry="6" fill="#06b6d4" opacity="0.6" />
            <ellipse cx="15" cy="10" rx="4" ry="6" fill="#3b82f6" opacity="0.6" />
            <ellipse cx="10" cy="3" rx="3" ry="5" fill="#8b5cf6" opacity="0.6" />
          </g>
        </motion.g>

        {/* Floating Code Snippet Panel */}
        <g transform="translate(100, 400)">
          <motion.rect
            x="0"
            y="0"
            width="140"
            height="90"
            rx="8"
            fill="url(#monitorGradient)"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            opacity="0.7"
            filter="url(#softGlow)"
            initial={{ y: 0, x: 0 }}
            animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="10" y="20" fontSize="8" fill="#8b5cf6" fontFamily="monospace">GraphQL</text>
          <line x1="10" y1="25" x2="130" y2="25" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.5" />
          <text x="10" y="40" fontSize="7" fill="#a1a1aa" fontFamily="monospace">type Query {'{'}</text>
          <text x="10" y="55" fontSize="7" fill="#3b82f6" fontFamily="monospace">  users: [User]</text>
          <text x="10" y="70" fontSize="7" fill="#a1a1aa" fontFamily="monospace">{'}'}</text>
        </g>

        {/* Floating Chart Panel */}
        <g transform="translate(560, 400)">
          <motion.rect
            x="0"
            y="0"
            width="120"
            height="80"
            rx="8"
            fill="url(#monitorGradient)"
            stroke="#3b82f6"
            strokeWidth="1.5"
            opacity="0.7"
            filter="url(#softGlow)"
            initial={{ y: 0, x: 0 }}
            animate={{ y: [0, -6, 0], x: [0, -2, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <text x="10" y="20" fontSize="8" fill="#3b82f6" fontFamily="monospace">Performance</text>
          <line x1="10" y1="25" x2="110" y2="25" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
          {/* Mini chart */}
          <polyline
            points="20,60 35,50 50,45 65,40 80,35 95,30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  )
}

