import type { Metadata } from "next"
import { Suspense } from "react"
import { getSortedPostsData } from "@/lib/posts"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays, field notes, and marginalia on copywriting, language, and the occasional Italian summer.",
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div style={{ backgroundColor: "#F5F0E8", minHeight: "calc(100vh - 10rem)" }}>
      <div className="w-full mx-auto px-5 sm:px-8" style={{ maxWidth: "800px" }}>
        <Suspense>
          <BlogClient posts={posts} />
        </Suspense>
      </div>
    </div>
  )
}
