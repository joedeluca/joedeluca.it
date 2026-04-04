import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { remark } from "remark"
import remarkHtml from "remark-html"
import remarkGfm from "remark-gfm"
import { getContentBySlug, getAllContent } from "@/lib/markdown"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllContent()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getContentBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://joedeluca.it/posts/${slug}` },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getContentBySlug(slug)
  if (!post) notFound()

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(post.content)
  const html = processed.toString()

  return (
    <div style={{ backgroundColor: "#F5F0E8", minHeight: "60vh" }}>
      <div className="w-full mx-auto px-5 sm:px-8 py-16" style={{ maxWidth: "800px" }}>

        {/* Eyebrow */}
        {post.teaser && (
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            {post.teaser}
          </p>
        )}

        {/* Title */}
        <h1
          style={{
            fontFamily: '"Schnyder S", Georgia, serif',
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            color: "#1C1714",
            lineHeight: 1.05,
            marginBottom: "2.5rem",
          }}
        >
          {post.title}
        </h1>

        {/* Divider */}
        <div className="border-t mb-10" style={{ borderColor: "#D8D0C4" }} />

        {/* Body */}
        <div
          className="prose-joe"
          style={{ maxWidth: "60ch" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

      </div>
    </div>
  )
}
