"use client"

import { useState } from "react"

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "transparent",
  border: "1px solid #C8B89A",
  color: "#1C1714",
  fontFamily: "Graphik, system-ui, sans-serif",
  fontSize: "0.9rem",
  resize: "none",
  outline: "none",
}

export default function ContactForm() {
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const MAX_CHARS = 10000
  const wordCount = message.trim().split(/\s+/).filter((w) => w.length > 0).length

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value.slice(0, MAX_CHARS))
    if (status !== "idle") { setStatus("idle"); setErrorMessage("") }
  }

  const handleSend = async () => {
    if (wordCount < 3 || isSending) return
    setIsSending(true)
    setStatus("idle")
    setErrorMessage("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        setErrorMessage(err.error || "Failed to send")
        setStatus("error")
        return
      }
      setStatus("success")
      setMessage("")
    } catch {
      setErrorMessage("Network error — please try again")
      setStatus("error")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#A8A5A0", textTransform: "uppercase" }}>
        {wordCount} {wordCount === 1 ? "word" : "words"}
      </span>
      <div style={{ position: "relative" }}>
        <textarea
          value={message}
          onChange={handleChange}
          rows={6}
          placeholder="Your message. Include your name and email if you'd like a reply."
          style={INPUT_STYLE}
          disabled={isSending}
          spellCheck={false}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#1C1714")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#C8B89A")}
        />
        {isSending && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(245,240,232,0.8)" }}>
            <div style={{ width: 24, height: 24, border: "2px solid #C8B89A", borderTopColor: "#1C1714", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
          </div>
        )}
      </div>

      {status === "error" && (
        <p style={{ fontSize: "0.75rem", color: "#b91c1c" }}>{errorMessage}</p>
      )}

      <button
        onClick={handleSend}
        disabled={wordCount < 3 || isSending}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: wordCount < 3 || isSending ? "transparent" : "#1C1714",
          color: wordCount < 3 || isSending ? "#A8A5A0" : "#F5F0E8",
          border: "1px solid",
          borderColor: wordCount < 3 || isSending ? "#C8B89A" : "#1C1714",
          fontFamily: "Graphik, system-ui, sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          cursor: wordCount < 3 || isSending ? "not-allowed" : "pointer",
          transition: "all 0.2s",
        }}
      >
        {isSending ? "Sending…" : status === "success" ? "Sent." : status === "error" ? "Try again" : wordCount < 3 ? "3 word minimum" : "Send"}
      </button>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
