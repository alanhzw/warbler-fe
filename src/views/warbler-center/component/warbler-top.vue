<template>
  <div class="warbler-center-top">
    <!-- 背景 -->
    <div class="warbler-center-top-bg">
      <img src="@/assets/image/warbler-center-top-bg.png" />
    </div>
    <!-- 内容 -->
    <div class="warbler-center-top-content">
      <!-- 头像 -->
      <div class="warbler-center-top-content-avatar">
        <div class="avatar-wrap"></div>
      </div>
      <!-- 一些信息 -->
      <div class="warbler-center-top-content-info">
        <div class="warbler-center-top-content-info-words">
          <!-- 昵称 -->
          <div class="warbler-center-top-content-info-nickname">一尾流莺</div>
          <div class="warbler-center-top-content-info-bottom">
            <div class="warbler-center-top-content-info-bottom-left">
              <div class="info-item"><SvgPosition></SvgPosition>前端开发工程师</div>
              <div class="info-item"><SvgCity></SvgCity>北京海淀</div>
              <div class="info-item"><SvgWorktime></SvgWorktime>2020 - 2024</div>
            </div>
            <div class="warbler-center-top-content-info-bottom-contactme">
              <div class="contact-me-button"><SvgContact></SvgContact>查看简历</div>
              <div class="contact-me-button"><SvgContact></SvgContact>联系我</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgCity from '../svg/city.svg';
import SvgPosition from '../svg/position.svg';
import SvgWorktime from '../svg/worktime.svg';
import SvgContact from '../svg/contact.svg';
</script>

<style lang="scss" scoped>
.warbler-center-top {
  width: 100%;
  height: 400px;
  border-radius: 4px;
  background-color: var(--warbler-bg-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  @media (max-width: 1100px) {
    height: auto;
  }

  .warbler-center-top-bg {
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
    }
  }
  .warbler-center-top-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 32px;
    @media (max-width: 1100px) {
      flex-wrap: wrap;
    }
    .warbler-center-top-content-avatar {
      margin-top: -70px;
      width: 160px;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--warbler-bg-card);
      border-radius: 4px;
      flex-shrink: 0;

      .avatar-wrap {
        width: 150px;
        height: 170px;
        background: url('@/assets/image/warbler.jpg');
        background-size: 120%;
        background-position: -20px 0;
        border-radius: 4px;
      }
    }
    .warbler-center-top-content-info {
      flex: 1;
      .warbler-center-top-content-info-words {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        .warbler-center-top-content-info-nickname {
          font-size: 28px;
          margin-top: 8px;
        }
        .warbler-center-top-content-info-bottom {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          @media (max-width: 1100px) {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        .warbler-center-top-content-info-bottom-left {
          display: flex;
          gap: 32px;
          @media (max-width: 1100px) {
            flex-direction: column;
          }
          .info-item {
            display: flex;
            align-items: center;
            gap: 8px;
          }
        }
        .warbler-center-top-content-info-bottom-contactme {
          display: flex;
          justify-content: flex-start;
          gap: 8px;
          @media (max-width: 1100px) {
            margin-top: 20px;
          }
          .contact-me-button {
            background-color: #696cff;
            color: #fff;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            user-select: none;
            display: flex;
            align-items: center;
            gap: 8px;
          }
        }
      }
    }
  }
}
</style>
