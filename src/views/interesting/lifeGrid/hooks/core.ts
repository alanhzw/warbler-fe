import { Ref, computed, ref } from 'vue';
import dayjs from 'dayjs';
import { Iform } from './type';

/*
 * @Author: 一尾流莺
 * @Description:人生小格核心算法
 * @Date: 2024-03-17 19:36:20
 * @LastEditTime: 2024-03-17 21:39:34
 * @FilePath: \warbler-fe\src\views\interesting\lifeGrid\hooks\core.ts
 */
const core = (formData: Ref<Iform>) => {
  // 当前时间的dayjs对象
  const now = ref(dayjs());

  // 生日日期的dayjs对象
  const birthday = computed(() => dayjs(formData.value.birthday));

  // 去世日期的dayjs对象
  const deathTime = computed(() => birthday.value.add(Number(formData.value.age), 'year'));

  // 整合人生的时间
  // const whileLife = computed(() => deathTime.value.diff(birthday.value, 'millisecond'));

  // 已经过去的时间
  const pastTime = computed(() => ({
    year: now.value.diff(birthday.value, 'year', true).toFixed(1),
    month: now.value.diff(birthday.value, 'month', true).toFixed(1),
    day: now.value.diff(birthday.value, 'day', true).toFixed(1),
    hour: now.value.diff(birthday.value, 'hour', true).toFixed(1),
    minute: now.value.diff(birthday.value, 'minute', true).toFixed(1),
    second: now.value.diff(birthday.value, 'second'),
  }));

  // 剩余的时间
  const remainTime = computed(() => ({
    year: deathTime.value.diff(now.value, 'year', true).toFixed(1),
    month: deathTime.value.diff(now.value, 'month', true).toFixed(1),
    day: deathTime.value.diff(now.value, 'day', true).toFixed(1),
    hour: deathTime.value.diff(now.value, 'hour', true).toFixed(1),
    minute: deathTime.value.diff(now.value, 'minute', true).toFixed(1),
    second: deathTime.value.diff(now.value, 'second'),
  }));

  // 计算小方格的背景颜色
  // const getGridBackgroundColor = (time: number) => {
  //   if (time < 0) {
  //     return 'red';
  //   }
  //   if (time < 1000) {
  //     return 'yellow';
  //   }
  //   return 'green';
  // };

  // 人生小格的数据
  const grids = computed(() => {
    const gridsData = Array.from({ length: Number(formData.value.gridNum) }, (_, index) => ({
      id: index,
      backgroundColor: '#e2e2e2',
    }));
    return gridsData;
  });

  return {
    pastTime,
    deathTime,
    remainTime,
    grids,
  };
};

export default core;
