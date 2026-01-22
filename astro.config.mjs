import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    AstroPWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'ධම්ම පදය',
        short_name: 'ධම්ම පදය',
        description: 'ඩිජිටල් ධම්ම පදය සහ පිරිත් පොත',
        theme_color: '#6d4a43',
        background_color: '#f7f3f2',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: '/favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,json}']
      }
    })
  ],
  devToolbar: {
    enabled: false
  }
});
