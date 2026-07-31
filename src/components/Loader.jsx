import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Full-screen loading animation shown before the site fades in
export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Ambient glow behind the initials */}
          <div className="absolute w-72 h-72 rounded-full bg-secondary/30 blur-[100px] animate-pulse" />

          <div className="relative flex items-center gap-1">
            {['H', 'A'].map((letter, i) => (
              <motion.span
                key={letter}
                className="text-6xl sm:text-8xl font-bold text-gradient font-poppins"
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: i * 0.25, ease: 'easeOut' }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-accent ml-2 mb-2 self-end"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [0, 1.4, 1] }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </div>

          <motion.p
            className="mt-5 text-xs sm:text-sm tracking-[0.4em] uppercase text-gray-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Front-End Developer &amp; Designer
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="mt-8 h-[2px] w-40 sm:w-56 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-secondary to-accent"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, delay: 1, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
