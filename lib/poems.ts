import fs from "fs"
import path from "path"
import matter from "gray-matter"

const poemsDirectory = path.join(process.cwd(), "poems")

export interface Poem {
  slug: string
  title: string
  author?: string
  date: string
  epigraph?: string
  content: string
  audioUrl?: string
  tags: string[]
}

function getAllPoemFiles(dir: string = poemsDirectory): string[] {
  const files: string[] = []

  if (!fs.existsSync(dir)) {
    return files
  }

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...getAllPoemFiles(fullPath))
    } else if (item.endsWith(".md")) {
      files.push(fullPath)
    }
  }

  return files
}

function parsePoemFile(filePath: string): Poem {
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  const relativePath = path.relative(poemsDirectory, filePath)
  const slug = relativePath.replace(/\.md$/, "").replace(/\\/g, "/")

  return {
    slug,
    title: data.title || "",
    author: data.author || undefined,
    date: data.date ? String(data.date) : "",
    epigraph: data.epigraph || undefined,
    content,
    audioUrl: data.audioUrl || undefined,
    tags: data.tags || [],
  }
}

export function getAllPoems(): Poem[] {
  const files = getAllPoemFiles()
  const poems = files.map(parsePoemFile)

  return poems.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPoemBySlug(slug: string): Poem | null {
  try {
    const filePath = path.join(poemsDirectory, `${slug}.md`)
    if (!fs.existsSync(filePath)) return null
    return parsePoemFile(filePath)
  } catch {
    return null
  }
}
