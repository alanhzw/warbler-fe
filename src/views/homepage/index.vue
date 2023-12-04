<!--
 * @Author: 一尾流莺
 * @Description:网站首页
 * @Date: 2023-03-24 14:13:01
 * @LastEditTime: 2023-12-04 09:13:17
 * @FilePath: \warbler-fe\src\views\homepage\index.vue
-->
<template>
  <div class="homepage-view">
    <canvas id="canvas" class="canvas"></canvas>
    <typewriter></typewriter>
    <div class="copyright" @click="gotoLink">辽ICP备2020012862号</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import typewriter from './components/typewriter.vue';
import { renderCanvas } from './canvas';

const gotoLink = () => {
  window.open('https://beian.miit.gov.cn/');
};

onMounted(() => {
  renderCanvas();
});
</script>

<style lang="scss" scoped>
canvas {
  display: block;
}
.copyright {
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
