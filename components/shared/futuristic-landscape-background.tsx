'use client'

import { motion } from 'framer-motion'

export function FuturisticLandscapeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Main SVG Illustration */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient Sky - Dawn/Sunset */}
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="1" />
            <stop offset="40%" stopColor="#7B68EE" stopOpacity="1" />
            <stop offset="70%" stopColor="#9370DB" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF69B4" stopOpacity="0.8" />
          </linearGradient>

          {/* Mountain Gradient */}
          <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5B8FC7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4A6FA5" stopOpacity="0.7" />
          </linearGradient>

          {/* Hill Gradient */}
          <linearGradient id="hillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6BA3D1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#5B8FC7" stopOpacity="0.6" />
          </linearGradient>

          {/* Bubble Gradient */}
          <radialGradient id="bubbleGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#E0E7FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C7D2FE" stopOpacity="0.3" />
          </radialGradient>

          {/* Glow Filter for Tech Elements */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shadow Filter */}
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="2" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sky Background */}
        <rect width="1920" height="1080" fill="url(#skyGradient)" />

        {/* Clouds - Top Layer */}
        <g opacity="0.6">
          <ellipse cx="200" cy="150" rx="120" ry="40" fill="#FFFFFF" opacity="0.4" />
          <ellipse cx="400" cy="120" rx="100" ry="35" fill="#FFFFFF" opacity="0.3" />
          <ellipse cx="600" cy="180" rx="140" ry="45" fill="#FFFFFF" opacity="0.35" />
          <ellipse cx="1500" cy="140" rx="130" ry="42" fill="#FFFFFF" opacity="0.4" />
          <ellipse cx="1700" cy="110" rx="110" ry="38" fill="#FFFFFF" opacity="0.3" />
        </g>

        {/* Distant Mountains - Left Side */}
        <g opacity="0.7">
          <path
            d="M 0,600 L 200,450 L 400,500 L 600,420 L 800,480 L 0,600 Z"
            fill="url(#mountainGradient)"
            filter="url(#softShadow)"
          />
          <path
            d="M 200,450 L 350,380 L 500,420 L 650,360 L 800,400 L 200,450 Z"
            fill="url(#mountainGradient)"
            opacity="0.8"
            filter="url(#softShadow)"
          />
        </g>

        {/* Distant Mountains - Right Side */}
        <g opacity="0.6">
          <path
            d="M 1120,600 L 1320,480 L 1520,520 L 1720,460 L 1920,500 L 1920,600 L 1120,600 Z"
            fill="url(#mountainGradient)"
            filter="url(#softShadow)"
          />
          <path
            d="M 1320,480 L 1470,400 L 1620,440 L 1770,380 L 1920,420 L 1320,480 Z"
            fill="url(#mountainGradient)"
            opacity="0.8"
            filter="url(#softShadow)"
          />
        </g>

        {/* Rolling Hills - Foreground */}
        <g>
          {/* Left Hill */}
          <path
            d="M 0,800 Q 200,750 400,780 T 800,800 L 800,1080 L 0,1080 Z"
            fill="url(#hillGradient)"
            filter="url(#softShadow)"
          />
          {/* Center Hill (lower) */}
          <path
            d="M 800,850 Q 960,800 1120,820 T 1440,850 L 1440,1080 L 800,1080 Z"
            fill="url(#hillGradient)"
            opacity="0.9"
            filter="url(#softShadow)"
          />
          {/* Right Hill */}
          <path
            d="M 1440,820 Q 1600,780 1760,800 T 1920,820 L 1920,1080 L 1440,1080 Z"
            fill="url(#hillGradient)"
            filter="url(#softShadow)"
          />
        </g>

        {/* Trees - Left Side */}
        <g opacity="0.8">
          {/* Tree 1 */}
          <rect x="150" y="700" width="25" height="80" fill="#4A6FA5" rx="3" />
          <ellipse cx="162.5" cy="700" rx="35" ry="30" fill="#5B8FC7" />
          {/* Tree 2 */}
          <rect x="300" y="720" width="22" height="70" fill="#4A6FA5" rx="3" />
          <ellipse cx="311" cy="720" rx="32" ry="28" fill="#5B8FC7" />
          {/* Tree 3 */}
          <rect x="500" y="710" width="28" height="85" fill="#4A6FA5" rx="3" />
          <ellipse cx="514" cy="710" rx="38" ry="32" fill="#5B8FC7" />
        </g>

        {/* Trees - Right Side */}
        <g opacity="0.8">
          {/* Tree 1 */}
          <rect x="1600" y="730" width="24" height="75" fill="#4A6FA5" rx="3" />
          <ellipse cx="1612" cy="730" rx="34" ry="29" fill="#5B8FC7" />
          {/* Tree 2 */}
          <rect x="1750" y="720" width="26" height="80" fill="#4A6FA5" rx="3" />
          <ellipse cx="1763" cy="720" rx="36" ry="31" fill="#5B8FC7" />
        </g>

        {/* Subtle Tech Circuits - Left */}
        <g opacity="0.3" filter="url(#glow)">
          <path
            d="M 100,500 L 120,500 L 130,490 L 150,490 L 160,500 L 180,500"
            stroke="#80DEEA"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,4"
          />
          <circle cx="120" cy="500" r="3" fill="#80DEEA" />
          <circle cx="160" cy="500" r="3" fill="#80DEEA" />
        </g>

        {/* Subtle Tech Circuits - Right */}
        <g opacity="0.3" filter="url(#glow)">
          <path
            d="M 1800,520 L 1820,520 L 1830,510 L 1850,510 L 1860,520 L 1880,520"
            stroke="#80DEEA"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,4"
          />
          <circle cx="1820" cy="520" r="3" fill="#80DEEA" />
          <circle cx="1860" cy="520" r="3" fill="#80DEEA" />
        </g>

        {/* Abstract Data Streams */}
        <g opacity="0.25">
          <path
            d="M 400,400 Q 500,350 600,400 T 800,400"
            stroke="#9370DB"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8,8"
          />
          <path
            d="M 1200,450 Q 1300,400 1400,450 T 1600,450"
            stroke="#FF69B4"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8,8"
          />
        </g>

        {/* Floating UI Panels - Abstract */}
        <g opacity="0.2">
          <rect x="250" y="350" width="60" height="40" rx="8" fill="#E0E7FF" />
          <rect x="260" y="360" width="15" height="10" rx="2" fill="#9370DB" />
          <rect x="280" y="360" width="15" height="10" rx="2" fill="#9370DB" />
          <rect x="300" y="360" width="15" height="10" rx="2" fill="#9370DB" />
        </g>

        <g opacity="0.2">
          <rect x="1650" y="380" width="60" height="40" rx="8" fill="#E0E7FF" />
          <rect x="1660" y="390" width="15" height="10" rx="2" fill="#9370DB" />
          <rect x="1680" y="390" width="15" height="10" rx="2" fill="#9370DB" />
          <rect x="1700" y="390" width="15" height="10" rx="2" fill="#9370DB" />
        </g>
      </svg>

      {/* Floating Bubbles with Icons - Animated */}
      <FloatingBubble
        x="15%"
        y="25%"
        size={120}
        icon="</>"
        delay={0}
        duration={8}
      />
      <FloatingBubble
        x="85%"
        y="30%"
        size={100}
        icon="API"
        delay={1.5}
        duration={10}
      />
      <FloatingBubble
        x="25%"
        y="45%"
        size={90}
        icon="☁"
        delay={3}
        duration={9}
      />
      <FloatingBubble
        x="75%"
        y="50%"
        size={110}
        icon="JS"
        delay={2}
        duration={11}
      />
      <FloatingBubble
        x="50%"
        y="35%"
        size={80}
        icon="⚡"
        delay={4}
        duration={7}
      />
    </div>
  )
}

interface FloatingBubbleProps {
  x: string
  y: string
  size: number
  icon: string
  delay: number
  duration: number
}

function FloatingBubble({ x, y, size, icon, delay, duration }: FloatingBubbleProps) {
  return (
    <motion.div
      className="absolute"
      style={{
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.7, 0.9, 0.7],
        scale: [1, 1.1, 1],
        y: [0, -20, 0],
        x: [0, Math.random() * 30 - 15, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {/* Bubble with gradient */}
      <div
        className="relative w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(224,231,255,0.6), rgba(199,210,254,0.3))',
          boxShadow: `
            inset -10px -10px 20px rgba(255,255,255,0.5),
            inset 10px 10px 20px rgba(199,210,254,0.3),
            0 8px 32px rgba(147,112,219,0.2)
          `,
          border: '2px solid rgba(255,255,255,0.4)',
        }}
      >
        {/* Icon inside bubble */}
        <div
          className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
          style={{
            color: '#7B68EE',
            textShadow: '0 2px 4px rgba(255,255,255,0.8)',
          }}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  )
}

