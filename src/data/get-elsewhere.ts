import { getCollection } from "astro:content"
import type { CollectionEntry } from "astro:content"

type Elsewhere = CollectionEntry<"elsewhere">

async function getElsewhere(): Promise<Elsewhere[]> {
  return getCollection("elsewhere")
}

export default getElsewhere
