<script lang="ts" setup>
import { useCounterStore } from '~/stores/counter'

const colorMode = useColorMode()
const { locale } = useI18n()

const counterStore = useCounterStore();
const { count, name } = counterStore
// const { isMobile } = useDevice();

setInterval(() => {
  counterStore.increment()
}, 1000)

onMounted(() => {
  console.log(colorMode.preference)

})


// graphql

// const query = gql`
//   query getShips($limit: Int!) {
//     ships(limit: $limit) {
//       id
//       name
//     }
//   }
// `
// const variables = { limit: 5 }
// const { data } = await useAsyncQuery(query, variables)
</script>
<template>
  <div class="mx-5">
    <div>{{ count }}</div>
    <div>{{ counterStore.count }}</div>
    <div>{{ name }}</div>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="fr">fr</option>
    </select>
    <p>{{ $t('welcome') }}</p>
    <span class="text-5xl">
      <Icon name="🚀" />
    </span>
    <Icon class="text-5xl" name="uil:github" />
    <Icon class="text-5xl" name="logos:nuxt-icon" />
    <div><span class="text-red-500 text-4xl">Tailwind</span></div>
    <div class="text-3xl dark:text-blue-600 text-gray-950">
      <div v-if="$device.isDesktop">
        Desktop
      </div>
      <div v-else-if="$device.isTablet">
        Tablet
      </div>
      <div v-else>
        Mobile
      </div>
    </div>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </div>
</template>
