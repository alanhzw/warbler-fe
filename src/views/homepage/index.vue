<template>
  <div class="homepage-view">
    <!-- 鼠标粒子效果 -->
    <canvas id="canvas" class="canvas"></canvas>
    <div class="box">
      <!-- 打字机效果 -->
      <TypewriterVue class="TypewriterVue"></TypewriterVue>
      <!-- 导航图标 -->
      <transition name="fade">
        <NavIcon v-show="isShowNavIcon" type="row" class="nav-icon"></NavIcon>
      </transition>
    </div>
    <!-- 备案号 -->
    <div class="copyright" @click="gotoLink">辽ICP备2020012862号</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TypewriterVue from './components/typewriter-vue.vue';
import { renderCanvas } from './canvas';
import NavIcon from '@/components/nav-icon.vue';

// 备案号
const gotoLink = () => {
  window.open('https://beian.miit.gov.cn/');
};

const isShowNavIcon = ref(false);

onMounted(() => {
  // 渲染粒子效果
  renderCanvas();
  // 延时一秒, 等待打字机效果完成,显示导航图标
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
  @media (max-width: 700px) {
    transform: scale(0.8);
  }
}
.copyright {
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
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
