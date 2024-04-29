<template>
  <div class="your-life">
    <div>
      <div class="title">{{ title }}</div>
      <div class="lifeTime-box">
        <div v-for="(time, index) in timeMap" :key="index" class="content">
          <div class="text">{{ lifeTime[time] }}</div>
          <div class="unit">{{ timeMapObj[time] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ILifeTime } from '../hooks/type';

interface IPropType {
  lifeTime: ILifeTime;
  title: string;
}

defineProps<IPropType>();

/** 用于建立起中文和英文日期的对应关系 */
const timeMapObj: ILifeTime = {
  year: '年',
  month: '月',
  day: '日',
  hour: '时',
  minute: '分',
  second: '秒',
};

/** 用来进行遍历展示数据 */
const timeMap = Object.keys(timeMapObj);
</script>

<style lang="scss" scoped>
.your-life {
  width: 100%;
  height: 100%;
  .title {
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 0;
    border-bottom: 1px solid #fff;
  }
  .lifeTime-box {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    // grid-template-columns: repeat(auto-fill, 150px);
    // grid-gap: 16px;
    .content {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .text {
        font-size: 24px;
        margin-right: 4px;
        color: var(--warbler-brand);
        line-height: 1;
      }
      .unit {
        font-size: 14px;
        color: #999;
      }
    }
  }
  // /* 当屏幕宽度大于等于 1200px 时，一行六个 */
  // @media (min-width: 1200px) {
  //   .lifeTime-box {
  //     grid-template-columns: repeat(6, 1fr);
  //   }
  // }

  // /* 当屏幕宽度介于 768px 至 1199px 之间时，一行三个 */
  // @media (min-width: 768px) and (max-width: 1199px) {
  //   .lifeTime-box {
  //     grid-template-columns: repeat(3, 1fr);
  //   }
  // }

  // /* 当屏幕宽度小于等于 767px 时，一行一个 */
  // @media (max-width: 767px) {
  //   .lifeTime-box {
  //     grid-template-columns: 1fr;
  //   }
  // }
}
</style>
