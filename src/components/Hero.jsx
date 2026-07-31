import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { HiOutlineDownload, HiOutlineMail, HiOutlineArrowDown } from 'react-icons/hi'
import { FaBriefcase } from 'react-icons/fa'
import { heroRoles, personalInfo } from '../data'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow">
            <span className="w-6 h-px bg-accent" />
            Hello, I&apos;m
          </motion.p>

          <motion.h1 variants={item} className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-text">
            {personalInfo.name}
          </motion.h1>

          <motion.div variants={item} className="mt-4 h-10 sm:h-12 flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient">
              <TypeAnimation
                sequence={heroRoles}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor
              />
            </span>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-gray-light text-base sm:text-lg max-w-xl leading-relaxed">
            I build responsive websites and create modern digital experiences with clean code and creative design.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="/Hanin-Ashraf-CV.pdf" download className="btn-gradient">
              <HiOutlineDownload size={18} />
              Download CV
            </a>
            <Link to="contact" smooth duration={600} offset={-90} className="btn-outline cursor-pointer">
              <HiOutlineMail size={18} />
              Contact Me
            </Link>
            <Link to="contact" smooth duration={600} offset={-90} className="group inline-flex items-center gap-2 text-sm font-medium text-text cursor-pointer">
              <span className="w-11 h-11 rounded-full glass flex items-center justify-center group-hover:border-accent/50 border border-white/10 transition-colors">
                <FaBriefcase className="text-accent" size={15} />
              </span>
              Hire Me
            </Link>
          </motion.div>

          {/* Quick info strip */}
          <motion.div variants={item} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-light">
            <span>{personalInfo.title}</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>{personalInfo.location}</span>
          </motion.div>
        </motion.div>

        {/* Right: abstract avatar / illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="relative flex items-center justify-center h-[420px] sm:h-[500px]"
        >
          {/* Background glow */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-secondary/30 blur-[100px]" />
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-accent/20 blur-[90px] top-10 right-10" />

          {/* Rotating dashed ring */}
          <div className="absolute w-72 h-72 sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-white/15 animate-spin-slow" />
          <div className="absolute w-60 h-60 sm:w-[300px] sm:h-[300px] rounded-full border border-white/10" />

          {/* Monogram avatar */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-[2rem] glass shadow-glow flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-accent/30" />
            <span className="relative text-7xl sm:text-8xl font-bold text-gradient">HA</span>
          </div>

          {/* Floating skill chips */}
          <motion.div
            className="absolute top-4 left-0 sm:left-4 glass-card px-4 py-2.5 flex items-center gap-2 animate-float"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs sm:text-sm font-medium text-text">React.js</span>
          </motion.div>

          <motion.div className="absolute bottom-10 left-0 sm:-left-4 glass-card px-4 py-2.5 flex items-center gap-2 animate-float-delay">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-xs sm:text-sm font-medium text-text">UI Design</span>
          </motion.div>

          <motion.div className="absolute bottom-0 right-0 sm:right-4 glass-card px-4 py-2.5 flex items-center gap-2 animate-float-slow">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs sm:text-sm font-medium text-text">Tailwind CSS</span>
          </motion.div>

          <motion.div className="absolute top-16 right-0 glass-card px-4 py-2.5 flex items-center gap-2 animate-float">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-xs sm:text-sm font-medium text-text">Figma</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <Link
        to="about"
        smooth
        duration={600}
        offset={-70}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-light cursor-pointer hover:text-accent transition-colors"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <HiOutlineArrowDown size={16} />
        </motion.span>
      </Link>
    </section>
  )
}
