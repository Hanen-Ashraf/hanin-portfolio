import React from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FaHeart } from 'react-icons/fa'
import { navLinks, personalInfo } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 pt-14 pb-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <Link to="home" smooth duration={600} className="cursor-pointer text-xl font-bold text-text">
              HA<span className="text-accent">.</span>
            </Link>
            <p className="mt-2 text-sm text-gray-light max-w-xs">
              Front-End Developer &amp; Graphic Designer crafting clean, modern digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-light">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    className="hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text hover:text-accent transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text hover:text-accent transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text hover:text-accent transition-colors"
            >
              <HiOutlineMail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-light">
          <p>© {year} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <FaHeart className="text-accent" size={11} /> by Hanin Ashraf
          </p>
        </div>
      </div>
    </footer>
  )
}
