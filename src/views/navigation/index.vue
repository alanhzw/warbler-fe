<!--
 * @Author: 一尾流莺
 * @Description:页面导航
 * @Date: 2023-03-24 11:03:09
 * @LastEditTime: 2023-03-26 17:59:11
 * @FilePath: \warbler-fe\src\views\navigation\index.vue
-->
<template>
  <div class="navigation-view">
    <div class="container">
      <div class="sidebar-list">
        <div
          v-for="(sidebarItem, sidebarIndex) in sidebarList"
          :key="sidebarIndex"
          class="sidebar-item cp"
          :class="{ active: sidebarIndex === currentIndex }"
          @click="jumpToClickNavBlock(sidebarIndex)">
          {{ sidebarItem }}
        </div>
      </div>
      <div class="nav-block-list">
        <div
          v-for="(blockItem, navBlockIndex) in data"
          ref="navBlockItem"
          :key="navBlockIndex"
          class="nav-block-item">
          <div class="nav-block-title fwb">{{ blockItem.title }}</div>
          <div class="nav-instance-list">
            <div
              v-for="(navItem, navIndex) in blockItem.list"
              :key="navIndex"
              class="nav-instance-item text-over-flow cp">
              <img :src="navItem.icon" class="icon" />
              <span class="name"> {{ navItem.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import data from './data';

// margin 的高度
const MARGIN_HEIGHT = 32;
// header 的高度
const HEADER_HEIGHT = 64;
// 获取所有的导航块
const navBlockItem = ref<Array<null | HTMLDivElement>>([]);
// 保存所有的导航块需要滚动的高度
const scrollHeightArr = ref<number[]>([]);
// 当前激活的导航块
const currentIndex = ref<number>(0);
// 侧边栏列表
const sidebarList = data.map((item) => item.title);

// 页面监听的滚动事件
const handleScroll = () => {
  const { scrollTop } = document.documentElement;
  // 节流函数
  requestAnimationFrame(() => {
    // 根据当前滚动的高度和每个导航块需要滚动的高度进行对比, 获取当前激活的导航块索引
    currentIndex.value = scrollHeightArr.value.findIndex((item) => scrollTop < item);
  });
};
// 计算所有导航块需要滚动的高度
const getScrollHeightArr = () => {
  navBlockItem.value.forEach((item) => {
    // 通过 getBoundingClientRect 方法, 获取每个导航块到顶部的距离
    const { top } = JSON.parse(JSON.stringify(item?.getBoundingClientRect()));
    // 因为只需要滚动到 header 下面就算切换, 而不需要完全滚动到页面之外, 所以需要去掉 header 的高度
    scrollHeightArr.value.push(top - HEADER_HEIGHT);
  });
};
// 跳转到点击的导航块
const jumpToClickNavBlock = (clickIndex: number) => {
  // 保存下点击的 index
  currentIndex.value = clickIndex;
  // 跳转到对应的导航块
  window.scrollTo({
    // 平滑过渡
    behavior: 'smooth',
    // 加上一个 margin 的距离比较好看
    top: scrollHeightArr.value[currentIndex.value] - MARGIN_HEIGHT,
  });
};
onMounted(() => {
  // 监听 navigation 的滚动事件
  window.addEventListener('scroll', handleScroll, false);
  // 在页面渲染完成后计算所有导航块需要滚动的高度
  getScrollHeightArr();
});
onBeforeUnmount(() => {
  // 在页面销毁的时候移除监听的事件
  window.removeEventListener('scroll', handleScroll, false);
});
</script>

<style lang="scss" scoped>
.navigation-view {
  padding-top: var(--warbler-header-height);
  width: 100%;
  height: 100%;

  .container {
    width: 100%;
    display: flex;

    .sidebar-list {
      @media (max-width: 640px) {
        display: none;
      }
      position: fixed;
      top: 96px;
      left: 32px;
      .sidebar-item {
        margin-bottom: 8px;
        font-size: 14px;
        &:hover {
          color: var(--warbler-brand);
        }
      }
      .active {
        color: var(--warbler-brand);
      }
    }

    .nav-block-list {
      flex: 1;
      padding-right: 48px;
      padding-left: 150px;
      @media (max-width: 640px) {
        padding-left: 48px;
      }
      display: flex;
      flex-direction: column;
      width: 100%;
      .nav-block-item {
        width: 100%;
        min-height: 100px;
        border: var(--warbler-border-1);
        border-radius: 10px;
        margin-top: 32px;
        .nav-block-title {
          border-bottom: var(--warbler-border-1);
          padding: 16px 32px;
        }
        .nav-instance-list {
          padding: 8px 32px;
          display: grid;
          justify-content: space-between;
          grid-template-columns: repeat(auto-fill, 160px);
          grid-gap: 16px;
        }
        .nav-instance-item {
          width: 160px;
          height: 32px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
          }
          .name {
            &:hover {
              color: var(--warbler-brand-dark);
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 32px;
  }
}
</style>
