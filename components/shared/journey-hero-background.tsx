'use client'

import { motion } from 'framer-motion'

export function JourneyHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Night Sky Gradient */}
          <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Mountain Gradients */}
          <linearGradient id="mountainDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          
          <linearGradient id="mountainLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Water Gradient */}
          <linearGradient id="water" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.4" />
          </linearGradient>

          {/* Path Glow */}
          <filter id="pathGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sky Background */}
        <rect width="1920" height="1080" fill="url(#nightSky)" />

        {/* Stars - Static & Twinkling */}
        <g fill="#FFF" opacity="0.8">
          {[...Array(40)].map((_, i) => (
            <circle
              key={`star-${i}`}
              cx={Math.random() * 1920}
              cy={Math.random() * 600}
              r={Math.random() * 1.5 + 0.5}
              opacity={Math.random() * 0.7 + 0.3}
            >
               {Math.random() > 0.7 && (
                <animate
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur={`${Math.random() * 3 + 2}s`}
                  repeatCount="indefinite"
                />
               )}
            </circle>
          ))}
        </g>

        {/* Moon */}
        <path
          d="M 900,100 A 40,40 0 1,1 900,180 A 30,30 0 1,0 900,100 Z"
          fill="#F8FAFC"
          opacity="0.9"
          transform="rotate(-15 900 140)"
        />

        {/* Back Mountains (Silhouette) */}
        <path
          d="M 0,1080 L 0,600 L 300,450 L 600,700 L 900,500 L 1200,650 L 1500,400 L 1920,600 L 1920,1080 Z"
          fill="url(#mountainDark)"
          opacity="0.6"
        />

        {/* Middle Mountains */}
        <path
          d="M -100,1080 L 200,550 L 500,850 L 800,600 L 1100,900 L 1400,650 L 1700,950 L 2020,700 L 2020,1080 Z"
          fill="url(#mountainLight)"
          opacity="0.8"
        />

        {/* Main Foreground Mountain (Peak) */}
        <path
          d="M 600,1080 L 960,300 L 1320,1080 Z"
          fill="url(#mountainDark)"
        />
        {/* Snow Cap */}
        <path
          d="M 960,300 L 1030,450 L 990,420 L 960,460 L 930,420 L 890,450 Z"
          fill="#F1F5F9"
          opacity="0.9"
        />

        {/* Waterfall */}
        <rect x="1150" y="800" width="40" height="280" fill="url(#water)" />
        <ellipse cx="1170" cy="1050" rx="100" ry="30" fill="url(#water)" />
        {/* Waterfall foam animation */}
        <path
          d="M 1150,1050 Q 1170,1040 1190,1050"
          stroke="#FFF"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        >
          <animate attributeName="d" values="M 1150,1050 Q 1170,1040 1190,1050;M 1150,1060 Q 1170,1070 1190,1060;M 1150,1050 Q 1170,1040 1190,1050" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Zig-Zag Path */}
        <path
          d="M 1100,1000 L 950,850 L 1050,700 L 900,550 L 960,300"
          stroke="#F59E0B"
          strokeWidth="4"
          fill="none"
          strokeDasharray="10,10"
          filter="url(#pathGlow)"
          opacity="0.8"
        />

        {/* Checkpoints/Nodes */}
        {[
            { x: 1100, y: 1000 },
            { x: 950, y: 850 },
            { x: 1050, y: 700 },
            { x: 900, y: 550 },
        ].map((point, i) => (
            <circle key={i} cx={point.x} cy={point.y} r="6" fill="#F59E0B" stroke="#FFF" strokeWidth="2">
                <animate attributeName="r" values="6;8;6" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
        ))}

        {/* Flag at Peak */}
        <g transform="translate(960, 300)">
            <line x1="0" y1="0" x2="0" y2="-40" stroke="#CBD5E1" strokeWidth="3" />
            <path d="M 0,-40 L 25,-30 L 0,-20 Z" fill="#EF4444" />
        </g>

        {/* Campsite - Tent */}
        <g transform="translate(1250, 980)">
             <path d="M 0,0 L 30,-50 L 60,0 Z" fill="#F97316" />
             <path d="M 30,-50 L 30,0" stroke="#7C2D12" strokeWidth="2" />
        </g>

        {/* Campfire */}
        <g transform="translate(1330, 1000)">
             <circle cx="0" cy="0" r="5" fill="#EF4444">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="0.5s" repeatCount="indefinite" />
             </circle>
             <path d="M -5,5 L 5,-5 M -5,-5 L 5,5" stroke="#78350F" strokeWidth="2" />
        </g>

        {/* Tiny Hikers */}
        <g transform="translate(950, 850)">
             <circle cx="0" cy="-10" r="3" fill="#E2E8F0" />
             <path d="M 0,-10 L 0,0 M -3,-5 L 3,-5 M -2,0 L -4,5 M 2,0 L 4,5" stroke="#E2E8F0" strokeWidth="2" />
        </g>
        <g transform="translate(900, 550)">
             <circle cx="0" cy="-10" r="3" fill="#E2E8F0" />
             <path d="M 0,-10 L 0,0 M -3,-5 L 3,-5 M -2,0 L -4,5 M 2,0 L 4,5" stroke="#E2E8F0" strokeWidth="2" />
        </g>

        {/* Tech Easter Eggs - Floating UI Panels/Code */}
        <g opacity="0.4">
            {/* Floating Bracket */}
            <text x="1020" y="650" fill="#38BDF8" fontSize="24" fontFamily="monospace" fontWeight="bold" transform="rotate(10 1020 650)">&lt;/&gt;</text>
            
            {/* Floating Chip */}
            <rect x="850" y="450" width="20" height="20" rx="4" fill="none" stroke="#A78BFA" strokeWidth="2" transform="rotate(-15 860 460)" />
            <rect x="855" y="455" width="10" height="10" fill="#A78BFA" transform="rotate(-15 860 460)" />

            {/* Floating Cloud Icon */}
             <path d="M 1150,600 Q 1160,580 1180,590 Q 1200,580 1210,600 Q 1220,610 1200,620 L 1160,620 Q 1140,610 1150,600" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.6" />
        </g>
      </svg>
    </div>
  )
}

