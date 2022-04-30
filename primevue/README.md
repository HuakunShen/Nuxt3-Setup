# Nuxt 3 + PrimeVUE

1. `npm install primeicons --save` and `npm install primevue --save`
2. Create `plugins/primevue.js`, fill in

   ```js
   import { defineNuxtPlugin } from '#app';
   import PrimeVue from 'primevue/config';
   import Button from 'primevue/button';
   import Toast from 'primevue/toast';
   import ToastService from 'primevue/toastservice';

   export default defineNuxtPlugin((nuxtApp) => {
     nuxtApp.vueApp.use(PrimeVue, { ripple: true });
     nuxtApp.vueApp.use(ToastService);
     nuxtApp.vueApp.component('Button', Button);
     nuxtApp.vueApp.component('Toast', Toast);
     //other components that you need
   });
   ```

3. In `nuxt.config.js`, add

   ```js
   export default defineNuxtConfig({
     css: [
       'primevue/resources/themes/saga-blue/theme.css',
       'primevue/resources/primevue.css',
       'primeicons/primeicons.css',
     ],
     build: {
       transpile: ['primevue'],
     },
   });
   ```
4. I also added a Prime Vue Toast example with layout, so that any pages/components can make toasts.
