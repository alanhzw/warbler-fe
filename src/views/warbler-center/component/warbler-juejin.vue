<template>
  <div class="warbler-center-juejin">
    <div class="title">掘金</div>
    <div class="details">
      <div>文章阅读数：667,305</div>
      <div>文章点赞数：10,813</div>
      <div>文章评论数：2,976</div>
      <div>文章收藏数：15,173</div>
      <div>已发布文章数：138</div>
      <div>总粉丝数：3,658</div>
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
  .title {
    font-size: 18px;
  }
  .details {
    margin-top: 32px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
    grid-gap: 16px;
    font-size: 16px;
  }
}
</style>
