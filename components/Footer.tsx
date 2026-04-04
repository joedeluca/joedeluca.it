import Link from "next/link"

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-[#3A2E24]">
      {/* Mobile */}
      <div className="flex flex-col items-center gap-4 px-8 sm:hidden">
        <nav className="flex gap-6">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sm transition-colors"
              style={{ fontFamily: '"Graphik", system-ui, sans-serif', color: '#5a4a3a' }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <p
          className="text-xs"
          style={{ fontFamily: '"Graphik", system-ui, sans-serif', color: '#5a4a3a' }}
        >
          © {new Date().getFullYear()} Joe DeLuca. All rights reserved.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex justify-between items-center px-8">
        <nav className="flex gap-6">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sm transition-colors"
              style={{ fontFamily: '"Graphik", system-ui, sans-serif', color: '#5a4a3a' }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <p
          className="text-xs"
          style={{ fontFamily: '"Graphik", system-ui, sans-serif', color: '#5a4a3a' }}
        >
          © {new Date().getFullYear()} Joe DeLuca. All rights reserved.
        </p>
        <Link
          href="https://leobruno.it"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: '"Graphik", system-ui, sans-serif', fontSize: '11px', color: '#5a4a3a', letterSpacing: '0.1em' }}
        >
          leobruno.it
        </Link>
      </div>
    </footer>
  )
}

