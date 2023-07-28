// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper', '@nuxtjs/i18n','@pinia/nuxt'
  ],
  i18n: {
    lazy: true,
    langDir: "locales",
    defaultLocale:"uz",
    locales:[
      {
        code:"uz",
        file:"uz.json"
      },
      {
        code:"ru",
        file:"ru.json"
      },
      {
        code:"en",
        file:"en.json"
      },
    ]
  },
  css: [
    "~/assets/scss/main.scss"
  ],
  runtimeConfig: {
    public: {
      baseUrl: 'https://controlp.iteach.uz/api',

    }
  },
  // ssr:false

})
