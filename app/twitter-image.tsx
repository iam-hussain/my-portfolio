import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt =
  'Jakir Hussain — AI Platform Engineer | Multi-Agent Systems, LangChain, LangGraph, RAG'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a',
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
        {/* Decorative gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-60px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
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
            background: 'linear-gradient(90deg, #0f172a, #38bdf8, #0f172a)',
            display: 'flex',
          }}
        />

        {/* Monogram badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: '#1e293b',
              border: '2px solid #334155',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 800,
              color: '#38bdf8',
            }}
          >
            JH
          </div>
          <div style={{ fontSize: 16, color: '#64748b', display: 'flex' }}>
            iam-hussain.site
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-1.5px',
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
            color: '#38bdf8',
            marginTop: '14px',
            display: 'flex',
          }}
        >
          Senior Full-Stack & AI Platform Engineer
        </div>

        {/* Specialties */}
        <div
          style={{
            fontSize: 20,
            color: '#94a3b8',
            marginTop: '20px',
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
            marginTop: '32px',
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
                  border: '1px solid #1e293b',
                  background: '#1e293b',
                  color: '#38bdf8',
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
            bottom: '36px',
            left: '80px',
            right: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 16, color: '#475569', display: 'flex' }}>
            Dubai · 8+ Years · Open to Opportunities
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
