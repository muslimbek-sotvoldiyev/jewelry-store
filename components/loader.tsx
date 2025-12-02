"use client"

import { useEffect, useState } from "react"

type LoaderProps = {
  fullScreen?: boolean
  label?: string
}

export function Loader({ fullScreen = false, label = "Loading..." }: LoaderProps) {
  const Content = () => (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background jewelry images */}
      <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-10">
        <img src="/luxury-gold-necklace-jewelry.jpg" alt="" className="w-full h-full object-cover" />
        <img src="/elegant-diamond-ring.png" alt="" className="w-full h-full object-cover" />
        <img src="/gold-bracelet-luxury-jewelry.jpg" alt="" className="w-full h-full object-cover" />
        <img src="/pearl-earrings-elegant-jewelry.jpg" alt="" className="w-full h-full object-cover" />
        <img src="/gold-pendant-necklace-jewelry.jpg" alt="" className="w-full h-full object-cover" />
        <img src="/luxury-gold-watch-jewelry.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated ring loader */}
        <div className="relative w-24 h-24">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary"
            style={{
              animation: "spin 1s linear infinite",
            }}
          />

          {/* Middle pulsing ring */}
          <div
            className="absolute inset-2 rounded-full border-2 border-primary/30"
            style={{
              animation: "pulse 2s ease-in-out infinite",
            }}
          />

          {/* Inner logo container */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shadow-inner">
            <span
              className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent"
              style={{
                animation: "pulse 2s ease-in-out infinite",
              }}
            >
              F
            </span>
          </div>

          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10"
            style={{
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Brand name with shimmer */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-light tracking-[0.3em] text-foreground">
            FERGA<span className="text-primary font-semibold">GOLD</span>
          </h1>
          <div className="relative w-32 h-0.5 mx-auto overflow-hidden rounded-full bg-primary/20">
            <div
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{
                animation: "shimmer 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-primary"
              style={{
                animation: "bounce 1.4s ease-in-out infinite",
                animationDelay: `${i * 0.16}s`,
              }}
            />
          ))}
        </div>

        {/* Label */}
        <p className="text-sm text-muted-foreground tracking-wide font-medium">{label}</p>

        {/* Keyframes */}
        <style jsx>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(0.98);
            }
          }
          @keyframes shimmer {
            0% {
              left: -50%;
            }
            100% {
              left: 100%;
            }
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-8px);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[60] bg-background flex items-center justify-center">
        <Content />
      </div>
    )
  }

  return (
    <div className="py-16 flex justify-center h-screen">
      <Content />
    </div>
  )
}

export function PageLoader() {
  const [show, setShow] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1000)
    const hideTimer = setTimeout(() => setShow(false), 1500)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!show) return null

  return (
    <div
      className={`fixed inset-0 z-[60] bg-background flex items-center justify-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <Loader label="Tayyorlanmoqda..." />
    </div>
  )
}

export default Loader
