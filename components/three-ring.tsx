/>
- Replace the entire file to remove the require call and use proper ESM imports.

\`\`\`typescriptreact file="components/three-ring.tsx"
"use client"

import React, { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import type { Mesh } from "three"

type ThreeRingProps = {
className?: string
metal?: "gold" | "silver" | "platinum" | "rose"
rotate?: boolean
}

function RingMesh({ metal = "gold", rotate = true }: { metal?: ThreeRingProps["metal"]; rotate?: boolean }) {
const meshRef = useRef<Mesh | null>(null)

// Smooth rotation on each frame
useFrame((_, delta) => {
  if (!meshRef.current || !rotate) return
  meshRef.current.rotation.z += delta * 0.25
})

const color = useMemo(() => {
  switch (metal) {
    case "silver":
      return "#d7d7d7"
    case "platinum":
      return "#c5c8cf"
    case "rose":
      return "#b76e79"
    default:
      return "#d4af37"
  }
}, [metal])

return (
  <mesh ref={meshRef} rotation={[Math.PI / 2.2, 0, 0]}>
    <torusGeometry args={[1, 0.18, 64, 256]} />
    <meshPhysicalMaterial
      color={color}
      metalness={1}
      roughness={0.15}
      reflectivity={1}
      clearcoat={1}
      clearcoatRoughness={0.1}
    />
  </mesh>
)
}

export default function ThreeRing({ className, metal = "gold", rotate = true }: ThreeRingProps) {
return (
  <div className={className ?? "w-full h-full"} style={{ width: "100%", height: "100%" }}>
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 35 }}>
      <ambientLight intensity={0.45} />
      <directionalLight intensity={0.6} position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <RingMesh metal={metal} rotate={rotate} />
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls enablePan={false} minDistance={2.2} maxDistance={4.5} />
    </Canvas>
  </div>
)
}
