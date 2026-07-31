import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineLocationMarker } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import Counter from './Counter'
import { personalInfo, stats } from '../data'

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionHeading eyebrow="About Me" title="Getting to know me" />

        <div className="mt-16 grid lg:grid-cols-5 gap-12 items-center">
          {/* Image / avatar column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-secondary/40 to-accent/20 blur-2xl" />
              <div className="relative w-full h-full rounded-[2.5rem] glass-card flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20" />
                <span className="text-8xl font-bold text-gradient">HA</span>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-4 glass-card px-4 py-3 flex items-center gap-2 animate-float"
              >
                <HiOutlineLocationMarker className="text-accent" />
                <span className="text-xs font-medium text-text whitespace-nowrap">{personalInfo.location}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-text">
              Front-End Developer &amp; Graphic Designer, based in Cairo
            </h3>
            <p className="mt-5 text-gray-light leading-relaxed">
              I&apos;m an Information Technology student at WE School for Applied Technology, expected to
              graduate in 2026, with a strong focus on front-end development and graphic design. I enjoy
              turning ideas into clean, responsive interfaces and pairing that with a solid visual identity —
              from the layout of a landing page to the details of a logo.
            </p>
            <p className="mt-4 text-gray-light leading-relaxed">
              My work sits at the intersection of code and design: I write structured, maintainable
              front-end code with React and Tailwind CSS, and I design the visuals — logos, posters and
              social media content — that bring a brand to life. I care about detail, performance and
              making things feel effortless to use.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-gray-light">
              <HiOutlineAcademicCap className="text-accent shrink-0" size={20} />
              <span>
                {personalInfo.education} — {personalInfo.school} · {personalInfo.graduation}
              </span>
            </div>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card card-hover p-4 sm:p-5 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-light">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
