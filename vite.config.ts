import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('picture')) {
          return new URLSearchParams({
            format: 'avif;webp;png',
            w: '800;1600;2400',
            as: 'picture',
          })
        }
        return new URLSearchParams()
      },
    }),
  ],
})

export default config
