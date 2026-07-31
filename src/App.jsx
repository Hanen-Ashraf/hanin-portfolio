import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Certificates from './components/Certificates'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  // Lock scroll while the loader is visible
  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto'
  }, [isLoading])

  return (
    <ThemeProvider>
      <Loader isLoading={isLoading} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="relative min-h-screen font-poppins text-text"
      >
        <AnimatedBackground />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Timeline />
          <Projects />
          <Gallery />
          <Certificates />
          <Services />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </motion.div>
    </ThemeProvider>
  )
}
