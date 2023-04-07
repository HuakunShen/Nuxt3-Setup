// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/eslint-module",
    "@nuxtjs/device",
    // '@nuxtjs/apollo',
    "@nuxtjs/robots",
    "nuxt-icon",
    "@nuxtjs/color-mode"
  ],
  // apollo: {},
  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: "en",
      messages: {
        en: {
          welcome: "Welcome",
        },
        fr: {
          welcome: "Bienvenue",
        },
      },
    },
  },
  robots: {},
  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: 'https://api.spacex.land/graphql'
  //     },
  //   },
  // },
  // eslint: {},
  //   modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "@nuxtjs/eslint-module", '@nuxtjs/apollo'],
  //   apollo: {
  //     clientConfigs: {
  //       default: {
  //         httpEndpoint: 'http://localhost:9559',
  //       }
  //     }
  //   }
})
