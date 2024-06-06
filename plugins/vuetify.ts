// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#6613D0",
            secondary: "#FE8F1C", 
          }
        },
      },
    }
  })
  app.vueApp.use(vuetify)
})
