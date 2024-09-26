<template>
  <div class="tab">
    <div
      v-for="tab in tabList"
      :key="tab.key"
      class="tab-item"
      :class="{ 'tab-item-active': tab.key === activeTab }"
      @click="handleChangeTab(tab)">
      {{ tab.title }}
      <slot v-if="tab.key === activeTab"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

interface ITab {
  key: number;
  title: string;
  [key: string]: any;
}

interface IPropType {
  /** 激活的tab */
  modelValue: number;
  /** tab列表 */
  tabList: ITab[];
}

const props = defineProps<IPropType>();

const emits = defineEmits(['update:modelValue', 'handleChangeTab']);

const activeTab = useVModel(props, 'modelValue', emits);

// 点击删除图标
const handleChangeTab = (tab: ITab) => {
  activeTab.value = tab.key;
  emits('handleChangeTab', tab);
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  .tab-item {
    cursor: pointer;
    padding: 12px 16px;
    border-radius: 4px;
    color: #d5d5e2;
    transition: all 0.2s ease-in-out;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 6px;
    &:hover {
      background-color: #35365f;
      color: #696cff;
    }
    &-active {
      color: #fff !important;
      background-color: #5f61e6 !important;
    }
  }
}
</style>
