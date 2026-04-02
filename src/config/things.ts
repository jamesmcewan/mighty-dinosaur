import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { file } from "astro/loaders"

const thingSchema = z.object({
  id: z.string(),
  type: z.string(),
  item: z.string(),
  manufacturer: z.string(),
  comments: z.string().optional().default(""),
  category: z.enum(["clothing", "electronics", "daily-carry"]),
})

export type Thing = z.infer<typeof thingSchema>

const things = defineCollection({
  loader: file("src/content/things/things.json"),
  schema: thingSchema,
})

export default things
