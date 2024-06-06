import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  css: ['~/assets/scss/main.scss'],
  modules: ['nuxt-icon','nuxt-icons',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@use "~/assets/scss/__variables.scss" as *;'
        }
      }
    }
  },
})
