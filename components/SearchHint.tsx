"use client"

export default function SearchHint({ style }: { style?: React.CSSProperties }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("openSearch"))}
      style={{
        fontFamily: '"Graphik", system-ui, sans-serif',
        fontSize: "11px",
        letterSpacing: "0.12em",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        ...style,
      }}
    >
      ⌘K to search
    </button>
  )
}
