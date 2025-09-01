import { defineCollection, z } from "astro:content"
import { glob, file } from "astro/loaders" // Not available with legacy API
import { rssSchema } from "@astrojs/rss"

const postSchema = rssSchema.extend({
	draft: z.boolean().optional(),
	category: z.string().optional(),
	tags: z.array(z.string()).optional(),
	slug: z.string(),
})

export type Post = z.infer<typeof postSchema>

const pageSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	decoration: z.array(z.string()).optional(),
	type: z.string().optional(),
	date: z.date().optional(),
	lastmod: z.date().optional(),
	permalink: z.string().optional(),
})

export type Page = z.infer<typeof pageSchema>

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: postSchema,
})

const pages = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
	schema: pageSchema,
})

const movieSchema = z.object({
	id: z.string(),
	title: z.string(),
	poster: z.string(),
	description: z.string().optional(),
	rank: z.number(),
})

export type Movie = z.infer<typeof movieSchema>

const movies = defineCollection({
	loader: file("src/content/movies/movies.json"),
	schema: movieSchema,
})

const musicSchema = z.object({
	id: z.string(),
	title: z.string(),
	cover: z.string(),
	artist: z.string(),
	description: z.string().optional(),
	rank: z.number(),
})

export type Music = z.infer<typeof movieSchema>

const music = defineCollection({
	loader: file("src/content/music/music.json"),
	schema: musicSchema,
})

const comicSchema = z.object({
	id: z.string(),
	title: z.string(),
	cover: z.string(),
	creativeTeam: z.array(z.string()),
	description: z.string().optional(),
	rank: z.number(),
})

export type Comic = z.infer<typeof movieSchema>

const comics = defineCollection({
	loader: file("src/content/comics/comics.json"),
	schema: comicSchema,
})

export const collections = { posts, pages, movies, music, comics }
