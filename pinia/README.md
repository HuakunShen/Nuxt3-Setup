# Nuxt 3 + Pinia

1. `yarn add pinia` + `yarn add @pinia/nuxt`
2. Edit [`nuxt.config.js`](./nuxt.config.ts)
   ```js
   export default defineNuxtConfig({
     modules: ['@pinia/nuxt'],
   });
   ```
3. Create [`store/filters.js`](./store/filters.js) (any filename works)

   Sample Code

   ```js
   import { defineStore } from 'pinia';

   export const useFiltersStore = defineStore({
     id: 'filter-store',
     state: () => {
       return {
         filtersList: ['youtube', 'twitch'],
       };
     },
     actions: {},
     getters: {
       filtersListGetter: (state) => state.filtersList,
     },
   });
   ```

4. In any page file, import pinia store and access the store content, see [index.vue](./pages/index.vue)

   ```js
   import { storeToRefs } from 'pinia';
   import { useFiltersStore } from '~/store/filters';

   const store = useFiltersStore();

   const { filtersList } = storeToRefs(store);
   const filtersListGetter = store.filtersListGetter;
   const filtersComputed = computed(() => store.$state.filtersList);
   ```

## Reference

- [Nuxt 3 and Pinia](https://dev.to/codybontecou/nuxt-3-and-pinia-473k)
  - This doesn't fully work, I changed some code.
