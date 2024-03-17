<template>
  <div class="grid-life">
    <div
      v-for="i in props.grids"
      :key="i.id"
      class="grid"
      :style="{ backgroundColor: i.backgroundColor }"></div>
  </div>
</template>

<script setup lang="ts">
interface IGrid {
  id: number;
  backgroundColor: string;
}

interface IPropType {
  grids: Array<IGrid>;
}

const props = defineProps<IPropType>();
</script>

<style lang="scss" scoped>
.grid-life {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .grid {
    width: 20px;
    height: 20px;
    margin: 3px;
    border-radius: 2px;
  }
}
</style>
