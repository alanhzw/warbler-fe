<template>
  <iframe
    ref="iframe"
    style="display: block"
    :src="domain"
    width="100%"
    allow="clipboard-read;clipboard-write"
    height="100%"
    frameborder="0"
    background="transparent"></iframe>
  <div v-if="loading" class="spinner-box">
    <div class="spinner"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

const domain = computed(() => import.meta.env.VITE_WARBLER_JS_DOMAIN);
const iframe = ref<null | HTMLElement>(null);
const loading = ref(true);
onMounted(() => {
  iframe.value!.onload = () => {
    loading.value = false;
  };
});
</script>

<style lang="scss" scoped>

</style>
