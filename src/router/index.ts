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
    component: () => import(/* webpackChunkName: "warblerJS" */ '@v/warbler-js/index.vue'),
    children: [],
  },
  // warblerCli 文档
  {
    path: '/warbler/cli',
    name: 'warblerCli',
    component: () => import(/* webpackChunkName: "warblerCli" */ '@v/warbler-cli/index.vue'),
    children: [],
  },
  // 流莺大院
  {
    path: '/warbler/chat',
    name: 'warblerChat',
    component: () => import(/* webpackChunkName: "warblerChat" */ '@v/warbler-chat/index.vue'),
    children: [],
  },
  // 数据中心
  {
    path: '/data/center',
    name: 'dataCenter',
    component: () => import(/* webpackChunkName: "dataCenter" */ '@v/data-center/index.vue'),
    children: [],
  },
  // 个人中心
  {
    path: '/warbler/center',
    name: 'warblerCenter',
    component: () => import(/* webpackChunkName: "warblerCenter" */ '@v/warbler-center/index.vue'),
    children: [],
  },
  // 联系我 微信
  {
    path: '/contact-me',
    name: 'contactMe',
    component: () => import(/* webpackChunkName: "contactMe" */ '@v/contact-me/index.vue'),
    children: [],
  },
  // 人生小格
  {
    path: '/interesting/life-grid',
    name: 'lifeGrid',
    component: () =>
      import(/* webpackChunkName: "lifeGrid" */ '@v/interesting/life-grid/index.vue'),
    children: [],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
