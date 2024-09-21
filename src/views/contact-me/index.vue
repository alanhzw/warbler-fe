<template>
  <div class="contact">
    <div class="text">- 入群须知：</div>
    <div class="text">- 加群的小伙伴过多，群聊二维码已失效，还请各位添加我微信，备注：进群</div>
    <div class="text">- 本群初衷是给像我一样迷茫，不快乐，现实中没什么朋友的人，一个聊天，游戏，分享生活，参加活动，扩充社交，结识朋友的平台</div>
    <div class="text">- 本群不是技术群，虽然里面大部分都是技术人员，偶尔也会聊技术，但不要抱着学习知识，解决问题的心态加群</div>
    <div class="text">- 本人承诺永远不开二群，旨在维护好一个活跃，友爱，有归属感的乌托邦</div>
    <div class="text">- 本群已经清理共计几百个僵尸，所以进群前确认自己加群的目的，成功进群后请看一下群公告</div>
    <div class="text">- 本群已经组织王者荣耀，金铲铲，英雄联盟，狼人杀等多次线上活动；以及北京、上海、深圳、杭州等地的线下聚餐</div>
    <div class="text warn">- 进群之后不看公告，不看全体成员消息，不参与聊天，不参加线上线下活动，甘于社恐的就不用加群了，免得给彼此造成麻烦</div>
    <el-checkbox v-model="checked" style="margin: 20px 0 0 20px">
      <div class="checked">我已知晓上述内容，并承诺积极发言，积极参与群活动，坚决不做僵尸</div>
    </el-checkbox>
    <el-button style="margin: 20px 0 0 20px" @click="showQR">查看好友二维码</el-button>
    <div class="wechat">
      <img v-if="showQRstatus && checked" src="@/assets/image/wechat.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// 是否勾选协议
const checked = ref(false);
// 是否显示二维码
const showQRstatus = ref(false);

// 展示二维码
const showQR = () => {
  if (checked.value) {
    showQRstatus.value = true;
  } else {
    ElMessage.warning('请先阅读入群须知并勾选');
  }
};

// 如果取消勾选协议，隐藏二维码
watch(
  () => checked.value,
  () => {
    if (!checked.value) {
      showQRstatus.value = false;
    }
  },
);
</script>

<style lang="scss" scoped>
.contact {
  padding: 16px;
  padding-top: 80px;
  width: 100%;
  display: flex;
  font-size: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .wechat {
    width: 300px;
    height: 420px;
    margin: 20px;
    img {
      width: 300px;
    }
  }
  .text {
    @media (min-width: 900px) {
      font-size: 24px;
      line-height: 40px;
    }
    @media (max-width: 900px) {
      font-size: 16px;
      line-height: 30px;
    }
    padding: 0 20px;
    width: 100%;
    text-align: left;
  }
  .warn {
    @media (min-width: 900px) {
      font-size: 40px;
      line-height: 50px;
    }
    @media (max-width: 900px) {
      font-size: 20px;
      line-height: 30px;
    }
    color: red;
    font-weight: bold;
  }
  .text-second {
    margin-left: 40px;
  }
  .checked {
    @media (min-width: 900px) {
      font-size: 20px;
    }
    @media (max-width: 900px) {
      font-size: 14px;
    }
    white-space: wrap;
    line-height: 20px;
  }
}
</style>
