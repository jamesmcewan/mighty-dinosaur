import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"

export default defineConfig({
  output: "static",
  site: "https://mightydinosaur.dev/",
  trailingSlash: "always",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },

  vite: {
    // Astro and Tailwind currently resolve Vite types from different module paths.
    plugins: [tailwindcss() as any],
  },

  integrations: [mdx()],
})
