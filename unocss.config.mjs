
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
  shortcuts: {
    'line-clamp-2': 'overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box]',
  },
})
