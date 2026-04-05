"use client"

import { useEffect } from "react"

export default function HeaderHeightSetter() {
  useEffect(() => {
    const header = document.querySelector("header")
    if (!header) return
    const set = () => {
      document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px")
    }
    set()
    window.addEventListener("resize", set)
    window.addEventListener("scroll", set, { passive: true })
    return () => {
      window.removeEventListener("resize", set)
      window.removeEventListener("scroll", set)
    }
  }, [])
  return null
}
