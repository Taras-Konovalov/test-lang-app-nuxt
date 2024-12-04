import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify', '~/components/ui/FaceBookBtn.vue'],
  },
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'nuxt-delay-hydration',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Helvetica: [700],
      Roboto: [500]
    },
    display: 'swap'
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    "~/assets/style/main.scss",
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['vue'],
      global: true,
    },
  ],
  ssr: true,
})