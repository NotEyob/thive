'use client'

import AnimateIn from './AnimateIn'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid var(--mid)',
      padding: '60px 24px 40px'
    }}>
      <AnimateIn>
        <div className="footer-grid">
          <div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', letterSpacing: '0.3em' }}>THIVE</div>
            <p style={{
              fontSize: '0.8rem', letterSpacing: '0.1em', color: 'rgba(240,237,230,0.4)',
              marginTop: '12px', fontStyle: 'italic', lineHeight: 1.8
            }}>
              "Made for people<br />who dress smart<br />and think smart."
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
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/thive.mind/' },
                { label: 'TikTok', href: 'https://www.tiktok.com/@thi5etree' },
                { label: 'Twitter / X', href: '#' },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: '10px' }}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240,237,230,0.5)', textDecoration: 'none', fontSize: '0.65rem', letterSpacing: '0.1em' }}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateIn>

      <div style={{
        borderTop: '1px solid var(--mid)', paddingTop: '24px', marginTop: '40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'
      }}>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(240,237,230,0.25)', textTransform: 'uppercase' }}>© 2026 THIVE. All rights reserved.</p>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(240,237,230,0.25)', textTransform: 'uppercase' }}>Privacy Policy — Terms</p>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  )
}