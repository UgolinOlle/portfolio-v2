'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export const NoteTaker = () => {
  const [note, setNote] = useState('')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const contentRef = useRef<HTMLDivElement>(null)
  const cursorControls = useAnimation()

  useEffect(() => {
    updateCursorPosition()
  }, [note])

  useEffect(() => {
    cursorControls.start({
      x: cursorPosition.x,
      y: cursorPosition.y,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    })
  }, [cursorPosition, cursorControls])

  const updateCursorPosition = () => {
    if (contentRef.current) {
      const selection = window.getSelection()

      // Vérification de la sélection valide
      if (!selection || selection.rangeCount === 0) {
        return
      }

      const range = selection.getRangeAt(0)
      const { scrollTop, scrollLeft } = contentRef.current

      const rangeRects = range.getClientRects()
      const lastRect = rangeRects[rangeRects.length - 1]

      const contentStyles = getComputedStyle(contentRef.current)
      const paddingLeft = parseFloat(contentStyles.paddingLeft)
      const paddingTop = parseFloat(contentStyles.paddingTop)

      if (lastRect) {
        setCursorPosition({
          x: lastRect.left - scrollLeft - paddingLeft, // Correction ici pour utiliser left au lieu de right
          y: lastRect.top - scrollTop - paddingTop,
        })
      } else {
        setCursorPosition({
          x: paddingLeft,
          y: paddingTop,
        })
      }
    }
  }

  const handleInput = () => {
    const content = contentRef.current?.textContent || ''
    setNote(content)
    setTimeout(updateCursorPosition, 0)
  }

  const handleKeyDown = () => {
    setTimeout(updateCursorPosition, 0)
  }

  const handleClick = () => {
    updateCursorPosition()
  }

  const handleScroll = () => {
    updateCursorPosition()
  }

  return (
    <div className="relative w-full max-w-2xl p-6">
      <div
        ref={contentRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        onScroll={handleScroll}
        className="h-full w-full overflow-auto whitespace-pre-wrap p-3 font-robot-slab text-lg text-gray-700 caret-transparent"
        style={{
          fontFamily: 'var(--font-roboto-slab)',
          caretColor: 'transparent',
          lineHeight: '1.5',
          outline: 'none',
        }}
        placeholder="Ecrit une note ici..."
        aria-label="Zone de prise de notes"
      />
      <motion.div
        className="pointer-events-none absolute h-6 w-0.5 bg-blue-500"
        initial={false}
        animate={cursorControls}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  )
}
