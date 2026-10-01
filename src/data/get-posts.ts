import { getCollection } from "astro:content"
import type { CollectionEntry } from "astro:content"

type Post = CollectionEntry<"posts">

async function getPosts(max?: number): Promise<Post[]> {
  const postsCollection = await getCollection(
    "posts",
    ({ data }) => data.draft !== true
  )

  const posts = postsCollection.toSorted((a, b) => {
    const aDate = a.data.pubDate?.valueOf() ?? 0
    const bDate = b.data.pubDate?.valueOf() ?? 0
    return bDate - aDate
  })

  if (typeof max === "number") {
    return posts.slice(0, max)
  }

  return posts
}

export default getPosts
