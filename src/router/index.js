import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Components from '@/views/Components.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/components/:id',
    name: 'components',
    component: Components,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;