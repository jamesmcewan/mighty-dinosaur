import siteConfig from "@/data/site-config"

function normalizePath(pathname: string): string {
  if (pathname.length === 0) {
    return "/"
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`
}

export default function getSiteUrl(pathname = "/"): string {
  return new URL(normalizePath(pathname), siteConfig.baseURL).toString()
}
