<template>
  <iframe
    :src="domain"
    style="display: block"
    background="transparent"
    width="100%"
    height="100%"
    frameborder="0"></iframe>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const domain = computed(() => import.meta.env.VITE_WARBLER_CLI_DOMAIN);
</script>

<style lang="scss" scoped></style>
