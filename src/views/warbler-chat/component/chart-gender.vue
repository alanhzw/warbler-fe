<template>
  <div class="gender-chart-wrap">
    <div class="title">
      <div class="title-text">性别分布图</div>
    </div>
    <div class="chart-part">
      <VueCharts ref="chartRef" :option="option"></VueCharts>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import VueCharts from './vue-charts.vue';
import { useDataStore } from '../store/warbler.js';

const dataStore = useDataStore();
// 图表实例
const chartRef = ref();

//  图表数据
const chartData = computed(() => [
  {
    name: '男',
    value: dataStore.roomData.maleMemberCount,
  },
  {
    name: '女',
    value: dataStore.roomData.femaleMemberCount,
  },
  {
    name: '未知',
    value: dataStore.roomData.unknownMemberCount,
  },
]);

// 图表配置
const option = ref({
  color: ['rgb(0, 151, 255)', 'rgb(254, 47, 88)', '#F7CE21'],
  tooltip: {
    trigger: 'item',
  },
  legend: {
    right: '6%',
    orient: 'vertical',
    textStyle: {
      fontSize: 16,
    },
  },
  series: [
    {
      name: '流莺大院性别分布情况',
      type: 'pie',
      radius: ['30%', '90%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#2b2c40',
        borderWidth: 5,
      },
      bottom: '10%',
      label: {
        show: true,
        position: 'inside',
        formatter: '{d}%',
        textStyle: {
          color: '#fff',
          fontSize: '16',
        },
      },
      labelLine: {
        show: false,
      },
      data: chartData.value,
    },
  ],
});

onMounted(() => {
  //
});
</script>

<style lang="scss" scoped>
.gender-chart-wrap {
  width: 100%;
  background-color: var(--warbler-bg-card);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 18px;
    height: 60px;
    line-height: 60px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .chart-part {
    flex: 1;
  }
}
</style>
