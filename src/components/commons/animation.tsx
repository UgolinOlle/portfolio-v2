'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '~/lib/utils'

// --- Global variants animation
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1.5,
      ease: 'easeOut',
    },
  }),
}

/**
 * @function Container
 * @description Animate the container when it's visible
 * @exports Container
 */
const Container: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  // --- Variables
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // --- Functions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  // --- Render
  return (
    <motion.section
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.section>
  )
}

/**
 * @function Box
 * @description Animate the box when it's visible
 * @exports Box
 */
const Box: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  // --- Variables
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // --- Functions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  // --- Render
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export { Container, Box }
