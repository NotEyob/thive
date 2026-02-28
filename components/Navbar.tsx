'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const { count, setIsOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('/#')) {
      if (pathname === '/') {
        document.querySelector(href.replace('/', ''))?.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(href)
      }
    } else {
      router.push(href)
    }
  }

  const links = [
    { label: 'Shop', href: '/#shop' },
    { label: 'Lookbook', href: '/#lookbook' },
    { label: 'About', href: '/#about' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 24px',
        background: 'rgba(8,8,8,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--mid)'
      }}>
        <a href="/" style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem',
          letterSpacing: '0.3em',
          color: 'var(--white)',
          textDecoration: 'none'
        }}>THIVE</a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {links.map((link) => (
            <li key={link.label}>
              <button onClick={() => handleNav(link.href)} style={{
                background: 'none', border: 'none', color: 'var(--white)',
                fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: 'Space Mono, monospace', padding: 0
              }}>{link.label}</button>
            </li>
          ))}
          <li>
            <button onClick={() => setIsOpen(true)} style={{
              background: 'none', border: '1px solid var(--white)', color: 'var(--white)',
              fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'Space Mono, monospace', padding: '8px 16px'
            }}>Cart ({count})</button>
          </li>
        </ul>

        {/* Mobile right side */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }} className="mobile-nav">
          <button onClick={() => setIsOpen(true)} style={{
            background: 'none', border: '1px solid var(--white)', color: 'var(--white)',
            fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: 'Space Mono, monospace', padding: '6px 12px'
          }}>Cart ({count})</button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', color: 'var(--white)',
            fontSize: '1.4rem', cursor: 'pointer', lineHeight: 1
          }}>{menuOpen ? '✕' : '☰'}</button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '65px', left: 0, right: 0, bottom: 0,
          background: 'var(--black)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px'
        }} className="mobile-menu">
          {links.map((link) => (
            <button key={link.label} onClick={() => handleNav(link.href)} style={{
              background: 'none', border: 'none', color: 'var(--white)',
              fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem',
              letterSpacing: '0.2em', cursor: 'pointer'
            }}>{link.label}</button>
          ))}
        </div>
      )}

      <style>{`
        .mobile-nav { display: none; }
        .mobile-menu { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </>
  )
}