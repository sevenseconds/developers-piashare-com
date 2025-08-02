// @ts-check
import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://developers.piashare.com',
  integrations: [
    unocss({
      injectReset: true,
    }),
  ],
});
