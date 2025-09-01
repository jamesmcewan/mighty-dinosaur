---
title: Uses
permalink: uses
lastmod: 2022-06-24T16:52:12.234Z
type: default
description: Things I use to build this
decoration: ["james"]
date: 2022-05-17T23:10:18.811Z
---

## Setup

For the last twenty or so years, I've been a Mac person, prior to that, a die-hard PC fan, but I fell in love with Unix-flavoured operating systems.

At the moment, I use a 13in M1 MacBook Pro for work and a 15in M2 MacBook Air personally.

I also keep a Dell laptop around when I want to play with Linux distros - these days, I'm using Fedora with Gnome. I love the idea of Arch and Nix, but time management is not my strong suit, and those are rabbit holes.

![Macbook Air Laptop](https://img.mightydinosaur.dev/posts/macbook-air.avif)

Recently, I've been experimenting with a homelab setup, really just a couple of Raspberry Pi units with [Runtipi](https://runtipi.io) installed on them to manage Docker containers. I'm finding I like being able to run certain services in my own environment and using [Tailscale](https://tailscale.com) as a private VPN to access externally.

### Editor

![Macintosh desktop with a terminal window containing the neovim editor](https://img.mightydinosaur.dev/posts/neovim-rose-pine.avif)

I live in the terminal these days. My editor of choice is Vim, more specifically Neovim.

For me, after getting over the learning curve (which admittedly was _years_), the modal style of editing finally clicked, and now I find it the most efficient way to work with text.

- editor: [Neovim](https://neovim.io/) w/[LazyVim config](https://www.lazyvim.org/)
- terminal emulator: [Ghostty](https://ghostty.org/)
- terminal multiplexer: [tmux](https://github.com/tmux/tmux)
- shell: [zsh](https://www.zsh.org/) with [Oh-My-Zsh](https://ohmyz.sh/) and [Starship prompt](https://starship.rs/)
- fonts: [Berkeley Mono](https://berkeleygraphics.com/typefaces/berkeley-mono/)
- theme of choice: [Tokyo Night - Night](https://github.com/folke/tokyonight.nvim)
  Of course, sometimes It's easier to use a desktop app, I'm really enjoying [Zed](https://zed.dev), a new editor from the folks behind Atom.

## Other tools

- browser: [Safari](https://apple.com/safari) - Honestly pretty much covers everything I need from a browser these days and features wise it's catching up.

## Built with

This site uses [Astro](https://astro.build) as the framework of choice. I love the build speed, and the Astro templating language is great.

Styling wise, I'm using [Tailwind CSS](https://tailwindcss.com), which I've been using for a while now. As an old CSS hand, it took me a while to get used to the utility-first approach, but now I find it a great way to work for me.

Everything holds together with [Bun](https://bun.sh).

Hosting, CDN, and DNS handled through [Bunny.net](https://bunny.net) - they're a fantastic EU based platform and great alternative to big tech. For any apps [fly.io](https://fly.io) is my provider of choice, they have a lovely cli tool for managing apps.
