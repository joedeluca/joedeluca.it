"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import PigeonSprite from "@/components/PigeonSprite"

const COLLAPSED_HEIGHT = 80
const NAV_ITEMS = [
  { label: "The Work", href: "/?filter=work" },
  { label: "Business", href: "/?filter=business" },
  { label: "Marginalia", href: "/?filter=marginalia" },
]

export default function HeaderLogo() {
  const scrolled = useRef(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement
    if (!header) return
    const fullHeight = header.offsetHeight

    const onScroll = () => {
      const past = window.scrollY > 80
      if (past === scrolled.current) return
      scrolled.current = past

      if (past) {
        if (subtitleRef.current) {
          gsap.to(subtitleRef.current, { opacity: 0, duration: 0.15, ease: "power2.in" })
        }
        gsap.to(header, {
          height: COLLAPSED_HEIGHT,
          duration: 0.4,
          ease: "power2.inOut",
          onStart: () => {
            header.style.overflow = "visible"
            header.style.backgroundColor = "rgba(245, 240, 232, 0.75)"
            header.style.backdropFilter = "blur(12px)"
            header.style.setProperty("-webkit-backdrop-filter", "blur(12px)")
          },
          onComplete: () => { setIsScrolled(true) },
        })
      } else {
        setIsScrolled(false)
        header.style.overflow = "hidden"
        header.style.backgroundColor = "#F5F0E8"
        header.style.backdropFilter = ""
        header.style.webkitBackdropFilter = ""
        gsap.to(header, { height: fullHeight, duration: 0.22, ease: "power2.out" })
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Animate nav in after it mounts
  useEffect(() => {
    if (!isScrolled || !navRef.current) return
    const items = navRef.current.querySelectorAll("a")
    gsap.fromTo(
      items,
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, duration: 0.35, ease: "power2.out", stagger: 0.08 }
    )
  }, [isScrolled])

  // Fade subtitle back in after it re-mounts on scroll-up
  useEffect(() => {
    if (isScrolled || !subtitleRef.current) return
    gsap.fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" })
  }, [isScrolled])

  return (
    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "flex-end", gap: "0.75rem", width: "100%" }}>
      {isScrolled && (
        <div style={{ marginTop: "16px" }}>
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

        {isScrolled ? (
          <div
            ref={navRef}
            style={{ display: "flex", gap: "2rem", opacity: 1, marginBottom: "6px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: "Garamond, \"EB Garamond\", Georgia, serif",
                  fontSize: "1rem",
                  letterSpacing: "0.35em",
                  color: "#1C1714",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        ) : (
          <div
            ref={subtitleRef}
            className="logo-subtitle"
            style={{
              fontFamily: "Garamond, \"EB Garamond\", Georgia, serif",
              fontSize: "clamp(0.5rem, 2.8vw, 1.4rem)",
              letterSpacing: "0.35em",
              color: "#1C1714",
              lineHeight: 1.15,
              textTransform: "uppercase",
              marginTop: "0.4rem",
              whiteSpace: "nowrap",
            }}
          >
            Deluxe International Copywriter&#8482;
          </div>
        )}
      </div>
    </Link>
  )
}
