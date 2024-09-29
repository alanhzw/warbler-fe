<template>
  <div class="warbler-center">
    <!-- 第一部分 -->
    <WarblerTop></WarblerTop>
    <!-- 第二部分 -->
    <div class="warbler-center-second-part">
      <div class="warbler-center-second-part-left">
        <!-- 个人资料部分 -->
        <WarblerDetail></WarblerDetail>
      </div>
      <div class="warbler-center-second-part-right">
        <!-- 掘金部分 -->
        <WarblerJuejin> </WarblerJuejin>
        <!-- github部分 -->
        <WarblerGithub> </WarblerGithub>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WarblerTop from './component/warbler-top.vue';
import WarblerDetail from './component/warbler-detail.vue';
import WarblerJuejin from './component/warbler-juejin.vue';
import WarblerGithub from './component/warbler-github.vue';
</script>

<style lang="scss" scoped>
.warbler-center {
  width: 100%;
  height: 100%;
  padding: 32px 120px 32px 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 32px;
  overflow: overlay;
  @media (max-width: 700px) {
    padding: 16px 40px;
  }

  .warbler-center-second-part {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
    @media (max-width: 700px) {
      flex-direction: column;
      gap: 32px;
    }
    .warbler-center-second-part-left {
      flex: 0 0 30%;
    }
    .warbler-center-second-part-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }
}
</style>
