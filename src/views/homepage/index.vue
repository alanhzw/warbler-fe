<!--
 * @Author: 一尾流莺
 * @Description:网站首页
 * @Date: 2023-03-24 14:13:01
 * @LastEditTime: 2023-03-27 11:18:24
 * @FilePath: \warbler-fe\src\views\homepage\index.vue
-->
<template>
  <div class="homepage-view">
    <canvas id="canvas" class="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { renderCanvas } from './canvas';

onMounted(() => {
  renderCanvas();
});
</script>

<style lang="scss" scoped>
canvas {
  display: block;
}
</style>
