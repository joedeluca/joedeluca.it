"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const el = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!el.current) return
    gsap.fromTo(el.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" })
  }, [pathname])

  return <div ref={el}>{children}</div>
}
