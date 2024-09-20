import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import App from './App.vue';
import router from '@/router/index';

// reset css
import 'modern-normalize';
import '@/style/style.css';

// 字体
import './assets/iconfont/stylesheet.css';

// 阿里图标库
import './assets/iconfont/iconfont.css';

// element-plus
import 'element-plus/theme-chalk/dark/css-vars.css';

const app = createApp(App);
app.use(router);

// 使用中文包，防止有的组件显示英文
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount('#app');
