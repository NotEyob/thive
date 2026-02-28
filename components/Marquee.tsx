'use client'

export default function Marquee() {
  const items = ['THIVE', '// DROP 001 //', 'STREETWEAR', '// THRIVE IN DARKNESS //', 'LIMITED EDITION', '// EST. 2025 //', 'NO RULES', '// NEW DROP //']

  return (
    <div style={{
      overflow: 'hidden',
      background: 'var(--red)',
      padding: '12px 0',
      borderTop: '1px solid #a00014',
      borderBottom: '1px solid #a00014'
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'marquee 18s linear infinite'
      }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1rem',
            letterSpacing: '0.3em',
            color: 'var(--black)',
            padding: '0 48px',
            whiteSpace: 'nowrap'
          }}>{item}</span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}