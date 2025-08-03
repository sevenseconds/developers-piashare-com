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
  integrations: [
    unocss({
      injectReset: true,
    }),
  ],
});
