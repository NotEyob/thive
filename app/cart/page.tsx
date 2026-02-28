'use client'

import Navbar from '@/components/Navbar'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, count } = useCart()

  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--white)' }}>
      <Navbar />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 48px 80px' }}>

        {/* Header */}
        <div style={{
          borderBottom: '1px solid var(--mid)',
          paddingBottom: '24px',
          marginBottom: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '0.05em' }}>Your Cart</h1>
          {count > 0 && <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{count} Item{count > 1 ? 's' : ''}</span>}
        </div>

        {items.length === 0 ? (
          <div style={{ textAlign: 'center', paddingTop: '120px' }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '6rem', color: 'var(--mid)', lineHeight: 1 }}>Empty</div>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)', marginTop: '16px' }}>Nothing in your cart yet</p>
            <a href="/#shop" style={{
              display: 'inline-block',
              marginTop: '40px',
              padding: '14px 40px',
              border: '1px solid var(--white)',
              color: 'var(--white)',
              textDecoration: 'none',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase'
            }}>Back to Shop</a>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '80px', alignItems: 'start' }}>

            {/* Items */}
            <div>
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '32px',
                  borderBottom: '1px solid var(--mid)',
                  paddingBottom: '40px',
                  marginBottom: '40px'
                }}>
                  {/* Image placeholder */}
                  <div style={{
                    background: 'linear-gradient(145deg, #111 0%, #1c0003 100%)',
                    aspectRatio: '3/4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '3rem',
                    color: 'var(--mid)'
                  }}>{item.letter}</div>

                  {/* Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.6rem', letterSpacing: '0.05em' }}>{item.name}</div>
                      <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--red)', marginTop: '6px', textTransform: 'uppercase' }}>Size: {item.size}</div>
                      <div style={{ fontSize: '0.8rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', marginTop: '8px' }}>${item.price.toFixed(2)}</div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
                      {/* Quantity */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid var(--mid)', padding: '10px 16px' }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1 }}
                        >−</button>
                        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1 }}
                        >+</button>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.1em' }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          style={{ background: 'none', border: 'none', color: 'rgba(240,237,230,0.3)', cursor: 'pointer', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Space Mono, monospace' }}
                        >Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <a href="/#shop" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)', textDecoration: 'none' }}>
                ← Continue Shopping
              </a>
            </div>

            {/* Summary */}
            <div style={{ border: '1px solid var(--mid)', padding: '40px', position: 'sticky', top: '120px' }}>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', letterSpacing: '0.1em', marginBottom: '32px' }}>Order Summary</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', letterSpacing: '0.1em' }}>
                    <span style={{ color: 'rgba(240,237,230,0.5)' }}>{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--mid)', paddingTop: '24px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.5)' }}>Subtotal</span>
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', letterSpacing: '0.1em' }}>${total.toFixed(2)}</span>
                </div>
                <div style={{ fontSize: '0.55rem', color: 'rgba(240,237,230,0.3)', letterSpacing: '0.1em', marginTop: '8px' }}>
                  Shipping calculated at checkout
                </div>
              </div>

              <button style={{
                width: '100%',
                padding: '20px',
                background: 'var(--white)',
                color: 'var(--black)',
                border: 'none',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Mono, monospace',
                marginBottom: '12px'
              }}>Proceed to Checkout</button>

              <button
                onClick={() => window.history.back()}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'transparent',
                  color: 'rgba(240,237,230,0.4)',
                  border: '1px solid var(--mid)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Mono, monospace'
                }}>Continue Shopping</button>
            </div>

          </div>
        )}
      </div>
    </main>
  )
}