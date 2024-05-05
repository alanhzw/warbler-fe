/** 频率 */
export const frequencyOptions = [
  {
    label: '年',
    value: 'year',
  },
  {
    label: '月',
    value: 'month',
  },
  {
    label: '天',
    value: 'day',
  },
];

/** 耗时单位 */
export const timeUnitOptions = [
  {
    label: '天',
    value: 'day',
  },
  {
    label: '小时',
    value: 'hour',
  },
  {
    label: '分',
    value: 'minute',
  },
  {
    label: '秒',
    value: 'second',
  },
];

// 频率换算成年
export const frequencyRate: { [key: string]: number } = {
  // 如果是天的话, * 365 之后是每年的时间
  day: 365,
  // 如果是月的话, * 12 之后是每年的时间
  month: 12,
  // 如果是年的话, * 1 之后是每年的时间
  year: 1,
};

// 时间单位换算成毫秒
export const timeUnitRate: { [key: string]: number } = {
  // 每秒 1000 毫秒
  second: 1 * 1000,
  // 每分钟 60 秒
  minute: 1 * 1000 * 60,
  // 每小时 60 分钟
  hour: 1 * 1000 * 60 * 60,
  // 每天 24 小时
  day: 1 * 1000 * 60 * 60 * 24,
};
