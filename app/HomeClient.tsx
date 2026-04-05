"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import type { MarkdownContent } from "@/lib/markdown"

type Filter = "Craft" | "Marginalia"
const FILTERS: Filter[] = ["Craft", "Marginalia"]

function matchesFilter(post: MarkdownContent, filter: Filter): boolean {
  return post.category === filter
}

export default function HomeClient({ posts }: { posts: MarkdownContent[] }) {
  const searchParams = useSearchParams()
  const [activeFilters, setActiveFilters] = useState<Set<Filter>>(() => {
    const f = searchParams.get("filter") as Filter | null
    return f && FILTERS.includes(f) ? new Set([f]) : new Set()
  })
  const [visible, setVisible] = useState<MarkdownContent[]>(() => {
    const f = searchParams.get("filter") as Filter | null
    if (f && FILTERS.includes(f)) return posts.filter((p) => p.category === f)
    return posts
  })
  const listRef = useRef<HTMLDivElement>(null)

  function applyFilter(next: Set<Filter>) {
    const filtered = next.size === 0
      ? posts
      : posts.filter((p) => [...next].some((f) => matchesFilter(p, f)))

    if (!listRef.current) { setVisible(filtered); return }
    const items = listRef.current.querySelectorAll(".fade-post")
    gsap.to(items, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setVisible(filtered)
        requestAnimationFrame(() => {
          const next = listRef.current?.querySelectorAll(".fade-post")
          if (next) gsap.fromTo(next, { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: 0.07 })
        })
      },
    })
  }

  function handleFilter(f: Filter) {
    const next = new Set(activeFilters)
    next.has(f) ? next.delete(f) : next.add(f)
    setActiveFilters(next)
    applyFilter(next)
  }

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
          Senior copywriter. US agency pedigree. Works in English.
          Based in Sardinia. Available for campaigns, long-form,
          brand voice, and the kind of web copy that doesn&apos;t read
          like it was written by a committee in a hurry.
        </p>
        <div className="clear-both" />
      </div>

      {/* Filter row */}
      <div className="flex gap-6 pt-8 pb-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => handleFilter(f)}
            style={{
              fontFamily: "Garamond, \"EB Garamond\", Georgia, serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: activeFilters.has(f) ? "#1C1714" : "#A8A5A0",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontWeight: activeFilters.has(f) ? 600 : 400,
              transition: "color 0.2s",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Post list */}
      <div ref={listRef} className="py-8 pb-20 flex flex-col gap-14">
        {visible.map(({ slug, title, teaser, excerpt }) => (
          <article key={slug} className="fade-post">
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
