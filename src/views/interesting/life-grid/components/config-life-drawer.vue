<template>
  <el-drawer v-model="drawer" size="850">
    <template #header>
      <div class="config-life-drawer_header">分配人生</div>
    </template>
    <template #default>
      <div class="config-life-body">
        <div class="config-life-body_life-item">
          <div class="config-life-body_life-item__no">1.</div>
          <div class="config-life-body_life-item__text">你于</div>
          <el-date-picker
            v-model="drawerFormData.birthday"
            style="width: 240px"
            type="date"
            format="YYYY-MM-DD"
            :editable="false"
            :clearable="false"
            :disabled-date="disabledDate"
            value-format="YYYY-MM-DD"
            placeholder="请选择" />
          <div class="config-life-body_life-item__text">出生，你能活到</div>
          <el-input
            v-model="drawerFormData.age"
            :maxlength="3"
            style="width: 80px"
            placeholder="请输入" />
          <div class="config-life-body_life-item__text">岁</div>
        </div>
        <div class="config-life-body_life-item">
          <div class="config-life-body_life-item__no">2.</div>
          <div class="config-life-body_life-item__text">已经走过的生命</div>
          <el-color-picker v-model="drawerFormData.pastBackgroundColor" />
        </div>
        <life-item
          v-for="(lifeItem, lifeItemIndex) in drawerFormData.lifeData"
          :key="lifeItemIndex"
          class="config-life-body_life-item"
          :life-item-index="lifeItemIndex"
          :life-item-data="lifeItem"
          @handle-delete="handleDelete"></life-item>
        <div class="config-life-body_life-item" style="color: #fc1717">
          <div class="config-life-body_life-item__no">注:</div>
          <div class="config-life-body_life-item__text">
            所有时间会换算成 【小时/天】 来计算，平均总时长不可以超过 【24小时/天】
          </div>
        </div>
        <el-button @click="addLifeItem">新增一行</el-button>
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
import LifeItem from './life-item.vue';
import { Iform } from '../hooks/type';
import { validate } from '../hooks/validate';
import { disabledDate, getRandomColor } from '../hooks/utils';

interface IPropType {
  formData: Iform;
}

const props = defineProps<IPropType>();
const emit = defineEmits(['changeConfig']);

const defaultData = {
  /** 出生日期 */
  birthday: '',
  /** 年龄 */
  age: '',
  /** 格子数量 */
  gridNum: '',
  /** 已经过去的生命背景颜色 */
  pastBackgroundColor: '',
  /** 表单配置数据  */
  lifeData: [],
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

// 点击删除图标
function handleDelete(delIndex: number) {
  // 从表单数据中删除一个
  drawerFormData.value.lifeData.splice(delIndex, 1);
}

// 点击取消
function handleClickCancel() {
  drawer.value = false;
}

// 点击确定
async function handleClickConfirm() {
  try {
    await validate(drawerFormData.value);
    emit('changeConfig', drawerFormData.value);
    drawer.value = false;
  } catch (error) {
    ElMessage.warning((error as Error).message);
  }
}

// 点击新增一行
const addLifeItem = () => {
  drawerFormData.value.lifeData.push({
    frequency: 'day',
    event: '',
    time: '',
    timeUnit: 'hour',
    backgroundColor: getRandomColor(),
  });
};

// 抽屉打开初始化数据
function init() {
  drawerFormData.value = JSON.parse(JSON.stringify(props.formData));
}

// 抽屉关闭还原表单
function reset() {
  drawerFormData.value = defaultData;
}

// 监听抽屉状态
watch(
  () => drawer.value,
  () => {
    // 打开抽屉初始化数据
    if (drawer.value) {
      init();
    }
    // 关闭抽屉还原表单
    if (!drawer.value) {
      reset();
    }
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
  &_life-item {
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
