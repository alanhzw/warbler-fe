// 把 NaN 以及 0.0 转化为-
export const compatibleNaN = (tar: string) => {
  if (Number.isNaN(Number(tar)) || tar === '0.0') {
    return '0';
  }
  return tar;
};

export {};
