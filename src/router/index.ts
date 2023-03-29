import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import(/* webpackChunkName: "homepage" */ '@v/homepage/index.vue'),
    children: [],
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import(/* webpackChunkName: "navigation" */ '@v/navigation/index.vue'),
    children: [],
  },
  {
    path: '/warbler/js',
    name: 'warblerJS',
    component: () => import(/* webpackChunkName: "warblerJS" */ '@v/warblerJs/index.vue'),
    children: [],
  },
  {
    path: '/warbler/cli',
    name: 'warblerCli',
    component: () => import(/* webpackChunkName: "warblerCli" */ '@v/warblerCli/index.vue'),
    children: [],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
