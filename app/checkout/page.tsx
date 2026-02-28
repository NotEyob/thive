'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Checkout() {
  const { items, total } = useCart()
  const [step, setStep] = useState<'info' | 'payment'>('info')
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '',
    address: '', city: '', zip: '', country: '',
    card: '', expiry: '', cvv: ''
  })

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const infoComplete = form.email && form.firstName && form.lastName && form.address && form.city && form.zip && form.country

  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--white)' }}>
      

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '140px 48px 80px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '80px', alignItems: 'start' }}>

        {/* LEFT — Form */}
        <div>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '0.05em', marginBottom: '48px' }}>Checkout</h1>

          {/* Steps indicator */}
          <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', borderBottom: '1px solid var(--mid)', paddingBottom: '24px' }}>
            {['info', 'payment'].map((s) => (
              <span key={s} style={{
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: step === s ? 'var(--white)' : 'rgba(240,237,230,0.3)',
                borderBottom: step === s ? '1px solid var(--red)' : 'none',
                paddingBottom: '4px',
                cursor: s === 'payment' && infoComplete ? 'pointer' : 'default'
              }} onClick={() => { if (s === 'payment' && infoComplete) setStep('payment') }}>
                {s === 'info' ? '01 — Information' : '02 — Payment'}
              </span>
            ))}
          </div>

          {step === 'info' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Field label="Email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <Field label="First Name" name="firstName" value={form.firstName} onChange={handle} placeholder="John" />
                <Field label="Last Name" name="lastName" value={form.lastName} onChange={handle} placeholder="Doe" />
              </div>

              <Field label="Address" name="address" value={form.address} onChange={handle} placeholder="123 Street Ave" />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                <Field label="City" name="city" value={form.city} onChange={handle} placeholder="New York" />
                <Field label="ZIP" name="zip" value={form.zip} onChange={handle} placeholder="10001" />
                <Field label="Country" name="country" value={form.country} onChange={handle} placeholder="US" />
              </div>

              <button
                onClick={() => { if (infoComplete) setStep('payment') }}
                disabled={!infoComplete}
                style={{
                  marginTop: '16px',
                  padding: '20px',
                  background: infoComplete ? 'var(--white)' : 'transparent',
                  color: infoComplete ? 'var(--black)' : 'rgba(240,237,230,0.2)',
                  border: `1px solid ${infoComplete ? 'var(--white)' : 'var(--mid)'}`,
                  fontSize: '0.7rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  cursor: infoComplete ? 'pointer' : 'not-allowed',
                  fontFamily: 'Space Mono, monospace',
                  transition: 'all 0.2s'
                }}
              >Continue to Payment</button>
            </div>
          )}

          {step === 'payment' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Field label="Card Number" name="card" value={form.card} onChange={handle} placeholder="1234 5678 9012 3456" />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <Field label="Expiry" name="expiry" value={form.expiry} onChange={handle} placeholder="MM/YY" />
                <Field label="CVV" name="cvv" value={form.cvv} onChange={handle} placeholder="123" />
              </div>

              <div style={{ marginTop: '8px', padding: '16px', border: '1px solid var(--mid)', fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(240,237,230,0.3)', textTransform: 'uppercase' }}>
                🔒 Payments processed securely via Shopify (coming soon)
              </div>

              <button
                style={{
                  marginTop: '16px',
                  padding: '20px',
                  background: 'var(--red)',
                  color: 'var(--white)',
                  border: 'none',
                  fontSize: '0.7rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Mono, monospace'
                }}
              >Place Order — ${total.toFixed(2)}</button>

              <button
                onClick={() => setStep('info')}
                style={{
                  padding: '16px',
                  background: 'transparent',
                  color: 'rgba(240,237,230,0.4)',
                  border: '1px solid var(--mid)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Mono, monospace'
                }}
              >← Back to Information</button>
            </div>
          )}
        </div>

        {/* RIGHT — Order summary */}
        <div style={{ border: '1px solid var(--mid)', padding: '40px', position: 'sticky', top: '120px' }}>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', letterSpacing: '0.1em', marginBottom: '32px' }}>Order Summary</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{
                    width: '48px', height: '60px',
                    background: 'linear-gradient(145deg, #111 0%, #1c0003 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', color: 'var(--mid)',
                    flexShrink: 0, position: 'relative'
                  }}>
                    {item.letter}
                    <div style={{
                      position: 'absolute', top: '-8px', right: '-8px',
                      background: 'var(--mid)', borderRadius: '50%',
                      width: '18px', height: '18px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.5rem'
                    }}>{item.quantity}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>{item.name}</div>
                    <div style={{ fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.1em', marginTop: '2px' }}>Size: {item.size}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--mid)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(240,237,230,0.5)' }}>
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(240,237,230,0.5)' }}>
              <span>Shipping</span>
              <span>Calculated at next step</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--mid)', paddingTop: '16px', marginTop: '4px' }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.1em' }}>Total</span>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem', letterSpacing: '0.1em' }}>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Field({ label, name, value, onChange, placeholder }: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.4)', marginBottom: '8px' }}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '14px 16px',
          background: 'transparent',
          border: '1px solid var(--mid)',
          color: 'var(--white)',
          fontSize: '0.7rem',
          letterSpacing: '0.05em',
          fontFamily: 'Space Mono, monospace',
          outline: 'none'
        }}
      />
    </div>
  )
}