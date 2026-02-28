'use client'

import { useCart } from '@/context/CartContext'

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, total, count, isOpen, setIsOpen } = useCart()

  return (
    <>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.7)', zIndex: 200, backdropFilter: 'blur(4px)'
        }} />
      )}

      <div style={{
        position: 'fixed', top: 0, right: 0,
        width: 'min(420px, 100vw)',
        height: '100vh',
        background: 'var(--black)',
        borderLeft: '1px solid var(--mid)',
        zIndex: 201,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex', flexDirection: 'column'
      }}>
        <div style={{
          padding: '24px', borderBottom: '1px solid var(--mid)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', letterSpacing: '0.1em' }}>Cart</span>
            {count > 0 && <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--red)', marginLeft: '12px' }}>{count} ITEM{count > 1 ? 'S' : ''}</span>}
          </div>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--white)', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', color: 'var(--mid)' }}>Empty</div>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(240,237,230,0.3)', marginTop: '12px', textTransform: 'uppercase' }}>Nothing here yet</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} style={{
                borderBottom: '1px solid var(--mid)', paddingBottom: '24px', marginBottom: '24px',
                display: 'flex', gap: '16px'
              }}>
                <div style={{
                  width: '80px', height: '100px', flexShrink: 0,
                  background: 'linear-gradient(145deg, #111 0%, #1c0003 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', color: 'var(--mid)'
                }}>{item.letter}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', letterSpacing: '0.05em' }}>{item.name}</div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--red)', marginTop: '4px', textTransform: 'uppercase' }}>Size: {item.size}</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', marginTop: '4px', color: 'rgba(240,237,230,0.6)' }}>${item.price.toFixed(2)}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--mid)', padding: '6px 12px' }}>
                      <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', fontSize: '1rem' }}>−</button>
                      <span style={{ fontSize: '0.65rem', minWidth: '16px', textAlign: 'center' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', fontSize: '1rem' }}>+</button>
                    </div>
                    <button onClick={() => removeItem(item.id, item.size)} style={{ background: 'none', border: 'none', color: 'rgba(240,237,230,0.3)', cursor: 'pointer', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Space Mono, monospace' }}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div style={{ padding: '24px', borderTop: '1px solid var(--mid)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.5)' }}>Total</span>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem' }}>${total.toFixed(2)}</span>
            </div>
            <a href="/cart" style={{
              display: 'block', textAlign: 'center', padding: '18px',
              background: 'var(--white)', color: 'var(--black)', textDecoration: 'none',
              fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase',
              fontFamily: 'Space Mono, monospace'
            }}>Checkout</a>
          </div>
        )}
      </div>
    </>
  )
}