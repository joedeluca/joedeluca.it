"use client"

import { useState } from "react"
import Image from "next/image"

const photos = ["/joedeluca0.jpg", "/joedeluca1.jpg"]

const pStyle: React.CSSProperties = {
  fontFamily: '"Graphik", sans-serif',
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  color: '#1C1714',
}

const h2Style: React.CSSProperties = {
  fontFamily: '"Schnyder S", serif',
  fontWeight: 700,
  fontSize: 'clamp(1.8rem, 5vw, 3rem)',
  color: '#1C1714',
  marginBottom: '1rem',
  lineHeight: 1.1,
}

export default function AboutClient() {
  const [photo] = useState(() => photos[Math.floor(Math.random() * photos.length)])

  return (
    <div className="min-h-screen flex flex-col items-center px-5 sm:px-8 pb-48 pt-12" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="w-full" style={{ maxWidth: "800px" }}>

        {/* Intro */}
        <div>
          <h2 className="leading-none mb-6" style={h2Style}>The (not) Hunger Artist</h2>
          <Image
            src="/hamburgers.png"
            alt=""
            width={320}
            height={320}
            className="float-right ml-8 mb-4"
            style={{ objectFit: "contain", width: "auto", maxHeight: "1600px" }}
          />
          <p style={pStyle}>
            Not that suffering is required to write good copy, or that I hadn&rsquo;t suffered plenty at that point. It was that I couldn&rsquo;t understand a man whose entire raison d&rsquo;&ecirc;tre was pilfering hamburgers. I couldn&rsquo;t see the one fundamental thing about the Hamburglar. He wasn&rsquo;t hungry. A hungry man who steals food is comprehensible, forgivable, almost noble. The Hamburglar stole hamburgers he couldn&rsquo;t possibly eat. He lived in McDonaldland, a place of pure abundance. Ronald was right there. The hamburgers were everywhere and free. There was no scarcity.
          </p>
          <p style={{ ...pStyle, marginTop: '1rem' }}>
            So what was the real problem? He needed to take the thing that wasn&rsquo;t his. The possession wasn&rsquo;t the point — the transgression was. He wore a hat and a cape and a mask not because he needed to evade capture but because the costume was the identity. Remove the theft and what was left? He was the act of stealing, not a person who stole.
          </p>
          <p style={{ ...pStyle, marginTop: '1rem' }}>
            A perfect psychological portrait for a fast food mascot. A man whose entire self is organized around a compulsion that has nothing to do with need. Who would disappear entirely if you gave him everything he wanted.
          </p>
          <p style={{ ...pStyle, marginTop: '1rem' }}>
            And that is what you have to inhabit to write good copy. Not the hunger — the compulsion. The thing that makes someone reach for something they can&rsquo;t entirely explain. That&rsquo;s where every purchase decision actually lives. Not in the rational mind. In the Hamburglar.
          </p>
           <p style={{ ...pStyle, marginTop: '1rem' }}>The group creative director saw through me. She knew the only releveant question and I couldn't convince her that I had the answer. I absolutely could not inhabit the Hamburglar. The difference now is that I would choose not to. The hamburglar was a glutton, a libertine. An artifact of a bygone era that should 100% stay bygone.</p>
        </div>

        {/* Pigeons */}
        <div style={{ marginTop: '2rem' }}>
          <h2 style={h2Style}>What&apos;s with the pigeons?</h2>
          <Image
            src="/pigeon.png"
            alt=""
            width={160}
            height={160}
            className="float-right ml-8 mb-4"
            style={{ objectFit: 'contain', minHeight: '160px', width: 'auto' }}
          />
          <p style={pStyle}>
            Sacred to the goddess of love. The voice of Zeus, interpreted by oracles who called themselves Peleiades — and then turned into stars. My constant companions at train stations and piazze.
          </p>
          <p style={pStyle}>Sacred. Stellar. Everyday.</p>
          <div className="clear-both" />
        </div>

        {/* More about me */}
        <div style={{ marginTop: '2rem' }}>
          <h2 style={h2Style}>More about me.</h2>
          <Image
            src={photo}
            alt="Joe DeLuca"
            width={200}
            height={200}
            className="float-left mr-8 mb-4 object-cover aspect-square"
            style={{ width: 200, height: 200 }}
            priority
          />
          <p style={pStyle}>
            I also write fiction, poetry, and criticism under the name Leo Bruno at{' '}
            <a href="https://leobruno.it" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid #9A8878' }}>leobruno.it</a>
            {' '}— a literary magazine of one, covering the things that don&rsquo;t fit anywhere else. If you want to know how I actually think before hiring me, I recommend starting with{' '}
            <a href="https://www.leobruno.it/bifidus" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid #9A8878' }}>this short piece about cookies</a>.
          </p>
          <div className="clear-both" />
        </div>

      </div>
    </div>
  )
}
