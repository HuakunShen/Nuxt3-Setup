// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    // "@nuxtjs/eslint-module",
    "@nuxtjs/device",
    // '@nuxtjs/apollo',
    "@nuxtjs/robots",
    "nuxt-icon"
  ],
  i18n: {},
  robots: {},
  // eslint: {},
  //   modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "@nuxtjs/eslint-module", '@nuxtjs/apollo'],
  //   apollo: {
  //     clientConfigs: {
  //       default: {
  //         httpEndpoint: 'http://localhost:9559',
  //       }
  //     }
  //   }
});
