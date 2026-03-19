import { getCollection } from "astro:content"
import type { CollectionEntry } from "astro:content"

type Page = CollectionEntry<"pages">

async function getPages(): Promise<Page[]> {
  const pagesCollection = await getCollection(
    "pages",
    (page) => page.data.permalink !== "/" && page.data.permalink !== "404"
  )
  const pages = pagesCollection.toSorted((a, b) =>
    a.data.title.localeCompare(b.data.title)
  )

  return pages
}

export default getPages
