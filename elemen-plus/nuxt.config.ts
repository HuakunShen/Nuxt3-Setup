import { defineNuxtConfig } from 'nuxt';

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['element-plus/dist/index.css'],
  // build: {transpile: ['element-plus']}
  build: {
    transpile: lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
  },
  // ssr: false
});
