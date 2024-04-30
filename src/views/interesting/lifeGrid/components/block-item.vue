<template>
  <div class="block-item">
    <div class="block-item_title">
      <div class="block-item_title__line"></div>
      <div class="block-item_title__text">{{ title }}</div>
    </div>
    <div class="block-item_content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface IPropType {
  /** 已选中的数量 */
  title: string;
}

defineProps<IPropType>();
</script>

<style lang="scss" scoped>
.block-item {
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
  margin-top: 32px;
  background-color: var(--warbler-bg-soft);
  &_title {
    border-bottom: var(--warbler-border-1);
    padding: 16px;
    display: flex;
    align-items: center;
    &__line {
      width: 4px;
      height: 20px;
      background-color: var(--warbler-white);
    }
    &__text {
      font-size: 20px;
      font-weight: bold;
      margin-left: 8px;
    }
  }
  &_content {
    padding: 16px;
  }
}
</style>
