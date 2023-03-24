import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';

// reset css
import 'modern-normalize';

const app = createApp(App);
app.use(router);
app.mount('#app');
