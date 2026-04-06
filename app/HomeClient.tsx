"use client"

import Link from "next/link"
import Image from "next/image"
import type { MarkdownContent } from "@/lib/markdown"

export default function HomeClient({ posts }: { posts: MarkdownContent[] }) {
  return (
    <>
      {/* Intro */}
      <div className="pt-24 pb-12 border-b" style={{ borderColor: "#D8D0C4" }}>
        <Image
          src="/oed.png"
          alt=""
          width={160}
          height={360}
          className="float-left mr-6 mb-2"
          style={{ objectFit: "contain", maxHeight: "clamp(220px, 45vw, 360px)", width: "auto" }}
        />
        <p style={{ maxWidth: "52ch", paddingTop: "1rem" }}>
          In my first interview for a copywriter job the group creative director looked at my poems and said, "These are lovely, but can you inhabit the Hamburglar?"
          I said, I <em>think</em> so. I was smiling. She was not smiling. I hadn&apos;t suffered enough to get inside the Hamburglar and she smelled it immediately.
        </p>
        <div className="clear-both" />
      </div>

      {/* Post list */}
      <div className="py-8 pb-20 flex flex-col gap-14">
        {posts.map(({ slug, title, teaser, excerpt }) => (
          <article key={slug}>
            <Link href={`/posts/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                {teaser}
              </p>
              <h2
                style={{
                  fontFamily: '"Schnyder S", Georgia, serif',
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  color: "#1C1714",
                  lineHeight: 1.1,
                  marginBottom: "0.75rem",
                }}
              >
                {title}
              </h2>
              <p style={{ maxWidth: "55ch" }}>{excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </>
  )
}
