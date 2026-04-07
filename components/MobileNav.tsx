"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import type { MarkdownContent } from "@/lib/markdown"

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const bottomLinks = [
  { href: "https://leobruno.it", label: "leobruno.it" },
]

export default function MobileNav({ latestPosts = [] }: { latestPosts?: MarkdownContent[] }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Set initial position once panel is in DOM
  useEffect(() => {
    if (!panelRef.current) return
    gsap.set(panelRef.current, { yPercent: -100 })
  }, [mounted])

  // GSAP animate in/out
  useEffect(() => {
    if (!panelRef.current || !mounted) return
    if (open) {
      gsap.fromTo(
        panelRef.current,
        { yPercent: -100 },
        { yPercent: 0, duration: 0.4, ease: "power3.out" }
      )
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      )
    } else {
      gsap.to(panelRef.current, { yPercent: -100, duration: 0.3, ease: "power2.in" })
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.2, ease: "power2.in" })
    }
  }, [open, mounted])

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 flex-shrink-0"
        aria-label="Open menu"
      >
        <span className="block h-px w-5" style={{ background: '#1C1714', opacity: 0.7 }} />
        <span className="block h-px w-5" style={{ background: '#1C1714', opacity: 0.7 }} />
        <span className="block h-px w-5" style={{ background: '#1C1714', opacity: 0.7 }} />
      </button>

      {mounted && createPortal(
        <>
          {/* Blur backdrop */}
          <div
            ref={backdropRef}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 160,
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              background: 'rgba(12,10,8,0.5)',
              pointerEvents: open ? 'auto' : 'none',
              opacity: 0,
            }}
          />

          {/* Dropdown panel */}
          <div
            ref={panelRef}
            style={{
              position: 'fixed',
              left: 0,
              right: 0,
              top: 0,
              zIndex: 170,
              backgroundColor: '#0C0A08',
              borderBottom: '1px solid #3A2E24',
              pointerEvents: open ? 'auto' : 'none',
            }}
          >
            {/* Close button */}
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#E8DCC8', opacity: 0.6, lineHeight: 1 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>

            {/* Panel body — single column mobile, two columns desktop */}
            <div className="flex px-8 pb-8 gap-16">
              {/* Left: main nav */}
              <nav className="flex flex-col py-6 gap-8">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="nav-link"
                    style={{
                      fontFamily: '"Schnyder S", Georgia, serif',
                      fontSize: 'clamp(2rem, 9vw, 3rem)',
                      color: '#E8DCC8',
                      opacity: 0.85,
                      lineHeight: 1,
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Right: latest posts — desktop only */}
              {latestPosts.length > 0 && (
                <div className="hidden sm:flex flex-col justify-center gap-4 py-6 border-l pl-16" style={{ borderColor: '#3A2E24' }}>
                  <p style={{ fontFamily: '"Graphik", system-ui, sans-serif', fontSize: '1.2rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#5a4a3a', margin: 0 }}>
                    The Latest
                  </p>
                  {latestPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/posts/${post.slug}`}
                      onClick={() => setOpen(false)}
                      className="nav-link"
                      style={{
                        fontFamily: '"Schnyder S", Georgia, serif',
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        color: '#E8DCC8',
                        opacity: 0.7,
                        lineHeight: 1.2,
                      }}
                    >
                      {post.titleShort ?? post.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-6 px-8 pb-8">
              {bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: '"Graphik", system-ui, sans-serif', fontSize: '11px', color: '#5a4a3a', letterSpacing: '0.1em', textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setOpen(false); setTimeout(() => window.dispatchEvent(new CustomEvent('openSearch')), 50) }}
                style={{ fontFamily: '"Graphik", system-ui, sans-serif', fontSize: '11px', color: '#5a4a3a', letterSpacing: '0.1em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                ⌘K to search
              </button>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
