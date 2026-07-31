import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient bar across the very top of the viewport that fills as the user scrolls
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary via-accent to-secondary origin-left z-[70]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
