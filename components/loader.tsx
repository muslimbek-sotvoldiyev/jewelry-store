"use client"

import { useEffect, useState } from "react"

interface LoaderProps {
  size?: "sm" | "md" | "lg"
  text?: string
  fullScreen?: boolean
}

export function Loader({ size = "md", text, fullScreen = false }: LoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-center">
          {/* Jewelry-themed loader */}
          <div className="relative mb-8">
            <div className="absolute inset-0 animate-ping">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-20"></div>
            </div>
            <div className="relative w-20 h-20 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center animate-pulse">
              <div className="text-3xl">💎</div>
            </div>
          </div>

          {/* Loading text */}
          <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold text-gray-900">ZARGARLIK</h3>
            <p className="text-gray-600 animate-pulse">{text || "Loading..."}</p>
          </div>

          {/* Loading dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative mb-4">
        <div
          className={`${sizeClasses[size]} bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center animate-spin`}
        >
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      {text && <p className={`text-gray-600 ${textSizes[size]} animate-pulse`}>{text}</p>}
    </div>
  )
}

// Page loader component
export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return <Loader fullScreen text="Welcome to Zargarlik" />
}

// Product grid loader
export function ProductGridLoader() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
          <div className="h-48 md:h-64 bg-gray-200"></div>
          <div className="p-4 md:p-6 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Featured products loader
export function FeaturedProductsLoader() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
          <div className="h-48 md:h-64 bg-gray-200"></div>
          <div className="p-4 md:p-6 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Categories loader
export function CategoriesLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
          <div className="h-80 bg-gray-200"></div>
        </div>
      ))}
    </div>
  )
}
