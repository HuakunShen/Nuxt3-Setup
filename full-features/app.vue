<script lang="ts">
const { isMobile } = useDevice();
</script>
<template>
  <div>
    <span class="text-5xl">
      <Icon name="🚀" />
    </span>
    <Icon class="text-5xl" name="uil:github" />
    <Icon class="text-5xl" name="logos:nuxt-icon" />
    <div><span class="text-red-500 text-4xl">Tailwind</span></div>
    <!-- <NuxtWelcome /> -->
    <div class="text-3xl">
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
  </div>
</template>
