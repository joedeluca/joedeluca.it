"use client"

import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/ContactForm"
import type { MarkdownContent } from "@/lib/markdown"


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
      <div className="pt-12 pb-12 border-b" style={{ borderColor: "#D8D0C4" }}>
        {/* Mobile: float. Desktop: side by side flex */}
        <div className="md:hidden">
          <Image
            src="/oed.png"
            alt=""
            width={160}
            height={360}
            className="float-left max-sm:pr-2 mr-5 mb-2"
            style={{ objectFit: "contain", maxHeight: "200px", width: "auto" }}
          />
          <p>
            In my first interview for a copywriter job the group creative director looked at my poems and said, "These are lovely, but can you inhabit the Hamburglar?"
            I said, I <em>think</em> so. I was smiling. She was not smiling. I hadn&apos;t suffered enough to get inside the Hamburglar and she smelled it immediately.
          </p>
          <div className="clear-both" />
          <Link href="/about" className="btn-outline w-fit" style={{ marginTop: "1rem", display: "inline-block" }}>Continue</Link>
        </div>
        <div className="hidden md:flex gap-8 items-start">
          <Image
            src="/oed.png"
            alt=""
            width={160}
            height={360}
            style={{ objectFit: "contain", maxHeight: "360px", width: "auto", flexShrink: 0 }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "1rem" }}>
            <p style={{ margin: 0 }}>
              In my first interview for a copywriter job the group creative director looked at my poems and said, "These are lovely, but can you inhabit the Hamburglar?"
              I said, I <em>think</em> so. I was smiling. She was not smiling. I hadn&apos;t suffered enough to get inside the Hamburglar and she smelled it immediately.
            </p>
            <Link href="/about" className="btn-outline" style={{ display: "inline-block" }}>Continue</Link>
          </div>
        </div>
      </div>

      {/* Writing */}
      <div style={{ paddingTop: "3rem" }}>
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
          <Link href="/blog" className="btn-outline" style={{ alignSelf: "flex-start" }}>
            All writing
          </Link>
        </div>
      </div>

      {/* Services */}
      <div style={SECTION_DIVIDER}>
        <h2 style={SECTION_TITLE}>
          <Link href="/services" style={{ textDecoration: "none", color: "inherit" }}>
            What I Do
          </Link>
        </h2>
        <p style={{ maxWidth: "55ch" }}>
          Campaigns, brand voice, long-form, web copy. The full list, with context.
        </p>
        <Link href="/services" className="btn-outline" style={{ marginTop: "1rem" }}>
          View services        </Link>
      </div>

      {/* Contact */}
      <div style={{ ...SECTION_DIVIDER, paddingBottom: "5rem" }}>
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
