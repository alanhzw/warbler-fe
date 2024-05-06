<template>
  <div class="life-grid">
    <div class="life-grid__content">
      <div class="life-grid__content__core">
        <!-- 分配人生 -->
        <block-item title="分配人生">
          <div class="config-life">
            <div style="margin-right: 16px; white-space: nowrap">选择你的生日</div>
            <!-- 日期选择器 -->
            <el-date-picker
              v-model="formData.birthday"
              style="width: 100%"
              type="date"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :clearable="false"
              :editable="false"
              :disabled-date="disabledDate"
              placeholder="选择你的生日" />
            <!-- 配置按钮 点击打开配置弹窗-->
            <el-icon
              style="margin-left: 16px; cursor: pointer; font-size: 20px"
              @click="handleClickConfigBtn">
              <Operation />
            </el-icon>
          </div>
        </block-item>
        <!-- 你的人生 -->
        <block-item title="你的人生">
          <your-life :life-time="pastTime" title="已经过去了"></your-life>
          <your-life :life-time="remainTime" title="剩余的时间"></your-life>
        </block-item>
        <!-- 人生小格 -->
        <block-item title="人生小格">
          <grid-life :grids="grids" @click="handleClickConfigBtn"></grid-life>
          <!-- 切换 400 格和 900 格 -->
          <template #option>
            <div style="display: flex; gap: 8px; align-items: baseline">
              <div>{{ `格子数量: ${formData.gridNum}` }}</div>
              <i
                class="iconfont icon-category cp"
                :style="{
                  color: Number(formData.gridNum) === 400 ? '#409EFF' : '',
                  fontSize: Number(formData.gridNum) === 400 ? '20px' : '18px',
                }"
                @click="handleChangeGridNum(400)">
              </i>
              <i
                class="iconfont icon-9Grids_video cp"
                :style="{
                  color: Number(formData.gridNum) === 900 ? '#409EFF' : '',
                  fontSize: Number(formData.gridNum) === 900 ? '18px' : '16px',
                }"
                @click="handleChangeGridNum(900)">
              </i>
            </div>
          </template>
        </block-item>
        <!-- 格子含义 -->
        <block-item title="格子含义">
          <grid-meaning :form-data="formData"></grid-meaning>
        </block-item>
        <div style="height: 32px"></div>
      </div>
      <!-- 分配人生抽屉 -->
      <config-life-drawer
        ref="configDrawer"
        :form-data="formData"
        @change-config="handleChangeConfig">
      </config-life-drawer>
    </div>
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
import GridMeaning from './components/grid-meaning.vue';
import { disabledDate } from './hooks/utils';

const formData = ref<Iform>({
  /** 出生日期 */
  birthday: '1998-03-09',
  /** 年龄 */
  age: '60',
  /** 已经过去的生命背景颜色 */
  pastBackgroundColor: '#98c3b9',
  /** 格子数量 */
  gridNum: '400',
  /** 表单配置数据  */
  lifeData: [
    {
      /** 频率 */
      frequency: 'day',
      /** 事件 */
      event: '睡觉',
      /** 耗时 */
      time: '7',
      /** 耗时单位 */
      timeUnit: 'hour',
      backgroundColor: '#2486b9',
    },
    {
      frequency: 'day',
      event: '工作',
      time: '9.5',
      timeUnit: 'hour',
      backgroundColor: '#ab9f93',
    },
    {
      frequency: 'day',
      event: '陪伴爱人',
      time: '2',
      timeUnit: 'hour',
      backgroundColor: '#ed3321',
    },
    {
      frequency: 'year',
      event: '陪伴父母',
      time: '10',
      timeUnit: 'day',
      backgroundColor: '#e7a23f',
    },
    // {
    //   frequency: 'month',
    //   event: '陪伴孩子',
    //   time: '2',
    //   timeUnit: 'day',
    //   backgroundColor: '#43b244',
    // },
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

// 切换格子数量
const handleChangeGridNum = (num: number) => {
  formData.value.gridNum = num.toString();
};

// 配置数据改变
const handleChangeConfig = (newFormData: Iform) => {
  formData.value = newFormData;
};
</script>

<style lang="scss" scoped>
.life-grid {
  display: flex;
  padding-top: var(--warbler-header-height);
  justify-content: center;
  width: 100%;
  height: 100%;

  &__content {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;

    &__core {
      width: 1000px;
      height: 100%;
      padding-bottom: 16px;
    }

    .config-life {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
