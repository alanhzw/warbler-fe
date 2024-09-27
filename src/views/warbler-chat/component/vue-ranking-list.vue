<template>
  <div class="ranking-list-wrap">
    <div class="rank">
      <div class="tab-wrap">
        <VueTab v-model="activeSpeakRank" :tab-list="speakRankList">
          <div>Top10</div>
        </VueTab>
      </div>
      <transition name="slide-right">
        <el-table
          v-if="isShowSpeakTable"
          :data="speakTableData"
          highlight-current-row
          style="width: 100%">
          <!-- 序号 -->
          <el-table-column type="index" label="排名" align="center" width="100">
            <template #default="scope">
              <SvgJin v-if="scope.$index === 0" style="font-size: 36px"></SvgJin>
              <SvgYin v-else-if="scope.$index === 1" style="font-size: 36px"></SvgYin>
              <SvgTong v-else-if="scope.$index === 2" style="font-size: 36px"></SvgTong>
              <div v-else>{{ scope.$index + 1 }}</div>
            </template>
          </el-table-column>
          <!-- 成员 -->
          <el-table-column label="成员" width="auto">
            <template #header="scope">
              <div style="padding-left: 100px">{{ scope.column.label }}</div>
            </template>
            <template #default="scope">
              <div style="padding-left: 100px">
                <div class="base-info-wrap">
                  <div class="avatar">
                    <img v-if="dataStore.isAuthentication" :src="scope.row.bigHeadImgUrl" />
                    <img v-else src="../svg/zhanwei.svg" />
                  </div>
                  <div class="info">
                    <div class="name">{{ dataStore.authText(scope.row.nickName) }}</div>
                    <div class="roomName">{{ dataStore.authText(scope.row.roomNickName) }}</div>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <!-- 当日发言数 -->
          <el-table-column v-if="activeSpeakRank === 1" label="发言数" width="200" align="center">
            <template #default="scope">
              <div class="base-yesterdaySpeakCount-wrap">
                {{ scope.row.yesterdaySpeakCount }}
              </div>
            </template>
          </el-table-column>
          <!-- 总发言数 -->
          <el-table-column v-if="activeSpeakRank === 2" label="发言数" width="200" align="center">
            <template #default="scope">
              <div class="base-totalSpeakCount-wrap">
                {{ scope.row.totalSpeakCount }}
              </div>
            </template>
          </el-table-column>
          <!-- 平均发言条数 -->
          <el-table-column v-if="activeSpeakRank === 3" label="发言数" width="200" align="center">
            <template #default="scope">
              <div class="base-averageDailySpeakCount-wrap">
                {{ scope.row.averageDailySpeakCount }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </transition>
    </div>
    <div class="rank">
      <div class="tab-wrap">
        <VueTab v-model="activeDayRank" :tab-list="dayRankList">
          <div>Top10</div>
        </VueTab>
      </div>
      <transition name="slide-right">
        <el-table
          v-if="isShowDayTable"
          :data="dayTableData"
          highlight-current-row
          style="width: 100%">
          <!-- 序号 -->
          <el-table-column type="index" label="排名" align="center" width="100">
            <template #default="scope">
              <SvgJin v-if="scope.$index === 0" style="font-size: 36px"></SvgJin>
              <SvgYin v-else-if="scope.$index === 1" style="font-size: 36px"></SvgYin>
              <SvgTong v-else-if="scope.$index === 2" style="font-size: 36px"></SvgTong>
              <div v-else>{{ scope.$index + 1 }}</div>
            </template>
          </el-table-column>
          <!-- 成员 -->
          <el-table-column label="成员" width="auto">
            <template #header="scope">
              <div style="padding-left: 100px">{{ scope.column.label }}</div>
            </template>
            <template #default="scope">
              <div style="padding-left: 100px">
                <div class="base-info-wrap">
                  <div class="avatar">
                    <img v-if="dataStore.isAuthentication" :src="scope.row.bigHeadImgUrl" />
                    <img v-else src="../svg/zhanwei.svg" />
                  </div>
                  <div class="info">
                    <div class="name">{{ dataStore.authText(scope.row.nickName) }}</div>
                    <div class="roomName">{{ dataStore.authText(scope.row.roomNickName) }}</div>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <!-- 累计活跃天数 -->
          <el-table-column v-if="activeDayRank === 1" label="活跃天数" width="200" align="center">
            <template #default="scope">
              <div class="base-totalSpeakDays-wrap">
                {{ scope.row.totalSpeakDays }}
              </div>
            </template>
          </el-table-column>
          <!-- 连续活跃天数 -->
          <el-table-column v-if="activeDayRank === 2" label="活跃天数" width="200" align="center">
            <template #default="scope">
              <div class="base-continuousSpeakDays-wrap">
                {{ scope.row.continuousSpeakDays }}
              </div>
            </template>
          </el-table-column>
          <!-- 最大连续活跃天数 -->
          <el-table-column v-if="activeDayRank === 3" label="活跃天数" width="200" align="center">
            <template #default="scope">
              <div class="base-maxContinuousSpeakDays-wrap">
                {{ scope.row.maxContinuousSpeakDays }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue';
import VueTab from '@/components/vue-tab.vue';
import { useDataStore } from '../store/warbler.js';
import SvgJin from '../svg/jinpai.svg';
import SvgYin from '../svg/yinpai.svg';
import SvgTong from '../svg/tongpai.svg';

const dataStore = useDataStore();

// 发言榜激活的Tab
const activeSpeakRank = ref(1);
// 是否显示发言榜
const isShowSpeakTable = ref(true);

// 发言榜榜单
const speakRankList = [
  {
    key: 1,
    title: '当日发言',
  },
  {
    key: 2,
    title: '累计发言',
  },
  {
    key: 3,
    title: '平均发言',
  },
];

// 去掉自己的列表
const userChatDataWithoutMe = [...dataStore.userChatData].filter(
  (user) => user.userName !== 'wxid_m7u03jjls3ua21',
);

// 发言榜表格数据
const speakTableData = computed(() => {
  isShowSpeakTable.value = false;
  nextTick(() => {
    isShowSpeakTable.value = true;
  });
  if (activeSpeakRank.value === 1) {
    const res = userChatDataWithoutMe.sort((a, b) => b.yesterdaySpeakCount - a.yesterdaySpeakCount);
    return res.slice(0, 10);
  }
  if (activeSpeakRank.value === 2) {
    const res = userChatDataWithoutMe.sort((a, b) => b.totalSpeakCount - a.totalSpeakCount);
    return res.slice(0, 10);
  }
  if (activeSpeakRank.value === 3) {
    const res = userChatDataWithoutMe.sort(
      (a, b) => b.averageDailySpeakCount - a.averageDailySpeakCount,
    );
    return res.slice(0, 10);
  }
  return [];
});

// 活跃榜激活的Tab
const activeDayRank = ref(1);
// 是否显示活跃榜
const isShowDayTable = ref(true);

// 活跃榜榜单
const dayRankList = [
  {
    key: 1,
    title: '累计活跃',
  },
  {
    key: 2,
    title: '连续活跃',
  },
  {
    key: 3,
    title: '最大连续活跃',
  },
];

// 发言榜表格数据
const dayTableData = computed(() => {
  isShowDayTable.value = false;
  nextTick(() => {
    isShowDayTable.value = true;
  });
  if (activeDayRank.value === 1) {
    const res = userChatDataWithoutMe.sort((a, b) => b.totalSpeakDays - a.totalSpeakDays);

    return res.slice(0, 10);
  }
  if (activeDayRank.value === 2) {
    const res = userChatDataWithoutMe.sort((a, b) => b.continuousSpeakDays - a.continuousSpeakDays);

    return res.slice(0, 10);
  }
  if (activeDayRank.value === 3) {
    const res = userChatDataWithoutMe.sort(
      (a, b) => b.maxContinuousSpeakDays - a.maxContinuousSpeakDays,
    );

    return res.slice(0, 10);
  }

  return [];
});
</script>

<style lang="scss" scoped>
.ranking-list-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-shrink: 0;
  margin-top: 32px;
  gap: 32px;

  ::v-deep(.el-table) {
    color: initial;
    --el-table-row-hover-bg-color: rgb(56, 56, 73) !important;
    --el-table-border-color: transparent;
  }

  ::v-deep(.el-table tr) {
    background: var(--warbler-bg-card);
  }

  ::v-deep(.el-table th.el-table__cell) {
    background: var(--warbler-bg-card);
  }

  ::v-deep(.el-table thead) {
    color: initial;

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

  .rank {
    flex: 1;
    flex-shrink: 0;
    background-color: var(--warbler-bg-card);
    border-radius: 4px;
    overflow: hidden;
    .tab-wrap {
      padding: 24px;
    }
  }
  .base-info-wrap {
    width: 100%;
    display: flex;
    gap: 8px;
    justify-content: flex-start;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .name {
      }

      .roomName {
        font-size: 12px;
        color: #b2b2c4;
      }
    }
  }
}
/* 定义从左到右渐入的动画 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
}

/* 可选：添加淡入效果 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
