export type RingOptions = {
  color?: number
  metalness?: number
  roughness?: number
}

/*
  3D preview: require() ishlatilmaydi. Faqat ESM dynamic import.
  Internetdan GLB yuklash shart emas — torus (ring) procedural tarzda yaratiladi,
  shuning uchun offline ham ishlaydi.
*/
export async function mountThreeRing(canvas: HTMLCanvasElement, opts: RingOptions = {}) {
  const THREE = await import("three")

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.set(0, 0.25, 3)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

  const resize = () => {
    const w = canvas.clientWidth || 300
    const h = canvas.clientHeight || 300
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()
  const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null
  if (ro) ro.observe(canvas)

  scene.add(new THREE.AmbientLight(0xffffff, 0.8))
  const dl = new THREE.DirectionalLight(0xffffff, 1)
  dl.position.set(2, 2, 3)
  scene.add(dl)

  // Ring geometry (procedural)
  const geom = new THREE.TorusGeometry(0.7, 0.2, 48, 220)
  const mat = new THREE.MeshPhysicalMaterial({
    color: opts.color ?? 0xdda744, // gold
    metalness: opts.metalness ?? 1,
    roughness: opts.roughness ?? 0.2,
    reflectivity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
  })
  const ring = new THREE.Mesh(geom, mat)
  ring.rotation.x = Math.PI * 0.3
  ring.rotation.y = Math.PI * 0.2
  scene.add(ring)

  let raf = 0
  const tick = () => {
    ring.rotation.y += 0.012
    ring.rotation.x += 0.006
    renderer.render(scene, camera)
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)

  return () => {
    if (raf) cancelAnimationFrame(raf)
    if (ro) ro.disconnect()
    geom.dispose()
    mat.dispose()
    renderer.dispose()
  }
}
