// @ts-check
import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  site: 'https://developers.piashare.com',
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'catppuccin-frappe',
    },
    rehypePlugins: [rehypeSlug],
  },
  integrations: [
    unocss({
      injectReset: true,
    }),
  ],
});
