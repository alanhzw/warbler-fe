import { createRouter, createWebHistory } from 'vue-router';
import Navigation from '@v/navigation/index.vue';

const routes = [
  {
    path: '/',
    component: Navigation,
    children: [],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
