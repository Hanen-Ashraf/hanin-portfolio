import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// Card with a subtle 3D tilt that follows the mouse position
export default function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass-card group relative overflow-hidden h-full flex flex-col hover:border-accent/40 hover:shadow-glow transition-[border-color,box-shadow] duration-500"
      >
        {/* Image placeholder area */}
        <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 bg-grid opacity-40" />
          <span className="relative text-4xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-500 select-none">
            {project.title}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1" style={{ transform: 'translateZ(30px)' }}>
          <h3 className="text-lg font-semibold text-text">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-light leading-relaxed flex-1">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-accent"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-white/15 text-text hover:border-accent/50 hover:text-accent transition-colors"
            >
              <FaGithub size={15} /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-secondary to-accent text-white hover:shadow-glow transition-shadow"
            >
              <FaExternalLinkAlt size={13} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
