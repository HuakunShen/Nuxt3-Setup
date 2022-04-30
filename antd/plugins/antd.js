import { Breadcrumb, BreadcrumbItem, Button } from 'ant-design-vue/lib';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button);
  nuxtApp.vueApp.use(Breadcrumb);
  nuxtApp.vueApp.use(BreadcrumbItem);
});



/**
 * Import Everything At Once (Large Bundle Size)
 */
// import Antd from 'ant-design-vue/lib';

// export default defineNuxtPlugin((nuxtApp) => {
// 	nuxtApp.vueApp.use(Antd);
// });
