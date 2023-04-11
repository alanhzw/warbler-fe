<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2023-04-10 15:10:48
 * @LastEditTime: 2023-04-11 15:16:00
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
      <div class="info-item">坐标：成都</div>
      <div class="info-item">邮箱：1741847465@qq.com</div>
      <div class="info-item">微信：yiweiliuying0309</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.resume-warbler {
  width: 100%;
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
    margin-top: 8px;
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
}
</style>
