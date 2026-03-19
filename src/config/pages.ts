import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  decoration: z.array(z.string()).default(["james"]),
  type: z.string().optional(),
  date: z.date().optional(),
  lastmod: z.date().optional(),
  permalink: z.string(),
})

export type Page = z.infer<typeof pageSchema>

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: pageSchema,
})

export default pages
