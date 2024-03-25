/** 配置每一项类型 */
export interface IFormItem {
  /** 频率 */
  frequency: string;
  /** 事件 */
  event: string;
  /** 耗时 */
  time: string;
  /** 耗时单位 */
  timeUnit: string;
  /** 格子颜色 */
  backgroundColor: string;
}

/** 表单数据 */
export interface Iform {
  /** 出生日期 */
  birthday: string;
  /** 年龄 */
  age: string;
  /** 格子数量 */
  gridNum: string;
  /** 表单配置数据 */
  formData: Array<IFormItem>;
}

/** 人生时间 */
export interface ILifeTime {
  /** 年 */
  year: string;
  /** 月 */
  month: string;
  /** 日 */
  day: string;
  /** 时 */
  hour: string;
  /** 分 */
  minute: string;
  /** 秒 */
  second: string;
  [key: string]: any;
}
