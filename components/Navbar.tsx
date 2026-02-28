'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const { count, setIsOpen } = useCart()

  const handleNav = (href: string) => {
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
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 48px',
      mixBlendMode: 'difference'
    }}>
      <a href="/" style={{
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '2rem',
        letterSpacing: '0.3em',
        color: 'var(--white)',
        textDecoration: 'none'
      }}>THIVE</a>

      <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', alignItems: 'center' }}>
        {links.map((link) => (
          <li key={link.label}>
            <button
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--white)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Mono, monospace',
                padding: 0
              }}
            >{link.label}</button>
          </li>
        ))}
        <li>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              background: 'none',
              border: '1px solid var(--white)',
              color: 'var(--white)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'Space Mono, monospace',
              padding: '8px 16px'
            }}
          >Cart ({count})</button>
        </li>
      </ul>
    </nav>
  )
}