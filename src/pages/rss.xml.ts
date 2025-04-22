import { getCollection } from "astro:content"
import rss from "@astrojs/rss"
import type { RSSFeedItem } from "@astrojs/rss"
import MarkdownIt from "markdown-it"

const parser = new MarkdownIt({
	html: true,
	linkify: true,
	breaks: true,
})

parser.renderer.rules.image = (tokens, idx, options, env, self) => {
	const token = tokens[idx]
	const srcIndex = token.attrIndex("src")
	if (srcIndex === -1 || !token.attrs) {
		return self.renderToken(tokens, idx, options)
	}
	const src = token.attrs[srcIndex][1]
	const alt = token.content || ""

	const absoluteSrc = src.startsWith("http")
		? src
		: new URL(src.replace(/^\.\.\//, ""), import.meta.env.SITE).toString()

	return `<img src="${absoluteSrc}" alt="${alt}" />`
}

async function getItems(): Promise<RSSFeedItem[]> {
	// Fix: Remove the type parameter from getCollection and cast the result
	const allPosts = await getCollection("posts")
	const publishedOnly = allPosts.filter((post) => post.data.draft !== true)

	const postItems = publishedOnly.map((post) => {
		const content = parser.render(post.body)

		return {
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			content: content,
			link: `/posts/${post.slug}/`,
		}
	})

	return postItems
}

export async function GET() {
	const items = await getItems()

	return rss({
		title: "Mighty Dinosaur",
		description: "James writes stuff",
		site: import.meta.env.SITE,
		items: items,
		customData: `<language>en-gb</language>`,
		xmlns: {
			media: "http://search.yahoo.com/mrss/",
			content: "http://purl.org/rss/1.0/modules/content/",
		},
	})
}
