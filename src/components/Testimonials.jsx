import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setIndex((i) => (i + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setDirection(-1)
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const current = testimonials[index]

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="section-container">
        <SectionHeading eyebrow="Testimonials" title="What people say" center />

        <div className="mt-16 max-w-2xl mx-auto relative">
          <FaQuoteLeft className="text-accent/20 mx-auto mb-4" size={40} />

          <div className="relative h-64 sm:h-52 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 glass-card p-8 sm:p-10 text-center flex flex-col items-center justify-center"
              >
                <p className="text-text text-base sm:text-lg leading-relaxed italic">
                  &ldquo;{current.text}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-text">{current.name}</p>
                  <p className="text-sm text-accent">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text hover:text-accent hover:border-accent/40 border border-transparent transition-colors"
            >
              <HiChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text hover:text-accent hover:border-accent/40 border border-transparent transition-colors"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
