"use client"

import React, { useMemo } from "react"

type Props = {
  children: React.ReactNode
  speed?: "fast" | "normal" | "slow" | number // number = seconds for one loop
  className?: string
  ariaLabel?: string
}

export default function ClientScroller({
  children,
  speed = "normal",
  className = "",
  ariaLabel = "Clients carousel",
}: Props) {
  // Ensure children are in an array
  const items = React.Children.toArray(children)

  const duration = useMemo(() => {
    if (typeof speed === "number") {
      return `${speed}s`
    }
    switch (speed) {
      case "fast":
        return "20s"
      case "slow":
        return "80s"
      case "normal":
      default:
        return "40s"
    }
  }, [speed])

  // Duplicate items to enable seamless looping
  return (
    <div
      className={`scrolling-container ${className}`}
      style={{ "--_animation-duration": duration } as React.CSSProperties}
      data-animated="true"
      role="region"
      aria-label={ariaLabel}
    >
      <div className="scrolling-wrapper">
        <div className="items">{items}</div>

        {/* duplicate copy for seamless loop */}
        <div aria-hidden="true" className="items">
          {items}
        </div>
      </div>
    </div>
  )
}
