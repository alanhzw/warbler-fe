<!--
 * @Author: 一尾流莺
 * @Description:网站首页
 * @Date: 2023-03-24 14:13:01
 * @LastEditTime: 2024-09-20 15:56:17
 * @FilePath: \warbler-fe\src\views\homepage\index.vue
-->
<template>
  <div class="homepage-view">
    <canvas id="canvas" class="canvas"></canvas>
    <div class="box">
      <Typewriter class="typewriter"></Typewriter>
      <transition name="fade">
        <NavIcon v-show="isShowNavIcon" type="row" class="nav-icon"></NavIcon>
      </transition>
    </div>
    <!-- <div class="copyright" @click="gotoLink">辽ICP备2020012862号</div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Typewriter from './components/typewriter.vue';
import { renderCanvas } from './canvas';
import NavIcon from '@/components/nav-icon.vue';

// const gotoLink = () => {
//   window.open('https://beian.miit.gov.cn/');
// };

const isShowNavIcon = ref(false);

onMounted(() => {
  renderCanvas();
  setTimeout(() => {
    isShowNavIcon.value = true;
  }, 1300);
});
</script>

<style lang="scss" scoped>
.homepage-view {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  z-index: 1;
}
.box {
  z-index: 2;
  display: flex;
  height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.typewriter {
  z-index: 2;
}
.nav-icon {
  z-index: 2;
}
.copyright {
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
