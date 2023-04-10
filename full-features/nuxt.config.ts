// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    // "@nuxtjs/eslint-module",
    "@nuxtjs/device",
    '@nuxtjs/apollo',
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
  apollo: {
    clients: {
      default: './apollo/default.ts',
      github: {
        httpEndpoint: 'https://api.github.com/graphql',
        tokenStorage: 'localStorage',
      },
      todos: {
        httpEndpoint: 'https://nuxt-gql-server-2gl6xp7kua-ue.a.run.app/query',
        wsEndpoint: 'wss://nuxt-gql-server-2gl6xp7kua-ue.a.run.app/query',
        httpLinkOptions: {
          headers: {
            'X-CUSTOM-HEADER': 123,
          },
        },
      },
    },
  },
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
