import React from "react"
import Link from "next/link"
import SearchHint from "@/components/SearchHint"

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const linkStyle: React.CSSProperties = {
  fontFamily: '"Graphik", system-ui, sans-serif',
  color: '#F5F0E8',
  backgroundColor: 'transparent',
  padding: '5px 12px',
  fontSize: '12px',
  letterSpacing: '0.08em',
}

const subRowStyle: React.CSSProperties = {
  fontFamily: '"Graphik", system-ui, sans-serif',
  fontSize: '11px',
  color: '#F5F0E8',
  letterSpacing: '0.08em',
  opacity: 0.5,
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#09090b",
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
        <SearchHint style={{ color: '#F5F0E8', opacity: 0.5, padding: '5px 12px' }} />
        <p style={{ ...subRowStyle, opacity: 0.6 }}>
          © {new Date().getFullYear()} Joe DeLuca. All rights reserved.
        </p>
      </div>

      {/* Desktop — main row */}
      <div className="hidden sm:flex justify-between items-center px-10 py-9">
        <nav className="flex gap-3">
          {footerLinks.map(({ href, label }) => (
            <Link key={label} href={href} className="text-sm transition-colors" style={linkStyle}>
              {label}
            </Link>
          ))}
        </nav>
        <SearchHint style={{ color: '#F5F0E8', opacity: 0.5, padding: '5px 12px' }} />
      </div>

      {/* Desktop — sub row */}
      <div
        className="hidden sm:flex items-center px-10 py-3"
        style={{ borderTop: '1px solid #27272a' }}
      >
        <div className="flex-1 flex justify-center">
          <p style={{ ...subRowStyle, margin: 0 }}>
            © {new Date().getFullYear()} Joe DeLuca. All rights reserved.
          </p>
        </div>
        <Link
          href="https://leobruno.it"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...subRowStyle, opacity: 0.5 }}
        >
          leobruno.it
        </Link>
      </div>
    </footer>
  )
}
