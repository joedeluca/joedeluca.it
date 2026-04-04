"use client"

import { useState } from "react"
import Image from "next/image"

const photos = ["/joedeluca0.jpg", "/joedeluca1.jpg"]

export default function AboutClient() {
  const [photo] = useState(() => photos[Math.floor(Math.random() * photos.length)])

  return (
    <div className="min-h-screen flex flex-col items-center px-8 pb-48 pt-24">
      <div className="max-w-lg w-full">
        <Image
          src={photo}
          alt="Joe DeLuca"
          width={256}
          height={256}
          className="w-48 h-48 lg:w-64 lg:h-64 object-cover aspect-square mb-10"
          priority
        />
        <h1
          className="mb-8 leading-none"
          style={{
            fontFamily: '"Schnyder S", serif',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            color: '#E8DCC8',
          }}
        >
          Joe DeLuca
        </h1>
        <p
          className="leading-relaxed"
          style={{
            fontFamily: '"Graphik", sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#DEDAD4',
          }}
        >
          Senior copywriter and creative director. Agency work at Bernstein-Rein,
          VMLY&amp;R, and Temerlin McClain. Built a fleet management platform from scratch.
          Writes in English. Works in Sardinia.
        </p>
      </div>
    </div>
  )
}
