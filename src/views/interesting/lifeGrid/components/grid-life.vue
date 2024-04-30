<template>
  <div class="grid-life">
    <div class="grid-container">
      <div
        v-for="i in props.grids"
        :key="i.id"
        class="grid"
        :style="{ backgroundColor: i.backgroundColor }"></div>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  .grid-container {
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(20, 20px);
    gap: 6px;
    .grid {
      width: 100%;
      padding-top: 100%;
      border-radius: 2px;
    }
  }
}
</style>
