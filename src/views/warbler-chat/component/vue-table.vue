<template>
  <div class="table-wrap">
    <div class="title">
      群聊数据
      <VueAuthButton></VueAuthButton>
    </div>
    <el-table
      ref="singleTableRef"
      :data="userChatData"
      highlight-current-row
      style="width: 100%"
      :height="tableHeight">
      <!-- 序号 -->
      <el-table-column fixed type="index" width="60" label="#" align="center" />
      <!-- 成员 -->
      <el-table-column label="成员" width="280" fixed>
        <template #default="scope">
          <div class="base-info-wrap">
            <div class="avatar">
              <img v-if="isAuthentication" :src="scope.row.bigHeadImgUrl" />
              <img v-else src="../svg/zhanwei.svg" />
            </div>
            <div class="info">
              <div class="name">{{ authText(scope.row.nickName) }}</div>
              <div class="roomName">{{ authText(scope.row.roomNickName) }}</div>
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
      <!-- 平均发言条数 -->
      <el-table-column
        label="平均发言条数"
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
import { computed, ref } from 'vue';
import warblerChatData from '@/warblerChat.json';
import SvgNan from '../svg/nansheng.svg';
import SvgNv from '../svg/nvsheng.svg';
import SvgUnknown from '../svg/unkown.svg';
import VueAuthButton from './vue-auth-button.vue';

// 获取表格高度  100vh - 64px(上下padding) - 200px(上部) - 60px(群标题)
const tableHeight = computed(() => 'calc(100vh - 64px - 200px - 60px)');

// 群成员认证
const isAuthentication = ref(false);

// 权限认证
const authText = (text: string) => (isAuthentication.value ? text : '口令认证通过后可查看数据');

console.log('🚀🚀 ~ data:', warblerChatData);
const { userChatData } = warblerChatData;
</script>

<style lang="scss" scoped>
.table-wrap {
  width: 100%;
  background-color: var(--warbler-bg-card);
  border-radius: 4px;
  overflow: hidden;

  .title {
    font-size: 18px;
    height: 60px;
    line-height: 60px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ::v-deep(.el-table) {
    color: initial;
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

  .base-info-wrap {
    display: flex;
    gap: 8px;
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
