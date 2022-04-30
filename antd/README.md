# Nuxt 3 + Ant Design Vue

1. `npm i --save ant-design-vue`
2. Add `css:['ant-design-vue/dist/antd.css']` to `nuxt.config.js`
3. Create `plugins/antd.js`, fill in the following configuration

   ### Import All Components

   ```js
   import Antd from 'ant-design-vue/lib';
   export default defineNuxtPlugin((nuxtApp) => {
     nuxtApp.vueApp.use(Antd);
   });
   ```

   ### Import Individual Components

   ```js
   import { Breadcrumb, BreadcrumbItem, Button } from 'ant-design-vue/lib';
   import { defineNuxtPlugin } from '#app';

   export default defineNuxtPlugin((nuxtApp) => {
     nuxtApp.vueApp.use(Button);
     nuxtApp.vueApp.use(Breadcrumb);
     nuxtApp.vueApp.use(BreadcrumbItem);
   });
   ```
