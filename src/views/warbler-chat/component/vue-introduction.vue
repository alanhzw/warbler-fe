<template>
  <div class="vue-introduction">
    <div class="introduction-wrapper-left">
      <!-- 标题 -->
      <div class="title">
        <div class="welcome">欢迎来到</div>
        &nbsp;流莺大院
        <div class="emoji">👋🏻</div>
      </div>
      <!-- 介绍 -->
      <div class="introduction">
        流莺大院是一个摸鱼、聊天、聚会、游戏、结识新朋友的乌托邦，欢迎每一个积极发言、踊跃活动、遵守群规的小伙伴入住
        ~
      </div>
      <!-- 指标 -->
      <div class="indicator-wrapper">
        <!-- 建群时间 -->
        <div class="indicator-item">
          <div class="indicator-item-icon" style="background-color: #36483f">
            <i class="iconfont icon-rili" style="color: #71dd37"> </i>
          </div>
          <div class="indicator-item-des">
            <div class="indicator-item-key">已成立</div>
            <div class="indicator-item-value" style="color: #71dd37">
              303
              <div class="indicator-item-unit">&nbsp;天</div>
            </div>
          </div>
        </div>
        <!-- 数据采集时间 -->
        <div class="indicator-item">
          <div class="indicator-item-icon" style="background-color: #591f3487">
            <i class="iconfont icon-shijian" style="color: #ef3db7"> </i>
          </div>
          <div class="indicator-item-des">
            <div class="indicator-item-key">数据采集时间</div>
            <div class="indicator-item-value" style="color: #ef3db7">2024-09-27</div>
          </div>
        </div>
        <!-- 群成员数 -->
        <div class="indicator-item">
          <div class="indicator-item-icon" style="background-color: #25445c">
            <i class="iconfont icon-zongrenshu" style="color: #03c3ec"> </i>
          </div>
          <div class="indicator-item-des">
            <div class="indicator-item-key">群成员数量</div>
            <div class="indicator-item-value" style="color: #03c3ec">
              500
              <div class="indicator-item-unit">&nbsp;人</div>
            </div>
          </div>
        </div>
        <!-- 发言总数 -->
        <div class="indicator-item">
          <div class="indicator-item-icon" style="background-color: #4d4036">
            <i class="iconfont icon-huatongzhengzaifayanweifayan" style="color: #ffab00"> </i>
          </div>
          <div class="indicator-item-des">
            <div class="indicator-item-key">发言总数</div>
            <div class="indicator-item-value" style="color: #ffab00">
              716584
              <div class="indicator-item-unit">&nbsp;条</div>
            </div>
          </div>
        </div>
        <!-- 申请加入 -->
        <div class="apply-join" @click="applyJoin">
          <i class="iconfont icon-shenqingjiaru-copy"> </i>
          <div class="apply-join-btn">申请加入</div>
        </div>
      </div>
    </div>
    <div class="introduction-wrapper-right">
      <SvgJoin style="width: 200px; height: 200px"></SvgJoin>
    </div>
    <VueDrawer
      ref="applyJoinRef"
      title="入群申请"
      :size="dataStore.isSmallScreen ? '100%' : '900'"
      @submit="handleConfirm"
      @cancel="handleCancel">
      <template #default>
        <div class="tips-content">
          <div class="tips">
            <div class="title">
              <SvgWarn style="color: #03c3ec"></SvgWarn>
              <div>入群须知</div>
            </div>
            <div class="tip">
              {{ `请添加我微信，备注：进群，通过好友后会发送群聊邀请链接` }}
            </div>
            <div class="tip">
              {{ `本群定位为【聊天、摸鱼、活动】群，免不了经常艾特全体成员，介意的请勿申请` }}
            </div>
            <div class="tip">
              {{ `本群不是技术群，抱着学习知识，解决问题心态的请勿申请` }}
            </div>
            <div class="tip">
              {{
                `本群建立初衷是给像我一样迷茫，不快乐，现实中没什么朋友的人，一个聊天，游戏，分享生活，参加活动，扩充社交，结识朋友的平台`
              }}
            </div>
            <div class="tip">
              {{
                `本群已经组织王者荣耀，金铲铲，英雄联盟，狼人杀等多次线上活动；以及北京、上海、深圳、杭州等地的多次线下聚餐活动`
              }}
            </div>
            <div class="tip">
              {{
                `本群已经清理共计几百个僵尸，所以请确认好自己加群的目的，进群之后不看公告，不看全体成员消息，不参与聊天，不参加线上线下活动，甘于社恐的请勿申请`
              }}
            </div>
            <div class="tip">
              {{ `本人承诺永远不开二群，旨在维护好一个活跃，友爱，有归属感的乌托邦` }}
            </div>
            <div class="tip">
              {{
                `本群目前已经满员，每加入一个新人，就会清理一个不活跃的人，请珍惜自己在群里的坑位`
              }}
            </div>
            <div class="tip">
              {{ `本人愿景是有一天已无人可以清理，届时会关闭所有入口` }}
            </div>
          </div>
          <el-checkbox v-model="checked">
            <div class="checked">
              我已知晓上述内容，并承诺积极发言，积极参与群活动，坚决不做僵尸
            </div>
          </el-checkbox>
          <div class="wechat">
            <img v-if="checked" src="@/assets/image/wechat.jpg" />
          </div>
        </div>
      </template>
    </VueDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SvgJoin from '../svg/join.svg';
