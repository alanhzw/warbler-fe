<template>
  <!-- Warbler-FE，让前端简单一点。 -->
  <div class="typewriter-box">
    <div class="typewriter">
      <h1>
        Warbler-FE，
        <span class="Chinese">让前端简单一点。</span>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.typewriter-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

h1 {
  overflow: hidden;
  white-space: nowrap;
  animation: typeEffect 1s steps(70);
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
