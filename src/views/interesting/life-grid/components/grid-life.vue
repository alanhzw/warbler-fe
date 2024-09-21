<template>
  <div class="grid-life">
    <div
      class="grid-container"
      :style="{
        'grid-template-columns': grids.length === 400 ? 'repeat(20, 20px)' : 'repeat(30, 20px)',
      }">
      <div
        v-for="i in props.grids"
        :key="i.id"
        class="grid cp"
        :class="i.className"
        :style="{ backgroundColor: i.backgroundColor }">
        <i v-if="isLove(i.event)" class="iconfont icon-aixin love"> </i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IGrid {
  id: number;
  backgroundColor: string;
  className: string;
  event: string;
}

interface IPropType {
  grids: Array<IGrid>;
}

const props = defineProps<IPropType>();

// 判断是否为爱情事件
const isLove = (event: string) => {
  const loveTerms = ['爱人', '对象', '女朋友', '媳妇', '老婆', '另一半', '妻子'];
  return loveTerms.some((term) => event.includes(term));
};
</script>

<style lang="scss" scoped>
.grid-life {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .grid-container {
    flex-wrap: wrap;
    display: grid;

    gap: 6px;
    .grid {
      width: 100%;
      padding-top: 100%;
      border-radius: 2px;
      position: relative;
      .love {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
