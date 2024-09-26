'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, icons } from 'lucide-react'

import { ServiceCardProps } from '@/lib/interfaces/service'

/**
 * @function ServiceCard
 * @description Show details about a service in a card
 * @exports ServiceCard
 */
export const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  // --- Variables
  const letters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.,;:!?'
  const [isHovered, setIsHovered] = useState(false)
  const [scrambledText, setScrambledText] = useState(props.linkText)
  const [isAnimatingBack, setIsAnimatingBack] = useState(false)
  const LucideIcon = icons[props.icon as keyof typeof icons]

  // --- Effects
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timeout
    if (isHovered) {
      let currentIndex = 0
      const originalTextArray = props.linkText.split('')

      interval = setInterval(() => {
        if (currentIndex < originalTextArray.length) {
          setScrambledText((prev) => {
            const newText = prev.split('')
            newText[currentIndex] =
              letters[Math.floor(Math.random() * letters.length)]
            return newText.join('')
          })
          currentIndex++
        } else {
          clearInterval(interval)
          timeout = setTimeout(() => {
            setIsAnimatingBack(true) // Indicate the start of animation back
            let reverseIndex = 0
            const reverseInterval = setInterval(() => {
              if (reverseIndex < originalTextArray.length) {
                setScrambledText((prev) => {
                  const newText = prev.split('')
                  newText[reverseIndex] = originalTextArray[reverseIndex]
                  return newText.join('')
                })
                reverseIndex++
              } else {
                clearInterval(reverseInterval)
                setIsAnimatingBack(false)
              }
            }, 50)
          }, 100)
        }
      }, 50)
    } else {
      setScrambledText(props.linkText)
    }

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [isHovered, props.linkText, letters])

  // --- Render
  return (
    <motion.div
      className="group/service flex flex-col items-start justify-start gap-5 rounded-xl border p-5 shadow-sm"
      initial="hidden"
      animate="visible"
      custom={props.index}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex w-2/3 items-center gap-3 text-neutral-900 dark:text-neutral-100">
          <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 dark:border-neutral-700 dark:bg-neutral-800">
            <LucideIcon className="m-auto h-6 w-6 transform stroke-neutral-900 transition duration-300 ease-in-out group-hover/service:-rotate-12 dark:stroke-neutral-100" />
          </div>
          <p className="text-xl font-bold">{props.title}</p>
        </div>
        <p className="text-lg text-neutral-900 dark:text-neutral-100">
          {props.price} <span className="text-neutral-500">/ jour</span>
        </p>
      </div>
      <p className="w-3/4 text-lg text-neutral-500">{props.description}</p>
      <div className="flex w-full flex-col gap-2 rounded-lg border">
        {props.features.map((feature, index) => (
          <p
            key={index}
            className="border-b border-neutral-200 p-2 text-neutral-500 dark:border-neutral-700"
          >
            {feature}
          </p>
        ))}
      </div>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="cursor-pointer rounded-lg border border-neutral-200 px-4 py-2 text-xl font-medium uppercase tracking-widest hover:bg-neutral-200 dark:border-neutral-700 dark:hover:border-neutral-100 hover:dark:bg-neutral-800"
      >
        <Link
          href={props.link}
          passHref
          target="_blank"
          className="flex items-center gap-2"
        >
          <Calendar size="18" />
          <motion.span
            initial={false}
            animate={{
              opacity: isAnimatingBack ? [0, 1] : 1,
              y: isAnimatingBack ? [10, 0] : 0,
              transition: { duration: 0.5, ease: 'easeOut' },
            }}
          >
            {scrambledText}
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  )
}
