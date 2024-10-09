<template>
  <div class="table-wrap">
    <div class="title">
      <div class="title-text">
        群聊数据
        <el-popover
          content="默认以首次发言时间正序排序"
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
      <el-input
        v-model="searchContent"
        style="width: 300px"
        clearable
        :maxlength="50"
        placeholder="输入微信名或群昵称查询"
        @input="scrollToSearchResult" />
    </div>
    <el-table
      v-if="showTable"
      ref="singleTableRef"
      :data="dataStore.userChatData"
      highlight-current-row
      style="width: 100%"
      :height="tableHeight"
      @sort-change="scrollToSearchResult">
      <!-- 序号 -->
      <el-table-column
        :fixed="!dataStore.isSmallScreen"
        type="index"
        width="60"
        label="#"
        align="center" />
      <!-- 成员 -->
      <el-table-column label="成员" width="280" :fixed="!dataStore.isSmallScreen">
        <template #default="scope">
          <div class="base-info-wrap">
            <div class="avatar">
              <img v-if="dataStore.isAuthentication" :src="scope.row.bigHeadImgUrl" />
              <SvgZhanwei v-else></SvgZhanwei>
            </div>
            <div class="info">
              <div class="name">{{ dataStore.authText(scope.row.nickName) }}</div>
              <div class="roomName">{{ dataStore.authText(scope.row.roomNickName) }}</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <!-- 性别 -->
      <el-table-column label="性别" width="120" align="center" sortable sort-by="gender">
        <template #default="scope">
          <div class="base-gender-wrap">
            <SvgNan v-if="scope.row.gender === 1"></SvgNan>
            <SvgNv v-else-if="scope.row.gender === 2"></SvgNv>
            <SvgUnknown v-else></SvgUnknown>
          </div>
        </template>
      </el-table-column>
      <!-- 性别 -->
      <el-table-column label="城市" width="120" align="center" sortable sort-by="city">
        <template #default="scope">
          <div class="base-city-wrap">
            {{ scope.row.city }}
          </div>
        </template>
      </el-table-column>
      <!-- 总发言数 -->
      <el-table-column
        label="总发言数"
        width="120"
        align="center"
        sortable
        sort-by="totalSpeakCount">
        <template #default="scope">
          <div class="base-totalSpeakCount-wrap">
            {{ scope.row.totalSpeakCount }}
          </div>
        </template>
      </el-table-column>
      <!-- 平均发言数 -->
      <el-table-column
        label="平均发言数"
        width="180"
        align="center"
        sortable
        sort-by="averageDailySpeakCount">
        <template #default="scope">
          <div class="base-averageDailySpeakCount-wrap">
            {{ scope.row.averageDailySpeakCount }}
          </div>
        </template>
      </el-table-column>
      <!-- 总活跃天数 -->
      <el-table-column
        label="总活跃天数"
        width="140"
        align="center"
        sortable
        sort-by="totalSpeakDays">
        <template #default="scope">
          <div class="base-totalSpeakDays-wrap">
            {{ scope.row.totalSpeakDays }}
          </div>
        </template>
      </el-table-column>
      <!-- 连续活跃天数 -->
      <el-table-column
        label="连续活跃天数"
        width="160"
        align="center"
        sortable
        sort-by="continuousSpeakDays">
        <template #default="scope">
          <div class="base-continuousSpeakDays-wrap">
            {{ scope.row.continuousSpeakDays }}
          </div>
        </template>
      </el-table-column>
      <!-- 历史最大连续活跃天数 -->
      <el-table-column
        label="历史最大连续活跃天数"
        width="220"
        align="center"
        sortable
        sort-by="maxContinuousSpeakDays">
        <template #default="scope">
          <div class="base-maxContinuousSpeakDays-wrap">
            {{ scope.row.maxContinuousSpeakDays }}
          </div>
        </template>
      </el-table-column>
      <!-- 未活跃天数 -->
      <el-table-column
        label="未活跃天数"
        width="140"
        align="center"
        sortable
        sort-by="lastSpeakTimeFromToday">
        <template #default="scope">
          <div class="base-lastSpeakTimeFromToday-wrap">
            {{ scope.row.lastSpeakTimeFromToday }}
          </div>
        </template>
      </el-table-column>
      <!-- 线下活动次数 -->
      <!--
        <el-table-column
          label="线下活动次数"
          width="180"
          align="center"
          sortable
          sort-by="joinOfflineActivityCount">
          <template #default="scope">
            <div class="base-joinOfflineActivityCount-wrap">
              {{ scope.row.joinOfflineActivityCount }}
            </div>
          </template>
        </el-table-column>
      -->
      <!-- 最早活跃时间 -->
      <el-table-column label="最早活跃时间" width="180" sortable sort-by="firstSpeakTime">
        <template #default="scope">
          <div class="base-firstSpeakTime-wrap">
            {{ scope.row.firstSpeakTime }}
          </div>
        </template>
      </el-table-column>
      <!-- 最晚活跃时间 -->
      <el-table-column label="最晚活跃时间" width="180" sortable sort-by="lastSpeakTime">
        <template #default="scope">
          <div class="base-lastSpeakTime-wrap">
            {{ scope.row.lastSpeakTime }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { QuestionFilled } from '@element-plus/icons-vue';
import SvgNan from '../svg/nansheng.svg';
import SvgNv from '../svg/nvsheng.svg';
import SvgUnknown from '../svg/unkown.svg';
import SvgZhanwei from '../svg/zhanwei.svg';
import { useDataStore } from '../store/warbler.js';

const dataStore = useDataStore();

// 获取表格高度  100vh - 64px(上下padding) - (上部) - 60px(群标题)
const tableHeight = computed(() => {
  if (dataStore.isSmallScreen) {
    return '800px';
  }
  const ins: HTMLElement = document.querySelector('.vue-introduction')!;
  return `calc(100vh - 64px - ${ins.offsetHeight}px - 60px)`;
});

// 是否展示表格
const showTable = ref(false);

// 表格组件实例
const singleTableRef = ref();

// 搜索内容
const searchContent = ref('');

// 搜索定位
const scrollToSearchResult = () => {
  const rowHeight: HTMLElement = document.querySelector('.el-table__body .el-table__row')!;
  // 表格数据
  const tableData = singleTableRef.value.store.states.data.value;
  // 查找搜索结果
  const result = tableData.findIndex(
    (item: any) =>
      item.nickName.includes(searchContent.value) ||
      item.roomNickName.includes(searchContent.value),
  );
  if (result > 0) {
    // 跳转到搜索结果
    singleTableRef.value.setCurrentRow(tableData[result]);
    singleTableRef.value.scrollTo({ top: result * rowHeight.offsetHeight, behavior: 'smooth' });
  }
};

onMounted(() => {
  showTable.value = true;
});
</script>

<style lang="scss" scoped>
.table-wrap {
  width: 100%;
  background-color: var(--warbler-bg-card);
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 16px;

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
      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  ::v-deep(.el-table) {
    color: #fff;
    --el-table-row-hover-bg-color: rgb(56, 56, 73) !important;
    --el-table-border-color: #4e4f6c;
  }

  ::v-deep(.el-table tr) {
    background: var(--warbler-bg-card);
  }

  ::v-deep(.el-table th.el-table__cell) {
    background: var(--warbler-bg-card);
  }

  ::v-deep(.el-table thead) {
    color: #fff;

    font-size: 16px;
  }

  ::v-deep(.el-table thead .cell) {
    padding: 10px 12px;
  }

  ::v-deep(.el-table thead .cell) {
    font-weight: 100;
  }

  ::v-deep(.el-table__header-wrapper) {
    border-top: 1px solid #4e4f6c;
  }

  ::v-deep(.el-table__inner-wrapper::before) {
    display: none;
  }

  ::v-deep(.el-table tr:last-child td.el-table__cell) {
    border-bottom: none;
  }

  .base-info-wrap {
    display: flex;
    gap: 8px;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;

      svg {
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .name {
      }

      .roomName {
        font-size: 12px;
        color: #b2b2c4;
      }
    }
  }
}
</style>
