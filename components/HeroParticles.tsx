"use client"

import React, { useRef, useEffect } from "react"

export default function HeroParticles({ color = "#ffffff33" }: { color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let w = (canvas.width = canvas.clientWidth)
    let h = (canvas.height = canvas.clientHeight)
    let raf = 0
    let pointer = { x: w / 2, y: h / 2 }

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    const count = Math.max(12, Math.floor((w * h) / 70000))

    function init() {
      particles.length = 0
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          r: 1 + Math.random() * 3,
        })
      }
    }

    function resize() {
      w = canvas.width = canvas.clientWidth
      h = canvas.height = canvas.clientHeight
      init()
    }

    function step() {
      ctx.clearRect(0, 0, w, h)

      // draw lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        a.x += a.vx
        a.y += a.vy

        // attraction to pointer
        const dx = pointer.x - a.x
        const dy = pointer.y - a.y
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001
        const force = Math.min(0.08, 120 / (dist * dist))
        a.vx += (dx / dist) * force * 0.02
        a.vy += (dy / dist) * force * 0.02

        // friction
        a.vx *= 0.995
        a.vy *= 0.995

        // bounds
        if (a.x < -20) a.x = w + 20
        if (a.x > w + 20) a.x = -20
        if (a.y < -20) a.y = h + 20
        if (a.y > h + 20) a.y = -20
      }

      // draw connections
      ctx.lineWidth = 0.7
      ctx.strokeStyle = color
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = dx * dx + dy * dy
          if (d < 12000) {
            ctx.globalAlpha = Math.max(0.02, 0.9 - d / 12000)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      // draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.globalAlpha = 0.9
        ctx.fillStyle = color
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(step)
    }

    function onMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
    }

    function onLeave() {
      pointer.x = w / 2
      pointer.y = h / 2
    }

    init()
    window.addEventListener("resize", resize)
    canvas.addEventListener("pointermove", onMove)
    canvas.addEventListener("pointerleave", onLeave)
    raf = requestAnimationFrame(step)

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", onMove)
      canvas.removeEventListener("pointerleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [color])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}
