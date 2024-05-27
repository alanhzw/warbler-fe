<template>
  <div class="contact">
    <div class="text">- 加群的小伙伴过多，群聊二维码已失效，还请各位添加我微信，备注：进群</div>
    <div class="text">
      -
      本群初衷是给像我一样迷茫，不快乐，现实中没什么朋友的人，一个聊天，游戏，分享生活，参加活动，扩充社交，结识朋友的平台
    </div>
    <div class="text">
      -
      本群不是技术群，虽然里面大部分都是技术人员，偶尔也会聊技术，但不要抱着学习，解决问题的心态加群
    </div>
    <div class="text">- 本人承诺永远不开二群，旨在维护好一个活跃，友爱，有归属感的乌托邦</div>
    <div class="text">
      - 本群已经清理共计几百个僵尸，所以进群前确认自己加群的目的，成功进群后请看一下群公告
    </div>
    <div class="text">
      -
      本群已经组织王者荣耀，金铲铲，英雄联盟，狼人杀等多次线上活动；以及北京、上海、深圳等地的线下聚餐
    </div>

    <div class="text" style="color: red; font-weight: bold">
      -
      进群之后不看公告，不看全体成员消息，不参与聊天，不参加线上线下活动，甘于社恐的就不用加群了，免得给彼此造成麻烦
    </div>
    <el-checkbox v-model="checked" style="margin: 40px 0 0 20px">
      <div class="checked">我已知晓上述内容，点击我查看好友二维码</div>
    </el-checkbox>
    <div v-if="checked" class="wechat">
      <img src="@/assets/image/wechat.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
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
  .wechat img {
    width: 300px;
    margin: 20px;
  }
  .text {
    padding: 0 20px;
    width: 100%;
    text-align: left;
    font-size: 30px;
    line-height: 50px;
  }
  .text-second {
    margin-left: 40px;
  }
  .checked {
    font-size: 40px;
  }
}
</style>
