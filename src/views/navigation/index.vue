<!--
 * @Author: 一尾流莺
 * @Description:页面导航
 * @Date: 2023-03-24 11:03:09
 * @LastEditTime: 2023-05-23 14:00:09
 * @FilePath: \warbler-fe\src\views\navigation\index.vue
-->
<template>
  <div ref="navigation"
       class="navigation-view">
    <div class="container">
      <div class="sidebar-list">
        <div v-for="(sidebarItem, sidebarIndex) in sidebarList"
             :key="sidebarIndex"
             class="sidebar-item cp"
             :class="{ active: sidebarIndex === currentIndex }"
             @click="jumpToClickNavBlock(sidebarIndex)">
          {{ sidebarItem }}
        </div>
      </div>
      <div class="nav-block-list">
        <template v-for="(blockItem, navBlockIndex) in data">
          <div v-if="!blockItem.isPrivate || isShowPrivate"
               ref="navBlockItem"
               :key="navBlockIndex"
               class="nav-block-item">
            <div class="nav-block-title fwb">{{ blockItem.title }}</div>
            <div class="nav-instance-list">
              <div v-for="(navItem, navIndex) in blockItem.list"
                   :key="navIndex"
                   class="nav-instance-item text-over-flow">
                <div class="curser-part cp"
                     @click="handleGoToLink(navItem.link)">
                  <img v-if="!navItem.iconErrorText"
                       :src="navItem.icon"
                       class="icon"
                       @error="handlerImgError(navBlockIndex, navIndex, navItem.name)" />
                  <div v-else
                       class="icon-error-text">{{ navItem.iconErrorText }}</div>
                  <span class="name"> {{ navItem.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import data from './data'

const route = useRoute()
// margin 的高度
const MARGIN_HEIGHT = 32
// header 的高度
const HEADER_HEIGHT = 64
// 获取整个页面元素(除header外)
const navigation = ref<null | HTMLDivElement>(null)
// 获取所有的导航块
const navBlockItem = ref<Array<null | HTMLDivElement>>([])
// 保存所有的导航块需要滚动的高度
const scrollHeightArr = ref<number[]>([])
// 当前激活的导航块
const currentIndex = ref<number>(0)
// 侧边栏列表
const sidebarList = computed(() => data.value.map((item) => item.title))

// 是否显示私有部分
const isShowPrivate = computed(() => route.query.private || false)
console.log('🚀🚀 ~ isShowPrivate:', isShowPrivate)

// 页面监听的滚动事件
const handleScroll = (e: Event) => {
  const { scrollTop } = e.target as HTMLDivElement
  // 节流函数
  requestAnimationFrame(() => {
    // 根据当前滚动的高度和每个导航块需要滚动的高度进行对比, 获取当前激活的导航块索引
    currentIndex.value = scrollHeightArr.value.findIndex(
      (item) => scrollTop < item,
    )
  })
}
// 计算所有导航块需要滚动的高度
const getScrollHeightArr = () => {
  navBlockItem.value.forEach((item) => {
    // 通过 getBoundingClientRect 方法, 获取每个导航块到顶部的距离
    const { top } = JSON.parse(JSON.stringify(item?.getBoundingClientRect()))
    // 因为只需要滚动到 header 下面就算切换, 而不需要完全滚动到页面之外, 所以需要去掉 header 的高度
    scrollHeightArr.value.push(top - HEADER_HEIGHT)
  })
}
// 跳转到点击的导航块
const jumpToClickNavBlock = (clickIndex: number) => {
  // 保存下点击的 index
  currentIndex.value = clickIndex
  // 跳转到对应的导航块
  navigation.value?.scrollTo({
    // 平滑过渡
    behavior: 'smooth',
    // 加上一个 margin 的距离比较好看
    top: scrollHeightArr.value[currentIndex.value] - MARGIN_HEIGHT,
  })
}

// 图片发生错误的时候替换词名字的第一个字
const handlerImgError = (
  navBlockIndex: number,
  navIndex: number,
  name: string,
) => {
  const [changeName] = name
  data.value[navBlockIndex].list[navIndex].iconErrorText = changeName
}

// 跳转到对应的连接
const handleGoToLink = (link: string) => {
  window.open(link)
}

onMounted(() => {
  // 监听 navigation 的滚动事件
  navigation.value?.addEventListener('scroll', handleScroll, false)
  // 在页面渲染完成后计算所有导航块需要滚动的高度
  nextTick(() => {
    getScrollHeightArr()
  })
})
onBeforeUnmount(() => {
  // 在页面销毁的时候移除监听的事件
  navigation.value?.removeEventListener('scroll', handleScroll, false)
})
</script>

<style lang="scss" scoped>
.navigation-view {
  padding-top: var(--warbler-header-height);
  width: 100%;
  height: 100%;
  overflow: auto;

  .container {
    width: 100%;
    display: flex;

    .sidebar-list {
      @media (max-width: 900px) {
        display: none;
      }
      position: fixed;
      width: 100px;
      height: 80vh;
      overflow: auto;
      top: 96px;
      left: 32px;

      &::-webkit-scrollbar {
        // 隐藏滚动条
        display: none;
      }

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
      padding-right: 15%;
      padding-left: 15%;
      @media (max-width: 900px) {
        padding-left: 16px;
        padding-right: 16px;
      }
      display: flex;
      flex-direction: column;
      width: 100%;
      .nav-block-item {
        width: 100%;
        min-height: 100px;
        border-radius: 10px;
        margin-top: 32px;
        background-color: var(--warbler-bg-soft);
        .nav-block-title {
          border-bottom: var(--warbler-border-1);
          padding: 16px 32px;
        }
        .nav-instance-list {
          padding: 8px 32px;
          display: grid;
          justify-content: space-between;
          grid-template-columns: repeat(auto-fill, 200px);
          grid-gap: 16px;
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
