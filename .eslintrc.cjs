module.exports = {
  root: true,
  globals: {
    defineProps: 'readonly',
    defineExpose: 'readonly',
    defineEmits: 'readonly',
    withDefaults: 'readonly',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'airbnb-base'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
  },
  rules: {
    // 关闭函数名后面必须有空格的验证
    'space-before-function-paren': 0,
    // 关闭强制不变的变量使用 const, 因为自动格式化 有时候会把 let 变成 const
    'perfer-const': 0,
    // 允许行尾分号
    semi: 0,
    // 允许尾后逗号
    'comma-dangle': 0,
  },
};
