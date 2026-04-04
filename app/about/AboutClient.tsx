"use client"

import { useState } from "react"
import Image from "next/image"

const photos = ["/joedeluca0.jpg", "/joedeluca1.jpg"]

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
        <h2
          className="mb-8 leading-none"
          style={{
            fontFamily: '"Schnyder S", serif',
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            color: '#1C1714',
            lineHeight: 1.1,
          }}
        >
          Joe DeLuca
        </h2>
        <p
          className="leading-relaxed"
          style={{
            fontFamily: '"Graphik", sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#1C1714',
          }}
        >
          Senior copywriter and creative director. Agency work at Bernstein-Rein,
          VMLY&amp;R, and Temerlin McClain. Built a fleet management platform from scratch.
          Writes in English. Works in Sardinia.
        </p>

        <div className="mt-16 border-t pt-12" style={{ borderColor: '#D8D0C4' }}>
          <h2
            style={{
              fontFamily: '"Schnyder S", serif',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              color: '#1C1714',
              marginBottom: '1.25rem',
              lineHeight: 1.1,
            }}
          >
            Why a pigeon?
          </h2>
          <p style={{ fontFamily: '"Graphik", sans-serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#1C1714', maxWidth: '48ch' }}>
            Sacred to the goddess of love. The voice of Zeus, interpreted by oracles who called themselves Peleiades — and then turned into stars. My constant companions at train stations and piazze.
          </p>
          <p style={{ fontFamily: '"Graphik", sans-serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#1C1714', maxWidth: '48ch' }}>
            Sacred. Stellar. Everyday.
          </p>
        </div>

        <div className="mt-16 border-t pt-12" style={{ borderColor: '#D8D0C4' }}>
          <h2
            style={{
              fontFamily: '"Schnyder S", serif',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              color: '#1C1714',
              marginBottom: '1.25rem',
              lineHeight: 1.1,
            }}
          >
            More about me.
          </h2>
          <p style={{ fontFamily: '"Graphik", sans-serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#1C1714', maxWidth: '48ch' }}>
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
