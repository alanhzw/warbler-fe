<template>
  <div class="grid-meaning">
    <!-- 已经走过的生命 -->
    <div class="grid-meaning__item">
      <div
        class="grid-meaning__item__color"
        :style="{
          backgroundColor: formData.pastBackgroundColor,
        }"></div>
      <div class="grid-meaning__item__text">
        {{ `你于 ${formData.birthday} 出生，你可以活 ${formData.age} 年，这是你已经走过的生命` }}
      </div>
    </div>
    <!-- 配置出来的人生 -->
    <div v-for="item in formData.lifeData" :key="item.event" class="grid-meaning__item">
      <div
        class="grid-meaning__item__color"
        :style="{
          backgroundColor: item.backgroundColor,
        }"></div>
      <div class="grid-meaning__item__text">
        {{
          `这代表着在你余下的生命中，你会用每 ${getLabelByValue(item.frequency, frequencyOptions)}
           ${item.time}
           ${getLabelByValue(item.timeUnit, timeUnitOptions)} 来${item.event}`
        }}
      </div>
    </div>
    <!-- 剩余的时光 -->
    <div class="grid-meaning__item">
      <div
        class="grid-meaning__item__color"
        :style="{
          backgroundColor: '#e2e2e2',
        }"></div>
      <div class="grid-meaning__item__text">这是除了以上之外，你剩下的所有时光</div>
    </div>
    <div>数据仅供娱乐，人生苦短，继续努力吧 ~</div>
  </div>
</template>

<script setup lang="ts">
import { Iform } from '../hooks/type';
import { getLabelByValue } from '../hooks/utils';
import { frequencyOptions, timeUnitOptions } from '../hooks/const';

interface IPropType {
  formData: Iform;
}

defineProps<IPropType>();
</script>

<style lang="scss" scoped>
.grid-meaning {
  display: flex;
  flex-direction: column;
  gap: 8px;
  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    &__color {
      width: 20px;
      height: 20px;
      border-radius: 2px;
    }
    &__text {
      font-size: 16px;
    }
  }
}
</style>
