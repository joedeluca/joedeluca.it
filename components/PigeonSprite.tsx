"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const FRAMES = 5
const FRAME_W = 1115 / FRAMES  // 223
const FRAME_H = 400
const DISPLAY_H = 96
const DISPLAY_W = FRAME_W * (DISPLAY_H / FRAME_H)
const FPS = 8

export default function PigeonSprite() {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  const ticker = useRef<(() => void) | null>(null)
  const lastTime = useRef(0)

  useEffect(() => {
    const interval = 1000 / FPS

    ticker.current = () => {
      const now = Date.now()
      if (now - lastTime.current < interval) return
      lastTime.current = now
      if (frame.current >= FRAMES - 1) return
      frame.current += 1
      if (ref.current) {
        ref.current.style.backgroundPositionX = `-${frame.current * DISPLAY_W}px`
      }
    }

    gsap.ticker.add(ticker.current)
    return () => {
      if (ticker.current) gsap.ticker.remove(ticker.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        width: DISPLAY_W,
        height: DISPLAY_H,
        backgroundImage: "url('/pigeon-sprite.png')",
        backgroundSize: `${DISPLAY_W * FRAMES}px ${DISPLAY_H}px`,
        backgroundPositionX: "0px",
        backgroundPositionY: "0px",
        backgroundRepeat: "no-repeat",
        flexShrink: 0,
      }}
    />
  )
}
