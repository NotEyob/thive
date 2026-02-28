'use client'

import AnimateIn from './AnimateIn'

const looks = [
  { label: 'Look 001 — Full Set', letter: '001' },
  { label: 'Look 002', letter: '002' },
  { label: 'Look 003', letter: '003' },
  { label: 'Campaign — Drop 001', letter: 'THRIVE IN DARKNESS' },
]

export default function Lookbook() {
  return (
    <section id="lookbook" style={{ padding: '80px 24px', background: 'var(--grey)' }}>
      <AnimateIn>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '40px', borderBottom: '1px solid var(--mid)', paddingBottom: '24px'
        }}>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '0.1em' }}>Lookbook</h2>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>SS '26</span>
        </div>
      </AnimateIn>

      <div className="lookbook-grid">
        {looks.map((look, i) => (
          <AnimateIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div className={i === 0 ? 'look-featured' : i === 3 ? 'look-wide' : 'look-item'} style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{
                width: '100%',
                minHeight: i === 0 ? '500px' : i === 3 ? '200px' : '260px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: i === 3 ? '2.5rem' : '6rem',
                letterSpacing: '-0.05em',
                color: 'rgba(255,255,255,0.04)',
                background: i === 0 ? 'linear-gradient(160deg, #111 0%, #1a0003 100%)'
                          : i === 1 ? 'linear-gradient(160deg, #0d0d0d 0%, #181818 100%)'
                          : i === 2 ? 'linear-gradient(160deg, #180003 0%, #0a0a0a 100%)'
                          : 'linear-gradient(160deg, #111 0%, #1c1c1c 100%)'
              }}>{look.letter}</div>
              <span style={{
                position: 'absolute', bottom: '16px', left: '20px',
                fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(240,237,230,0.5)'
              }}>{look.label}</span>
            </div>
          </AnimateIn>
        ))}
      </div>

      <style>{`
        .lookbook-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 3px;
        }
        .look-featured { grid-row: span 2; }
        .look-wide { grid-column: span 2; }
        @media (max-width: 768px) {
          .lookbook-grid { grid-template-columns: 1fr 1fr; }
          .look-featured { grid-row: span 1; grid-column: span 2; }
          .look-wide { grid-column: span 2; }
        }
      `}</style>
    </section>
  )
}