import React from "react"
import Link from "next/link"

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const linkStyle: React.CSSProperties = {
  fontFamily: '"Graphik", system-ui, sans-serif',
  color: '#F5F0E8',
  backgroundColor: '#0C0A08',
  padding: '5px 12px',
  fontSize: '12px',
  letterSpacing: '0.08em',
}

const leoStyle: React.CSSProperties = {
  fontFamily: '"Graphik", system-ui, sans-serif',
  fontSize: '11px',
  color: '#F5F0E8',
  backgroundColor: '#0C0A08',
  padding: '5px 12px',
  letterSpacing: '0.1em',
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('/black-marble.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        width: "100%",
        borderTop: "5px solid #C8B89A",
      }}
    >
      {/* Mobile */}
      <div className="flex flex-col items-center gap-4 px-8 py-10 sm:hidden">
        <nav className="flex flex-wrap justify-center gap-3">
          {footerLinks.map(({ href, label }) => (
            <Link key={label} href={href} className="text-sm transition-colors" style={linkStyle}>
              {label}
            </Link>
          ))}
        </nav>
        <p style={{ ...linkStyle, opacity: 0.6 }}>
          © {new Date().getFullYear()} Joe DeLuca. All rights reserved.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex justify-between items-center px-10 py-9">
        <nav className="flex gap-3">
          {footerLinks.map(({ href, label }) => (
            <Link key={label} href={href} className="text-sm transition-colors" style={linkStyle}>
              {label}
            </Link>
          ))}
        </nav>
        <p style={{ ...linkStyle, fontSize: '11px', opacity: 0.6 }}>
          © {new Date().getFullYear()} Joe DeLuca. All rights reserved.
        </p>
        <Link
          href="https://leobruno.it"
          target="_blank"
          rel="noopener noreferrer"
          style={leoStyle}
        >
          leobruno.it
        </Link>
      </div>
    </footer>
  )
}