import VueDrawer from '@/components/vue-drawer.vue';
import { useDataStore } from '../store/warbler.js';
import SvgWarn from '../svg/warn2.svg';

const dataStore = useDataStore();

// 申请入群弹窗
const applyJoinRef = ref();
const applyJoin = () => {
  applyJoinRef.value.showDrawer();
};

// 确定
const handleConfirm = () => {
  applyJoinRef.value.closeDrawer();
};

// 取消
const handleCancel = () => {
  applyJoinRef.value.closeDrawer();
};

// 是否勾选协议
const checked = ref(false);
</script>

<style lang="scss" scoped>
.vue-introduction {
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 40px;
    display: flex;
    align-items: flex-end;
    @media (max-width: 700px) {
      font-size: 32px;
    }
    .welcome {
      font-size: 24px;
    }
    .emoji {
      position: relative;
      top: -5px;
      left: 5px;
    }
  }
  .introduction {
    padding: 20px 0;
    color: #b2b2c4;
    font-size: 18px;
  }
  .indicator-wrapper {
    display: flex;
    justify-content: flex-start;
    padding: 10px 0 32px 0;
    gap: 20px 80px;
    flex-wrap: wrap;

    .indicator-item {
      display: flex;
      gap: 16px;

      .indicator-item-icon {
        width: 60px;
        height: 60px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        .iconfont {
          font-size: 36px;
        }
      }
      .indicator-item-des {
        color: #fff;
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: space-between;
        .indicator-item-value {
          display: flex;
          font-size: 20px;
          align-items: flex-end;
        }
        .indicator-item-unit {
          font-size: 14px;
        }
      }
    }
    .apply-join {
      display: flex;
      cursor: pointer;
      height: 60px;
      padding: 0 16px;
      background-color: #35365f;
      color: #696cff;
      border-radius: 4px;
      line-height: 60px;
      transition: all 0.2s ease-in-out;
      user-select: none;
      .iconfont {
        font-size: 36px;
      }
      align-items: center;
      gap: 8px;
      &:hover {
        color: #fff !important;
        background-color: #5f61e6;
        box-shadow: 0 0.125rem 0.25rem 0 rgba(105, 108, 255, 0.4) !important;
        transform: translateY(-1px);
      }
    }
  }
  .introduction-wrapper-right {
    @media (max-width: 900px) {
      display: none;
    }
  }
  .tips-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .title {
      font-size: 18px;
      display: flex;
      align-items: center;
    }
    .wechat {
      width: 300px;
      margin: 20px;
      img {
        width: 300px;
      }
    }
    .checked {
      white-space: wrap;
      line-height: 20px;
    }
  }
}
</style>
