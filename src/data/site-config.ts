export interface Link {
  name: string
  url: string
  image?: string
  description?: string
}

export interface SocialLink {
  service: string
  handle: string
  url: string
}

export interface SiteConfig {
  baseURL: string
  languageCode: string
  title: string
  author: string
  image: string
  subtitle: string
  description: string
  favicons: number[]
  appletouch: number[]
  android: number[]
  maker: Link[]
  tooling: Link[]
}

const siteConfig: SiteConfig = {
  baseURL: "https://mightydinosaur.dev/",
  languageCode: "en-gb",
  title: "Mighty Dinosaur",
  author: "James McEwan",
  subtitle: "James McEwan is a mighty dinosaur",
  description:
    "James McEwan is a developer and creative based in Edinburgh, Scotland",
  favicons: [16, 32, 96, 128, 196],
  appletouch: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180],
  android: [192, 512],
  image: "https://static.mightydinosaur.dev/mighty.webp",
  maker: [
    {
      name: "James McEwan draws!",
      url: "https://draws.mightydinosaur.dev/",
      image: "https://static.mightydinosaur.dev/draws-logo-background.svg",
      description: "Some of my illustrations",
    },
  ],
  tooling: [
    {
      name: "Astro",
      url: "https://astro.build/",
    },
    {
      name: "TailwindCSS",
      url: "https://tailwindcss.com/",
    },
  ],
}

export default siteConfig
