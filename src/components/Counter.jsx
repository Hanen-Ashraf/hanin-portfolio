import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

// Animates a number counting up from 0 when it scrolls into view
export default function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 22, stiffness: 60 })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  const [display, setDisplay] = React.useState(0)

  useEffect(() => {
    const unsub = springValue.on('change', (latest) => setDisplay(Math.floor(latest)))
    return unsub
  }, [springValue])

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </motion.span>
  )
}
