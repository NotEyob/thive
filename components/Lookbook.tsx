'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const looks = [
  { label: 'Look 001 — Full Set', letter: '001' },
  { label: 'Look 002', letter: '002' },
  { label: 'Look 003', letter: '003' },
  { label: 'Campaign — Drop 001', letter: 'THRIVE IN DARKNESS' },
]

function LookItem({ look, i }: { look: typeof looks[0], i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
      className={i === 0 ? 'look-featured' : i === 3 ? 'look-wide' : 'look-item'}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        width: '100%',
        minHeight: i === 0 ? '500px' : i === 3 ? '200px' : '260px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: i === 3 ? '2.5rem' : '6rem',
        letterSpacing: '-0.05em',
        color: 'rgba(255,255,255,0.04)',
        background: i === 0 ? 'linear-gradient(160deg, #111 0%, #1a0003 100%)'
                  : i === 1 ? 'linear-gradient(160deg, #0d0d0d 0%, #181818 100%)'
                  : i === 2 ? 'linear-gradient(160deg, #180003 0%, #0a0a0a 100%)'
                  : 'linear-gradient(160deg, #111 0%, #1c1c1c 100%)'
      }}>{look.letter}</div>
      <span style={{
        position: 'absolute', bottom: '16px', left: '20px',
        fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(240,237,230,0.5)'
      }}>{look.label}</span>
    </motion.div>
  )
}

export default function Lookbook() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="lookbook" style={{ padding: '80px 24px', background: 'var(--grey)' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '40px', borderBottom: '1px solid var(--mid)', paddingBottom: '24px'
        }}
      >
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '0.1em' }}>Lookbook</h2>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>SS '26</span>
      </motion.div>

      <div className="lookbook-grid">
        {looks.map((look, i) => <LookItem key={i} look={look} i={i} />)}
      </div>

      <style>{`
        .lookbook-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 3px;
        }
        .look-featured { grid-row: span 2; }
        .look-wide { grid-column: span 2; }
        @media (max-width: 768px) {
          .lookbook-grid { grid-template-columns: 1fr 1fr; }
          .look-featured { grid-row: span 1; grid-column: span 2; }
          .look-wide { grid-column: span 2; }
        }
      `}</style>
    </section>
  )
}