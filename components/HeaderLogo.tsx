"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import PigeonSprite from "@/components/PigeonSprite"

export default function HeaderLogo() {
  const nameRef = useRef<HTMLDivElement>(null)
  const pigeonRef = useRef<HTMLDivElement>(null)
  const scrolled = useRef(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const THRESHOLD = 80

    const onScroll = () => {
      const past = window.scrollY > THRESHOLD

      if (past === scrolled.current) return
      scrolled.current = past

      if (past) {
        document.querySelector("header")?.classList.add("header-scrolled")
        document.getElementById("header-inner")?.classList.remove("pt-8", "pb-10")
        document.getElementById("logo-inner")?.classList.remove("pt-8", "pb-10")
        // Scroll down: shrink name out, pigeon in
        gsap.to(nameRef.current, {
          y: "-110%",
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => setIsScrolled(true),
        })
      } else {
        document.querySelector("header")?.classList.remove("header-scrolled")
        document.getElementById("header-inner")?.classList.add("pt-8", "pb-10")
        document.getElementById("logo-inner")?.classList.add("pt-8", "pb-10")
        // Scroll up: pigeon out, name back in
        setIsScrolled(false)
        gsap.fromTo(
          nameRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        )
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Animate pigeon in once it mounts
  useEffect(() => {
    if (isScrolled && pigeonRef.current) {
      gsap.fromTo(
        pigeonRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "back.out(2)" }
      )
    }
  }, [isScrolled])

  return (
    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem", width: "100%" }}>
      {isScrolled && (
        <div ref={pigeonRef}>
          <PigeonSprite />
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {!isScrolled && (
          <div style={{ overflow: "hidden" }}>
            <div
              ref={nameRef}
              className="logo-name"
              style={{
                fontFamily: '"Schnyder S", Georgia, serif',
                fontWeight: 700,
                fontSize: "clamp(2rem, 18vw, 9rem)",
                color: "#1C1714",
                lineHeight: 1,
              }}
            >
              Joe DeLuca
            </div>
          </div>
        )}
        <div
          className="logo-subtitle"
          style={{
            fontFamily: "Garamond, \"EB Garamond\", Georgia, serif",
            fontSize: isScrolled ? "clamp(0.45rem, 2.2vw, 1.1rem)" : "clamp(0.5rem, 2.8vw, 1.4rem)",
            letterSpacing: "0.35em",
            color: "#1C1714",
            lineHeight: 1.15,
            textTransform: "uppercase",
            marginTop: isScrolled ? 0 : "0.4rem",
          }}
        >
          Deluxe International Copywriter&#8482;
        </div>
      </div>
    </Link>
  )
}
