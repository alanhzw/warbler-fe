<template>
  <div class="warbler-center-detail">
    <div class="title">个人资料</div>
    <div class="details">
      <div class="detail-item"><i class="iconfont icon-fangke"> </i>姓名：韩志伟</div>
      <div class="detail-item"><i class="iconfont icon-ziyuan48"> </i>年龄：26</div>
      <div class="detail-item"><i class="iconfont icon-nianling1"> </i>生日：1998-03-09</div>
      <div class="detail-item">
        <i class="iconfont icon-aihao"> </i>爱好：桌游，聚会，电影，辩论
      </div>
      <div class="detail-item"><i class="iconfont icon-youxi"> </i>游戏：LOL手游，金铲铲之战</div>
      <div class="detail-item">
        <i class="iconfont icon-xuexiao_xuexiaoxinxi"> </i>学校：大连大学
      </div>
      <div class="detail-item"><i class="iconfont icon-diannao1"> </i>专业：软件工程</div>
      <div class="detail-item"><i class="iconfont icon-QQ"> </i>企鹅：1741847465</div>
      <div class="detail-item"><i class="iconfont icon-youxiang1"> </i>邮箱：1741847465@qq.com</div>
      <div class="detail-item"><i class="iconfont icon-weixin"> </i>微信：yiweiliuying0309</div>
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss" scoped>
.warbler-center-detail {
  border-radius: 4px;
  background-color: var(--warbler-bg-card);
  padding: 32px;
  flex-shrink: 0;
  .title {
    font-size: 18px;
  }
  .details {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 16px;

    .detail-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>
