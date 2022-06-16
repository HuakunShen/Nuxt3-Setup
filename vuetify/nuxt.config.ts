import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["mdi/css/materialdesignicons.min.css", "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    // define: {
    //   "process.env.DEBUG": false,
    // },
  }
});
