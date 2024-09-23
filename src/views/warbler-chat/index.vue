<template>
  <div class="warbler-chat">
    <!-- 介绍 -->
    <VueIntroduction></VueIntroduction>
    <!-- 数据表格 -->
    <VueTable></VueTable>
  </div>
</template>

<script setup lang="ts">
import VueTable from './component/vue-table.vue';
import VueIntroduction from './component/vue-introduction.vue';
</script>

<style lang="scss" scoped>
.warbler-chat {
  padding-top: var(--warbler-header-height);
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 32px 120px 32px 120px;
  display: flex;
  flex-direction: column;
}
</style>
