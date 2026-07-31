import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          subtitle="From first sketch to shipped product — design and front-end development under one roof."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card card-hover p-7 relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors" />
                <span className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white shadow-glow">
                  <Icon size={24} />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-text">{service.title}</h3>
                <p className="relative mt-2 text-sm text-gray-light leading-relaxed">{service.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
