<template>
  <div class="life-grid">
    <div class="life-grid__content">
      <!-- 分配人生 -->
      <block-item title="分配人生">
        <div class="config-life">
          <!-- 日期选择器 -->
          <el-date-picker
            v-model="formData.birthday"
            style="width: 100%"
            type="datetime"
            placeholder="选择你的生日" />
          <!-- 配置按钮 点击打开配置弹窗-->
          <el-icon
            style="margin-left: 8px; cursor: pointer; font-size: 20px"
            @click="handleClickConfigBtn">
            <Operation />
          </el-icon>
        </div>
      </block-item>
      <!-- 你的人生 -->
      <block-item title="你的人生">
        <your-life :life-time="pastTime" title="过去的时光"></your-life>
        <your-life :life-time="remainTime" title="剩余的时光"></your-life>
      </block-item>
      <!-- 人生小格 -->
      <block-item title="人生小格">
        <grid-life :grids="grids"></grid-life>
      </block-item>
      <!-- 格子含义 -->
      <block-item title="格子含义">
        <div class="grid-meaning"></div>
      </block-item>
    </div>
    <!-- 分配人生抽屉 -->
    <config-life-drawer ref="configDrawer" :form-data="formData"></config-life-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Operation } from '@element-plus/icons-vue';
import type { Iform } from './hooks/type';
import core from './hooks/core';
import ConfigLifeDrawer from './components/config-life-drawer.vue';
import BlockItem from './components/block-item.vue';
import GridLife from './components/grid-life.vue';
import YourLife from './components/your-life.vue';

const formData = ref<Iform>({
  /** 出生日期 */
  birthday: '',
  /** 年龄 */
  age: '80',
  /** 格子数量 */
  gridNum: '400',
  /** 表单配置数据  */
  formData: [
    {
      /** 频率 */
      frequency: '天',
      /** 事件 */
      event: '睡觉',
      /** 耗时 */
      time: '8',
      /** 耗时单位 */
      timeUnit: '时',
      backgroundColor: '#c1e8f9',
    },
    {
      frequency: '天',
      event: '工作',
      time: '8',
      timeUnit: '时',
      backgroundColor: '#ab9f93',
    },
    {
      frequency: '月',
      event: '陪伴父母',
      time: '1',
      timeUnit: '天',
      backgroundColor: '#7ea1b7',
    },
    {
      frequency: '天',
      event: '陪伴孩子',
      time: '5',
      timeUnit: '时',
      backgroundColor: '#e3a6ab',
    },
    {
      frequency: '天',
      event: '陪伴爱人',
      time: '5',
      timeUnit: '时',
      backgroundColor: '#ff00ff',
    },
  ],
});

const {
  /** 过去的时间 */
  pastTime,
  /** 剩余时间 */
  remainTime,
  /** 格子数据 */
  grids,
} = core(formData);

/** 抽屉组件实例 */
const configDrawer = ref();

// 点击分配人生按钮
function handleClickConfigBtn() {
  // 打开抽屉
  configDrawer.value.openDrawer();
}
</script>

<style lang="scss" scoped>
.life-grid {
  display: flex;
  padding-top: var(--warbler-header-height);
  width: 100%;
  height: 100%;

  &__content {
    width: 100%;
    height: 100%;
    padding-bottom: 16px;
    padding-right: 10%;
    padding-left: 10%;
    overflow: auto;

    .config-life {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
