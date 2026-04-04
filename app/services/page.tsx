import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Copywriting, creative direction, brand voice, and web by Joe DeLuca.",
  alternates: { canonical: "https://joedeluca.it/services" },
}

const services = [
  {
    title: "Brand Voice",
    body: "I figure out what a company actually sounds like when it's at its best — and write the document that keeps it that way. This is the work that happens before anything else. Without it, every piece of copy is a coin flip.\n\nDone this for Playmoove from scratch. Did it for HyperPedal. It holds.",
  },
  {
    title: "Copy",
    body: "Websites. Campaigns. Long-form. Thought leadership that actually leads somewhere. Product naming. The kind of writing that makes the thing it's describing feel inevitable.\n\nI've worked at Bernstein-Rein, VMLY&R, and Temerlin McClain. I know what a real brief looks like and I know what to do when one doesn't exist.",
  },
  {
    title: "Web",
    body: "I build sites. Not as a developer who writes copy on the side, and not as a copywriter who hands off to a developer and hopes for the best. The writing and the build are the same conversation. This is unusual. It's also the only way to make something that holds together.\n\nNext.js, Vue, whatever the project needs.",
  },
  {
    title: "The Integrated Thing",
    body: "Sometimes a company needs all of it — voice, copy, and a site that actually expresses it. That's the best version of this work. One person, one continuous thought, beginning to end.\n\nThis is what I'd rather be doing.",
  },
  {
    title: "What I Don't Do",
    body: "Content farms. Keyword stuffing. Anything that mistakes volume for value. If your brief has the word \u201clearnings\u201d in it we should probably talk before we sign anything.",
  },
]

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#F5F0E8", minHeight: "60vh" }}>
      <div className="w-full mx-auto px-5 sm:px-8 py-16" style={{ maxWidth: "800px" }}>

        {/* Intro */}
        <div className="pb-16 border-b" style={{ borderColor: "#D8D0C4" }}>
          <h1
            style={{
              fontFamily: '"Schnyder S", Georgia, serif',
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              color: "#1C1714",
              lineHeight: 1.05,
              marginBottom: "2rem",
            }}
          >
            Services
          </h1>
          <p style={{ maxWidth: "58ch" }}>
            Nobody&rsquo;s talking to each other. The copy gets poured into a container it was never meant for. The result sounds like it was written by a committee that had already given up.
          </p>
          <p style={{ maxWidth: "58ch" }}>
            That&rsquo;s the problem. Here&rsquo;s what I do instead.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-0">
          {services.map(({ title, body }) => (
            <div key={title} className="border-b py-12" style={{ borderColor: "#D8D0C4" }}>
              <h2
                style={{
                  fontFamily: '"Schnyder S", Georgia, serif',
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  color: "#1C1714",
                  marginBottom: "1rem",
                  lineHeight: 1.1,
                }}
              >
                {title}
              </h2>
              {body.split("\n\n").map((para, i) => (
                <p key={i} style={{ maxWidth: "58ch" }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="pt-12" style={{ maxWidth: "58ch", opacity: 0.6 }}>
          Based in Sardinia. Works in English. Available for the right project anywhere.
        </p>

      </div>
    </div>
  )
}
