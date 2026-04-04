import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work by Joe DeLuca — copywriter and creative director.",
  alternates: { canonical: "https://joedeluca.it/work" },
}

export default function WorkPage() {
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
          Selected work.
        </h1>
        <p style={{ maxWidth: "48ch" }}>
          Cases, campaigns, and copy worth keeping. Coming soon.
        </p>
      </div>
    </div>
  )
}
