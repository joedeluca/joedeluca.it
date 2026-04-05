import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

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

const articles = [
  {
    slug: "the-client-who-wanted-friendly",
    title: "The Client Who Wanted to Sound Friendly",
    teaser: "Approachable",
    excerpt: "There is a word that ends careers. Not loudly. It just shows up in the brief, third paragraph, underlined, and from that point forward the copy is already dead.",
  },
  {
    slug: "sardinian-summer-german-brief",
    title: "Sardinian Summer, German Brief",
    teaser: "Forty degrees",
    excerpt: "The brief arrived at 2pm on a Thursday in August. Eight pages. Tracked changes still visible. I was on a terrace in Quartucciu eating a peach.",
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div style={{ backgroundColor: "#F5F0E8", minHeight: "calc(100vh - 10rem)" }}>
        <div className="w-full mx-auto px-5 sm:px-8" style={{ maxWidth: "800px" }}>

          {/* Intro */}
          <div className="pt-24 pb-12 border-b" style={{ borderColor: "#D8D0C4" }}>
            <Image
              src="/oed.png"
              alt=""
              width={160}
              height={360}
              className="float-left mr-8 mb-2"
              style={{ objectFit: "contain", maxHeight: "360px", width: "auto" }}
            />
            <p style={{ maxWidth: "52ch", fontSize: "1.75rem", paddingTop: "3rem" }}>
              Senior copywriter. US agency pedigree. Works in English.
              Based in Sardinia. Available for campaigns, long-form,
              brand voice, and the kind of web copy that doesn&apos;t read
              like it was written by a committee in a hurry.
            </p>
            <div className="clear-both" />
          </div>

          {/* Articles */}
          <div className="py-14 pb-20 flex flex-col gap-14">
            {articles.map(({ slug, title, teaser, excerpt }) => (
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
                  <p style={{ maxWidth: "55ch" }}>
                    {excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
