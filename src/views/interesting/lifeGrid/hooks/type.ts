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
