<template>
  <div class="warbler-chat">
    <!-- 介绍 -->
    <VueIntroduction></VueIntroduction>
    <!-- 权限认证 -->
    <VueAuth></VueAuth>
    <!-- 数据表格 -->
    <VueTable></VueTable>
    <!-- 排行榜 -->
    <VueRankingList></VueRankingList>
  </div>
</template>

<script setup lang="ts">
import VueTable from './component/vue-table.vue';
import VueIntroduction from './component/vue-introduction.vue';
import VueRankingList from './component/vue-ranking-list.vue';
import VueAuth from './component/vue-auth.vue';
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
  @media (max-width: 700px) {
    padding: 16px 40px;
  }
}
</style>
