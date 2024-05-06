/* eslint-disable arrow-body-style */
import { frequencyRate, timeUnitRate } from './const';
import { ILifeItem, Iform } from './type';

// 获取每个事件每小时的毫秒数
const getPerEventMillisecondHour = (event: ILifeItem): number => {
  // 解构出事件的频率、时间、时间单位
  const { frequency, time, timeUnit } = event;
  // 根据频率、时间单位、时间计算出事件对应的毫秒数
  return (frequencyRate[frequency] * timeUnitRate[timeUnit] * Number(time)) / 365;
};

// 表单校验
export const validate = (formData: Iform) => {
  return new Promise((resolve, reject) => {
    // 校验年龄, 不能超过 100 岁
    if (Number(formData.age) > 100) {
      reject(new Error('你还想活多久，长生不老得了呗'));
    }
    // 校验所有输入框是否填写完整
    const isAllFill = formData.lifeData.every((event) => {
      const { frequency, time, timeUnit } = event;
      return frequency && time && timeUnit;
    });
    if (!isAllFill) {
      reject(new Error('你瞎啊，看不见有没填的吗'));
    }
    // 校验所有的时间加起来不能超过 24 小时每天
    const totalMillisecondHour = formData.lifeData.reduce(
      (total, event) => total + getPerEventMillisecondHour(event),
      0,
    );
    if (totalMillisecondHour > 24 * 60 * 60 * 1000) {
      reject(new Error('每天都超过 24 小时了，你咋不上天呢'));
    }
    // 校验颜色是否重复
    const isColorRepeat = formData.lifeData.some((event, index) => {
      return (
        formData.lifeData.some(
          (event2, index2) => index !== index2 && event.backgroundColor === event2.backgroundColor,
        ) || event.backgroundColor === formData.pastBackgroundColor
      );
    });
    if (isColorRepeat) {
      reject(new Error('用一样的色儿，你能分出来吗'));
    }
    resolve(true);
  });
};
