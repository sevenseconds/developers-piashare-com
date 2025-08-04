// @ts-check
import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';

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
  },
  integrations: [
    unocss({
      injectReset: true,
    }),
  ],
});
