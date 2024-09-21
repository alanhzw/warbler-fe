import { IOption } from './type';

// 根据label获取value
export const getValueBylabel = (label: string, options: IOption[]) => {
  const option = options.find((item) => item.label === label);
  return option?.value;
};

// 根据value获取label
export const getLabelByValue = (value: string, options: IOption[]) => {
  const option = options.find((item) => item.value === value);
  return option?.label;
};

// 限制用户只能选择1950年1月1日到今天的日期，
export const disabledDate = (date: Date) => {
  // 获取当前日期
  const now = new Date();

  // 创建1950年1月1日的日期对象
  const minDate = new Date(1950, 0, 1);

  // 检查日期是否在1950年1月1日之后且小于等于当前日期
  return date < minDate || date > now;
};

// 实时刷新
export const realTimeRefresh = (callback: () => void) => {
  function fn() {
    callback();
    requestAnimationFrame(fn);
  }
  requestAnimationFrame(fn);
};

// 复制到粘贴板
export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    ElMessage.success('复制成功');
  } catch (err) {
    ElMessage.error('复制失败');
  }
}

// 生成随机颜色
export function getRandomColor() {
  // 生成0-15的随机数，然后转换为16进制（0-F）
  function randomHex() {
    return Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase();
  }
  // 生成6个随机的16进制数并连接成一个字符串
  return `#${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}`;
}
