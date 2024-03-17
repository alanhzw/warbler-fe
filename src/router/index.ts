import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // 首页
  {
    path: '/',
    name: 'homepage',
    component: () => import(/* webpackChunkName: "homepage" */ '@v/homepage/index.vue'),
    children: [],
  },
  // 前端导航
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import(/* webpackChunkName: "navigation" */ '@v/navigation/index.vue'),
    children: [],
  },
  // warblerJS 文档
  {
    path: '/warbler/js',
    name: 'warblerJS',
    component: () => import(/* webpackChunkName: "warblerJS" */ '@v/warblerJs/index.vue'),
    children: [],
  },
  // warblerCli 文档
  {
    path: '/warbler/cli',
    name: 'warblerCli',
    component: () => import(/* webpackChunkName: "warblerCli" */ '@v/warblerCli/index.vue'),
    children: [],
  },
  // 数据中心
  {
    path: '/dataCenter',
    name: 'dataCenter',
    component: () => import(/* webpackChunkName: "dataCenter" */ '@v/dataCenter/index.vue'),
    children: [],
  },
  // 个人中心
  {
    path: '/warblerCenter',
    name: 'warblerCenter',
    component: () => import(/* webpackChunkName: "warblerCenter" */ '@v/warblerCenter/index.vue'),
    children: [],
  },
  // 联系我 微信
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@v/contact/index.vue'),
    children: [],
  },
  // 人生小格
  {
    path: '/interesting/lifeGrid',
    name: 'lifeGrid',
    component: () => import(/* webpackChunkName: "lifeGrid" */ '@v/interesting/lifeGrid/index.vue'),
    children: [],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
