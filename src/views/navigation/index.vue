<template>
  <div class="navigation-view">
    <div class="container">
      <div class="navigation-type-list">
        <div
          v-for="(navigationTypeItem, navigationTypeIndex) in navigationTypeList"
          :key="navigationTypeIndex"
          class="navigation-type-item cp"
          :class="{ 'navigation-type-item-active': navigationTypeIndex === currentIndex }"
          @click="jumpToClickNavBlock(navigationTypeIndex)">
          {{ navigationTypeItem }}
        </div>
      </div>
      <div class="nav-block-list">
        <div ref="navigation" class="nav-block-list-wrap">
          <template v-for="(blockItem, navBlockIndex) in data">
            <div
              v-if="!blockItem.isPrivate || isShowPrivate"
              ref="navBlockItem"
              :key="navBlockIndex"
              class="nav-block-item">
              <div class="nav-block-title">
                {{ blockItem.title }}
              </div>
              <div class="nav-instance-list">
                <div
                  v-for="(navItem, navIndex) in blockItem.list"
                  :key="navIndex"
                  class="nav-instance-item text-over-flow">
                  <div class="curser-part cp" @click="handleGoToLink(navItem.link)">
                    <img
                      v-if="!navItem.iconErrorText"
                      :src="navItem.icon"
                      class="icon"
                      @error="handlerImgError(navBlockIndex, navIndex, navItem.name)" />
                    <div v-else class="icon-error-text">
                      {{ navItem.iconErrorText }}
                    </div>
                    <span class="name"> {{ navItem.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <BackTop @handle-back-top="handleBackTop"></BackTop>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import data from './data';
import BackTop from '@/components/back-top.vue';

const route = useRoute();
// margin 的高度
const MARGIN_HEIGHT = 32;
// 获取整个页面元素(除header外)
const navigation = ref<null | HTMLDivElement>(null);
// 获取所有的导航块
const navBlockItem = ref<Array<null | HTMLDivElement>>([]);
// 保存所有的导航块需要滚动的高度
const scrollHeightArr = ref<number[]>([]);
// 当前激活的导航块
const currentIndex = ref<number>(0);
// 是否显示私有部分
const isShowPrivate = computed(() => route.query.private || false);
// 侧边栏列表
const navigationTypeList = computed(() => {
  let res = [];
  if (isShowPrivate.value) {
    res = data.value.map((item) => item.title);
  } else {
    res = data.value.filter((item) => !item.isPrivate).map((item) => item.title);
  }
  return res;
});

// 页面监听的滚动事件
const handleScroll = (e: Event) => {
  const { scrollTop } = e.target as HTMLDivElement;
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
    scrollHeightArr.value.push(top);
  });
};
// 跳转到点击的导航块
const jumpToClickNavBlock = (clickIndex: number) => {
  console.log('🚀🚀 ~ jumpToClickNavBlock ~ scrollHeightArr.value:', scrollHeightArr.value);
  // 保存下点击的 index
  currentIndex.value = clickIndex;
  // 跳转到对应的导航块
  navigation.value?.scrollTo({
    // 平滑过渡
    behavior: 'smooth',
    // 加上一个 margin 的距离比较好看
    top: scrollHeightArr.value[currentIndex.value] - MARGIN_HEIGHT,
  });
};

// 回到顶部
const handleBackTop = () => {
  navigation.value?.scrollTo({
    // 平滑过渡
    behavior: 'smooth',
    // 加上一个 margin 的距离比较好看
    top: 0,
  });
};

// 图片发生错误的时候替换词名字的第一个字
const handlerImgError = (navBlockIndex: number, navIndex: number, name: string) => {
  const [changeName] = name;
  data.value[navBlockIndex].list[navIndex].iconErrorText = changeName;
};

// 跳转到对应的连接
const handleGoToLink = (link: string) => {
  window.open(link);
};

onMounted(() => {
  // 监听 navigation 的滚动事件
  navigation.value?.addEventListener('scroll', handleScroll, false);
  // 在页面渲染完成后计算所有导航块需要滚动的高度
  nextTick(() => {
    getScrollHeightArr();
  });
});
onBeforeUnmount(() => {
  // 在页面销毁的时候移除监听的事件
  navigation.value?.removeEventListener('scroll', handleScroll, false);
});
</script>

<style lang="scss" scoped>
.navigation-view {
  width: 100%;
  height: 100%;
  padding: 32px 84px 32px 124px;
  flex-direction: column;
  @media (max-width: 700px) {
    padding: 16px 40px;
  }

  ::v-deep(.back-top) {
    position: fixed;
    right: 16px;
    bottom: 32px;
    @media (max-width: 700px) {
      transform: scale(0.6);
      right: 0px;
      bottom: 10px;
    }
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 32px;

    .navigation-type-list {
      border-radius: 4px;
      background-color: var(--warbler-bg-card);
      padding: 16px;
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(1, 180px);
      grid-gap: 16px;
      overflow: auto;
      &::-webkit-scrollbar {
        // 隐藏滚动条
        display: none;
      }
      @media (max-width: 700px) {
        display: none;
      }

      .navigation-type-item {
        text-align: center;
        display: inline-block;
        font-size: 14px;
        color: #696cff;
        border-color: rgba(0, 0, 0, 0);
        background: #35365f;
        padding: 6px 12px;
        border-radius: 4px;
        &:hover {
          background-color: #696cff7e;
        }
        &-active {
          background-color: #696cff !important;
          color: #fff !important;
        }
      }
      .active {
        color: var(--warbler-brand);
      }
    }

    .nav-block-list {
      flex: 1;
      position: relative;
      .nav-block-list-wrap {
        display: flex;
        overflow: auto;
        flex-direction: column;
        gap: 32px;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        &::-webkit-scrollbar {
          // 隐藏滚动条
          display: none;
        }
      }

      .nav-block-item {
        width: 100%;
        border-radius: 4px;
        background-color: var(--warbler-bg-card);
        .nav-block-title {
          border-bottom: 1px solid rgba(105, 108, 255, 0.3);
          padding: 16px 32px;
          font-size: 18px;
        }
        .nav-instance-list {
          padding: 16px 32px;
          display: grid;
          justify-content: space-between;
          grid-template-columns: repeat(auto-fill, 200px);
          grid-gap: 10px;
        }
        .nav-instance-item {
          height: 32px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .curser-part {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
          }
          .icon-error-text {
            width: 20px;
            height: 20px;
            margin-right: 8px;
            text-align: center;
            line-height: 20px;
            background-color: var(--warbler-brand-dark);
            border-radius: 50%;
            font-size: 12px;
          }
          .name {
            font-size: 14px;
            &:hover {
              color: #696cff;
            }
          }
        }
      }
    }
  }
}
</style>
