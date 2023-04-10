<!--
 * @Author: 一尾流莺
 * @Description:一尾流莺
 * @Date: 2023-03-29 10:55:54
 * @LastEditTime: 2023-04-10 22:03:48
 * @FilePath: \warbler-fe\src\views\warblerCenter\index.vue
-->
<template>
  <div class="warbler-center">
    <div class="layout">
      <left-vue></left-vue>
      <middle-vue></middle-vue>
      <right-vue class="right-vue"></right-vue>
    </div>
  </div>
</template>

<script setup lang="ts">
import leftVue from './component/left-vue.vue';
import middleVue from './component/middle-vue.vue';
import rightVue from './component/right-vue.vue';
</script>

<style lang="scss" scoped>
@media (max-width: 1500px) {
  .right-vue {
    display: none;
  }
}
.warbler-center {
  display: flex;
  padding-top: var(--warbler-header-height);
  width: 100%;
  height: 100%;
  min-height: 600px;
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 32px;
  }
}
</style>
