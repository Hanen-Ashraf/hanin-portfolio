import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { devSkills, designSkills } from '../data'

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const gridItem = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

function SkillGrid({ skills }) {
  return (
    <motion.div
      variants={gridContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
    >
      {skills.map((skill) => {
        const Icon = skill.icon
        return (
          <motion.div
            key={skill.name}
            variants={gridItem}
            whileHover={{ y: -6, scale: 1.03 }}
            className="glass-card card-hover group p-5 flex flex-col items-center justify-center gap-3 text-center"
          >
            <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
              <Icon size={24} />
            </span>
            <span className="text-sm font-medium text-text">{skill.name}</span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          subtitle="A toolkit spanning both sides of the screen — clean front-end code and intentional visual design."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-text mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Development
            </h3>
            <SkillGrid skills={devSkills} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Graphic Design
            </h3>
            <SkillGrid skills={designSkills} />
          </div>
        </div>
      </div>
    </section>
  )
}
