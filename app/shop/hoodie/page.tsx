'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export default function Hoodie() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAdd = () => {
    if (!selectedSize) return
    addItem({
      id: 'heavyweight-hoodie',
      name: 'Heavyweight Hoodie',
      price: 110,
      size: selectedSize,
      quantity: 1,
      letter: 'H'
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--white)' }}>
      

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
        paddingTop: '80px'
      }}>

        {/* IMAGE SIDE */}
        <div style={{
          background: 'linear-gradient(145deg, #111 0%, #1c0003 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          position: 'sticky',
          top: 0
        }}>
          <span style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '20rem',
            color: 'rgba(255,255,255,0.04)',
            letterSpacing: '-0.05em',
            userSelect: 'none'
          }}>H</span>
          <div style={{
            position: 'absolute',
            bottom: '32px',
            left: '32px',
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(240,237,230,0.3)'
          }}>Photo Coming Soon</div>
        </div>

        {/* INFO SIDE */}
        <div style={{ padding: '120px 64px 80px', display: 'flex', flexDirection: 'column', gap: '40px' }}>

          {/* Breadcrumb */}
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)' }}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
            {' — '}
            <a href="/#shop" style={{ color: 'inherit', textDecoration: 'none' }}>Shop</a>
            {' — '}
            <span style={{ color: 'var(--white)' }}>Heavyweight Hoodie</span>
          </div>

          {/* Title */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px' }}>Drop 001</div>
            <h1 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(48px, 6vw, 80px)',
              letterSpacing: '0.05em',
              lineHeight: 1
            }}>Heavyweight<br />Hoodie</h1>
            <div style={{ fontSize: '1.5rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', marginTop: '16px', color: 'var(--red)' }}>$110.00</div>
          </div>

          <div style={{ borderTop: '1px solid var(--mid)' }} />

          {/* Description */}
          <p style={{ fontSize: '0.7rem', lineHeight: 2, color: 'rgba(240,237,230,0.6)', letterSpacing: '0.05em' }}>
            400GSM French terry. Oversized fit. Double-stitched seams built to last.
            Dropped shoulders, ribbed cuffs, kangaroo pocket.
            This isn't fast fashion — it's armor.
          </p>

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              ['Material', '100% Heavyweight Cotton'],
              ['Weight', '400GSM'],
              ['Fit', 'Oversized'],
              ['Color', 'Washed Black'],
            ].map(([key, val]) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid var(--mid)', paddingBottom: '10px' }}>
                <span style={{ color: 'rgba(240,237,230,0.4)' }}>{key}</span>
                <span>{val}</span>
              </div>
            ))}
          </div>

          {/* Size selector */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px', color: 'rgba(240,237,230,0.4)' }}>
              Select Size {selectedSize && <span style={{ color: 'var(--white)' }}>— {selectedSize}</span>}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: '12px 20px',
                    border: `1px solid ${selectedSize === size ? 'var(--white)' : 'var(--mid)'}`,
                    background: selectedSize === size ? 'var(--white)' : 'transparent',
                    color: selectedSize === size ? 'var(--black)' : 'var(--white)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'Space Mono, monospace'
                  }}
                >{size}</button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            disabled={!selectedSize}
            style={{
              padding: '20px',
              background: selectedSize ? 'var(--white)' : 'transparent',
              color: selectedSize ? 'var(--black)' : 'rgba(240,237,230,0.2)',
              border: `1px solid ${selectedSize ? 'var(--white)' : 'var(--mid)'}`,
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              cursor: selectedSize ? 'pointer' : 'not-allowed',
              transition: 'all 0.3s',
              fontFamily: 'Space Mono, monospace'
            }}
          >
            {!selectedSize ? 'Select a Size' : added ? '✓ Added to Cart' : 'Add to Cart'}
          </button>

          <a href="/#shop" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)', textDecoration: 'none' }}>
            ← Back to Shop
          </a>

        </div>
      </div>
    </main>
  )
}