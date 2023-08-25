<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2023-04-10 15:10:48
 * @LastEditTime: 2023-08-25 17:54:02
 * @FilePath: \warbler-fe\src\views\warblerCenter\component\resume-warbler.vue
-->
<template>
  <div class="resume-warbler">
    <div class="header">
      <div class="avatar"></div>
      <div class="job">前端工程师</div>
    </div>
    <div class="info">
      <div class="info-item">姓名：韩志伟</div>
      <div class="info-item">昵称：一尾流莺</div>
      <div class="info-item">年龄：25</div>
      <div class="info-item">坐标：北京</div>
      <div class="info-item">邮箱：1741847465@qq.com</div>
      <div class="info-item">微信：yiweiliuying0309</div>
      <div class="info-item">学校：大连大学</div>
      <div class="info-item">专业：软件工程</div>
    </div>
    <div class="contact">
      <div class="words">
        一尾流莺是一个前端开发工程师，性格开朗，热爱分享和书写技术博客，
        平时玩的游戏有明日方舟，英雄联盟手游，金铲铲之战，
        <strong>目前正在北京理想汽车研发总部工作</strong>，如果你对我或我的技术感兴趣 ， 欢迎联系我
      </div>
    </div>
    <div class="icons">
      <i class="iconfont icon icon-juejin" @click="goToLink('juejin')"></i>
      <i class="iconfont icon icon-huaban88" @click="goToLink('github')"></i>
      <i class="iconfont icon icon-weixin" @click="goToLink('wechat')"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLink = (type: string) => {
  if (type === 'juejin') window.open('https://juejin.cn/user/4099422807393901');
  if (type === 'github') window.open('https://github.com/alanhzw');
  if (type === 'wechat') router.push({ path: '/contact' });
};
</script>

<style lang="scss" scoped>
.resume-warbler {
  width: 100%;

  strong {
    color: var(--warbler-brand);
    margin: 0 5px;
  }
  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: url('@/assets/image/warbler.jpg');
      background-size: 100%;
      background-position: -20px 0;
    }
    .job {
      font-size: 24px;
      margin: 16px 0;
      font-weight: bold;
    }
  }

  .info {
    margin: 8px 0 16px 0;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    padding-bottom: 16px;
    @media (min-width: 900px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 900px) {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(auto-fill, 220px);
    }

    .info-item {
      margin-top: 8px;
    }
  }

  .contact {
    .words {
      line-height: 1.4;
      letter-spacing: 1px;
    }
  }
  .icons {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    .icon {
      cursor: pointer;
      font-size: 24px;
      margin: 8px;
      &:hover {
        color: var(--warbler-brand);
      }
    }
  }
}
</style>
