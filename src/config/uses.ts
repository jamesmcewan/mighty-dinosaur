import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { file } from "astro/loaders"

const useSchema = z.object({
  id: z.string(),
  type: z.string(),
  item: z.string(),
  manufacturer: z.string(),
  comments: z.string().optional().default(""),
  category: z.enum([
    "setup",
    "editor",
    "ai",
    "browsers",
    "graphics",
    "built-with",
  ]),
  url: z.string().optional(),
})

export type Use = z.infer<typeof useSchema>

const uses = defineCollection({
  loader: file("src/content/uses/uses.json"),
  schema: useSchema,
})

export default uses
