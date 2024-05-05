// 人生小格核心算法
import { Ref, computed, ref } from 'vue';
import dayjs from 'dayjs';
import type { Iform, ILifeItem, ILifeTime } from './type';
import { frequencyRate, timeUnitRate } from './const';
import { realTimeRefresh } from './utils';

const core = (formData: Ref<Iform>) => {
  // 当前时间的dayjs对象
  const now = ref(dayjs());

  // 实时刷新
  realTimeRefresh(() => {
    now.value = dayjs();
  });

  // 生日日期的dayjs对象
  const birthday = computed(() => dayjs(formData.value.birthday));

  // 去世日期的dayjs对象
  const deathTime = computed(() => birthday.value.add(Number(formData.value.age), 'year'));

  // 整个人生的时间, 以毫秒为单位
  const whileLife = computed(() => deathTime.value.diff(birthday.value, 'millisecond'));

  // 已经过去的时间
  const pastTime = computed<ILifeTime>(() => ({
    year: now.value.diff(birthday.value, 'year', true).toFixed(1),
    month: now.value.diff(birthday.value, 'month', true).toFixed(1),
    day: now.value.diff(birthday.value, 'day', true).toFixed(1),
    hour: now.value.diff(birthday.value, 'hour', true).toFixed(1),
    minute: now.value.diff(birthday.value, 'minute', true).toFixed(1),
    second: now.value.diff(birthday.value, 'second', true).toFixed(),
    millisecond: now.value.diff(birthday.value, 'millisecond', true).toFixed(),
  }));

  // 剩余的时间
  const remainTime = computed<ILifeTime>(() => ({
    year: deathTime.value.diff(now.value, 'year', true).toFixed(1),
    month: deathTime.value.diff(now.value, 'month', true).toFixed(1),
    day: deathTime.value.diff(now.value, 'day', true).toFixed(1),
    hour: deathTime.value.diff(now.value, 'hour', true).toFixed(1),
    minute: deathTime.value.diff(now.value, 'minute', true).toFixed(1),
    second: deathTime.value.diff(now.value, 'second', true).toFixed(),
    millisecond: deathTime.value.diff(now.value, 'millisecond', true).toFixed(),
  }));

  // 获取每个事件每年的毫秒数
  const getPerEventMillisecond = (event: ILifeItem): number => {
    // 解构出事件的频率、时间、时间单位
    const { frequency, time, timeUnit } = event;
    // 根据频率、时间单位、时间计算出事件对应的毫秒数
    return frequencyRate[frequency] * timeUnitRate[timeUnit] * Number(time);
  };

  // 人生小格的数据
  const grids = computed(() => {
    // 根据格子的数量初始化小格数据
    const gridsData = Array.from({ length: Number(formData.value.gridNum) }, (_, index) => ({
      id: index,
      backgroundColor: '#e2e2e2',
      className: '',
      event: '',
    }));
    // 给格子数据添加毫秒属性
    const lifeDataMillisecond = formData.value.lifeData.map((item) => ({
      ...item,
      // 计算每个事件对应的总毫秒数 每年的毫秒数 * 剩余生命的年数
      millisecond: getPerEventMillisecond(item) * Number(remainTime.value.year),
    }));
    lifeDataMillisecond.unshift({
      /** 频率 */
      frequency: '',
      /** 事件 */
      event: '',
      /** 耗时 */
      time: '',
      /** 耗时单位 */
      timeUnit: '',
      /** 格子颜色 */
      backgroundColor: formData.value.pastBackgroundColor,
      // 已经度过的生命的总毫秒数
      millisecond: Number(pastTime.value.millisecond),
      // className
      className: 'past',
    });
    // 用于跟踪当前分配到的格子索引
    let currentGridIndex = 0;
    // 遍历所有事件
    lifeDataMillisecond.forEach((event) => {
      // 计算每个事件占整个人生命的百分比
      const eventPercentage = Number((event.millisecond / whileLife.value).toFixed(2));
      // 根据百分比计算出该事件应该占多少格子
      const gridsForEvent = Math.floor(eventPercentage * gridsData.length);
      // 遍历该事件应该占多少格子，将当前格子的背景颜色设置为该事件的背景颜色
      Array.from({ length: gridsForEvent }).forEach(() => {
        if (currentGridIndex < gridsData.length) {
          gridsData[currentGridIndex].backgroundColor = event.backgroundColor;
          gridsData[currentGridIndex].className = event.className || '';
          gridsData[currentGridIndex].event = event.event;
        }
        currentGridIndex += 1;
      });
    });
    // 计算每个格子的背景颜色
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
