# Nuxt 3 + Tailwind

Follow [nuxt/tailwind](https://tailwindcss.nuxtjs.org/setup)

1. `yarn add --dev @nuxtjs/tailwindcss`
2. ```js
   import { defineNuxtConfig } from 'nuxt';

   // https://v3.nuxtjs.org/api/configuration/nuxt.config
   export default defineNuxtConfig({
     modules: ['@nuxtjs/tailwindcss'],
   });
   ```

3. `npx tailwindcss init`
4. Create `~/assets/css/tailwind.css`
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
