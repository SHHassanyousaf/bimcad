"use client"

import React, { useEffect, useRef } from "react"

export default function CursorGlow() {
  const dot = useRef<HTMLDivElement | null>(null)
  const ring = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return // disable on touch
    const d = dot.current
    const r = ring.current
    if (!d || !r) return
    let raf = 0
    let x = 0
    let y = 0
    let tx = 0
    let ty = 0

    function render() {
      tx += (x - tx) * 0.18
      ty += (y - ty) * 0.18
      d.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      r.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      raf = requestAnimationFrame(render)
    }

    function onMove(e: PointerEvent) {
      const rect = document.documentElement.getBoundingClientRect()
      x = e.clientX - 8
      y = e.clientY - 8
      // ring trails slower
    }

    function onDown() {
      if (d) d.style.transform += ' scale(0.85)'
    }
    function onUp() {
      if (d) d.style.transform = d.style.transform.replace(' scale(0.85)', '')
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed top-0 left-0 h-6 w-6 rounded-full bg-white/6 blur-lg mix-blend-screen opacity-80 z-50" style={{ transform: 'translate3d(-9999px,-9999px,0)' }} />
      <div ref={dot} className="pointer-events-none fixed top-0 left-0 h-2 w-2 rounded-full bg-white z-50 shadow-lg" style={{ transform: 'translate3d(-9999px,-9999px,0)' }} />
    </>
  )
}
