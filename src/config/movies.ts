import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { file } from "astro/loaders"

const movieSchema = z.object({
  id: z.string(),
  title: z.string(),
  poster: z.string(),
  description: z.string().optional(),
  rank: z.number(),
  year: z.number(),
  link: z.string(),
})

export type Movie = z.infer<typeof movieSchema>

const movies = defineCollection({
  loader: file("src/content/movies/movies.json"),
  schema: movieSchema,
})

export default movies
