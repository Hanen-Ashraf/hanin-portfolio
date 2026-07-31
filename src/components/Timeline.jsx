import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { journey } from '../data'

export default function Timeline() {
  return (
    <section id="journey" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="My Journey"
          title="From first line of code to now"
          center
        />

        <div className="relative mt-20 max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-accent to-transparent sm:-translate-x-1/2" />

          <div className="flex flex-col gap-14">
            {journey.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={step.year} className="relative flex sm:justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-16 sm:pl-0 ${
                      isLeft ? 'sm:mr-auto sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'
                    }`}
                  >
                    <div className="glass-card card-hover inline-block p-6 text-left w-full">
                      <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                        {step.year}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-text">{step.title}</h3>
                      <p className="mt-2 text-sm text-gray-light leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Node */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-6 sm:left-1/2 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-accent shadow-glow"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
