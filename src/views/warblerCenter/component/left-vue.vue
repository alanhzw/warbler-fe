<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2023-04-10 15:10:48
 * @LastEditTime: 2023-04-10 20:59:55
 * @FilePath: \warbler-fe\src\views\warblerCenter\component\left-vue.vue
-->
<template>
  <div class="left-vue">
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
.left-vue {
  width: 250px;
  height: 100%;
  background-color: var(--warbler-bg-soft);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;

  .header {
    width: 218px;
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
    display: flex;
    flex-direction: column;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    padding-bottom: 16px;

    .info-item {
      margin-top: 8px;
    }
  }
}
</style>
