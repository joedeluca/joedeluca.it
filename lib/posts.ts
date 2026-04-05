import path from "path"
import { getMarkdownContent, getAllContent, type MarkdownContent } from "@/lib/markdown"

const postsDirectory = path.join(process.cwd(), "posts")

export async function getPostData(slug: string): Promise<MarkdownContent> {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  return getMarkdownContent(filePath)
}

export function getSortedPostsData(): MarkdownContent[] {
  return getAllContent()
}
