import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Joe DeLuca — senior copywriter and creative director based in Sardinia.",
  alternates: { canonical: "https://joedeluca.it/contact" },
}

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#F5F0E8", minHeight: "60vh" }}>
      <div className="w-full mx-auto px-5 sm:px-8 py-16" style={{ maxWidth: "800px" }}>
        <h1
          style={{
            fontFamily: '"Schnyder S", Georgia, serif',
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            color: "#1C1714",
            lineHeight: 1.05,
            marginBottom: "2rem",
          }}
        >
          Start a project.
        </h1>
        <p style={{ maxWidth: "48ch", marginBottom: "3rem" }}>
          Available for copywriting, creative direction, brand voice, and web
          copy. US agency pedigree. Works in English. Based in Sardinia.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}
