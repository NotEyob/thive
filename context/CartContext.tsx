'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type CartItem = {
  id: string
  name: string
  price: number
  size: string
  quantity: number
  letter: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, qty: number) => void
  total: number
  count: number
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('thive-cart')
    if (stored) {
      try { setItems(JSON.parse(stored)) } catch {}
    }
    setLoaded(true)
  }, [])

  // Save to localStorage whenever items change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('thive-cart', JSON.stringify(items))
    }
  }, [items, loaded])

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.size === item.size)
      if (existing) {
        return prev.map(i => i.id === item.id && i.size === item.size
          ? { ...i, quantity: i.quantity + 1 }
          : i
        )
      }
      return [...prev, item]
    })
    setIsOpen(true)
  }

  const removeItem = (id: string, size: string) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.size === size)))
  }

  const updateQuantity = (id: string, size: string, qty: number) => {
    if (qty < 1) return
    setItems(prev => prev.map(i => i.id === id && i.size === size ? { ...i, quantity: qty } : i))
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, total, count, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}