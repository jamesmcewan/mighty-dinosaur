import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"
import { rssSchema } from "@astrojs/rss"

const postSchema = rssSchema.extend({
	draft: z.boolean().optional(),
	category: z.string().optional(),
	tags: z.array(z.string()).optional(),
	slug: z.string(),
})

export type Post = z.infer<typeof postSchema>

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: postSchema,
})

export default posts
