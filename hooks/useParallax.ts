"use client"

import { useEffect, RefObject } from "react"

type Options = {
  maxTranslate?: number
  rotate?: number
}

export function useParallax(ref: RefObject<HTMLElement | null>, options?: Options) {
  const { maxTranslate = 18, rotate = 8 } = options || {}

  useEffect(() => {
    const el = ref?.current
    if (!el) return

    let raf = 0

    function onMove(e: PointerEvent) {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height

        const x = (px - 0.5) * 2 // -1 .. 1
        const y = (py - 0.5) * 2 // -1 .. 1

        const tx = x * maxTranslate
        const ty = y * maxTranslate * -1
        const rx = y * rotate
        const ry = x * -rotate

        el.style.transform = `perspective(900px) translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`
        el.style.transition = "transform 120ms linear"
      })
    }

    function onLeave() {
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = "perspective(900px) translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"
      el.style.transition = "transform 400ms cubic-bezier(.2,.8,.2,1)"
    }

    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", onLeave)
    el.addEventListener("pointercancel", onLeave)

    return () => {
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      el.removeEventListener("pointercancel", onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref, maxTranslate, rotate])
}
