<template>
  <div class="warbler-chat">
    <VueTable></VueTable>
  </div>
</template>

<script setup lang="ts">
import VueTable from './component/vue-table.vue';
</script>

<style lang="scss" scoped>
.warbler-chat {
  padding-top: var(--warbler-header-height);
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 32px 84px 32px 124px;
  display: flex;
  flex-direction: column;
}
</style>
