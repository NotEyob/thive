import type { Metadata } from 'next'
import { Bebas_Neue, Space_Mono } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import CartSidebar from '@/components/CartSidebar'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space'
})

export const metadata: Metadata = {
  title: 'THIVE',
  description: 'Streetwear. Drop 001.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${spaceMono.variable}`}>
      <body>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}