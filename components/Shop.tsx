'use client'

const products = [
  { name: 'Oversized Tee — Black', price: '$55.00', tag: 'New', letter: 'T', href: null },
  { name: 'Heavyweight Hoodie', price: '$110.00', tag: null, letter: 'H', href: '/shop/hoodie' },
  { name: 'Cargo Pants', price: '$130.00', tag: 'Low Stock', letter: 'C', href: null },
  { name: 'Coach Jacket', price: '$180.00', tag: null, letter: 'J', href: null },
  { name: 'Logo Cap', price: '$45.00', tag: 'Sold Out', letter: 'B', href: null },
]

export default function Shop() {
  return (
    <section id="shop" style={{ padding: '80px 24px', background: 'var(--black)' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        marginBottom: '40px', borderBottom: '1px solid var(--mid)', paddingBottom: '24px'
      }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '0.1em' }}>Shop</h2>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>Drop 001 — 5 Pieces</span>
      </div>

      <div className="shop-grid">
        {products.map((p, i) => (
          <a key={i} href={p.href || '#'} className={i === 0 ? 'card-featured' : 'card'} style={{
            textDecoration: 'none', color: 'inherit',
            position: 'relative', overflow: 'hidden',
            background: 'var(--grey)', cursor: 'pointer', display: 'block'
          }}>
            <div style={{
              width: '100%',
              minHeight: i === 0 ? '400px' : '260px',
              height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Bebas Neue, sans-serif', fontSize: '8rem', color: 'var(--mid)',
              background: i === 0 ? 'linear-gradient(145deg, #111 0%, #1c0003 100%)'
                        : i === 1 ? 'linear-gradient(145deg, #0d0d0d 0%, #1a1a1a 100%)'
                        : i === 2 ? 'linear-gradient(145deg, #150000 0%, #2a0005 100%)'
                        : i === 3 ? 'linear-gradient(145deg, #0a0a0a 0%, #161616 100%)'
                        : 'linear-gradient(145deg, #0f0f0f 0%, #1e0003 100%)'
            }}>{p.letter}</div>
            {p.tag && (
              <div style={{
                position: 'absolute', top: '16px', right: '16px',
                fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                border: '1px solid var(--red)', color: 'var(--red)', padding: '4px 10px'
              }}>{p.tag}</div>
            )}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px' }}>
              <span style={{ display: 'block', fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.1em' }}>{p.name}</span>
              <div style={{ fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginTop: '4px' }}>{p.price}</div>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .card-featured { grid-row: span 2; }
        @media (max-width: 768px) {
          .shop-grid { grid-template-columns: 1fr 1fr; }
          .card-featured { grid-row: span 1; grid-column: span 2; }
        }
      `}</style>
    </section>
  )
}