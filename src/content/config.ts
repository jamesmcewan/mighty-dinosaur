import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const postSchema = rssSchema.extend({
	draft: z.boolean().optional(),
	category: z.string().optional(),
	tags: z.array(z.string()).optional(),
});

export type Post = z.infer<typeof postSchema>;

const pageSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	decoration: z.array(z.string()).optional(),
	type: z.string().optional(),
	date: z.date().optional(),
	lastmod: z.date().optional(),
	permalink: z.string().optional(),
});

export type Page = z.infer<typeof pageSchema>;

const posts = defineCollection({
	schema: postSchema,
});

const pages = defineCollection({
	schema: pageSchema,
});

export const collections = { posts, pages };
