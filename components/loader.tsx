"use client"

import { useEffect, useState } from "react"

type LoaderProps = {
  fullScreen?: boolean
  label?: string
}

export function Loader({ fullScreen = false, label = "Loading..." }: LoaderProps) {
  const Dots = () => (
    <div className="flex items-center gap-3">
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-black animate-ping" />
      <span
        className="inline-block h-2.5 w-2.5 rounded-full bg-black animate-ping"
        style={{ animationDelay: "120ms" }}
      />
      <span
        className="inline-block h-2.5 w-2.5 rounded-full bg-black animate-ping"
        style={{ animationDelay: "240ms" }}
      />
    </div>
  )

  const Content = () => (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <h1 className="text-2xl luxury-heading tracking-[0.2em] font-light">FERGANAGOLD</h1>
        <div className="w-20 h-px bg-black mx-auto mt-1" />
      </div>
      <Dots />
      <p className="luxury-text text-sm text-gray-700">{label}</p>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[60] bg-white/92 backdrop-blur-sm flex items-center justify-center">
        <Content />
      </div>
    )
  }

  return (
    <div className="py-10 flex justify-center">
      <Content />
    </div>
  )
}

export function PageLoader() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1000)
    return () => clearTimeout(t)
  }, [])
  if (!show) return null
  return <Loader fullScreen label="Preparing..." />
}

export default Loader
