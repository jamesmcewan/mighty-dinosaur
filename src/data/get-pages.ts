import { getCollection } from "astro:content"
import type { CollectionEntry } from "astro:content"

type Page = CollectionEntry<"page">

async function getPages(): Promise<Page[]> {
  const pagesCollection = await getCollection(
    "pages",
    (page) => page.data.permalink !== "/" && page.data.permalink !== "404"
  )
  if (!pagesCollection || pagesCollection.length === 0) {
    throw new Error("No pages found. Make sure it exists.")
  }

  const pages = pagesCollection.sort((a, b) => {
    const aTitle = a.data.title
    const bTitle = b.data.title

    if (!aTitle || !bTitle) {
      throw new Error("Page missing title")
    }

    return aTitle.localeCompare(bTitle)
  })

  return pages
}

export default getPages
