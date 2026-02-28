'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

export default function AnimateIn({
  children,
  delay = 0,
  direction = 'up'
}: {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const getInitial = () => {
    return {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0
    }
  }

  const getAnimate = () => {
    return {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : direction === 'up' ? 40 : 0,
      x: inView ? 0 : direction === 'left' ? -40 : direction === 'right' ? 40 : 0
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{
        duration: 0.7,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}