<template>
  <iframe
    style="display: block"
    :src="domain"
    width="100%"
    height="100%"
    frameborder="0"
    background="transparent"></iframe>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const domain = computed(() => import.meta.env.VITE_WARBLER_JS_DOMAIN);
</script>

<style lang="scss" scoped></style>
