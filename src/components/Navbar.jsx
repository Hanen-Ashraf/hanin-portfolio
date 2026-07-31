import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { navLinks } from '../data'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass shadow-card' : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={600}
          className="cursor-pointer select-none text-xl font-bold tracking-tight text-text"
        >
          HA<span className="text-accent">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-90}
                spy
                onSetActive={() => setActive(link.to)}
                className={`relative cursor-pointer text-sm font-medium transition-colors duration-300 py-1 ${
                  active === link.to ? 'text-accent' : 'text-gray-light hover:text-text'
                }`}
              >
                {link.name}
                {active === link.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary to-accent rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent hover:border-accent/50 border border-transparent transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <BsMoonStarsFill size={15} /> : <BsSunFill size={15} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Hire Me — desktop only */}
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-90}
            className="hidden lg:inline-flex btn-gradient !px-5 !py-2.5 text-sm cursor-pointer"
          >
            Hire Me
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-text"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden glass mt-3 mx-4 rounded-2xl"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 text-gray-light hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="px-6 pt-2">
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="btn-gradient w-full !py-3 cursor-pointer"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
