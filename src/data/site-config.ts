export interface Link {
  name: string;
  url: string;
}

export interface SocialLink {
  service: string;
  handle: string;
  url: string;
}

export interface SiteConfig {
  baseURL: string;
  languageCode: string;
  title: string;
  author: string;
  image: string;
  subtitle: string;
  description: string;
  favicons: number[];
  appletouch: number[];
  android: number[];
  pages: Link[];
  elsewhere: SocialLink[];
  maker: Link[];
  tooling: Link[];
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
  image: "https://mightydinosaur.dev/images/mighty.webp",
  pages: [
    {
      name: "Uses",
      url: "/uses",
    },
  ],
  elsewhere: [
    {
      service: "github",
      handle: "jamesmcewan",
      url: "https://github.com/jamesmcewan",
    },
    {
      service: "bsky",
      handle: "@mightydinosaur.dev",
      url: "https://bsky.app/profile/mightydinosaur.dev",
    },
    {
      service: "makerworld",
      handle: "@mightydinosaur",
      url: "https://makerworld.com/en/@mightydinosaur",
    },
    {
      service: "printables",
      handle: "@Mightydino_2075078",
      url: "https://www.printables.com/@Mightydino_2075078",
    },
    {
      service: "masto",
      handle: "@mcwn@social.lol",
      url: "https://social.lol/@mcwn",
    },
    {
      service: "linkedin",
      handle: "jamesmcewan",
      url: "https://www.linkedin.com/in/jamesmcewan/",
    },
    {
      service: "letterboxd",
      handle: "mcwn",
      url: "https://letterboxd.com/mcwn/",
    },
    {
      service: "insta",
      handle: "jamesmcewan",
      url: "https://www.instagram.com/jamesmcewan/",
    },
  ],
  maker: [
    {
      name: "draws",
      url: "https://draws.mightydinosaur.dev/",
    },
    {
      name: "comics",
      url: "https://comics.mightydinosaur.dev/",
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
};

export default siteConfig;
