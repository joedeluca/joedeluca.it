import type { Metadata } from "next"
import { Suspense } from "react"
import { getSortedPostsData } from "@/lib/posts"
import HomeClient from "./HomeClient"

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
  const posts = getSortedPostsData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div style={{ backgroundColor: "#F5F0E8", minHeight: "calc(100vh - 10rem)" }}>
        <div className="w-full mx-auto px-5 sm:px-8" style={{ maxWidth: "800px" }}>
          <Suspense>
            <HomeClient posts={posts} />
          </Suspense>
        </div>
      </div>
    </>
  )
}
