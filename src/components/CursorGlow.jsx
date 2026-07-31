import React, { useEffect, useRef } from 'react'

// A soft radial glow that follows the cursor for a premium, tactile feel.
// Hidden on touch devices since there is no cursor to follow.
export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let raf

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12
      currentY += (mouseY - currentY) * 0.12
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-[60] hidden md:block mix-blend-screen"
      style={{
        background:
          'radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  )
}
