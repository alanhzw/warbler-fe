<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2023-04-11 14:42:05
 * @LastEditTime: 2023-04-12 21:25:57
 * @FilePath: \warbler-fe\src\views\warblerCenter\part\left-part.vue
-->
<template>
  <div class="left-part">
    <resume-warbler></resume-warbler>
  </div>
</template>

<script setup lang="ts">
import resumeWarbler from '../component/resume-warbler.vue';
</script>

<style lang="scss" scoped>
.left-part {
  @media (max-width: 900px) {
    display: none;
  }
  width: 250px;
  height: 100%;
  background-color: var(--warbler-bg-soft);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  overflow: auto;
  position: relative;
  &::-webkit-scrollbar {
    // 隐藏滚动条
    display: none;
  }
}
</style>
