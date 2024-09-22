<template>
  <div class="warbler-center-juejin">
    <div class="title">GitHub</div>
    <div class="details">
      <div>获得 Star 数：278</div>
      <div>仓库总数：39</div>
      <div>提交次数：12</div>
      <div>访客数：3,688</div>
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss" scoped>
.warbler-center-juejin {
  border-radius: 4px;
  background-color: var(--warbler-bg-card);
  padding: 32px;
  flex-shrink: 0;
  .title {
    font-size: 18px;
  }
  .details {
    margin-top: 32px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    font-size: 16px;
  }
}
</style>
