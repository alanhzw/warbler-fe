<template>
  <div class="life-item">
    <div class="life-item__no">{{ `${lifeItemIndex + 3}.` }}</div>
    <div class="life-item__text">你平均每</div>
    <el-select v-model="lifeItemData.frequency" placeholder="请选择" style="width: 100px">
      <el-option
        v-for="item in frequencyOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
    <el-input
      v-model="lifeItemData.event"
      clearable
      show-word-limit
      :maxlength="10"
      style="width: 240px; margin-left: 8px"
      placeholder="请输入" />
    <div class="life-item__text">的时间为</div>

    <el-input v-model="lifeItemData.time" :maxlength="3" style="width: 80px" placeholder="请输入" />
    <el-select
      v-model="lifeItemData.timeUnit"
      placeholder="请选择"
      style="width: 100px; margin: 0 8px">
      <el-option
        v-for="item in timeUnitOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
    <el-color-picker v-model="lifeItemData.backgroundColor" />
    <i
      class="iconfont icon-shanchu"
      style="margin-left: 8px; cursor: pointer"
      @click="handleDelete">
    </i>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { frequencyOptions, timeUnitOptions } from '../hooks/const';
import { ILifeItem } from '../hooks/type';

interface IPropType {
  /** 配置表单item */
  lifeItemData: ILifeItem;
  /** 配置表单index */
  lifeItemIndex: number;
}

const props = defineProps<IPropType>();

const emits = defineEmits(['update:lifeItemData', 'handleDelete']);

const lifeItemData = useVModel(props, 'lifeItemData', emits);

// 点击删除图标
const handleDelete = () => {
  emits('handleDelete', props.lifeItemIndex);
};
</script>

<style lang="scss" scoped>
.life-item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &__no,
  &__text {
    font-size: 16px;
    margin: 0 8px;
  }
}
</style>
