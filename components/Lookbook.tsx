'use client'

const looks = [
  { label: 'Look 001 — Full Set', letter: '001', span: true },
  { label: 'Look 002', letter: '002', span: false },
  { label: 'Look 003', letter: '003', span: false },
  { label: 'Campaign — Drop 001', letter: 'THRIVE IN DARKNESS', span: false, wide: true },
]

export default function Lookbook() {
  return (
    <section id="lookbook" style={{ padding: '120px 48px', background: 'var(--grey)' }}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '64px',
        borderBottom: '1px solid var(--mid)',
        paddingBottom: '24px'
      }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(40px, 6vw, 80px)',
          letterSpacing: '0.1em'
        }}>Lookbook</h2>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>
          SS '26
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '3px'
      }}>
        {looks.map((look, i) => (
          <div key={i} style={{
            position: 'relative',
            overflow: 'hidden',
            gridRow: i === 0 ? 'span 2' : 'unset',
            gridColumn: look.wide ? 'span 2' : 'unset'
          }}>
            <div style={{
              width: '100%',
              minHeight: i === 0 ? '600px' : look.wide ? '220px' : '280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: look.wide ? '3rem' : '6rem',
              letterSpacing: '-0.05em',
              color: 'rgba(255,255,255,0.04)',
              background: i === 0 ? 'linear-gradient(160deg, #111 0%, #1a0003 100%)'
                        : i === 1 ? 'linear-gradient(160deg, #0d0d0d 0%, #181818 100%)'
                        : i === 2 ? 'linear-gradient(160deg, #180003 0%, #0a0a0a 100%)'
                        : 'linear-gradient(160deg, #111 0%, #1c1c1c 100%)'
            }}>
              {look.letter}
            </div>
            <span style={{
              position: 'absolute',
              bottom: '16px', left: '20px',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(240,237,230,0.5)'
            }}>{look.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}