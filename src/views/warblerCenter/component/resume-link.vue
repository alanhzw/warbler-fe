<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2023-04-10 21:50:04
 * @LastEditTime: 2023-04-11 15:21:26
 * @FilePath: \warbler-fe\src\views\warblerCenter\component\resume-link.vue
-->
<template>
  <div class="resume-link">
    <div class="title">相关连接</div>
    <div class="link-box">
      <div class="link-content-item">
        <span>·</span>熟悉<strong> Vue </strong>，有多个实际项目开发经验，包括
        <strong> Vue2 </strong>，<strong> Vue3 </strong>，<strong> Nuxt </strong>，<strong>
          VitePress
        </strong>
        等；
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.resume-link {
  width: 100%;
  margin-bottom: 16px;

  .mt8 {
    margin-top: 8px;
  }

  .mt16 {
    margin-top: 16px;
  }
  strong {
    color: var(--warbler-brand);
    margin: 0 5px;
  }

  .title {
    width: 100%;
    font-size: 20px;
    padding-bottom: 16px;
    margin-bottom: 8px;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
  }
  .link-box {
    background-color: var(--warbler-bg);
    padding: 16px;
    border-radius: 4px;
    .link-content-item {
      margin: 8px 16px;
      align-items: center;

      span {
        font-size: 12px;
        display: inline-block;
        transform: scale(3);
        margin-right: 8px;
        color: var(--warbler-brand);
      }
    }
  }
}
</style>
