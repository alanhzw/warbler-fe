<template>
  <div class="city-chart-wrap">
    <div class="title">
      <div class="title-text">
        城市分布图
        <el-popover
          content="数据仅供参考，不排除存在未及时更新城市的可能性"
          trigger="hover"
          placement="top"
          :width="210">
          <template #reference>
            <el-icon style="margin-left: 8px; cursor: pointer; font-size: 20px">
              <QuestionFilled />
            </el-icon>
          </template>
        </el-popover>
      </div>
    </div>
    <div class="chart-part">
      <VueCharts ref="chartRef" :option="option"></VueCharts>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { QuestionFilled } from '@element-plus/icons-vue';
import VueCharts from './vue-charts.vue';
import { useDataStore } from '../store/warbler.js';

const dataStore = useDataStore();
// 图表实例
const chartRef = ref();

//  图表数据
const chartData = computed(() => {
  const res = dataStore.cityData
    .map((item) => ({
      ...item,
      name: item.cityName,
      value: item.cityCount,
    }))
    .sort((a, b) => b.value - a.value);
  return res;
});

// 图表配置
const option = ref({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: !dataStore.isSmallScreen,
    right: '6%',
    orient: 'vertical',
    type: 'scroll',
    pageIconColor: '#fff',
    pageIconInactiveColor: '#b2b2c4',
    pageTextStyle: {
      color: '#fff',
    },
    padding: [5, 5, 50, 5],
    textStyle: {
      fontSize: 16,
    },
    formatter: (name: string) =>
      `${name} ${chartData.value.find((item) => item.name === name)?.value}  `,
  },
  series: [
    {
      name: '流莺大院城市分布情况',
      type: 'pie',
      radius: ['30%', '80%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 3,
        borderColor: '#2b2c40',
        borderWidth: 1,
      },
      center: dataStore.isSmallScreen ? ['50%', '50%'] : ['40%', '45%'],
      label: {
        show: false,
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
.city-chart-wrap {
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
    .title-text {
      display: flex;
      align-items: center;
    }
  }
  .chart-part {
    flex: 1;
  }
}
</style>
