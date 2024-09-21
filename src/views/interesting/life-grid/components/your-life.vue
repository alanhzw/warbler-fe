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
const timeMapObj: { [key: string]: string } = {
  year: '年',
  month: '月',
  day: '天',
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
    font-size: 16px;
    padding: 4px 0;
    border-bottom: 1px solid var(--warbler-text-2);
  }
  .lifeTime-box {
    margin: 12px 0;
    padding: 16px 0;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
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
}
</style>
