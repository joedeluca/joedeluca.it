"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"

export default function SearchBox() {
  const [query, setQuery] = useState("")
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Marble frame */}
      <div
        style={{
          backgroundImage: "url('/light-marble.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "18px 0",
        }}
      >
        <div className="flex items-center" style={{ background: "#F5F0E8" }}>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the collection..."
            style={{
              background: "transparent",
              width: "100%",
              border: "none",
              padding: "18px 28px",
              fontFamily: '"Schnyder S", Georgia, serif',
              fontSize: "1.25rem",
              letterSpacing: "0.03em",
              color: "#1C1714",
              outline: "none",
            }}
          />
          {query && (
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                padding: "0 24px",
                cursor: "pointer",
                fontFamily: '"Graphik", system-ui, sans-serif',
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "#5a4a3a",
              }}
            >
              GO
            </button>
          )}
        </div>
      </div>
    </form>
  )
}
