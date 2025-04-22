import { getCollection } from "astro:content"
import type { CollectionEntry } from "astro:content"

type Post = CollectionEntry<"posts">

async function getPosts(max: number): Promise<Post[]> {
	const postsCollection = await getCollection(
		"posts",
		({ data }) => data.draft !== true,
	)

	if (!postsCollection || postsCollection.length === 0) {
		throw new Error("No posts found. Make sure src/content/posts/*.md exists.")
	}

	const posts = postsCollection.sort((a, b) => {
		const aDate = a.data.pubDate as Date
		const bDate = b.data.pubDate as Date

		if (!aDate || !bDate) {
			throw new Error("Post missing publish date")
		}

		return bDate.valueOf() - aDate.valueOf()
	})

	return posts.slice(0, max)
}

export default getPosts
