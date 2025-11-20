"use client"

import { useEffect } from "react"

// Lightweight scroll-based parallax for elements with data-parallax attribute
export function useScrollParallax() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    if (!els.length) return

    let ticking = false

    function update() {
      els.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-parallax') || '0.12')
        const rect = el.getBoundingClientRect()
        const offset = (window.innerHeight - rect.top) * depth
        // translate3d for GPU acceleration
        el.style.transform = `translate3d(0, ${Math.round(offset)}px, 0)`
      })
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
