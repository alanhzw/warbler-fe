/* eslint-disable  */
/* eslint-disable arrow-body-style */
import dayjs from 'dayjs';
import { frequencyRate, timeUnitRate } from './const';
import { ILifeItem, Iform } from './type';

// 获取每个事件每小时的毫秒数
const getPerEventMillisecondHour = (event: ILifeItem): number => {
  // 解构出事件的频率、时间、时间单位
  const { frequency, time, timeUnit } = event;
  // 根据频率、时间单位、时间计算出事件对应的毫秒数
  return (frequencyRate[frequency] * timeUnitRate[timeUnit] * Number(time)) / 365;
};

// 校验是否为正数
function isPositive(str: string) {
  const regex = /^[1-9]\d*(\.\d+)?$|^0\.\d+$/;
  return regex.test(str);
}

// 校验是否为正整数
function isPositiveInteger(str: string) {
  const regex = /^[1-9]\d*$/;
  return regex.test(str);
}

// 校验目标年龄必须大于当前年龄
function isLive(formData: Iform) {
  // 生日年份
  const birthday = dayjs(formData.birthday).year();
  // 当前年份
  const today = dayjs().year();
  // 填写的目标年龄要大于现在的年龄
  return Number(formData.age) < today - birthday;
}

// 校验所有输入框是否填写完整
function isAllFill(formData: Iform) {
  return formData.lifeData.every((life) => {
    const { time, event } = life;
    return event && time;
  });
}

// 校验所有的事件的时间都必须填写正数
const isAllEventTimeNumber = (formData: Iform) => {
  return formData.lifeData.every((event) => {
    const { time } = event;
    return isPositive(time);
  });
};

// 校验所有的时间加起来不能超过 24 小时每天
function isMoreDay(formData: Iform) {
  const totalMillisecondHour = formData.lifeData.reduce(
    (total, event) => total + getPerEventMillisecondHour(event),
    0,
  );
  return totalMillisecondHour > 24 * 60 * 60 * 1000;
}

// 校验颜色是否重复
function isRepeatColor(formData: Iform) {
  // 校验事件的颜色是否重复
  const isColorRepeat = formData.lifeData.some((event, index) => {
    return formData.lifeData.some((event2, index2) => {
      return (
        index !== index2 &&
        event.backgroundColor.toLowerCase().trim() === event2.backgroundColor.toLowerCase().trim()
      );
    });
  });
  // 校验事件的颜色是否和过去的颜色重复
  const isColorRepeatPastBackGroundColor = formData.lifeData.some((event) => {
    return (
      event.backgroundColor.toLowerCase().trim() ===
      formData.pastBackgroundColor.toLowerCase().trim()
    );
  });
  return isColorRepeat || isColorRepeatPastBackGroundColor;
}

// 表单校验
export const validate = (formData: Iform) => {
  return new Promise((resolve, reject) => {
    // 校验目标年龄, 必须填写正整数
    if (!isPositiveInteger(formData.age)) {
      reject(new Error('年龄要填正整数啊，亲'));
    }
    // 校验目标年龄, 不能超过 100 岁
    if (Number(formData.age) > 100) {
      reject(new Error('你还想活多久，长生不老得了呗'));
    }
    // 校验目标年龄, 要比现在大
    if (isLive(formData)) {
      reject(new Error('你已经噶了，宝贝'));
    }
    // 校验所有输入框是否填写完整
    if (!isAllFill(formData)) {
      reject(new Error('你瞎啊，看不见有没填的吗'));
    }
    if (!isAllEventTimeNumber(formData)) {
      reject(new Error('时间要填正数啊，亲'));
    }
    // 校验所有的时间加起来不能超过 24 小时每天
    if (isMoreDay(formData)) {
      reject(new Error('每天都超过 24 小时了，你咋不上天呢'));
    }
    // 校验颜色是否重复
    if (isRepeatColor(formData)) {
      reject(new Error('用一样的色儿，你能分出来吗'));
    }
    resolve(true);
  });
};
