'use client'

import { useState } from 'react'
import AnimateIn from './AnimateIn'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    // When you're ready, replace this with your Mailchimp API call
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section style={{
      background: 'var(--black)',
      borderTop: '1px solid var(--mid)',
      padding: '80px 24px'
    }}>
      <AnimateIn>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>

          <div style={{
            fontSize: '0.6rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--red)', marginBottom: '16px'
          }}>Stay in the loop</div>

          <h2 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(36px, 6vw, 64px)',
            letterSpacing: '0.05em',
            lineHeight: 1,
            marginBottom: '16px'
          }}>Drop alerts.<br />Nothing else.</h2>

          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.1em',
            color: 'rgba(240,237,230,0.4)', lineHeight: 1.8,
            marginBottom: '40px'
          }}>
            Be the first to know when new drops land.<br />No spam. No bullshit.
          </p>

          {status === 'success' ? (
            <div style={{
              padding: '20px',
              border: '1px solid var(--red)',
              fontSize: '0.65rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--red)'
            }}>✓ You're in. Watch your inbox.</div>
          ) : (
            <div style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  background: 'transparent',
                  border: `1px solid ${status === 'error' ? 'var(--red)' : 'var(--mid)'}`,
                  borderRight: 'none',
                  color: 'var(--white)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.05em',
                  fontFamily: 'Space Mono, monospace',
                  outline: 'none'
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  padding: '16px 28px',
                  background: 'var(--white)',
                  color: 'var(--black)',
                  border: 'none',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Mono, monospace',
                  whiteSpace: 'nowrap'
                }}
              >Notify Me</button>
            </div>
          )}

          {status === 'error' && (
            <p style={{ fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.15em', marginTop: '8px', textTransform: 'uppercase' }}>
              Enter a valid email
            </p>
          )}
        </div>
      </AnimateIn>
    </section>
  )
}