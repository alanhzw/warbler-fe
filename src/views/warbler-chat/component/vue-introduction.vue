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
      <div class="introduction">流莺大院是一个摸鱼、聊天、聚会、游戏、结识新朋友的乌托邦，欢迎每一个积极发言、踊跃活动、遵守群规的小伙伴入住 ~</div>
      <!-- 指标 -->
      <div class="indicator-wrapper">
        <!-- 建群时间 -->
        <div class="indicator-item">
          <div class="indicator-item-icon" style="background-color: #36483f">
            <i class="iconfont icon-shijian" style="color: #71dd37"> </i>
          </div>
          <div class="indicator-item-des">
            <div class="indicator-item-key">已成立</div>
            <div class="indicator-item-value" style="color: #71dd37">
              303
              <div class="indicator-item-unit">&nbsp;天</div>
            </div>
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
      </div>
    </div>
    <div class="introduction-wrapper-right">
      <SvgJoin style="width: 200px; height: 200px"></SvgJoin>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgJoin from '../svg/join.svg';
</script>

<style lang="scss" scoped>
.vue-introduction {
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 32px;
    display: flex;
    align-items: flex-end;
    .welcome {
      font-size: 22px;
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
  }
  .indicator-wrapper {
    display: flex;
    justify-content: flex-start;
    padding: 10px 0 32px 0;
    gap: 160px;
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
        color: #b2b2c4;
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: space-between;
        .indicator-item-key {
        }
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
  }
}
</style>
