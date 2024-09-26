'use client'

import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Heading } from '@/components/ui/headers'
import { cn } from '@/lib/utils'

export interface CardProps {
  title: string
  description: string
  image: StaticImageData
  link?: string
}

const UseCard: React.FC<CardProps> = ({ title, description, image, link }) => {
  // --- Render
  return (
    <div className="group/uses-card flex items-center justify-between rounded-lg px-2 py-4 transition duration-300 ease-in-out dark:hover:bg-muted">
      <Image
        src={image}
        alt={title}
        width="70"
        height="70"
        className="m-auto transform rounded-lg transition duration-300 ease-in-out lg:group-hover/uses-card:translate-x-1"
      />
      <div className="flex w-2/3 flex-col items-start gap-2">
        <div className="flex w-full items-center justify-between">
          <Heading
            variant="h3"
            border={false}
            className="transform transition duration-300 ease-in-out lg:group-hover/uses-card:translate-x-1"
          >
            {title}
          </Heading>
          {link && (
            <Link
              target="_blank"
              href={link}
              passHref
              className="cursor-none rounded-full bg-neutral-300/70 px-2 py-1 text-sm text-neutral-600/70 transition duration-300 ease-in-out dark:bg-neutral-700/70 dark:text-neutral-400/70 dark:hover:text-neutral-200/70 lg:hover:text-neutral-800/70"
            >
              Obtenir
            </Link>
          )}
        </div>
        <p className="transform text-neutral-600/70 transition duration-300 ease-in-out dark:text-neutral-400/70 lg:group-hover/uses-card:translate-x-1">
          {description}
        </p>
      </div>
    </div>
  )
}

const UseCardImage: React.FC<CardProps> = ({ title, description, image }) => {
  // --- Variables
  const textVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 10,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  }

  // --- Render
  return (
    <div className="group/uses-card relative flex items-center justify-center overflow-hidden rounded-lg transition duration-300 ease-in-out">
      <Image
        src={image}
        alt={title}
        width="300"
        height="300"
        className="m-auto h-full w-full transform rounded-lg object-cover transition duration-300 ease-in-out"
      />
      <motion.div
        initial="hidden"
        whileHover="visible"
        className={cn(
          'absolute bottom-0 left-0 flex h-full w-full flex-col items-start justify-end p-4 pb-8 opacity-0 transition duration-300 ease-in-out lg:group-hover/uses-card:opacity-100',
          'bg-gradient-to-t from-primary to-transparent'
        )}
      >
        <motion.div variants={textVariants}>
          <Heading
            variant="h3"
            className="text-lg font-semibold text-neutral-100"
          >
            {title}
          </Heading>
        </motion.div>
        <motion.p variants={textVariants} className="mt-1 text-neutral-100">
          {description}
        </motion.p>
      </motion.div>
    </div>
  )
}

export { UseCard, UseCardImage }
