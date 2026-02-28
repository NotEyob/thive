'use client'

export default function Hero() {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 48px 64px',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--black)'
    }}>

      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 70% 40%, #1a0005 0%, var(--black) 65%)'
      }} />

      {/* Red slash */}
      <div style={{
        position: 'absolute',
        top: 0, right: '120px',
        width: '2px',
        height: '100%',
        background: 'var(--red)',
        transform: 'rotate(12deg)',
        opacity: 0.6
      }} />

      {/* Title */}
      <h1 style={{
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: 'clamp(100px, 22vw, 260px)',
        lineHeight: 0.85,
        letterSpacing: '-0.02em',
        position: 'relative',
        zIndex: 2
      }}>
        THIVE
        <span style={{
          display: 'block',
          color: 'transparent',
          WebkitTextStroke: '1px var(--white)',
          opacity: 0.15,
          fontSize: 'clamp(80px, 18vw, 220px)',
          marginLeft: '80px'
        }}>THIVE</span>
      </h1>

      {/* Bottom row */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: '32px'
      }}>
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--red)'
        }}>— New Drop 001 — Available Now</p>

        <a href="#shop" style={{
          display: 'inline-block',
          padding: '14px 40px',
          border: '1px solid var(--white)',
          color: 'var(--white)',
          textDecoration: 'none',
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase'
        }}>Shop Now</a>
      </div>

    </section>
  )
}