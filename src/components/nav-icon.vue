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
            t="1727011940415"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3831"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="200"
            height="200">
            <path
              d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
              fill="currentColor"
              p-id="3832"></path>
          </svg>
        </a>
        <div class="tooltip">流莺大院</div>
      </li>
      <!-- 个人中心 -->
      <li class="icon-content" @click="router.push({ path: '/warbler/center' })">
        <a aria-label="warbler" data-social="warbler">
          <div class="filled"></div>
          <svg
            t="1727012175123"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8225"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="200"
            height="200">
            <path
              d="M289.213573 708.215569a51.097804 51.097804 0 1 0 102.195609 0 51.097804 51.097804 0 1 0-102.195609 0Z"
              p-id="8226"></path>
            <path
              d="M632.590818 708.215569a51.097804 51.097804 0 1 0 102.195609 0 51.097804 51.097804 0 1 0-102.195609 0Z"
              p-id="8227"></path>
            <path
              d="M981.077844 464.99002c-9.197605-152.271457-76.646707-190.083832-76.646706-190.083832s21.461078-26.570858 37.812375-13.28543c0 0 3.065868-60.295409-84.822355-39.856287 0 0-7.153693-92.998004-53.141717-96.063872 0 0 2.043912 20.439122-29.636726 32.702595 0 0-51.097804-59.273453-177.82036-54.163673-56.207585 2.043912-167.600798-80.734531-167.600798-100.151697 0 0-83.800399-8.175649-58.251497 85.844312 0 0-76.646707 2.043912-113.437126-38.834332 0 0-78.690619 13.285429-42.922156 116.502994 0 0-104.239521 14.307385-111.393213 71.536927 0 0 28.61477 14.307385 23.50499 28.61477 0 0-76.646707 55.185629-84.822355 183.952096-4.087824 61.317365 6.131737 115.481038 23.50499 162.491018-28.61477 27.592814-31.680639 78.690619-4.087825 121.612774 21.461078 33.724551 55.185629 53.141717 86.866268 53.141717 7.153693 0 15.329341-1.021956 21.461078-3.065868C215.632735 922.826347 351.552894 1024 512 1024s296.367265-101.173653 341.333333-239.137725c7.153693 2.043912 14.307385 3.065868 21.461078 3.065869 31.680639 0 65.40519-19.417166 86.866268-53.141717 27.592814-43.944112 24.526946-96.063872-5.109781-122.63473 17.373253-44.966068 28.61477-94.01996 24.526946-147.161677zM96.063872 712.303393c-12.263473-19.417166-15.329341-39.856287-11.241517-55.185629 18.39521 35.768463 38.834331 66.427146 58.251497 88.91018-14.307385-1.021956-33.724551-12.263473-47.00998-33.724551zM818.586826 757.269461c-34.746507 128.766467-159.42515 224.830339-306.586826 224.830339s-271.840319-96.063872-306.586826-224.830339c-6.131737-23.50499-9.197605-48.031936-9.197605-72.558882 0-13.285429 1.021956-25.548902 3.065868-38.834331-1.021956-1.021956-1.021956-2.043912-2.043912-3.065869 0-1.021956 1.021956-2.043912 1.021956-3.065868 0 0 56.207585-13.285429 38.834331-91.976048 0 0 109.349301 16.351297 133.876248-23.50499 0 0 7.153693 50.075848-59.273453 76.646707 0 0 152.271457 47.00998 248.335329-27.592815 0 0 4.087824 15.329341-6.131736 25.548902 0 0 119.568862 9.197605 207.457085-64.383233 0 0 7.153693 77.668663 36.79042 108.327345 13.285429 13.285429 23.50499 38.834331 28.61477 66.427146-1.021956 17.373253-4.087824 32.702595-8.175649 48.031936z m109.349302-44.966068c-14.307385 22.483034-35.768463 33.724551-51.097805 34.746507 19.417166-24.526946 41.9002-55.185629 60.29541-91.976048 6.131737 14.307385 4.087824 36.790419-9.197605 57.229541z"
              p-id="8228"></path>
          </svg>
        </a>
        <div class="tooltip">个人中心</div>
      </li>
      <!-- 脚手架 router.push({ path: '/warbler/cli' }) -->
      <li class="icon-content" @click="noPass">
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
      <!-- 工具库 router.push({ path: '/warbler/js' })-->
      <li class="icon-content" @click="noPass">
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

const noPass = () => {
  ElMessage.warning('暂未开放，敬请期待！');
};
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
