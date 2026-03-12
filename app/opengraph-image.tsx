import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt =
  'Jakir Hussain — AI Platform Engineer | Multi-Agent Systems, LangChain, LangGraph, RAG'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #0d0d0d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative gradient circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(33,150,243,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,230,180,0.1) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #2196f3, #00e6b4, #2196f3)',
            display: 'flex',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-1px',
            lineHeight: 1.1,
            display: 'flex',
          }}
        >
          Jakir Hussain
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: '#2196f3',
            marginTop: '16px',
            display: 'flex',
          }}
        >
          Senior Full-Stack & AI Platform Engineer
        </div>

        {/* Specialties */}
        <div
          style={{
            fontSize: 20,
            color: '#a0a0b0',
            marginTop: '24px',
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          Multi-Agent LLM Systems · LangChain · LangGraph · RAG · MCP · Node.js
        </div>

        {/* Tags row */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '36px',
            flexWrap: 'wrap',
          }}
        >
          {['Enterprise AI', 'Agentic Workflows', 'RAG Pipelines', 'Cloud-Native'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: '1px solid rgba(33,150,243,0.3)',
                  color: '#7cb8f0',
                  fontSize: 16,
                  fontWeight: 500,
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '80px',
            right: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 18, color: '#606070', display: 'flex' }}>
            iam-hussain.site
          </div>
          <div style={{ fontSize: 16, color: '#505060', display: 'flex' }}>
            Dubai · 8+ Years · Open to Opportunities
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
