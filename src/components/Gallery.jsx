import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import { galleryCategories, galleryItems } from '../data'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered =
    activeCategory === 'All' ? galleryItems : galleryItems.filter((i) => i.category === activeCategory)

  return (
    <section id="gallery" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Design Gallery"
          title="Graphic design work"
          subtitle="Logos, posters, social media content, business cards and flyers — a visual side of my work."
        />

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-secondary to-accent text-white border-transparent shadow-glow'
                  : 'border-white/15 text-gray-light hover:text-text hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelected(item)}
                className={`relative mb-6 w-full break-inside-avoid rounded-2xl overflow-hidden glass-card card-hover group text-left ${item.height}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/25 via-primary/40 to-accent/15 flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <span className="relative text-2xl font-bold text-white/25 px-6 text-center">
                    {item.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/40 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <div>
                    <p className="text-sm font-semibold text-text">{item.title}</p>
                    <span className="text-xs text-accent">{item.category}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-6 bg-bg/90 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl glass-card overflow-hidden"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text hover:text-accent"
              >
                <HiX size={20} />
              </button>
              <div className="h-80 sm:h-96 bg-gradient-to-br from-secondary/30 via-primary/50 to-accent/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-white/30 px-8 text-center">{selected.title}</span>
              </div>
              <div className="p-6">
                <span className="eyebrow">
                  <span className="w-6 h-px bg-accent" />
                  {selected.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-text">{selected.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
