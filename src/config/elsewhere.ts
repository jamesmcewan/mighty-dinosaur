import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { file } from "astro/loaders"

const elsewhereSchema = z.object({
  id: z.string(),
  handle: z.string(),
  url: z.string(),
})

export type Elsewhere = z.infer<typeof elsewhereSchema>

const elsewhere = defineCollection({
  loader: file("src/content/elsewhere/elsewhere.json"),
  schema: elsewhereSchema,
})

export default elsewhere
