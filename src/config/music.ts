import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { file } from "astro/loaders"

const musicSchema = z.object({
  id: z.string(),
  title: z.string(),
  cover: z.string(),
  artist: z.string(),
  description: z.string().optional(),
  rank: z.number(),
})

export type Music = z.infer<typeof musicSchema>

const music = defineCollection({
  loader: file("src/content/music/music.json"),
  schema: musicSchema,
})

export default music
