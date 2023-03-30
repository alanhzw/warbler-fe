<!--
 * @Author: 一尾流莺
 * @Description:头部导航菜单
 * @Date: 2023-03-24 14:21:26
 * @LastEditTime: 2023-03-30 15:27:02
 * @FilePath: \warbler-fe\src\components\nav-menu.vue
-->

<template>
  <div class="nav-menu">
    <div class="mask"></div>
    <div class="logo cp" @click="goToHome">
      <div class="logo-img-box">
        <img src="https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg" class="logo-img" />
      </div>
      <div class="logo-title fwb">Warbler-FE</div>
    </div>
    <div class="navs">
      <div
        v-for="(nav, index) in navs"
        :key="index"
        :class="{ active: index === currentNav }"
        class="nav cp"
        @click="changeCurrentNab(index, nav.path)">
        {{ nav.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// 当前激活的 Tab
const currentNav = ref(-1);
// 点击 Tab 切换页面
const changeCurrentNab = (clickIndex: number, path: string) => {
  currentNav.value = clickIndex;
  router.push({ path });
};
// 回到首页
const goToHome = () => {
  router.push({ path: '/' });
  currentNav.value = -1;
};

// 导航列表
const navs = [
  {
    title: '前端导航',
    path: '/navigation',
  },
  {
    title: 'warbler-js',
    path: '/warbler/js',
  },
  {
    title: 'warbler-cli',
    path: '/warbler/cli',
  },
  {
    title: '数据中心',
    path: '/dataCenter',
  },
  {
    title: '一尾流莺',
    path: '/warblerCenter',
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

    .logo-img-box {
      width: 32px;
      height: 32px;
    }
    .logo-img {
      width: 100%;
      height: 100%;
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
