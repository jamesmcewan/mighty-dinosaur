import { defineCollection, z } from "astro:content"
import { file } from "astro/loaders"

const comicSchema = z.object({
  id: z.string(),
  title: z.string(),
  cover: z.string(),
  creativeTeam: z.array(z.string()),
  description: z.string().optional(),
  category: z.string(),
  rank: z.number(),
})

export type Comic = z.infer<typeof comicSchema>

const comics = defineCollection({
  loader: file("src/content/comics/comics.json"),
  schema: comicSchema,
})

export default comics
