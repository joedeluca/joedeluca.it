"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import PigeonSprite from "@/components/PigeonSprite"

const COLLAPSED_HEIGHT = 100

export default function HeaderLogo() {
  const scrolled = useRef(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pigeonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement
    if (!header) return
    const fullHeight = header.offsetHeight

    const onScroll = () => {
      const past = window.scrollY > 80
      if (past === scrolled.current) return
      scrolled.current = past

      if (past) {
        gsap.to(header, {
          height: COLLAPSED_HEIGHT,
          duration: 0.4,
          ease: "power2.inOut",
          onStart: () => {
            header.style.overflow = "visible"
          },
          onComplete: () => {
            setIsScrolled(true)
          },
        })
      } else {
        setIsScrolled(false)
        header.style.overflow = "hidden"
        gsap.to(header, { height: fullHeight, duration: 0.4, ease: "power2.inOut" })
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  return (
    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "flex-end", gap: "0.75rem", width: "100%" }}>
      {isScrolled && (
        <div ref={pigeonRef} style={{ marginTop: "16px" }}>
          <PigeonSprite />
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {!isScrolled && (
          <div
            className="logo-name"
            style={{
              fontFamily: '"Schnyder S", Georgia, serif',
              fontWeight: 700,
              fontSize: "clamp(2rem, 18vw, 9rem)",
              color: "#1C1714",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Joe DeLuca
          </div>
        )}
        <div
          className="logo-subtitle"
          style={{
            fontFamily: "Garamond, \"EB Garamond\", Georgia, serif",
            fontSize: "clamp(0.5rem, 2.8vw, 1.4rem)",
            letterSpacing: "0.35em",
            color: "#1C1714",
            lineHeight: 1.15,
            textTransform: "uppercase",
            marginTop: isScrolled ? "-2.6rem" : "0.4rem",
            whiteSpace: "nowrap",
          }}
        >
          Deluxe International Copywriter&#8482;
        </div>
      </div>
    </Link>
  )
}
