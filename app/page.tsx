import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Joe DeLuca",
  description:
    "Senior copywriter and creative director. US agency pedigree. Works in English. Based in Sardinia.",
  alternates: {
    canonical: "https://joedeluca.it",
  },
  openGraph: {
    title: "Joe DeLuca",
    description: "Senior copywriter and creative director. US agency pedigree. Works in English. Based in Sardinia.",
    url: "https://joedeluca.it",
    type: "website",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joe DeLuca",
  jobTitle: "Copywriter & Creative Director",
  description:
    "Senior copywriter and creative director. US agency pedigree. Works in English. Based in Sardinia, Italy.",
  url: "https://joedeluca.it",
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24"
        style={{ backgroundColor: '#0C0A08' }}
      >
        {/* Hero */}
        <div className="max-w-3xl py-24">
          <h1
            style={{
              fontFamily: '"Schnyder S", Georgia, serif',
              fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              color: '#E8DCC8',
              lineHeight: 1,
              marginBottom: '2rem',
            }}
          >
            Joe DeLuca.
          </h1>

          <p
            style={{
              fontFamily: '"Graphik", system-ui, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#9A8878',
              lineHeight: 1.6,
              maxWidth: '38ch',
              marginBottom: '3rem',
            }}
          >
            {/* Your line goes here. */}
            Senior copywriter. US agency pedigree. Works in English.
            Based in Sardinia.
          </p>

          <Link
            href="/about"
            style={{
              fontFamily: '"Graphik", system-ui, sans-serif',
              fontSize: '13px',
              color: '#E8DCC8',
              letterSpacing: '0.12em',
              textDecoration: 'none',
              borderBottom: '1px solid #5a4a3a',
              paddingBottom: '2px',
            }}
          >
            START A PROJECT
          </Link>
        </div>

        {/* Services */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-t"
          style={{ borderColor: '#3A2E24', maxWidth: '56rem' }}
        >
          {[
            { title: 'Copy & Content', body: 'Brand voice. Campaigns. Long-form. The words that make everything else work.' },
            { title: 'Web', body: 'Builds that are copy-first. Not dev-first. The thing most agencies get exactly wrong.' },
            { title: 'Content Strategy', body: 'SEO logic, funnel thinking, editorial systems. The bridge between what you\'re building and what it\'s supposed to do.' },
          ].map(({ title, body }) => (
            <div key={title}>
              <h2
                style={{
                  fontFamily: '"Schnyder S", Georgia, serif',
                  fontSize: '1.5rem',
                  color: '#E8DCC8',
                  marginBottom: '0.75rem',
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  fontFamily: '"Graphik", system-ui, sans-serif',
                  fontSize: '0.875rem',
                  color: '#5a4a3a',
                  lineHeight: 1.7,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
