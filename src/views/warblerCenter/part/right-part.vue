<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2023-04-11 14:42:05
 * @LastEditTime: 2023-04-11 15:22:01
 * @FilePath: \warbler-fe\src\views\warblerCenter\part\right-part.vue
-->
<template>
  <div class="right-part">
    <resume-skills></resume-skills>
    <resume-link></resume-link>
  </div>
</template>

<script setup lang="ts">
import resumeSkills from '../component/resume-skills.vue';
import resumeLink from '../component/resume-link.vue';
</script>

<style lang="scss" scoped>
.right-part {
  flex: 1;
  margin-left: 16px;
  height: 100%;
  background-color: var(--warbler-bg-soft);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  overflow: auto;
  &::-webkit-scrollbar {
    // 隐藏滚动条
    display: none;
  }

  @media (max-width: 1500px) {
    display: none;
  }
}
</style>
