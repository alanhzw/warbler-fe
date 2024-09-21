<template>
  <div class="typewriter-box">
    <div class="typewriter">
      <div class="text">
        <span class="Chinese"> 一尾流莺，自由，快乐</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.typewriter-box {
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.text {
  overflow: hidden;
  white-space: nowrap;
  animation: typeEffect 1s steps(70);
  font-size: 50px;
  @media (max-width: 700px) {
    font-size: 32px;
  }
}

.Chinese {
  letter-spacing: 0.05em;
}

@keyframes typeEffect {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
