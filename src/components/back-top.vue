<!-- eslint-disable max-len -->
<template>
  <div class="back-top">
    <button class="button" @click="emit('handleBackTop')">
      <svg class="svgIcon" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['handleBackTop']);
</script>

<style lang="scss" scoped>
.back-top {
  .button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(105, 108, 255, 0.7);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(105, 108, 255, 0.3);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: #696cff;
    align-items: center;
  }
}
</style>
