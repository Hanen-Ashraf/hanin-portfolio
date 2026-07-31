import React, { useMemo } from 'react'

// Ambient, fixed background: subtle grid + slow gradient blobs + floating particles.
// Purely decorative — sits behind all content at a low z-index.
export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 6,
      })),
    []
  )

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg" aria-hidden="true">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-60" />

      {/* Gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[130px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[130px] animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/40 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '8s' }} />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-accent/40 animate-float-slow"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/0 to-bg" />
    </div>
  )
}
