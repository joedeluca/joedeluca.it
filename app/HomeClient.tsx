"use client"

import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/ContactForm"
import type { MarkdownContent } from "@/lib/markdown"

const SECTION_LABEL: React.CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "#A8A5A0",
  marginBottom: "1.5rem",
}

const SECTION_TITLE: React.CSSProperties = {
  fontFamily: '"Schnyder S", Georgia, serif',
  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
  color: "#1C1714",
  lineHeight: 1.1,
  marginBottom: "0.75rem",
}

const SECTION_DIVIDER: React.CSSProperties = {
  borderTop: "1px solid #D8D0C4",
  paddingTop: "3rem",
  marginTop: "3rem",
}

export default function HomeClient({ posts }: { posts: MarkdownContent[] }) {
  return (
    <>
      {/* Intro */}
      <div className="pt-12 pb-12 border-b overflow-hidden lg:flex lg:gap-6 lg:items-start" style={{ borderColor: "#D8D0C4" }}>
        <Image
          src="/oed.png"
          alt=""
          width={160}
          height={360}
          className="float-left mr-6 mb-2 lg:float-none lg:flex-shrink-0"
          style={{ objectFit: "contain", maxHeight: "clamp(220px, 45vw, 360px)", width: "auto" }}
        />
        <div style={{ paddingTop: "1rem", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
          <p style={{ margin: 0 }}>
            In my first interview for a copywriter job the group creative director looked at my poems and said, "These are lovely, but can you inhabit the Hamburglar?"
            I said, I <em>think</em> so. I was smiling. She was not smiling. I hadn&apos;t suffered enough to get inside the Hamburglar and she smelled it immediately.
          </p>
          <Link href="/about" className="btn-outline" style={{ alignSelf: "flex-end" }}>
            Continue →
          </Link>
        </div>
      </div>

      {/* Writing */}
      <div style={{ paddingTop: "3rem" }}>
        <p style={SECTION_LABEL}>Writing</p>
        <div className="flex flex-col gap-14">
          {posts.map(({ slug, title, teaser, excerpt }) => (
            <article key={slug}>
              <Link href={`/posts/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                  {teaser}
                </p>
                <h2 style={SECTION_TITLE}>{title}</h2>
                <p style={{ maxWidth: "55ch" }}>{excerpt}</p>
              </Link>
            </article>
          ))}
          <Link href="/blog" className="btn-outline">
            All writing →
          </Link>
        </div>
      </div>

      {/* Services */}
      <div style={SECTION_DIVIDER}>
        <p style={SECTION_LABEL}>Services</p>
        <h2 style={SECTION_TITLE}>
          <Link href="/services" style={{ textDecoration: "none", color: "inherit" }}>
            What I Do
          </Link>
        </h2>
        <p style={{ maxWidth: "55ch" }}>
          Campaigns, brand voice, long-form, web copy. The full list, with context.
        </p>
        <Link href="/services" className="btn-outline" style={{ marginTop: "1rem" }}>
          View services →
        </Link>
      </div>

      {/* Contact */}
      <div style={{ ...SECTION_DIVIDER, paddingBottom: "5rem" }}>
        <p style={SECTION_LABEL}>Contact</p>
        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 200px" }}>
            <h2 style={SECTION_TITLE}>Get in touch</h2>
            <p style={{ maxWidth: "30ch" }}>Available for projects. Drop a line.</p>
          </div>
          <div style={{ flex: "2 1 300px" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
