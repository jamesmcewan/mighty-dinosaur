import { getEntry, render } from "astro:content"
import getSiteUrl from "@/data/get-site-url"

interface PageResult {
  title: string
  description: string
  Content: Awaited<ReturnType<typeof render>>["Content"]
  decoration: string[]
  url: string
}

async function getPage(page: string): Promise<PageResult> {
  const contentPage = await getEntry("pages", page)

  if (!contentPage) {
    throw new Error(
      `Home page content not found. Make sure src/content/pages/${page}.md exists.`
    )
  }

  const { Content } = await render(contentPage)
  const { title, description, decoration, permalink } = contentPage.data
  const normalizedPermalink = permalink.replace(/^\/+|\/+$/g, "")
  const path = normalizedPermalink.length > 0 ? `/${normalizedPermalink}/` : "/"
  const url = getSiteUrl(path)
  const decorationImages = Array.isArray(decoration) ? decoration : ["james"]

  return { title, description, Content, decoration: decorationImages, url }
}

export default getPage
