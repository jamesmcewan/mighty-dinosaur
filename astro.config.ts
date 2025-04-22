import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://mightydinosaur.dev/",
  vite: {
    plugins: [tailwindcss()],
  },
});
