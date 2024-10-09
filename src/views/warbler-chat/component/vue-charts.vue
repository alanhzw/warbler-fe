<template>
  <div :id="chartId" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import { defaultsDeep, cloneDeep } from 'lodash';
import { uuid as UUID } from 'vue3-uuid';

interface IPropType {
  option?: any;
}
const props = withDefaults(defineProps<IPropType>(), {
  option: () => ({}),
});

const chartId = ref(UUID.v4());

// charts 实例
const myChart = ref<echarts.ECharts | null>(null);

// 默认的配置项
// 指定图表的配置项和数据
const defaultOption = {
  backgroundColor: '#2b2c40',
  textStyle: {
    color: '#fff',
    fontFamily: 'DaMengTang',
  },
  legend: {
    textStyle: {
      color: '#fff',
    },
  },
  tooltip: {
    backgroundColor: 'rgb(0,0,0,0.8)',
    textStyle: {
      color: '#fff',
    },
  },
};

// 修改配置
const setOption = (option: any) => {
  if (myChart.value) {
    myChart.value.setOption(option);
  }
};

// 重新设置尺寸
const resize = (option: any) => {
  if (myChart.value) {
    myChart.value.resize(option);
  }
};

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  myChart.value = echarts.init(document.getElementById(chartId.value), 'dark');
  // 使用刚指定的配置项和数据显示图表。
  myChart.value.setOption(defaultsDeep(cloneDeep(props.option), defaultOption));
});

defineExpose({
  setOption,
  resize,
});
</script>

<style lang="scss" scoped>
//
</style>
