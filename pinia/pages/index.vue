<template>
  <NuxtLayout>
    <div>
      <h1>Pinia</h1>
      <h2>storeToRefs</h2>
      <code>const { filtersList } = storeToRefs(store);</code>
      <p>{{ filtersList }}</p>

      <h2>Pinia Getter</h2>
      <code>const filtersListGetter = store.filtersListGetter;</code>
      <p>{{ filtersListGetter }}</p>

      <h2><code>store.$state</code></h2>
      <code>store.$state.filtersList</code>
      <p>{{ store.$state.filtersList }}</p>

      <h2>Computed</h2>
      <code>const filtersComputed = computed(() => store.$state.filtersList);</code>
      <p>{{ filtersComputed }}</p>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFiltersStore } from '~/store/filters';

const store = useFiltersStore();

const { filtersList } = storeToRefs(store);
const filtersListGetter = store.filtersListGetter;
const filtersComputed = computed(() => store.$state.filtersList);
</script>
