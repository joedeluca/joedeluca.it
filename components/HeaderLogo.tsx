import Link from "next/link"

export default function HeaderLogo() {
  return (
    <div className="flex flex-col justify-center h-full">
      <Link href="/">
        {/* Replace with joe-deluca-logo.png once available */}
        <span
          style={{
            fontFamily: '"Schnyder S", Georgia, serif',
            fontSize: '1.5rem',
            color: '#E8DCC8',
            letterSpacing: '0.02em',
            opacity: 0.9,
          }}
        >
          Joe DeLuca
        </span>
      </Link>
    </div>
  )
}
