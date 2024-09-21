<template>
  <div class="page-container">
    <navIcon v-if="routerName && routerName !== 'homepage'" type="column" class="nav-icon">
    </navIcon>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import navIcon from './components/nav-icon.vue';

const route = useRoute();

const routerName = computed(() => route.name);

onMounted(() => {
  // 页面渲染完成的时候把 loading 隐藏掉
  const ele = document.getElementById('spinner');
  ele!.style.display = 'none';
});
</script>

<style lang="scss" scoped>
.page-container {
  padding: 0 60px;
  @media (max-width: 700px) {
    padding: 0 0px;
  }
}

.nav-icon {
  position: fixed;
  left: -10px;
  top: 10%;
  z-index: 999;
  transform: scale(0.7);

  @media (max-width: 700px) {
    left: -15px;
    transform: scale(0.5);
  }
}
</style>
