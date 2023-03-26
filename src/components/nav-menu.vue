<!--
 * @Author: 一尾流莺
 * @Description:头部导航菜单
 * @Date: 2023-03-24 14:21:26
 * @LastEditTime: 2023-03-26 18:15:13
 * @FilePath: \warbler-fe\src\components\nav-menu.vue
-->

<template>
  <div class="nav-menu">
    <div class="mask"></div>
    <div class="logo cp">
      <img src="https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg" class="logo-img" />
      <div class="logo-title fwb">Warbler-FE</div>
    </div>
    <div class="navs">
      <div
        v-for="(nav, index) in navs"
        :key="index"
        :class="{ active: index === currentNav }"
        class="nav cp"
        @click="changeCurrentNab(index)">
        {{ nav.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentNav = ref(-1);
const changeCurrentNab = (clickIndex: number) => {
  if (![1, 2].includes(clickIndex)) currentNav.value = clickIndex;
};

const navs = [
  {
    title: '前端导航',
    link: '',
  },
  {
    title: 'warbler-cli',
    link: '',
  },
  {
    title: 'warbler-js',
    link: '',
  },
  {
    title: '数据中心',
    link: '',
  },
  {
    title: '一尾流莺',
    link: '',
  },
];
</script>

<style lang="scss" scoped>
.nav-menu {
  width: 100%;
  height: var(--warbler-header-height);
  position: fixed;
  top: 0;
  .mask {
    width: 100%;
    height: 100%;
    background-color: var(--warbler-bg-half-opacity);
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    backdrop-filter: blur(12px);
  }
  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 32px;
    .logo-img {
      height: 32px;
    }
    .logo-title {
      font-size: 24px;
      margin-left: 8px;
      background: linear-gradient(-60deg, #8700ff 0, #ff009e 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .navs {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 48px;
    .nav {
      margin-left: 16px;
      &:hover {
        color: var(--warbler-brand);
      }
    }
    .active {
      color: var(--warbler-brand);
    }
  }
}
</style>
