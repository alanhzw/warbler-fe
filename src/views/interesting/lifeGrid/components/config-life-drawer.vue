<template>
  <el-drawer v-model="drawer" size="850">
    <template #header>
      <div class="config-life-drawer_header">分配人生</div>
    </template>
    <template #default>
      <div></div>
      <div class="config-life-body">
        <div class="config-life-body_form-item">
          <div class="config-life-body_form-item__no">1.</div>
          <div class="config-life-body_form-item__text">你于</div>
          <el-date-picker
            v-model="drawerFormData.birthday"
            style="width: 240px"
            type="datetime"
            placeholder="请选择" />
          <div class="config-life-body_form-item__text">出生</div>
        </div>
        <div class="config-life-body_form-item">
          <div class="config-life-body_form-item__no">2.</div>
          <div class="config-life-body_form-item__text">你能活到</div>
          <el-input
            v-model="drawerFormData.age"
            clearable
            style="width: 240px"
            placeholder="请输入" />
          <div class="config-life-body_form-item__text">岁</div>
        </div>
        <div class="config-life-body_form-item">
          <div class="config-life-body_form-item__no">3.</div>
          <div class="config-life-body_form-item__text">你希望生成</div>
          <el-input
            v-model="drawerFormData.gridNum"
            clearable
            style="width: 240px"
            placeholder="请输入" />
          <div class="config-life-body_form-item__text">个格子</div>
        </div>
        <form-item
          v-for="(formItem, formItemIndex) in drawerFormData.formData"
          :key="formItemIndex"
          class="config-life-body_form-item"
          :form-item-index="formItemIndex"
          :form-item-data="formItem"></form-item>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="handleClickCancel">取消</el-button>
        <el-button type="primary" @click="handleClickConfirm">确定</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import FormItem from './form-item.vue';
import { Iform } from '../hooks/type';

interface IPropType {
  formData: Iform;
}

const props = defineProps<IPropType>();

const defaultData = {
  /** 出生日期 */
  birthday: '',
  /** 年龄 */
  age: '80',
  /** 格子数量 */
  gridNum: '400',
  /** 表单配置数据  */
  formData: [],
};

// 抽屉表单数据
const drawerFormData = ref<Iform>(defaultData);

// 分配人生抽屉
const drawer = ref(false);

// 表单校验

// 计算格子

// 打开抽屉
function openDrawer() {
  drawer.value = true;
}

// 点击取消
function handleClickCancel() {
  drawer.value = false;
}

// 点击确定
function handleClickConfirm() {
  drawer.value = false;
}

// 抽屉打开初始化数据
function init() {
  drawerFormData.value = props.formData;
}

// 抽屉关闭还原表单
function reset() {
  drawerFormData.value = defaultData;
}

watch(
  () => drawer.value,
  () => {
    if (drawer.value) {
      init();
    }
    if (!drawer.value) {
      reset();
    }
  },
  {
    immediate: false,
  },
);

defineExpose({
  openDrawer,
});
</script>

<style lang="scss" scoped>
.config-life-drawer_header {
  color: var(--warbler-white);
  font-weight: bold;
}
.config-life-body {
  display: flex;
  flex-direction: column;
  &_form-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 16px;
    &__no {
      font-size: 16px;
      margin: 0 8px;
    }
    &__text {
      font-size: 16px;
      margin: 0 8px;
    }
  }
}
</style>
