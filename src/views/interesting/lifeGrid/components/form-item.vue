<template>
  <div class="form-item">
    <div class="form-item__no">{{ `${formItemIndex + 4}.` }}</div>
    <div class="form-item__text">你平均每</div>
    <el-select v-model="formItemData.frequency" placeholder="请选择" style="width: 100px">
      <el-option v-for="item in frequencyOptions" :key="item" :label="item" :value="item" />
    </el-select>
    <el-input
      v-model="formItemData.event"
      clearable
      style="width: 240px; margin-left: 8px"
      placeholder="请输入" />
    <div class="form-item__text">的时间为</div>
    <el-input v-model="formItemData.time" clearable style="width: 100px" placeholder="请输入" />
    <el-select
      v-model="formItemData.timeUnit"
      placeholder="请选择"
      style="width: 100px; margin: 0 8px">
      <el-option v-for="item in timeUnitOptions" :key="item" :label="item" :value="item" />
    </el-select>
    <el-color-picker v-model="formItemData.backgroundColor" />
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { frequencyOptions, timeUnitOptions } from '../hooks/const';
import { IFormItem } from '../hooks/type';

interface IPropType {
  /** 配置表单item */
  formItemData: IFormItem;
  /** 配置表单index */
  formItemIndex: number;
}

const props = defineProps<IPropType>();

const emits = defineEmits(['update:formItemData']);

const formItemData = useVModel(props, 'formItemData', emits);
</script>

<style lang="scss" scoped>
.form-item {
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
