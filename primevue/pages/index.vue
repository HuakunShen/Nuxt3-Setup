<template>
  <NuxtLayout name="toast">
    <Button label="PrimeVue Toast" name="toast" @click="makeToast" />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const makeToast = () => {
  toast.add({ severity: 'info', summary: 'Hello from PrimeVue' });
};
</script>
