<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  name: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
