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
    <div class="gender-and-city-charts">
      <!-- 性别分布图 -->
      <ChartGender></ChartGender>
      <!-- 城市分布图 -->
      <ChartCity></ChartCity>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueTable from './component/vue-table.vue';
import VueIntroduction from './component/vue-introduction.vue';
import VueRankingList from './component/vue-ranking-list.vue';
import VueAuth from './component/vue-auth.vue';
import ChartGender from './component/chart-gender.vue';
import ChartCity from './component/chart-city.vue';
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
  .gender-and-city-charts {
    width: 100%;
    display: grid;
    grid-template-rows: 500px;
    grid-template-columns: 1fr 1fr;
    flex-shrink: 0;
    margin-top: 32px;
    gap: 32px;
    @media (max-width: 1200px) {
      grid-template-rows: 500px 500px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
