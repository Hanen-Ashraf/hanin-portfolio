import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
} from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { personalInfo } from '../data'

const socials = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: HiOutlineMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { icon: HiOutlinePhone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Front-end only demo — wire this up to your form backend / email API of choice
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-10">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card p-6 flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center text-accent shrink-0">
                <HiOutlineMail size={22} />
              </span>
              <div>
                <p className="text-xs text-gray-light uppercase tracking-wider">Email</p>
                <p className="text-text font-medium break-all">{personalInfo.email}</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center text-accent shrink-0">
                <HiOutlinePhone size={22} />
              </span>
              <div>
                <p className="text-xs text-gray-light uppercase tracking-wider">Phone</p>
                <p className="text-text font-medium">{personalInfo.phone}</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center text-accent shrink-0">
                <HiOutlineLocationMarker size={22} />
              </span>
              <div>
                <p className="text-xs text-gray-light uppercase tracking-wider">Location</p>
                <p className="text-text font-medium">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-text hover:text-accent hover:border-accent/40 border border-transparent hover:-translate-y-1 transition-all duration-300"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="glass-card h-48 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="relative flex flex-col items-center gap-2 text-gray-light">
                <HiOutlineLocationMarker className="text-accent" size={28} />
                <span className="text-sm">Cairo, Egypt — map preview</span>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-sm text-gray-light">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text placeholder:text-gray-light/60 focus:border-accent/60 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-gray-light">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text placeholder:text-gray-light/60 focus:border-accent/60 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="text-sm text-gray-light">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text placeholder:text-gray-light/60 focus:border-accent/60 outline-none transition-colors"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm text-gray-light">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text placeholder:text-gray-light/60 focus:border-accent/60 outline-none transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-gradient mt-6 w-full sm:w-auto">
              {submitted ? (
                <>
                  <HiOutlineCheckCircle size={18} /> Message Sent
                </>
              ) : (
                <>
                  <HiOutlinePaperAirplane size={18} className="-rotate-45" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
