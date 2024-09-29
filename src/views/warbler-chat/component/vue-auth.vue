<template>
  <div v-if="!dataStore.isAuthentication" class="auth-wrap">
    <div class="text">
      <SvgWarn style="margin-right: 8px"></SvgWarn>
      未通过暗号认证，无法查看群成员数据
      <a class="btn" @click="openAuthDrawer">→前往认证→</a>
    </div>
    <VueDrawer
      ref="authDrawerRef"
      title="权限认证"
      :size="dataStore.isSmallScreen ? '100%' : '600'"
      @submit="handleConfirm"
      @cancel="handleCancel">
      <template #default>
        <div class="tips-content">
          <div class="tips">
            <div class="tip">为了保护群成员隐私，只有对上暗号才可以查看数据</div>
            <div class="tip">请联系博主获取暗号</div>
          </div>
          <el-input v-model="code" style="width: 100%" :maxlength="50" placeholder="请输入暗号" />
        </div>
      </template>
    </VueDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SvgWarn from '../svg/warn.svg';
import { useDataStore } from '../store/warbler.js';
import VueDrawer from '@/components/vue-drawer.vue';

const dataStore = useDataStore();

// 权限弹窗
const authDrawerRef = ref();

// 暗号
const code = ref('');

// 确定
const handleConfirm = () => {
  const isPass = dataStore.triggerAuth(code.value);
  if (isPass) {
    authDrawerRef.value.closeDrawer();
    ElMessage.success('暗号验证成功，已开启所有权限！');
  } else {
    ElMessage.warning('暗号验证失败，请联系博主获取！');
    code.value = '';
  }
};

// 取消
const handleCancel = () => {
  code.value = '';
  authDrawerRef.value.closeDrawer();
};

// 打开权限弹窗
const openAuthDrawer = () => {
  authDrawerRef.value.showDrawer();
};
</script>

<style lang="scss" scoped>
.auth-wrap {
  .text {
    display: flex;
    align-items: center;
    border: 1px dashed #ffab00;
    color: #ffab00;
    border-radius: 4px;
    padding: 12px 16px;
    margin-bottom: 32px;
    .btn {
      margin-left: 40px;
      color: #eb461d;
      cursor: pointer;
      user-select: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .tips-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
