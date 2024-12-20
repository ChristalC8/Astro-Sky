import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://christals-site.vercel.app/",
  integrations: [mdx(), sitemap()],
  build: {
    assets: "assets",
  },
});

