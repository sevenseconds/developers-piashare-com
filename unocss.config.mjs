
import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetTypography(),
  ],
  theme: {
    fontFamily: {
      'mitr': ['Mitr', 'sans-serif'],
    },
  },
})
