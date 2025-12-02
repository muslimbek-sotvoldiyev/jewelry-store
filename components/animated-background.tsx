"use client"

import { useEffect, useState, useRef } from "react"

export function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gold particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 3)}s`,
              transform: `translateY(${scrollY * (0.1 + i * 0.02)}px)`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs that follow scroll */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${scrollY * 0.2 + mousePosition.y * 0.3}px)`,
          left: "-10%",
          top: "10%",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-gradient-radial from-amber-500/10 via-amber-500/5 to-transparent blur-3xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${-mousePosition.x * 0.2}px, ${scrollY * 0.15}px)`,
          right: "-5%",
          top: "40%",
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bg-gradient-radial from-yellow-400/10 via-yellow-400/5 to-transparent blur-3xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${scrollY * 0.1}px)`,
          left: "30%",
          bottom: "10%",
        }}
      />

      {/* Diamond sparkles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-sparkle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + ((i * 10) % 70)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary/40">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />
    </div>
  )
}
