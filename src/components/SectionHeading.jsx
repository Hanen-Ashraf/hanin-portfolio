import React from 'react'
import { motion } from 'framer-motion'

// Consistent animated heading used at the top of every section
export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={center ? 'text-center flex flex-col items-center' : ''}
    >
      <span className="eyebrow">
        <span className="w-6 h-px bg-accent" />
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-subtitle ${center ? 'mx-auto text-center' : ''}`}>{subtitle}</p>}
    </motion.div>
  )
}
