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
    <div className="min-h-screen flex flex-col items-center px-8 pb-48 pt-24" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-lg w-full">

        <Image
          src={photo}
          alt="Joe DeLuca"
          width={256}
          height={256}
          className="w-48 h-48 lg:w-64 lg:h-64 object-cover aspect-square mb-10"
          priority
        />

        {/* Single unified block */}
        <div>
          <h2 className="leading-none mb-6" style={h2Style}>Joe DeLuca</h2>
          <p style={pStyle}>
            Senior copywriter and creative director. Agency work at Bernstein-Rein,
            VMLY&amp;R, and Temerlin McClain. Built a fleet management platform from scratch.
            Writes in English. Works in Sardinia.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <Image
              src="/oed.png"
              alt=""
              width={160}
              height={200}
              className="float-right ml-8 mb-4"
              style={{ objectFit: 'contain', minHeight: '200px', width: 'auto' }}
            />
            <h2 style={h2Style}>Why a pigeon?</h2>
            <p style={pStyle}>
              Sacred to the goddess of love. The voice of Zeus, interpreted by oracles who called themselves Peleiades — and then turned into stars. My constant companions at train stations and piazze.
            </p>
            <p style={pStyle}>Sacred. Stellar. Everyday.</p>
            <div className="clear-both" />
          </div>

          <h2 style={{ ...h2Style, marginTop: '2rem' }}>More about me.</h2>
          <p style={pStyle}>
            I also write fiction, poetry, and criticism under the name Leo Bruno at{' '}
            <a href="https://leobruno.it" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid #9A8878' }}>leobruno.it</a>
            {' '}— a literary magazine of one, covering the things that don&rsquo;t fit anywhere else. If you want to know how I actually think before hiring me, I recommend starting with{' '}
            <a href="https://www.leobruno.it/bifidus" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid #9A8878' }}>this short piece about cookies</a>.
          </p>
        </div>

      </div>
    </div>
  )
}
