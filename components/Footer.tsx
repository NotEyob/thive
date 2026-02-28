'use client'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid var(--mid)',
      padding: '80px 48px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '40px'
    }}>
      <div>
        <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', letterSpacing: '0.3em' }}>THIVE</div>
        <p style={{
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          color: 'rgba(240,237,230,0.4)',
          marginTop: '12px',
          fontStyle: 'italic',
          lineHeight: 1.8
        }}>
          "Made for people<br />who think smart<br />and dress smart."
        </p>
      </div>

      <div>
        <h4 style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '20px' }}>Navigate</h4>
        <ul style={{ listStyle: 'none' }}>
          {['Shop', 'Lookbook', 'About', 'Size Guide', 'Contact'].map((item) => (
            <li key={item} style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: 'rgba(240,237,230,0.5)', textDecoration: 'none', fontSize: '0.65rem', letterSpacing: '0.1em' }}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '20px' }}>Follow</h4>
        <ul style={{ listStyle: 'none' }}>
          {['Instagram', 'TikTok', 'Twitter / X'].map((item) => (
            <li key={item} style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: 'rgba(240,237,230,0.5)', textDecoration: 'none', fontSize: '0.65rem', letterSpacing: '0.1em' }}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        gridColumn: 'span 3',
        borderTop: '1px solid var(--mid)',
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '40px'
      }}>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(240,237,230,0.25)', textTransform: 'uppercase' }}>© 2026 THIVE. All rights reserved.</p>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(240,237,230,0.25)', textTransform: 'uppercase' }}>Privacy Policy — Terms</p>
      </div>
    </footer>
  )
}