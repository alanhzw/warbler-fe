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
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/no-extraneous-dependencies': 0,
    // 关闭文件后缀
    'import/extensions': 0,
    // 关闭文件解析
    'import/no-unresolved': 0,
    // 关闭函数名后面必须有空格的验证
    'space-before-function-paren': 0,
    // 关闭强制不变的变量使用 const, 因为自动格式化 有时候会把 let 变成 const
    'perfer-const': 0,
    // 允许行尾分号
    semi: 0,
    // 允许尾后逗号
    'comma-dangle': 0,
    // 标签</>前后不换行
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    // 强制每行的最大属性数
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 10,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    // 第一个属性的位置
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'beside',
      },
    ],
    // 标签自关闭
    'vue/html-self-closing': 0,
    // 组件命名方式
    'vue/multi-word-component-names': 0,
  },
};
