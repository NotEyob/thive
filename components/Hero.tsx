'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 24px 64px',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--black)'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 40%, #1a0005 0%, var(--black) 65%)'
      }} />
      <div style={{
        position: 'absolute', top: 0, right: '60px',
        width: '2px', height: '100%',
        background: 'var(--red)', transform: 'rotate(12deg)', opacity: 0.6
      }} />

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(80px, 22vw, 260px)',
          lineHeight: 0.85,
          letterSpacing: '-0.02em',
          position: 'relative', zIndex: 2
        }}
      >
        THIVE
        <span style={{
          display: 'block', color: 'transparent',
          WebkitTextStroke: '1px var(--white)',
          opacity: 0.15,
          fontSize: 'clamp(60px, 18vw, 220px)',
          marginLeft: '40px'
        }}>THIVE</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column',
          gap: '16px', marginTop: '32px'
        }}
      >
        <p style={{
          fontSize: '0.65rem', letterSpacing: '0.25em',
          textTransform: 'uppercase', color: 'var(--red)'
        }}>— New Drop 001 — Available Now</p>
        <a href="#shop" style={{
          display: 'inline-block', padding: '14px 40px',
          border: '1px solid var(--white)', color: 'var(--white)',
          textDecoration: 'none', fontSize: '0.65rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          alignSelf: 'flex-start'
        }}>Shop Now</a>
      </motion.div>
    </section>
  )
}