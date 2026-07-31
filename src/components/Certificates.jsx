import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import { certificates } from '../data'

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certificates"
          title="Learning, verified"
          subtitle="Courses and certifications that back up the skills I use day to day."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card card-hover p-6 flex flex-col items-start"
            >
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center text-accent">
                <HiOutlineBadgeCheck size={26} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-text">{cert.title}</h3>
              <p className="mt-1 text-xs text-gray-light">{cert.issuer}</p>
              <span className="mt-4 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
