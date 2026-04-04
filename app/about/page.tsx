import type { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior copywriter and creative director. US agency pedigree. Works in English. Based in Sardinia, Italy.",
  alternates: {
    canonical: "https://joedeluca.it/about",
  },
  openGraph: {
    title: "About — Joe DeLuca",
    description:
      "Senior copywriter and creative director. Based in Sardinia.",
    url: "https://joedeluca.it/about",
    type: "profile",
  },
}

export default function AboutPage() {
  return <AboutClient />
}
