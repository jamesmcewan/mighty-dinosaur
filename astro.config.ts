import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"

export default defineConfig({
  output: "static",
  site: "https://mightydinosaur.dev/",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
})
