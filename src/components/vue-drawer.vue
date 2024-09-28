<template>
  <div class="vue-drawer-wrap">
    <el-drawer v-model="isShowDrawer" v-bind="$attrs">
      <slot></slot>
      <template #footer>
        <slot name="footer">
          <div class="drawer-footer">
            <div class="cancel-btn" @click="triggerCancel">取 消</div>
            <div class="confirm-btn" @click="triggerSubmit">确 认</div>
          </div>
        </slot>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['cancel', 'submit']);

// 展示权限认证弹窗
const isShowDrawer = ref(false);

// 打开弹窗
const showDrawer = () => {
  isShowDrawer.value = true;
};
// 关闭弹窗
const closeDrawer = () => {
  isShowDrawer.value = false;
};
// 触发取消
const triggerCancel = () => {
  emit('cancel');
};
// 触发提交
const triggerSubmit = () => {
  emit('submit');
};

defineExpose({
  showDrawer,
  closeDrawer,
});
</script>

<style lang="scss" scoped>
.vue-drawer-wrap {
  ::v-deep(.el-drawer) {
    background-color: #2b2c40;
    box-shadow: 0 0.25rem 0.75rem 0 rgba(20, 20, 29, 0.24);
  }
  ::v-deep(.el-drawer__header) {
    color: #fff;
  }
  ::v-deep(.el-drawer__title) {
    font-size: 20px;
  }

  .drawer-footer {
    display: flex;
    justify-content: flex-end;
  }
  .cancel-btn {
    color: #8592a3;
    border-color: rgba(0, 0, 0, 0);
    background: #393c50;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 16px;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: rgba(0, 0, 0, 0);
      background: #788393;
      color: #fff;
      box-shadow: 0 2px 4px 0 rgba(133, 146, 163, 0.4);
    }
  }
  .confirm-btn {
    color: #fff;
    background-color: #696cff;
    border-color: #696cff;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 8px;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(105, 108, 255, 0.4);

    &:hover {
      transform: translateY(-1px);
      color: #fff;
      background-color: #5f61e6;
      border-color: #5f61e6;
    }
  }
}
</style>
