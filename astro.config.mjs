// @ts-check
import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://my-first-astro-blog-josehb96.netlify.app",
  integrations: [vue()]
});