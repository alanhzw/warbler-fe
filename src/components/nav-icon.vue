<!-- eslint-disable max-len -->
<template>
  <!-- 同一个组件， 根据 type 来区分横向还是纵向显示， 默认为 row -->
  <div :class="type === 'row' ? 'flex-direction-row' : 'flex-direction-column'">
    <ul class="example-2">
      <!-- 首页 -->
      <li v-if="type === 'column'" class="icon-content" @click="router.push({ path: '/' })">
        <a aria-label="homepage" data-social="homepage">
          <div class="filled"></div>
          <svg
            class="icon"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
          </svg>
        </a>
        <div class="tooltip">&nbsp;&nbsp;首页&nbsp;&nbsp;</div>
      </li>
      <!-- 前端导航 -->
      <li class="icon-content" @click="router.push({ path: '/navigation' })">
        <a aria-label="navigation" data-social="navigation">
          <div class="filled"></div>
          <svg
            class="lucide lucide-rocket text-cyan-500 dark:text-cyan-400"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path
              d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </a>
        <div class="tooltip">前端导航</div>
      </li>
      <!-- 流莺大院 -->
      <li class="icon-content" @click="router.push({ path: '/warbler/chat' })">
        <a aria-label="chatroom" data-social="chatroom">
          <div class="filled"></div>
          <svg
            height="1.6em"
            fill="currentColor"
            xml:space="preserve"
            viewBox="0 0 1000 1000"
            y="0px"
            x="0px"
            version="1.1">
            <path
              d="M881.1,720.5H434.7L173.3,941V720.5h-54.4C58.8,720.5,10,671.1,10,610.2v-441C10,108.4,58.8,59,118.9,59h762.2C941.2,59,990,108.4,990,169.3v441C990,671.1,941.2,720.5,881.1,720.5L881.1,720.5z M935.6,169.3c0-30.4-24.4-55.2-54.5-55.2H118.9c-30.1,0-54.5,24.7-54.5,55.2v441c0,30.4,24.4,55.1,54.5,55.1h54.4h54.4v110.3l163.3-110.2H500h381.1c30.1,0,54.5-24.7,54.5-55.1V169.3L935.6,169.3z M717.8,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.5,24.7,54.5,55.2C772.2,420.2,747.8,444.8,717.8,444.8L717.8,444.8z M500,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.4,24.7,54.4,55.2C554.4,420.2,530.1,444.8,500,444.8L500,444.8z M282.2,444.8c-30.1,0-54.5-24.7-54.5-55.1c0-30.4,24.4-55.2,54.5-55.2c30.1,0,54.4,24.7,54.4,55.2C336.7,420.2,312.3,444.8,282.2,444.8L282.2,444.8z"></path>
          </svg>
        </a>
        <div class="tooltip">流莺大院</div>
      </li>
      <!-- 个人中心 -->
      <li class="icon-content" @click="router.push({ path: '/warbler/center' })">
        <a aria-label="warbler" data-social="warbler">
          <div class="filled"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
        <div class="tooltip">个人中心</div>
      </li>
      <!-- 脚手架 -->
      <li class="icon-content" @click="router.push({ path: '/warbler/cli' })">
        <a aria-label="cli" data-social="cli">
          <div class="filled"></div>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                id="svg_6"
                d="m14.90347,27.44799c-6.79408,0 -12.29728,-5.5032 -12.29728,-12.29728c0,-6.79408 5.5032,-12.29728 12.29728,-12.29728c6.79408,0 12.29728,5.5032 12.29728,12.29728c0,6.79408 -5.5032,12.29728 -12.29728,12.29728z"
                opacity="undefined"
                stroke-width="3"
                stroke="currentColor"
                fill="none" />
              <text
                id="svg_5"
                font-style="normal"
                font-weight="bold"
                fill="currentColor"
                stroke-width="0"
                x="0"
                y="10"
                font-size="24"
                font-family="Noto Sans JP"
                text-anchor="start"
                xml:space="preserve"
                stroke="currentColor"
                transform="matrix(0.461674 0 0 0.506952 5.03694 14.417)">
                cli
              </text>
            </g>
          </svg>
        </a>
        <div class="tooltip">&nbsp;脚手架&nbsp;</div>
      </li>
      <!-- 工具库 -->
      <li class="icon-content" @click="router.push({ path: '/warbler/js' })">
        <a aria-label="js" data-social="js">
          <div class="filled"></div>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                id="svg_6"
                d="m14.90347,27.44799c-6.79408,0 -12.29728,-5.5032 -12.29728,-12.29728c0,-6.79408 5.5032,-12.29728 12.29728,-12.29728c6.79408,0 12.29728,5.5032 12.29728,12.29728c0,6.79408 -5.5032,12.29728 -12.29728,12.29728z"
                opacity="undefined"
                stroke-width="3"
                stroke="currentColor"
                fill="none" />
              <text
                id="svg_5"
                font-style="normal"
                font-weight="bold"
                fill="currentColor"
                stroke-width="0"
                x="7"
                y="8"
                font-size="24"
                font-family="Noto Sans JP"
                text-anchor="start"
                xml:space="preserve"
                stroke="currentColor"
                transform="matrix(0.461674 0 0 0.506952 5.03694 14.417)">
                js
              </text>
            </g>
          </svg>
        </a>
        <div class="tooltip">&nbsp;工具库&nbsp;</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

interface IPropType {
  type: 'row' | 'column';
}

defineProps<IPropType>();
</script>

<style lang="scss" scoped>
.flex-direction-row {
  ul {
    list-style: none;
    padding-left: 0;
  }

  li::after {
    content: '';
    display: block;
    height: 0px;
    transition: height 0.3s ease-in-out;
    pointer-events: none;
  }

  li:hover::after {
    height: 10px;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }

  .example-2 .icon-content .tooltip {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }

  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    bottom: -40px;
  }

  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }

  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }

  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }

  .example-2 .icon-content a:hover {
    color: white;
  }

  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }

  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }
}

.flex-direction-column {
  ul {
    list-style: none;
    padding-left: 0;
  }

  .example-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }

  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }

  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 15px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }

  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: 6px;
  }

  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 20%;
    color: #4d4d4d;
    background-color: #ffff;
    transition: all 0.3s ease-in-out;
  }

  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
  }

  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }

  .example-2 .icon-content a:hover {
    color: white;
  }

  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }

  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }
}

.icon-content {
  cursor: pointer;
  user-select: none;
}

.tooltip {
  word-break: keep-all;
}

.example-2 .icon-content a[data-social='homepage'] .filled,
.example-2 .icon-content a[data-social='homepage'] ~ .tooltip {
  background-color: rgb(105, 108, 255);
}

.example-2 .icon-content a[data-social='navigation'] .filled,
.example-2 .icon-content a[data-social='navigation'] ~ .tooltip {
  background-color: rgb(3, 195, 236);
}

.example-2 .icon-content a[data-social='chatroom'] .filled,
.example-2 .icon-content a[data-social='chatroom'] ~ .tooltip {
  background-color: #ea4c89;
}

.example-2 .icon-content a[data-social='warbler'] .filled,
.example-2 .icon-content a[data-social='warbler'] ~ .tooltip {
  background-color: rgb(113, 221, 55);
}

.example-2 .icon-content a[data-social='cli'] .filled,
.example-2 .icon-content a[data-social='cli'] ~ .tooltip {
  background-color: rgb(255, 62, 29);
}

.example-2 .icon-content a[data-social='js'] .filled,
.example-2 .icon-content a[data-social='js'] ~ .tooltip {
  background-color: rgb(255, 171, 0);
}
</style>
